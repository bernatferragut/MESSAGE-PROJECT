<template>
  <div class="number-modifier">
    <button @click="decrement()">-</button>
    <strong> {{number}} </strong>
    <button @click="increment()">+</button>
  </div>
</template>

<style>
.number-modifier {
    padding: 5px;
    margin: 10px;
}

button {
    margin: 10px;
    color:grey;
    border-radius: 20px;
}
</style>


<script>
export default {
  props: ['number'],
// number : { type: number, required: true, default : 0}
// so each component can have it's unique data
  data() {
    return {
      value: this.start
    }
  },

  methods: {
    increment() { this.number++ },
    decrement() { this.number-- }
  }
}
</script>
