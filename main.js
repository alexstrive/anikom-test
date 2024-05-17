import './style.css'
import funcs from './funcs.js'

const answer1 = funcs.calculateAverageAge(funcs.task1Data)
const answer2 = funcs.groupPeopleByCity(funcs.task2Data)

console.log(answer1)
console.log(answer2)

document.querySelector('#app').innerHTML = `
<div>
    <section>
        <h2>Task 1</h2>
        <b>Data</b>
        <pre>
        ${JSON.stringify(funcs.task1Data)}
        </pre>
        <b>Answer: </b>
        Average age is ${answer1}
    </section>
    <section>
        <h2>Task 2</h2>
        <b>Data</b>
        <pre>
        ${JSON.stringify(funcs.task2Data)}
        </pre>
        <b>Answer: </b>
        <pre>
        ${JSON.stringify(answer2)}
        </pre>
    </section>
</div>
`