export function findOutlier(integers: number[]): number {
  let checkEven = true;

  if ((integers[0] % 2) + (integers[1] % 2) + (integers[2] % 2) >= 2) {
    checkEven = false;
  }

  return integers.filter((num) => (num % 2 === 0) !== checkEven)[0];
}
