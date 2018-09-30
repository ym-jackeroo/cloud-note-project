<template>
    <div class="article-wrap w750">
        <div class="article-header clearfix" v-if="articleItem.author">
            <div class="article-avatar fl">
                <img :src="articleItem.author.avatar" alt="">
            </div>
            <div class="article-msg fl">
                <div class="article-author" v-text="articleItem.author.username">ccfe</div>
                <div class="article-span">
                    <span class="article-time" v-text="articleItem.createdTime">2018年09月27日</span>
                    <span class="article-readnum">阅读: <span v-text="articleItem.readNumber"></span></span>
                </div>
            </div>
        </div>
        <div class="article-content">
            <div class="content-title" v-text="articleItem.title">
                Nginx与前端开发
            </div>
            <div class="content" v-html="articleItem.content">
                作为前端开发，即使没用过Nginx，但一定听说过上面这句话。这句经典的话，基本构成了所有人对Nginx的第一印象。
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            articleItem: {},
        }
    },
    methods: {
        getArticle() {
            this.$axios.get(`/article/${this.$route.params.id}`).then(res => {
                this.articleItem = res.data
            })
        }
    },
    created() {
        this.getArticle()
    },
}
</script>

<style scoped lang="scss">
    .w750 {
        width: 750px;
        margin: 30px auto 0;
    }
    .article-wrap {
        background-color: #fff;
        padding: 30px;

        .article-avatar {
            width: 50px;
            height: 50px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .article-msg {
            margin-left: 10px;

            .article-author {
                font-weight: 700;
                line-height: 1.5;
            }

            .article-span {
                line-height: 1.5;

                .article-time {
                    font-size: 14px;
                    color: #666;
                }
                .article-readnum {
                    font-size: 14px;
                    color: #555;
                    margin-left: 10px;
                }
            }
        }

        .content-title {
            margin-top: 40px;
            font-size: 24px;
            font-weight: 700;
        }

        .content {
            margin-top: 50px;
        }
    }
</style>
