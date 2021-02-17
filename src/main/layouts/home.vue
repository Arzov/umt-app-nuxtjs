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

    export default {
        components: { UmtLayoutBase },
        computed: {
            ...mapGetters({
                tabs: 'layout-home/tabs',
                activeTab: 'layout-home/activeTab',
                background: 'layout-home/background'
            })
        }
    }
</script>
