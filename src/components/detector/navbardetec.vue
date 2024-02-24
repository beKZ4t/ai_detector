<template>

        
        <div class="navbar_user">
            <div @click="this.$router.push('/homeuser')"><img class="logo_img" src="@/assets/images/logo.png"> </div>
            <div class="right">
                <div class="items">
                    <div class="item"><a> History</a></div>
                    <div class="item"><a style="color:#E52D27; ;" href="#"> Detector</a></div>
                    <div class="item"><a>Profile</a></div>
                    <button type="button">Get PRO</button>

                </div>


            </div>

        </div>



</template>

<script>


export default {
    name: "NavbardetecComponent",
}
</script>

<style scoped>
.navbar_user{
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
.main{
    width: 1074px;
    margin-right: auto;
    margin-left: auto;
    
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
a::after{
    content: "";
    position: absolute;
    background-color: #E52D27;
    height: 3px;
    width: 0;
    left: 0;
    bottom: -10px;

}
a:hover{
    width: 100%;
}

</style>