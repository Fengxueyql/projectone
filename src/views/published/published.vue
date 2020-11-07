<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="title" label="标题" width="180"> </el-table-column>
      <el-table-column prop="source" label="来源" width="180">
      
      </el-table-column>
      <el-table-column prop="category" label="类目"> </el-table-column>
      <el-table-column prop="abstract" label="摘要"> </el-table-column>
      <el-table-column prop="date" label="发表时间"> </el-table-column>
      <el-table-column prop="star" label="星级"> </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="{ row }">
          <el-dropdown>
            <span class="el-dropdown-link">
              操作<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                ><button @click="edit(row)">编辑</button></el-dropdown-item
              >
              <el-dropdown-item
                ><button @click="dele(row)">删除</button></el-dropdown-item
              >
              <el-dropdown-item
                ><button @click="look(row)">查看</button></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      tableData: [],
    };
  },
  components: {},
  methods: {
    getDate() {
      axios
        .get("/api/article/allArticle")
        .then((res) => {
          this.tableData = res.data.data;

          console.log(this.list);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    dele(row) {
      let c = window.confirm("确定要删除吗");

      if (c) {
        axios.post("/api/article/delete", row).then((res) => {
          console.log(res.data);
          if (res.data.code === 200) {
            this.$message.success("删除成功");
            this.tableData.splice(
              this.tableData.findIndex((item) => item === row),
              1
            );
            console.log(this.tableData.findIndex((item) => item === row));
          }
        });
      }
    },
    edit(row){
      let info=JSON.parse(getItem('edit'))
     if(info){
       this.ruleForm=info
       this.$router.push({name:"article"})
     }
      

    },
    look(row){
      this.$router.push({name:"article"})

    }
  },

  mounted() {
    this.getDate();
  },
  computed: {},
  watch: {},
};
</script>

<style scoped lang="scss">
</style>