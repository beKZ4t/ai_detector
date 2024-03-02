<template>


        <div class="solo_text">WITH MILLIONS OF USERS</div>







</template>
  

  <script>
 
  export default {
    name: "solo-text-component",
   

  }
  </script>
  
  <style scoped>
  @media screen and (min-width: 1440px) {
    .solo_text{
      margin-top: 134px;
      font-size: 18px;

    }
  }

  @media screen and (max-width: 1440px) and (min-width: 821px) {
    .solo_text{
      margin-top: 134px;
      font-size: 16px;

    }
  }
  @media screen and (max-width: 820px) {
    .solo_text{
      margin-top: 20px;
      font-size: 11px;

    }
  }
  

  .solo_text{

    font-family: Brains-medium, system-ui;
    display: flex;
    justify-content: end;
  }
 
  </style>