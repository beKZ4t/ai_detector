<template>
  <div class="main">
    <navbardetec-component></navbardetec-component>
    <div class="main_page">
      <div class="first">
        History of your checks using the <span class="red">detector</span>
      </div>
      <div class="second">
        All your checks are stored here, and the text that you uploaded can be downloaded as a file
      </div>

    </div>
    <div class="results_list">
      <div class="header">
        <div class="first_header">
          <div class="items">Time</div>
        </div>
        <div class="second_header">
          <div class="items">Plagiarism</div>
          <div class="items">AI</div>
          <div class="items">Human</div>
          <div class="items">Content</div>
        </div>
      </div>
      <div class="table">
        <div class="first_table">
          <div class="table_item"></div>
          <div class="table_item">24.02.2024, 19:37</div>
          <div class="table_item"> <circle-progress :percent="75"
                                                    empty-color='FFFFFF'
                                                    fill-color="rgba(229,45,39,0.6)"
                                                    size="75"
          /></div>
          <div class="table_item"> <circle-progress :percent="75"
                                                    empty-color='FFFFFF'
                                                    fill-color="rgba(229,45,39,0.6)"
                                                    size="75"
          /></div>
          <div class="table_item"> <circle-progress :percent="75"
                                                    empty-color='FFFFFF'
                                                    fill-color="rgba(229,45,39,0.6)"
                                                    size="75"
          /></div>
          <div class="table_item">Download</div>
          <div class="table_item">Open</div>
        </div>
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
.first_table{
  display: flex;
  width: 1067px;
  height: 61px;
  align-items: center;
}
.header{
  display: flex;
  width: 813px;
  height: 32px;
  font-size: 22px;
  justify-content: space-between;
  margin-top: 46px;
  margin-left: 79px;
  font-family: Brains-bold, system-ui;
  margin-bottom: 24px;
}
.second_header{
  display: flex;
  width: 512px;
  justify-content: space-between;
}
.main{
  width: 1074px;
  margin-right: auto;
  margin-left: auto;

}

.main_page{
  display: flex;
  margin-top: 89px;
  align-items: center;
}
.end_text{
  font-size: 18px;
  font-family: Brains-regular, system-ui;
  color: #1E1E1E;
  margin-top: 92px;
  display: flex;
  justify-content: center;
}
.red{
  color: #E52D27;
  font-family: Brains-bold, system-ui;

}

.first{
  width: 549px;
  height: 106px;
  font-size: 40px;
  font-family: Brains-medium, system-ui;

}
.second{
  width: 493px;
  height: 96px;
  font-size: 22px;
  font-family: Brains-regular, system-ui;
  margin-top: 29px;
  color: #00000070;
}


</style>