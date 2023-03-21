<template>
  <form class="b-feedbackBlock__form" action="#">
    <input
      id="subscribeName"
      type="text"
      placeholder="Enter Your Name"
      v-model="user_name"
    />
    <input id="subscribePhone" type="phone" placeholder="Enter Your Phone" />
    <input id="subscribeEmail" type="email" placeholder="Enter Your Email" />
    <button class="b-feedbackBlock__button">Subscribe</button>
  </form>
</template>

<script>
export default {
  name: "Form",
  computed: {
    user_name: {
      set(value) {
        return this.$store.commit("setUserName", value);
      },
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
    background: #e1e1e1;
    box-sizing: border-box;
    background-size: cover;
    border: none;
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
</style>