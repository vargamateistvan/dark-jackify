<template>
  <div class="dark-jackify-game-result">
    <div class="dark-jackify-game-result-main">
      <div class="dark-jackify-game-result-main-dealer">
        <div class="dark-jackify-game-result-main-dealer-prize">
          {{ prize?.toLocaleString("en") }} Ft
          <div class="dark-jackify-game-result-number-text">
            {{ getPrizeText(prize) }}
          </div>
        </div>
        <div class="dark-jackify-game-result-main-dealer-number">
          {{ dealerNumber }}
          <div class="dark-jackify-game-result-number-text">
            {{ getNumberText(dealerNumber) }}
          </div>
        </div>
      </div>
      <div class="dark-jackify-game-result-main-player">
        <div class="dark-jackify-game-result-main-player-number">
          <div class="dark-jackify-game-result-main-player-number-1">
            {{ playerNumbers[0] }}
            <div class="dark-jackify-game-result-number-text">
              {{ getNumberText(playerNumbers[0]) }}
            </div>
          </div>
        </div>
        <div class="dark-jackify-game-result-main-player-number">
          <div class="dark-jackify-game-result-main-player-number-2">
            {{ playerNumbers[1] }}
            <div class="dark-jackify-game-result-number-text">
              {{ getNumberText(playerNumbers[1]) }}
            </div>
          </div>
        </div>
        <div class="dark-jackify-game-result-main-player-number">
          <div class="dark-jackify-game-result-main-player-number-3">
            {{ playerNumbers[2] }}
            <div class="dark-jackify-game-result-number-text">
              {{ getNumberText(playerNumbers[2]) }}
            </div>
          </div>
        </div>
        <div class="dark-jackify-game-result-main-player-number">
          <div class="dark-jackify-game-result-main-player-number-4">
            {{ playerNumbers[3] }}
            <div class="dark-jackify-game-result-number-text">
              {{ getNumberText(playerNumbers[3]) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dark-jackify-game-result-bonus">
      <img
        class="dark-jackify-card-footer-bonus-game-spark"
        src="@/assets/images/spark.svg"
        alt="Spark"
      />
      <div class="dark-jackify-game-result-bonus-numbers">
        <div
          class="dark-jackify-game-result-bonus-numbers-text dark-jackify-game-result-bonus-numbers-text-1"
        >
          BÓNUSZ-
        </div>
        <div
          class="dark-jackify-game-result-bonus-numbers-text dark-jackify-game-result-bonus-numbers-text-2"
        >
          JÁTÉK
        </div>
        <div class="dark-jackify-game-result-bonus-numbers-number-1">
          {{ bonusNumbers[0] }}
          <div class="dark-jackify-game-result-number-text">
            {{ getNumberText(bonusNumbers[0]) }}
          </div>
        </div>
        <div class="dark-jackify-game-result-bonus-numbers-number-2">
          {{ bonusNumbers[1] }}
          <div class="dark-jackify-game-result-number-text">
            {{ getNumberText(bonusNumbers[1]) }}
          </div>
        </div>
        <div class="dark-jackify-game-result-bonus-numbers-number-3">
          {{ bonusNumbers[2] }}
          <div class="dark-jackify-game-result-number-text">
            {{ getNumberText(bonusNumbers[2]) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dealerNumber: Number,
    playerNumbers: Array,
    bonusNumbers: Array,
    prize: Number,
  },
  data() {
    return {
      numbersInText: {
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
      },
      prizesInText: {
        500: "ÖTSZÁZ",
        1000: "EZER",
        5000: "ÖTEZER",
        10000: "TÍZEZER",
        100000: "SZÁZEZER",
      },
    };
  },
  methods: {
    getNumberText(number) {
      return this.numbersInText[number];
    },
    getPrizeText(prize) {
      return this.prizesInText[prize];
    },
  },
};
</script>

<style lang="scss">
.dark-jackify-game-result {
  user-select: none;
  position: relative;

  &-number-text {
    color: #000;
    text-align: center;
    font-family: Inconsolata;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 10px;
  }

  &-main {
    height: 235px;
    width: 380px;
    margin: 1px;
    margin-top: -435px;
    background: #e9ebec;
    border: 10px solid #209740;
    border-bottom-left-radius: 190px;
    border-bottom-right-radius: 190px;
    z-index: 1;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      left: 91px;
      width: 53%;
      border-top: solid 10px #c4000c;
      margin-top: -10px;
    }

    &-dealer {
      width: 198px;
      height: 130px;
      border: 2px solid black;
      border-bottom-left-radius: 225px;
      border-bottom-right-radius: 225px;
      margin-left: 90px;
      position: absolute;

      &-prize {
        margin-top: 10px;
        color: #000;
        text-align: center;
        font-family: Inconsolata;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: 10px;
      }

      &-number {
        margin-left: 5px;
        margin-top: 20px;

        color: #000;
        text-align: center;
        font-family: Inconsolata;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px;
      }

      &-text {
        margin-top: -5px;
      }
    }

    &-player {
      display: flex;
      justify-content: space-around;

      &-number {
        color: #000;
        text-align: center;
        font-family: Inconsolata;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px;
      }

      &-number-1 {
        margin-left: 0px;
        margin-top: 10px;
      }

      &-number-2 {
        margin-left: 0px;
        margin-top: 130px;
      }

      &-number-3 {
        margin-left: 115px;
        margin-top: 130px;
      }

      &-number-4 {
        margin-left: 0px;
        margin-top: 10px;
      }
    }
  }

  &-bonus {
    margin-left: 185px;
    margin-top: -90px;
    position: relative;

    &-numbers {
      width: 145px;
      height: 117px;
      background: #e9ebec;
      position: absolute;
      display: flex;
      margin-left: 48px;
      margin-top: -175px;
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 50px;
      border-top-left-radius: 50px;
      border-top-right-radius: 50px;
      display: flex;
      justify-content: space-around;

      color: #000;
      text-align: center;
      font-family: Inconsolata;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 40px;

      &-text {
        color: #000;
        text-align: center;
        font-family: Inconsolata;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 10px;
      }

      &-text-1 {
        margin-left: 15px;
        margin-top: 25px;
      }

      &-text-2 {
        margin-left: -55px;
        margin-top: 40px;
      }

      &-number-1 {
        margin-left: -75px;
        margin-top: 55px;
      }

      &-number-2 {
        margin-left: 0px;
        margin-top: 8px;
      }

      &-number-3 {
        margin-left: 70px;
        margin-top: 55px;
        position: absolute;
      }
    }
  }
}
</style>
