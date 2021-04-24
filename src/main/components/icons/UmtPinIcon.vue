<template>
    <div class="umt-component umt-pin">
        <img :src="src">
    </div>
</template>

<script>
    export default {
        name: 'UmtThemeToggle',
        computed: {
            src () {
                return require(`./../../assets/images/${this.$umtThemePrefix}-pin.svg`)
            }
        }
    }
</script>
