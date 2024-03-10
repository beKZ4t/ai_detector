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
.duo_text{
  width: 90%;
  margin:0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 166px;
}
.first_text{
  font-size: 40px;
  font-family: Brains-bold, system-ui;
}
.second_text{
  font-family: Brains-bold, system-ui;
  font-size: 16px;
}

@media screen and (max-width: 1200px) {

  .first_text{
    font-size: 30px;

  }
  .second_text{

    font-size: 15px;
  }


}
@media screen and (max-width: 880px) {

  .first_text{
    font-size: 25px;
  }
  .second_text{
    font-size: 14px;
  }
  .duo_text{
   margin-top: 30px;
    margin-bottom: 30px;
  }


}



 
  </style>