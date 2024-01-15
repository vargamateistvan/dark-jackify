const STATISTICKEY = "statistic";

export const getStatistics = () => {
  return JSON.parse(localStorage.getItem(STATISTICKEY));
};
export const addStatistics = (stat) => {
  const statistics = JSON.parse(localStorage.getItem(STATISTICKEY) || "[]");
  statistics.push(stat);
  localStorage.setItem(STATISTICKEY, JSON.stringify(statistics));
};
