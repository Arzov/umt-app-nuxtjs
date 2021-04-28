<template>
    <umt-layout-base>
        <div class="umt-layout umt-layout-step">
            <div class="background">
                <component :is="bkg" />
            </div>
            <div class="content">
                <umt-layout-step-header :title="title" :back="back" :show-theme-toggle="showThemeToggle" />

                <div class="page-wrapper">
                    <Nuxt />
                </div>
            </div>
        </div>
    </umt-layout-base>
</template>

<script>
    import { mapGetters } from 'vuex'
    import UmtLayoutBase from '../components/UmtLayoutBase.vue'
    import UmtLayoutStepHeader from '../components/UmtLayoutStepHeader.vue'

    export default {
        components: { UmtLayoutBase, UmtLayoutStepHeader },
        computed: {
            ...mapGetters({
                title: 'layout-step/currentTitle',
                back: 'layout-step/backView',
                bkg: 'layout-step/background',
                showThemeToggle: 'layout-step/showThemeToggle'
            })
        }
    }
</script>
