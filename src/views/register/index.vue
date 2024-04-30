<template>
    <div class="main">
      <div @click="this.$router.push('/')"><img class="logo_img" src="@/assets/images/logo.png"> </div>
      <div class="login">
        <div class="header_login">
          <div class="first">Registration</div>
          <div class="second">Fill in all fields to register</div>
          <div class="user_name">Username <div class="red">*</div></div>
          <div class="input-container">
            <img class="input-icon" src="@/assets/images/password.png">
            <input type="text" placeholder="Username" v-model="username">
          </div>
          <div class="email">E-mail <div class="red">*</div></div>
          <div class="input-container">
            <img class="input-icon" src="@/assets/images/email.png">
            <input type="email" placeholder="E-mail" v-model="email">
          </div>
          <div class="password">Password <div class="red">*</div> </div>
          <div class="input-container">
            <img class="input-icon" src="@/assets/images/password.png">
            <input type="password" placeholder="Password" v-model="password">
          </div>
          <button type="button" @click="register">Register</button>
          <div class="create">Already have an account? <div @click="this.$router.push('/login')" class="red_create">Login</div></div>
          <div class="end_text">© 2023-2024</div>
        </div> 
      </div>
    </div>
  </template>
  
  <script>
  import api from "@/service/api.js";

  export default {
    name: "Registration",
    data() {
      return {
        username: "",
        email: "",
        password: ""
      };
    },
    mounted() {
      window.scrollTo(0, 0);
    },
    methods: {
      register() {
        api.auth.register({
          data: {
            username: this.username,
            email: this.email,
            password: this.password
          }
        })
            .then((response) => {
              localStorage.setItem("auth_token", response.data.token);
              this.$router.push('/');
            })
            .catch(() => {
              alert("Registration failed. Please try again.");
              this.password = "";
              this.email="";
            });
      }
    }
  };



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
      max-width: 90%;
      margin: 0 auto;
      
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
  .input-container {
    padding: 9px 19px;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    margin-bottom: 14px;
  }

  .input-icon {
    display: inline-block;
    vertical-align: middle;
    width: 24px;
  }

  input {
    padding-top: 9px;
    padding-bottom: 9px;
    margin-left: 15px;
    display: inline-block;
    vertical-align: middle;
    background: white;
    border: none;
    outline: none;
    font-size: 16px;
    font-family: Brains-regular, system-ui;
    color: black;
  }
  input:focus {
    border: none;
    outline: none;
  }
  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
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