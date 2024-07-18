const { ToDoList, ToDoItem } = require("./0-has-many-belongs-to");

// const { bankAccountFactory, Phone, AppleIPhone } = require("./from-scratch");

const list1 = new ToDoList("testing");
const list2 = new ToDoList("testing again");

const item1 = list1.createItem("say hi", 1);
const item2 = list1.createItem("say bye", 3, 5);
const item3 = list1.createItem("relax", 4);
const item4 = list1.createItem("lock in", 2);

// console.log(list1.getItems());
// console.log(ToDoList.list());

// console.log(item1.completed());

// console.log(item2.completed());
// console.log(item2.completed());
// console.log(item2.completed());
// console.log(item2.completed());
// console.log(item2.completed());
// console.log(item2.completed());

// console.log(item3.completed());

// console.log(item4.completed());

// console.log(list1.getCompletedCount());
// console.log(list1.getHighestPriorityItem());

// list1.markDone();
// list2.markDone();
// console.log(ToDoList.list());
