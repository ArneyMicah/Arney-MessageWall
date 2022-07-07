<style lang="scss" scoped>
    .index {
        padding: 10px;

        .box {
            width: 100%;
            height: calc(100vh - 350px);
            border: 2px solid #d3a8f9;

            .title {
                text-align: center;
                background-color: #ddc4f5;
                border: 1px solid #d3a8f9;
                width: 90%;
                margin: auto;
                margin-top: 25px;
                height: 40px;
                line-height: 40px;
                border-radius: 50px;
                font-weight: 600;
                color: #5a2f8c;
            }

            .htmlform {
                padding: 10px;
                display: flex;

                div:nth-child(1) {
                    width: 60%;

                    p {
                        margin-top: 20px;

                        span {
                            margin-right: 5px;
                        }
                    }

                    p:nth-child(1) {
                        display: flex;

                        ul {
                            display: flex;

                            li {
                                margin-left: 20px;
                            }

                            li:nth-child(1) {
                                width: 25px;
                                height: 25px;
                                background-color: #eae0f9;
                                border: 1px solid #aaa;

                                &:hover {
                                    border: 2px solid red;
                                }
                            }

                            li:nth-child(2) {
                                width: 25px;
                                height: 25px;
                                background-color: #fae0f9;
                                border: 1px solid #aaa;

                                &:hover {
                                    border: 2px solid red;
                                }
                            }

                            li:nth-child(3) {
                                width: 25px;
                                height: 25px;
                                background-color: #e5f9df;
                                border: 1px solid #aaa;

                                &:hover {
                                    border: 2px solid red;
                                }
                            }

                            li:nth-child(4) {
                                width: 25px;
                                height: 25px;
                                background-color: #f5f9df;
                                border: 1px solid #aaa;

                                &:hover {
                                    border: 2px solid red;
                                }
                            }

                            li:nth-child(5) {
                                width: 25px;
                                height: 25px;
                                background-color: #fcc5c6;
                                border: 1px solid #aaa;

                                &:hover {
                                    border: 2px solid red;
                                }
                            }

                            li:nth-child(6) {
                                width: 25px;
                                height: 25px;
                                background-color: #dbe6f8;
                                border: 1px solid #aaa;

                                &:hover {
                                    border: 2px solid red;
                                }
                            }

                            li:nth-child(7) {
                                width: 25px;
                                height: 25px;
                                background-color: #fce3db;
                                border: 1px solid #aaa;

                                &:hover {
                                    border: 2px solid red;
                                }
                            }

                            li:nth-child(8) {
                                width: 25px;
                                height: 25px;
                                background-color: #eadff8;
                                border: 1px solid #aaa;

                                &:hover {
                                    border: 2px solid red;
                                }
                            }
                        }
                    }

                    p:nth-child(2) {
                        padding: 40px;
                        padding-left: 0;
                        box-sizing: border-box;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        position: relative;

                        span {
                            width: 280px;
                        }

                        ul {
                            width: 358px;
                            display: flex;
                            flex-wrap: wrap;
                            position: absolute;
                            left: 138px;

                            li {
                                display: flex;
                                text-align: center;
                                width: 40px;
                                border: 1px solid #aaa;
                                margin: 4px 5px;

                                &:hover {
                                    border: 2px solid red;
                                }

                                img {
                                    width: 100%;
                                }
                            }
                        }
                    }

                    p:nth-child(3) {
                        display: flex;
                        flex-direction: column;
                    }

                    p:nth-child(4) {
                        display: flex;
                        align-items: center;

                        input {
                            width: 250px;
                            height: 30px;
                            padding-left: 10px;
                        }
                    }

                    p:nth-child(5) {
                        display: flex;
                        align-items: center;

                        input {
                            width: 250px;
                            height: 30px;
                            padding-left: 10px;
                        }

                        span:nth-child(3) {
                            display: inline-block;
                            background-color: #ccc;
                            width: 90px;
                            height: 35px;
                            text-align: center;
                            line-height: 35px;
                            cursor: pointer;
                        }
                    }

                    .button {
                        display: block;
                        margin: auto;
                        margin-top: 10px;
                    }
                }

                div:nth-child(2) {
                    width: 40%;

                    div {
                        width: 100%;
                        text-align: center;
                    }

                    .sticky {
                        width: 92%;
                        height: 180px;
                        border: 1px solid #c6b3d7;
                        margin: auto;
                        display: flex;
                        color: #fff;
                        flex-direction: column;
                        justify-content: space-between;
                        padding: 10px;
                        box-sizing: border-box;
                        background-color: #eae0f9;
                        background-image: url('../assets/touxiang3.jpg');
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-attachment: fixed;

                        p:nth-child(1) {
                            display: flex;
                            justify-content: space-between;
                        }

                        p:nth-child(2) {
                            width: 100%;
                            height: 100%;
                            text-align: left;
                            word-wrap: break-word;
                            overflow: hidden;
                        }

                        p:nth-child(3) {
                            display: flex;
                            justify-content: space-between;
                            align-items: flex-end;

                            img {
                                width: 50px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="index">
        <div class="box">
            <p class="title">我要贴祝福纸条:</p>
            <div class="htmlform">
                <div>
                    <p>
                        <span>请实现纸条颜色: </span>
                        <ul>
                            <li @click="getColor(0)"></li>
                            <li @click="getColor(1)"></li>
                            <li @click="getColor(2)"></li>
                            <li @click="getColor(3)"></li>
                            <li @click="getColor(4)"></li>
                            <li @click="getColor(5)"></li>
                            <li @click="getColor(6)"></li>
                            <li @click="getColor(7)"></li>
                        </ul>
                    </p>
                    <p>
                        <span>请实现纸条图案: </span>
                        <ul>
                            <li @click="getImage(0)">
                                <img src="https://s1.xoimg.com/i/2022/06/29/lys81x.jpg">
                            </li>
                            <li @click="getImage(1)">
                                <img src="https://s1.xoimg.com/i/2022/06/29/lysgo1.jpg">
                            </li>
                            <li @click="getImage(2)">
                                <img src="https://s1.xoimg.com/i/2022/06/29/lysrzw.jpg">
                            </li>
                            <li @click="getImage(3)">
                                <img src="https://s1.xoimg.com/i/2022/06/29/lysx38.jpg">
                            </li>
                            <li @click="getImage(4)">
                                <img src="https://s1.xoimg.com/i/2022/06/29/lysy9r.jpg">
                            </li>
                            <li @click="getImage(5)">
                                <img src="https://s1.xoimg.com/i/2022/06/29/lyt7dx.jpg">
                            </li>
                            <li @click="getImage(6)">
                                <img src="https://s1.xoimg.com/i/2022/06/29/lytaxo.jpg">
                            </li>
                            <li @click="getImage(7)">
                                <img src="https://s1.xoimg.com/i/2022/06/29/lytfhh.jpg">
                            </li>
                            <li @click="getImage(8)">
                                <img src="https://s1.xoimg.com/i/2022/06/29/lytmnv.jpg">
                            </li>
                            <li @click="getImage(9)">
                                <img src="https://s1.xoimg.com/i/2022/06/29/lytu1n.jpg">
                            </li>
                            <li @click="getImage(10)">
                                <img src="https://s1.xoimg.com/i/2022/06/29/lyu29b.jpg">
                            </li>
                            <li @click="getImage(11)">
                                <img src="https://s1.xoimg.com/i/2022/06/29/lyu8ri.jpg">
                            </li>
                        </ul>
                    </p>
                    <p>
                        <span>请输入你的祝福纸条内容(还能输入{{surplus}}个字)</span>
                        <span><textarea style="padding-left: 10px;" maxlength="120" v-model="contents" id="" cols="80" rows="5" placeholder="(删除本行)写下你的祝福"></textarea></span>
                    </p>
                    <p>
                        <span>您的署名:</span>
                        <span><input type="text" v-model="username"></span>
                    </p>
                    <p>
                        <span>验证码:</span>
                        <span><input type="text" v-model="textCode"></span>
                        <span @click="getCode">{{code}}</span>
                    </p>
                    <el-button type="primary" class="button" @click="addList" round>好了，我要贴上去了</el-button>
                </div>
                <div>
                    <div>纸条效果预览:</div>
                    <div class="sticky" :style="{'background': color}">
                        <p>
                            <span>第X条</span>
                            <span>{{time}}</span>
                        </p>
                        <p>{{contents == "" ? "你的祝福" : contents}}</p>
                        <p>
                            <span><img :src="image"></span>
                            <span>{{username == "" ? "你的署名" : username}}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                color: '',
                contents: '',
                username: '',
                image: '',
                code: '获取验证码',
                textCode: '',
                maxlength: 120,
                time: new Date().toLocaleString(),
            }
        },
        methods: {
            getColor(color) {
                console.log(color);
                if (color == 0) {
                    this.color = '#eae0f9';
                } else if (color == 1) {
                    this.color = '#fae0f9';
                } else if (color == 2) {
                    this.color = '#e5f9df';
                } else if (color == 3) {
                    this.color = '#f5f9df';
                } else if (color == 4) {
                    this.color = '#fcc5c6';
                } else if (color == 5) {
                    this.color = '#dbe6f8';
                } else if (color == 6) {
                    this.color = '#fce3db';
                } else {
                    this.color = '#eadff8';
                }
            },
            getImage(image) {
                console.log(image);
                if (image == 0) {
                    this.image = 'https://s1.xoimg.com/i/2022/06/29/lys81x.jpg';
                } else if (image == 1) {
                    this.image = 'https://s1.xoimg.com/i/2022/06/29/lysgo1.jpg';
                } else if (image == 2) {
                    this.image = 'https://s1.xoimg.com/i/2022/06/29/lysrzw.jpg';
                } else if (image == 3) {
                    this.image = 'https://s1.xoimg.com/i/2022/06/29/lysx38.jpg';
                } else if (image == 4) {
                    this.image = 'https://s1.xoimg.com/i/2022/06/29/lysy9r.jpg';
                } else if (image == 5) {
                    this.image = 'https://s1.xoimg.com/i/2022/06/29/lyt7dx.jpg';
                } else if (image == 6) {
                    this.image = 'https://s1.xoimg.com/i/2022/06/29/lytaxo.jpg';
                } else if (image == 7) {
                    this.image = 'https://s1.xoimg.com/i/2022/06/29/lytfhh.jpg';
                } else if (image == 8) {
                    this.image = 'https://s1.xoimg.com/i/2022/06/29/lytmnv.jpg';
                } else if (image == 9) {
                    this.image = 'https://s1.xoimg.com/i/2022/06/29/lytu1n.jpg';
                } else if (image == 10) {
                    this.image = 'https://s1.xoimg.com/i/2022/06/29/lyu29b.jpg';
                } else {
                    this.image = 'https://s1.xoimg.com/i/2022/06/29/lyu8ri.jpg';
                }
                console.log(this.image);
            },
            getCode() {
                let ranCode = Math.random().toString(16)
                let ranCode1 = ranCode.substr(2, 4)
                this.code = ranCode1
            },
            addList() {
                if (this.username == "" || this.contents == "") {
                    this.$message({
                        message: '署名或祝福内容不能为空',
                        type: 'error'
                    });
                    return
                }
                if (this.textCode != this.code) {
                    this.$message({
                        message: '验证码错误',
                        type: 'error'
                    });
                    return
                }
                let ranTop = parseInt(Math.random() * 244)
                let ranLeft = parseInt(Math.random() * 767)
                let data = {
                    color: this.color,
                    contents: this.contents,
                    username: this.username,
                    image: this.image,
                    time: this.time,
                    top: ranTop,
                    left: ranLeft,
                }
                this.$store.commit('addList', data)
                this.$message({
                    message: '添加成功',
                    type: 'success'
                });
                // this.color = ''
                // this.contents = ''
                // this.username = ''
                // this.image = ''
                // this.textCode = ''
                // this.code = '获取验证码'
            },
        },
        computed: {
            surplus() {
                return this.maxlength - this.contents.length;
            }
        },
    }
</script>