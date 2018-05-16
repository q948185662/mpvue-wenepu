<template>
    <div id="course-table"></div>
</template>

<script>
import { showNavigationBarLoading, hideNavigationBarLoading } from '../../utils/loading'
import { getStorage, clearStorage } from '../../utils/storage'
import { showToast } from '../../utils/toast'
import { navigateBack, reLaunch } from '../../utils/navigate'
import { getCurrentDate, isInDate } from '../../utils/date'

export default {
  name: 'CourseTable',
  methods: {
    async getCurrentWeek () {
      showNavigationBarLoading('获取当前周中')
      try {
        await this.$store.dispatch('getCurrentWeek')
        hideNavigationBarLoading('课程表')
      } catch (error) {
        hideNavigationBarLoading('课程表')
        const message = error.substring(0, error.indexOf('，'))
        if (message === '服务器错误') {
          await showToast({
            title: '服务器错误，获取当前周失败，请稍后再试！'
          })
          navigateBack('/pages/home/main')
        } else {
          await showToast({
            title: '学号或密码错误，请重新绑定！'
          })
          clearStorage().then(() => {
            reLaunch('/pages/home/main')
          })
        }
      }
    },
    async isGotCurrentWeek () {
      try {
        const { weekStartDate, weekEndDate } = await getStorage('currentWeek')
        const currentDate = getCurrentDate()
        if (!isInDate(weekStartDate, weekEndDate, currentDate)) {
          await this.getCurrentWeek()
        }
      } catch (error) {
        await this.getCurrentWeek()
      }
    }
  },
  onShow () {
    this.getCurrentWeek()
  }
}
</script>
