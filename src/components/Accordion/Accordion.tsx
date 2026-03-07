import { Accordion as MuiAccordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ExpandMore } from "@mui/icons-material";

import type { AccordionProps } from "./Accordion.types";

export function Accordion({ items, ...props }: AccordionProps) {
  return (
    <div>
      {items.map((item, index) => (
        <MuiAccordion key={index} {...props}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls={`panel-${index}-content`}
            id={`panel-${index}-header`}
          >
            <Typography component="span">{item.title}</Typography>
          </AccordionSummary>

          <AccordionDetails>{item.description}</AccordionDetails>
        </MuiAccordion>
      ))}
    </div>
  );
}
