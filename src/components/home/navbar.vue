<template>
   
        <div class="navbar">
            <div @click="this.$router.push('/')"><img class="logo_img" src="@/assets/images/logo.png"> </div>
            <div class="navbar_right">
                <!-- <p class="left_side">Home</p> -->
                <div @click="this.$router.push('/login')" class="right_side">
                  <img width="16px" src="@/assets/images/icon.png">
                  <p>Log in</p>

                </div>
            </div>
        </div>



    <!-- <div @click="this.$router.push('/login')">Hello World!</div> -->


</template>
  

  <script>

  
  export default {
    name: "navbar-component",
  }
  </script>
  
  <style scoped>
  h1{
    color: black;
    
    

  }
  .right_side{
    background-color: #E52D27;
    width: 170px;
    height: 53px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 1ms ease-out 100ms;
    margin-left: 90px;


  }
  .right_side p{
    font-size: 18px;
    color: white;
    margin-left: 13px;
    font-family: Brains-bold, system-ui;

  }

  /* .left_side{
    color: #E52D27;
    font-size: 22px;;
    font-family: Brains-bold, system-ui;
    cursor: pointer;
    
  } */

  .navbar{
    display:flex;
    justify-content:space-between;
    margin-top:9px;
    height:80px;
    width: 1074px;
  }
  .navbar_right{
    display:flex;
    justify-content:space-between;
    align-items: center;
    width: 291px;
    
  }
  .logo_img{
    height:80px;
    width:68px;
    cursor: pointer;
  }

  </style>