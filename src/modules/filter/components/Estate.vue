<template>
  <div class="filter__estate">
    <fieldset class="filter__type filter__type--estate">
      <legend>Тип недвижимости</legend>
      <ul class="filter__checkboxes-list filter__checkboxes-list--estate">
        <li class="filter__checkboxes-item">
          <AppCheckbox id="house" name="estate-type" value="house">
            <label for="house">Дом</label>
          </AppCheckbox>
        </li>
        <li class="filter__checkboxes-item">
          <AppCheckbox id="flat" name="estate-type" value="flat">
            <label for="flat">Квартира</label>
          </AppCheckbox>
        </li>
        <li class="filter__checkboxes-item">
          <AppCheckbox id="apartments" name="estate-type" value="apartments">
            <label for="apartments">Апартаменты</label>
          </AppCheckbox>
        </li>
      </ul>
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
import AppCheckbox from "@/core/components/AppCheckbox";
import AppInputNumber from "@/core/components/AppInputNumber";
import AppRadio from "@/core/components/AppRadio";

export default {
  name: "Estate",

  components: {
    AppCheckbox,
    AppInputNumber,
    AppRadio,
  },
};
</script>
