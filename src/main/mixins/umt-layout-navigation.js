export default {
    beforeMount () {
      this.$store.commit('layout-home/setActiveTab', this.layoutActiveTab)
      this.$store.commit('layout-home/setBackground', this.layoutBackground)
    }
  }
