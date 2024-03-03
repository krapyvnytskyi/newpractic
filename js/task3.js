/**
 *? Напиши клас Notes який управляє колекцією нотаток у
 *? властивості items.
 *? Нотатка - це об'єкт із властивостями text і priority.
 *? Додай класу статичний метод Priopity,
 *? який буде повертати об'єкт із пріоритетами.
 *? Додай методи addNote(note), removeNote(text)
 *? updatePriority(text, newPriority)
 */

class Notes {
  static Priority() {
    return {
      HIGHT: "hight",
      LOW: "low",
    };
  }
  constructor() {
    this.items = [];
  }

  addNote(data) {
    this.items.push(data);
  }

  removeNote(text) {
    const index = this.items.findIndex((elem) => elem.text === text);
    console.log(index);
    if (index !== -1) this.items.splice(index, 1);
  }
}
const note1 = new Notes();

note1.addNote({ text: "Note1", priority: Notes.Priority().LOW });
note1.addNote({ text: "Note2", priority: Notes.Priority().LOW });
console.log(note1);
note1.removeNote("Note2");
console.log(note1);
