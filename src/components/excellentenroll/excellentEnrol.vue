<template>
  <div class="home">
    <!---面包屑导航-->
    <div class="nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>优秀案例报名</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!---主体-->
    <div class="homeContent">
      <div class="header">
        <span>优秀案例报名</span>
      </div>
      <!---表单-->
      <div class="fromBady">
        <el-form
          ref="form"
          :model="form"
          :inline="true"
          class="demo-form-inline"
          :rules="rules"
        >
          <div class="right">
            <el-form-item label="案例名称" label-width="150px" prop="casename">
              <el-input v-model="form.casename" class="workwidth"></el-input>
            </el-form-item>
          </div>
          <div class="right">
            <el-form-item
              label="负责人姓名"
              label-width="150px"
              prop="username"
            >
              <el-input v-model="form.username" class="workwidth"></el-input>
            </el-form-item>
          </div>
        </el-form>
        <!---第二排-->
        <el-form
          ref="form"
          :model="form"
          :inline="true"
          class="demo-form-inline"
          :rules="rules"
        >
          <div class="right">
            <el-form-item
              label="报送单位"
              label-width="150px"
              prop="subadress"
            >
              <el-input v-model="form.subadress" class="workwidth"></el-input>
            </el-form-item>
          </div>
          <div class="right">
            <el-form-item
              label="联系人电话"
              label-width="150px"
              prop="usermodel"
            >
              <el-input v-model="form.usermodel" class="workwidth"></el-input>
            </el-form-item>
          </div>
        </el-form>
        <!--第三排-->
        <el-form
          ref="form"
          :model="form"
          :inline="true"
          class="demo-form-inline"
          :rules="rules"
        >
          <div class="right">
            <el-form-item
              label="负责人职务"
              label-width="150px"
              prop="prinduty"
            >
              <el-input v-model="form.prinduty" class="workwidth"></el-input>
            </el-form-item>
          </div>
          <div class="right">
            <el-form-item
              label="负责人单位"
              label-width="150px"
              prop="userunit"
            >
              <el-input v-model="form.userunit" class="workwidth"></el-input>
            </el-form-item>
          </div>
        </el-form>
        <!---第四排-->
        <el-form
          ref="form"
          :model="form"
          :inline="true"
          class="demo-form-inline"
          :rules="rules"
        >
          <div class="right">
            <el-form-item label="电子邮箱" label-width="150px" prop="email">
              <el-input v-model="form.email" class="workwidth"></el-input>
            </el-form-item>
          </div>
          <div class="right">
            <el-form-item label="类别" label-width="150px" prop="sort">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-form>
        <el-form
          ref="form"
          :model="form"
          :inline="true"
          class="demo-form-inline"
          :rules="rules"
        >
          <div class="right">
            <el-form-item label="案例代码" label-width="150px" prop="casecode">
              <el-input v-model="form.casecode" class="workwidth"></el-input>
            </el-form-item>
          </div>
        </el-form>
        <!--第六排作者-->
        <el-form
          rel="form"
          class="demo-form-inline"
          :inline="true"
          :rules="rules"
        >
          <div class="right">
            <el-form-item label="案例简介" label-width="150px" prop="induction">
              <el-input
                type="textarea"
                v-model="form.desc"
                style="width: 350px"
                :rows="10"
                maxlength="500"
                placeholder="请输入内容"
              ></el-input>
            </el-form-item>
          </div>
        </el-form>

        <!--上传视频-->
        <el-form
          ref="form"
          :model="form"
          :inline="true"
          class="demo-form-inline"
          :rules="rules"
        >
          <div class="left">
            <el-form-item label="上传案例正文" label-width="150px">
              <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>
                </div>
                <div class="el-upload__tip" slot="tip">
                  上传反映工作坊项目的现场实践视频（时长不超过8分钟，采用MPG2格式，文件大小不超过1G）
                </div>
              </el-upload>
            </el-form-item>
          </div>
        </el-form>
        <!--最后一排作者信息-->
        <div class="careful">
          <p>请仔细阅读报名须知，确认无误后勾选报名须知，即可进行报名。</p>
          <div class="footerMiddle">
            <span>报名须知</span>
            <div class="middleWarning">
              <el-checkbox v-model="form.checked"></el-checkbox>
              <a @click="drawer = true">我已阅读报名须知</a>
            </div>
          </div>
          <div class="footButton">
            <el-button type="primary" style="margin-right: 40px"
              >立即报名</el-button
            >
            <el-button>暂存</el-button>
          </div>
        </div>
      </div>
    </div>
    <el-drawer :visible.sync="drawer" :with-header="false">
      <span class="ask">
        <p>
          一、艺术表演节目的要求
          <br />艺术表演类包括声乐、器乐、舞蹈、戏剧、朗诵。
          <br />（一）声乐节目
          <br />合唱：合唱队人数不超过40人，钢琴伴奏1人，指挥1人（应为本校教师），每支合唱队可演唱两首作品（其中至少一首中国作品），演出时间不超过8分钟。
          <br />小合唱或表演唱：人数不超过15人（含伴奏），不设指挥，不得伴舞，演出时间不超过5分钟。
          <br />（二）器乐节目
          <br />合奏：乐队人数不超过65人，指挥1人（鼓励本校教师担任），演出时间不超过9分钟，鼓励演奏中国作品。
          <br />小合奏或重奏：人数不超过12人，不设指挥，演出时间不超过6分钟。
          <br />（三）舞蹈节目 <br />群舞：人数不超过36人，演出时间不超过7分钟。
          <br />（四）戏剧节目
          <br />含戏曲、校园短剧、小品、歌舞剧、音乐剧等。人数不超过12人（含伴奏），演出时间不超过12分钟。
          <br />（五）朗诵节目
          <br />作品文体不限，须使用普通话，人数不超过8人（含伴奏，学生不作道具设置，不得伴舞），演出时间不超过5分钟。
          <br />二、学生艺术作品的要求
          <br />学生艺术作品需提交400字以内的创作说明（包括作品主题简介和创作过程介绍）。
          <br />（一）绘画作品
          <br />国画、水彩/水粉画（丙烯画）、版画、油画，或其他画种。尺寸：国画不超过四尺宣纸（69cm×138cm）对开，其他画种尺寸均不超过对开（54cm×78cm）。
          <br />（二）书法、篆刻作品
          <br />书法、篆刻作品尺寸不超过四尺宣纸（69cm×138cm）。
          <br />（三）摄影作品
          <br />单张照和组照（每组不超过4幅，需标明顺序号）尺寸均为14英寸（30.48cm×35.56cm）；除影调处理外，不得利用电脑和暗房技术改变影像原貌。
          <br />（四）设计
          <br />含平面设计和立体设计。平面设计作品尺寸不超过对开（54cm×78cm）,立体设计作品尺寸不超过50cm（长）×50cm（宽）×50cm（高）。
          <br />（五）微电影
          <br />片长不超过15分钟，视频统一采用MPG2格式，作者须保留MOV或AVI格式视频文件。
          <br />三、报送节目和作品的要求
          <br />（一）同一个节目的参加者和同一件作品的创作者必须是同一学校的学生，甲乙组学生之间不得跨组组队。
          <br />（二）报送数量。根据各省、自治区、直辖市和新疆生产建设兵团（以下简称省份）高校数确定（分配表见附件4）。
          <br />（三）报送比例
          <br />1.总体比例。各省份报送的艺术表演节目和艺术作品，甲组均不少于70％，乙组均不超过30％。
          <br />2.艺术表演作品。节目报送数量在10个以上的省份，每个项目（声乐、器乐、舞蹈、戏剧、朗诵）须分别至少有1个节目、且不超过本地报送节目总数的30%。各省份报送的声乐节目中，合唱不得少于50%。同一学校在同一类项目上只能报送1个节目，不同项目可兼报。
          <br />3.学生艺术作品。每个项目（绘画、书法/篆刻、摄影、设计、微电影）每名作者限报1件。
          <br />（四）报送方式
          <br />1.艺术表演节目报送视频。视频采用MPG2格式（压缩带宽不低于10M，分辨率1920×1080），使用一个固定机位正面全景录制，声音和图像须同期录制，不得后期配音合成。每个节目视频以单独文件制作（文件大小不超过1G，不要多个文件合成）并以“节目名称（组别）”命名，播放的内容中不得出现所在地区、学校名称和指导教师姓名。
          <br />2.艺术作品不需装裱，可按惯例在作品正面或背面署名。须在作品背面注明作品种类、作者姓名、所在地区、学校名称、所在院系、学生专业、指导教师姓名等信息（一律用铅笔写），并附创作说明。作品以数码照片和原件两种方式报送。作品的数码照片要求：JPG格式，大小不低于10M，分辨率达到300dpi。
          <br />（五）艺术作品原则上不退还作者。获奖作品统一由“中华儿女美术馆——全国大中小学生艺术展演作品库”收藏，作者获得收藏证书。教育部对获奖节目和作品有权在中外人文交流以及相关活动和资料中使用（包括印制光盘、编辑画册或用于展览、宣传、对外交流等），不支付作者稿酬，作者享有署名权。
          <br />（六）报送艺术表演节目和艺术作品时，学校要严格把关，避免产生著作权纠纷。如发生著作权问题，取消学校获奖资格，由作者承担相关责任。
          <br />四、高校校长书画摄影作品的要求
          <br />校长绘画、书法、摄影作品的具体规格同上“二、学生艺术作品的要求”中的有关要求，其他要求同上“三、报送节目和作品的要求”中的第（四）—（六）条。作品不需装裱，作品的名称以及创作者的姓名、单位、职务、联系电话等可在作品背面注明，并附400字以内的创作说明。
          <br />校长书画摄影作品由省级教育行政部门集中统一报送，每人报送作品数量不超过2幅（组）。
          <br />
        </p>
      </span>
    </el-drawer>
  </div>
