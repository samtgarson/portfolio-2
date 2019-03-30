<script>
import Squiggle from '~/components/squiggle'

export default {
  components: { Squiggle }
}
</script>
<template lang="pug">
div
  h2 Hi, I'm
  h1 Sam Garson.
  h2 
    | I help turn 
    span ideas 
    | into viable, beautiful and 
    span successful products 
    | which solve the problems you need to solve.
  squiggle
</template>
<style scoped lang="sass">
@import '../assets/global.sass'

h1
  margin-bottom: 30px

h2 span
  &:nth-child(even)
    color: $accent1

  &:nth-child(odd)
    color: $accent2

.squiggle
  margin: 30px 0

</style>
