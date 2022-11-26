// react form component

import React from "react";

interface FormProps {
  children: React.ReactNode;
}

const Form = ({ children }: FormProps) => {
  return <>{children}</>;
};

export default Form;
