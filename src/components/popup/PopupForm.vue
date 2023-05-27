<template>
  <div class="popup-form">
    <a @click="ClosePopup" href="#" class="popup__close">&times;</a>
    <h1 class="popup-form_header">Пожалуйста заполните форму</h1>
    <form action="/" enctype="multipart/form-data" method="post">
      <div>
        <label for="company-name">Название организации</label
        ><input
          id="company-name"
          type="text"
          placeholder="John Smith"
          name="companyName"
          required
        />
      </div>
      <div>
        <label for="email">Email для контактов</label
        ><input
          id="email"
          type="email"
          placeholder="me@example.com"
          required
          name="email"
        />
      </div>
      <div>
        <label for="full-name">Ваше имя и фамилия</label
        ><input
          id="full-name"
          type="tel"
          placeholder="Иван Иванович Иванов"
          required
          name="fullname"
        />
      </div>
      <div>
        <label for="documents">Cписок объектов на утилизацию</label
        ><input id="documents" type="file" multiple name="avatar" />
      </div>
      <button class="btn" type="submit">Отправить</button>
    </form>
  </div>
  <div @click="ClosePopup" class="popup__background"></div>
</template>
<script>
export default {
  methods: {
    ClosePopup() {
      this.$emit("ClosePopup");
    }
  }
};
</script>
