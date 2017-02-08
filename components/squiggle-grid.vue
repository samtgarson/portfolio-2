<script>
import Poisson from 'poisson-disk-sampling'
import Squiggle from './squiggle'
import vars from '!!sass-variable-loader!~/assets/global.sass'

const MIN_DIST = 160
const TARGET_FACTOR = .7
const dist = ([x, y], [xt, yt]) => Math.sqrt(((xt - x)**2) + ((yt - y)**2))

export default {
  data () {
    return { 
      points: [],
      pds: null,
      squiggles: [],
      dimensions: {}
    }
  },
  mounted () {
    const { innerWidth: w, innerHeight: h } = window
    const target = [w * TARGET_FACTOR, h * TARGET_FACTOR]

    this.dimensions = { w, h }
    this.pds = new Poisson([w, h], MIN_DIST)
    this.points = this.pds.fill()
      .map(p => ({ p, dist: dist(p, target) }))
      .sort((a, b) => a.dist - b.dist)

    this.next()
  },
  methods: {
    next () {
      const l = this.squiggles.length
      if (!this.points[l]) return

      this.squiggles.push(this.squiggleFor(l))
      setTimeout(() => this.next(), 20)
    },
    squiggleFor (i) {
      const point = this.points[i].p
      return {
        point,
        style: {
          left: `${point[0] / this.dimensions.w * 100}%`,
          bottom: `${point[1] / this.dimensions.h * 100}%`,
          transform: `rotate(${Math.random() * 360}deg)`
        },
        color: i == 0 ? vars.accent1 : i == 2 ? vars.accent2 : '#fff'
      }
    }
  },
  computed: {
    accents () {
      if (!this.squiggles.length) return
      return this.squiggles.reduce((lowest, current) => {

      }, this.squiggles.first)
    }
  },
  components: { Squiggle }
}
</script>

<template lang="pug">
.squiggle-grid
  .point(v-for="s in squiggles", :style="s.style")
    squiggle(:color="s.color")
</template>

<style lang="sass" scoped>
.squiggle-grid
  position: fixed
  z-index: -1
  left: 0
  right: 0
  top: 0
  bottom: 0

.point
  position: absolute
</style>
