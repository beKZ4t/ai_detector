<template>
    <div class="main">

        <navbar-user-component></navbar-user-component>
        <under-navbar-component></under-navbar-component>
        <solo-text-component></solo-text-component>
        <discover-component></discover-component>
        <deepanalysis-component></deepanalysis-component>
        <duo-text-component></duo-text-component>
        <container-component></container-component>
        


    </div>




</template>
  

  <script>
  import UnderNavbarComponent from "@/components/home/UnderNavbar.vue";
  import SoloTextComponent from "@/components/home/solo_text.vue";
  import DiscoverComponent from "@/components/home/discover.vue";
  import DeepanalysisComponent from "@/components/home/deepanalysis.vue";
  import DuoTextComponent from "@/components/home/duo_text.vue";
  import ContainerComponent from "@/components/home/container.vue";
  import NavbarUserComponent from "@/components/homeuser/navbaruser.vue";
  
  


  export default {
    name: "index",
    components: {
      UnderNavbarComponent,SoloTextComponent, DiscoverComponent, DeepanalysisComponent, DuoTextComponent, ContainerComponent , NavbarUserComponent
    },
  mounted() {
    window.scrollTo(0, 0);
  }

  }
  </script>
  
  <style scoped>
  
  .main{
    width:1074px;
    margin-right: auto;
    margin-left: auto;
    
  }
 
 
 
  </style>