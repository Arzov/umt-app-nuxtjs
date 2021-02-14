<template>
    <div class="umt-page umt-page-home">
        <!-- MODALS -->
        <umt-modal v-if="showModalGeoloc" class="modal-geoloc">
            <a-row type="flex" justify="center">
                <a-col>
                    <umt-pin-icon class="pin" />
                </a-col>
            </a-row>
            <a-row type="flex" justify="center">
                <a-col>
                    <h2 class="umt-modal-title">
                        Comparte tu ubicación
                    </h2>
                </a-col>
            </a-row>
            <a-row type="flex" justify="center">
                <a-col :span="20">
                    <p class="info">
                        Umatch utiliza tu ubicación para encontrar rivales cercanos. Presiona el botón “Aceptar” y luego debes permitir el acceso a la ubicación, de lo contrario no podrás usar la aplicación.
                    </p>
                </a-col>
            </a-row>

            <a-row type="flex" justify="center">
                <a-col :span="20">
                    <a-row type="flex">
                        <a-col :flex="1">
                            <umt-button>aceptar</umt-button>
                        </a-col>
                    </a-row>

                    <a-row type="flex" justify="center" class="close-sesion">
                        <a-col>
                            <a><b>Cerrar sesión</b></a>
                        </a-col>
                    </a-row>
                </a-col>
            </a-row>
        </umt-modal>
    </div>
</template>

<script>
    import UmtPinIcon from '../components/icons/UmtPinIcon.vue'

    export default {
        components: { UmtPinIcon },
        data () {
            return {
                showModalGeoloc: true
            }
        }
    }
</script>
