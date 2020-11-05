<template>
  <div>
    <div class="top">
      <div class="a1">
        <i class="el-icon-user"></i>
        <countTo :startVal='startVal' :endVal='list.messages' :duration='3000'></countTo>
        
      </div>
      <div class="a1">
        <i class="el-icon-star-off"></i>
          <countTo :startVal='startVal' :endVal='list.purchases' :duration='3000'></countTo>
        
      </div>
      <div class="a1">
        <i class="el-icon-goods"></i>
        <countTo :startVal='startVal' :endVal='list.shopping' :duration='3000'></countTo>
        
      </div>

      <div class="a1">
        <i class="el-icon-upload"></i>
        <countTo :startVal='startVal' :endVal='list.visits' :duration='3000'></countTo>
      

      </div>
    </div>
    <tu></tu>

  </div>

</template>

<script>
import countTo from "vue-count-to";
import axios from "axios";
import tu from "../components/home/tu.vue";

export default {
  name: "",
  props: {},
  data() {
    return {
      startVal: 0,
      endVal: '',
      list: {},
    };
  },
  components: {
    countTo,
    tu,
  },
  methods: {
    count() {
      axios
        .get("/api/homeData")
        .then((res) => {
          this.list = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.count();
  },
  computed: {},
  watch: {},
};
</script>

<style scoped lang="scss">
.top {
  justify-content: space-around;
  display: flex;
}
.top div {
  height: 100px;
  background-color: orange;

  width: 250px;
}

i {
  font-size: 40px;
}
.a1 {
  text-align: 50px;
  line-height: 100px;
}
</style>