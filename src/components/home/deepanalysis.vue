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
  .main{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


.first{
  margin-bottom: 26px;
}
  .second{
    font-family: Brains-regular, system-ui;
    transition: 0.8s;
    font-size: 22px;
  }

  .deep-analysis{
    display: flex;
    justify-content: space-between;
    margin:0 auto;
    margin-top: 91px;
    width: 90%;
  }
  .left{
    padding: 21px 31px 45px 29px;
    background-color: #EFEFEF;
    font-family: Brains-bold, system-ui;
    transition: 0.8s;
    width: 330px;
    height: 190px;
    border-radius: 18px;
    font-size: 28px;



  }
  .left:hover{
    color: #FF0800;
    background-color: #FFFFFF;
    border:1px solid #FF0800;

  }
  @media screen and (max-width: 1200px) {
  .left{
    font-size: 22px;
    width: 270px;
    height: 150px;
    padding: 18px 25px 30px 20px;
  }
    .second{
      font-size: 18px;
    }



  }
  @media screen and (max-width: 880px) {


    .deep-analysis{
      margin: 0 auto;
      align-items: center;
      margin-top: 53px;
    }
    .left{
      margin: 10px;
      width: 135px;
      font-size: 14px;
      height: 111px;
      padding: 14px 20px 20px 15px;
    }
    .second{
      font-size: 12px;
    }
    .first{
      margin-bottom: 15px;
    }

  }


 
  </style>