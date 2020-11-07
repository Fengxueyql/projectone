<template>
  <div>
   <ve-pie :data="chartData"></ve-pie>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
import groupBy from "lodash/groupBy";
export default {
  name: '',
  props:{},
  data () {
    return {
      list:{},
      chartData:{
        columns:['分类','数量'],
        rows:[],
      },
      
    }
  },
  components: {},
  methods: {
    getData(){
      axios.get("/api/article/allArticle").then(res => {
        let cat = groupBy(res.data.data,'author')
        this.list = res.data.data
        console.log(this.list)     
          for(let i in cat){
          let obj = {
            '数量': cat[i].length,
            '分类': i
          }
          this.chartData.rows.push(obj)
        }
        console.log(obj)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getData()
  },
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">

</style>