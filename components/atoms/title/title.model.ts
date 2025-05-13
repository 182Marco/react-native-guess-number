interface ITitleProps {
  text: string;
  padding?: string;
}

type ITitle = React.FC<ITitleProps>;

type ITitleStyle = Omit<ITitleProps, 'text'>;

export { ITitle, ITitleStyle };
