<template>
    <div class="umt-page umt-page-home">
        <a-row type="flex" justify="center" class="container">
            <a-col :span="22" class="container-col">

                <!-- CONTENT -->
                <a-row type="flex" justify="end" align="middle" class="profile">
                    <a-col :flex="1">
                        <div class="greeting">
                            <h2>
                                ¡Hola Jesús!
                            </h2>
                            <span>Busca nuevos desafíos.</span>
                        </div>
                    </a-col>

                    <a-col :span="3">
                        <umt-profile @click="toProfile">
                            <umt-profile slot="extra" type="team" />
                        </umt-profile>
                    </a-col>
                </a-row>

                <!-- NEWS -->
                <a-row type="flex" class="news">
                    <a-col :span="24">
                        <h3 class="news-title">
                            Noticias
                        </h3>
                    </a-col>
                </a-row>
                <a-row type="flex" justify="center" class="news-slide">
                    <a-col :span="24">
                        <umt-slide v-if="umtLoading">
                            <umt-skeleton v-for="index in 3" :key="index" />
                        </umt-slide>
                        <keep-alive v-else>
                            <umt-slide>
                                <umt-transfer-cell v-for="(t, index) in transfers" :key="index" :team="t.team" :profile="t.profile" :date="t.date" />
                            </umt-slide>
                        </keep-alive>
                    </a-col>
                </a-row>

                <!-- TABS -->
                <a-row type="flex" class="tabs">
                    <a-col :span="24">
                        <umt-tabs>
                            <!-- CHALLENGES -->
                            <umt-tab-panel tab="1" label="desafiar" class="panel panel-challenges">
                                <div v-if="umtLoading" class="list">
                                    <umt-skeleton v-for="index in 3" :key="index" />
                                </div>
                                <div v-if="!umtLoading" class="list">
                                    <umt-request-cell v-for="(c, index) in challenges" :key="index" :team="c" button-label="desafiar" />
                                </div>
                            </umt-tab-panel>

                            <!-- PATCH -->
                            <umt-tab-panel tab="2" label="parchar" class="panel no-scroll panel-patches">
                                <p>Únete a partidos cercanos a ti. Puedes parchar de manera individual a equipos que requieran de jugadores.</p>
                                <div v-if="umtLoading" class="list">
                                    <umt-skeleton v-for="index in 2" :key="index" />
                                </div>
                                <div v-if="!umtLoading" class="list">
                                    <umt-patch-cell v-for="(m, index) in matches" :key="index" :match="m" />
                                </div>
                            </umt-tab-panel>

                            <!-- TEAMS -->
                            <umt-tab-panel tab="3" label="equipos" class="panel no-scroll panel-teams">
                                <p>¿No tienes equipo? Busca uno cercano a ti o encuentra uno por su nombre.</p>
                                <umt-input type="search" placeholder="Busca un equipo" />

                                <div v-if="umtLoading" class="list">
                                    <umt-skeleton v-for="index in 3" :key="index" />
                                </div>
                                <div v-if="!umtLoading" class="list">
                                    <umt-request-cell v-for="(t, index) in teams" :key="index" :team="t" button-label="solicitar" />
                                </div>
                            </umt-tab-panel>
                        </umt-tabs>
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
    import UmtLayoutNavigationMixin from '../mixins/umt-layout-navigation'

    export default {
        components: { UmtPinIcon },
        mixins: [UmtLayoutNavigationMixin],
        layout: 'navigation',
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
                    },
                    {
                        team: {
                            name: 'MAN. UNITED',
                            image: 'https://1.bp.blogspot.com/-H7yH4f3xhcc/W13iC-mChEI/AAAAAAAAJNk/NKrpWalUMioc-ssVO6PSXwFroNRIyD4JQCLcBGAs/s320/1.png'
                        },

                        profile: {
                            name: 'Franco',
                            image: 'https://avatars.githubusercontent.com/u/4986311?s=460&v=4'
                        },

                        date: '2021-01-25'
                    },
                    {
                        team: {
                            name: 'MAN. UNITED',
                            image: 'https://1.bp.blogspot.com/-H7yH4f3xhcc/W13iC-mChEI/AAAAAAAAJNk/NKrpWalUMioc-ssVO6PSXwFroNRIyD4JQCLcBGAs/s320/1.png'
                        },

                        profile: {
                            name: 'Diego',
                            image: 'https://lh3.googleusercontent.com/yBL734dVthXXAvh2CNtBa535bHIVyPoAmKa_4YOBJhp-ofChRGW9QAdE88DoBA07kxp_Uw=s85'
                        },

                        date: '2021-02-10'
                    }
                ],
                showA: true,
                showB: true,
                challenges: [
                    {
                        name: 'MAN. UNITED',
                        image: 'https://1.bp.blogspot.com/-H7yH4f3xhcc/W13iC-mChEI/AAAAAAAAJNk/NKrpWalUMioc-ssVO6PSXwFroNRIyD4JQCLcBGAs/s320/1.png',
                        distance: 2
                    },
                    {
                        name: 'REAL MADRID',
                        image: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/1.png',
                        distance: 5
                    },
                    {
                        name: 'BAYERN MUNICH',
                        image: 'https://www.logofootball.net/wp-content/uploads/FC-Bayern-Munich-Logo.png',
                        distance: 3
                    },
                    {
                        name: 'BORUSSIA DORTMUND',
                        image: 'https://2.bp.blogspot.com/-sNt8VyJtStw/WVUE6AHVB7I/AAAAAAABKZU/Ts238O_8GVEaqDCmCu56NV9xZ457dvwUQCLcBGAs/s1600/Borussia%2BDortmund.png',
                        distance: 4.5
                    },
                    {
                        name: 'SCHALKE 04',
                        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/FC_Schalke_04_Logo.png/768px-FC_Schalke_04_Logo.png',
                        distance: 1
                    },
                    {
                        name: 'ARSENAL F.C.',
                        image: 'https://1.bp.blogspot.com/-YTfHg_rLRcI/XSPhR75-1hI/AAAAAAAAQzg/mKnWtxoM9jo7IIF7b43LPZPh4xQuK2T6gCLcBGAs/s1600/escudo1.png',
                        distance: 2.5
                    }
                ],
                matches: [
                    {
                        date: '26/08',
                        teams: [
                            {
                                name: 'MAN. UNITED',
                                image: 'https://1.bp.blogspot.com/-H7yH4f3xhcc/W13iC-mChEI/AAAAAAAAJNk/NKrpWalUMioc-ssVO6PSXwFroNRIyD4JQCLcBGAs/s320/1.png',
                                distance: 2
                            },
                            {
                                name: 'REAL MADRID',
                                image: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/1.png',
                                distance: 5
                            }
                        ],
                        patches: [2, 3]
                    }
                ],
                teams: [
                    {
                        name: 'SCHALKE 04',
                        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/FC_Schalke_04_Logo.png/768px-FC_Schalke_04_Logo.png',
                        distance: 1
                    },
                    {
                        name: 'MAN. UNITED',
                        image: 'https://1.bp.blogspot.com/-H7yH4f3xhcc/W13iC-mChEI/AAAAAAAAJNk/NKrpWalUMioc-ssVO6PSXwFroNRIyD4JQCLcBGAs/s320/1.png',
                        distance: 2
                    },
                    {
                        name: 'ARSENAL F.C.',
                        image: 'https://1.bp.blogspot.com/-YTfHg_rLRcI/XSPhR75-1hI/AAAAAAAAQzg/mKnWtxoM9jo7IIF7b43LPZPh4xQuK2T6gCLcBGAs/s1600/escudo1.png',
                        distance: 2.5
                    },
                    {
                        name: 'BAYERN MUNICH',
                        image: 'https://www.logofootball.net/wp-content/uploads/FC-Bayern-Munich-Logo.png',
                        distance: 3
                    },
                    {
                        name: 'BORUSSIA DORTMUND',
                        image: 'https://2.bp.blogspot.com/-sNt8VyJtStw/WVUE6AHVB7I/AAAAAAABKZU/Ts238O_8GVEaqDCmCu56NV9xZ457dvwUQCLcBGAs/s1600/Borussia%2BDortmund.png',
                        distance: 4.5
                    }
                ]
            }
        },
        mounted () {
            // TODO eliminar después de implementar API
            setTimeout(() => {
                this.umtLoading = false
            }, 5000)
        },
        methods: {
            onAcceptGeoloc () {
                this.showModalGeoloc = false
            },

            toProfile () {
                this.$router.push({ path: 'profile' })
            }
        }
    }
</script>
