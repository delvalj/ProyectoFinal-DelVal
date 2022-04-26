<template>
  <div class="m-5">
    <b-button class="m-5" @click="makeToast()">Show Toast</b-button>
    <b-button  class="m-5" @click="makeToast(true)">Show Toast (appended)</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toastCount: 0
    }
  },
  methods: {
    makeToast(append = false) {
      this.toastCount++
      this.$bvToast.toast(`This is toast number ${this.toastCount}`, {
        title: 'BootstrapVue Toast',
        autoHideDelay: 5000,
        appendToast: append
      })
    }
  }
}
</script>
