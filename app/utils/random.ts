'use server';

import { randomInt } from 'crypto';

export const getRandom = () => {
  const random = randomInt(0, 100);
  return random;
};
