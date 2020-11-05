<template>
 <div>
  <div class="box">
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="未读信息" name="first"></el-tab-pane>
    <el-tab-pane label="已读信息" name="second"></el-tab-pane>
    <el-tab-pane label="回收管理" name="third"></el-tab-pane>
    
  </el-tabs>
  </div>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="shuju" label="" height="45" width="780">
          </el-table-column>
          <el-table-column prop="time" label="时间" height="45" width="480">
          </el-table-column>
          <el-table-column prop="status" label="状态"> </el-table-column>
        </el-table>
  </div>
  </div>
 
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      tableData: [
        {shuju:'今晚12点发大红包',
        time:'2018-04-19  20：00：00',
        status:'还原'},
         {shuju:'今晚2点发大红包',
        time:'2018-04-25  20：30：10',
        status:'还原'},
         {shuju:'今晚12点发大红包',
        time:'2018-04-19  10：00：00',
        status:'还原'},
        {shuju:'今晚2点发大红包',
        time:'2028-04-25  20：30：10',
        status:'还原'},
         {shuju:'今晚12点发大红包',
        time:'2016-04-19  10：00：00',
        status:'还原'}
      ],
       activeName: 'second'
    }
  },
  components: {},
  methods: {
     
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.box{display: flex;}
.box div{
  margin-left: 15px;
}
.box{width: 250px;}


</style>