import "./example.css";
import React from "react";
import ReactDOM from "react-dom";
import Iconoclass from "../src/iconoclass";
import iconNames from "../src/lib/iconNames.js";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
      iconoClassRegistry: []
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    // console.log(iconNames);
    this.icons = iconNames;
    this.icons.push("A", "1", "b", "H1", "none", "");
  }

  componentDidMount() {
    this.handleUpdate();
  }

  componentWillUnmount() {}

  handleUpdate() {
    let color = this.refs.formColor.value;
    let iconSize = Number(this.refs.formIconSize.value);
    let size = this.refs.formSize.value;
    let containerSize = this.refs.formContainerSize.value;
    console.log("update ", { color, size, iconSize });
    this.setState({
      color: color,
      iconSize,
      size: size,
      containerSize: containerSize
    });
  }

  registerIcon(r, i) {
    //  console.log('ref: ', r, i);
    //this.state.iconoClassRegistry[i] = false;
    //let newArray = this.state.iconoClassRegistry.slice();
    //newArray[i] = newArray[i] || false;
    //this.setState({iconoClassRegistry: newArray});
  }

  handleClick(e, i) {
    console.log("test: ", this.state.iconoClassRegistry[i], e.target);
    let newArray = this.state.iconoClassRegistry.slice();
    newArray[i] = newArray[i] == true ? false : true;
    console.log(this.state.iconoClassRegistry[i], newArray[i]);
    this.setState({ iconoClassRegistry: newArray });
  }

  render() {
    let iconoclasses = this.icons.map((iconName, i) => {
      return (
        <div className='demo-icon-group' key={i}>
          <div
            style={{
              display: "inline-flex",
              justifyContent: "center",
              margin: "8px",
              overflow: "hidden"
            }}
          >
            <div
              className='demo-icon'
              style={{
                width: this.state.containerSize,
                height: this.state.containerSize,
                padding: "8px"
              }}
            >
              <Iconoclass
                iconName={iconName}
                size={this.state.size}
                iconSize={this.state.iconSize}
                color={this.state.color}
                elementType='button'
                behavior='toggle'
                checked={this.state.iconoClassRegistry[i]}
                onClick={e => this.handleClick(e, i)}
                ref={r => this.registerIcon(r, i)}
              />
            </div>
            <br />
            <div
              className='demo-icon'
              style={{
                width: this.state.containerSize,
                height: this.state.containerSize,
                padding: "8px"
              }}
            >
              <Iconoclass
                iconName={iconName}
                size={this.state.size}
                iconSize={this.state.iconSize}
                round={true}
                color={this.state.color}
              />
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: "10px",
              width: "100%",
              margin: "4px 0",
              color: "black",
              textOverflow: "ellipsis"
            }}
          >
            {iconName}
          </div>
        </div>
      );
    });

    return (
      <div
        className='iconoclass-demo'
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          margin: "32px"
        }}
      >
        <h2>Iconoclass</h2>
        <p>
          As a general rule, use normal icons for buttons and round icons for
          passives or status symbols.
        </p>
        <p>Icons are optimized for use at 16px, 24px, 32px and 40px </p>
        <p>Delete color string to use .iconoclass css class</p>
        <div className='demo-controls'>
          <form>
            <div className='demo-controls__line'>
              <div className='demo-controls__label'>container size:</div>
              <input
                ref='formContainerSize'
                defaultValue='32px'
                className='controls__containerSize'
                onKeyUp={this.handleUpdate}
              />
              <div className='demo-controls__def'>
                {" "}
                - the size of the div containing the iconoclass component (eg:
                64px)
              </div>
            </div>
            <div className='demo-controls__line'>
              <div className='demo-controls__label'>color:</div>
              <input
                ref='formColor'
                defaultValue='grey'
                className='controls__color'
                onKeyUp={this.handleUpdate}
              />
              <div className='demo-controls__def'>
                {" "}
                - color attribute. Overrides the css color style (eg: red)
              </div>
            </div>
            <div className='demo-controls__line'>
              <div className='demo-controls__label'>iconSize:</div>
              <input
                ref='formIconSize'
                defaultValue='24'
                className='controls__iconSize'
                onKeyUp={this.handleUpdate}
              />
              <div className='demo-controls__def'>
                {" "}
                - the icon svg size to use. no units. usually 16 or 24 (eg: 24)
              </div>
            </div>
            <div className='demo-controls__line'>
              <div className='demo-controls__label'>size:</div>
              <input
                ref='formSize'
                defaultValue='24px'
                className='controls__size'
                onKeyUp={this.handleUpdate}
              />
              <div className='demo-controls__def'>
                {" "}
                - the size of icon. (eg: 100% or 24px), if not set will fall
                back to iconSize
              </div>
            </div>
          </form>
        </div>
        <br />

        {iconoclasses}
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
