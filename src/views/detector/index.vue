<template>
  <div class="main">
    <navbardetec-component></navbardetec-component>
      <div class="main_page">
          <div class="main_text">
              <div class="first">
                  Was this written by a <span  class="red_first"> human or an AI?</span >
              </div>
              <div class="second">
                  To check, you need to paste text or upload a file. And we use our algorithms and check who wrote the text, but keep in mind, these are just our analyzes, we will also check your text for anti-plagiarism.
              </div>
              <div class="third">
                  With the <span  class="red">PRO</span >  version you can download the file without plagiarism.
              </div>
          </div>
          <div class="check">
              <div class="head_check">
                  <div class="check_text">Your text <span class="red_check">*</span></div>
                  <div class="upload">File <div class="img"><img height="20px" src="@/assets/images/staple.png"> </div> </div>
              </div>
              <div class="check_container">
                  <textarea placeholder="Enter or paste your text..." v-model="text"></textarea>
              </div>
            <div style="display: flex">
              <div style="flex: auto"></div>
              <button type="button" @click="this.$router.push('/result')">Check <img height="14px" src="@/assets/images/cursor.png" ></button>
            </div>
          </div>

      </div>
      <div class="end_text">© 2023-2024</div>
    </div>
</template>

<script>
import NavbardetecComponent from "@/components/detector/navbardetec.vue";
import api from "@/service/api.js";

export default {
  name: "index",
  components: {NavbardetecComponent},
  data() {
    return {
      text: ""
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    sendToDetect() {
      api.detect.detect({
        data: {
          content: this.text
        }
      }).then((response) => {

      })
    }
  }
}
</script>

<style scoped>
.main{
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.main_page{
  display: flex;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.main_text{
  flex: 1;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  margin-top: 56px;
}
.check{
  flex: 1;
  margin-top: 140px;
}
.img{
    margin-left: 10px;
}
.end_text{
  font-size: 18px;
  font-family: Brains-regular, system-ui;
  color: #1E1E1E;
  margin-top: 92px;
  display: flex;
  justify-content: center; 
}
.head_check{
    font-size: 18px;
    font-family: Brains-regular, system-ui;
    display: flex;
    justify-content: space-between;
    height: 30px;
    margin-bottom: 16px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.upload{
    color: #E52D27;
    display: flex;
    height: 28px;
    width: 83px;
    cursor: pointer;
}
button{
    width: 170px;
    height: 53px;
    background-color: #E52D27;
    color: #FFFFFF;
    border: 0px;
    border-radius: 10px;
    font-size: 18px;
    font-family: Brains-bold, system-ui;
    margin-top: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
button img{
    margin-left: 10px;
}
textarea{
  padding-left: 26px;
  padding-top: 34px;
  width: 100%;
  height: 360px;
  border-radius: 10px;
  border: 1px solid #00000060;
  color: #00000070 ;
  font-size: 22px;
  font-family: Brains-regular, system-ui;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
textarea:focus{
  outline: 1px solid #00000060 ;
}
.red_check{
    color: #E22D2D;
}
.red_first{
    color: #E52D27;
}
.red{
    color: #E52D27;
    font-family: Brains-bold, system-ui;

}
.first{
    font-size: 40px;
    font-family: Brains-medium, system-ui;

}
.second{
    font-size: 22px;
    font-family: Brains-regular, system-ui;
    margin-top: 29px;
    color: #00000070;
}
.third{
    font-size: 22px;
    font-family: Brains-regular, system-ui;
    margin-top: 109px;
    color: #00000070;
}
@media screen and (max-width: 1200px) {
  .main_page {
    display: block;
  }
}
@media screen and (max-width: 880px) {
  .first{
    font-size: 22px;
  }
  .main_text{
    margin-top: 20px;
  }
  .second{
    font-size: 16px;
  }
  .third{
    font-size: 16px;
    margin-top: 30px;
  }
  .check{
    margin-top: 50px;
  }
  .head_check{
    font-size: 16px;
  }
  textarea{
    font-size: 18px;
  }
  button{
    font-size: 16px;
  }

}
</style>