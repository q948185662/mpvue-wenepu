<template>
    <div id="score">
        <div class="background"></div>
        <div class="semester-picker">
            <picker :range="semesterList" @change="changeSemester" :value="index">
              {{ semester }}
            </picker>
            <button @click="getScores">查询</button>
        </div>
        <div class="score-info" v-if="showScoreInfo">
            <div class="score-abstract">
                <div>学分：{{scores.credit}}</div>
                <div>绩点：{{scores.gradePointAverage}}</div>
            </div>
            <div class="score-list">
                <div class="score-item" v-for="(item, index) in scores.scoreList" :key="index" @click="toggleScoreDetail">
                    <div class="score-main">
                        <div class="course-name">
                            {{ item.courseName }}
                        </div>
                        <div class="course-score">
                            {{ item.courseScore }}
                        </div>
                    </div>
                    <div class="score-detail" v-if="item.visible">
                        <div>开课学期：{{item.courseSemester}}</div>
                        <div v-if="item.scoreSign">成绩标志：{{item.scoreSign}}</div>
                        <div>课程性质：{{item.courseNature}}</div>
                        <div>课程类别：{{item.courseType}}</div>
                        <div>课程学时：{{item.courseHour}}</div>
                        <div>课程学分：{{item.courseCredit}}</div>
                        <div>考试性质：{{item.examNature}}</div>
                        <div v-if="item.supplementSemester">补重学期：{{item.supplementSemester}}</div>
                        <div v-if="scoreDetail.regular">平时成绩：{{scoreDetail.regular}}</div>
                        <div v-if="scoreDetail.regular">平时成绩比例：{{scoreDetail.regularProportion}}</div>
                        <div v-if="scoreDetail.midterm">期中成绩：{{scoreDetail.midterm}}</div>
                        <div v-if="scoreDetail.midterm">期中成绩比例：{{scoreDetail.midtermProportion}}</div>
                        <div v-if="scoreDetail.endterm">期末成绩：{{scoreDetail.endterm}}</div>
                        <div v-if="scoreDetail.endterm">期末成绩比例：{{scoreDetail.endtermProportion}}</div>
                    </div>
                </div>
            </div>
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
      'semesterList',
      'scores'
    ]),
    index () {
      return this.semesterList.indexOf(this.semester) || 0
    },
    showScoreInfo () {
      return this.scores.credit !== undefined
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

        .score-info {
            box-sizing: border-box;
            position: absolute;
            margin: 0 20px;
            padding-bottom: 20px;
            top: 120px;
            width: calc(100% - 40px);

            .score-abstract {
                display: flex;

                div {
                    background-color: #fff;
                    box-sizing: border-box;
                    border-radius: 4px;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
                    color: #606266;
                    flex: 1;
                    font-size: 14px;
                    height: 80px;
                    line-height: 80px;
                    text-align: center;

                    &:first-child {
                        margin-right: 20px;
                    }
                }
            }

            .score-list {
                margin-top: 20px;

                .score-item {
                    background-color: #fff;
                    border-radius: 4px;
                    box-sizing: border-box;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
                    margin-bottom: 20px;
                    padding: 20px;


                    &:last-child {
                        margin-bottom: 0;
                    }

                    .score-main {
                        display: flex;

                        .course-name {
                            color: #606266;
                            flex: 7;
                            font-size: 14px;
                            height: 40px;
                            line-height: 40px;
                        }

                        .course-score {
                            flex: 3;
                            font-size: 36px;
                            height: 40px;
                            line-height: 40px;
                            text-align: right;
                        }
                    }
                }
            }
        }
    }
}
</style>
