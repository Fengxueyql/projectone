<template>
  <div><button @click='quit'>退出页面</button></div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {
    quit(){
       this.$router.push('/login')
    }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style>

</style>
