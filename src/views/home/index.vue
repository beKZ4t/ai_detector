<template>
    <div class="main" v-if="!isLoading">
        <navbar-user-component v-if="isLogin"></navbar-user-component>
        <navbar-component v-else-if="isLogin === false" ></navbar-component>
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
  import NavbarUserComponent from "@/components/homeuser/navbaruser.vue";
  
  


  export default {
    name: "index",
    components: {
      NavbarUserComponent,
      NavbarComponent,UnderNavbarComponent,SoloTextComponent, DiscoverComponent, DeepanalysisComponent, DuoTextComponent, ContainerComponent 
    },
    data() {
      return {
        isLogin: false,
        isLoading: true
      }
    },
    mounted() {
      window.scrollTo(0, 0);
      this.checkLogin();
    },
    methods: {
      checkLogin() {
        var token = localStorage.getItem("auth-token");
        this.isLogin = token != null;
        this.isLoading = false;
      }
    }
  }
</script>
  
<style scoped>
.main {
  max-width: 90%;
  margin: 0 auto;
}


 
  
 
  </style>