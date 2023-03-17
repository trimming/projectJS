<template>
  <div class="advantage">
    <div class="container advantage__content">
      <div class="b-advantageItem">
        <img src="img/truck.svg" alt="truck" />
        <h4 class="b-advantageItem__heading">Free Delivery</h4>
        <p class="b-advantageItem__text">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </div>
      <div class="b-advantageItem">
        <img src="img/percent.svg" alt="percent" />
        <h4 class="b-advantageItem__heading">Sales & discounts</h4>
        <p class="b-advantageItem__text">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </div>
      <div class="b-advantageItem">
        <img src="img/crown.svg" alt="crown" />
        <h4 class="b-advantageItem__heading">Quality assurance</h4>
        <p class="b-advantageItem__text">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.advantage {
  background: #222224;

  &__content {
    display: flex;
    justify-content: center;
    padding-bottom: 104px;
    padding-top: 104px;
    align-items: center;

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
    }

    @media (max-width: 667px) {
      padding-top: 48px;
      padding-bottom: 81px;
    }
  }
}
.b-advantageItem {
  text-align: center;

  @media (max-width: 1024px) {
    padding-bottom: 48px;
    max-width: 400px;
  }

  @media (max-width: 667px) {
    padding-bottom: 47px;
  }

  &__heading {
    font-weight: 400;
    line-height: 24px;
    color: #fbfbfb;
    font-size: 19.96px;
    padding-top: 19px;
    padding-bottom: 16px;

    @media (max-width: 667px) {
      padding-bottom: 14px;
      padding-top: 18px;
    }
  }

  &__text {
    font-weight: 300;
    line-height: 17px;
    font-size: 13.972px;
    color: #fbfbfb;
    text-align: center;
  }
}
</style>