<template>
  <div class="content">
    <h1>MainPage</h1>

    <div class="button" @click="loggerLaunch()">Logger Launch</div>
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
