<template>
  <div>
    <slot :change="onSelectChange"></slot>
  </div>
</template>

<script>
export default {
  name: "WithAddQueryParam",

  props: {
    queryParamKey: {
      type: String,
      required: true,
    },
  },

  created() {
    if (this.$route.query[this.queryParamKey]) {
      /**
       * set-active - Если в url есть квери параметр, то передаст эмит родителю
       * с этим квери параметром
       */
      this.$emit("set-active", this.$route.query[this.queryParamKey]);
    }
  },

  methods: {
    onSelectChange(value) {
      this.$router.push({
        path: "/",
        query: {
          ...this.$route.query,
          [this.queryParamKey]: value,
        },
      });
    },
  },
};
</script>
