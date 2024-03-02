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
  @media screen and (min-width: 1440px) {
    .UnderNavbar{
      display: flex;
      margin-top: 115px;
      width: 1460px;
      height: 668px;
    }
    .first{
      margin-top: 39px;
      width: 620px;
      height: 296px;
      font-size: 65px;
      margin-right: 17px;
    }
    img{
      height:538px;
      width:683px;
    }
    .second{
      height: 128px;
      width: 680px;
      font-family: Brains-regular, system-ui;
      font-size: 24px;
      margin-top: 100px;

    }

  }

  @media screen and (max-width: 1440px) and (min-width: 821px) {
    .UnderNavbar{
      display: flex;
      margin-top: 115px;
      width: 1088px;
      height: 502px;

    }
    .first{
      margin-top: 39px;
      width: 558px;
      height: 396px;
      font-size: 56px;
      margin-right: 22px;
    }
    img{
      height:350px;
      width:460px;
    }
    .second{
      height: 128px;
      width: 680px;
      font-size: 22px;


    }

  }

  @media screen and (max-width: 820px) {
    .UnderNavbar{
      margin-top: 28px;

      height: 250px;
    }
    .first{
      margin-top: 28px;
      width: 201px;
      height: 100px;
      font-size: 20px;
      margin-right: 10px;
    }
    img {
      height: 150px;
      width: 190px;
    }
    .second{
      width: 303px;
      font-size: 13px;
      margin-top: 22px;

    }

  }


  .second{

    font-family: Brains-regular, system-ui;


  }
  .UnderNavbar{
    //margin-top: 115px;
    display: flex;
    //height: 502px;
    //width: 1088px;
  }
  .first{
    //margin-top: 39px;
    //width: 558px;
    //height: 296px;
    //font-size: 56px;
    font-family: Brains-medium, system-ui;
    color: #FF0800;
    //margin-right: 17px;
  }

  </style>