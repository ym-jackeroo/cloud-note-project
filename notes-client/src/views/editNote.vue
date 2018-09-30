<template>
    <div id="edit-note">
        <div class="main-content w1170">
            <div class="title mb20">
                标题
            </div>
            <div class="input-wrap mb20">
                <el-input v-model="formData.title"></el-input>
            </div>
            <div class="title mb20">
                内容
            </div>
            <quill-editor
            @change="handleChange"
            v-model="formData.content"
            ref="myQuillEditor"
            :options="editorOption"
            >
            </quill-editor>
            <div class="category clearfix">
                <span class="fl mark">标签:</span> 
                <div class="fl">
                    <Radios :options="categories" v-model="formData.category"></Radios>
                </div>
            </div>
            <div class="btn">
                <el-button type="primary" @click="handleSubmit">
                    发布笔记
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
import "quill/dist/quill.snow.css";
import { quillEditor, Quill } from "vue-quill-editor";
import { container, ImageExtend, QuillWatch } from "quill-image-extend-module";
import Radios from '../components/Radios'

Quill.register("modules/ImageExtend", ImageExtend);
export default {
  components: {
    quillEditor,
    Radios
  },
  data() {
    return {
      formData: {
        title: "",
        content: "",
        contentText: "",
        category: ""
      },
      categories: [],
      //富文本框参数设置 
      editorOption: {
        modules: {
          ImageExtend: {
            loading: true,
            name: "img",
            action: "http://qiniu.com",
            response: res => {
              return res.info;
            }
          },
          toolbar: {
            container: container,
            handlers: {
              image: function() {
                QuillWatch.emit(this.quill.id);
              }
            }
          }
        }
      }
    };
  },
  methods: {
      handleChange({quill, html, text}) {
          this.formData.contentText = text
          this.formData.contentText = this.formData.contentText.substring(0, 200) + '...'
      },
      handleSubmit() {
          if(this.formData.category&&this.formData.title&&this.formData.content){
              this.$axios.post('/article', this.formData).then(res => {
              if(res.code == 200) {
                  this.$message.success(res.msg)
                  this.$router.push('/index')
              }else if(res.code == 403) {
                  this.$message.info(res.msg)
                  setTimeout(() => {
                    this.$router.push('/index')
                  }, 1000);
              }
          })
        }else{
            this.$message.info('笔记要填写完整哦')
        }
          
      },
      getCategory() {
          this.$axios.get('/category').then(res => {
              this.categories = res.data
          })
      }
  },
  created() {
      this.getCategory()
  },
};
</script>

<style scoped lang="scss">
.main-content {
    margin-top: 30px;
    padding: 30px;
    background-color: #fff;
    border-radius: 6px;
    box-sizing: border-box;

    .title {
        font-size: 22px;
        font-weight: 600;
    }

    .mb20 {
        margin-bottom: 20px;
    }

    .mark {
        margin-right: 10px;
        margin-top: 10px;
    }

    .category {
        font-size: 16px;
        font-weight: 700;
        color: #409eff;
        line-height: 2.5;
    }

    .btn {
        text-align: center;
    }
}
</style>

<style>
.ql-editor {
    min-height: 300px;
}
</style>

