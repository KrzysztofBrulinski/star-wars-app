import { Input } from "src/components/atoms/Input/Input";
import { Label } from "src/components/atoms/Label/Label.style";
import { Wrapper, Error } from "./FormField.style";

type Props = {
  value: string;
  onChange?: (e: any) => void;
  label: string;
  name: string;
  id: string;
  required: boolean;
  type?: string;
  customTag?: string;
  validation: { errorMessage: string; showError: boolean };
};

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
}: Props) => {
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
