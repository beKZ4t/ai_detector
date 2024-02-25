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
    width:1096px;
    margin-right: auto;
    margin-left: auto;
    
  }
  .first{
    margin-top: 21px;
    margin-left: 29px;
    margin-bottom: 26px;

  }




  .second{
    font-family: Brains-regular, system-ui;
    font-size: 20px;
    height: 105px;
    width: 275px;
    margin-left: 29px;
    transition: 0.8s;
  }



  .deep-analysis{
    display: flex;
    height: 226px;
    width: 1066px;
    justify-content: space-between;
    margin-top: 91px;
  }
  .left{
    width: 335px;
    background-color: #EFEFEF;
    border-radius: 18px;
    font-family: Brains-bold, system-ui;
    font-size: 22px;
    transition: 0.8s;

  }
  .left:hover{
    color: #FF0800;
    background-color: #FFFFFF;
    border:1px solid #FF0800;

  }


 
  </style>