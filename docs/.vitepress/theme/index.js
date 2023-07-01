import DefaultTheme from 'vitepress/theme'
import PageLayout from './PageLayout.vue'

import './custom.css'

export default {
  ...DefaultTheme,
  Layout: PageLayout,
}
