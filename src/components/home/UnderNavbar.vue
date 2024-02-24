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
          <img class="main_img" height="403px" width="513px" src="@/assets/images/main_img.png">
        </div>
    </div>






</template>
  

  <script>
  

  export default {
    name: "under-navbar-component",


  }
  </script>
  
  <style scoped>
  
  .main{
    width:1096px;
    margin-right: auto;
    margin-left: auto;
    
  }
  .second{
    height: 128px;
    width: 680px;
    font-family: Brains-regular, system-ui;
    font-size: 22px;
    margin-top: 39px;

  }
  .UnderNavbar{
    margin-top: 115px;
    display: flex;
    height: 502px;
    width: 1088px;
  }
  .first{
    margin-top: 39px;
    width: 558px;
    height: 296px;
    font-size: 56px;
    font-family: Brains-medium, system-ui;
    color: #FF0800;
    margin-right: 17px;
  }
  </style>