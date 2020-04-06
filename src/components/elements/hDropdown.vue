<template>
  <div>
    <select :class="[size, 'select']" @change="onChange($event.target.value)">
      <option value="" disabled selected>{{ label }}</option>
      <option
        v-for="(option, index) in items"
        :value="option.value"
        :key="index"
      >
        {{ option.value }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "hDropdown",
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    label: {
      type: String
    },
    size: {
      type: String,
      default: "medium"
    }
  },
  methods: {
    onChange(selectedValue) {
      this.$emit("onChange", selectedValue);
    }
  }
};
</script>
<style lang="scss" scoped>
.select {
  width: 250px;
  height: 40px;
  background-color: white;
  border-radius: 10px;
  font-family: Montserrat;
  font-size: 15px;
  border: 1px solid #a8b2dd;
}
.small {
  width: 100px;
}
.medium {
  width: 200px;
}
.large {
  width: 275px;
}
</style>
