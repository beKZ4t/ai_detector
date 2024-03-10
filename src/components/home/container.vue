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
  .container{
    display: grid;
    gap: 10px;
    margin: 0 auto;
    margin-top: 43px;
    height: 333px;
    align-content: space-around;

  }
  .item {
    border: 1px solid #00000070;
    box-shadow: 1px #00000050 ;
    font-family: Brains-regular, system-ui;
    transition: 0.8s;
    padding: 34px 30px 34px 27px;
    border-radius: 10px;
    width: 518px;
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
      max-width: 90%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }
    .item p{
      font-size: 18px;
    }
    .item{
      width: 426px;
      padding: 34px 30px 34px 27px;

    }

    }



  @media screen and (max-width: 880px) {
    .item p{
      font-size: 14px;
    }
    .item{
      width: 212px;
      padding: 10px 10px 10px 10px;

    }
    .container{

    }



  }



  </style>