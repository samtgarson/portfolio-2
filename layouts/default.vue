<script>
import Social from '~/components/social'
import SquiggleGrid from '~/components/squiggle-grid'
import Background from '~/components/background'

export default {
  components: {
    Social, SquiggleGrid, Background
  }
}
</script>

<template lang="pug">
  #body
    background
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

#container
  width: 100%
  margin: 0 auto
  max-width: 900px
  padding: 20vh 30px
  position: relative

  @media (max-width: $small)
    padding: 10vh 15px

main, aside
  z-index: 2
  pointer-events: none

  *
    pointer-events: auto

@media (min-width: $small)
  main
    width: 50%
    position: relative

  aside
    position: fixed
    right: 0px
    left: 0
    max-width: 900px
    text-align: right
    margin: 0 auto
    padding: 0 30px
    bottom: 8vh
</style>
