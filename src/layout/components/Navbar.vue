<template>
  <div class="navbar">
    <img src="@/assets/bg/header_zb.png" alt="" width="88" class="logo" style="position: relative; top: 4px;">
    <div class="right-menu">
      <div class="el-row">
        <div class="el-col el-col-5">
          <div style="height: 60px; line-height: 60px;">
            <img src="@/assets/bg/yhtx.png" alt="" style="vertical-align: middle;">
          </div>
        </div>
        <div class="el-col el-col-14">
          <div style="height: 60px; line-height: 60px;">
            <span style="vertical-align: middle;">欢迎您，admin</span>
          </div>
        </div>
        <div class="el-col el-col-5">
          <div class="el-tooltip item" aria-describedby="el-tooltip-2022" tabindex="0" style="height: 60px; line-height: 60px;">
            <span style="vertical-align: middle; cursor: pointer;">退出</span>
            <i class="el-icon-caret-bottom" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navbar{
  height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1999;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABwEAAAA8CAYAAACOysV5AAADG0lEQVR4nO3aR04DURBF0bYHhPWxFDbMLggDjIQEIjh0+O2uqn/OEt70vt3D49NhAAAA4Crub/fD3c3O2AAAAKxqb14AAIDreX59H17efDEBAABYlwgIAABwZUIgAAAAaxMBAQAANiAEAgAAsCYREAAAYCNCIAAAAGsRAQEAADYkBAIAALAGERAAAGBjQiAAAACtiYAAAAABCIEAAAC0JAICAAAEIQQCAADQiggIAAAQiBAIAABACyIgAABAMEIgAAAAS4mAAAAAAQmBAAAALCECAgAABCUEAgAAMJcICAAAEJgQCAAAwBwiIAAAQHBCIAAAAFOJgAAAAAkIgQAAAEwhAgIAACQhBAIAADCWCAgAAJCIEAgAAMAYIiAAAEAyQiAAAACXiIAAAAAJCYEAAACcIwICAAAkJQQCAABwiggIAACQmBAIAADAMSIgAABAckIgAAAAf4mAAAAABQiBAAAA/CQCAgAAFCEEAgAA8EUEBAAAKEQIBAAAYBABAQAA6hECAQAAEAEBAAAKEgIBAAD6JgICAAAUJQQCAAD0SwQEAAAoTAgEAADokwgIAABQnBAIAADQHxEQAACgA0IgAABAX0RAAACATgiBAAAA/RABAQAAOiIEAgAA9EEEBAAA6IwQCAAAUJ8ICAAA0CEhEAAAoDYREAAAoFNCIAAAQF0iIAAAQMeEQAAAgJpEQAAAgM4JgQAAAPWIgAAAAAiBAAAAxYiAAAAAfBICAQAA6hABAQAA+CYEAgAA1CACAgAA8IsQCAAAkJ8ICAAAwD9CIAAAQG4iIAAAAEcJgQAAAHmJgAAAAJwkBAIAAOQkAgIAAHCWEAgAAJCPCAgAAMBFQiAAAEAuIiAAAACjCIEAAAB5iIAAAACMJgQCAADkIAICAAAwiRAIAAAQnwgIAADAZEIgAABAbCIgAAAAswiBAAAAcYmAAAAAzCYEAgAAxCQCAgAAsIgQCAAAEI8ICAAAwGJCIAAAQCwiIAAAAE0IgQAAAHGIgAAAADQjBAIAAMQgAgIAANCUEAgAALA9ERAAAIDmhEAAAIANDcPwAWT/XbLChBneAAAAAElFTkSuQmCC);
    background-size: cover;
    background-repeat: no-repeat;
    .logo{
    margin-top: 6px;
    margin-left: 15px;
    }
    img{
      border-style: none;
    }
}
.navbar .right-menu{
  float: right;
    width: 240px;
    height: 100%;
    margin-right: 24px;
    color: #fff;
}
.el-row{
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.el-col-5{
  width: 20%;
}
[class*=el-col-]{
    float: left;
    box-sizing: border-box;
}
.el-col-14{
      width: 58.3333333333%;
}
</style>
