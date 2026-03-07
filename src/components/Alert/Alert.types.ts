import type { AlertProps as MuiAlertProps } from "@mui/material/Alert";

export interface AlertProps extends MuiAlertProps {
  children?: React.ReactNode;
}
