<template>
  <ul class="filter__ram-list">
    <li
      v-for="{ id, value, name, checked, label } in radioBtns"
      :key="id"
      class="filter__radiobuttons-item"
    >
      <AppRadio
        :id="id"
        :value="value"
        :name="name"
        :checked="checked"
        @on-change="$emit('on-change', $event)"
      >
        {{ label }}
      </AppRadio>
    </li>
  </ul>
</template>

<script>
import AppRadio from "@/core/components/AppRadio";

export default {
  name: "RadioGroup",

  components: {
    AppRadio,
  },

  props: {
    radioBtns: {
      type: Array,
      required: true,
      validator: () => [],
    },
  },
};
</script>
