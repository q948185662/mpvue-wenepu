<template>
    <div id="home">
        <div class="background"></div>
        <div class="navigator">
            <navigator url="/pages/score/main" hover-class="navigator-hover">
                <img src="https://resource.mignon.me/wenepu/images/icon/home/menu/score.png"/>
                <div class="label">成绩</div>
            </navigator>
            <navigator hover-class="navigator-hover">
                <img src="https://resource.mignon.me/wenepu/images/icon/home/menu/course-table.png"/>
                <div class="label">课程表</div>
            </navigator>
            <navigator hover-class="navigator-hover">
                <img src="https://resource.mignon.me/wenepu/images/icon/home/menu/free-classroom.png"/>
                <div class="label">空教室</div>
            </navigator>
        </div>
    </div>
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
