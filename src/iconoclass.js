import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import * as Icons from "./lib/icons";

export default class Iconoclass extends React.Component {
  static propTypes = {
    iconName: PropTypes.string.isRequired /* name of icon */,
    title: PropTypes.string /* The title of the icon used in tooltip */,
    iconSize:
      PropTypes.number.isRequired /* bases for witch icon file to use */,
    size: PropTypes.string /* how to size icon - can be px or perc */,
    behavior: PropTypes.oneOf(["passive", "button", "toggle"]),
    round: PropTypes.bool,
    tagName: PropTypes.string,
    elementType: PropTypes.string, // legacy, use tagName
    color: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    checked: PropTypes.bool
  };

  static defaultProps = {
    iconName: "add",
    iconSize: 24,
    behavior: "passive",
    round: false,
    elementType: "div",
    style: {},
    customClassName: "",
    disabled: false,
    onClick: undefined,
    onMouseOver: undefined,
    onMouseOut: undefined
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (!this.props.disabled && this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    // the file px size to use
    let svgFileSize = 24;
    // the actual size to render svg at
    let size = this.props.size ? this.props.size : this.props.iconSize + "px";

    let svgInlineSize = size;
    let color = this.props.color;

    // handle custom defined color names (eg warning, error)
    switch (this.props.color) {
      case "warning":
        color = "#FFE082";
        break;
      case "error":
        color = "#FFAB91";
        break;
      case "positive":
        color = "#D3E3F0";
        break;
      case "neutral":
        color = "#E0E0E0";
        break;
    }

    // find the proper svg file name
    if (
      this.props.iconSize < 24 ||
      (this.props.round == true && this.props.iconSize <= 32)
    ) {
      svgFileSize = 16;
    } else {
      svgFileSize = 24;
    }

    // set the size of the container
    let iconoclassStyle = {
      border: "none",
      borderSpacing: 0,
      padding: 0,
      appearance: "none" /* for mobile safari */,
      width: size,
      height: size,
      borderRadius: `50%`,
      boxSizing: "border-box",
      flex: `0 0 ${size}`
    };

    let focusStyle = {
      position: "absolute",
      top: "-4px",
      left: "-4px",
      right: "-4px",
      bottom: "-4px",
      borderRadius: "50%"
    };

    let iconContainerStyle = {
      display: "block",
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      position: "relative"
    };

    // add style overrides
    if (this.props.style) {
      for (var k in this.props.style) iconoclassStyle[k] = this.props.style[k];
    }

    let svgColor = color;

    let icon = null;

    if (this.props.iconName !== "none" && this.props.iconName !== "") {
      // check to see if icon is available in requested px size
      if (Icons[`${this.props.iconName}${svgFileSize}`]) {
        icon = Icons[`${this.props.iconName}${svgFileSize}`]({
          color: svgColor,
          size: svgInlineSize,
          round: this.props.round
        });
      } else if (Icons[`${this.props.iconName}24`]) {
        // otherwise fallback to standard 24px svg
        icon = Icons[`${this.props.iconName}24`]({
          color: svgColor,
          size: svgInlineSize,
          round: this.props.round
        });
      } else if (this.props.iconName.length <= 2) {
        // optionally use a letter or number as 'icon'
        const fontSize = this.props.iconName.length == 1 ? "22" : "18";
        const svgText = (
          <text
            className='iconoclass__string'
            x='50%'
            y='50%'
            dy={
              `${Math.round(
                fontSize / 3
              )}px` /* NOTE: MS Edge does not support dominant-baseline so manually calculate Y offset */
            }
            fontSize={`${fontSize}px`}
            color={this.props.round ? "black" : svgColor}
            fill='currentColor'
            textAnchor='middle'
          >
            {this.props.iconName}
          </text>
        );

        icon = (
          <svg
            className='iconoclass__svg iconoclass__fill'
            style={{ position: "absolute", top: "0", left: "0" }}
            preserveAspectRatio='xMidYMin'
            width={svgInlineSize}
            height={svgInlineSize}
            viewBox='0 0 24 24'
          >
            {this.props.round ? (
              <g>
                <circle
                  cx='50%'
                  cy='50%'
                  r='50%'
                  fill={svgColor || "currentColor"}
                  mask={`url(#${this.props.iconName}_mask)`}
                />
                <mask id={`${this.props.iconName}_mask`}>
                  <rect x='0' y='0' width='100%' height='100%' fill='white' />
                  <svg
                    x='16.66%'
                    y='16.66%'
                    width='66%'
                    height='66%'
                    viewBox='0 0 24 24'
                    color={this.props.round ? "black" : "currentColor"}
                  >
                    {svgText}
                  </svg>
                </mask>
              </g>
            ) : (
              svgText
            )}
          </svg>
        );
      }
    }

    // style={{ fontSize: `${typeSize}px`, color: svgColor, width: '100%', height: '100%' }}
    const ownProps = {
      className: classnames("iconoclass", this.props.className, {
        "iconoclass--disabled": this.props.disabled,
        "iconoclass--button": this.props.behavior == "button",
        "iconoclass--toggle": this.props.behavior == "toggle",
        "iconoclass--checked":
          this.props.behavior == "toggle" && this.props.checked,
        [this.props.customClassName]: !!this.props.customClassName
      }),
      style: iconoclassStyle
    };

    const userProps = Object.keys(this.props).reduce((userProps, p) => {
      if (
        !(p in ownProps) &&
        p !== "iconName" &&
        p !== "customClassName" &&
        p !== "color" &&
        p !== "tagName" &&
        p !== "elementType" && // legacy
        p !== "iconSize" &&
        p !== "behavior" &&
        p !== "round"
      ) {
        userProps[p] = this.props[p];
      }
      return userProps;
    }, {});

    const TagName = this.props.tagName || this.props.elementType;
    const behavior = this.props.behavior
      ? this.props.behavior
      : TagName === "button"
      ? "button"
      : "passive";

    return (
      <TagName
        {...ownProps}
        {...userProps}
        onClick={this.handleClick}
        role={behavior}
        aria-checked={this.props.checked && this.props.behavior === "toggle"}
        onMouseUp={() => this.myRef.blur()}
        ref={myRef => {
          this.myRef = myRef;
        }}
      >
        {/* <svg
          preserveAspectRatio='xMidYMin'
          style={{ position: "absolute", top: "0", left: "0" }}
          viewBox='0 0 16 16'
          width='100%'
          height='100%'
        >
          <circle cx='8' cy='8' r='8' fill={backgroundColor} />
        </svg> */}
        {(this.props.behavior == "button" || TagName == "button") && (
          <span className='iconoclass__focus' style={focusStyle} />
        )}
        <span className='iconoclass__icon-container' style={iconContainerStyle}>
          {icon}
        </span>
      </TagName>
    );
  }
}
