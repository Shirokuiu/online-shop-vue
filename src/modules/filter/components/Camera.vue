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
    <WithAddQueryParam
      v-slot="{ change }"
      queryParamKey="resolution-matrix"
      @set-active="
        setActiveResolution({
          type: TypesCamera.Matrix,
          activeOptionValue: $event,
        })
      "
    >
      <AppSelect
        id="resolution-matrix"
        name="resolution-matrix"
        :options="resolutionMatrix"
        class="filter__select-wrapper--min-resolution"
        @change="change"
        >Минимальное разрешение матрицы</AppSelect
      >
    </WithAddQueryParam>
    <WithAddQueryParam
      v-slot="{ change }"
      queryParamKey="resolution-video"
      @set-active="
        setActiveResolution({
          type: TypesCamera.Video,
          activeOptionValue: $event,
        })
      "
    >
      <AppSelect
        id="resolution-video"
        name="resolution-video"
        :options="resolutionVideo"
        @change="change"
        >>Минимальное разрешение видео</AppSelect
      >
    </WithAddQueryParam>
  </div>
</template>

<script>
import AppCheckbox from "@/core/components/AppCheckbox";
import AppSelect from "@/core/components/AppSelect";
import WithAddQueryParam from "@/modules/filter/hocs/WithAddQueryParam";
import { mapActions, mapState } from "vuex";
import { TypesCamera } from "@/modules/filter/constants";

export default {
  name: "Camera",

  components: {
    AppCheckbox,
    AppSelect,
    WithAddQueryParam,
  },

  data() {
    return {
      TypesCamera,
    };
  },

  computed: {
    ...mapState("Filter/Camera", ["resolutionMatrix", "resolutionVideo"]),
  },

  methods: {
    ...mapActions("Filter/Camera", ["setActiveResolution"]),
  },
};
</script>
