<script setup lang="ts">

</script>

<template>
  <div id="hero">
    <div id="image" />
    <div id="text">
      <h1>Glorifying
        <br>
        God by being
        <br>
        and making disciples
      </h1>
      <div id="buttons">
        <RouterLink to="/welcome"><button>NEW TO GRACE</button></RouterLink>
        <RouterLink to="/sermons"><button>SERMONS</button></RouterLink>
      </div>
    </div>
  </div>
  <div id="connect">
    <span id="divider" />
    <h1>CONNECT WITH US</h1>
    <div id="panels">
      <RouterLink to="/events" class="panel"><img src="/src/components/icons/gbc_events_world.jpg" width="333" height="240" /></RouterLink>
      <RouterLink to="/ministries" class="panel"><img src="/src/components/icons/gbc_ministries_fsr.jpg" width="333" height="240" /></RouterLink>
      <RouterLink to="/events" class="panel"><img src="/src/components/icons/GBC-HOME_3.jpg" width="333" height="240" /></RouterLink>
    </div>
    <h1>JOIN US FOR SUNDAY SERVICES<br>at 9:00am and 10:45am</h1>
    <span id="divider" />
  </div>
</template>


<style lang="scss" scoped>
  *{font-family: 'Roboto', sans-serif;}
  #hero {
    position: relative;
    overflow: hidden;
    min-height: 900px;
    height: 88vh;
    #image{
      background-image: url('/src/components/icons/Bryan_hero_image.jpg');
      width: 100%;
      max-width: 1239px;
      height: 100%;
      background-position: top;
      background-repeat: no-repeat;
      object-fit: cover;
      position: fixed;
      margin: 0 auto;
      top: 0;
      left: 0;
      right: 0;
      z-index: -1;
    }
    #text {
      padding-top: 25rem;
      padding-left: 5rem ;
      h1{
        color:white;
        font-size: 59px;
      }
    }
    #buttons {
      display: flex;
      column-gap: 1rem;
      button {
        &:hover{
          background-color: #0693e3;
          color: white;
        }
        font-family: 'Noto Sans', sans-serif;
        transition: all 300ms;
        font-size: 18px;
        font-weight: 600;
        color:#454545;
        letter-spacing: -0.2px;
        cursor: pointer;
        background-color: white;
        border: none;
        padding: 25px 50px;
      }
    }
  }
  #connect {
    background-color: white;
    overflow: hidden;
    span{
      width: 100%;
      height: 10px;
      background-color:#4C4C4C;
      display: block;
      margin: 10px 0;
    }
    h1{
      font-weight: bold;
      margin: 6.5rem 0;
      font-size: 45px;
      text-align: center;

    }

    #panels {
      max-width: 1140px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: space-evenly;
    }
  }
</style>