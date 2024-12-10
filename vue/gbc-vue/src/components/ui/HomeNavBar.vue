
<script lang="ts" setup>
  import { aboutLinks, ministriesList, eventsList } from '../../lib/constants';
  import Dropdown from './Dropdown.vue';
  import { ref, onMounted } from 'vue';

  let scrollPosition = ref(0);

  
  function updateScroll():void {
    scrollPosition.value = window.scrollY;
  }
  
  onMounted(() => {window.addEventListener('scroll', updateScroll)});

</script>


<template>
  <nav class="container" :class="{change_bg: scrollPosition >= 200}">
    <div id="logo">
      <RouterLink to="/">
        <img v-if="(scrollPosition < 200)" src="../icons/grace_logo-wh_c.png" alt="Grace Bible Church Logo" width="120" height="120" />
        <img v-else src="../icons/grace_logo_c.png" alt="Grace Bible Church Logo" width="120" height="120" />
      </RouterLink>
    </div>
    <div id="links">
      <RouterLink to="/" class="link">Home</RouterLink>


      <div class="drop_down">
        <RouterLink to="/about" class="link drop_down-main" id="about">About<span class="chev_left" /><span class="chev_right" /></RouterLink>
        <div class="drop_down-list"><Dropdown v-bind:link-text="aboutLinks" /></div>
      </div>

      
      <RouterLink to="/sermons" class="link">Sermons</RouterLink>


      <div class="drop_down">
        <RouterLink to="/ministries" class="link drop_down-main" id="about">Ministries<span class="chev_left" /><span class="chev_right" /></RouterLink>
        <div class="drop_down-list"><Dropdown v-bind:link-text="ministriesList" /></div>
      </div>

      <div class="drop_down">
        <RouterLink to="/events" class="link drop_down-main" id="about">Events<span class="chev_left" /><span class="chev_right" /></RouterLink>
        <div class="drop_down-list"><Dropdown v-bind:link-text="eventsList" /></div>
      </div>


      <RouterLink to="/give" class="link">Give</RouterLink>
      <RouterLink to="/contact" class="link">Contact</RouterLink>
    </div>
  </nav>
</template>


<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 1239px;
  display: flex;
  position: fixed;
  justify-content: space-between;
  place-items: center;
  padding: 20px 0;
  z-index: 10;
  background-color: none;
  transition: all 300ms;
  
  @media screen and (max-width: 1041px) {
    display: none;
  }

  #logo {
    width: 25%;
    margin-left: 74px;
  }

  #links {
    width: 75%;
    display: flex;
    column-gap: 2rem;
    justify-content: end;
    margin-right: 74px;
    .link{
      padding: 0.5rem;
      font-size: 18px;
      color:white;
      transition: color 300ms;
      &:hover{
        color: #0693e3;
        transition: color 300ms;
      }
    }
    
  }
}

.drop_down{
  position: relative;
  .drop_down-main{
    display: flex;
    transition: color 300ms;
    &:hover{
      color: #0693e3;
      transition: color 300ms;
      span{
        background-color: #0693e3;
        transition: color 300ms;
      }
    }
  }
  .drop_down-list {
    position: absolute;
    display: none;
    opacity: 0;
    background:white;
  }
  &:hover{
    .drop_down-list{
      display: block;
      opacity: 1;
      transition: all 300ms ease-in-out;
    }
  }
}
span {
  display: block;
  height: 1.5px;
  width: 0.5rem;
  background-color: #4C4C4C;
  transition: 300ms;
}

.chev_left {
  rotate: 45deg;
  translate: 6px 0.9rem;
}
.chev_right {
  rotate: -45deg;
  translate: 4px 0.9rem;
}
.change_bg{
  background-color:white;
  transition: all 300ms;
  border-bottom: solid #4C4C4C 1px;
  #links{
    .link{
      color: #4C4C4C;
    }
  }
  span{
    background-color: #4C4C4C;
  }
  
}

span {
  display: block;
  height: 1.5px;
  width: 0.5rem;
  background-color: white;
}

.chev_left {
  rotate: 45deg;
  translate: 6px 0.9rem;
}
.chev_right {
  rotate: -45deg;
  translate: 4px 0.9rem;
}
</style>