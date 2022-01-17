import Category from "@/modules/filter/store/category/category.store";
import Price from "@/modules/filter/store/price/price.store";
import Camera from "@/modules/filter/store/camera/camera.store";
import Estate from "@/modules/filter/store/estate/estate.store";

export default {
  namespaced: true,

  modules: {
    Category,
    Price,
    Camera,
    Estate,
  },
};
