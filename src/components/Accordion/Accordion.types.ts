import type { AccordionProps as MuiAccordionProps } from "@mui/material/Accordion";

export interface AccordionItem {
  title: string;
  description: string;
}

export interface AccordionProps extends Omit<MuiAccordionProps, "children"> {
  items: AccordionItem[];
}
