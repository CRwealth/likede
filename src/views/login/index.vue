<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="formRules" class="login-form" auto-complete="on" label-position="left">
      <!-- logo -->
      <div class="title-container">
        <img src="@/assets/bg/lkd_logo.png" alt="">
      </div>
      <!-- /logo -->
      <!-- 账号框 -->
      <el-form-item prop="loginName">
        <span class="svg-container el-icon-mobile" />
        <el-input v-model="loginForm.loginName" placeholder="请输入账号" />
      </el-form-item>

      <!-- 密码框 -->
      <el-form-item prop="password">
        <span class="svg-container el-icon-lock" />
        <el-input ref="password" v-model="loginForm.password" :type="passwordType" placeholder="请输入密码" />
        <span class="svg-container">
          <svg-icon :icon-class="`${passwordType==='password' ? 'eye' : 'eye-open'}`" @click="showPwd" />
        </span>
      </el-form-item>

      <!-- 验证码 -->
      <el-form-item prop="code">
        <el-row type="flex">
          <el-col :span="2">
            <span class="svg-container">
              <svg-icon icon-class="shield" class="code" />
            </span>
          </el-col>
          <el-col :span="15">
            <el-input v-model="loginForm.code" style="height:'50px'" placeholder="请输入验证码" />
          </el-col>
          <el-col :span="7">
            <img :src="src" alt="" @click="changeSrc">
          </el-col>
        </el-row>
      </el-form-item>

      <!-- 提交按钮 -->
      <el-button :loading="loading" class="btn" style="width:100%;margin-bottom:30px;" @click="loginBtn">登录</el-button>

      <!-- <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: any</span>
      </div> -->

    </el-form>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import { getcode } from '@/api/user'
export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (validUsername(value)) {
        callback()
      } else {
        callback(new Error('账号格式不正确'))
      }
    }
    return {
      getcode,
      loginForm: {
        loginName: 'admin',
        password: 'admin',
        code: '',
        clientToken: ''
      },
      src: '',
      passwordType: 'password',
      loading: false,
      formRules: {
        loginName: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 16, message: '密码的长度在5-16位之间 ', trigger: 'blur' }
        ],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
    }
  },
  // 刚进入页面就要先获得验证码
  mounted() {
    this.changeSrc()
  },
  methods: {
    // 修改密码框的type
    showPwd() {
      this.passwordType === 'password' ? this.passwordType = '' : this.passwordType = 'password'
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    // 登录
    async loginBtn() {
      try {
        await this.$refs.loginForm.validate()
        this.loading = true
        console.log(this.$store)
        // 在vuex中调用接口保存token值
        await this.$store.dispatch('user/login', this.loginForm)
        this.$router.push('/')
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
    // 点击刷新验证码
    changeSrc() {
      const num = Math.random() * 100
      this.src = this.getcode(num)
      // console.log(this.src)
      this.loginForm.clientToken = num
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#999;
$cursor: #999;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
   .el-form-item {
    // input框样式
     background-color:#fff;
     font-size: 20px;
     border: 1px solid #e2e2e2;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
$bgi:url('~@/assets/bg/logobg.png');

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  background-image: $bgi;
  background-size: cover;

  .login-form {
    position: relative;
    width: 520px;
    height: 388px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 194px auto;
    // overflow: hidden;
    background: #fff;
    padding: 76px 35px 0;
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: absolute;
    width: 96px;
    height: 96px;
    top: -46px;
    left: 50%;
    margin-left: -48px;
    img {
      width: 100%;
    }

    // .title {
    //   // font-size: 26px;
    //   // color: $light_gray;
    //   // margin: 0px auto 40px auto;
    //   // text-align: center;
    //   // font-weight: bold;

    // }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  // 提交按钮
  .btn {
    &.el-button {
    width: 100%;
    height: 52px;
    background: linear-gradient(262deg,#2e50e1,#6878f0) !important;
    opacity: .91;
    border-radius: 8px;
    color: #fff;
    text-shadow: 0 7px 22px #cfcfcf;
  }
  }
  .code {
    font-size: 20px;
    color: #999 ;
  }
  .el-col-7{
    height: 50px;
  }
}
</style>
