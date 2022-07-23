import PdButton from './pd-button/index.vue'
import PdInput from './pd-input/index.vue'

//es6 模块抛出写法
export default {
  install: function (Vue) {
    //vue的全局注册API
    Vue.component('PdButton', PdButton)
    Vue.component('PdInput', PdInput)
  }
}
