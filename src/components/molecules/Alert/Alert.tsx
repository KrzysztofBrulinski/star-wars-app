import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper, AlertWrapper, AlertText } from "./Alert.style";

const Alert = () => {
  const alerts = useSelector((state) => state.alerts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!!alerts.length) {
      setTimeout(() => {
        dispatch({ type: "CLEAR_ALERTS" });
      }, 3000);
    }
  }, [alerts]);
  return (
    <Wrapper>
      {!!alerts.length
        ? alerts.map(({ text, color, id }) => {
            return (
              <AlertWrapper key={id} color={color}>
                <AlertText>{text}</AlertText>
              </AlertWrapper>
            );
          })
        : null}
    </Wrapper>
  );
};

export default Alert;
