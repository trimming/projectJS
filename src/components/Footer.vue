<template>
  <div class="footer">
    <div class="feedback">
      <div class="container feedbackBlock">
        <div class="feedbackBlock__comment">
          <img src="img/portret.png" alt="foto_client" />
          <p>
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
            <i>a pulvinar purus condimentum</i> “
          </p>
        </div>
        <div class="feedbackBlock__subscribe">
          <h3>
            SUBSCRIBE <br />
            <span>FOR OUR NEWLETTER AND PROMOTION</span>
          </h3>
          <Form />
        </div>
      </div>
    </div>
    <div class="footer__copy">
      <div class="container footer__container">
        <div class="footer__copyText">
          <p>&copy; 2021 Brand All Rights Reserved.</p>
        </div>
        <div class="b-footer__social">
          <a class="b-footer__socialIcon" href="#"
            ><img src="img/soc/facebook.svg" alt="icon"
          /></a>
          <a class="b-footer__socialIcon" href="#"
            ><img src="img/soc/insta.svg" alt="icon"
          /></a>
          <a class="b-footer__socialIcon" href="#"
            ><img src="img/soc/pinterest.svg" alt="icon"
          /></a>
          <a class="b-footer__socialIcon" href="#"
            ><img src="img/soc/tweeter.svg" alt="icon"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "./Form.vue";
export default {
  name: "Footer",
  components: {
    Form,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap");
@import "../../public/variables";
.footer {
  .feedback {
    background: url(../../public/img/surf.png);
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;

    &Block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 156px;
      padding-top: 90px;

      @media (max-width: 1024px) {
        flex-direction: column;
        padding-top: 53px;
        padding-bottom: 140px;
      }

      @media (max-width: 667px) {
        padding-top: 53px;
        padding-bottom: 109px;
      }

      &__comment {
        text-align: center;
        max-width: 360px;

        @media (max-width: 1024px) {
          padding-bottom: 60px;
        }

        p {
          padding-top: 40px;
          font-weight: 400;
          line-height: 24px;
          text-align: center;
          font-size: 20px;
          color: #222224;

          @media (max-width: 667px) {
            font-size: 18px;
            line-height: 22px;
          }
        }

        img {
          transition-duration: 1s;
        }

        img:hover {
          transform: scale(2, 2);
        }
      }

      &__subscribe {
        text-align: center;

        h3 {
          font-weight: 700;
          line-height: 35px;
          font-size: 24px;
          color: #222224;
          text-align: center;
          padding-bottom: 32px;

          @media (max-width: 1024px) {
            padding-bottom: 27px;
          }

          span {
            font-weight: 400;
            font-size: 18px;
            line-height: 30px;

            @media (max-width: 667px) {
              font-size: 14px;
              line-height: 21px;
            }
          }
        }
      }
    }
  }

  &__copy {
    background: #222224;
    height: 79px;

    @media (max-width: 667px) {
      height: 143px;
      padding-bottom: 9px;
    }

    .footer__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: inherit;

      @media (max-width: 667px) {
        flex-flow: column-reverse;
        justify-content: center;
      }

      .footer__copyText {
        font-weight: 400;
        line-height: 19px;
        color: #fbfbfb;
        font-size: 16px;
      }
    }
  }
}
.b-footer__social {
  display: flex;

  @media (max-width: 667px) {
    flex-grow: 1;
    padding-top: 43px;
  }

  &Icon {
    background: #ffffff;
    text-decoration: none;
    box-sizing: border-box;
    margin-right: 7px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.5s;

    &:hover {
      transform: scale(1.5, 1.5);
    }
  }
}
</style>