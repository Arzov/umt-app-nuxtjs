export default {
  beforeMount () {
    this.$store.commit('layout-step/setTitle', this.stepTitle)
    this.$store.commit('layout-step/setBackView', this.stepBackView)
    this.$store.commit('layout-step/setBackground', this.stepBackgroundComponentName)
    this.$store.commit('layout-step/setShowThemeToggle', this.stepShowThemeToggle)
  }
}
