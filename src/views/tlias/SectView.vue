<template>
    <div>
        <el-container style="border: 1px solid #eee">
            <el-header style="font-size: 40px;background-color: rgb(238, 241, 246)">后台管理系统</el-header>
            <el-container>
                <el-aside style="height: 730px; width: 230px; border: 1px solid #eee">
                    <el-menu :default-openeds="['1', '2']">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>天龙管理</template>
                            <el-menu-item index="1-1">
                                <router-link to="/sect">门派管理</router-link>
                            </el-menu-item>
                            <el-menu-item index="1-2">
                                <router-link to="/hero">英雄管理</router-link>
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title"><i class="el-icon-menu"></i>八部管理</template>
                            <el-menu-item index="2-1">演员管理</el-menu-item>
                            <el-menu-item index="2-2">剧情简介</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>

                <el-main style="height: 730px;">
                    <!-- 搜索表单 -->
                    <el-form :inline="true" :model="searchForm" class="demo-form-inline">
                        <el-form-item label="门派名称">
                            <el-input v-model="searchForm.name" placeholder="门派名称"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">查询</el-button>
                        </el-form-item>
                    </el-form>

                    <!-- Main区域表格数据 -->
                    <el-table :data="tableData" border class="centered-table">
                        <el-table-column prop="name" label="门派名称" width="120"></el-table-column>
                        <el-table-column prop="introduction" label="门派介绍" width="500"></el-table-column>
                        <el-table-column prop="updateTime" label="最后操作日期"></el-table-column>
                        <el-table-column label="操作">
                            <el-button type="primary" size="mini">编辑</el-button>
                            <el-button type="danger" size="mini">删除</el-button>
                        </el-table-column>
                    </el-table>

                    <br />

                    <!-- 分页条 -->
                    <el-pagination background layout="total, sizes, prev, pager, next, jumper"
                        @size-change="handleSizeChange" @current-change="handleCurrentChange" :total="1000">
                    </el-pagination>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            tableData: [],
            searchForm: {
                name: ''
            }
        }
    },
    methods: {
        onSubmit: function () {
            alert("查询数据");
        },
        handleSizeChange(val) {
            alert(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            alert(`当前页: ${val}`);
        }
    },
    mounted() {
        // 发送异步请求
        axios.get("http://127.0.0.1:99/api/sects").then((result) => {
            this.tableData = result.data.data;
        }).catch(error => {
            //处理错误
            alert(error)
        })
    }
}
</script>

<style>
.centered-table .el-table__body td {
    text-align: center;
}
</style>