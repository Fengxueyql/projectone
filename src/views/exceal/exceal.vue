<template>
  <div>
    <el-table
      :data="list.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
      style="width: 100%"
    >
      <el-table-column prop="NAME" label="名称" width="1200"> </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
       <el-popover
  placement="right"
  width="400"
  trigger="click">
  <el-form label-width="80px" :model="form">
  <el-form-item label="名称">
    <el-input v-model="scope.row.NAME"></el-input>
  </el-form-item>
  <el-form-item label="数量">
    <el-input v-model="scope.row.AMOUNT"></el-input>
  </el-form-item>
  <el-form-item label="状态">
    <el-input v-model="scope.row.STATE"></el-input>
  </el-form-item>
</el-form>
  <el-button slot="reference"> 编辑</el-button>
</el-popover>

      </template>
    </el-table-column>
    </el-table>

    <div class="block" style="margin-top: 15px">
      <el-pagination
        align="center"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 5, 10, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="list.length"
      >
      </el-pagination>
    </div>

    <download-excel :data="list" :fields="fields" name="data.xls">.
    
      <el-button type="primary" size="small">导出EXCEL</el-button>
    </download-excel>
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
      list: [],
      form:{},
      fields: {
        商品名称: "NAME",
      },
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 13, // 每页的数据条数
     
    };
  },
  methods: {
    getDate() {
      axios
        .get("/api/tableData")
        .then((res) => {
          this.list = res.data.data;

          console.log(this.list);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    edit() {},
  },
  mounted() {
    this.getDate();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>


