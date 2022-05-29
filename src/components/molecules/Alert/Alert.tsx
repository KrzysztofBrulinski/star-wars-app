import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper, AlertWrapper, AlertText } from "./Alert.style";
import { StateTypes } from "src/store/reducers/reducers";

const Alert = () => {
  const alerts = useSelector((state: StateTypes) => state.alerts);
  const dispatch = useDispatch();
  const alertTime = 3000;

  useEffect(() => {
    if (!!alerts.length) {
      setTimeout(() => {
        dispatch({ type: "CLEAR_ALERTS" });
      }, alertTime);
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
