<template>
  <div class="credit-block">
    <h4 class="credit-list-title">Список кредиторов</h4>
    <ul class="credit-list">
      <li class="credit-item">
        ООО "МКК СКОРФИН", 344101, г. Ростов-на-Дону, ул. Портовая, д. 193, оф.
        302, Лицензия № 1703020008232, ИНН 3664223480, ОГРН 1163668109428,
        процентная ставка 0,99% в день
      </li>
      <li class="credit-item">
        ООО МФК "Быстроденьги", 123290 г. Москва, 1-й Магистральный туп., д.11
        стр.10, Лицензия № 2110573000002, ИНН 7325081622, ОГРН 1087325005899,
        процентная ставка 0% в день
      </li>
      <li class="credit-item">
        ООО "МКК КАНГАРИЯ", 344101, г. Ростов-на-Дону, ул. Ленинградская, д. 7,
        пом. № П-13, Лицензия № 1904067009295, ИНН 9201526872, ОГРН
        1189204008564, процентная ставка 0% в день
      </li>
      <li class="credit-item">
        ООО МКК "Киберлэндинг", 420043, г. Казань, ул. Достоевского, д. 52, оф.
        3, Лицензия № 1803392008777, ИНН 1659182700, ОГРН 1171690064920,
        процентная ставка 0% в день
      </li>
      <li class="credit-item">
        ООО МКК "Кредиттер", 115280, г. Москва, ул. Ленинская Слобода, д. 19,
        стр. 6, ком. 6, 7, Лицензия № 1903045009373, ИНН 7702463482, ОГРН
        1197746100530, процентная ставка 0,99% в день
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "credit-list",
};
</script>

<style lang="scss" scoped>
.credit-block {
  padding: 30px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.credit-list-title {
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  color: #ffffff;

  @media (max-width: 767px) {
    text-align: center;
  }
}

.credit-item {
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  color: #ffffff;
}
</style>