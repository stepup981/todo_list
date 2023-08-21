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
  max-height: 340px;

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
    background-color: rgba(217, 217, 217, 0.089);
    border-radius: 20px;
    font-size: 24px;
    padding: 10px 180px 10px 15px;
    width: 55%;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      box-shadow: rgba(50, 50, 93, 0.1) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.1) 0px 18px 36px -18px inset;
    }
  }

  &__newtask.selected-task {
    background-color: #2196f3;
  }

  &__btn {
    padding: 25px;
    border-radius: 50%;
    border: none;
    background-image: url(../assets/deletelist.png);
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(255, 0, 0, 0.9);
    background-size: 28px;
    cursor: pointer;

    &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }
}

@media (max-width: 480px) {
  .list {
    margin: 5px 23px 5px 28px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    position: relative;
    scroll-snap-type: y mandatory;
    overflow-y: auto;
    max-height: 340px;

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
      background-color: rgba(217, 217, 217, 0.089);
      border-radius: 20px;
      font-size: 14px;
      padding: 10px 68px 10px 15px;
      width: 55%;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        box-shadow: rgba(50, 50, 93, 0.1) 0px 30px 60px -12px inset,
          rgba(0, 0, 0, 0.1) 0px 18px 36px -18px inset;
      }
    }

    &__newtask.selected-task {
      background-color: #2196f3;
    }

    &__btn {
      padding: 18px;
      border-radius: 50%;
      border: none;
      background-image: url(../assets/deletelist.png);
      background-repeat: no-repeat;
      background-position: center;
      background-color: rgba(255, 0, 0, 0.9);
      background-size: 22px;
      cursor: pointer;

      &:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
          rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
      }
    }
  }
}
</style>
