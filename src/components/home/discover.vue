<template>
   


        <div class="discover">
          <div class="left_discover">
            <div class="first">Discover our </div>
            <div class="second">Detection Dashboard </div>
          </div>
          <div class="right_discover">
            Our dashboard was developed specifically with educator's needs in mind. Access a premium model with highest grade fidelity and interpretability.
          </div>
        </div>
        







</template>
  

  <script>


  export default {
    name: "DiscoverComponent",
    

  }
  </script>
  
  <style scoped>
  @media screen and (min-width: 1440px) {
    .discover{
      height: 132px;
      margin-top: 45px;
    }
    .left_discover{
      font-size: 50px;
      width: 570px;
    }
    .right_discover{
      width: 710px;
      font-size: 28px;

    }
  }

  @media screen and (max-width: 1440px) and (min-width: 821px) {
    .discover{
      height: 128px;
      margin-top: 35px;

    }
    .left_discover{
      font-size: 40px;
      width: 492px;

    }
    .right_discover{
      width: 552px;
      font-size: 22px;

    }
  }
  @media screen and (max-width: 820px) {
    .discover{
      height: 50px;
      margin-top: 28px;

    }
    .left_discover{
      font-size: 20px;
      width: 261px;

    }
    .right_discover{
      width: 340px;
      font-size: 13px;

    }

  }
  

  .discover{
    display: flex;
    justify-content: space-between;
  }
  .first{
    color: #000000;
    
  }
  .second{
    color: #FF0000;
  }
  .left_discover{
    font-family: Brains-medium, system-ui;

  }
  .right_discover{
    color: #00000070;
    font-family: Brains-regular, system-ui;

  }
  
 
  </style>