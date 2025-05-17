type HexColor = `#${string}`;
type RGBColor = `rgb(${number}, ${number}, ${number})`;
type RGBAColor = `rgba(${number}, ${number}, ${number}, ${number})`;
type HSLColor = `hsl(${number}, ${number}%, ${number}%)`;
type HSLAColor = `hsla(${number}, ${number}%, ${number}%, ${number})`;

type NamedColor =
  | 'black'
  | 'white'
  | 'red'
  | 'green'
  | 'blue'
  | 'yellow'
  | 'cyan'
  | 'magenta'
  | 'gray'
  | 'grey'
  | 'orange'
  | 'purple'
  | 'pink'
  | 'brown'
  | 'lime'
  | 'teal'
  | 'navy'
  | 'maroon'
  | 'olive'
  | 'aqua'
  | 'fuchsia'
  | 'silver';

type CSSColor =
  | HexColor
  | RGBColor
  | RGBAColor
  | HSLColor
  | HSLAColor
  | NamedColor;

export { CSSColor };
