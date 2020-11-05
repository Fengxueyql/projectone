<template>
  <div>
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          text-color="#fff"
          background-color:grey
          active-text-color="#ffd04b"
          ><div class="box">
            <div class="box2">欢迎{{user.username}},来到小爱管理系统</div>
            <div class="box3">{{this.hi}}亲爱的 {{user.username}} 登录时间为{{ this.timer }}</div>
          </div>
        </el-menu>
      </el-header>

      <!-- 边侧-->
      <el-container>
        <yin></yin>

        <el-container>
          <!-- 主题-->
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import yin from "../../components/aside/yin.vue";
import dayjs from 'dayjs'
export default {
  name: "",
  props: {},
  components: {
    yin,
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      
      user: {
        username: "",
      },
      hi: "",
      timer: "",
      time: "",
    };
  },
  methods: {
    getuser() {
      // localStorage.getItem 是获取存储的字符串
      // console.log(111);
      let userobj = localStorage.getItem("user");
      // console.log(localStorage.getItem("user"));
      // JSON.parse 把字符串转换成对象
      this.user = JSON.parse(userobj);
     
    },
    getTime() {
      this.timer = dayjs(new Date()).format(" YYYY/MM/DD/HH:");
      
      setInterval(() => {
        if (dayjs().hour() >= 6 && dayjs().hour() <= 12) {
          this.hi = "早上好！";
        } else if (dayjs().hour() >= 12 && dayjs().hour() <= 14) {
          this.hi = "中午好！";
        } else if (dayjs().hour() >= 14 && dayjs().hour() <= 18) {
          this.hi = "下午好！";
        } else if (dayjs().hour() >= 16 && dayjs().hour() <= 23) {
          this.hi = "晚上好！";
        } else {
          this.hi = "该睡觉啦！";
        }
      }, 1000);
      
    },
  },
  mounted() {
    this.getuser();
    this.getTime();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.el-header {
  background-color: cyan;
}
.box {
  display: flex;
  justify-content: space-between;
}
.box div {
  width: 400px;
  background-color: pink;
  text-align: center;
  line-height: 60px;
  height: 60px;
}
.box3 {
  display: flex;
  background-color: pink;
  justify-content: space-around;
}
</style>