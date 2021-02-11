<template>
    <div class="umt-page umt-page-optional-attributes">
        <a-row type="flex" justify="center">
            <a-col :span="18">
                <umt-position-group v-model="positions" />
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col :span="18">
                <umt-radio-group v-model="foot" name="foot" label="pie hábil">
                    <a-row type="flex" :gutter="12" class="radio-group-foot">
                        <a-col :span="12" :flex="1">
                            <umt-radio value="R">
                                Derecho
                            </umt-radio>
                        </a-col>
                        <a-col :span="12" :flex="1">
                            <umt-radio value="L">
                                Izquierdo
                            </umt-radio>
                        </a-col>
                    </a-row>
                </umt-radio-group>
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col :span="18">
                <a-row type="flex" :gutter="12" class="row-height-weight">
                    <a-col :span="12" :flex="1">
                        <umt-input placeholder="Estatura" type="number" suffix="cm" />
                    </a-col>
                    <a-col :span="12" :flex="1">
                        <umt-input placeholder="Peso" type="number" suffix="kg" />
                    </a-col>
                </a-row>
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
    import UmtPositionGroup from '../components/UmtPositionGroup.vue'
    import UmtLayoutStepMixin from './../mixins/umt-layout-step'

    export default {
        components: { UmtPositionGroup },
        mixins: [UmtLayoutStepMixin],
        layout: 'step',
        data () {
            return {
                stepTitle: 'habilidades y características',
                foot: 'R',
                positions: ['MD']
            }
        },
        methods: {
            next () {

            }
        }
    }
</script>
