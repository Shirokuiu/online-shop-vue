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
          <input
            class="visually-hidden"
            type="radio"
            name="rooms"
            value="any"
            id="any_room"
          />
          <label for="any_room">Любое</label>
        </li>
        <li class="filter__radiobuttons-item">
          <input
            class="visually-hidden"
            type="radio"
            name="rooms"
            value="one"
            id="one"
          />
          <label for="one">1</label>
        </li>
        <li class="filter__radiobuttons-item">
          <input
            class="visually-hidden"
            type="radio"
            name="rooms"
            value="two"
            id="two"
          />
          <label for="two">2</label>
        </li>
        <li class="filter__radiobuttons-item">
          <input
            class="visually-hidden"
            type="radio"
            name="rooms"
            value="three"
            id="three"
          />
          <label for="three">3</label>
        </li>
        <li class="filter__radiobuttons-item">
          <input
            class="visually-hidden"
            type="radio"
            name="rooms"
            value="four"
            id="four"
          />
          <label for="four">4</label>
        </li>
        <li class="filter__radiobuttons-item">
          <input
            class="visually-hidden"
            type="radio"
            name="rooms"
            value="fivemore"
            id="fivemore"
          />
          <label for="fivemore">5+</label>
        </li>
      </ul>
    </fieldset>
  </div>
</template>

<script>
import AppCheckbox from "@/core/components/AppCheckbox";
import AppInputNumber from "@/core/components/AppInputNumber";

export default {
  name: "Estate",

  components: {
    AppCheckbox,
    AppInputNumber,
  },
};
</script>
