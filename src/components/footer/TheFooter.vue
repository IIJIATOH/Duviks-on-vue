<template>
  <footer>
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social_icon">
      <li>
        <a href="#"> <ion-icon name="logo-whatsapp"></ion-icon></a>
      </li>
    </ul>
    <ul class="menu">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li><router-link to="/doc">About</router-link></li>
      <li><router-link to="/about">Contact</router-link></li>
    </ul>
    <p>@2023 Все сделал Платон Михайлов, Даниил Попов никак не помогал</p>
  </footer>
</template>
