<template>
<div class="a">
<div class="box2">
    <el-form
      ref="logininfromRef"
      label-width="0px"
      :model="loginfrom"
      class="box3"
      :rules="loginfromRule"
    >
      <el-form-item prop="username">
        <el-input
          v-model="loginfrom.username"
          prefix-icon="el-icon-user-solid"
          class="box3a"
        ></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="loginfrom.password"
          prefix-icon="el-icon-star-on"
          class="box3b"
          type="password"
        ></el-input>
      </el-form-item>

     
      <el-form-item class="btns">
      
        <el-button type="primary" @click="zhuce">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
  
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
    
      loginfrom: {
        username: "",
        password: "",
        code: "",
      },
      /*表单验证规则*/
      loginfromRule: {
        username: [
          { required: true, message: "请输入注册名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入注册密码", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "长度在 6 到 12 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    
    zhuce() {
      console.log(1);
      this.$refs.logininfromRef
        .validate((valid) => {
          if (!valid) return;
          axios.post("/api/user/register", this.loginfrom).then((res) => {
               let info = res.data
            if (info.code !== 200) {
              this.$message.error(info.message);
            } else {
              this.$message.success(info.message);
              setTimeout(() => {
                this.go();
              }, 1000);
            }
          });
        })
    },
    go(url = "login") {
      this.$router.push({
        name: url,
      });
    },
  },
  mounted() {
   
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.box2 {
  height: 450px;
  margin: 0 auto;
  border-radius: 5px;
  margin-top: 150px;
  background-color: white;
  border: 1px solid red;

  width: 600px;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.box3 {
  top: 30;

  padding: 0 30px;

  position: absolute;
}
.box3a {
  width: 400px;
  margin-top: 55px;
}
.box3b {
  width: 400px;
}
.box3c {
  width: 400px;
}
.a{
  position: absolute;
  width: 100%;
  height: 100%;
background-image:url('../../picture/timg.jpg') }
</style>