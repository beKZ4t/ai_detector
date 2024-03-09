<template>
<div class="main">


  <navbar-user-component></navbar-user-component>
  <div class="block"></div>


        <img src="@/assets/images/ava.png"




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
  .main{
    width: 90%;
    margin: 0 auto;
  }
  .block{
    margin-top: 70px;
    max-width:30% ;
    height: 560px;
    background-color: #E52D27;
    margin: 50px auto;
  }
  .in_block{

  }

      </style>