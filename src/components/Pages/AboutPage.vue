<template>
  <h1 class="about__header">Контактная информация</h1>
  <div class="empty2"></div>
  <div class="about">
    <div class="about-info">
      <div class="about-info__container">
        <svg
          class="about-info__icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          ></path>
        </svg>
        <div>
          <h1 class="about-info__header">Телефоны:</h1>
          <p class="about-info__text">+7 922 012 4210</p>
          <p class="about-info__text">+7 922 012 4210</p>
        </div>
      </div>
      <div class="about-info__container">
        <svg
          class="about-info__icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          >
            h1(class = 'about-info__header') График работы:
          </path>
        </svg>
        <div>
          <h1 class="about-info__header">Время работы:</h1>
          <p class="about-info__text">Понедельник-Пятница:</p>
          <p class="about-info__text">C 9:00 до 18:00</p>
        </div>
      </div>
      <div class="about-info__container">
        <svg
          class="about-info__icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          ></path>
        </svg>
        <div>
          <h1 class="about-info__header">Электронная Почта:</h1>
          <p class="about-info__text">duviks@mail.ru</p>
        </div>
      </div>
      <h1 class="about-info__sub-header">Наименование компании:</h1>
      <p class="about-info__sub-text">ООО ДЮВИКС</p>
      <h1 class="about-info__sub-header">Регистрационная информация:</h1>
      <p class="about-info__sub-text">
        ИНН 0276111090, КПП 027301001, ОГРН 1070276006448
      </p>
      <h1 class="about-info__sub-header">Юридический адрес:</h1>
      <p class="about-info__sub-text">
        450039, г.Уфа, ул. Георгия Мушникова,28
      </p>
    </div>
    <button @click="SwitchPopupIsOpen" class="btn btn-form about-info__btn">
      Оставить заявку
    </button>
  </div>
  <popup-form v-if="PopupIsOpen" @ClosePopup="SwitchPopupIsOpen"></popup-form>

  <footer>
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social_icon">
      <li>
        <a href="#">
          <ion-icon name="logo-whatsapp"></ion-icon>
        </a>
      </li>
    </ul>
    <ul class="menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <p>@2023 Все сделал Платон Михайлов, Даниил Попов никак не помогал</p>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      PopupIsOpen: false
    };
  },
  methods: {
    SwitchPopupIsOpen() {
      this.PopupIsOpen = !this.PopupIsOpen;
    }
  }
};
</script>
