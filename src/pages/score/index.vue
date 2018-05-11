<template>
    <div id="score">
        <div class="background"></div>
        <div class="semester-picker">
            <picker>
            </picker>
            <button>查询</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Score'
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
