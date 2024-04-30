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
    <table>
      <tr>
        <th></th>
        <th style="text-align: start">Time</th>
        <th>Plagiarism</th>
        <th>AI</th>
        <th>Human</th>
        <th>Content</th>
        <th></th>
      </tr>
      <tr>
        <td><div class="number-container"><p>1</p></div></td>
        <td><p class="date-text" style="text-align: start">24.02.2024, 19:37</p></td>
        <td><percent-component :percent="100"/></td>
        <td><percent-component :percent="75"/></td>
        <td><percent-component :percent="75"/></td>
        <td><p class="download-button">Download</p></td>
        <td><div class="open-button"><p>Open</p><img src="@/assets/images/red_left.png"></div></td>
      </tr><tr>
        <td><div class="number-container"><p>2</p></div></td>
        <td><p class="date-text" style="text-align: start">24.02.2024, 19:37</p></td>
        <td><percent-component :percent="75"/></td>
        <td><percent-component :percent="50"/></td>
        <td><percent-component :percent="75"/></td>
        <td><p class="download-button">Download</p></td>
        <td><div class="open-button"><p>Open</p><img src="@/assets/images/red_left.png"></div></td>
      </tr><tr>
        <td><div class="number-container"><p>3</p></div></td>
        <td><p class="date-text" style="text-align: start">24.02.2024, 19:37</p></td>
        <td><percent-component :percent="40"/></td>
        <td><percent-component :percent="75"/></td>
        <td><percent-component :percent="39"/></td>
        <td><p class="download-button">Download</p></td>
        <td><div class="open-button"><p>Open</p><img src="@/assets/images/red_left.png"></div></td>
      </tr>
    </table>
    <div class="end_text">© 2023-2024</div>
  </div>






</template>

<script>
import NavbardetecComponent from "@/components/detector/navbardetec.vue";
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import PercentComponent from "@/components/history/percent_circle.vue";

export default {
  name: "index",
  components: {
    PercentComponent,
    NavbardetecComponent, CircleProgress

  },
  mounted() {
    window.scrollTo(0, 0);
  }

}
</script>

<style scoped>
.main{
  max-width: 90%;
  margin-right: auto;
  margin-left: auto;

}
.download-button {
  font-size: 22px;
  font-family: Brains-regular, system-ui;
  color: #E52D27;
  text-decoration: underline;
  cursor: pointer;
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
  margin-top: 200px;
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
.number-container {
  width: 40px;
  height: 40px;
  text-align: center;
  display: grid;
  align-items: center;
  background: #E52D27;
  color: white;
  font-size: 18px;
  margin-right: 13px;
  font-family: Brains-bold, system-ui;
  border-radius: 8px;
}
table {
  margin-top: 50px;
  width: 100%;
}
th {
  text-align: center;
  font-size: 22px;
  color: black;
  font-family: Brains-bold, system-ui;
}
td {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}
.date-text {
  color: black;
  font-size: 22px;
  font-family: Brains-regular, system-ui;
}
.open-button {
  cursor: pointer;
}
.open-button>* {
  display: inline-block;
  vertical-align: middle;
}
.open-button>p {
  font-size: 22px;
  color: #E52D27;
  font-family: Brains-bold, system-ui;
}
.open-button>img {
  height: 20px;
  margin-left: 10px;
}
@media screen and (max-width: 880px) {
  .main_page {
    display: block;
  }
  .first{
    font-size: 25px;
    height: 60px;

  }
  .second{
    font-size: 18px;
    height: 40px;
  }
  .main_page{
    margin-top: 25px;
  }
  th{
    font-size: 18px;
  }
  .date-text{
    font-size: 18px;
  }
  .open-button>p {
    font-size: 18px;
  }
  .download-button{
    font-size: 18px;
  }

}

</style>