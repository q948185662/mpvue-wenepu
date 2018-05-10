<template>
    <div id="more">
        <div class="user-info">
            <open-data type="userAvatarUrl" class="avatar"></open-data>
            <div class="name">
                <div class="school-number"></div>
                <open-data type="userNickName" class="wechat-nick-name"></open-data>
            </div>
        </div>
        <div class="setting">
            <div class="change-bind-user">
                <button>修改绑定学号</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'More'
}
</script>

<style lang="scss">
page {
  background-color: #f8f8f8;

  #more {

        .user-info {
            background-color: #0080ff;
            padding: 20px;

            .avatar {
                border-radius: 50%;
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
                display: block;
                height: 100px;
                margin: 0 auto;
                overflow: hidden;
                width: 100px;
            }

            .name {
                display: flex;
                font-size: 14px;
                height: 40px;
                line-height: 40px;
                color: #fff;

                .school-number {
                    flex: 1;
                }

                .wechat-nick-name {
                    flex: 1;
                    text-align: right;
                }
            }
        }
    }
}
</style>
