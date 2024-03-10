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
 .discover{
   max-width: 90%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 0 auto;
   margin-top: 39px;
 }
 .second{
   color: #FF0000;
 }
 .left_discover{
   font-size: 40px;
   color: black;
   font-family: Brains-bold, system-ui;
   width: 69%;
 }
 .right_discover{
   font-family: Brains-regular, system-ui;
   font-size: 22px;
   color: rgba(0, 0, 0, 0.7);
   width: 49%;
 }
 @media screen and (max-width: 1200px) {




 }
 @media screen and (max-width: 880px) {
   .right_discover{
     font-size: 14px;
     width: 50%;
   }
   .left_discover{
     font-size: 20px;
     width: 50%;
   }


 }
  
 
  </style>