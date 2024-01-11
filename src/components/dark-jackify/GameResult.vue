<template>
  <div class="dark-jackify-card-container-game-result">
    <div class="dark-jackify-card-container-game-result-dealer">
      <span class="dark-jackify-card-container-game-result-dealer-prize"
        >15.000.000</span
      ><br />
      <span class="dark-jackify-card-container-game-result-dealer-number"
        >17</span
      >
    </div>
    <div class="dark-jackify-card-container-game-result-player">
      <span
        class="dark-jackify-card-container-game-result-player-number dark-jackify-card-container-game-result-player-number-1"
        >4</span
      >
      <span
        class="dark-jackify-card-container-game-result-player-number dark-jackify-card-container-game-result-player-number-2"
        >13</span
      >
      <span class="dark-jackify-card-container-game-result-player-text"></span>
      <span
        class="dark-jackify-card-container-game-result-player-number dark-jackify-card-container-game-result-player-number-3"
        >15</span
      >
      <span
        class="dark-jackify-card-container-game-result-player-number dark-jackify-card-container-game-result-player-number-4"
        >7</span
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.dark-jackify-card-container-game-result {
  user-select: none;

  &-dealer {
    width: 198px;
    height: 146px;
    border: 2px solid black;
    border-bottom-left-radius: 225px;
    border-bottom-right-radius: 225px;
    margin-left: 90px;
    position: absolute;

    &-prize {
      margin-top: 10px;
    }

    &-number {
      margin-left: 5px;
      margin-top: 10px;

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
      margin-left: 35px;
      margin-top: 10px;
    }

    &-number-2 {
      margin-left: 0px;
      margin-top: 120px;
    }

    &-number-3 {
      margin-left: 185px;
      margin-top: 120px;
    }

    &-number-4 {
      margin-left: 5px;
      margin-top: 10px;
    }
  }
}
</style>
