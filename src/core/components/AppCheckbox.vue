<template>
  <div class="app-checkbox">
    <input
      class="visually-hidden"
      type="checkbox"
      :name="name"
      :value="value"
      :id="id"
    />
    <label :for="id"><slot>Дом</slot></label>
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
