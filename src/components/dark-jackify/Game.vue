<template>
  <div class="dark-jackify-game">
    <game-scratch></game-scratch>
    <game-result></game-result>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import GameResult from "./GameResult.vue";
import GameScratch from "./GameScratch.vue";

export default {
  components: { GameResult, GameScratch },
  methods: {
    ...mapActions(["startGame", "displayResult"]),
    initGame() {
      this.startGame();
      this.displayResult();
    },
  },
  mounted() {
    this.initGame();
  },
};
</script>
