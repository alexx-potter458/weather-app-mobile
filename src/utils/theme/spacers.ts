export type SpacerIndex = keyof typeof spaces;

const spaces = {
  0: 0,
  1: 4,
  2: 8,
  3: 16,
  4: 32,
  5: 64,
  6: 96,
};

export const spacing = (index: SpacerIndex) => {
  return spaces[index];
};
