<template>
    <a-row type="flex" align="middle" class="header">
        <a-col :span="2" :offset="2">
            <umt-back-arrow-icon v-if="back" @click="goBack" />
        </a-col>

        <a-col :span="16" class="title">
            <h2>{{ title }}</h2>
        </a-col>
    </a-row>
</template>

<script>
    import UmtBackArrowIcon from './icons/UmtBackArrowIcon.vue'

    export default {
        components: {
            UmtBackArrowIcon
        },
        props: {
            title: {
                required: false,
                type: String,
                default: ''
            },

            back: {
                required: false,
                type: String,
                default: ''
            }
        },
        methods: {
            goBack () {
                this.$router.push({ name: this.back })
            }
        }
    }
</script>
