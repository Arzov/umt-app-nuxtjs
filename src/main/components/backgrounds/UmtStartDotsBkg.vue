<template>
    <div class="umt-component umt-start-dots">
        <img :src="src">
    </div>
</template>

<script>
    export default {
        name: 'UmtThemeToggle',
        computed: {
            src () {
                return require(`./../../assets/images/${this.$umtThemePrefix}-points.svg`)
            }
        }
    }
</script>
