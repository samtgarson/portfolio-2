<script>
import Squiggle from './squiggle'

export default {
  components: { Squiggle }
}
</script>

<template lang="pug">
  ul.social
    li: h3: a(target="_blank", href="http://twitter.com/samtgarson") Twitter
    li: h3: a(target="_blank", href="http://github.com/samtgarson") Github
    li: h3: a(target="_blank", href="http://linkedin.com/in/samtgarson") LinkedIn
    li: h3: a(target="_blank", href="http://vsco.co/samtgarson") VSCO
    li: h3: a(target="_blank", href="mailto:hey@samgarson.com") Email Me
    li: squiggle
</template>

<style lang="sass" scoped>
@import '~assets/global.sass'
ul
  display: inline-block
  padding: 0
  margin: 0

li
  display: block
  margin: 12px 0

a
  font-weight: $regular
</style>
