<script lang="ts">
export default {
  name: "Footer",
};
</script>
<template>
    <div id="container">
        <div id="top">
            <p>FOLLOWING JESUS IN THE GALLATIN VALLEY</p>
            <div id="links">
                <a href="https://wwww.facebook.com/gbcmt.org/"><img src="/src/components/icons/fb_wh.png"></a>
                <img src="/src/components/icons/grace_logo-wh_c.png">
                <RouterLink to="/about/radio"><img src="/src/components/icons/gbcmt-radio-icon-small.png"></RouterLink>
            </div>
        </div>
        <div id="bottom">
            <p>&copy; Copyright 2024 - GRACE BIBLE CHURCH | 3625 SOUTH 19th AVENUE, BOZEMAN MONTANA 59718 | T. 406 586 9782</p>
        </div>
    </div>
    </template>

<style lang="scss" scoped>
#container{
    background-color:#4c4c4c;
    height: 270px;
    color:white;
    text-align: center;
}
#top{
    padding: 40px 0;
    font-size: 24px;
    #links {
        display: flex;
        justify-content: center;
        column-gap: 2rem;
        img{
            width: 75px;
            height: 75px;
        }
    }
}
#bottom{
    font-size: 14px;
}
</style>