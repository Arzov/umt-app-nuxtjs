import Vue from 'vue'
import UmtComponents from 'umt-components'
import UmtDatePicker from './../components/UmtDatePicker.vue'

Vue.use(UmtComponents, {
  mode: 'mobile'
})

Vue.component('UmtDatePicker', UmtDatePicker)
