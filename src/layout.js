import Icon from './logo.png';

export const layout = (currentGoals) => {
    //Header and Logo
    const header = document.querySelector('header');
    const logo = new Image();
    logo.src = Icon;
    logo.id = 'icon';
    header.prepend(logo);
    const body = document.querySelector('body');
    const board = document.createElement('div');
    board.classList.add('board');
    board.id = 'goalBoard';

    //fill board with empty goal items
    let limit = 0; //set number ID
    for (let i=0; i<3; i++){
        const row = document.createElement('div')
        row.classList.add('row');
        for (let x=0; x<3; x++){
            const col = document.createElement('div');
            col.classList.add('goalItem');
            row.appendChild(col)
            limit++;
            col.id = limit;
        }
        board.appendChild(row);
        
    }
    body.appendChild(board);

    //New Goal Form
    const formDiv = document.createElement('div');
    const newGoal = document.createElement('form');
    formDiv.classList.add('goalForm');
    const formTitle = document.createElement('h3');
    formTitle.innerText = 'New Goal Form'; 
    newGoal.appendChild(formTitle);

    //NAME 
    const name = document.createElement('input');
    name.id = 'name';
    name.type = "text";
    name.placeholder = 'Goal Name';
    name.setAttribute("required", "");     
    name.required = true; 
    newGoal.appendChild(name);

    //GOAL TYPE STARTING WITH DAILY 
    const typeTitle = document.createElement('h3');
    typeTitle.innerText = 'Is this an objective or a daily goal?';
    newGoal.appendChild(typeTitle);
    const goaltype = document.createElement('div');
    goaltype.classList.add('goalType');
    const dailyLabel = document.createElement('label');
    dailyLabel.htmlFor = 'daily';
    dailyLabel.innerText = 'Daily';
    const daily = document.createElement('input');
    daily.id = 'daily';
    daily.type = 'radio';
    daily.value = 'daily';
    daily.name = 'goal type';
    daily.addEventListener('click', noDate)
    //OBJ
    const objLabel = document.createElement('label');
    const objective = document.createElement('input');
    objLabel.htmlFor = 'objective';
    objective.type = 'radio';
    objective.value = 'objective';
    objective.name = 'goal type';
    objective.id = 'obj';
    objective.checked = true;
    objective.addEventListener('click', noDate)

    //add Daily and Obj
    objLabel.innerText = 'Objective';
    objLabel.appendChild(objective);
    goaltype.appendChild(objLabel);
    dailyLabel.appendChild(daily)
    goaltype.appendChild(dailyLabel);
    newGoal.appendChild(goaltype);

    //DATE input
    const date = document.createElement('div');
    const dateTitle = document.createElement('h3');
    dateTitle.innerText = 'Due Date:';
    newGoal.appendChild(dateTitle);
    date.classList.add('goalType');
    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.id = 'date';
    dueDate.setAttribute("type", "date");
    date.appendChild(dueDate);
    newGoal.appendChild(date);

    //description input 
    const descTitle = document.createElement('h3');
    descTitle.innerText = 'Description';
    newGoal.appendChild(descTitle);
    const description = document.createElement('div');
    description.classList.add('goalType');
    const desc = document.createElement('input');
    desc.type = 'textbox';
    desc.id= 'desc';
    desc.placeholder = 'describe your goal here!';
    description.appendChild(desc)
    newGoal.appendChild(description);

    //submit button
    const submit = document.createElement('div');
    submit.innerText = 'Create Goal';
    submit.id = 'submit';
    newGoal.appendChild(submit);

    //cancel button
    const cancel = document.createElement('div');
    cancel.innerText = 'Cancel';
    cancel.id = 'cancel';
    cancel.addEventListener('click', () => {
        formDiv.classList.remove('open');
    })
    newGoal.appendChild(cancel);


    function openGoalForm() {
        formDiv.classList.add('open');
    }

    formDiv.appendChild(newGoal)
    body.appendChild(formDiv);

    function noDate() {
        var date = new Date();
        var currentDate = date.toISOString().slice(0,10);
        var currentTime = date.getHours() + ':' + date.getMinutes();
        if (document.getElementById('daily').checked) {
            dueDate.disabled = true;
            dueDate.value = currentDate;
        } else if (document.getElementById('obj').checked){
            dueDate.disabled = false;
            dueDate.value = '';
        }
    }


    const controlPanel = document.createElement('footer');
    const controls = document.createElement('div');
    const create = document.createElement('div');
    create.classList.add('addGoalBtn');
    create.innerText= '+';
    create.addEventListener('click', openGoalForm);

    controls.appendChild(create);
    controlPanel.appendChild(controls);
    body.appendChild(controlPanel);
}