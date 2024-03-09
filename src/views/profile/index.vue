<template>
<div class="main">


  <navbar-user-component></navbar-user-component>
  <div class="block">

    <div class="in_block">
         <img class="ava_image" src="@/assets/images/ava.png">
           <div class="text_in_block">
          <p>Justin Hafizdzaki </p>
          <span>hafizdzaki@gmail.com</span>
          </div>
  </div>
    <div class="under_block">
      <div class="item">
        <img src="@/assets/images/user%207.png" class="image_1">
        <p>Personal Data</p>
        <div class="space"></div>
        <img src="@/assets/images/right%20arrow%205.png" class="right_arrow">
      </div>
      <div @click="this.$router.push('/payments')" class="item">
        <img src="@/assets/images/payment.png" class="image_1">
        <p>Payments</p>
        <div class="space"></div>
        <img src="@/assets/images/right%20arrow%205.png" class="right_arrow">
      </div>
      <div class="item">
        <img src="@/assets/images/product%20review%201.png" class="image_1">
        <p>Reviews</p>
        <div class="space"></div>
        <img src="@/assets/images/right%20arrow%205.png" class="right_arrow">
      </div>
      <div class="item">
        <img src="@/assets/images/setting%202.png" class="image_1">
        <p>Settings</p>
        <div class="space"></div>
        <img src="@/assets/images/right%20arrow%205.png" class="right_arrow">
      </div>
    </div>
</div>
  <p class="end_text">© 2023-2024</p>
</div>
      </template>
      
      <script>
    
      
      import NavbarUserComponent from "@/components/homeuser/navbaruser.vue";

      export default {
        name: "index",
        components: {NavbarUserComponent},
      mounted() {
        window.scrollTo(0, 0);
      }
      }

      </script>
      
      <style scoped>
      .end_text{
        margin-top: 131px;
        text-align: center;
        font-family: Inter-regular, system-ui;
        font-size: 22px;
      }
      .under_block{
        margin-top: 40px;

      }
      .space{
        flex: auto;
      }
  .main{
    width: 90%;
    margin: 0 auto;
  }
  .right_arrow{
    height: 10px;
    margin: 8px 10px;

  }

  .block{
    max-width: 450px;
    margin: 0 auto;
    height: 559px;

  }
  .item{
    display: flex;
    align-items: center;
    width: 90%;
    height: 42px;
    margin: 0 auto;
    margin-bottom: 24px;
    cursor: pointer;
  }
  .item p{
    color: black;
    font-size: 18px;
    font-family: Brains-regular,system-ui;
    margin-left: 16px;
  }
  .image_1{
    padding: 11px;
    background-color: #E52D27;
    height: 30px;
    border-radius: 16px;
  }
  .ava_image{
    height: 120px;
    margin-top: 70px;
  }
.in_block{
  background-color: #E52D27;
  text-align: center;
  height: 280px;
  border-radius: 50px;

}
.text_in_block p{
 color: white;
  font-size: 16px;
  font-family: Brains-medium, system-ui;
}
span{
  color: white;
  margin-top: 8px;
  font-size: 14px;
  font-family: Brains-regular,system-ui;
}
      </style>