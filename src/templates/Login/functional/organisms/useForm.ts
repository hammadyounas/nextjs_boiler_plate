import { useState } from "react";

export const useForm = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((form) => ({ ...form, [name]: value }));
  };
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted" + JSON.stringify(formValues));
  };

  return {
    handleInputChange,
    handleSubmit,
    ...formValues,
  };
};
