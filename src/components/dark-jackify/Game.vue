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
      isPlayerWins: false,
      bonusNumbers: [],
      prize: null,
    };
  },
  components: { GameResult, GameScratch },
  computed: {
    isBonusGameWins() {
      return this.bonusNumbers.reduce((acc, num) => acc + num, 0) === 21;
    },
  },
  methods: {
    generateNumbers() {
      const playerNumbers = new Set();
      const dealerNumber = Math.floor(Math.random() * 13) + 9; // Generates a random integer between 9 and 21 for the dealer
      const isSmallerThanDealerNumber = Math.random() < 0.7;

      while (playerNumbers.size < 4) {
        const randomNumber = Math.floor(Math.random() * 20) + 2; // Generates a random integer between 2 and 21 for the player

        // If 30% chance, make sure the number is smaller than the dealer number
        const generatedNumber = isSmallerThanDealerNumber
          ? Math.floor(Math.random() * dealerNumber) + 2 // Generates a random integer between 2 and dealer number
          : randomNumber;

        playerNumbers.add(generatedNumber);
      }

      return { playerNumbers: Array.from(playerNumbers), dealerNumber };
    },
    generateBonusGameNumbers() {
      // Check if 50% chance for the sum to equal 21 if a player lost the main game
      if (!this.isPlayerWins && Math.random() < 0.5) {
        return this.generateWinnerBonusNumbers();
      }

      const numbersSet = new Set();

      while (numbersSet.size < 3) {
        const randomNumber = Math.floor(Math.random() * 21) + 2;
        numbersSet.add(randomNumber);
      }

      return Array.from(numbersSet);
    },
    generateWinnerBonusNumbers() {
      let numbers;

      // Continue generating until valid distinct numbers are found
      do {
        numbers = new Set();

        while (numbers.size < 3) {
          const randomNumber = Math.floor(Math.random() * 21) + 2;
          numbers.add(randomNumber);
        }
      } while (Array.from(numbers).reduce((sum, num) => sum + num, 0) !== 21);

      return Array.from(numbers);
    },
    getDealerWin(playerNumbers, dealerNumber) {
      return playerNumbers.every((num) => num <= dealerNumber);
    },
    getPrize() {
      let prize = 500;
      const chance = Math.floor(Math.random() * 86) / 100;

      if (chance > 0.3) {
        prize = 1000;
      }

      if (chance > 0.55) {
        prize = 5000;
      }

      if (chance > 0.7) {
        prize = 10000;
      }

      if (chance > 0.8) {
        prize = 100000;
      }

      this.prize = prize;
    },
    initGame() {
      const { playerNumbers, dealerNumber } = this.generateNumbers();

      this.isPlayerWins = !this.getDealerWin(playerNumbers, dealerNumber);
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

      // Save Statistics
      addStatistics({
        isPlayerWins: this.isPlayerWins,
        isBonusGameWins: this.isBonusGameWins,
        prize: this.prize,
      });
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
