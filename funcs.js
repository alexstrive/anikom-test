const task1Data = [
    {name: 'Alice', age: 30},
    {name: 'Bob', age: 25},
    {name: 'Charlie', age: 35},
]


const task2Data = [
    {name: 'Alice', age: 30, city: 'New York'},
    {name: 'Bob', age: 25, city: 'Los Angeles'},
    {name: 'Charlie', age: 35, city: 'New York'},
    {name: 'David', age: 40, city: 'Los Angeles'}
]


// Task 1
// functional
function calculateAverageAge(data) {
    return data.reduce((acc, person) => acc + person.age, 0) / data.length
}

// procedural
function calculateAverageAgeImperative(data) {
    let sum = 0
    for (const person of data) {
        sum += person.age
    }
    return sum / data.length
}

// Task 2
// functional
function groupPeopleByCity(data) {
    return data.reduce((acc, person) => ({
        ...acc,
        [person.city]: [...(acc[person.city] ? acc[person.city] : []), person]
    }), {})
}

// procedural
function groupPeopleByCityImperative(data) {
    const result = {}

    for (const person of data) {
        if (result[person.city]) {
            result[person.city] = [...result[person.city], person]
        } else {
            result[person.city] = [person]
        }
    }

    return result
}

export default {groupPeopleByCity, calculateAverageAge, task1Data, task2Data}