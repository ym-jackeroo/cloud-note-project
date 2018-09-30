<template>
    <div class="header">
        <div class="header-wrap w1170 clearfix">
            <div class="header-title fl">
                <router-link to="/">
                    云笔记
                </router-link>
            </div>
            <div class="btn-wrap fr">
                <el-button @click="handleEditNote">
                    写笔记
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleEditNote() {
            if(this.$store.state.userInfo.avatar){
                setTimeout(() => {
                    this.$router.push('/editNote')
                },1000)
            }else {
                this.$message.info('您还未登录哟~')
            }
        }
    }
};
</script>

<style scoped lang="scss">
.header {
  height: 50px;
  background-color: #409eff;

  .header-title a{
    font-size: 30px;
    font-weight: 400;
    color: #fff;
    line-height: 50px;
    text-decoration: none; 
  }

  .btn-wrap {
    margin-top: 5px;
  }
}
</style>
