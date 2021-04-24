import Vue from 'vue'
import UmtComponents from 'umt-components'
import UmtDatePicker from './../components/UmtDatePicker.vue'

// Backgrounds
import UmtHomeBkg from './../components/backgrounds/UmtHomeBkg.vue'

export default ({ store }) => {
    Vue.use(UmtComponents, {
        mode: 'mobile',
        store
    })

    Vue.component('UmtDatePicker', UmtDatePicker)
    Vue.component('UmtHomeBkg', UmtHomeBkg)
}
