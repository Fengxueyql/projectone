<template>
  <div>
    <div>支持拖拽</div>
    <div>Element UI自带上传组件</div>
    <el-upload class="upload-demo" drag action="/api/upload" multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
    <div>支持裁剪</div>
    <div>vue-image-crop-upload</div>
    <div id="app">
      <button class="btn" @click="toggleShow">上传图片</button>
      <my-upload
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        @crop-upload-fail="cropUploadFail"
        v-model="show"
        :width="200"
        :height="200"
        img-format="png"
        :size="size"
        langType="zh"
        :noRotate="false"
        field="Avatar1"
        url="/api/upload"
      ></my-upload>
      <img :src="imgDataUrl" />
    </div>
  </div>
</template>

<script>
import "babel-polyfill"; // es6 shim
import myUpload from "vue-image-crop-upload";
export default {
  name: "",
  props: {},
  data() {
    return {
      imgDataUrl: "",
      show: false,
      size: 2.1,
    };
  },
  components: {
    "my-upload": myUpload,
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------", imgDataUrl, field);
    },
    //上传成功回调
    cropUploadSuccess(jsonData, field) {
      console.log("-------- upload success --------");
      this.imgDataUrl = jsonData.files.Avatar1;
      console.log(jsonData);
      console.log("field: " + field);
    },
    //上传失败回调
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log("上传失败状态" + status);
      console.log("field: " + field);
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style scoped lang="scss">
.box1 {
  height: 60px;
  width: 100%;
  background-color: grey;
  margin-top: 15px;
}
</style>
