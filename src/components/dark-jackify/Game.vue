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
