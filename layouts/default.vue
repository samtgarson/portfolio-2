<script>
import Social from '~components/social'
import SquiggleGrid from '~components/squiggle-grid'

export default {
  components: {
    Social, SquiggleGrid
  }
}
</script>

<template lang="pug">
  #body
    squiggle-grid
    #container
      main
        nuxt
      aside
        social
</template>

<style lang="sass" scoped>
@import '../assets/global.sass'

#body
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  background-color: $base

#container
  width: 100%
  margin: 0 auto
  max-width: 900px
  padding: 20vh 30px
  position: relative

  @media (max-width: $small)
    padding: 10vh 15px

@media (min-width: $small)
  main
    width: 50%
    z-index: 1
    position: relative

  aside
    z-index: 0
    position: fixed
    right: 0
    left: 0
    max-width: 900px
    text-align: right
    margin: 0 auto
    bottom: 8vh
</style>
