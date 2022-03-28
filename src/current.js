import { currentGoals } from "./createGoal";
import {remove} from "./remove";

export const current = () => {
    let cells = document.querySelectorAll('.goalItem');

    cells.forEach(element => {
     element.classList.remove('fin');   
    });

    for (let i =0; i<currentGoals.length; i++) {
        //find cell
        let cell = document.getElementById(i+1);
        cell.innerHTML= '';
        let goal = currentGoals[i];
        //goal title
        const goalTitle = document.createElement('div');
        goalTitle.innerText = goal.nameNew;
        goalTitle.classList.add('goalTitle');
        //goal name
        const goalContent = document.createElement('div');
        goalContent.classList.add('goalContent');
        const name = document.createElement('div');
        name.innerText = goal.nameNew;
        goalContent.appendChild(name);
        //goal type
        let type = document.createElement('div');
        type.innerText = goal.typeNew;
        goalContent.appendChild(type);
        //goal completion date
        let date = document.createElement('div');
        date.innerText = goal.dueDate;
        goalContent.appendChild(date);
        //goal description 
        let desc = document.createElement('div');
        desc.innerText = goal.desc;
        goalContent.appendChild(desc);
        //remove button
        let remove = document.createElement('button');
        remove.innerText = 'remove';
        remove.classList.add('remove');

        //complete button 
        if (goal.fin == true) {
            goalTitle.innerText = goalTitle.innerText+ ' ✓';
            cell.classList.add('fin');

        } else {
            let complete = document.createElement('button');
            complete.innerText = '✓';
            complete.classList.add('complete');
            complete.addEventListener('click', () => {
                goal.fin = true
                cell.classList.add('fin');
                goalTitle.innerText = goalTitle.innerText+ ' ✓';
            })
            goalContent.appendChild(complete);
            
        }
        //add to page
        goalContent.appendChild(remove);
        cell.appendChild(goalContent);
        cell.append(goalTitle)
    }

    //remove button logic
    const removeButton = document.querySelectorAll('.remove');
removeButton.forEach(
    function (item) {
        item.addEventListener('click', () => {
            item = item.parentElement;
            remove(item.parentElement);
            current();
        })  
    }
)
}