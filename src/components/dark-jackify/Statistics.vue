<template>
  <div class="dark-jackify-statistics">
    <span class="dark-jackify-statistics-text"
      >Winrate: {{ formatPercentage(winrate) }} &nbsp;</span
    >
    <span class="dark-jackify-statistics-text"
      >Bonus game winrate: {{ formatPercentage(bonusGameWinrate) }}</span
    >
    <br />
    <span class="dark-jackify-statistics-text"
      >500 Ft:{{
        formatPercentage(prizeRates[500] / statisticsCount)
      }}
      &nbsp;</span
    >
    <span>&nbsp;</span>
    <span class="dark-jackify-statistics-text"
      >1000 Ft:{{
        formatPercentage(prizeRates[1000] / statisticsCount)
      }}
      &nbsp;</span
    >
    <span>&nbsp;</span>
    <span class="dark-jackify-statistics-text"
      >5000 Ft:{{
        formatPercentage(prizeRates[5000] / statisticsCount)
      }}
      &nbsp;</span
    >
    <span>&nbsp;</span>
    <span class="dark-jackify-statistics-text"
      >10000 Ft:{{
        formatPercentage(prizeRates[10000] / statisticsCount)
      }}
      &nbsp;</span
    >
    <span>&nbsp;</span>
    <span class="dark-jackify-statistics-text"
      >100000 Ft:{{
        formatPercentage(prizeRates[100000] / statisticsCount)
      }}
      &nbsp;</span
    >
  </div>
</template>

<script>
import { getStatistics } from "../../utils/localStorage";

export default {
  data() {
    return {
      statistics: [],
      statisticsCount: 0,
      winrate: 0,
      bonusGameWinrate: 0,
      prizeRates: {
        500: 0,
        1000: 0,
        5000: 0,
        10000: 0,
        100000: 0,
      },
    };
  },
  methods: {
    getStatisticsFromLocalStorage() {
      this.statistics = getStatistics();
      this.statisticsCount = this.statistics.length;
    },
    getWinrate() {
      const winnedGames = this.statistics.filter((stat) => stat.isPlayerWins);
      this.winrate = winnedGames.length / this.statisticsCount;
    },
    getBonusGameWinrate() {
      const winnedBonusGames = this.statistics.filter(
        (stat) => !stat.isPlayerWins && stat.isBonusGameWins
      );
      const lostGames = this.statistics.filter((stat) => !stat.isPlayerWins);
      this.bonusGameWinrate = winnedBonusGames.length / lostGames.length;
    },
    getPrizeRates() {
      this.statistics.forEach((stat) => {
        ++this.prizeRates[stat.prize];
      });
    },
    formatPercentage(percentage) {
      return Math.round(percentage * 100) + "%";
    },
  },
  mounted() {
    this.getStatisticsFromLocalStorage();
    this.getWinrate();
    this.getBonusGameWinrate();
    this.getPrizeRates();
  },
};
</script>

<style lang="scss">
.dark-jackify-statistics {
  margin-top: 10px;

  &-text {
    margin-top: 10px;
    color: #000;
    text-align: center;
    font-family: Inconsolata;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 10px;
  }
}
</style>
