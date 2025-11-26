
export const randRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const randChoice = <T,>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];
