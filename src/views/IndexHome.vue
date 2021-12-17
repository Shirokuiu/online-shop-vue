<template>
  <div>
    <h1 class="visually-hidden">Главная</h1>
    <div class="onlineshop-app__blueline"></div>
    <div class="onlineshop-app__wrapper">
      <TheFilter></TheFilter>
    </div>
  </div>
</template>

<script>
import TheFilter from "@/modules/filter/components/TheFilter";

export default {
  name: "IndexHome",

  components: {
    TheFilter,
  },
};
</script>
