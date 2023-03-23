<template>
  <form class="b-feedbackBlock__form" action="#">
    <input
      id="subscribeName"
      type="text"
      placeholder="Enter Your Name"
      v-model="user_name"
      :class="[
        { active: matchName },
        { err: !matchName && user_name },
        { def: !matchName },
      ]"
    />
    <span
      class="subscribe"
      id="nameMessage"
      style="color: #e05c6e"
      v-if="!matchName && user_name"
      >Имя должно содержать только буквы!</span
    >
    <input
      id="subscribePhone"
      type="phone"
      placeholder="Enter Your Phone"
      v-model="user_phone"
      :class="[
        { active: matchPhone },
        { err: !matchPhone && user_phone },
        { def: !user_phone },
      ]"
    />
    <span
      class="subscribe"
      id="phoneMessage"
      style="color: #e05c6e"
      v-if="!matchPhone && user_phone"
      >Телефон должен быть формата +7(000)000-0000!</span
    >
    <input
      id="subscribeEmail"
      type="email"
      placeholder="Enter Your Email"
      v-model="user_email"
      :class="[
        { active: matchEmail },
        { err: !matchEmail && user_email },
        { def: !matchEmail },
      ]"
    />
    <span
      class="subscribe"
      id="emailMessage"
      style="color: #e05c6e"
      v-if="!matchEmail && user_email"
      >Почта введена не корректно!</span
    >
    <button class="b-feedbackBlock__button">Subscribe</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      activeClass: "active",
      errorClass: "err",
      defaultClass: "def",
    };
  },
  name: "Form",
  computed: {
    user_name: {
      set(value) {
        return this.$store.commit("setUserName", value);
      },
      get() {
        return this.$store.getters.getInputName.text;
      },
    },
    nameRegex() {
      return this.$store.getters.getInputName.regex;
    },
    matchName() {
      return this.nameRegex.test(this.user_name);
    },

    user_phone: {
      set(value) {
        return this.$store.commit("setUserPhone", value);
      },
      get() {
        return this.$store.getters.getInputPhone.text;
      },
    },
    phoneRegex() {
      return this.$store.getters.getInputPhone.regex;
    },
    matchPhone() {
      return this.phoneRegex.test(this.user_phone);
    },

    user_email: {
      set(value) {
        return this.$store.commit("setUserEmail", value);
      },
      get() {
        return this.$store.getters.getInputEmail.text;
      },
    },
    emailRegex() {
      return this.$store.getters.getInputEmail.regex;
    },
    matchEmail() {
      return this.emailRegex.test(this.user_email);
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap");
@import "../../public/variables";
.b-feedbackBlock__form {
  display: flex;
  justify-content: center;
  flex-direction: column;

  input {
    @include kitProp(#222224, 400);
    opacity: 0.67;
    // background: #e1e1e1;
    box-sizing: border-box;
    background-size: cover;
    // border: none;
    padding: 10px 22px 10px 22px;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    margin-bottom: 15px;
    margin-top: 15px;
  }

  button {
    @include kitProp(#ffffff, 400);
    text-decoration: none;
    background: #e05c6e;
    padding: 10px 22px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    margin-top: 15px;
    cursor: pointer;
    display: block;
    border: none;
  }
}
.def {
  background: #e1e1e1;
  border: none;
}
.active {
  border: solid 3px #6bf556;
  background: #b9f3b0;
}
.err {
  border: solid 3px #e05c6e;
  background: #ffd9d9;
}
</style>