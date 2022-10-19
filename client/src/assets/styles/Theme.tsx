import { css, FlattenSimpleInterpolation } from "styled-components";

export const theme = {
  breakPoints: {
    mobile: "480px",
    tablet: "760px",
    desktop: "1280px",
  },
  colors: {
    black010: "#F5F5F5",
    black025: "#eeeeee",
    black050: "#D6D6D6",
    black100: "#c0c0c0",
    black200: "#a5a5a5",
    black250: "#797979",
    black300: "#707070",
    black400: "#434343",
    black500: "#161616",

    orange010: "#FFF0C2",
    orange025: "#FFE699",
    orange075: "#FFDB70",
    orange500: "#ffc107",
  },
  fontSizes: {
    mainH1: "35px",
    mainH2: "30px",
    mainH3: "25px",
    mainH4: "20px",
    mainH5: "15px",
    mobileH1: "18px",
    mobileH2: "18px",
    mobileH3: "15px",
    subPageH1: "35px",
  },
};

export const mobile = (styles: FlattenSimpleInterpolation) => css`
  @media screen and (max-width: ${theme.breakPoints.mobile}) {
    ${styles}
  }
`;

export const tablet = (styles: FlattenSimpleInterpolation) => css`
  @media screen and (max-width: ${theme.breakPoints.tablet}) {
    ${styles}
  }
`;

export const desktop = (styles: FlattenSimpleInterpolation) => css`
  @media screen and (max-width: ${theme.breakPoints.desktop}) {
    ${styles}
  }
`;

export const breakPoints = (
  breakPoint: number,
  styles: FlattenSimpleInterpolation
) => css`
  @media screen and (max-width: ${breakPoint}px) {
    ${styles}
  }
`;

export const colors = (code: keyof typeof theme.colors) => {
  return theme.colors[code];
};

export const fontSizes = (code: keyof typeof theme.fontSizes) => css`
  font-size: ${theme.fontSizes[code]};
`;
