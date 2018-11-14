<template>
  <div>
    <p>MainPage</p>

    <button @click="loggerLaunch()">Logger Launch</button>
  </div>
</template>

<style>

</style>

<script>
import { ipcRenderer } from 'electron'

export default {
  methods: {
    loggerLaunch () {
      ipcRenderer.send('loggerOpen')
    }
  }
}
</script>
