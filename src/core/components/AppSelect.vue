<template>
  <select :id="id" :name="name" @change="$emit('change', $event.target.value)">
    <option
      v-for="option in options"
      :key="option.id"
      :value="option.value"
      :selected="option.isSelected"
    >
      {{ option.text }}
    </option>
  </select>
</template>

<script>
export default {
  name: "AppSelect",

  props: {
    options: {
      type: Array,
      default: () => [],
    },
    id: {
      type: String,
      default: "select",
    },
    name: {
      type: String,
      default: "select",
    },
  },
};
</script>
