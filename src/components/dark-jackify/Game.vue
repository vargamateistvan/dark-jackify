<template>
  <div class="dark-jackify-game">
    <game-scratch
      :isPlayerWins="isPlayerWins"
      :isBonusGameWins="isBonusGameWins"
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
import { addStatistics } from "../../utils/localStorage";

export default {
  data() {
    return {
      dealerNumber: null,
      playerNumbers: [],
      bonusNumbers: [],
      prize: null,
    };
  },
  components: { GameResult, GameScratch },
  computed: {
    isPlayerWins() {
      return this.playerNumbers.some((num) => num > this.dealerNumber);
    },
    isBonusGameWins() {
      return this.bonusNumbers.reduce((acc, num) => acc + num, 0) === 21;
    },
  },
  methods: {
    generateRandomNumber(from, to) {
      return Math.floor(Math.random() * (to - from + 1)) + from;
    },
    generatePlayerNumbers() {
      const playerNumbers = new Set();
      this.dealerNumber = this.generateRandomNumber(9, 21); // Generates a random integer between 9 and 21 for the dealer
      const isSmallerThanDealerNumber = Math.random() < 0.7;

      while (playerNumbers.size < 4) {
        const randomNumber = this.generateRandomNumber(2, 21); // Generates a random integer between 2 and 21 for the player

        // If 30% chance, make sure the number is smaller than the dealer number
        const generatedNumber = isSmallerThanDealerNumber
          ? this.generateRandomNumber(2, this.dealerNumber) // Generates a random integer between 2 and dealer number
          : randomNumber;

        playerNumbers.add(generatedNumber);
      }

      this.playerNumbers = Array.from(playerNumbers);
    },
    generateBonusGameNumbers() {
      // Check if 50% chance for the sum to equal 21 if a player lost the main game
      if (!this.isPlayerWins && Math.random() < 0.5) {
        this.bonusNumbers = this.generateWinnerBonusNumbers(21, 3, 2, 21);
        return;
      }

      const numbersSet = new Set();

      while (numbersSet.size < 3) {
        const randomNumber = this.generateRandomNumber(2, 21);
        numbersSet.add(randomNumber);
      }

      this.bonusNumbers = Array.from(numbersSet);
      return;
    },
    generateWinnerBonusNumbers(sum, count, from, to) {
      const numbers = new Set();

      while (numbers.size < count) {
        const randomNumber = this.generateRandomNumber(from, to);
        numbers.add(randomNumber);
      }

      const currentSum = Array.from(numbers).reduce((acc, num) => acc + num, 0);

      return currentSum === sum
        ? Array.from(numbers)
        : this.generateWinnerBonusNumbers(sum, count, from, to);
    },
    generatePrize() {
      let prize = 500;
      const chance = this.generateRandomNumber(0, 85) / 100;

      if (chance < 0.3) {
        prize = 500;
      }

      if (0.3 < chance && chance < 0.55) {
        prize = 1000;
      }

      if (0.55 < chance && chance < 0.7) {
        prize = 5000;
      }

      if (0.7 < chance && chance < 0.8) {
        prize = 10000;
      }

      if (0.8 < chance && chance < 0.85) {
        prize = 100000;
      }

      this.prize = prize;
    },
    displayResult() {
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
    saveStatistics() {
      addStatistics({
        isPlayerWins: this.isPlayerWins,
        isBonusGameWins: this.isBonusGameWins,
        prize: this.prize,
      });
    },
    initGame() {
      this.generatePlayerNumbers();
      this.generateBonusGameNumbers();
      this.generatePrize();
      this.displayResult();
      this.saveStatistics();
    },
  },
  mounted() {
    this.initGame();
  },
};
</script>
