<template>
    <div class="index">
        <div class="banner-wrap w1170 clearfix">
            <Banner></Banner>
            <UserBox></UserBox>
        </div>
        <div v-if="!this.$store.state.userInfo.avatar"></div>
        <div class="w1170" v-else>
            <div class="article-wrap">
                <router-link :to="{name: 'noteDetails', params: {id: item._id}}" class="article-item" v-for="(item, index) in content" :key="index">
                    <div class="article-msg clearfix">
                        <div class="avatar fl">
                            <img :src="item.author.avatar" alt="">
                        </div>
                        <div class="msg fl">
                            <div class="row1">
                                <span class="author-name" v-text="item.author.username">马冬梅</span>
                                <span class="divide">|</span>
                                <span class="article-title" v-text="item.title">标题</span>
                            </div>
                            <div class="row2">
                                <span>浏览: <strong v-text="item.readNumber"></strong></span>
                                <span>回复: <strong v-text="item.commondNumber"></strong></span>
                                <span>分类: <strong v-text="item.category.name"></strong></span>
                            </div>
                        </div>
                    </div>
                    <div class="article-content" v-text="item.contentText">
                        十三亿人都会用的云笔记
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from "@/components/Banner";
import UserBox from "@/components/UserBox";

export default {
  components: {
    Banner,
    UserBox
  },
  data() {
      return {
          content: {}
      }
  },
  methods:{
      getData() {
          this.$axios.get('/article').then(res => {
              this.content = res.data
          })
      }
  },
  created() {
      this.getData()
  },
};
</script>

<style scoped lang="scss">
.index {
  margin-top: 50px;

  .article-wrap {
    margin-top: 30px;
    width: 750px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;

    .article-item {
      display: block;
      text-decoration: none;  
      padding: 24px;
      background-color: #fff;
      color: #333;
      .avatar {
        width: 70px;
        height: 70px;

        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }

      .msg {
        margin-left: 10px;
      }

      .msg .row1 {
          .author-name {
              font-size: 18px;
              font-weight: 700;
              color: #409eff;
              line-height: 24px; 
              margin-right: 8px;
          }

          .article-title {
              font-size: 16px;
              font-weight: 600;
              line-height: 24px;
              margin-left: 8px;
          }
      }

      .msg .row2 {
          background-color: #bbb;
          color: #555; 
          border-radius: 4px; 
          padding: 6px;
          width: 610px;
          margin-top: 5px;
           span {
               margin-right: 10px;
           }
      }

      .article-content {
          display: inline-block;
          white-space: nowrap;
          width: 80%;
          overflow: hidden;
          text-overflow: ellipsis;
      }
    }
  }
}
</style>
