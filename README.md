# @scipe/iconoclass

[![CircleCI](https://circleci.com/gh/science-periodicals/iconoclass.svg?style=svg&circle-token=9d37bd45b14c4b78b5b30beaf995259b8cf40584)](https://circleci.com/gh/science-periodicals/iconoclass)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

One component to manage all of sci.pe icons. See
https://science-periodicals.github.io/iconoclass/index.html for example of all
icons.

Note: this module is auto published to npm on CircleCI. Only run `npm version
patch|minor|major` and let CI do the rest.

## Usage

```
npm install @scipe/iconoclass
```

### Component Properties

+ iconName: (string - required) The name of the icon or a single char. Single characters will be used as icons.
+ title: (string) Tooltip text / title attribute
+ size: (string) the size of the icon - should be in the form of '24px' or '100%', etc. Defaults to '24px'
+ iconSize: (number) the icon svg file dimensions - will search for svg with this size, but if none exists defaults to 24px;
+ behavior: (string) either 'button' or 'passive'
+ round: (bool) if true, icon will appear in white inside of circle.
  - in standard usage, round is used for passive icons and non-round for buttons/clickable icons.
+ elementType: (string) the DOM element to use (div, span, etc)
+ color: (string) accepts any standard color string - if not set, will default to .iconoclass CCS class.
+ style: (object) set inline styles to override component default styles.
+ disabled: (bool) adds a 'disabled' attribute

Event handlers (onClick etc..) will be passed down.

### Styling and Pseudo Classes

+ if color property is set it will override all css styles
+ color may also be set by setting the color of the iconoclass class or pseudo classes.

### CSS example
```css
.iconoclass{
  color: red;
}
.iconoclass:hover{
  color: orange;
}
```

## Adding Icons

+ New svg files may be added to public/svgs using the naming convention: `icon_[icon_name]_[px-size]px.svg`
+ Then `npm run build`

## Updating gh-pages

```npm run subtree-push```

## License

`@scipe/iconoclass` is dual-licensed under commercial and open source licenses
([AGPLv3](https://www.gnu.org/licenses/agpl-3.0.en.html)) based on the intended
use case. Contact us to learn which license applies to your use case.
