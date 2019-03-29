// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MainComponent from './MainComponent'
import router from './router'
import Tools from './lib/Tools'
// 导入vue-easytable
import 'vue-easytable/libs/themes-base/index.css'
import {VTable,VPagination} from 'vue-easytable'
// 导入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
// 导入vue-easytable
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
// 
Vue.use(ElementUI);
/* eslint-disable no-new */
/**
 * 如果路由不固定，应当从服务器加载路由列表
 */
new Vue({
  el: '#app',
  router,
  components: { MainComponent },
  template: '<MainComponent/>'
})

