<template>
  <div>
    <slot :change="onChange"></slot>
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
       * on-has-query-init - Если в url есть квери параметр, то передаст эмит родителю
       * с этим квери параметром
       */
      this.$emit("on-has-query-init", this.$route.query[this.queryParamKey]);
    }
  },

  methods: {
    onChange(value) {
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
