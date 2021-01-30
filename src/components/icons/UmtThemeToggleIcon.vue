<template>
    <div class="umt-component umt-theme-toggle" @click="onPress">
        <img :src="src">
    </div>
</template>

<script>
    export default {
        name: 'UmtThemeToggle',
        computed: {
            src () {
                return require(`./../../assets/images/${this.$umtThemePrefix}-theme.svg`)
            }
        },
        methods: {
            onPress () {
                const currentTheme = this.$umtTheme

                if (currentTheme === 'light') {
                    this.$store.commit('theme/setTheme', {
                        currentTheme: 'dark',
                        currentThemePrefix: 'dm'
                    })
                } else {
                    this.$store.commit('theme/setTheme', {
                        currentTheme: 'light',
                        currentThemePrefix: 'lm'
                    })
                }
            }
        }
    }
</script>
