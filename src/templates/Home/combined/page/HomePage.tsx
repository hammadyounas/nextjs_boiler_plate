import React from "react";
import useHomeLogic from "../../functional/organisms/useList";
import FormOrganism from "@/components/organisms/FormOrganism";
import { ListUIContainer } from "../organisms/ListUIContainer";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home Page with Combined Logic</h1>
      <div className="container mx-auto p-4 bg-red-300">
      <FormOrganism  />
      <ListUIContainer/>
    </div>
    </div>
  );
};

export default HomePage;
