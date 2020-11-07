<template>
<div>
    <el-menu :default-active="this.$router.path" router background-color="#545c64" text-color="#fff">
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
            <i class="iconfont" :class="item.iPath"></i>
            {{ item.navItem }}
        </el-menu-item>
    </el-menu>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            navList: [{
                    name: '/',
                    navItem: '首页',
                    iPath: 'el-icon-s-home'
                },
                {
                    name: '/published',
                    navItem: '已发布',
                    iPath: 'el-icon-success'
                },
                {
                    name: '/count',
                    navItem: '统计',
                    iPath: 'el-icon-menu'
                },
                {
                    name: '/article',
                    navItem: '发表文章',
                    iPath: 'el-icon-s-promotion'
                },
                {
                    name: '/tab',
                    navItem: '标签页',
                    iPath: 'el-icon-s-order'
                },
                {
                    name: '/exceal',
                    navItem: '导出excel',
                    iPath: 'el-icon-upload'
                },
                {
                    name: '/picture',
                    navItem: '图片上传',
                    iPath: 'el-icon-picture'
                },
                {
                    name: '/quit',
                    navItem: '退出系统',
                    iPath: 'el-icon-s-help'
                }

            ]
        }
    },
    components: {},
    methods: {},
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang="scss">
.menu {
    height: 100%;
    
}
</style>