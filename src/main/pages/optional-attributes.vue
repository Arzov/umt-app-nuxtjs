<template>
    <div class="umt-page umt-page-optional-attributes">
        <a-row type="flex" justify="center">
            <a-col :span="18">
                <umt-position-group v-model="positions" @info="showModal = true" />
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

        <!-- MODALS -->
        <umt-modal v-if="showModal" class="modal-positions" @click="showModal = false">
            <a-row type="flex" justify="center">
                <a-col>
                    <h2 class="umt-modal-title">
                        Posiciones de juego
                    </h2>
                </a-col>
            </a-row>
            <a-row type="flex" justify="center">
                <a-col :span="20">
                    <p class="info">
                        Puedes elegir una o más opciones. Tu posición será visible para otros rivales cuando quieras unirte como parche a una partida.
                    </p>
                </a-col>
            </a-row>

            <a-row type="flex" justify="center">
                <a-col :span="20">
                    <a-row
                        v-for="pos in allPositions"
                        :key="pos.key"
                        type="flex"
                        :gutter="12"
                        align="middle"
                        class="position-row"
                    >
                        <a-col>
                            <umt-position-badge :pos="pos.key" :value="true" />
                        </a-col>

                        <a-col :flex="1">
                            <span>{{ pos.label }}</span>
                        </a-col>
                    </a-row>
                </a-col>
            </a-row>
        </umt-modal>
    </div>
</template>

<script>
    import UmtPositionGroup from '../components/UmtPositionGroup.vue'
    import UmtLayoutStepMixin from './../mixins/umt-layout-step'

    const allPositions = [
        { key: 'PO', label: 'Portero' },
        { key: 'DFI', label: 'Defensa izquierdo' },
        { key: 'DFC', label: 'Defensa central' },
        { key: 'DFD', label: 'Defensa derecho' },
        { key: 'MI', label: 'Medio campo izquierdo' },
        { key: 'MC', label: 'Medio campo' },
        { key: 'MD', label: 'Medio campo derecho' },
        { key: 'DI', label: 'Delantero izquierdo' },
        { key: 'DC', label: 'Delantero centro' },
        { key: 'DD', label: 'Delantero derecho' }
    ]

    export default {
        components: { UmtPositionGroup },
        mixins: [UmtLayoutStepMixin],
        layout: 'step',
        data () {
            return {
                stepTitle: 'habilidades y características',
                allPositions,
                foot: 'R',
                positions: ['PO', 'MD'],
                showModal: false
            }
        },
        methods: {
            next () {
                this.$router.push({ path: 'optional-filters' })
            }
        }
    }
</script>
