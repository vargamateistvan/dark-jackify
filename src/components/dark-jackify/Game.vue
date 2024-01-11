<template>
  <div class="dark-jackify-card-container-game">
    <game-scratch></game-scratch>
    <game-result
      class="dark-jackify-card-container-game-result"
      :dealerNumber="dealerNumber"
      :playerNumbers="playerNumbers"
    ></game-result>
  </div>
</template>

<script>
import GameResult from "./GameResult.vue";
import GameScratch from "./GameScratch.vue";

export default {};
</script>

<style lang="scss">
.dark-jackify-card-container-game {
  height: 253px;
  margin: 5px;
  border-bottom-left-radius: 190px;
  border-bottom-right-radius: 190px;

  &-result {
    height: 235px;
    width: 380px;
    margin: 1px;
    margin-top: -260px;
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
  }

  #dark-jackify-game {
    width: 382px;
    height: 253px;
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
