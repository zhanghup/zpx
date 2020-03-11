import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
import _init from "./init";
import fnrouter from "./init/router.js";
import fnstore from "./init/store.js";

import components from "./components/index.js";

for (let k in components) {
  Vue.component(k, components[k]);
}

class vue extends Vue {
  static sync = {};

  constructor(param) {
    vue.sync = { ...vue.sync, ..._init(param) };
    super(vue.sync);
  }

  static initRouter(routes) {
    if (!routes) return;
    this.sync.router = fnrouter(routes);
    return this.sync.router;
  }

  static initVuex(store) {
    if (!store) return;
    this.sync.store = fnstore(store);
    return this.sync.store;
  }
}

vue.use(Vant);
export default vue;