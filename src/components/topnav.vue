<template>
    <div id="topnav">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-row type="flex" justify="center">
                <el-menu-item index="1">首页</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">列表页</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="3">详情页</el-menu-item>
                </el-col>
            </el-row>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: 'topnav',
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
