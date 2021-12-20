<template>
  <div class="checkbox">
    <input
      class="visually-hidden"
      type="checkbox"
      :name="name"
      :value="value"
      :id="id"
    />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AppCheckbox",

  props: {
    id: {
      type: String,
      default: "checkbox",
    },

    value: {
      type: String,
      default: "checkbox",
    },

    name: {
      type: String,
      default: "checkbox",
    },
  },
};
</script>
