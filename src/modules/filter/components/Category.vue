<template>
  <WithAddQueryParam
    query-param-key="category"
    @on-has-query-init="this.setActive"
    v-slot="{ change }"
  >
    <AppSelect
      id="categories1"
      name="categories1"
      :options="categories"
      @change="change"
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
