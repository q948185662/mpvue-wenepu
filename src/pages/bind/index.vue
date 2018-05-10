<template>
    <div id="bind">
        <div class="background"></div>
        <div class="bind-user-form">
            <input type="text" placeholder="请输入学号"/>
            <input type="password" placeholder="请输入密码"/>
            <button>绑定</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Bind'
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
