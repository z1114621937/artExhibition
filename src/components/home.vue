<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="https://z3.ax1x.com/2021/06/21/REnCng.png" />
        <p>全国第六届大学生艺术展演活动</p>
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-col :span="24">
          <el-menu
            default-active="0"
            class="el-menu-vertical-demo"
            background-color="#5a3ac2"
            text-color="#fff"
            active-text-color="#ffd04b"
            :unique-opened="true"
          >
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <!-- 网上报名 -->
            <div class="line">
              <p>—— 网上报名 ——</p>
            </div>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>艺术表演类</span>
              </template>
              <el-menu-item index="2-1" @click="vocalistEnroll()">声乐作品报名</el-menu-item>
              <el-menu-item index="2-2" @click="instrumentalEnroll()">器乐作品报名</el-menu-item>
              <el-menu-item index="2-3" @click="danceEnroll()">舞蹈作品报名</el-menu-item>
              <el-menu-item index="2-4" @click="playEnroll()">戏剧作品报名</el-menu-item>
              <el-menu-item index="2-5" @click="recitationEnroll()">朗诵作品报名</el-menu-item>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>学生艺术作品类</span>
              </template>
              <el-menu-item index="3-1" @click="drawingEnroll()">绘画作品报名</el-menu-item>
              <el-menu-item index="3-2" @click="handwritingEnroll()">书法、篆刻作品报名</el-menu-item>
              <el-menu-item index="3-3" @click="shootEnroll()">摄影作品报名</el-menu-item>
              <el-menu-item index="3-4" @click="deviseEnroll()">设计作品报名</el-menu-item>
              <el-menu-item index="3-5" @click="movieEnroll()">微电影作品报名</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>高校校长作品类</span>
              </template>
              <el-menu-item index="4-1">绘画作品报名</el-menu-item>
              <el-menu-item index="4-2">书法、篆刻作品报名</el-menu-item>
              <el-menu-item index="4-3">摄影作品报名</el-menu-item>
            </el-submenu>

            <el-menu-item index="5">
              <i class="el-icon-menu"></i>
              <span slot="title">艺术实践工作坊</span>
            </el-menu-item>

            <el-menu-item index="6">
              <i class="el-icon-menu"></i>
              <span slot="title">优秀案例报名</span>
            </el-menu-item>

            <div class="line">
              <p>—— 报名信息 ——</p>
            </div>

            <el-menu-item index="7">
              <i class="el-icon-menu"></i>
              <span slot="title">艺术表演类统计</span>
            </el-menu-item>

            <el-menu-item index="8">
              <i class="el-icon-menu"></i>
              <span slot="title">学生艺术作品统计</span>
            </el-menu-item>

            <el-menu-item index="9">
              <i class="el-icon-menu"></i>
              <span slot="title">高校校长作品统计</span>
            </el-menu-item>

            <el-menu-item index="10">
              <i class="el-icon-menu"></i>
              <span slot="title">艺术实践工作坊统计</span>
            </el-menu-item>

            <el-menu-item index="11">
              <i class="el-icon-menu"></i>
              <span slot="title">优秀案例统计</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main>
        <!-- 顶部窗口区 -->
        <div class="windows" style="height:40px;"></div>
        <router-view class="main-height"></router-view>
        <div class="copyright">@copyright 第六届全国大学生艺术展演</div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    vocalistEnroll() {
      this.$router.push("/vocalistenroll");
    },
    instrumentalEnroll(){
       this.$router.push("/instrumentalEnroll");
    },
    danceEnroll(){
       this.$router.push("/danceEnroll");
    },
    playEnroll(){
       this.$router.push("/playEnroll");
    },
    recitationEnroll(){
       this.$router.push("/recitationEnroll");
    },


    drawingEnroll(){
       this.$router.push("/drawingEnroll");
    },
    handwritingEnroll(){
       this.$router.push("/handwritingEnroll");
    },
    shootEnroll(){
       this.$router.push("/shootEnroll");
    },
    deviseEnroll(){
       this.$router.push("/deviseEnroll");
    },
    movieEnroll(){
       this.$router.push("/movieEnroll");
    }


  },
};
</script>

<style scoped>
.home-container {
  height: 100%;
}
ul li{
  list-style: none;
}
.el-header {
  background-color: #8b6fe9;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.el-header div {
  width: 400px;
  height: 100%;
}

.el-header img {
  margin-right: 10px;
  width: 50px;
  height: 50px;
}
.el-header p {
  color:white;
  font-size: 20px;
}
.el-header div {
  display: flex;
  justify-content: left;
  align-items: center;
}
.el-aside {
  background-color: #5a3ac2;
}

.el-main {
  background-color: #e5e7ec;
  padding: 0px;
}

.el-menu {
  border-right: 0px;
}

.line {
  width: 90%;
  margin: 0 auto;
  height: 35px;
  line-height: 35px;
  cursor: pointer;
  background-color: #d1c7f3;
  border-radius: 6px;
  transition: all 0.3s;
}

.line p {
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  opacity: 0.5;
  color: #4219c7;
  font-family: SimHei Regular, SimHei Regular-Regular;
}

.windows {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0px 5px #898989;
  min-width: 1000px;
}

.copyright {
  width: 100%;
  background-color: #fff;
  min-width: 1000px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
  color: #c9c4c4;
}

header {
  height: 70px !important;
}
</style>