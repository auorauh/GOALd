import './style.css';
import {create, Goal, currentGoals} from './createGoal';
import {layout} from './layout';
import {current} from './current';

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        let add = ( localStorage.getItem(keys[i]) );
        console.log(add);
        add = JSON.parse(add)
        currentGoals.unshift(add);
    }
    
    return values;
}
allStorage();
layout();
current();

const submit = document.querySelector('#submit');
submit.addEventListener('click', () => {
    create();
    current();
    let close = document.querySelector('.goalForm');
    close.classList.remove('open');
})

const complete = document.querySelectorAll('.complete');
    complete.forEach(
        function (item) {
            item.addEventListener('click', () => {
                current();
            })  
        }
    )

