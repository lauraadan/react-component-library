import type { CardProps as MuiCardProps } from "@mui/material/Card";

export interface CardProps extends MuiCardProps {
  title?: string;
  image?: string;
  imageAlt?: string;
  text?: string;
}
