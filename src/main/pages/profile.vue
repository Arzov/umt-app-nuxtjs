<template>
    <div class="umt-page umt-page-profile">
        <a-row type="flex">
            <a-col :span="3" :offset="3" class="profile-wrapper">
                <img :src="require('@/assets/images/bkg-3-tl.svg')" class="profile-bkg">
                <umt-profile class="profile" />
            </a-col>

            <a-col :span="16" class="info">
                <h3>{{ name }}</h3>
                <h4 class="teams">
                    {{ teams.toUpperCase() }}
                </h4>
                <img v-for="(t, index) of teamsLogo" :key="index" :src="t" class="team-logo">
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
                stepTitle: 'perfil',
                stepBackView: 'home',
                stepShowThemeToggle: true,
                stepBackgroundComponentName: 'UmtProfileBkg'
            }
        },
        computed: {
            name () {
                return 'Jesús Barrientos'
            },

            teams () {
                return 'Chelsea F.C. | FC Barcelona'
            },

            teamsLogo () {
                return [
                    'https://upload.wikimedia.org/wikipedia/an/thumb/c/cc/Chelsea_FC.svg/600px-Chelsea_FC.svg.png',
                    'https://i.pinimg.com/originals/4e/87/0c/4e870c6d61be9306bd9681554b0df83d.png'
                ]
            }
        }
    }
</script>
