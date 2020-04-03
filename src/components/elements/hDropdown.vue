<template>
  <div>
    <select class="select" @change="onChange($event.target.value)">
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
  width: 200px;
  height: 40px;
  background-color: white;
  border-radius: 10px;
  font-family: Montserrat;
  font-size: 15px;
  border: 1px solid lightgray;
}
</style>
