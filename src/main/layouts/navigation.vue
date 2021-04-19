<template>
    <umt-layout-base>
        <div class="umt-layout umt-layout-home">
            <div class="background">
                <component :is="background" />
            </div>
            <div class="content">
                <div class="page-wrapper">
                    <Nuxt />
                </div>
                <umt-navigation-bar :tabs="tabs" :mode="$umtThemePrefix" :active-tab="activeTab" />
            </div>
        </div>
    </umt-layout-base>
</template>

<script>
    import { mapGetters } from 'vuex'
    import UmtLayoutBase from '../components/UmtLayoutBase.vue'
    const { NavigationBar } = window

    export default {
        components: { UmtLayoutBase },
        computed: {
            ...mapGetters({
                tabs: 'layout-home/tabs',
                activeTab: 'layout-home/activeTab',
                background: 'layout-home/background'
            })
        },
        mounted () {
            setTimeout(() => {
                const currentTheme = this.$store.getters['theme/currentTheme']
                const themeElement = document.getElementById('theme-provider')
                const style = getComputedStyle(themeElement)
                const backgroundColor = style.getPropertyValue('--navigation-bar-bkg-color')

                // Configura color de navigation-bar
                if (currentTheme === 'light') {
                    NavigationBar.backgroundColorByHexString(backgroundColor.trim(), true)
                } else {
                    NavigationBar.backgroundColorByHexString(backgroundColor.trim(), false)
                }
            }, 1)
        }
    }
</script>
