<template>
  <div class="dark-jackify-card-container-game-scratch">
    <div class="dark-jackify-card-container-game-scratch-dealer">
      <img
        class="dark-jackify-card-container-game-scratch-dealer-card"
        src="@/assets/images/card-dealer.svg"
        alt="Card Dealer"
      />
      <img
        class="dark-jackify-card-container-game-scratch-dealer-text"
        src="@/assets/images/dealer-text.svg"
        alt="Dealer Text"
      />
    </div>
    <div class="dark-jackify-card-container-game-scratch-player">
      <img
        class="dark-jackify-card-container-game-scratch-player-card dark-jackify-card-container-game-scratch-player-card-1"
        src="@/assets/images/card1.svg"
        alt="Card 1"
      />
      <img
        class="dark-jackify-card-container-game-scratch-player-card dark-jackify-card-container-game-scratch-player-card-2"
        src="@/assets/images/card2.svg"
        alt="Card 2"
      />
      <img
        class="dark-jackify-card-container-game-scratch-player-text"
        src="@/assets/images/player-text.svg"
        alt="Player-text"
      />
      <img
        class="dark-jackify-card-container-game-scratch-player-card dark-jackify-card-container-game-scratch-player-card-3"
        src="@/assets/images/card3.svg"
        alt="Card 3"
      />
      <img
        class="dark-jackify-card-container-game-scratch-player-card dark-jackify-card-container-game-scratch-player-card-4"
        src="@/assets/images/card4.svg"
        alt="Card 4"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.dark-jackify-card-container-game-scratch {
  &-dealer {
    width: 198px;
    height: 146px;
    background: #c4000c;
    border: 2px solid black;
    border-bottom-left-radius: 225px;
    border-bottom-right-radius: 225px;
    margin-left: 100px;
    position: absolute;

    &-card {
      width: 107px;
      height: 88px;
    }

    &-text {
      margin-top: -5px;
    }
  }

  &-player {
    display: flex;

    &-card {
      width: 68px;
    }

    &-card-1 {
      margin-left: 10px;
      margin-top: -105px;
    }

    &-card-2 {
      margin-left: -40px;
      margin-top: 75px;
    }

    &-text {
      margin-left: 40px;
      margin-top: 165px;
    }

    &-card-3 {
      margin-left: 45px;
      margin-top: 75px;
    }

    &-card-4 {
      margin-left: -35px;
      margin-top: -105px;
    }
  }
}
</style>
