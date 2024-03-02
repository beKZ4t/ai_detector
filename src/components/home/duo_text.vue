<template>
  

        <div class="duo_text">
          <div class="first_text">Deep Analysis View</div>
          <div class="second_text">NEW AND EXCLUSIVE</div>
        </div>
        
        
  






</template>
  

  <script>

  


  export default {
    name: "DuoTextComponent",
    

  }
  </script>

  
  <style scoped>
  @media screen and (min-width: 1440px) {
    .first_text{
      font-size: 45px;
    }
    .second_text{
      font-size: 20px;

    }
    .duo_text{
      margin-top: 166px;
    }
  }

  @media screen and (max-width: 1440px) and (min-width: 821px) {
    .first_text{
      font-size: 40px;
    }
    .second_text{
      font-size: 16px;

    }
    .duo_text{
      margin-top: 166px;
    }
  }
  @media screen and (max-width: 820px) {
    .first_text{
      font-size: 18px;
    }
    .second_text{
      font-size: 10px;

    }
    .duo_text{
      margin-top: 25px;
    }

  }

  .duo_text{
    display: flex;
    justify-content: space-between;
    height: 53px;
    align-items: center;
  }
  .first_text{

    font-family: Brains-bold, system-ui;
  }
  .second_text{

    font-family: Brains-bold, system-ui;
  }

 
  </style>