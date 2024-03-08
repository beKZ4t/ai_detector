<template>
    <div class="main">
        <div class="UnderNavbar">
          <div class="under_left">
            <div class="first">
              More than an AI detector Preserve what's human.
            </div>
            <div class="second">
              We bring transparency to humans navigating a world filled with AI content. CheckGPT is the gold standard in AI detection, trained to detect ChatGPT, GPT4.
            </div>
          </div>
          <img class="main_img" src="@/assets/images/main_img.png">
        </div>
    </div>






</template>
  

  <script>
  

  export default {
    name: "under-navbar-component",


  }
  </script>
  
  <style scoped>
  .under_left{
    width: 80%;
  }
  .main{
    width: 80%;
    display: flex;
    align-items: center;
  }
  .first{
    color: #FF0800;
    font-family: "Brains-medium",system-ui;
    font-size: 56px;
    width: 62%;
    margin-top: 115px;

  }
  .second{
    color: rgba(0, 0, 0, 0.7);
    font-size: 22px;
    font-family: "Brains-regular", system-ui;
    width: 77%;
    line-height: 35px;
    margin-top: 39px;
  }
  .UnderNavbar{
    display: flex;
    align-items: center;
    padding: 0 5%;

  }
  .main_img{
    max-width: 513px;
    margin-top: 89px;

  }


  @media screen and (max-width: 1200px) {
    .first{
      font-size: 35px;
      margin-top: 70px;
      width: 56%;
    }
    .main_img{
      max-width: 350px;
      margin-top: 50px;

    }
    .second{

      font-size: 17px;
      font-family: "Brains-regular", system-ui;
      width: 75%;
      margin-top: 20px;
      line-height: normal;
    }



  }
  @media screen and (max-width: 880px) {
    .first[data-v-b7941cbe] {
      font-size: 20px;
      margin-top: 50px;
    }
    .main_img{
      max-width: 200px;
      margin-top: 50px;

    }
    .second{
      font-size: 14px;
      font-family: "Brains-regular", system-ui;
      width: 68%;
      margin-top: 20px;
      line-height: normal;
    }


  }

  </style>