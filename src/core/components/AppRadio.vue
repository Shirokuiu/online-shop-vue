<template>
  <div class="app-radio">
    <input
      class="visually-hidden"
      type="radio"
      :name="name"
      :value="value"
      :id="id"
    />
    <label :for="id"><slot></slot></label>
  </div>
</template>

<script>
export default {
  name: "AppRadio",

  props: {
    id: {
      type: String,
      default: "radio",
    },

    value: {
      type: String,
      default: "radio",
    },

    name: {
      type: String,
      default: "radio",
    },
  },
};
</script>
