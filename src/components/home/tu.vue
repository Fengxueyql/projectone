<template>
  <div>
    <div class="box">
      <ve-line :data="list"></ve-line>
    </div>
    <!--第二部分---->

    <div class="box1">
      <div>
        <ve-radar :data="chartData"></ve-radar>
      </div>
      <div>
        <ve-pie :data="Data"></ve-pie>
      </div>
      <div>
        <ve-histogram :data="chart"></ve-histogram>
      </div>
      <!--第三部分---->
    </div>
    <div class="box2">
      <div class="box3">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="num" label="order-no" height="25" width="180">
          </el-table-column>
          <el-table-column prop="price" label="price" height="25" width="180">
          </el-table-column>
          <el-table-column prop="status" label="status"> </el-table-column>
        </el-table>
      </div>
      <div class="box4">
        <el-table :data="todolist" stripe style="width: 100%">
          <el-table-column prop="name" label="order-no" height="25" width="180">
          </el-table-column>
        </el-table>
      </div>
      <div class="box5">
        <div class="box6">
          <img
            src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"
          />
        </div>
        <div class="box7">
          <!--进度条---->
          <el-progress :percentage="item.progress*100" v-for="(item,index) in jingdu" :key="index" class="jidu"></el-progress>
      
        </div>
      </div>
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
      list: {
        columns: [],
        rows: [],
      },
      chartData: {
        columns: [],
        rows: [],
      },
      Data: {
        columns: [],
        rows: [],
      },
      chart: {
        columns: [],
        rows: [],
      },
      /*表格*/
      tableData: [],
      todolist: [],
      jingdu: {},
    };
  },
  methods: {
    zhe() {
      axios
        .get("/api/homeChat")
        .then((res) => {
          let info = res.data.data;
          this.list.columns = Object.keys(info[0]);

          this.list.rows = info;
          // console.log(this.list);
        })
        .catch((err) => {
          //   console.log(err);
        });
    },
    lei() {
      axios
        .get("/api/radarChat ")
        .then((res) => {
          let info = res.data.data;
          this.chartData.columns = Object.keys(info[0]);

          this.chartData.rows = info;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    bin() {
      axios
        .get("/api/ringChat")
        .then((res) => {
          let info = res.data.data;
          this.Data.columns = Object.keys(info[0]);

          this.Data.rows = info;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    san() {
      axios
        .get("/api/ringChat")
        .then((res) => {
          let info = res.data.data;
          this.chart.columns = Object.keys(info[0]);

          this.chart.rows = info;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    ding() {
      axios
        .get("/api/orderData ")
        .then((res) => {
          this.tableData = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    todo() {
      axios
        .get("/api/todolist")
        .then((res) => {
          this.todolist = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    jing() {
      axios
        .get("/api/progress")
        .then((res) => {
          this.jingdu = res.data.data;

          
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.zhe();
    this.lei();
    this.bin();
    this.san();
    this.ding();
    this.todo();
    this.jing();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.box {
  height: 400px;
  margin-top: 10px;
  background-color: skyblue;
  width: 100%;
}
.box1 {
  width: 100%;
  margin-top: 15px;
  justify-content: space-around;

  display: flex;
}
.box1 div {
  height: 400px;
  background-color: white;
  width: 350px;
}
.box2 {
  display: flex;
  justify-content: space-around;
}
.box3 {
  width: 650px;
  border: 1px solid grey;
  height: 600px;
}
.box4 {
  width: 400px;
  border: 1px solid grey;
  border: 1px solid;
  height: 600px;
}
.box5 {
  width: 400px;
  border: 1px solid grey;
  border: 1px solid;
  height: 600px;
}
.box6 {
  margin-top: 15px;
}
.box7 {
  width: 400px;
  
  height: 350px;
}
.jidu{margin-top: 25px;}


</style>

