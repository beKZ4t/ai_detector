<template>
    <div class="main">
        <navbar-component></navbar-component>
        <under-navbar-component></under-navbar-component>
        <solo-text-component></solo-text-component>
        <discover-component></discover-component>
        <deepanalysis-component></deepanalysis-component>
        <duo-text-component></duo-text-component>
        <container-component></container-component>
      


    </div>




</template>
  

  <script>
  import NavbarComponent from "@/components/home/navbar.vue";
  import UnderNavbarComponent from "@/components/home/UnderNavbar.vue";
  import SoloTextComponent from "@/components/home/solo_text.vue";
  import DiscoverComponent from "@/components/home/discover.vue";
  import DeepanalysisComponent from "@/components/home/deepanalysis.vue";
  import DuoTextComponent from "@/components/home/duo_text.vue";
  import ContainerComponent from "@/components/home/container.vue";
  
  


  export default {
    name: "index",
    components: {
      NavbarComponent,UnderNavbarComponent,SoloTextComponent, DiscoverComponent, DeepanalysisComponent, DuoTextComponent, ContainerComponent 
    },

  }
  </script>
  
  <style scoped>
  
  .main{
    width:1096px;
    margin-right: auto;
    margin-left: auto;
    
  }
 
  
 
  </style>