<script>
import AddTask from "@/components/AddTask.vue";
import ClearTask from "@/components/ClearTask.vue";
import ListTask from "@/components/ListTask.vue";

export default {
  name: "App",
  components: {
    AddTask,
    ClearTask,
    ListTask,
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
};
</script>

<template>
  <div
    class="anim"
    :class="{ anim: !isDarkMode, 'anim--dark': isDarkMode }"
  ></div>
  <div class="app">
    <div
      class="app__block"
      :class="{ app__block: !isDarkMode, 'app__block--dark': isDarkMode }"
    >
      <AddTask />
      <ClearTask />
      <ListTask />
    </div>
    <div class="footer">
      <div class="footer__block">
        <img src="./assets/clear.png" alt="" />
        <label id="switch" class="footer__switch">
          <input type="checkbox" id="slider" v-model="isDarkMode" />
          <span class="footer__slider"></span>
        </label>
        <img src="./assets/night.png" alt="" />
      </div>
      <a href="https://github.com/stepup981/todo_list" class="footer__link">
        <p class="footer__title">To-do List</p>
        <img class="footer__img" src="./assets/github.png" alt="" />
      </a>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
@import url("https://fonts.googleapis.com/css2?family=K2D&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "K2D", sans-serif;
}

.app {
  &__block {
    max-width: 650px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    background-color: #e8e8e8;
    border-radius: 30px;
  }
  &__block--dark {
    background-color: #464646;
    color: white;
  }
}

.footer {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 15px;
  position: fixed;
  bottom: 2%;
  top: 100;
  left: 0;
  right: 0;
  font-size: 30px;

  &__block {
    display: flex;
    justify-content: center;
    gap: 5px;
    align-items: center;
  }

  &__link {
    display: flex;
    justify-content: center;
    gap: 10px;
    text-decoration: none;
    color: black;
  }

  &__img {
    height: 30px;
    width: 30px;
  }

  &__switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  &__switch input {
    display: none;
  }
  &__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #2196f3;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  &__slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + &__slider {
    background-color: #ccc;
  }

  input:focus + &__slider {
    box-shadow: 0 0 1px #ccc;
  }

  input:checked + &__slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
}
.anim {
  background: linear-gradient(-45deg, #ee7752, #5133d4, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  transition: background-image 2s;
  background-position: center;
  z-index: -1;
}

.anim--dark {
  background: linear-gradient(-45deg, #693323, #23175c, #0f4558, #0e5e4b);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  transition: background-image 2s;
  background-position: center;
  z-index: -1;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@media (max-width: 480px) {
  * {
    margin: 0;
    padding: 0;
    font-family: "K2D", sans-serif;
  }

  .app {
    &__block {
      max-width: 300px;
      margin-top: 100px;
      margin-left: auto;
      margin-right: auto;
      background-color: #e8e8e8;
      border-radius: 30px;
    }
    &__block--dark {
      background-color: #464646;
      color: white;
    }
  }

  .footer {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 15px;
    position: fixed;
    bottom: 2%;
    top: 100;
    left: 0;
    right: 0;
    font-size: 30px;

    &__block {
      display: flex;
      justify-content: center;
      gap: 5px;
      align-items: center;
    }

    &__link {
      display: flex;
      justify-content: center;
      gap: 10px;
      text-decoration: none;
      color: black;
    }

    &__img {
      height: 30px;
      width: 30px;
    }

    &__switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    &__switch input {
      display: none;
    }
    &__slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #2196f3;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 34px;
    }

    &__slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }

    input:checked + &__slider {
      background-color: #ccc;
    }

    input:focus + &__slider {
      box-shadow: 0 0 1px #ccc;
    }

    input:checked + &__slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }
  .anim {
    background: linear-gradient(-45deg, #ee7752, #5133d4, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    transition: background-image 2s;
    background-position: center;
    z-index: -1;
  }

  .anim--dark {
    background: linear-gradient(-45deg, #753c2b, #221361, #0f4558, #073a2e);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    transition: background-image 2s;
    background-position: center;
    z-index: -1;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
}
</style>
