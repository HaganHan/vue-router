<template>
  <article>
    Hagan
  </article>
</template>

<script>
import getOs from 'hagan/src/getOs'
export default {
  name: 'Hagan',
  mounted () {
    console.log(getOs())
  }
}
</script>
