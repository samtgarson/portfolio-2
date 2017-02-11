<script>
import { dist, vars } from '~assets/utils'

const decouple = typeof (window) === 'undefined' ? null : require('decouple')

export default {
  data () {
    return { colours: [], radius: null }
  },
  mounted () {
    this.updateSize()
    decouple(window, 'resize', this.updateSize.bind(this))
    setTimeout(() => this.colours.push(vars.base), 0)
  },
  methods: {
    change (colour) {
      this.colours.push(colour)
    },
    updateSize () {
      const { innerWidth: w, innerHeight: h } = window
      this.radius = `${dist([0, 0], [w * 1.5, h * 1.5])}px`
    },
    cleanup () {
      if (this.colours.length > 1) this.colours = [this.colours[this.colours.length - 1]]
    }
  }
}
</script>
<template lang="pug">
transition-group(appear, tag="div", @after-enter="cleanup").background
  .colour(v-for="colour in colours", :style="{ backgroundColor: colour, width: radius, height: radius }", key="colour")
</template>
<style lang="sass" scoped>
.background
  position: absolute
  left: 0
  right: 0
  top: 0
  bottom: 0  
  z-index: -1

.colour
  position: absolute
  left: 75%
  top: 25%
  transform: translate3D(-50%, -50%, 0)
  border-radius: 150vw
  display: block

.v-enter-active
  transition: .6s transform cubic-bezier(0.4, 0.0, 0.2, 1)

.v-enter
  transform: translate3D(-50%, -50%, 0) scale(0)

.v-enter-to
  transform: translate3D(-50%, -50%, 0) scale(1)

</style>
