<template>
    <div class="single-task ps" @click="toggleDone">
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
import MyButton from './MyButton.vue';

export default {
  name: 'SingleTask',
  components: {
    MyButton,
  },
  props: {
    task: {
      type: Object,
    },
  },
  data() {
    return {
      editMode: false,
      editedText: '',
    };
  },
  methods: {
    toggleDone() {
      this.task.done = !this.task.done;
    },
    handleDelete() {
      this.$emit('delete', this.task.id);
    },
    startEdit() {
      this.editMode = true;
      this.editedText = this.task.text;
    },
    cancelEdit() {
      this.editMode = false;
      this.editedText = '';
    },
    saveEdit() {
      this.editMode = false;
      this.task.text = this.editedText;
      this.editedText = '';
    },
  },
  computed: {
    spanClass() {
      return {
        'is-checked': this.task.done,
      };
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
