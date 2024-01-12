<template>
  <div class="dark-jackify-card-container-game">
    <game-scratch></game-scratch>
    <game-result
      class="dark-jackify-card-container-game-result"
      :dealerNumber="dealerNumber"
      :playerNumbers="playerNumbers"
      :bonusNumbers="bonusNumbers"
      :prize="prize"
    ></game-result>
  </div>
</template>

<script>
import GameResult from "./GameResult.vue";
import GameScratch from "./GameScratch.vue";

export default {
  data() {
    return {
      dealerNumber: null,
      playerNumbers: [],
      isPlayerWins: false,
      bonusNumbers: [],
      prize: null,
      prizes: [500, 1000, 5000, 10000, 10000],
    };
  },
  components: { GameResult, GameScratch },
  methods: {
    generateNumbers(percent) {
      const playerNumbers = new Set();
      const dealerNumber = Math.floor(Math.random() * 13) + 9; // Generates a random integer between 9 and 21 for the dealer

      for (let i = 0; i < 4; i++) {
        const randomNumber = Math.floor(Math.random() * 20) + 2; // Generates a random integer between 2 and 21 for the player
        const isSmallerThanDealerNumber = Math.random() < 0.3;

        // If 30% chance, make sure the number is smaller than the dealer number
        const generatedNumber = isSmallerThanDealerNumber
          ? Math.floor(Math.random() * dealerNumber) + 2 // Generates a random integer between 2 and specificNumber
          : randomNumber;

        playerNumbers.add(generatedNumber);
      }

      return { playerNumbers: Array.from(playerNumbers), dealerNumber };
    },
    isDealerWin(playerNumbers, dealerNumber) {
      return playerNumbers.every((num) => dealerNumber > num);
    },
    generateBonusGameNumbers() {
      const numbers = [];

      for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * 20) + 2; // Generates a random integer between 2 and 21 (inclusive)
        numbers.push(randomNumber);
      }

      // Check if 50% chance for the sum to equal 21
      if (!this.isPlayerWins && Math.random() < 0.5) {
        const currentSum = numbers.reduce((acc, num) => acc + num, 0);
        const difference = 21 - currentSum;

        // Randomly choose one of the numbers to adjust to make the sum equal 21
        const indexToAdjust = Math.floor(Math.random() * 3);
        numbers[indexToAdjust] = Math.min(
          21,
          Math.max(2, numbers[indexToAdjust] + difference)
        );
      }

      return numbers;
    },
    generatedNumber(min = 2, max = 21) {
      return Math.floor(Math.random() * (max - 1)) + min;
    },
    checkBonusGameWin() {
      const sum = this.bonusNumbers.reduce((acc, num) => acc + num, 0);
      return sum === 21;
    },
    getPrize() {
      if (this.isPlayerWins) {
        let prize = 500;
        const chance = Math.random();

        if (chance < 0.25) {
          prize = 1000;
        }

        if (chance < 0.15) {
          prize = 5000;
        }

        if (chance < 0.1) {
          prize = 10000;
        }

        if (chance < 0.05) {
          prize = 100000;
        }

        this.prize = prize;
      } else {
        this.prize = this.prizes[this.generatedNumber(0, 4)];
      }
    },
    initGame() {
      const { playerNumbers, dealerNumber } = this.generateNumbers(0.3);

      console.log(
        "DEALER NUMBER",
        dealerNumber,
        "PLAYER NUMBERS",
        playerNumbers
      );

      this.dealerNumber = dealerNumber;
      this.playerNumbers = playerNumbers;

      this.isPlayerWins = !this.isDealerWin(
        this.playerNumbers,
        this.dealerNumber
      );

      this.bonusNumbers = this.generateBonusGameNumbers();

      this.getPrize();

      console.log("Bonus numbers", this.bonusNumbers);
      console.log("Prize", this.prize);

      // Display results
      console.log(this.isPlayerWins ? "Player wins!" : "Dealer wins!");
      console.log(
        this.checkBonusGameWin() ? "Bonus game wins" : "Bonus game lost"
      );
    },
  },
  mounted() {
    this.initGame();
  },
};
</script>

<style lang="scss">
.dark-jackify-card-container-game {
  height: 430px;
  margin: 5px;
  border-bottom-left-radius: 190px;
  border-bottom-right-radius: 190px;

  #dark-jackify-game {
    width: 397px;
    height: 430px;
    border-bottom-left-radius: 165px;
    border-bottom-right-radius: 165px;
    z-index: 2;
    position: sticky;
  }

  #dark-jackify-game-scratch {
    visibility: hidden;
  }
}
</style>
