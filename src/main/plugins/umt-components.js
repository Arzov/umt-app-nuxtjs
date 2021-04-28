import Vue from 'vue'
import UmtComponents from 'umt-components'
import UmtDatePicker from './../components/UmtDatePicker.vue'

// Backgrounds
import UmtHomeBkg from './../components/backgrounds/UmtHomeBkg.vue'
import UmtStepBkg from './../components/backgrounds/UmtStepBkg.vue'
import UmtProfileBkg from './../components/backgrounds/UmtProfileBkg.vue'

export default ({ store }) => {
    Vue.use(UmtComponents, {
        mode: 'mobile',
        store
    })

    Vue.component('UmtDatePicker', UmtDatePicker)
    Vue.component('UmtHomeBkg', UmtHomeBkg)
    Vue.component('UmtStepBkg', UmtStepBkg)
    Vue.component('UmtProfileBkg', UmtProfileBkg)
}
