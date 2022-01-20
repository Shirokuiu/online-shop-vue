<template>
  <div class="filter__estate">
    <fieldset class="filter__type filter__type--estate">
      <legend>Тип недвижимости</legend>
      <WithAddQueryParam
        v-slot="{ change }"
        query-param-key="estate-type"
        @on-has-query-init="onEstateTypeChange($event)"
        ><CheckboxGroup
          :checkboxes="estateTypes"
          @change="onEstateTypeChange($event, change)"
          class="filter__checkboxes-list--estate"
        ></CheckboxGroup
      ></WithAddQueryParam>
    </fieldset>
    <div class="filter__min-square">
      <label for="square">Минимальная площать, м<sup>2</sup></label>
      <WithAddQueryParam
        v-slot="{ change }"
        query-param-key="min-square"
        @on-has-query-init="onMinSquareChange($event)"
        ><AppInputNumber
          id="square"
          :value="minSquare"
          name="min-square"
          :min="1"
          placeholder="1"
          @change="onMinSquareChange($event, change)"
      /></WithAddQueryParam>
    </div>
    <fieldset class="filter__radiobuttons filter__radiobuttons--ram">
      <legend>Количество комнат</legend>
      <WithAddQueryParam
        v-slot="{ change }"
        query-param-key="rooms"
        @on-has-query-init="onRoomChange($event)"
      >
        <RadioGroup
          :radio-btns="rooms"
          @on-change="onRoomChange($event, change)"
        />
      </WithAddQueryParam>
    </fieldset>
  </div>
</template>

<script>
import AppInputNumber from "@/core/components/AppInputNumber";
import CheckboxGroup from "@/modules/filter/components/CheckboxGroup";
import WithAddQueryParam from "@/modules/filter/hocs/WithAddQueryParam";
import RadioGroup from "@/modules/filter/components/RadioGroup";
import { mapActions, mapState } from "vuex";
import { buildQueryParamsByArray } from "@/modules/filter/helpers";

export default {
  name: "Estate",

  components: {
    AppInputNumber,
    CheckboxGroup,
    WithAddQueryParam,
    RadioGroup,
  },

  computed: {
    ...mapState("Filter/Estate", ["estateTypes", "minSquare", "rooms"]),
  },

  methods: {
    ...mapActions("Filter/Estate", [
      "setActiveEstateType",
      "changeMinSquare",
      "changeActiveRoom",
    ]),

    onEstateTypeChange(checkedValues, cb) {
      this._isRunCb(buildQueryParamsByArray(checkedValues), cb);
      this.setActiveEstateType(checkedValues);
    },

    onMinSquareChange(changedValue, cb) {
      this._isRunCb(changedValue, cb);
      this.changeMinSquare(changedValue);
    },

    onRoomChange(activeValue, cb) {
      this._isRunCb(activeValue, cb);
      this.changeActiveRoom(activeValue);
    },

    _isRunCb(activeValue, cb) {
      if (cb) {
        cb(activeValue);
      }
    },
  },
};
</script>
