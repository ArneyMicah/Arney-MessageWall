<style lang="scss" scoped>
    .index {
        position: relative;
        width: 100%;
        height: calc(100vh - 335px);

        .wishlist {
            padding-top: 30px;

            ul {
                // display: flex;
                // flex-wrap: wrap;
                // justify-content: space-around;
                width: 100%;
                height: calc(100vh - 415px);
                overflow: hidden;
                position: relative;
                font-size: 18px;

                li {
                    position: absolute;
                    width: 220px;
                    height: 220px;
                    box-shadow: 0 0 10px #000;
                    background-image: url('../assets/touxiang3.jpg');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    padding: 10px;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    margin-top: 10px;
                    border-radius: 10px;
                    cursor: pointer;

                    p:nth-child(1) {
                        font-size: 14px;
                        display: flex;
                        justify-content: space-between;
                        background: linear-gradient(to right, #f0120e, #1ae81a, #4a98ff);
                        background-clip: text;
                        color: transparent;
                    }

                    p:nth-child(2) {
                        width: 100%;
                        text-align: left;
                        word-wrap: break-word;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        background: linear-gradient(to right, #f0120e, #1ae81a, #4a98ff);
                        background-clip: text;
                        color: transparent;
                    }

                    p:nth-child(3) {
                        font-size: 16px;
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-end;
                        background: linear-gradient(to right, #f0120e, #1ae81a, #4a98ff);
                        background-clip: text;
                        color: transparent;

                        img {
                            width: 50px;
                            border-radius: 50px;
                            box-shadow: 0 0 10px #000;
                        }
                    }
                }
            }

            .paging {
                position: absolute;
                bottom: 0;
                right: 0;
            }
        }
    }
</style>
<template>
    <div class="index">
        <div class="wishlist">
            <ul>
                <li v-for="(item, i) in this.$store.state.messageList" :key="i" :style="{'background': item.color,'top':`${item.top}px`,'left':`${item.left}px`}" @click="top(i)" v-drag>
                    <p>
                        <span>第[{{i + 1}}]条</span>
                        <span>{{item.time}}</span>
                        <span @click="delList(i)"><i class="el-icon-close"></i></span>
                    </p>
                    <p>{{item.contents}}</p>
                    <p>
                        <span><img :src="item.image"></span>
                        <span>{{item.username}}</span>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                index: '',
                search: this.$route.query.search,
            }
        },
        methods: {
            delList(i) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$store.commit('delList', i)
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            top(i) {
                this.$store.state.num++
                let dom = document.querySelectorAll('.wishlist ul li');
                dom[i].style.zIndex = this.$store.state.num;
            }
        },
        directives: {
            drag: {
                inserted(el) {
                    el.onmousedown = function(e) {
                        let disY = e.clientY - el.offsetTop;
                        let disX = e.clientX - el.offsetLeft;
                        let maxY = document.documentElement.clientHeight - el.offsetHeight - 425;
                        let maxX = document.documentElement.clientWidth - el.offsetWidth - 610;
                        console.log(maxX);
                        document.onmousemove = function(e) {
                            let moveY = e.y - disY;
                            let moveX = e.x - disX;
                            if (moveY < 0) {
                                moveY = 0;
                            } else if (moveY > maxY) {
                                moveY = maxY;
                            }
                            if (moveX < 0) {
                                moveX = 0;
                            } else if (moveX > maxX) {
                                moveX = maxX;
                            }
                            el.style.top = moveY + 'px'
                            el.style.left = moveX + 'px'
                        }
                        document.onmouseup = function() {
                            document.onmousemove = null;
                            document.onmouseup = null;
                        }
                    }
                }
            },
        },
    }
</script>