<template>
    <div class="main">
      <div @click="this.$router.push('/')"><img class="logo_img" src="@/assets/images/logo.png"> </div>
      <div class="login">
        <div class="header_login">
          <div class="first">Registration</div>
          <div class="second">Fill in all fields to register</div>
          <div class="user_name">Username <div class="red">*</div></div>
          <input class="user_input" type="text" placeholder="Username">
          <div class="email">E-mail <div class="red">*</div></div>
          <input class="email_input" type="email" placeholder="E-mail">
          <div class="password">Password <div class="red">*</div> </div>
          <input class="password_input" type="password" placeholder="Password">
          <button type="button" @click="this.$router.push('/homeuser')">Login</button>
          <div class="create">Already have an account? <div @click="this.$router.push('/login')" class="red_create">Login</div></div>
          <div class="end_text">© 2023-2024</div>
        </div> 
      </div>
    </div>
  </template>
  
  <script>
  
  
  export default {
    name: "index",
  }
  </script>
  
  <style scoped>
  h1{
    color: black;
  
  }
  .user_name{
    font-size: 16px;
    font-family: Brains-regular, system-ui;
    margin-bottom: 7px;
    display: flex ;
  }
  .user_input{
    height: 60px;
    width: 397px;
    border-radius: 10px;
    border: 1px solid #00000030;
    font-size: 16px;
    font-family: Brains-regular, system-ui;
    background: url(../../assets/images/profile.png) no-repeat;
    background-size: auto 40%;
  }
  .end_text{
    font-size: 18px;
    font-family: Brains-regular, system-ui;
    color: #1E1E1E;
    margin-top: 162px;
    display: flex;
    justify-content: center;
  }
  .main{
      width:1096px;
      margin-right: auto;
      margin-left: auto;
      
    }
    .red_create{
      color: #B7322E;
      font-family: Brains-bold, system-ui;
      margin-left: 10px;
      cursor: pointer;
    }
    .red{
      color: #E22D2D;
      margin-left: 7px;
    }
    button{
      width: 397px;
      height: 60px;
      background-color: #E52D27;
      color: #FFFFFF;
      border-radius: 10px;
      font-size: 18px;
      margin-bottom: 21px;
      border: 0px;
      margin-top: 24px;
      cursor: pointer;
    }
    .logo_img{
      height:80px;
      width:68px;
      cursor: pointer;
    }
    .login{
      width: 397px;
      height: 442px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: center;
    }
    
    .first{
      font-size: 24px;
      font-family: Brains-medium, system-ui;
      display: flex;
      justify-content: center;
      margin-top: 116px;
    }
    .second{
      font-size: 18px;
      font-family: Brains-regular, system-ui;
      margin-top: 0.83px;
      margin-bottom: 18.17px;
      display: flex;
      justify-content: center;
      color: #00000051;
    }
    .email{
      font-size: 16px;
      font-family: Brains-regular, system-ui;
      margin-bottom: 7px;
      display: flex ;
      margin-top: 17px;
  
    }
    .password{
      font-size: 16px;
      font-family: Brains-regular, system-ui;
      margin-bottom: 7px;
      display: flex;
      
    }
  
    .password_input{
      height: 60px;
      width: 397px;
      border-radius: 10px;
      border: 1px solid #00000030;
      background: url(../../assets/images/password.png) no-repeat;
      background-size: auto 40%;
      font-size: 16px;
      font-family: Brains-regular, system-ui;
   
    }
    /* .password_input::placeholder {
  
  
    } */
    .email_input{
      height: 60px;
      width: 397px;
      border-radius: 10px;
      margin-bottom: 17px;
      background: url(../../assets/images/email.png) no-repeat;
      background-size: auto 30%;
      border: 1px solid #00000030;
      font-size: 16px;
      font-family: Brains-regular, system-ui;
    }
    .create{
      display: flex;
      justify-content: center;
      font-size: 16px;
      font-family: Brains-regular, system-ui;
    }
  </style>