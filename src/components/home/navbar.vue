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
.navbar{
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
}
.logo_img{
  max-width: 68px;
}
.right_side{
  width: 94px;
  height: 24px;
  padding: 16px 38px;
  background-color: #E52D27;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #FFFFFF;
  font-size: 18px;
  font-family: Brains-bold, system-ui;
  border-radius: 10px;
}
.ims_icon{
  height: 16px;

}


  @media screen and (max-width: 1200px) {




  }
  @media screen and (max-width: 880px) {
  .right_side{
    padding: 13px 18px;
    font-size: 14px;
    width: 73px;
  }
   .ims_icon{
     height: 14px;

      }


  }

  </style>