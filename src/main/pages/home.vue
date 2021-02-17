<template>
    <div class="umt-page umt-page-home">
        <a-row type="flex" justify="center" class="container">
            <a-col :span="22">

                <!-- CONTENT -->
                <a-row type="flex" justify="end" align="middle" class="profile">
                    <a-col :flex="1">
                        <div class="greeting">
                            <h2 @click="changeMode">
                                ¡Hola Jesús!
                            </h2>
                            <span>Busca nuevos desafíos.</span>
                        </div>
                    </a-col>

                    <a-col :span="3">
                        <umt-profile :mode="$umtThemePrefix">
                            <umt-profile slot="extra" :mode="$umtThemePrefix" type="team" />
                        </umt-profile>
                    </a-col>
                </a-row>

                <a-row type="flex" class="news">
                    <a-col :span="24">
                        <h3 class="news-title">
                            Noticias
                        </h3>
                    </a-col>
                </a-row>
                <a-row type="flex" class="news-slide">
                    <a-col :span="24">
                        <umt-transfer-cell v-for="(t, index) in transfers" :key="index" :team="t.team" :profile="t.profile" :date="t.date" />
                    </a-col>
                </a-row>

            </a-col>
        </a-row>

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
                            <umt-button @click="onAcceptGeoloc">
                                aceptar
                            </umt-button>
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
    import UmtLayoutHomeMixin from './../mixins/umt-layout-home'

    export default {
        components: { UmtPinIcon },
        mixins: [UmtLayoutHomeMixin],
        layout: 'home',
        data () {
            return {
                layoutActiveTab: 'home',
                layoutBackground: 'UmtHomeBkg',
                showModalGeoloc: true,
                transfers: [
                    {
                        team: {
                            name: 'CHELSEA F.C.',
                            image: 'https://upload.wikimedia.org/wikipedia/an/thumb/c/cc/Chelsea_FC.svg/600px-Chelsea_FC.svg.png'
                        },

                        profile: {
                            name: 'Jesús',
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5P2YvYCnhLOhxuBrRHycZ7g-bQTMcL8yGg&usqp=CAU'
                        },

                        date: '2021-02-16'
                    }
                ]
            }
        },
        methods: {
            onAcceptGeoloc () {
                this.showModalGeoloc = false
            },

            changeMode () {
                this.$store.commit('umt-components/setTheme', 'dm')
            }
        }
    }
</script>
