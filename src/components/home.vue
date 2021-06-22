<template>
  <div id="app">
    <el-container class="home-container">
      <el-header>
      <div>
      <img src="https://z3.ax1x.com/2021/06/21/REnCng.png">
      <p>全国第六届大学生艺术展演活动</p>
      </div>
      <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li></ul>
      </el-header>
      <el-container >
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home-container{
height: 100%;
}
.el-header {
  background-color: #ffffff;

}
.el-header img{
width: 50px;
height: 50px;
}
.el-header p{
color:#5a3ac2 ;
}
.el-header div{
display: flex;
justify-content: left;
align-items: center;
}
.el-aside {
  background-color: #5a3ac2;
}
.el-main {
  background-color: #c0c4cc;
}
</style>