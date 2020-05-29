import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import CalculatorView from "../views/CalculatorView.vue";
import PriceView from "../views/PriceView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "CalculatorView",
    component: CalculatorView
  },
  {
    path: "/price",
    name: "PriceView",
    component: PriceView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
