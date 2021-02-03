<template>
    <umt-layout-base>
        <div class="umt-layout umt-layout-step">
            <div class="background">
                <a-row type="flex" justify="end">
                    <a-col :span="11">
                        <img src="./../assets/images/bkg-1-tr.svg">
                    </a-col>
                </a-row>

                <a-row class="bkg-bl" type="flex" justify="start" align="bottom">
                    <a-col :span="10">
                        <img src="./../assets/images/bkg-1-bl.svg">
                    </a-col>
                </a-row>
            </div>
            <div class="content">
                <umt-layout-step-header :title="title" :back="back" />

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
                title: 'layout-step-header/currentTitle',
                back: 'layout-step-header/backView'
            })
        }
    }
</script>
