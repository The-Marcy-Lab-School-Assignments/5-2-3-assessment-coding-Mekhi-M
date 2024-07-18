const { getId } = require("./utils");

class ToDoItem {
  constructor(description, priorityLevel, timesToDo = 1) {
    this.id = getId();
    this.description = description;
    this.priorityLevel = priorityLevel;
    this.isDone = false;
    this.timesToDo = timesToDo;
    this.timesDone = 0;
  }

  completed() {
    this.timesDone++;
    this.timesDone >= this.timesToDo
      ? (this.isDone = true)
      : console.log(
          `You still have to ${this.description} ${
            this.timesToDo - this.timesDone
          } more times!`
        );
    return this.isDone;
  }
}

class ToDoList {
  #allItems = [];
  static #allLists = [];

  constructor(name) {
    this.id = getId();
    this.name = name;
    this.isDone = false;

    ToDoList.#allLists.push(this);
  }

  createItem(description, priorityLevel, timesToDo = 1) {
    const newItem = new ToDoItem(description, priorityLevel, timesToDo);
    this.#allItems.push(newItem);
    return newItem;
  }

  getItems() {
    return [...this.#allItems];
  }

  getCompletedCount() {
    return this.#allItems.filter(({ isDone }) => isDone).length;
  }

  getHighestPriorityItem() {
    if (this.#allItems.every(({ isDone }) => isDone)) {
      console.log(`"${this.name}" is all done!`);
      return null;
    }

    return this.#allItems.reduce((highestItem, currItem) => {
      if (highestItem.isDone) {
        return currItem;
      }
      if (currItem.isDone) {
        return highestItem;
      }

      return currItem.priorityLevel < highestItem.priorityLevel
        ? currItem
        : highestItem;
    });
  }

  markDone() {
    this.isDone = true;
  }

  static list() {
    return [...ToDoList.#allLists];
  }

  static findBy(searchTerm) {
    return ToDoList.#allLists.find(({ id }) => id === searchTerm);
  }
}

module.exports = {
  ToDoItem,
  ToDoList,
};
