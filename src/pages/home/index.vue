<template>
    <div id="home"></div>
</template>

<script>
import { getStorage } from '../../utils/storage'
import { navigateTo } from '../../utils/navigate'

export default {
  name: 'Home',
  methods: {
    async isBindUser () {
      try {
        await getStorage('user')
      } catch (error) {
        navigateTo('/pages/bind/main')
      }
    }
  },
  onShow () {
    this.isBindUser()
  }
}
</script>
