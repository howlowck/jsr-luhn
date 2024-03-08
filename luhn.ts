/**
 * This function checks for the validity of a string (for example credit card string) using the Luhn Check algorithm
 *
 * @param numStr
 * @returns
 */
export function check(numStr: string): boolean {
  const checksum: number = +numStr.slice(-1);
  const numRevArray: string[] = [...numStr.slice(0, -1)].reverse();
  let total = 0;
  for (let i = 0; i < numRevArray.length; i++) {
    const num = numRevArray[i];
    let s: number;
    let val: number;
    let rem: number;
    if (i % 2 == 0) {
      val = +num * 2;
      rem = val % 10;
      s = val / 10 >= 1 ? 1 + rem : rem;
    } else {
      s = +num;
    }
    total += s;
  }
  total += checksum;
  return total % 10 === 0;
}
