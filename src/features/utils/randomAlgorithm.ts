const randomInt = (min: number, max: number) =>
  Math.floor(min + Math.random() * (max + 1 - min));
export const generateRandomNums = (n1: number, n2: number, len: number) => {
  let unicArray: number[] = [];
  let i = 0;
  while (i < len) {
    let n = randomInt(n1, n2);
    if (!unicArray.includes(n)) {
      unicArray[i] = n;
      i++;
    }
  }
  return unicArray;
};
