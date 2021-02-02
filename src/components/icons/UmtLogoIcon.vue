<template>
    <div class="umt-component umt-logo">
        <img :src="src">
    </div>
</template>

<script>
    export default {
        name: 'UmtThemeToggle',
        computed: {
            src () {
                return require(`./../../assets/images/${this.$umtThemePrefix}-logo.svg`)
            }
        }
    }
</script>
