interface ITransfomrToFontProps {
  w: number;
  r: number;
}
const TransformToFont = ({ w, r }: ITransfomrToFontProps): string =>
  `font:${w} normal ${r}px Roboto;
   line-height:${r * 1.5}px
  `;
export const font = {
  DISPLAY_LARGE: TransformToFont({ w: 400, r: 57 }),
  DISPLAY_MEDIUM: TransformToFont({ w: 400, r: 45 }),
  DISPLAY_SMALL: TransformToFont({ w: 400, r: 36 }),
  HEADLINE_LARGE: TransformToFont({ w: 400, r: 32 }),
  HEADLINE_MEDIUM: TransformToFont({ w: 400, r: 28 }),
  HEADLINE_SMALL: TransformToFont({ w: 400, r: 24 }),
  TITLE_LAGRE: TransformToFont({ w: 400, r: 22 }),
  TITLE_MEDIUM: TransformToFont({ w: 500, r: 16 }),
  TITLE_SMALL: TransformToFont({ w: 500, r: 14 }),
  LABEL_LARGE: TransformToFont({ w: 500, r: 14 }),
  LABEL_MEDIUM: TransformToFont({ w: 500, r: 12 }),
  LABEL_SMALL: TransformToFont({ w: 500, r: 11 }),
  BODY_LARGE: TransformToFont({ w: 400, r: 16 }),
  BODY_MEDIUM: TransformToFont({ w: 400, r: 14 }),
  BODY_SMALL: TransformToFont({ w: 400, r: 12 }),
} as const;
export const color = {
  PRIMARY: "#D0BCFF",
  ON_PRIMARY: "#381E72",
  PRIMARY_CONTAINER: "#4F378B",
  ON_PRIMARY_CONTAINER: "#EADDFF",
  SECONDARY: "#CCC2DC",
  ON_SECONDARY: "#332D41",
  SECONDARY_CONTAINER: "#4A4458",
  ON_SECONDARY_CONTAINER: "#E8DEF8",
  TERTIARY: "#EFB8C8",
  ON_TERTIARY: "#492532",
  TERTIARY_CONTAINER: "#633B48",
  ON_TERTIARY_CONTAINER: "#FFD8E4",
  ERROR: "#F2B8B5",
  ON_ERROR: "#601410",
  ERROR_CONTAINER: "#8C1D18",
  ON_ERROR_CONTAINER: "#F9DEDC",
  BACKGROUND: "#1C1B1F",
  ON_BACKGROUND: "#E6E1E5",
  SURFACE: "#1C1B1F",
  ON_SURFACE: "#E6E1E5",
  SURFACE_VARIENT: "#49454F",
  ON_SURFACE_VARIENT: "#CAC4D0",
  OUTLINE: "#938F99",
  OUTLINE_VARIENT: "#49454F",
} as const;
export const theme = {
  color,
  font,
};
