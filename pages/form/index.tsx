import { CharacterWrapper } from "src/assets/styles/GlobalStyledComponent/CharacterWrapper.style";
import FormField from "src/components/molecules/FormField/FormField";
import { useForm } from "src/hooks/useForm";
import { Button } from "src/components/atoms/Button/Button";
import { Wrapper, Error } from "./form.style";
import { useDispatch } from "react-redux";

const polishLetters =
  "AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  postalCode: "",
  telephoneNumber: "",
  message: "",
  errorMessage: "",
  validation: {
    firstName: {
      errorMessage: "Invalid format",
      regex: `^[${polishLetters}]+$`,
      showError: false,
    },
    lastName: {
      errorMessage: "Invalid format",
      regex: `^[${polishLetters}]+$`,
      showError: false,
    },
    email: {
      errorMessage: "Invalid email format",
      regex: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}/,
      showError: false,
    },
    postalCode: {
      errorMessage: "Invalid postal code format",
      regex: /^[0-9]{2}-[0-9]{3}$/,
      showError: false,
    },
    telephoneNumber: {
      errorMessage: "Invalid format",
      regex:
        /(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-8]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}/,
      showError: false,
    },
    message: { errorMessage: "", regex: `.*`, showError: false },
  },
};

const Form = () => {
  const { formState, handleInputChange, handleClearForm, handleThrowError } =
    useForm(initialFormState);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationState = Object.values(formState.validation);

    if (!!validationState.find(({ showError }) => showError)) {
      const errorMessage = "The form fields are not in the correct format";
      handleThrowError("The form fields are not in the correct format");
      dispatch({
        type: "SET_ALERT",
        value: {
          text: errorMessage,
          color: "darkRed",
          id: new Date().getTime() + "",
        },
      });
    } else {
      const formData = [...e.target]
        .filter((el) => el.tagName === "INPUT" || el.tagName === "TEXTAREA")
        .map(({ name, value }) => ({ name, value }));
      dispatch({
        type: "SET_ALERT",
        value: {
          text: "Success! Your request has been send!",
          color: "green",
          id: new Date().getTime() + "",
        },
      });
      console.log("collected data", formData);

      handleClearForm();
    }
  };
  return (
    <Wrapper>
      <CharacterWrapper as="form" onSubmit={handleSubmit}>
        <h2>Contact form</h2>
        <FormField
          label="First name"
          id="firstName"
          name="firstName"
          value={formState.firstName}
          validation={formState.validation.firstName}
          onChange={handleInputChange}
          required
        />
        <FormField
          label="Last name"
          id="lastName"
          name="lastName"
          value={formState.lastName}
          validation={formState.validation.lastName}
          onChange={handleInputChange}
          required
        />
        <FormField
          label="Email"
          id="email"
          name="email"
          value={formState.email}
          validation={formState.validation.email}
          onChange={handleInputChange}
          required
        />
        <FormField
          label="Postal code"
          id="postalCode"
          name="postalCode"
          value={formState.postalCode}
          validation={formState.validation.postalCode}
          onChange={handleInputChange}
          required
        />
        <FormField
          label="Telephone number"
          id="telephoneNumber"
          name="telephoneNumber"
          type="number"
          value={formState.telephoneNumber}
          validation={formState.validation.telephoneNumber}
          onChange={handleInputChange}
          required
        />
        <FormField
          label="Your message"
          id="message"
          name="message"
          value={formState.message}
          validation={formState.validation.message}
          customTag="textarea"
          onChange={handleInputChange}
          required
        />
        <Button isBig>Send</Button>

        {formState.errorMessage ? (
          <Error>{formState.errorMessage}</Error>
        ) : null}
      </CharacterWrapper>
    </Wrapper>
  );
};

export default Form;
