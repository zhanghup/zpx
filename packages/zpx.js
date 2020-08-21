// import Vue from "vue";
import { GetValue, GetFormat } from "./init/value";
import Promisem from "./init/promise";
import ajax from "./init/utils/ajax.js";
import utils from "./init/utils/index";

export { GetValue, GetFormat, Promisem, ajax };

export default function(Vue, param = {}) {
  Vue.prototype.$utils = utils;
  Vue.prototype.$v = GetValue;
  Vue.prototype.$f = GetFormat;
  return new Vue(param);
}
