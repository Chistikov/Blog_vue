<template>
  <div class="pulseButtonWrapper">
    <div class="pulseButtonWrapper__circle pulseButtonWrapper__circle1"></div>
    <div class="pulseButtonWrapper__circle pulseButtonWrapper__circle2"></div>
    <div class="pulseButtonWrapper__mainCircle"></div>
    <div class="pulseButtonWrapper__menuIcon">
      <div class="pulseButtonWrapper__square"></div>
      <div class="pulseButtonWrapper__square"></div>
      <div class="pulseButtonWrapper__square"></div>
      <div class="pulseButtonWrapper__square"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
// $buttonColor: rgba(250,180,150,1)
$buttonColor: rgba(255,255,255,1)
$animationSpeed: 1.8s
$animationDeleyCircle1: 0
$size1: 30
$size2: 70
$startCircleSize: $size1 + px
$endCircleSize: $size2 + px
$animationDeleyCircle2: $animationSpeed / 2 * 1
$animationDeleyCircle3: $animationSpeed / 2 * 2
$startPosCircle: $size2 / 2 - $size1 / 2 + px
$endPosCircle: $size2 / 2 - $size2 / 2 + px
$a1: 100 + px
$menuIconSize: $size1 * 0.45 + px

%pulseButton_basebutton
  border-radius: 50%
  position: absolute
  background-color: $buttonColor
  opacity: .9
  width: $startCircleSize
  height: $startCircleSize
  top: $startPosCircle
  left: $startPosCircle
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, .06)

.pulseButtonWrapper
  width: $endCircleSize
  height: $endCircleSize
  position: relative


  &__circle
    @extend %pulseButton_basebutton
    animation: pulseButtonAnim $animationSpeed infinite ease

  &__circle1
    animation-delay: $animationDeleyCircle1
  &__circle2
    animation-delay: $animationDeleyCircle2
  &__circle3
    animation-delay: $animationDeleyCircle3

  &__mainCircle
    @extend %pulseButton_basebutton
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, .09)

  &__menuIcon
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: $menuIconSize
    height: $menuIconSize
    position: absolute
    display: flex
    flex-wrap: wrap

  &__square
    width: 38%
    height: 38%
    margin: 6%
    background: #d7d7d7
    flex-grow: 0
    flex-shrink: 0

@keyframes pulseButtonAnim
  100%
    width: $endCircleSize
    height: $endCircleSize
    top: $endPosCircle
    left: $endPosCircle
    opacity: 0
    flex-grow: 0
    flex-shrink: 0
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, .03)
</style>
