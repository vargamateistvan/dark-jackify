<template>
  <div class="dark-jackify-card-footer">
    <img
      class="dark-jackify-card-footer-description"
      src="@/assets/images/game-description.svg"
      alt="Game Description"
    />
    <div class="dark-jackify-card-footer-bonus-game">
      <img
        class="dark-jackify-card-footer-bonus-game-spark"
        src="@/assets/images/spark.svg"
        alt="Spark"
      />
      <img
        class="dark-jackify-card-footer-bonus-game-chip"
        src="@/assets/images/chip.svg"
        alt="Chip"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.dark-jackify-card-footer {
  position: relative;
  user-select: none;

  &-description {
    margin-left: -195px;
    margin-top: -75px;
  }

  &-bonus-game {
    position: absolute;
    z-index: 2;
    display: flex;
    margin-left: 190px;
    margin-top: -200px;

    &-chip {
      margin-left: -170px;
      margin-top: 10px;
    }
  }
}
</style>
