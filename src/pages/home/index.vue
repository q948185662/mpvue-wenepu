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

<style lang="scss">
page {
    background-color: #f8f8f8;

    #home {

        .background {
            background-color: #0080ff;
            height: 60px;
        }

        .navigator {
            box-sizing: border-box;
            display: grid;
            position: absolute;
            top: 20px;
            margin: 0 20px;
            width: calc(100% - 40px);
            grid-template-columns: calc(50% - 10px) calc(50% - 10px);
            grid-column-gap: 20px;
            grid-row-gap: 20px;

            navigator {
                box-sizing: border-box;
                border-radius: 4px;
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
                background-color: #fff;
                display: flex;
                height: 80px;
                padding: 20px;
                
                img {
                    height: 40px;
                    width: 40px;
                }

                .label {
                    flex: 1;
                    font-size: 14px;
                    height: 40px;
                    line-height: 40px;
                    text-align:  center;
                }
            }

            .navigator-hover {
                color: #0080ff;
                opacity: 1;
            }
        }
    }
}
</style>
