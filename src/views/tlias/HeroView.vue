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
                        <el-form-item label="姓名">
                            <el-input v-model="searchForm.name" placeholder="姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="性别">
                            <el-select v-model="searchForm.gender" placeholder="性别">
                                <el-option label="男" value="1"></el-option>
                                <el-option label="女" value="2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="出生日期">
                            <el-date-picker v-model="searchForm.birthday" type="daterange" range-separator="至"
                                start-placeholder="开始日期" end-placeholder="结束日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">查询</el-button>
                        </el-form-item>
                    </el-form>

                    <!-- Main区域表格数据 -->
                    <el-table :data="tableData" border :cell-style="{ 'text-align': 'center' }"
                        :header-cell-style="{ 'text-align': 'center' }">
                        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                        <el-table-column prop="kungfu" label="代表武功" width="200"></el-table-column>
                        <el-table-column label="头像" width="120">
                            <template slot-scope="scope">
                                <img :src="scope.row.image" width="50px" height="50px">
                            </template>
                        </el-table-column>
                        <el-table-column prop="gender" label="性别" width="80">
                            <template slot-scope="scope">
                                {{ scope.row.gender == 1 ? '男' : '女' }}
                            </template>
                        </el-table-column>
                        <el-table-column label="等级">
                            <template slot-scope="scope">
                                <span v-if="scope.row.level === 1">神级</span>
                                <span v-else-if="scope.row.level === 2">绝顶</span>
                                <span v-else-if="scope.row.level === 3">一流</span>
                                <span v-else-if="scope.row.level === 4">二流</span>
                                <span v-else>平庸</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="birthdate" label="出生日期"></el-table-column>
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
                name: '',
                gender: '',
                birthday: []
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
        axios.get("http://127.0.0.1:99/api/heroes?pageSize=5").then((result) => {
            this.tableData = result.data.data.rows;
        }).catch(error => {
            //处理错误
            console.log(error)
        })
    }
}
</script>

<style></style>