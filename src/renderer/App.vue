<template>
  <div id="app">
    <div class="titlebar">
      <div class="right">
        <!--<div class="button close" @onclick="app.quit()"></div>-->
      </div>
    </div>
    <div class="main">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mclauncher'
  }
</script>

<style>
  .titlebar {
    -webkit-user-select: none;
    -webkit-app-region: drag;
    height: 30px;
    width: auto;
    background-color: gray;
  }

  .titlebar .button {
    -webkit-app-region: no-drag;
  }

  .main {
    background-color: white;
    width: auto;
    height: 600px;
  }
</style>
