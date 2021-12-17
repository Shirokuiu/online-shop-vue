<template>
  <div class="filter__range">
    <label for="range">Цена, ₽</label>
    <VueRangeSlider :min="min" :max="max" :value="range" />
  </div>
</template>

<script>
import "vue-range-component/dist/vue-range-slider.css";
import VueRangeSlider from "vue-range-component";
import { mapActions, mapState } from "vuex";
import { getRangePrice } from "@/modules/filter/helpers/get-range-price";

export default {
  name: "Price",

  components: {
    VueRangeSlider,
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
