<template>
    <div>
      <div class="todolist" :class="{ status: completed }">
        <div class="iconcha">
          <i class="fa-solid fa-pen"></i>
          <i id="icon" class="fa-sharp fa-solid fa-xmark"></i>
        </div>
        <h5>{{ malumot.title }}</h5>
        <p>{{ malumot.matni }}</p>
        <div class="footerdiv">
          <h5>{{ malumot.time }}</h5>
          <h5>{{ malumot.name }}</h5>
          
        </div>
       
        <i class="fa-sharp fa-solid fa-check" @click="completed=!completed"></i>
      </div>
    </div>
  </template>
  
  <script>
  console.log(completed);
  
  export default {
    props: ["malumot"],
    data() {
      return {
        completed: true,
      };
    },
    methods: {
      toggleComplete() {
        this.completed = !this.completed;
        this.$emit('toggle-complete', this.completed); // Bajarilgan holatni asosiy komponentga uzatish
      },
    },
  };
  </script>
  
  <style scoped>
  .todolist.status {
    background: #9fe3e8;
  }
  .todolist {
    background: #f4a4a9;
    margin-bottom: 15px;
    width: 321px;
    padding: 2px 50px;
  }
  .footerdiv {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  h5 {
    font-size: 20px;
    margin: 0;
  }
  .iconcha {
    position: relative;
    top: 10px;
    right: -310px;
    cursor: pointer;
    display: flex;
  }
  .iconcha .fa-pen {
    margin-right: 15px;
  }
  .fa-xmark {
    font-size: 25px;
    position: relative;
    top: -4px;
  }
  .fa-check {
    position: relative;
    left: 340px;
    font-size: 25px;
  }
  </style>
  