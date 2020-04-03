<template>
  <div>
    <textarea
      class="text-area-field"
      :placeholder="placeholder"
      @input="onInput($event.target.value)"
    />
  </div>
</template>
<script>
export default {
  name: "hTextArea",
  props: {
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
.text-area-field {
  width: 185px;
  max-width: 185px;
  min-width: 185px;
  height: 150px;
  background-color: white;
  border-radius: 8px;
  font-family: Montserrat;
  font-size: 15px;
  padding-left: 15px;
  padding-top: 15px;
  border: 1px solid lightgray;
}
</style>
