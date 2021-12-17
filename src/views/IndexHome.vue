<template>
  <div>
    <h1 class="visually-hidden">Главная</h1>
    <div class="onlineshop-app__blueline"></div>
    <div class="onlineshop-app__wrapper">
      <TheFilter></TheFilter>
      <TheResults></TheResults>
    </div>
  </div>
</template>

<script>
import TheFilter from "@/modules/filter/components/TheFilter";
import TheResults from "@/modules/results/components/TheResults";

export default {
  name: "IndexHome",

  components: {
    TheFilter,
    TheResults,
  },
};
</script>
