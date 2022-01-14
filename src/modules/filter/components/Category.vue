<template>
  <WithAddQueryParam
    query-param-key="category"
    @set-active="this.setActive"
    v-slot="scope"
  >
    <AppSelect
      id="categories1"
      name="categories1"
      :options="categories"
      @change="scope.change"
      >Категория товаров</AppSelect
    >
  </WithAddQueryParam>
</template>

<script>
import { mapState, mapActions } from "vuex";
import WithAddQueryParam from "@/modules/filter/hocs/WithAddQueryParam";
import AppSelect from "@/core/components/AppSelect";

export default {
  name: "Category",

  components: {
    WithAddQueryParam,
    AppSelect,
  },

  computed: {
    ...mapState("Filter/Category", ["categories"]),
  },

  methods: {
    ...mapActions("Filter/Category", ["setActive"]),
  },
};
</script>
