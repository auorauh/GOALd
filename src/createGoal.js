export const currentGoals = [];

export const Goal = (nameNew, typeNew, dueDate, desc) => {
  // nameNew;
  // typeNew;
  // dueDate;
  // desc;
  let fin = false;
    return {nameNew, typeNew, dueDate, desc, fin};
  }

  export const create = () => {
    let nameNew = document.getElementById('name').value;
    let typeNew;
    if (document.getElementById('daily').checked){
        typeNew = 'Daily';
    } else if (document.getElementById('obj').checked) {
        typeNew = 'Objective';
    }
    let dueDate = document.getElementById('date').value;
    let desc = document.getElementById('desc').value;
    let justadded = Goal(nameNew, typeNew, dueDate, desc);
    currentGoals.push(justadded);
}
export const finished = () => {
  
}
var d = new Date();
let day = d.getDay();
let date = day + 'th';

// const jeff = Goal('Brush Teeth', 'Daily', 'by 11:59 PM', 'Brush my Teeth');
// currentGoals.push(jeff);
// const one = Goal('one', 'Daily', 'by 11:59 PM', 'one');
// currentGoals.push(one);
// const two = Goal('two', 'Daily', 'by 11:59 PM', 'two');
// currentGoals.push(two);

//  export const DailyGoal = (name) => {
//     // simply create a person and pull out the sayName function with destructuring assignment syntax!
//     const {sayName} = ObjGoal(name);
//     name;
//     const doSomethingNerdy = () => console.log('nerd stuff');
//     return {name, sayName, doSomethingNerdy};
//   } 
