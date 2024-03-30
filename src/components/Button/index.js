import React from "react";
import { Button } from "./styles";

function Buttons({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
}

export default Buttons;
