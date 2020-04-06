<template>
  <div>
    <textarea
      :class="[size, 'text-area-field']"
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
    },
    size: {
      type: String,
      default: "medium"
    }
  },
  methods: {
    onInput(input) {
      this.$emit("onInput", input);
    }
  }
};
</script>
<style lang="scss" scoped>
.text-area-field {
  height: 150px;
  background-color: white;
  border-radius: 8px;
  font-family: Montserrat;
  font-size: 15px;
  padding: 15px;
  border: 1px solid #a8b2dd;
}
.small {
  width: 70px;
  max-width: 70px;
  min-width: 70px;
}
.medium {
  width: 200px;
  max-width: 200px;
  min-width: 200px;
}
.large {
  width: 243px;
  max-width: 243px;
  min-width: 243px;
}
</style>
