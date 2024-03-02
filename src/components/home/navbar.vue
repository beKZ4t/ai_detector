<template>
   
        <div class="navbar">
            <div @click="this.$router.push('/')"><img class="logo_img" src="@/assets/images/logo.png"> </div>
            <div class="navbar_right">

                <div @click="this.$router.push('/login')" class="right_side">
                  <img class="ims_icon" src="@/assets/images/icon.png">
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
  @media screen and (min-width: 1440px) {
    .navbar {
      margin: 0 auto;
      width: 1468px;
    }
    .logo_img {
      height: 120px;
      width: 102px;
    }
    .right_side p {
      font-size: 22px;
      margin-left: 13px;
    }
    .right_side {
      width: 190px;
      height: 55px;
      border-radius: 10px;

    }
    .ims_icon{
      width:18px;
    }
  }

  @media screen and (max-width: 1440px) and (min-width: 821px) {
    .navbar {
      margin: 0 auto;
      width: 1096px;
    }
    .logo_img {
      height: 80px;
      width: 68px;

    }
    .right_side {
      width: 170px;
      height: 53px;
      border-radius: 10px;

    }
    .right_side p {
      font-size: 18px;
      margin-left: 13px;
    }
    .ims_icon{
      width:16px;
    }
    .navbar {
      margin-top: 9px;
      height: 80px;

    }
  }

  @media screen and (max-width: 820px) {
    .navbar {
      margin: 0 auto;
      width: 550px;
    }
    .logo_img {
      height: 40px;
      width: 34px;

    }
    .right_side {
      width: 110px;
      height: 33px;
      border-radius: 7px;
    }
    .navbar {
      margin-top: 9px;
      height: 45px;
    }
    .right_side p {
      font-size: 11px;
      margin-left: 13px;
    }
    .ims_icon{
      width:11px;
    }
  }

  h1 {
    color: black;
  }

  .right_side {
    background-color: #E52D27;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 1ms ease-out 100ms;
    margin-left: auto; /* Переместите `.right_side` вправо */

  }

  .right_side p {
    color: white;
    font-family: Brains-bold, system-ui;
  }

  .navbar {
    display: flex;
    justify-content: space-between;

  }

  .navbar_right {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo_img {
    cursor: pointer;
  }


  </style>