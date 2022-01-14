<template>
  <div class="filter__range">
    <label for="range">Цена, ₽</label>
    <VueSlider :value="range" :min="min" :max="max"></VueSlider>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import { mapActions, mapState } from "vuex";
import { getRangePrice } from "@/modules/filter/helpers";

export default {
  name: "Price",

  components: {
    VueSlider,
  },

  computed: {
    ...mapState("Filter/Price", ["min", "max", "range"]),
  },

  created() {
    this.initRangeSlider({ min: 0, max: 2000 });
  },

  methods: {
    ...mapActions("Filter/Price", ["updatePrice"]),

    async initRangeSlider({ min, max }) {
      this.updatePrice({
        min,
        max,
        range: getRangePrice({
          rangePrice: this.$route.query.priceRange,
          min,
          max,
        }),
      });
    },
  },
};
</script>
