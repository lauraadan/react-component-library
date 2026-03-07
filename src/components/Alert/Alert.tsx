import MuiAlert from "@mui/material/Alert";
import type { AlertProps } from "./Alert.types";

export function Alert({ children, ...props }: AlertProps) {
  return <MuiAlert {...props}>{children}</MuiAlert>;
}
