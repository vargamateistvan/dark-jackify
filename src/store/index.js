import { createStore } from "vuex";
import { addStatistics } from "../utils/localStorage";

function generateRandomNumber(from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

function generateWinnerBonusNumbers(sum, count, from, to) {
  const numbers = new Set();

  while (numbers.size < count) {
    const randomNumber = generateRandomNumber(from, to);
    numbers.add(randomNumber);
  }

  const currentSum = Array.from(numbers).reduce((acc, num) => acc + num, 0);

  return currentSum === sum
    ? Array.from(numbers)
    : generateWinnerBonusNumbers(sum, count, from, to);
}

export const MUTATIONS = {
  SET_DEALER_NUMBER: "SET_DEALER_NUMBER",
  SET_PLAYER_NUMBERS: "SET_PLAYER_NUMBERS",
  SET_BONUS_NUMBERS: "SET_BONUS_NUMBERS",
  SET_PRIZE: "SET_PRIZE",
};

export const ACTIONS = {
  GENERATE_PLAYER_NUMBERS: "generatePlayerNumbers",
  GENERATE_BONUS_NUMBERS: "generateBonusGameNumbers",
  GENERATE_PRIZE: "generatePrize",
  START_GAME: "startGame",
  SAVE_STATISTICS: "saveStatistics",
};

export default createStore({
  state: () => ({
    dealerNumber: null,
    playerNumbers: [],
    bonusNumbers: [],
    prize: null,
  }),
  getters: {
    dealerNumber: (state) => {
      return state.dealerNumber;
    },
    playerNumbers: (state) => {
      return state.playerNumbers;
    },
    bonusNumbers: (state) => {
      return state.bonusNumbers;
    },
    prize: (state) => {
      return state.prize;
    },
    isPlayerWins: (state) => {
      return state.playerNumbers.some((num) => num > state.dealerNumber);
    },
    isBonusGameWins: (state) => {
      return state.bonusNumbers.reduce((acc, num) => acc + num, 0) === 21;
    },
  },
  mutations: {
    SET_DEALER_NUMBER(state, dealerNumber) {
      state.dealerNumber = dealerNumber;
    },
    SET_PLAYER_NUMBERS(state, playerNumbers) {
      state.playerNumbers = playerNumbers;
    },
    SET_BONUS_NUMBERS(state, bonusNumbers) {
      state.bonusNumbers = bonusNumbers;
    },
    SET_PRIZE(state, prize) {
      state.prize = prize;
    },
  },
  actions: {
    generatePlayerNumbers({ commit, state }) {
      const playerNumbers = new Set();
      const dealerNumber = generateRandomNumber(9, 21); // Generates a random integer between 9 and 21 for the dealer
      commit(MUTATIONS.SET_DEALER_NUMBER, dealerNumber);
      const isSmallerThanDealerNumber = Math.random() < 0.7;

      while (playerNumbers.size < 4) {
        const randomNumber = generateRandomNumber(2, 21); // Generates a random integer between 2 and 21 for the player

        // If 30% chance, make sure the number is smaller than the dealer number
        const generatedNumber = isSmallerThanDealerNumber
          ? generateRandomNumber(2, state.dealerNumber) // Generates a random integer between 2 and dealer number
          : randomNumber;

        playerNumbers.add(generatedNumber);
      }

      commit(MUTATIONS.SET_PLAYER_NUMBERS, Array.from(playerNumbers));
    },
    generateBonusGameNumbers({ commit, state }) {
      // Check if 50% chance for the sum to equal 21 if a player lost the main game
      if (!state.isPlayerWins && Math.random() < 0.5) {
        const bonusNumbers = generateWinnerBonusNumbers(21, 3, 2, 21);
        commit(MUTATIONS.SET_BONUS_NUMBERS, bonusNumbers);
        return;
      }

      const numbersSet = new Set();

      while (numbersSet.size < 3) {
        const randomNumber = generateRandomNumber(2, 21);
        numbersSet.add(randomNumber);
      }

      const bonusNumbers = Array.from(numbersSet);
      commit(MUTATIONS.SET_BONUS_NUMBERS, bonusNumbers);
      return;
    },
    generatePrize({ commit }) {
      let prize = 500;
      const chance = generateRandomNumber(0, 85) / 100;

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

      commit(MUTATIONS.SET_PRIZE, prize);
    },
    saveStatistics({ state, getters }) {
      addStatistics({
        isPlayerWins: getters.isPlayerWins,
        isBonusGameWins: getters.isBonusGameWins,
        prize: state.prize,
      });
    },
    displayResult({ state, getters }) {
      console.log(
        getters.isPlayerWins ? "Player wins!" : "Dealer wins!",
        "Dealer number",
        state.dealerNumber,
        "Player numbers",
        state.playerNumbers
      );
      console.log(
        getters.isBonusGameWins ? "Bonus game wins" : "Bonus game lost",
        state.bonusNumbers
      );
      console.log("Prize", state.prize);
    },
    startGame({ dispatch }) {
      dispatch(ACTIONS.GENERATE_PLAYER_NUMBERS);
      dispatch(ACTIONS.GENERATE_BONUS_NUMBERS);
      dispatch(ACTIONS.GENERATE_PRIZE);
      dispatch(ACTIONS.SAVE_STATISTICS);
    },
  },
});
