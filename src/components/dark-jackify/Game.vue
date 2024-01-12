<template>
  <div class="dark-jackify-game">
    <game-scratch
      :isPlayerWins="isPlayerWins"
      :isBonusGameWins="isBonusGameWin"
      :prize="prize"
    ></game-scratch>
    <game-result
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
    };
  },
  components: { GameResult, GameScratch },
  computed: {
    isBonusGameWins() {
      const sum = this.bonusNumbers.reduce((acc, num) => acc + num, 0);
      return sum === 21;
    },
  },
  methods: {
    generateNumbers() {
      const playerNumbers = [];
      const dealerNumber = Math.floor(Math.random() * 13) + 9; // Generates a random integer between 9 and 21 for the dealer
      const isSmallerThanDealerNumber = Math.random() < 0.7;

      for (let i = 0; i < 4; i++) {
        const randomNumber = Math.floor(Math.random() * 20) + 2; // Generates a random integer between 2 and 21 for the player

        // If 30% chance, make sure the number is smaller than the dealer number
        const generatedNumber = isSmallerThanDealerNumber
          ? Math.floor(Math.random() * dealerNumber) + 2 // Generates a random integer between 2 and dealer number
          : randomNumber;

        playerNumbers.push(generatedNumber);
      }

      return { playerNumbers: Array.from(playerNumbers), dealerNumber };
    },
    isDealerWin(playerNumbers, dealerNumber) {
      return playerNumbers.every((num) => num <= dealerNumber);
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
    getPrize() {
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
    },
    initGame() {
      const { playerNumbers, dealerNumber } = this.generateNumbers();

      this.isPlayerWins = !this.isDealerWin(playerNumbers, dealerNumber);
      this.dealerNumber = dealerNumber;
      this.playerNumbers = playerNumbers;

      this.bonusNumbers = this.generateBonusGameNumbers();
      this.getPrize();

      // Display results
      console.log(
        this.isPlayerWins ? "Player wins!" : "Dealer wins!",
        "Dealer number",
        this.dealerNumber,
        "Player numbers",
        this.playerNumbers
      );
      console.log(
        this.isBonusGameWins ? "Bonus game wins" : "Bonus game lost",
        this.bonusNumbers
      );
      console.log("Prize", this.prize);
    },
  },
  mounted() {
    this.initGame();
  },
};
</script>

<style lang="scss">
.dark-jackify-game {
  height: 430px;
  margin: 5px;
  border-bottom-left-radius: 190px;
  border-bottom-right-radius: 190px;

  #dark-jackify-game-scratch {
    visibility: hidden;
  }
}
</style>
