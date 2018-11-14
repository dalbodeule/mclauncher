<!-- https://github.com/binaryfunt/electron-seamless-titlebar-tutorial -->

<template>
  <div id="app">
    <div class="titlebar">
      <div class="drag-region">
        <div class="window-title">
          TEST
        </div>
        <div class="window-controls">
          <div class="button min-button" @click="min()">
            <span>&#xE921;</span>
          </div>
          <div v-if="isMaximized == false">
            <div class="button max-button" @click="max()">
              <span>&#xE922;</span>
            </div>
          </div>
          <div v-else>
            <div class="button restore-button" @click="restore()">
              <span>&#xE923;</span>
            </div>
          </div>
          <div class="button close-button" @click="close()">
            <span>&#xE8BB;</span>
          </div>
        </div>
      </div>
    </div>
    <router-view class="contents"></router-view>
  </div>
</template>

<script>
  import electron from 'electron'
  import MainPage from '@/components/MainPage'
  
  const remote = electron.remote
  let window = remote.getCurrentWindow()

  export default {
    name: 'mclauncher',
    components: {
      MainPage
    },
    data () {
      return {
        isMaximized: false
      }
    },
    beforeMount () {
      window = remote.getCurrentWindow()
      window.on('maximize', () => this.toggleMaxRestoreButtons())
      window.on('unmaximize', () => this.toggleMaxRestoreButtons())
    },
    methods: {
      min () {
        window = remote.getCurrentWindow()
        window.minimize()
      },
      max () {
        window = remote.getCurrentWindow()
        window.maximize()
        this.toggleMaxRestoreButtons()
      },
      restore () {
        window = remote.getCurrentWindow()
        window.unmaximize()
        this.toggleMaxRestoreButtons()
      },
      close () {
        window = remote.getCurrentWindow()
        window.close()
      },
      toggleMaxRestoreButtons () {
        window = remote.getCurrentWindow()
        if (window.isMaximized()) {
          this.isMaximized = true
        } else {
          this.isMaximized = false
        }
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body {
    height: 100%;
    margin: 0;
  }

  body {
    font-family: sans-serif;
    background: #fff;
    color: #000;
    border: 1px solid rgb(221,138,60);
    overflow-y: hidden;
  }

  div.titlebar {
    display: block;
    position: fixed;
    height: 32px;
    width: calc(100% - 2px);
    background: rgb(230,154,75);
    top: 0;
  }
  div.titlebar div.drag-region {
    width: 100%;
    height: 100%;
    -webkit-app-region: drag;
    display: grid;
    grid-template-columns: auto 138px;
  }
  div.titlebar div.drag-region .window-title {
    grid-column: 1;
    display: flex;
    align-items: center;
    font-family: "Segoe UI", sans-serif;
    font-size: 12px;
    margin-left: 8px;
    overflow-x: hidden;
  }
  div.titlebar div.drag-region .window-title span {
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
  }
  @font-face {
    font-family: "Segoe MDL2 Assets";
    src: url('~@/assets/fonts/SegMDL2.ttf') format('truetype');
  }
  div.titlebar div.drag-region .window-controls {
    display: grid;
    grid-template-columns: repeat(3, 46px);
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    font-size: 10px;
    -webkit-app-region: no-drag;
  }
  .window-controls .button {
    grid-row: 1 / span 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    user-select: none;
    cursor: default;
    opacity: 0.8;
    font-family: "Segoe MDL2 Assets";
  }
  .window-controls .button:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  .window-controls .button.min-button {
    grid-column: 1;
  }
  .window-controls .button.max-button,
  .window-controls .button.restore-button {
    grid-column: 2;
  }
  .window-controls .button.close-button {
    grid-column: 3;
  }
  .window-controls .button.close-button:hover {
    background: #E81123;
  }

  .contents {
    height: calc(100% - 32px);
    margin-top: 32px;
    padding: 20px;
    overflow-y: auto;
  }
</style>
