import { useForm } from "../../functional/organisms/useForm";
import { FormUI } from "../../ui/organisms/FormUI";

export const FormContainer = () => {
  const { ...props } = useForm();
  return <FormUI {...props} />;
};
