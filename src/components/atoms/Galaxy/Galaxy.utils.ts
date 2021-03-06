import { theme } from "src/assets/styles/theme";

type generateRandomValuesTypes = {
  left: number;
  top: number;
  color1: number;
  color2: number;
  opacity: number;
};

const generateRandomValues = (
  windowWidth: number,
  windowHeight: number
): generateRandomValuesTypes => {
  const left = Math.floor(Math.random() * windowWidth) + 1;
  const top = Math.floor(Math.random() * windowHeight) + 1;
  const color1 = Math.floor(Math.random() * 106) + 150;
  const color2 = Math.floor(Math.random() * 106) + 150;
  const opacity = Math.floor(Math.random() * 11) / 10;

  return { left, top, color1, color2, opacity };
};

export const generateSmallStars = (
  starNumber: number,
  starSize: number,
  ctx: CanvasRenderingContext2D,
  windowWidth: number,
  windowHeight: number
) => {
  for (let i = 0; i < starNumber; i++) {
    const { left, top, color1, color2, opacity } = generateRandomValues(
      windowWidth,
      windowHeight
    );
    ctx.beginPath();
    ctx.fillStyle =
      "rgba(" + color1 + ", " + color2 + ", " + 255 + ", " + opacity + ")";
    ctx.fillRect(left, top, starSize, starSize);
    ctx.fill();
  }
};

export const generateBigStars = (
  starNumber: number,
  starSize: number,
  ctx: CanvasRenderingContext2D,
  windowWidth: number,
  windowHeight: number
) => {
  for (let i = 0; i < starNumber; i++) {
    const { left, top, color1, color2, opacity } = generateRandomValues(
      windowWidth,
      windowHeight
    );
    ctx.beginPath();
    const radgrad = ctx.createRadialGradient(left, top, 0, left, top, starSize);
    radgrad.addColorStop(0, theme.colors.white);
    radgrad.addColorStop(
      1,
      "rgba(" + color1 + ", " + color2 + ", " + 255 + ", " + opacity + ")"
    );
    ctx.fillStyle = radgrad;
    ctx.arc(left, top, starSize, 0, Math.PI * 2, true);
    ctx.fill();
  }
};

export const setBodyBackgroundImage = (img: string): void => {
  document.body.style.background = `url(${img})`;
};
