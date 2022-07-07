<style lang="scss" scoped>
    .index {
        position: relative;

        #background {
            background-image: url('../assets/4.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            height: 100vh;
            width: 100vw;
        }

        .box {
            width: 1000px;
            height: 100vh;
            background-color: rgba(255, 255, 255, 0.154);
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);

            .top {
                width: 100%;
                height: 280px;
                background-image: url('../assets/Ha4740315cb2843edb1c28dbcb0241ffdl.webp');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                border-radius: 10px;
                position: relative;

                .happy {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    height: 100%;

                    i {
                        font-size: 45px;
                        // color: #fff;
                        font-family: '华文彩云';
                        text-shadow: 0 0 20px red;
                        background: linear-gradient(to right, #f0120e, #1ae81a, #4a98ff);
                        background-clip: text;
                        color: transparent;
                    }
                }

                .counter {
                    position: absolute;
                    width: 300px;
                    height: 150px;
                    background-color: #000;
                    background-image: url('../assets/1.jpg');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    bottom: -75px;
                    border-radius: 20px;
                    z-index: 1;

                    p {
                        text-align: center;
                        color: #fff;
                        font-size: 20px;
                        margin-top: 15px;
                    }
                }

                .tabs {
                    width: 100%;
                    height: 45px;
                    background-color: #30b95d;
                    position: absolute;
                    bottom: 0;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                    background-image: url('../assets/8.jpg');
                    background-size: 5%;
                    background-position: center;
                    background-repeat: repeat;

                    ul {
                        position: absolute;
                        right: 0;
                        display: flex;

                        li {
                            height: 45px;
                            width: 130px;
                            line-height: 45px;
                            text-align: center;
                            background-color: rgba(255, 255, 255, 0.692);
                            margin: 0 10px;
                            border-top-left-radius: 15px;
                            border-top-right-radius: 15px;
                            color: #000;
                            font-weight: 600;
                            background-image: url('../assets/2.png');
                            background-size: cover;
                            background-position: center;
                            background-repeat: repeat;
                            font-family: '华文彩云';

                            &:hover {
                                background-color: rgb(0, 140, 255);
                                color: #fff;
                                cursor: pointer;
                                background-image: url('../assets/3.jpg');
                                background-size: cover;
                                background-position: center;
                                background-repeat: repeat;
                            }
                        }
                    }
                }
            }

            .bottom {
                width: 100%;
                height: calc(100vh - 280px);
                background-color: rgba(255, 255, 255, 0.459);
                border-radius: 10px;

                .bottom-top {
                    p {
                        width: 100%;
                        height: 45px;
                        line-height: 45px;
                        display: flex;
                        justify-content: flex-end;
                        font-size: 24px;
                        font-weight: 600;
                        font-family: '华文彩云';
                        padding-right: 100px;
                        box-sizing: border-box;
                    }
                }

                .content {
                    width: 99%;
                    height: calc(100vh - 330px);
                    background-color: rgba(255, 255, 255, 0.497);
                    margin: auto;
                }
            }
        }
    }
</style>
<template>
    <div class="index">
        <div id="background"></div>
        <div class="box">
            <div class="top">
                <div class="happy"><i>遇见彩虹！吃定彩虹！</i></div>
                <div class="counter">
                    <p>已有祝福{{this.$store.state.messageList.length}}条</p>
                    <p>本许愿墙将永久保存你的祝福和许愿,赶紧贴上祝福吧！</p>
                </div>
                <div class="tabs">
                    <ul>
                        <li @click="$router.push('MakeWishPage')">我要许愿</li>
                        <li @click="$router.push('WishListPage')">许愿墙首页</li>
                        <li @click="findusername">找我的愿望</li>
                        <li @click="$router.push('PersonalizePage')">个性化许愿</li>
                    </ul>
                </div>
            </div>
            <div class="bottom">
                <div class="bottom-top">
                    <p>亲人，朋友，老师，同学，同事，我想对你说......</p>
                </div>
                <div class="content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" height="150px">
            <el-form label-position="top" label-width="80px">
                <el-form-item label="署名">
                    <el-input v-model="search"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="goTosearch">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialogVisible: false,
                search: '',
            }
        },
        methods: {
            findusername() {
                this.dialogVisible = true
            },
            goTosearch() {
                this.$router.push({
                    path: '/WishListPage',
                    query: {
                        search: this.search
                    }
                })
                this.$store.commit('search', this.search)
                this.dialogVisible = false
                this.search = ''
            }
        },
    }
</script>