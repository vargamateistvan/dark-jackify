const numbersInText = {
  1: "EGY",
  2: "KETTŐ",
  3: "HÁROM",
  4: "NÉGY",
  5: "ÖT",
  6: "HAT",
  7: "HÉT",
  8: "NYOLC",
  9: "KILENC",
  10: "TÍZ",
  11: "T.EGY",
  12: "T.KETTŐ",
  13: "T.HÁROM",
  14: "T.NÉGY",
  15: "T.ÖT",
  16: "T.HAT",
  17: "T.HÉT",
  18: "T.NYOLC",
  19: "T.KILENC",
  20: "HÚSZ",
  21: "H.EGY",
};

const prizesInText = {
  500: "ÖTSZÁZ",
  1000: "EZER",
  5000: "ÖTEZER",
  10000: "TÍZEZER",
  100000: "SZÁZEZER",
};

export const getNumberText = (number) => {
  return numbersInText[number];
};

export const getPrizeText = (prize) => {
  return prizesInText[prize];
};
