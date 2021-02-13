<template>
    <div class="umt-page umt-page-required-attributes">
        <a-row type="flex" justify="center">
            <a-col :span="18">
                <umt-date-picker label="fecha de nacimiento" placeholder="Ingresa tu fecha de nacimiento" :max="getMaxDate" :min="getminDate" />
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col :span="18">
                <umt-radio-group v-model="gender" name="gender" label="sexo">
                    <a-row type="flex" :gutter="12" class="radio-group-row">
                        <a-col :span="12" :flex="1">
                            <umt-radio value="M">
                                Masculino
                            </umt-radio>
                        </a-col>
                        <a-col :span="12" :flex="1">
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
                <umt-button @click="next">
                    continuar
                </umt-button>
            </a-col>
        </a-row>

        <a-row class="close-session" type="flex" justify="center">
            <a-col>
                <a><b>Cerrar sesión</b></a>
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
                stepTitle: 'datos necesarios',
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
        },
        methods: {
            next () {
                this.$router.push({ path: 'optional-attributes' })
            }
        }
    }
</script>
