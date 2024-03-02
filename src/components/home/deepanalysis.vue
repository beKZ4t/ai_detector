<template>
    <div class="main">
        <div class="deep-analysis">
          <div class="left">
            <div class="first">Deep Analysis</div>
            <div class="second">Access a deeper scan with unprescedented levels of AI text analysis.</div>
          </div>
          <div class="left">
            <div class="first">Source scanning</div>
            <div class="second">Scan documents for plagiarism and our AI copyright check.</div>
          </div>
          <div class="left">
            <div class="first">Histories</div>
            <div class="second">Easily scan dozens of files at once, organize, save, and download reports.</div>
          </div>
        </div>
        
        
    </div>






</template>
  

  <script>



  export default {
    name: "DeepanalysisComponent",
   
  }
  </script>
  
  <style scoped>
  @media screen and (min-width: 1440px) {
    .left {
      width: 457px;
      border-radius: 19px;
      font-size: 28px;
    }
    .second{
      font-size: 25px;
      height: 150px;
      width: 361px;
      margin-left: 37px;

    }
    .first{
      margin-top: 28px;
      margin-left: 35px;
      margin-bottom: 25px;
    }
    .deep-analysis{
      height: 285px;
      margin-top: 90px;
    }

  }

  @media screen and (max-width: 1440px) and (min-width: 821px) {
    .left{
      width: 335px;
      border-radius: 18px;
      font-size: 22px;

    }
    .first{
      margin-top: 21px;
      margin-left: 29px;
      margin-bottom: 26px;
    }
    .second{
      font-size: 20px;
      height: 105px;
      width: 275px;
      margin-left: 29px;

    }
    .deep-analysis{
      height: 226px;
      margin-top: 91px;
    }
  }
  @media screen and (max-width: 820px) {
    .left{
      width: 195px;
      border-radius: 11px;
      font-size: 13px;

    }
    .second{
      font-size: 12px;
      width: 158px;
      margin-left: 16px;
    }
    .first{
      margin-top: 14px;
      margin-left: 19px;
      margin-bottom: 7px;
    }
    .deep-analysis{

      height: 135px;
      margin-top: 50px;
    }
  }

  
  .main{

    margin-right: auto;
    margin-left: auto;
    
  }



  .second{
    font-family: Brains-regular, system-ui;
    transition: 0.8s;
  }

  .deep-analysis{
    display: flex;
    justify-content: space-between;
  }
  .left{
    background-color: #EFEFEF;
    font-family: Brains-bold, system-ui;
    transition: 0.8s;

  }
  .left:hover{
    color: #FF0800;
    background-color: #FFFFFF;
    border:1px solid #FF0800;

  }


 
  </style>