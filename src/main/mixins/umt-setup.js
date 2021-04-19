import { Plugins, StatusBarStyle } from '@capacitor/core'
const { StatusBar } = Plugins
const { NavigationBar } = window

export default {
    data () {
        return {
            umtLoading: true
        }
    },
    computed: {
        $umtTheme () {
            const currentTheme = this.$store.getters['theme/currentTheme']

            setTimeout(() => {
                const themeElement = document.getElementById('theme-provider')

                if (themeElement != null) {
                    const style = getComputedStyle(themeElement)
                    const backgroundColor = style.getPropertyValue('--color-background')

                    // Configura color de fondo de status-bar
                    StatusBar.setStyle({
                        style: currentTheme === 'light' ? StatusBarStyle.Light : StatusBarStyle.Dark
                    })
                    StatusBar.setBackgroundColor({
                        color: backgroundColor.trim()
                    })

                    // Configura overlay para notch
                    StatusBar.setOverlaysWebView({
                        overlay: false
                    })

                    // Configura color de navigation-bar
                    if (currentTheme === 'light') {
                        NavigationBar.backgroundColorByHexString(backgroundColor.trim(), true)
                    } else {
                        NavigationBar.backgroundColorByHexString(backgroundColor.trim(), false)
                    }
                }
            }, 1)

            return currentTheme
        },

        $umtThemePrefix () {
            return this.$store.getters['theme/currentThemePrefix']
        }
    }
}
