<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello from Vue SFC!',
    };
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>