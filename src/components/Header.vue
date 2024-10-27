<template>
    <div class="header">
      <h1>ToDolist</h1>
      <div class="menubar">
        <ul>
          <li>
            <a @click="$emit('filter', 'all')">Barchasi</a>
          </li>
          <li>
            <a @click="$emit('filter', 'completed')">Bajarilgan</a>
          </li>
          <li>
            <a @click="$emit('filter', 'incomplete')">Bajarilmagan</a>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .header {
    text-align: center;
  }
  .header h1 {
    margin-top: 0;
    margin-bottom: 5px;
  }
  .menubar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
  .menubar ul {
    margin: 0;
  }
  .menubar ul li {
    list-style: none;
    display: inline-block;
    margin-top: 0px;
    margin-right: 35px;
  }
  .menubar ul li a {
    font-weight: bold;
    font-size: large;
    cursor: pointer;
  }
  hr {
    width: 414px;
    top: 95px;
    border: 1px solid #000000;
  }
  </style>
  