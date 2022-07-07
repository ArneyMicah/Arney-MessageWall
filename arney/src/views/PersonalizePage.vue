<style lang="scss" scoped>
    .index {
        padding-top: 30px;

        .title {
            text-align: center;
            font-weight: 600;
            font-size: 25px;

        }

        .box {
            border: 2px solid #d4a7f9;
            width: 98%;
            height: calc(100vh - 400px);
            margin: auto;
            padding: 10px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            background-image: url('../assets/7.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;

            p {
                font-size: 25px;
                font-weight: 600;
                color: #fff;

                .iconfont {
                    font-size: 24px;
                    color: #ef5c5a;
                }
            }

            p:nth-child(4) {
                span {
                    span {
                        padding: 5px 10px;
                        border-radius: 10px;
                        background-color: #fff;
                        display: inline-block;
                        color: #000;
                        font-size: 18px;
                        font-weight: 500;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="index">
        <div class="title">个性化许愿介绍</div>
        <div class="box">
            <p>你想要给你的亲人、同学、朋友一个特殊的礼物吗？</p>
            <p>那就给他一个个性化的许愿吧。完全免费的个性化许愿。</p>
            <p>
                <span>步骤:</span>
                <br>
                <span>1、制作一个个性化的bannar，大小为960*240。</span>
                <br>
                <span>2、用邮箱发给我们，并告诉我们要展示的时间。</span>
                <br>
                <span>3、完成，给你的朋友一个惊喜吧。</span>
            </p>
            <p>
                <span>联系方式如下:</span>
                <br>
                <span>邮箱: <span><i class="iconfont icon-youxiang"></i><i>发邮件</i></span></span>
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            
        },
    }
</script>