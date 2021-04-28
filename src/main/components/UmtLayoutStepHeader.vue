<template>
    <a-row type="flex" align="middle" class="header">
        <a-col :span="2" :offset="2">
            <umt-back-arrow-icon v-if="back" @click="goBack" />
        </a-col>

        <a-col :span="16" class="title">
            <h2>{{ title }}</h2>
        </a-col>

        <a-col v-if="showThemeToggle" :span="2">
            <umt-theme-toggle-icon style="width: 75%; margin: auto;" />
        </a-col>
    </a-row>
</template>

<script>
    import UmtBackArrowIcon from './icons/UmtBackArrowIcon.vue'
    import UmtThemeToggleIcon from './icons/UmtThemeToggleIcon.vue'

    export default {
        components: {
            UmtBackArrowIcon,
            UmtThemeToggleIcon
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
            },

            showThemeToggle: {
                required: false,
                type: Boolean,
                default: false
            }
        },
        methods: {
            goBack () {
                this.$router.push({ name: this.back })
            }
        }
    }
</script>
