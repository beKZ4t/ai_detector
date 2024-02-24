<template>
    <div class="main">
        <navbardetec-component></navbardetec-component>
        <div class="main_page">
            <div class="first">
                Results of our <span class="red">inspection</span>
            </div>
            <div class="second">
                Please note, these are just the results of testing using our algorithms and analyzes
            </div>
        </div>
        <div class="end_text">© 2023-2024</div>
    


    </div>
</template>

<script>
import NavbardetecComponent from "@/components/detector/navbardetec.vue";

export default {
    name: "index",
    components: {
        NavbardetecComponent
    
    }
}
</script>

<style scoped>


.main{
    width: 1074px;
    margin-right: auto;
    margin-left: auto;
    
}
.end_text{
  font-size: 18px;
  font-family: Brains-regular, system-ui;
  color: #1E1E1E;
  margin-top: 560px;
  display: flex;
  justify-content: center; 
}
.main_page{
    height: 106px;
    width: 936px;
    display: flex;
    margin-top: 64px;
}
.first{
    font-size: 40px;
    font-family: Brains-medium, system-ui;
    width: 537px;
}
.second{
    font-size: 22px;
    font-family: Brains-regular, system-ui;
    color: #00000070;
    width: 421px;
    height: 96px;
}
.red{
    color: #E52D27;
}

</style>