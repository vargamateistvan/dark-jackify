<template>
  <div class="dark-jackify-header">
    <div class="dark-jackify-header-cards">
      <img
        class="dark-jackify-header-cards-ace"
        src="@/assets/images/spades-ace.svg"
        alt="spades-ace"
      />
      <img
        class="dark-jackify-header-cards-jack"
        src="@/assets/images/spades-jack.svg"
        alt="spades-jack"
      />
    </div>

    <div class="dark-jackify-header-title">
      <span class="dark-jackify-header-title-green">D</span>
      <span class="dark-jackify-header-title-red">A</span>
      <span class="dark-jackify-header-title-green">R</span>
      <span class="dark-jackify-header-title-red">K</span>
      <span>&nbsp;</span>
      <span class="dark-jackify-header-title-green">J</span>
      <span class="dark-jackify-header-title-red">A</span>
      <span class="dark-jackify-header-title-green">C</span>
      <span class="dark-jackify-header-title-red">K</span>
      <span class="dark-jackify-header-title-green">I</span>
      <span class="dark-jackify-header-title-red">F</span>
      <span class="dark-jackify-header-title-green">Y</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.dark-jackify-header {
  &-cards {
    display: flex;
    height: 223px;
    z-index: 1;

    &-ace {
      margin-top: 5px;
      margin-left: 30px;
      height: 242px;
    }

    &-jack {
      margin-top: 60px;
      margin-left: -60px;
      height: 246px;
    }
  }

  &-title {
    height: 112px;
    margin: 5px;
    background: white;
    z-index: 2;
    position: relative;
    user-select: none;

    font-size: 80px;
    font-family: Jockey One;
    font-weight: 400;
    text-transform: uppercase;
    word-wrap: break-word;
    text-shadow: 4px 0px 0px #000;

    &:before {
      content: "";
      position: absolute;
      left: 40px;
      width: 80%;
      border-top: solid 8px #c4000c;
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
    }

    &-green {
      color: #209740;
    }

    &-red {
      color: #c4000c;
    }
  }
}
</style>
