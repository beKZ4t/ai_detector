<template>


        <div class="navbaruser">
            <div @click="this.$router.push('/homeuser')"><img class="logo_img" src="@/assets/images/logo.png"> </div>
            <div class="right">
                <div class="items">
                  <div class="item" @click="this.$router.push('/history')" :style="{ borderBottom: $route.path === '/history' ? '2px solid #E52D27' : '' }"> History</div>

                  <div class="item" @click="this.$router.push('/detector')" :style="{ borderBottom: $route.path === '/detector' ? '2px solid #E52D27' : '' }"> Detector</div>

                  <div class="item" @click="this.$router.push('/profile')" :style="{ borderBottom: $route.path === '/profile' ? '2px solid #E52D27' : '' }">Profile</div>

                    <button type="button">Get PRO</button>

                </div>


            </div>

        </div>


</template>

<script>


export default {
    name: "NavbarUserComponent",
}
</script>

<style scoped>

.navbaruser{
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;


}
button{
    width: 170px;
    height: 53px;
    background-color: #E52D27;
    border-radius: 10px;
    font-size: 18px;
    font-family: Brains-bold, system-ui;
    color: white;
    border: 0px;
    cursor: pointer;
}

.logo_img{
    height:80px;
    width:68px;
    cursor: pointer;
}
.items{
    display: flex;
    align-items: center;

}
.item{
    margin-right: 48px;
    font-size: 22px;
    font-family: Brains-bold, system-ui;
    color: #E52D27;
    cursor: pointer;
}

</style>