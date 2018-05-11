<template>
    <div id="score">
        <div class="background"></div>
        <div class="semester-picker">
            <picker :range="semesterList" @change="changeSemester" :value="index">
              {{ semester }}
            </picker>
            <button @click="getScores">查询</button>
        </div>
    </div>
</template>

<script>
import { getStorage, getStorageSync, clearStorage } from '../../utils/storage'
import { showNavigationBarLoading, hideNavigationBarLoading } from '../../utils/loading'
import { mapState } from 'vuex'
import { showToast } from '../../utils/toast'
import { navigateBack, reLaunch } from '../../utils/navigate'

export default {
  name: 'Score',
  methods: {
    async getSemesterList () {
      try {
        await getStorage('semesterList')
      } catch (error) {
        showNavigationBarLoading('获取开课学期列表中')
        try {
          await this.$store.dispatch('getSemesterList')
          hideNavigationBarLoading('成绩')
        } catch (error) {
          hideNavigationBarLoading('成绩')
          const message = error.substring(0, error.indexOf('，'))
          if (message === '服务器错误') {
            await showToast({
              title: '服务器错误，获取开课学期列表失败，请稍后再试！'
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
      }
    },
    changeSemester (event) {
      const index = event.mp.detail.value
      this.semester = this.semesterList[index]
    },
    async getScores () {
      showNavigationBarLoading('获取成绩中')
      try {
        await this.$store.dispatch('getScores', this.semester)
        hideNavigationBarLoading('成绩')
      } catch (error) {
        hideNavigationBarLoading('成绩')
        const message = error.substring(0, error.indexOf('，'))
        if (message === '服务器错误') {
          await showToast({
            title: '服务器错误，获取成绩失败，请稍后再试！'
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
    }
  },
  onShow () {
    this.getSemesterList()
  },
  data () {
    return {
      semester: getStorageSync('semester') || '全部学期'
    }
  },
  computed: {
    ...mapState([
      'semesterList'
    ]),
    index () {
      return this.semesterList.indexOf(this.semester) || 0
    }
  }
}
</script>

<style lang="scss">
page {
    background-color: #f8f8f8;

    #score {

        .background {
            background-color: #0080ff;
            height: 60px;
        }

        .semester-picker {
            border-radius: 4px;
            background-color: #fff;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
            box-sizing: border-box;
            display: flex;
            margin: 0 20px;
            padding: 20px;
            position: absolute;
            top: 20px;
            width: calc(100% - 40px);

            picker {
                box-sizing: border-box;
                border-radius: 4px;
                border: 1px solid #dcdfe6;
                color: #606266;
                flex: 7;
                font-size: 14px;
                height: 40px;
                line-height: 40px;
                margin-right: 20px;
                padding: 0 15px;
            }

            button {
                background-color: #0080ff;
                border-radius: 4px;
                border: none;
                color: #fff;
                font-size: 14px;
                flex: 3;
                height: 40px;
                line-height: 40px;

                &:after {
                    border: none;
                }

                &:active {
                    background-color: #fff;
                    border: 1px solid #0080ff;
                    color: #0080ff;
                }
            }
        }
    }
}
</style>
