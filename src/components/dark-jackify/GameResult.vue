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
        class="dark-jackify-footer-bonus-game-spark"
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
import { getNumberText, getPrizeText } from "../../utils/numbersToText";

export default {
  props: {
    dealerNumber: Number,
    playerNumbers: Array,
    bonusNumbers: Array,
    prize: Number,
  },
  methods: { getNumberText, getPrizeText },
};
</script>
