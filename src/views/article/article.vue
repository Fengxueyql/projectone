<template>
  <div>
    <div class="box1">
      <div><el-button type="primary">查看</el-button></div>
      <div><el-button type="success">发布</el-button></div>
    </div>

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="文章标题" prop="name" >
        <el-input v-model="ruleForm.title" class="box3"></el-input>
      </el-form-item>
       <el-form-item label="文章摘要" prop="mame" >
        <el-input v-model="ruleForm.abstract" class="box3"></el-input>
      </el-form-item>
    </el-form>
    <!---作者部分---->
    <div class='box4'>
    <div> <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="作者" prop="author" >
        <el-input v-model="ruleForm.author" class="box5"></el-input>
      </el-form-item></el-form></div>

      
       <!---类目部分---->
    <div>
    <el-select v-model="ruleForm.category" clearable placeholder="请选择科目">
    <el-option
      v-for="item in option"
      :key="item.value"
      :label="科目"
      :value="item.value">
    </el-option>
  </el-select>
    </div>
    <div>
    <el-select v-model="ruleForm.source" clearable placeholder="请选择来源">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="来源"
      :value="item.value">
    </el-option>
  </el-select>
    </div>
    <!---重要部分---->
    <div>
    <div class="block">
  <span class="demonstration">重要性</span>
  <el-rate
    v-model="ruleForm.star"
    :colors="colors">
  </el-rate>
</div>
    </div>
    <!---时间部分---->
    <div>
    <div class="block">
    <span class="demonstration">时间</span>
    <el-date-picker
      v-model="ruleForm.date"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
    </div>
    </div>
    <div>
     <mavon-editor v-model="ruleForm.text"/>
     </div>
      <el-button type="primary" class='bottom' @click='tijiao'>发布</el-button>

  
  </div>
</template>

<script>
import axios from "axios";
import dayjs from 'dayjs'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
      },
      rules:{
        name:[
          { required: true, message: '请输入标题', trigger: 'blur' }
          ],
          mame:[{ required: true, message: '请输入文章摘要', trigger: 'blur'}],
          author:[{ required: true, message: '请输入作者', trigger: 'blur'}]
      },
      options: [{
          value: '选项1',
          label: '财经'
        }, {
          value: '选项2',
          label: '新闻'
        }, {
          value: '选项3',
          label: '政治'
        }, {
          value: '选项4',
          label: '体育'
        }, {
          value: '选项5',
          label: '股票'
        }],
        /*来源*/
         option: [{
          value: '选项1',
          label: 'java'
        }, {
          value: '选项2',
          label: 'php'
        }, {
          value: '选项3',
          label: 'c++'
        }, {
          value: '选项4',
          label: 'python'
        }, {
          value: '选项5',
          label: 'javascript'
        }],
        timer:'',

        value2: null,
        colors: [ 'yellow',] ,

        /*时间*/
         pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
          /* 数据提交*/

        },
        value1: '',
        value2: '',
        
       

        
      
    };
  },
  methods: {
    /*提交文章*/
    tijiao(){
      
       this.$refs.ruleForm.validate((valid) => {
         if (!valid) return;
         axios.post("/api/article/create", this.ruleForm).then((res) => {
           console.log(res.data)
           if (res.data.code !== 200) {

            this.$message.error(res.data.message);
          }else {
            console.log(res.data)
            localStorage.setItem("user", JSON.stringify(res.data.data[0]));
            this.$message.success(res.data.data);
            }
            /* this.$refs.ruleForm.resetFields()*/
         })
         

       })

      
        
      
        
    }
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.box1 {
  width: 100%;
  height: 45px;
  background-color: darkgreen;
  display: flex;
  justify-content: flex-end;
}
.box1 div {
  margin-left: 15px;
}
.box3{width: 1000px;height:35px; margin-top: 10px; text-align: center;line-height: 35px;}
.box4{display:flex;justify-content: space-around;}
.box5{width: 150px;height:35px;}
.bottom{margin:0 auto}

</style>





