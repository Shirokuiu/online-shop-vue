<template>
  <input
    type="number"
    :id="id"
    :name="name"
    :min="min"
    :value="value"
    :placeholder="placeholder"
    @change="$emit('change', $event.target.value)"
  />
</template>

<script>
export default {
  name: "AppInput",

  props: {
    id: {
      type: String,
      default: "inputNumber",
    },

    min: {
      type: Number,
      default: 0,
    },

    value: {
      type: Number,
      default: 0,
    },

    placeholder: {
      type: String,
      default: "0",
    },

    name: {
      type: String,
      default: "inputNumber",
    },
  },
};
</script>
