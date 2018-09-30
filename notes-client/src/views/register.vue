<template>
    <div class="register">
        <div class="register-title">
            新用户注册
        </div>
        <div class="input-wrap">
            <el-input placeholder="用户名" v-model="formData.username"></el-input>
            <el-input placeholder="邮箱" v-model="formData.email"></el-input>
            <el-input placeholder="密码" v-model="formData.password" @keyup.enter.native="handleRegister"></el-input>
        </div>
        <div class="btn-wrap">
            <el-button type="primary" @click="handleRegister">注册</el-button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    handleRegister() {
      this.$axios.post("/user", this.formData).then(res => {
        console.log(res);
        if (
          this.formData.password &&
          this.formData.password >= 5 &&
          this.formData.username &&
          this.formData.email &&
          res.code == 200
        ) {
          this.$message.success(res.msg);
          setTimeout(() => {
            this.$router.push("/index");
          }, 1000);
        } else {
            if(!(this.formData.password&&this.formData.username&&this.formData.email)) {
                 this.$message.info("注册信息请填写完整!");
            }else {
                this.$message.info("邮箱已存在!")
            }
        }
      });
    }
  }
};
</script> 

<style scoped lang="scss">
.register {
  width: 750px;
  margin: 0 auto;
  margin-top: 90px;
  padding: 40px;
  background-color: #fff;
  border-radius: 6px;

  .register-title {
    text-align: center;
    color: #333;
    font-size: 20px;
    font-weight: 500;
  }

  .input-wrap {
    width: 390px;
    margin: 0 auto;

    .el-input {
      margin-top: 30px;
    }
  }

  .btn-wrap {
    text-align: center;
    margin-top: 30px;

    .el-button {
      width: 390px;
    }
  }
}
</style>
