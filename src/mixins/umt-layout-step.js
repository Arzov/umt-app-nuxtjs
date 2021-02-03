export default {
  beforeMount () {
    this.$store.commit('layout-step-header/setTitle', this.stepTitle)
    this.$store.commit('layout-step-header/setBackView', this.stepBackView)
  }
}
