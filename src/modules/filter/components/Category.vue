<template>
  <AppSelect id="categories" :options="categories" @change="categoryChange"
    >Категория товаров</AppSelect
  >
</template>

<script>
import AppSelect from "@/core/components/AppSelect";
import { mapState, mapActions } from "vuex";

export default {
  name: "Category",

  components: {
    AppSelect,
  },

  computed: {
    ...mapState("Filter/Category", ["categories"]),
  },

  created() {
    if (this.$route.query.category) {
      this.setActive(this.$route.query.category);
    }
  },

  methods: {
    ...mapActions("Filter/Category", ["setActive"]),

    categoryChange(value) {
      this.$router.push({
        path: "/",
        query: {
          ...this.$route.query,
          category: value,
        },
      });
    },
  },
};
</script>
