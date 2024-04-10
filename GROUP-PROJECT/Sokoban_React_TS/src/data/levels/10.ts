import lvl10image from "../../assets/level_images/level_10.png";
import Clvl10image from "../../assets/power_up_level_images/level_10.png";
const level10 = [
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 3, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 1, 3, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 1, 1, 1, 1, 3, 1, 1, 1, 3],
  [3, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 3, 3, 3, 3, 1, 3],
  [1, 1, 5, 1, 1, 1, 1, 3, 3, 3, 2, 2, 2, 3, 1, 3, 3, 3, 3, 1, 3],
  [1, 3, 2, 2, 3, 3, 3, 2, 2, 3, 2, 3, 3, 3, 1, 4, 4, 4, 4, 1, 1],
  [1, 3, 3, 2, 2, 2, 1, 3, 3, 3, 3, 2, 3, 3, 1, 4, 4, 4, 4, 4, 1],
  [1, 3, 2, 3, 3, 3, 1, 3, 2, 2, 3, 2, 2, 3, 1, 4, 4, 4, 4, 4, 1],
  [1, 1, 1, 3, 3, 3, 1, 3, 3, 2, 3, 3, 3, 3, 1, 4, 4, 4, 4, 4, 1],
  [3, 3, 1, 3, 3, 3, 1, 3, 2, 3, 2, 3, 2, 3, 1, 4, 4, 4, 4, 4, 1],
  [3, 3, 1, 3, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 4, 4, 4, 4, 4, 1],
  [3, 3, 1, 3, 3, 3, 1, 3, 3, 2, 3, 2, 3, 3, 1, 4, 4, 4, 4, 4, 1],
  [3, 3, 1, 1, 1, 3, 1, 3, 2, 2, 3, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1],
  [3, 3, 3, 3, 1, 3, 1, 3, 3, 2, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3],
  [3, 3, 3, 3, 1, 3, 1, 3, 2, 2, 2, 3, 2, 2, 2, 3, 1, 3, 3, 3, 3],
  [3, 3, 3, 3, 1, 3, 1, 3, 3, 3, 3, 3, 3, 3, 1, 3, 1, 3, 3, 3, 3],
  [3, 3, 3, 3, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 3, 3, 3, 3],
  [3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3],
  [3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3],
];

const customLevel10 = [
  [1, 1, 1, 3, 1, 1, 1, 1, 1, 1],
  [1, 1, 2, 1, 1, 2, 3, 3, 20, 1],
  [1, 3, 3, 3, 3, 3, 1, 1, 3, 1],
  [1, 3, 3, 1, 3, 3, 4, 1, 3, 1],
  [1, 3, 1, 1, 1, 1, 1, 1, 3, 1],
  [1, 3, 1, 3, 3, 3, 3, 3, 3, 1],
  [1, 3, 1, 3, 3, 4, 1, 1, 3, 1],
  [1, 3, 1, 1, 3, 1, 1, 3, 3, 1],
  [1, 3, 3, 3, 3, 3, 3, 3, 5, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

export const cl10 = { level: 10, board: customLevel10 , image:Clvl10image};

export const l10 = { level: 10, board: level10, image: lvl10image };