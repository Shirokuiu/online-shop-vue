<template>
  <div class="filter__estate">
    <fieldset class="filter__type filter__type--estate">
      <legend>Тип недвижимости</legend>
      <WithAddQueryParam
        v-slot="{ change }"
        query-param-key="estate-type"
        @on-has-query-init="setActiveEstateType"
        ><CheckboxGroup
          :checkboxes="estateTypes"
          @change="onEstateTypeChange($event, change)"
          class="filter__checkboxes-list--estate"
        ></CheckboxGroup
      ></WithAddQueryParam>
    </fieldset>
    <div class="filter__min-square">
      <label for="square">Минимальная площать, м<sup>2</sup></label>
      <AppInputNumber
        id="square"
        :value="0"
        name="min-square"
        :min="1"
        placeholder="0"
      />
    </div>
    <fieldset class="filter__radiobuttons filter__radiobuttons--ram">
      <legend>Количество комнат</legend>
      <ul class="filter__ram-list">
        <li class="filter__radiobuttons-item">
          <AppRadio id="any_room" value="any" name="rooms"> Любое </AppRadio>
        </li>
        <li class="filter__radiobuttons-item">
          <AppRadio id="one" value="one" name="rooms"> 1 </AppRadio>
        </li>
        <li class="filter__radiobuttons-item">
          <AppRadio id="two" value="two" name="rooms"> 2 </AppRadio>
        </li>
        <li class="filter__radiobuttons-item">
          <AppRadio id="three" value="three" name="rooms"> 3 </AppRadio>
        </li>
        <li class="filter__radiobuttons-item">
          <AppRadio id="four" value="four" name="rooms"> 4 </AppRadio>
        </li>
        <li class="filter__radiobuttons-item">
          <AppRadio id="fivemore" value="fivemore" name="rooms"> 5+ </AppRadio>
        </li>
      </ul>
    </fieldset>
  </div>
</template>

<script>
import AppInputNumber from "@/core/components/AppInputNumber";
import AppRadio from "@/core/components/AppRadio";
import CheckboxGroup from "@/modules/filter/components/CheckboxGroup";
import WithAddQueryParam from "@/modules/filter/hocs/WithAddQueryParam";
import { mapActions, mapState } from "vuex";
import { parseQueryParamsAndMutate } from "@/modules/filter/helpers";

export default {
  name: "Estate",

  components: {
    AppInputNumber,
    AppRadio,
    CheckboxGroup,
    WithAddQueryParam,
  },

  computed: {
    ...mapState("Filter/Estate", ["estateTypes"]),
  },

  methods: {
    ...mapActions("Filter/Estate", ["setActiveEstateType"]),

    onEstateTypeChange(checkedValues, cb = () => undefined) {
      parseQueryParamsAndMutate({
        checkedValues,
        forHocChangeCb: cb,
        storeAction: () => this.setActiveEstateType(checkedValues),
      });
    },
  },
};
</script>
