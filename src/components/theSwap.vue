<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["completedTasks", "taskCount"]),
  },
  methods: {
    ...mapMutations(["clearCompletedTasks", "clearAllTasks"]),

    clearCompleted() {
      this.clearCompletedTasks();
    },
    clearAll() {
      this.clearAllTasks();
    },
  },
};
</script>

<template>
  <div class="swap">
    <h1 class="swap__title">
      Tasks <span class="swap__text-color">({{ taskCount }})</span>
    </h1>
    <div class="swap__block">
      <button @click="clearCompleted" class="swap__btn-clear">
        Clear completed
      </button>
      <button @click="clearAll" class="swap__btn-clearall">Clear all</button>
    </div>
  </div>
</template>

<style lang="scss">
.swap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 45px 10px 40px;

  &__title {
    padding-left: 15px;
    font-size: 38px;
    font-weight: 300;
  }

  // &__text-color {
  //   color: rgba(0, 0, 0, 0.3);
  // }

  &__block {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  &__btn-clear {
    padding: 20px 10px 20px 20px;
    border-radius: 20px;
    border: none;
    background-image: url(../assets/done.png);
    background-repeat: no-repeat;
    background-position: left;
    background-color: #006357;
    cursor: pointer;
    font-size: 20px;
    color: white;

    &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }

  &__btn-clearall {
    padding: 20px 10px 20px 20px;
    border-radius: 20px;
    border: none;
    background-image: url(../assets/delete.png);
    background-repeat: no-repeat;
    background-position: left;
    background-color: rgba(255, 0, 0, 0.7);
    cursor: pointer;
    font-size: 20px;
    color: white;

    &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }
}
</style>
