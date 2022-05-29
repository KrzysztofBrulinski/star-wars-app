import { GalaxyWrapper } from "./Galaxy.style";
import { ReactNode, useEffect, useRef } from "react";
import { theme } from "src/assets/styles/theme";
import {
  generateSmallStars,
  generateBigStars,
  setBodyBackgroundImage,
} from "./Galaxy.utils";
import { useDispatch, useSelector } from "react-redux";
import { StateTypes } from "src/store/reducers/reducers";

type Props = { children: ReactNode };

const Galaxy = ({ children }: Props) => {
  const canvas = useRef(null);
  const dispatch = useDispatch();
  let galaxyBackgroundImage = useSelector(
    (state: StateTypes) => state.galaxyBackgroundImage
  );

  useEffect(() => {
    if (!!!galaxyBackgroundImage) {
      const windowWidth = window.document.body.clientWidth;
      const windowHeight = window.document.body.clientHeight;

      canvas.current.setAttribute("width", windowWidth);
      canvas.current.setAttribute("height", windowHeight);

      const canvasCtx: CanvasRenderingContext2D =
        canvas.current.getContext("2d");

      canvasCtx.fillStyle = theme.colors.black;
      canvasCtx.fillRect(0, 0, windowWidth, windowHeight);

      generateSmallStars(2000, 1, canvasCtx, windowWidth, windowHeight);
      generateSmallStars(500, 2, canvasCtx, windowWidth, windowHeight);
      canvasCtx.restore();
      canvasCtx.save();
      generateBigStars(1000, 1, canvasCtx, windowWidth, windowHeight);
      generateBigStars(50, 2, canvasCtx, windowWidth, windowHeight);
      canvasCtx.restore();
      canvasCtx.save();
      const sky = new Image();
      sky.src = canvas.current.toDataURL("image/png");

      setBodyBackgroundImage(sky.src);
      dispatch({ type: "SET_GALAXY_BACKGROUND", value: sky.src });
    } else {
      setBodyBackgroundImage(galaxyBackgroundImage);
    }
  }, []);
  return (
    <GalaxyWrapper>
      <canvas id="canvas" ref={canvas}></canvas>
      {children}
    </GalaxyWrapper>
  );
};

export default Galaxy;
