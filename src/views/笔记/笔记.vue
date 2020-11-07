做登录页面需要发post请求需要传递参数，
from表单，用vaild回调函数，
设置表单验证规则，
用localstorage存储信息，为后面验证做基础，
验证码用v-html渲染

设置时间可以利用dayjs插件，
需要安装插件，将数据格式转化为需要的数据结构，
进度条可以利用for 循环



v-charts(vue图表库)
    - vue-count-to(计数器)
    - vue-image-crop-upload(图片上传)
    - vue-json-excel(下载excel)


发表文章需要设置表单验证规则
将数据属性和表单属性联系起来，
最后将表单制空利用 this.$refs.ruleForm.resetFields()


利用form表单将发表文章的属性分别绑定，
<template slot-scope="{ row }">
                
 </template>
 设置插槽绑定数据和事件，将数据通过row传递过来，
 splice属性用来删除数组元素
 push属性用来给数组添加元素，
 数组拼接可以利用contact或者 this.arr2 = [...this.arr2,...this.arr1]


 exceal需要下载插件之后
 用表单渲染出来之后。给数据设置分页

 统计
 利用groupby给数组分组
  let cat = groupBy(res.data.data,'author')
        this.list = res.data.data
        console.log(this.list)     
          for(let i in cat){
          let obj = {
            '数量': cat[i].length,
            '分类': i
          }
          this.chartData.rows.push(obj)
 








