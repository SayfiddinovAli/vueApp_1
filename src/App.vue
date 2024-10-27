<template>
  <div class="container">
    <div :class="['main', { 'active': toggle }]">
      <Header @filter="filterTasks" />
      <mainsection
        v-for="p of filteredTasks"
        :key="p.id"
        :malumot="p"
        @toggle-complete="updateTaskStatus(p.id, $event)" 
      />
      <div class="appDiv">
        <i class="fas fa-circle-plus" @click="toggle = !toggle"></i>
        
      </div>
      <div v-show="toggle" class="form-container">
        <form class="form">
          <i id="icon" class="fa-sharp fa-solid fa-xmark" @click="toggle = false"></i>
          <h3>Yangi topshiriq</h3>
          <input type="text" placeholder="Topshiriq sarlavhasi" v-model="newTask.title" />
          <textarea cols="50" rows="4" placeholder="Topshiriq matni" v-model="newTask.matni"></textarea>
          <input
            type="date"
            id="deadline"
            onfocus="(this.type='date')"
            onblur="if(!this.value)this.type='text'"
            placeholder="Ohirgi mudat"
            v-model="newTask.time"
          />
          <select v-model="newTask.name">
            <option disabled selected>Guruh a'zosi</option>
            <option v-for="ism of guruhazozi" :key="ism">{{ ism }}</option>
          </select>
          <button type="button" @click.prevent="add()">Qo'shish</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import mainsection from '@/components/mainsection.vue';
import '@fortawesome/fontawesome-free/css/all.css';


export default {
  components: {
    Header,
    mainsection,
  },
  data() {
    return {
      newTask: {},
      rejalar: [],
      toggle: false,
      guruhazozi: ['Ali', 'Mirzohid', 'Shoxruhbek', 'Marufjon', 'Shaxboz'],
      filter: 'all',
    };
  },
  computed: {
    filteredTasks() {
      if (this.filter === 'completed') {
        return this.rejalar.filter(task => task.completed);
      } else if (this.filter === 'incomplete') {
        return this.rejalar.filter(task => !task.completed);
      }
      return this.rejalar;
    },
  },
  methods: {
    add() {
      this.rejalar.unshift({ ...this.newTask, completed: false });
      this.newTask = {};
      this.toggle = false;
    },
    filterTasks(type) {
      this.filter = type;
    },
    updateTaskStatus(id, status) {
      const task = this.rejalar.find(t => t.id === id);
      if (task) {
        task.completed = status; // Bajarilgan holatni yangilash
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.main {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  min-height: 300px;
  padding: 20px;
  border: #000 solid 1px;
  border-radius: 10px;
  position: relative;
}
.main.active {
  background-color: #000000AD;
}
.appDiv {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8vh;
  margin-bottom: 5vh;
}
.appDiv i {
  margin-top: 25px;
  color: #2cb932;
  font-size: 62px;
}
.form-container {
  position: absolute;
  top: 74px;
  width: 94%;
  display: flex;
  justify-content: center;
}
.form {
  width: 379px;
  min-height: 300px;
  background-color: #ffffff;
  border: #000 1px solid;
  padding: 20px;
  border-radius: 10px;
}
.form input,
.form textarea,
.form select {
  width: 329px;
  margin: 10px 0;
  padding: 5px;
  border-radius: 15px;
  margin-left: 15px;
}
.form button {
  background-color: #7ed369;
  border: none;
  padding: 8px 45px;
  border-radius: 15px;
  display: block;
  margin: auto;
  margin-top: 35px;
  width: 168px;
}
.form h3 {
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.09px;
}
#icon {
  cursor: pointer;
  font-size: 25px;
}
</style>
