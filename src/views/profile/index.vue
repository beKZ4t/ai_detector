<template>
<div class="main">


  <navbar-user-component></navbar-user-component>
</div>
      </template>
      
      <script>
    
      
      import NavbarUserComponent from "@/components/homeuser/navbaruser.vue";

      export default {
        name: "index",
        components: {NavbarUserComponent},
      }
      </script>
      
      <style scoped>
  .main{
    width: 1074px;
    margin: 0 auto;
  }

      </style>