type IIsHexColor = (color?: string) => string | false;

type RippleConfig = {
  android_ripple: {
    color: string;
    borderless: boolean;
  };
};

type IAndroid_ripple = (color?: string) => RippleConfig;

export { IIsHexColor, IAndroid_ripple };
