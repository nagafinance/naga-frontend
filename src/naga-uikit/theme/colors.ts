import { Colors } from "./types";

export const baseColors = {
  failure: "#246A3C",
  primary: "#246A3C",
  primaryBright: "#aa8929",
  primaryDark: "#aa8929",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#246A3C",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#17572B",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#050505",
  background: "#27262c",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#050505",
  input: "#483f5a",
  primaryDark: "#050505",
  tertiary: "#808988",
  text: "#D4FFAE",
  textDisabled: "#ABFF62",
  textSubtle: "#ABFF62",
  borderColor: "#246A3C",
  card: "#000D0C",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
