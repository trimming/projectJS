<template>
  <form class="b-feedbackBlock__form" action="#">
    <input
      id="subscribeName"
      type="text"
      placeholder="Enter Your Name"
      v-model="user_name"
      :class="[
        { active: match },
        { err: !match && user_name },
        { def: !match },
      ]"
    />
    <input
      id="subscribePhone"
      type="phone"
      placeholder="Enter Your Phone"
      v-model="user_phone"
      :class="[
        { active: match },
        { err: !match && user_phone },
        { def: !match },
      ]"
    />
    <input
      id="subscribeEmail"
      type="email"
      placeholder="Enter Your Email"
      v-model="user_email"
      :class="[
        { active: match },
        { err: !match && user_email },
        { def: !match },
      ]"
    />
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
    user_phone: {
      set(value) {
        return this.$store.commit("setUserPhone", value);
      },
      get() {
        return this.$store.getters.getUserPhone;
      },
    },
    phoneRegex() {
      return this.$store.getters.getPhoneRegex;
    },
    match() {
      return this.nameRegex.test(this.user_name);
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