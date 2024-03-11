<template>
    <div class="container">
      <div class="line-container">
        <div class="item left">
          <p>Leverages the latest breakthrough in AI detection research.</p>
        </div>
        <div class="item right">
          <p>Unprescedented granular view and understanding of results.</p>
        </div>
      </div>
      <div class="line-container">
        <div class="item left">
          <p>Color-coded highlights for most AI and Human sections of writing.</p>
        </div>
        <div class="item right">
          <p>Statistical analysis for exactly how each sentence affects AI probabilities.</p>
        </div>
      </div>
    </div>
    <div class="end_text">© 2023-2024</div>
</template>
  

  <script>

  export default {
    name: "ContainerComponent",
  

  }
  </script>
  
  <style scoped>
  .container{
    width: 90%;
    margin: 0 auto;
    margin-top: 43px;
    align-content: space-around;
  }
  .left {
    margin-right: 13px;
  }
  .right {
    margin-left: 13px;
  }
  .line-container {
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
  }
  .item {
    flex: 1;
    border: 1px solid rgba(0, 0, 0, 0.7);
    box-shadow: 1px rgba(0, 0, 0, 0.5);
    font-family: Brains-regular, system-ui;
    transition: 0.8s;
    padding: 34px 30px 34px 27px;
    border-radius: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .item:hover{
    color: #FFFFFF;
    background-color: #E52D27;
    border: none;
  }

  .item p{
    font-size: 22px;
    font-family: Brains-regular, system-ui;
    color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
  }

  .end_text{
    margin-top: 83px;
    margin-bottom: 39px;
    font-family: Inter-regular, system-ui;
    font-size: 18px;
    justify-content: center;
    display: flex;

  }


  @media screen and (max-width: 1200px) {
    .container{
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }
    .item p{
      font-size: 18px;
    }
    .item {
      padding: 34px 30px 34px 27px;

    }

}



  @media screen and (max-width: 880px) {
    .line-container {
      margin-bottom: 18px;
    }
    .left {
      margin-right: 6px;
    }
    .right {
      margin-left: 6px;
    }
    .item p{
      font-size: 14px;
    }
    .item{
      padding: 10px 10px 10px 10px;
    }
    .container{

    }



  }



  </style>