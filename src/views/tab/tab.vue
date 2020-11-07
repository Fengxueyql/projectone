<template>
  <div>
    <div class="box" style="width: 100px">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="`未读信息(${arr.length})`">
          <el-table :data="arr"  style="width: 100%">
            <el-table-column prop="content" label="" height="45" width="780">
            </el-table-column>
            <el-table-column prop="time" label="时间" height="45" width="480">
            </el-table-column>
            <el-table-column prop="status" label="状态">
              <template slot-scope="{ row }">
                <el-button type="rdea" @click="ready(row)">标记已读</el-button>
              </template>
            </el-table-column>
          </el-table>
           <!--button按钮-->
          <el-button type="primary" @click="read">全部已读</el-button>
        </el-tab-pane>
        <!--未读页面-->

        <el-tab-pane :label="`已读信息(${arr1.length})`">
          <el-table :data="arr1"  style="width: 100%">
            <el-table-column prop="content" label="" height="45" width="780">
            </el-table-column>
            <el-table-column prop="time" label="时间" height="45" width="480">
            </el-table-column>
            <el-table-column prop="status" label="状态">
              <template slot-scope="{ row }">
                <el-button type="rdea" @click="huishou(row)"
                  >标记回收</el-button
                >
              </template>
            </el-table-column>
          </el-table>
           <!--button按钮-->
          <el-button type="primary" @click='recycle' >全部回收</el-button>
          <!--回收页面-->
        </el-tab-pane>
        <el-tab-pane :label="`回收站(${arr2.length})`"
          >
          <el-table :data="arr2"   style="width: 100%">
            <el-table-column prop="content" label="" height="45" width="780">
            </el-table-column>
            <el-table-column prop="time" label="时间" height="45" width="480">
            </el-table-column>
            <el-table-column prop="status" label="状态">
              <template slot-scope="{ row }">
                <el-button type="rdea" @click="fuyuan(row)"
                  >标记复原</el-button
                >
              </template>
            </el-table-column>
          </el-table>
           <!--button按钮-->
          <el-button type="primary" @click='dele' >全部清除</el-button>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: [
        {
          id: 1,
          rdea: false,
          recycle: false,
          time: "2018-04-19 20:00:00",
          content: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
        },
        {
          id: 2,
          read: false,
          recycle: false,
          time: "2018-04-19 21:00:00",
          content: "今晚12点整发大红包,先到先得",
        },
        {
          id: 3,
          read: false,
          recycle: false,
          time: "2018-04-19 20:00:00",
          content: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
        },
        {
          id: 4,
          read: false,
          recycle: false,
          time: "2018-04-19 20:00:00",
          content: "[系统通知]您的优惠券已经过期",
        },
      ],
      activeName: "second",
      arr1: [],
      arr2: [],
      arr3: [],
      num: -1,
    };
  },
  components: {},
  methods: {
    ready(obj) {
      this.arr.splice(obj, 1);

      this.arr1.push(obj);
      console.log(obj);
    },
    huishou(obj) {
      this.arr1.splice(obj, 1);

      this.arr2.push(obj);
      console.log(obj);
    },
    fuyuan(obj){
      this.arr2.splice(obj,1);
      
      this.arr1.push(obj);

    },
    read(){
     this.arr1 = [...this.arr1,...this.arr]
     this.arr = [];
      
    },
    recycle(){
      this.arr2 = [...this.arr2,...this.arr1]
      this.arr1 = [];
    },
    dele(){
      this.arr2 = [];

    },
    handleClick() {},
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style scoped lang="scss">
.box {
  display: flex;
}
.box div {
  margin-left: 15px;
}
.box {
  width: 250px;
}
</style>