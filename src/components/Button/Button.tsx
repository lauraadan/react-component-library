import React from 'react';
import MuiButton from '@mui/material/Button';
import type { ButtonProps } from './Button.types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <MuiButton ref={ref} {...props} />;
  },
);
