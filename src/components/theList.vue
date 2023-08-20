<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters({
      completedTasks: "completedTask",
      incompleteTasks: "incompleteTasks",
    }),

    allTasks() {
      return this.$store.getters.allTasks;
    },
  },
  methods: {
    ...mapMutations(["toggleTask"]),

    deleteTask(taskId) {
      this.$store.commit("deleteTask", taskId);
    },
    toggleTask(taskId) {
      this.$store.commit("toggleTask", taskId);
    },
    completedTask(taskId) {
      this.toggleTask(taskId);
    },
    incompleteTasks() {
      return this.$store.getters.incompleteTasks;
    },
  },
};
</script>

<template>
  <div class="list">
    <div class="list__block" v-for="task in allTasks" :key="task.id">
      <div
        @click="completedTask(task.id)"
        :class="{ 'selected-task': task.completed }"
        class="list__newtask"
      >
        {{ task.name }}
      </div>
      <button @click="deleteTask(task.id)" class="list__btn"></button>
    </div>
  </div>
</template>

<style lang="scss">
.list {
  margin: 10px 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  position: relative;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  max-height: 270px;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f0f0f0;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #979797;
    border-radius: 8px;

    &:hover {
      background-color: #666666;
    }

    &:active {
      background-color: #666666;
    }
  }

  &__block {
    display: flex;
    justify-content: space-between;
  }

  &__newtask {
    background-color: rgba(217, 217, 217, 0.5);
    border-radius: 30px;
    font-size: 30px;
    padding: 10px 180px 10px 15px;
    width: 55%;
    cursor: pointer;

    &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }

  &__newtask.selected-task {
    background-color: #006357;
  }

  &__btn {
    padding: 30px;
    border-radius: 50%;
    border: none;
    background-image: url(../assets/deletelist.png);
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(255, 0, 0, 0.7);
    cursor: pointer;

    &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }
}
</style>
