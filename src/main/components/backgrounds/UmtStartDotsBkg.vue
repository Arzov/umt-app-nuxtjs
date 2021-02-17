<template>
    <div class="umt-component umt-bkg umt-start-dots">
        <img :src="src">
    </div>
</template>

<script>
    export default {
        name: 'UmtStartDotsBkg',
        computed: {
            src () {
                return require(`./../../assets/images/${this.$umtThemePrefix}-points.svg`)
            }
        }
    }
</script>
