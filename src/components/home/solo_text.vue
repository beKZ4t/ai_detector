<template>


        <div class="solo_text">WITH MILLIONS OF USERS</div>







</template>
  

  <script>
 
  export default {
    name: "solo-text-component",
   

  }
  </script>
  
  <style scoped>
  .solo_text{
    width: 95%;
    font-size: 16px;
    font-family: Brains-medium, system-ui;
    display: flex;
    justify-content: end;
    margin-top: 134px;
  }

  @media screen and (max-width: 1200px) {
  .solo_text{
    font-size: 14px;
    margin-top: 100px;
  }



  }
  @media screen and (max-width: 880px) {
    .solo_text{
      font-size: 14px;
      margin-top: 40px;
    }


  }
 
  </style>