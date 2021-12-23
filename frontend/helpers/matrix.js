//Validate if position is the actual
export function isPosition(position, i, j) {
  return (position && position[0] == i && position[1] == j);
}

//Get max value of 2D arrray
export function getMaxDimension(arr) {
  return Math.max(...arr.flat())
}