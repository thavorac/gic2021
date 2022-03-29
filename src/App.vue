<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="todolist not-done">
          <h1>Todos</h1>
          <input
            type="text"
            class="form-control add-todo"
            placeholder="Add todo"
          />
          <button id="checkAll" class="btn btn-success">
            Mark all as done
          </button>

          <hr />
          <ul id="sortable" class="list-unstyled">
            <li class="ui-state-default">
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="" />Take out the trash</label
                >
              </div>
            </li>
            <li class="ui-state-default">
              <div class="checkbox">
                <label> <input type="checkbox" value="" />Buy bread</label>
              </div>
            </li>
            <li class="ui-state-default">
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="" />Teach penguins to fly</label
                >
              </div>
            </li>
          </ul>
          <div class="todo-footer">
            <strong><span class="count-todos"></span></strong> Items Left
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="todolist">
          <h1>Already Done</h1>
          <ul id="done-items" class="list-unstyled">
            <li>
              Some item
              <button class="remove-item btn btn-default btn-xs pull-right">
                <span class="glyphicon glyphicon-remove"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';

export default {
  name: 'App',
  components: {},
  mounted() {
    var db = firebase.firestore();
    db.collection('tasks')
      .get()
      .then((querySnapshot) => {
        const tasks = querySnapshot.docs.map((doc) => doc.data());
        // do something with documents
        console.log(tasks);
      });
  },
};
</script>

<style>
body {
  background-color: #eeeeee;
}
.todolist {
  background-color: #fff;
  padding: 20px 20px 10px 20px;
  margin-top: 30px;
}
.todolist h1 {
  margin: 0;
  padding-bottom: 20px;
  text-align: center;
}
.form-control {
  border-radius: 0;
}
li.ui-state-default {
  background: #fff;
  border: none;
  border-bottom: 1px solid #ddd;
}

li.ui-state-default:last-child {
  border-bottom: none;
}

.todo-footer {
  background-color: #f4fce8;
  margin: 0 -20px -10px -20px;
  padding: 10px 20px;
}
#done-items li {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  text-decoration: line-through;
}
#done-items li:last-child {
  border-bottom: none;
}
#checkAll {
  margin-top: 10px;
}
</style>
