<template>
    <div class="umt-page umt-page-optional-filters">
        <a-row type="flex" justify="center">
            <a-col :span="18">
                <umt-radio-group v-model="gameMode" name="game" label="tipo de juego">
                    <a-row type="flex" :gutter="12" class="radio-group-mode">
                        <a-col :span="8" :flex="1">
                            <umt-radio value="5v5">
                                5v5
                            </umt-radio>
                        </a-col>
                        <a-col :span="8" :flex="1">
                            <umt-radio value="7v7">
                                7v7
                            </umt-radio>
                        </a-col>
                        <a-col :span="8" :flex="1">
                            <umt-radio value="11v11">
                                11v11
                            </umt-radio>
                        </a-col>
                    </a-row>
                </umt-radio-group>
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col :span="18">
                <umt-radio-group v-model="gender" name="gender" label="busco rivales">
                    <a-row type="flex" :gutter="12" class="radio-group-gender">
                        <a-col :span="12" :flex="1">
                            <umt-radio value="M">
                                Hombres
                            </umt-radio>
                        </a-col>
                        <a-col :span="12" :flex="1">
                            <umt-radio value="F">
                                Mujeres
                            </umt-radio>
                        </a-col>
                    </a-row>
                </umt-radio-group>
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col :span="18">
                <umt-range v-model="age" label="rango de edad" :min="18" :max="60" />
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col :span="18">
                <p class="info">
                    Ingresa tus filtros para poder encontrar rivales según tus preferencias.
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

        <a-row class="skip" type="flex" justify="center">
            <a-col>
                <a><b>Omitir</b></a>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import UmtLayoutStepMixin from './../mixins/umt-layout-step'

    export default {
        mixins: [UmtLayoutStepMixin],
        layout: 'step',
        data () {
            return {
                stepTitle: '¿a qué rivales buscas?',
                gameMode: '5v5',
                gender: 'M',
                age: [18, 30]
            }
        },
        methods: {
            next () {
                // this.$router.push({ path: 'optional-filters' })
            }
        }
    }
</script>
