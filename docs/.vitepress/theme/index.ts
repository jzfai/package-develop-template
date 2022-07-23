import theme from 'vitepress/dist/client/theme-default'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components'
// import '../../../src/styles/index.css'
import './styles/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import component from 'components'
export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
    app.component('AlComponent', coomponent)
    app.use(ElementPlus, { size: 'small', locale: zhCn })

    registerComponents(app)
  }
}
