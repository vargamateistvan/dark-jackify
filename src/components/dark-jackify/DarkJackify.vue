<template>
  <div class="main-container">
    <card></card>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: { Card },
};
</script>

<style scoped>
.main-container {
  background: black;
}
</style>
