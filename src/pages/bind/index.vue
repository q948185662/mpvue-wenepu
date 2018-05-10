<template>
    <div id="bind">
        <div class="background"></div>
        <div class="bind-user-form">
            <input type="text" placeholder="请输入学号" v-model="user.userName"/>
            <input type="password" placeholder="请输入密码" v-model="user.password"/>
            <button @click="bindUser" :loading="loading">绑定</button>
        </div>
    </div>
</template>

<script>
import { showNavigationBarLoading, hideNavigationBarLoading } from '../../utils/loading'
import { showToast } from '../../utils/toast'
import { reLaunch } from '../../utils/navigate'

export default {
  name: 'Bind',
  data () {
    return {
      user: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    async bindUser () {
      const user = this.user
      if (user.userName !== '' && user.password !== '') {
        showNavigationBarLoading('绑定中')
        try {
          await this.$store.dispatch('bindUser', user)
          hideNavigationBarLoading('绑定')
          await showToast({
            title: '绑定成功！'
          })
          reLaunch('/pages/home/main')
        } catch (error) {
          hideNavigationBarLoading('绑定')
          const index = Number(error.indexOf('，'))
          const errorMessage = error.substring(0, index) + '，绑定失败！'
          showToast({
            title: errorMessage
          })
        }
      } else {
        showToast({
          title: '学号或密码不能为空！'
        })
      }
    }
  }
}
</script>

<style lang="scss">
page {
    background-color: #f8f8f8;

    #bind {

        .background {
            background-color: #0080ff;
            height: 100px;
        }

        .bind-user-form {
            background-color: #fff;
            border-radius: 4px;
            box-sizing: border-box;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
            margin: 0 20px;
            padding: 20px;
            position: absolute;
            top: 20px;
            width: calc(100% - 40px);

            input {
                border: 1px solid #dcdfe6;;
                border-radius: 4px;
                box-sizing: border-box;
                font-size: 14px;
                height: 40px;
                line-height: 40px;
                margin-bottom: 20px;
                padding: 0 15px;
                text-align: center;
            }

            button {
                background-color: #0080ff;
                border-radius: 4px;
                border: none;
                color: #fff;
                font-size: 14px;
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
