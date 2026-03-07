import MuiButton from "@mui/material/Button";
import type { ButtonProps } from "./Button.types";

export function Button({ children, ...props }: ButtonProps) {
  return <MuiButton {...props}>{children}</MuiButton>;
}
