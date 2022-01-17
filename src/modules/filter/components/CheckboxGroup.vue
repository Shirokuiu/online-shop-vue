<template>
  <ul class="filter__checkboxes-list">
    <li
      v-for="{ id, value, name, label, checked } in checkboxes"
      :key="id"
      class="filter__checkboxes-item"
    >
      <AppCheckbox
        :id="id"
        :value="value"
        :name="name"
        :checked="checked"
        @change="onChange"
        >{{ label }}</AppCheckbox
      >
    </li>
  </ul>
</template>

<script>
import AppCheckbox from "@/core/components/AppCheckbox";

export default {
  name: "CheckboxGroup",

  components: {
    AppCheckbox,
  },

  props: {
    /**
     * @param checkboxes - Массив чекбоксов, который билдит build-checkboxes
     */
    checkboxes: {
      type: Array,
      required: true,
    },
  },

  created() {
    this.checkedValues = this.checkboxes
      .filter(({ checked }) => checked)
      .map(({ value }) => value);
  },

  data() {
    return {
      checkedValues: [],
    };
  },

  methods: {
    onChange(evt) {
      if (this.checkedValues.some((value) => value === evt)) {
        this.checkedValues = this.checkedValues.filter(
          (value) => value !== evt
        );

        this.$emit("change", this.checkedValues);

        return;
      }
      this.checkedValues.push(evt);

      this.$emit("change", this.checkedValues);
    },
  },
};
</script>
