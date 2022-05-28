import { Input } from "src/components/atoms/Input/Input";
import { Label } from "src/components/atoms/Label/Label.style";
import { Wrapper, Error } from "./FormField.style";

const FormField = ({
  value,
  onChange,
  label,
  name,
  id,
  required,
  type = "text",
  customTag = "",
  validation = { errorMessage: "", showError: false },
}) => {
  return (
    <Wrapper isError={validation.showError}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        as={customTag}
        name={name}
        id={id}
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        isError={validation.showError}
      />
      {validation.showError ? <Error>{validation.errorMessage}</Error> : null}
    </Wrapper>
  );
};

export default FormField;
