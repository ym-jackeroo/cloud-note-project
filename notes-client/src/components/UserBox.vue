<template>
    <div class="user-box fr" v-if="!userInfo.avatar">
        <div class="input-wrap">
            <input type="text" placeholder="邮箱" class="input" v-model="formData.email">
        </div>
        <div class="input-wrap">
            <input type="password" placeholder="密码" class="input" v-model="formData.password" @keyup.enter="handleLogin">
        </div>
        <div class="btn-wrap">
            <el-button type="primary" @click="handleLogin">登录</el-button>
        </div>
        <div class="btn-wrap">
            <el-button @click="$router.push('/register')">注册</el-button>
        </div>
    </div>
    <div class="user-box fr" v-else>
        <div class="avatar">
            <img :src="userInfo.avatar" alt="">
        </div>
        <div class="username">
            {{userInfo.username}}
        </div>
        <div class="layout">
            <el-button type="danger" @click="handleLogout">
                退出登录
            </el-button>
        </div>
    </div>
    
</template>

<script>
import {mapState} from 'vuex'

export default {
    data() {
        return {
            formData: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        handleLogin() {
            this.$axios.post('/login', this.formData).then(res => {
                this.code = res.code
                console.log(res)
                if(res.code == 200) {
                    this.$message.success(res.msg)
                    this.$store.commit('CHANGE_USERINFO', res.userData)
                }
            })
        },
        handleLogout() {
            this.$axios.get('/logout').then(res => {
                console.log(res)
                if(res.code == 200) {
                    this.$message.success(res.msg)

                    //清空Vuex中保留的用户信息
                    this.$store.commit('CHANGE_USERINFO', {avatar: '',username: '',email: ''})
                    this.$router.push('/index')
                }else {
                    this.$store.commit('CHANGE_USERINFO', {avatar: '',username: '',email: ''})
                    this.$message.info('登录状态已过期')
                }
            })
        }
    },
    computed: {
        ...mapState(['userInfo'])
    }
}
</script>

<style scoped lang="scss">
.user-box {
    width: 360px;
    height: 340px;
    background-color: #fff;
    border-radius: 6px;
    padding: 50px 35px 20px;
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .input { 
        width: 100%;
        padding: 13px 18px;
        color: #333;
        font-size: 14px;
        outline: none;
        border-radius: 6px;
        box-sizing: border-box;
        border: 1px solid #f1f1f1;
    }

    .el-button {
        width: 100%;
    }

    .avatar {
        width: 150px;
        height: 150px;
        margin: 20px auto 0px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .username {
        font-size: 16px;
        font-weight: 700;
        text-align: center;
    }
}
</style>
