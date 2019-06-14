export const enum Maps {
  C1_1 = '1-1', C1_2 = '1-2', C1_3 = '1-3', C1_4 = '1-4',
  C2_1 = '2-1', C2_2 = '2-2', C2_3 = '2-3', C2_4 = '2-4',
  C3_1 = '3-1', C3_2 = '3-2', C3_3 = '3-3', C3_4 = '3-4',
  C4_1 = '4-1', C4_2 = '4-2', C4_3 = '4-3', C4_4 = '4-4',
  C5_1 = '5-1', C5_2 = '5-2', C5_3 = '5-3', C5_4 = '5-4',
  C6_1 = '6-1', C6_2 = '6-2', C6_3 = '6-3', C6_4 = '6-4',
  C7_1 = '7-1', C7_2 = '7-2', C7_3 = '7-3', C7_4 = '7-4',
  C8_1 = '8-1', C8_2 = '8-2', C8_3 = '8-3', C8_4 = '8-4',
  C9_1 = '9-1', C9_2 = '9-2', C9_3 = '9-3', C9_4 = '9-4',
  C10_1 = '10-1', C10_2 = '10-2', C10_3 = '10-3', C10_4 = '10-4',
  C11_1 = '11-1', C11_2 = '11-2', C11_3 = '11-3', C11_4 = '11-4',
  C12_1 = '12-1', C12_2 = '12-2', C12_3 = '12-3', C12_4 = '12-4'
}

export interface MapEXP {
  small: number,
  medium?: number,
  large?: number,
  boss: number
}

export type EXPTable = Record<Maps, MapEXP>

const table: EXPTable = {
  '1-1': { small: 96, boss: 180 },
  '5-1': { small: 396, medium: 435, large: 475, boss: 583 },
  '9-1': { small: 600, medium: 660, large: 720, boss: 872 },
  '1-2': { small: 120, medium: 132, boss: 204 },
  '5-2': { small: 414, medium: 456, large: 496, boss: 609 },
  '9-2': { small: 612, medium: 673, large: 734, boss: 890 },
  '1-3': { small: 132, medium: 144, boss: 216 },
  '5-3': { small: 423, medium: 475, large: 518, boss: 634 },
  '9-3': { small: 624, medium: 686, large: 748, boss: 907 },
  '1-4': { small: 156, medium: 168, boss: 252 },
  '5-4': { small: 450, medium: 495, large: 540, boss: 661 },
  '9-4': { small: 636, medium: 699, large: 763, boss: 924 },
  '2-1': { small: 180, medium: 198, large: 216, boss: 270 },
  '6-1': { small: 468, medium: 514, large: 561, boss: 687 },
  '10-1': { small: 648, medium: 712, large: 777, boss: 948 },
  '2-2': { small: 198, medium: 218, large: 237, boss: 296 },
  '6-2': { small: 486, medium: 535, large: 583, boss: 714 },
  '10-2': { small: 654, medium: 720, large: 784, boss: 957 },
  '2-3': { small: 216, medium: 237, large: 259, boss: 321 },
  '6-3': { small: 504, medium: 554, large: 604, boss: 739 },
  '10-3': { small: 666, medium: 732, large: 799, boss: 974 },
  '2-4': { small: 234, medium: 258, large: 280, boss: 348 },
  '6-4': { small: 522, medium: 574, large: 626, boss: 765 },
  '10-4': { small: 678, medium: 745, large: 813, boss: 991 },
  '3-1': { small: 252, medium: 277, large: 302, boss: 374 },
  '7-1': { small: 534, medium: 588, large: 640, boss: 783 },
  '11-1': { small: 863, medium: 948, large: 1034, boss: 1261 },
  '3-2': { small: 270, medium: 297, large: 323, boss: 400 },
  '7-2': { small: 546, medium: 601, large: 655, boss: 800 },
  '11-2': { small: 870, medium: 956, large: 1044, boss: 1272 },
  '3-3': { small: 288, medium: 316, large: 345, boss: 426 },
  '7-3': { small: 558, medium: 614, large: 669, boss: 818 },
  '11-3': { small: 877, medium: 963, large: 1052, boss: 1281 },
  '3-4': { small: 306, medium: 337, large: 367, boss: 452 },
  '7-4': { small: 570, medium: 627, large: 684, boss: 835 },
  '11-4': { small: 884, medium: 973, large: 1062, boss: 1293 },
  '4-1': { small: 324, medium: 356, large: 337, boss: 478 },
  '8-1': { small: 552, medium: 607, large: 662, boss: 808 },
  '12-1': { small: 900, medium: 990, large: 1080, boss: 1315 },
  '4-2': { small: 342, medium: 376, large: 410, boss: 505 },
  '8-2': { small: 564, medium: 620, large: 676, boss: 826 },
  '12-2': { small: 907, medium: 997, large: 1088, boss: 1326 },
  '4-3': { small: 360, medium: 396, large: 432, boss: 530 },
  '8-3': { small: 576, medium: 633, large: 691, boss: 843 },
  '12-3': { small: 914, medium: 1005, large: 1098, boss: 1338 },
  '4-4': { small: 378, medium: 416, large: 453, boss: 556 },
  '8-4': { small: 588, medium: 646, large: 705, boss: 853 },
  '12-4': { small: 921, medium: 1014, large: 1106, boss: 1347 }
}
// parsing: https://git.io/fj2ak

export default table