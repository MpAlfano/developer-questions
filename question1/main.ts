export function isValidWalk(walk: string[]): boolean {
  const walkObj = { n: 0, s: 0, w: 0, e: 0 };

  if (walk.length !== 10) return false;

  for (let i = 0; i < walk.length; i++) {
    walkObj[walk[i]]++;
  }

  if (walkObj["n"] === walkObj["s"] && walkObj["w"] === walkObj["e"]) {
    return true;
  }

  return false;
}
