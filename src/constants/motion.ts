import type { Transition } from 'framer-motion';

export const springConfig: Transition = {
  type: 'spring',
  stiffness: 150,
  damping: 20,
  mass: 1,
};

export const springFast: Transition = {
  type: 'spring',
  stiffness: 250,
  damping: 25,
  mass: 1,
};

export const springSlow: Transition = {
  type: 'spring',
  stiffness: 80,
  damping: 20,
  mass: 1.2,
};
