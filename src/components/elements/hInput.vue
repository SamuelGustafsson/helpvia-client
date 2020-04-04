<template>
  <div>
    <input
      :class="[size, 'input-field']"
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
.input-field {
  height: 40px;
  background-color: white;
  border-radius: 8px;
  font-family: Montserrat;
  font-size: 15px;
  padding-left: 15px;
  border: 1px solid #a8b2dd;
}
.small {
  width: 100px;
}
.medium {
  width: 182px;
}
.large {
  width: 257px;
}
</style>
