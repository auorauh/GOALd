import { currentGoals } from "./createGoal";

export const remove = (item) => {
    item =(item.id)-1;
    let goal = currentGoals[item]
    let cell = document.getElementById(item+1);
    var index = currentGoals.indexOf(goal);
            cell.classList.remove('fin');
            cell.innerHTML = ""
            if (index > -1) {
                currentGoals.splice(index, 1);
                window.localStorage.removeItem(goal.nameNew);
              }
              let arr = document.querySelectorAll('.goalItem')
            arr.forEach(element => {
                element.innerHTML = "";
            });
}
