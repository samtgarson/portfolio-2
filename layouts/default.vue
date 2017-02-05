<script>
import Social from '~components/social.vue'

export default {
  components: {
    Social
  }
}
</script>

<template lang="pug">
  #container
    #main
      nuxt
    social
</template>

<style lang="sass" scoped>
@import '../lib/global.sass'

#container
  width: 100%
  margin: 0 auto
  max-width: 900px
  padding: 20vh 30px
  position: relative

  @media (max-width: $small)
    padding: 10vh 15px

@media (min-width: $small)
  #main
    width: 50%

  .social
    position: fixed
    right: 0
    bottom: 0
</style>
