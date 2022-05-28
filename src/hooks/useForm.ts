import { useReducer } from "react";

const actions = {
  inputChange: "INPUT_CHANGE",
  clearForm: "CLEAR_FORM",
  validate: "VALIDATE_FORM",
  showErrorMessage: "SHOW_ERROR_MESSAGE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.inputChange:
      return { ...state, [action.name]: action.value };

    case actions.validate:
      const stateCopy = { ...state };
      const validation = stateCopy.validation[action.name];
      const validationRegex = new RegExp(validation.regex);
      validation.showError =
        !!action.value && !validationRegex.test(action.value);
      return { ...stateCopy, [action.name]: action.value };

    case actions.clearForm:
      return action.initialState;

    case actions.showErrorMessage:
      return { ...state, errorMessage: action.errorMessage };

    default:
      return state;
  }
};

export const useForm = (initialState) => {
  const [formState, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    dispatch({
      type: actions.inputChange,
      name: e.target.name,
      value: e.target.value,
    });

    dispatch({
      type: actions.validate,
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleClearForm = () => {
    dispatch({
      type: actions.clearForm,
      initialState,
    });
  };

  const handleThrowError = (errorMessage) => {
    dispatch({ type: actions.showErrorMessage, errorMessage });
  };

  return { formState, handleInputChange, handleClearForm, handleThrowError };
};
