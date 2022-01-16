<template>
  <div class="filter__camera">
    <fieldset class="filter__type filter__type--camera">
      <legend>Тип фотоаппарата</legend>
      <WithAddQueryParam
        v-slot="{ change }"
        query-param-key="camera-type"
        @on-has-query-init="setActiveCameraType"
      >
        <CheckboxGroup
          :checkboxes="cameraTypes"
          @change="onCameraTypeChange($event, change)"
        />
      </WithAddQueryParam>
    </fieldset>
    <WithAddQueryParam
      v-slot="{ change }"
      queryParamKey="resolution-matrix"
      @on-has-query-init="
        setActiveResolution({
          type: TypesResolution.Matrix,
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
      @on-has-query-init="
        setActiveResolution({
          type: TypesResolution.Video,
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
import CheckboxGroup from "@/modules/filter/components/CheckboxGroup";
import AppSelect from "@/core/components/AppSelect";
import WithAddQueryParam from "@/modules/filter/hocs/WithAddQueryParam";
import { mapActions, mapState } from "vuex";
import { TypesResolution } from "@/modules/filter/constants";

export default {
  name: "Camera",

  components: {
    CheckboxGroup,
    AppSelect,
    WithAddQueryParam,
  },

  data() {
    return {
      TypesResolution,
    };
  },

  computed: {
    ...mapState("Filter/Camera", [
      "resolutionMatrix",
      "resolutionVideo",
      "cameraTypes",
    ]),
  },

  methods: {
    ...mapActions("Filter/Camera", [
      "setActiveResolution",
      "setActiveCameraType",
    ]),

    onCameraTypeChange(checkedValues, cb = () => undefined) {
      const queryParams = checkedValues.length
        ? checkedValues.join(",")
        : undefined;

      cb(queryParams);

      this.setActiveCameraType(checkedValues);
    },
  },
};
</script>