</template>

<script >
export default {
  data() {
    var checkMobile = (rule, value, cb) => {
      const regMobile =
        /^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      if (regMobile.test(value)) {
        //合法的邮箱
        return cb();
      }
      cb(new Error("请输入合法手机号码"));
    };
    var checkEmail = (rule, value, cb) => {
      const regEmail= /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (regEmail.test(value)) {
        //合法的邮箱
        return cb();
      }
      cb(new Error("请输入合法电子邮箱"));
    };
    return {
      options: ["高校美育教师团队", "高校公共艺术课程建设与教学改革","高校专业艺术人才培养模式改革创新","高校艺术师范教育教学改革","高校中华优秀传统文化艺术传承创新"],
      value: "",
      form: {
        casename: "",
        username: "",
        workadress: "",
        subadress:'',
        usermodel: "",
        prinduty:'',
        value1: "",
        userunit: "",
        workwidth: "",
        worklong: "",
        desc: "",
        intro: "",
        email:'',
        casecode:'',
        checked:""
      },
      addTable: [
        {
          id: "",
          name: "",
          ID: "",
          nation: "",
          age: "",
          sex: "",
          erea: "",
          school: "",
          branch: "",
        },
      ],
      tableData1: [
        {
          id: "1",
          name: "王小虎",
          ID: "511623333333333333",
          nation: "四川",
          phone: "123462390",
          emploment: "学生",
          school: "成都东软学院",
        },
      ],
      drawer: false,
      rules: {
        casename: [
          { required: true, message: "请输入案例名称", trigger: "blur" },
        ],
        subadress: [
          { required: true, message: "请输入报送单位", trigger: "blur" },
        ],
        userunit: [
          { required: true, message: "请输入负责人单位", trigger: "blur" },
        ],
        
        username: [{ required: true, message: "请输入负责人姓名", trigger: "blur" }],
         prinduty: [{ required: true, message: "请输入负责人职务", trigger: "blur" }],
        usermodel: [
          { required: true, message: "请输入联系人手机号", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" },
        ],
         email: [
          { required: true, message: "请输入电子邮箱", trigger: "blur" },
          { validator: checkEmail, trigger: "blur" },
        ],
        casecode: [
          { required: true, message: "请输入案例代码", trigger: "blur" },
        ],
        workwidth: [
          { required: true, message: "请输入作品宽度", trigger: "blur" },
        ],
        induction: [
          { required: true, message: "请输入案例简介", trigger: "blur" },
        ],
         sort: [
          { required: true, message: "请选择类别", trigger: "blur" },
        ],
      },
    };
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.nav {
  padding: 15px 0;
  width: 97%;
  margin: 0 auto;
}

.homeContent {
  width: 97%;
  margin: 0 auto 20px;
  background-color: #fff;
  height: 95%;
  border-radius: 10px;
}

.header {
  width: 97%;
  margin: 0 auto;
  padding: 10px 0;
  min-width: 1000px;
}
.header span {
  display: block;
  margin: 10px 0;
  font-size: 20px;
  color: #784cad;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: SimHei Regular, SimHei Regular-Regular;
}

.header p {
  color: #606266;
  font-size: 17px;
  line-height: 25px;
}
.fromBady {
  width: 97%;
  min-width: 1000px;
  margin: 0 auto;
  padding: 15px 0;
}
.right {
  display: block;
  width: 50%;
  min-width: 350px;
}.right {
  display: block;
  width: 60%;
  min-width: 350px;
}
.workwidth {
  width: 300px;
}
.demo-form-inline {
  display: flex;
  width: 100%;
}
.int {
  width: 100%;

  min-width: 300px;
}
.upload-demo {
  min-width: 300px;
}
.adro {
  margin-top: 50px;
}
.addTable {
  margin-left: 50px;
}
.careful {
  margin-top: 50px;
}
.careful p {
  color: red;
  font-size: 13px;
}

.footerMiddle {
  display: flex;
  padding: 10px 0;
  font-size: 15px;
  line-height: 20px;
}

.footerMiddle span {
  color: #606266;
}

.middleWarning {
  margin-left: 50px;
}

.middleWarning a {
  color: #409eff;
  margin: 0 6px;
  cursor: pointer;
}

.footButton {
  text-align: center;
}
</style>