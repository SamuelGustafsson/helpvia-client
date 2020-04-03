<template>
  <div>
    <button
      :class="[{ fullWidth: fullWidth }, color, size, 'base-button']"
      @click="onClick"
    >
      {{ text }}
    </button>
  </div>
</template>
<script>
export default {
  name: "hButton",
  props: {
    text: {
      type: String
    },
    color: {
      type: String
    },
    fullWidth: {
      type: Boolean
    },
    size: {
      type: String,
      default: "medium"
    }
  },
  methods: {
    onClick($event) {
      this.$emit("onClick", $event);
    }
  }
};
</script>
<style lang="scss" scoped>
.base-button {
  height: 40px;
  border-radius: 10px;
  font-family: sans-serif;
  font-size: 14px;
}
.fullWidth {
  width: 100%;
}
.red {
  background-color: red;
  color: white;
}
.lightblue {
  background-color: lightblue;
  color: black;
}
.pink {
  background-color: #f4d8e4;
  color: black;
}
.small {
  width: 100px;
}
.medium {
  width: 150px;
}
</style>
