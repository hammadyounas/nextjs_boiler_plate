import { useForm } from "../../functional/organisms/useForm";
import { BannerUIContainer } from "../molecules/BannedUIContainer";
import { FormContainer } from "../organisms/FormContainer";

export const LoginPage = () => {
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <FormContainer />
      <BannerUIContainer />
    </section>
  );
};
