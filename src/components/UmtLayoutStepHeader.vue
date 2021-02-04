<template>
    <a-row type="flex" align="middle" class="header">
        <a-col :span="3" :offset="2">
            <umt-back-arrow @click="goBack" />
        </a-col>

        <a-col :span="14" class="title">
            <h2>{{ title }}</h2>
        </a-col>
    </a-row>
</template>

<script>
    import UmtBackArrow from './icons/UmtBackArrow.vue'

    export default {
        components: {
            UmtBackArrow
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
