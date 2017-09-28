<template>
  <h1 class="red">Hello {{ name }}!</h1>
</template>

<script>
export default {
  asyncData (context) {
    // called every time before loading the component
    return { name: 'World' }
  }
}
</script>

<style>
.red {
  color: red;
}
</style>
