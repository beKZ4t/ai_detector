<template>


        <div class="container">
          <div class="item ">
            <p>Leverages the latest breakthrough in AI detection research.</p>
          </div>
          <div class="item ">
            <p>Unprescedented granular view and understanding of results.</p>
          </div>
          <div class="item ">
            <p>Color-coded highlights for most AI and Human sections of writing.</p>
          </div>
          <div class="item ">
            <p>Statistical analysis for exactly how each sentence affects AI probabilities.</p>
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

  @media screen and (min-width: 1440px) {
    .container{
      height: 345px;
      margin-top: 48px;
    }
    .item {
      font-size: 25px;
      width: 715px;
      height: 150px;
      border-radius: 10px;
    }
    .item p {
      margin-top: 32px;
      margin-left: 24.78px;
      height: 85px;
      width: 626.68px;
    }
  }

  @media screen and (max-width: 1440px) and (min-width: 821px) {
    .container{
      height: 333px;
      margin-top: 44px;
    }
    .item {
      width: 518px;
      height: 150px;
      font-size: 22px;
      border-radius: 10px;
    }
    .item p {

      margin-top: 34px;
      margin-left: 26.78px;
      height: 82px;
      width: 461.68px;
    }

  }
  @media screen and (max-width: 820px) {
    .container{
      height: 170px;
      margin-top: 5px;
    }
    .item {
      width: 305px;
      height: 64px;
      font-size: 10px;
      border-radius: 5px;
    }
    .item p {
      margin-left: 5px;
      height: 65px;
      width: 280px;
    }

  }


  .container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

  }
  .item {
    border: 1px solid #00000070;
    box-shadow: 1px #00000050 ;
    font-family: Brains-regular, system-ui;
    transition: 0.8s;
  }
  .item:hover{
    color: #FFFFFF;
    background-color: #E52D27;
    border: none;
  }

  .item p{

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
  
 
  </style>