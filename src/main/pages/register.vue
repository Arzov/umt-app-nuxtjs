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
        <a-row type="flex" justify="center">
            <a-col :span="18">
                <umt-radio-group v-model="gender" name="gender" label="sexo">
                    <a-row type="flex" :gutter="12">
                        <a-col :span="12">
                            <umt-radio value="M">
                                Masculino
                            </umt-radio>
                        </a-col>
                        <a-col :span="12">
                            <umt-radio value="F">
                                Femenino
                            </umt-radio>
                        </a-col>
                    </a-row>
                </umt-radio-group>
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col :span="18">
                <p class="info">
                    *Tu edad y sexo permitirán a otros rivales
                    encontrarte y desafiarte en un match.
                </p>
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col :span="18">
                <umt-button>registrar</umt-button>
            </a-col>
        </a-row>

        <a-row class="terms" type="flex" justify="center">
            <a-col>
                <a>Términos y condiciones</a>
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
                stepBackView: 'start',
                gender: 'M'
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
