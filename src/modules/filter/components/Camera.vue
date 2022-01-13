<template>
  <div class="filter__camera">
    <fieldset class="filter__type filter__type--camera">
      <legend>Тип фотоаппарата</legend>
      <ul class="filter__checkboxes-list filter__checkboxes-list--camera">
        <li class="filter__checkboxes-item">
          <AppCheckbox id="mirror" value="mirror" name="camera-type"
            >Зеркальный</AppCheckbox
          >
        </li>
        <li class="filter__checkboxes-item">
          <AppCheckbox id="digital" value="digital" name="camera-type"
            >Цифровой</AppCheckbox
          >
        </li>
        <li class="filter__checkboxes-item">
          <AppCheckbox id="mirrorless" value="mirrorless" name="camera-type"
            >Беззеркальный</AppCheckbox
          >
        </li>
      </ul>
    </fieldset>
    <AppSelect
      id="resolution-matrix"
      name="resolution-matrix"
      :options="resolutionMatrix"
      class="filter__select-wrapper--min-resolution"
      >Минимальное разрешение матрицы</AppSelect
    >
    <AppSelect
      id="resolution-video"
      name="resolution-video"
      :options="resolutionVideo"
      >>Минимальное разрешение видео</AppSelect
    >
  </div>
</template>

<script>
import AppCheckbox from "@/core/components/AppCheckbox";
import AppSelect from "@/core/components/AppSelect";
import { mapState } from "vuex";

export default {
  name: "Camera",

  components: {
    AppCheckbox,
    AppSelect,
  },

  computed: {
    ...mapState("Filter/Camera", ["resolutionMatrix", "resolutionVideo"]),
  },
};
</script>
