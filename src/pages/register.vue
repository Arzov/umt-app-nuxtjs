<template>
    <div class="umt-page umt-page-register">
        <a-row type="flex" justify="center">
            <a-col :span="18">
                <umt-input placeholder="Ingresa tu nombre" />
            </a-col>
        </a-row>
        <a-row type="flex" justify="center">
            <a-col :span="18">
                <umt-input placeholder="Ingresa tu correo electrónico" type="email" />
            </a-col>
        </a-row>
        <a-row type="flex" justify="center">
            <a-col :span="18">
                <umt-date-picker label="fecha de nacimiento" placeholder="Ingresa tu fecha de nacimiento" :max="getMaxDate" :min="getminDate" />
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import moment from 'moment'
    import UmtLayoutStepMixin from './../mixins/umt-layout-step'

    export default {
        mixins: [UmtLayoutStepMixin],
        layout: 'step',
        data () {
            return {
                stepTitle: 'ingresa tus datos',
                stepBackView: 'start'
            }
        },
        computed: {
            getMaxDate () {
                return moment().subtract(16, 'years').add(1, 'days').toDate()
            },

            getminDate () {
                return moment().subtract(60, 'years').add(1, 'days').toDate()
            }
        }
    }
</script>
