<template>
  <div>
    <input
      class="input-field"
      :placeholder="placeholder"
      @input="onInput($event.target.value)"
    />
  </div>
</template>
<script>
export default {
  name: "hInput",
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  methods: {
    onInput(input) {
      this.$emit("onChange", input);
    }
  }
};
</script>
<style lang="scss" scoped>
.input-field {
  width: 185px;
  height: 40px;
  background-color: white;
  border-radius: 8px;
  font-family: Montserrat;
  font-size: 15px;
  padding-left: 15px;
  border: 1px solid lightgray;
}
</style>
