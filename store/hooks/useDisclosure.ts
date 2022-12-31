import { useState } from 'react';

export function useDisclosure(defaultState = false) {
  const [open, setOpen] = useState(defaultState);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggle = () => {
    setOpen(!open);
  };

  return { open, handleOpen, handleClose, toggle };
}
