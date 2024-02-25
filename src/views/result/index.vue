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
      <div class="procents">
        <div class="first_procent">
          <div class="text_procent_first">75%</div>
          <circle-progress :percent="75"
                           empty-color='FFFFFF'
                           fill-color="rgba(229,45,39,0.6)"
                           size="150"
          />

          <div style="font-size: 22px; margin-top: 26px">Anti-plagiarism</div>
        </div>

        <div class="second_percent"><div class="text_procent_second">75%</div>  <circle-progress :percent="75"
                                               empty-color='FFFFFF'
                                               fill-color="rgba(229,45,39,0.6)"
                                               size="200"
        />
        <div style="font-size: 22px" class="under_percent">AI</div>
        </div>

        <div class="third_percent"><div class="text_procent_third">25%</div> <circle-progress :percent="25"
                                             empty-color='FFFFFF'
                                             fill-color="rgba(229,45,39,0.6)"
                                             size="150"
        />
          <div style="font-size: 22px">Human</div>
        </div>


      </div>
      <div class="under">
        <div class="left">
          <button type="button" @click="this.$router.go(-1)"><img class="img_right" height="15px" src="@/assets/images/left.png">Back</button>
        </div>
        <div class="right">
          <span class="under_red"> PRO </span> <span class="second_span"> Download without plagiarism
          <img class="last_icon" src="@/assets/images/password.png"></span>
        </div>
      </div>


      <div class="end_text">© 2023-2024</div>
    </div>
</template>

<script>
import NavbardetecComponent from "@/components/detector/navbardetec.vue";
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
export default {
    name: "index",
    components: {
        NavbardetecComponent, CircleProgress
    
    }
}
</script>

<style scoped>

.right{
  font-size: 18px;
  font-family: Brains-bold, system-ui;
  color: #00000050;




}
.second_span{
  border-bottom: 2px solid #00000050;
}

.under_red{
  color: #E52D27;

}
button{
  width: 170px;
  height: 53px;
  background-color: #E52D27;
  border-radius: 10px;
  border: 0px;
  color: white;
  font-size: 18px;
  font-family: Brains-bold, system-ui;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.img_right {
  margin-right: 10px;
}
.under{
  display: flex;
  width: 1048.45px;
  height: 53px;
  justify-content: space-between;
  margin-top: 65px;
  align-items: center;
}
.under_percent{
  margin: 0 auto;
}
.last_icon{
  height: 21.45px;
  margin-left: px;
}

.first_procent{
  height: 239px;
  width: 208px;

}
.text_procent_second{
  color: #E52D27;
}
.text_procent_third{
  color: #E52D27;
}
.text_procent_first{
  color: #E52D27;
}



.second_percent{
  height: 256px;
  width: 222px;
}
.third_percent{
  height: 239px;
  width: 208px;
}
.under_percent{
  font-size: 22px;
}
.first_procent,
.second_percent,
.third_percent {
  font-size: 30px;
  font-family: Brains-bold, system-ui;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.procents{
  display: flex;
  width: 858px;
  height: 256px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #000000;
  margin: 0 auto;
  margin-top: 82px;

}
.main{
    width: 1074px;
    margin-right: auto;
    margin-left: auto;
    
}
.end_text{
  font-size: 18px;
  font-family: Brains-regular, system-ui;
  color: #1E1E1E;
  margin-top: 69px;
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