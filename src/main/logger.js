'use strict'

import * as Electron from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let win
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080/#/logger`
  : `file://${__dirname}/index.html#logger`

function createWindow () {
  /**
   * Initial window options
   */
  win = new Electron.BrowserWindow({
    height: 630,
    minHeight: 630,
    width: 800,
    minWidth: 800,
    title: 'logger',
    frame: false,
    movable: true,
    webPreferences: {
      webSecurity: false
    }
  })

  win.loadURL(winURL)

  win.on('closed', () => {
    win = null
  })

  win.once('ready-to-show', () => {
    win.show()
  })
}

export { createWindow, win }
