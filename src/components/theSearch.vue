<script>
export default {
  data: () => ({
    newTask: "",
  }),
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        const task = { id: Date.now(), name: this.newTask };
        this.$store.commit("addTask", task);
        this.newTask = "";
      }
    },
  },
};
</script>

<template>
  <div class="search">
    <div class="search__newtask">
      <input
        v-model="newTask"
        class="search__inp"
        type="text"
        placeholder="Add new task"
      />
      <div class="search__scale">
        <button @click="addTask" class="search__btn"></button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  margin: 10px 45px 10px 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 15px;

  &__newtask {
    display: flex;
    text-align: center;
    justify-content: space-between;
  }

  &__inp {
    background-color: rgba(217, 217, 217, 0.5);
    outline: none;
    border-radius: 30px;
    padding: 10px 180px 10px 15px;
    font-size: 30px;
    border: none;
    transition: 0.5s;

    &:focus {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }

  &__scale {
    display: inline-block;
    overflow: hidden;
    border-radius: 50%;
  }

  &__btn {
    padding: 30px;
    border-radius: 50%;
    border: none;
    background-image: url(../assets/plus.png);
    background-repeat: no-repeat;
    background-position: center;
    background-color: #006357;
    cursor: pointer;

    &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }
}
</style>
