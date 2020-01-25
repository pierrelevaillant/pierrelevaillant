import Vue from "vue"

import Navigation from '~/components/Navigation/Navigation.vue'
import ImageResponsive from "~/components/Image/ImageResponsive"
import SpacingLarge from '~/components/Spacing/SpacingLarge'
import SpacingMedium from '~/components/Spacing/SpacingMedium'
import SpacingSmall from '~/components/Spacing/SpacingSmall'
import SpacingTiny from '~/components/Spacing/SpacingTiny'
import SingleNumber from '~/components/Numbers/SingleNumber'
import Quote from '~/components/Blockquote/Quote'

Vue.component("ImageResponsive", ImageResponsive)
Vue.component("SpacingLarge", SpacingLarge)
Vue.component("SpacingMedium", SpacingMedium)
Vue.component("SpacingSmall", SpacingSmall)
Vue.component("SpacingTiny", SpacingTiny)
Vue.component("SingleNumber", SingleNumber)
Vue.component("Quote", Quote)
Vue.component("Navigation", Navigation)
