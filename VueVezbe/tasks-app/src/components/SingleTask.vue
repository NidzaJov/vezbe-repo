<template>
    <div class="single-task ps" @click="toggleDone" v-if="task">
      <input type="checkbox" class="check-box" v-model="task.done"/>
      <span
      class="text"
      :class="spanClass"
      v-if="!editMode">
        {{task.text}}
      </span>
      <input
        class="text"
        v-if="editMode"
        type="text"
        v-model="editedText"
        @keyup.enter ="saveEdit"
        @click.stop/>
      <my-button
          :stop="true"
          v-show="!editMode"
          @click="startEdit">Edit</my-button>
        <my-button
          :stop="true"
          v-show="editMode"
          @click="cancelEdit">Cancel</my-button>
      <my-button
      @click="handleDelete"
      :stop="true">X</my-button>
        </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import MyButton from './MyButton.vue';

export default {
  name: 'SingleTask',
  components: {
    MyButton,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      editedText: this.text,
    };
  },
  methods: {
    ...mapActions('tasks', ['deleteTask', 'editTask']),
    toggleDone() {
      this.task.done = !this.task.done;
      this.editTask({
        id: this.task.id,
        text: this.task.text,
        done: this.task.done,
      });
    },
    handleDelete() {
      this.deleteTask(this.task.id);
    },
    startEdit() {
      this.$router.push({ name: 'EditTask', params: { id: this.task.id, text: this.task.text } });
    },
    cancelEdit() {
      this.$router.push({ name: 'TaskList' });
    },
    saveEdit() {
      this.editTask({
        id: this.task.id,
        text: this.editedText,
        done: this.task.done,
      });
      this.editedText = '';
      this.$router.push({ name: 'TaskList' });
    },
  },
  computed: {
    ...mapState('tasks', ['tasksData']),
    spanClass() {
      return {
        'is-checked': this.task.done,
      };
    },
    task() {
      if (this.tasksData) {
        const foundTask = this.tasksData.find((t) => t.id === this.id);
        return foundTask;
      }
      return false;
    },
    editMode() {
      if (this.$route.name === 'EditTask') {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.single-task {
  width: $default-width;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #DDDDDD
  }

    .checkbox {
      margin-right: $padding-l;
    }
    .text {
      flex-grow: 1;
    }
}
.is-checked{
  text-decoration: line-through;
}

</style>
