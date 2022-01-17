<template>
  <div class="app-checkbox">
    <input
      class="visually-hidden"
      type="checkbox"
      :name="name"
      :value="value"
      :id="id"
      :checked="checked"
      @change="$emit('change', value)"
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

    checked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
