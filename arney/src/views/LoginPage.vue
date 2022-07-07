<style lang="scss" scoped>
    .index {
        position: relative;

        #background {
            background-image: url('../assets/1.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            height: 100vh;
            width: 100vw;
        }

        .login {
            width: 500px;
            background-color: rgba(255, 255, 255, 0.469);
            position: absolute;
            top: 200px;
            left: 50%;
            transform: translateX(-50%);
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px #000;
        }
    }
</style>
<template>
    <div class="index">
        <div id="background"></div>
        <div class="login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                <el-form-item prop="name">
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item prop="name">
                    <el-input v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')" style="display: block; margin: auto;">立即登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: '',
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if(this.ruleForm.username != '' && this.ruleForm.password != ''){
                            this.$router.push('/WishListPage')
                            this.$message({
                                message: '登录成功',
                                type: 'success'
                            });
                        }else{
                            this.$message({
                                message: '请输入用户名和密码',
                                type: 'error'
                            });
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        },
    }
</script>