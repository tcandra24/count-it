'use strict'
import Vue from 'vue'

const Helpers = {
  install (Vue) {
    Vue.prototype.versionApp = process.env.VUE_APP_VERSION
  }
}

Vue.use(Helpers)
