// Объекты
// - составной (комбинированный)
// - ссылочный тип данных

const user = { name: "Bob" }
const user2 = user
user2.name = "Alex"
console.log(user.name)

const arr = [1, 2, 3, 4]
arr.push(5) // мутирует массив
// arr.pop() // remove last elem
// arr.shift() // remove first elem
// arr.unshift(5) //insert elem at the start
// семантичный - логическое наименование итемов
const newarr = arr.concat(6); // не мутирует
console.log(arr);

const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 1,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 1,
        name: 'Donald',
        isStudent: true,
    }
]

const newUser = {
    id: 5,
    name: 'Farid',
    isStudent: true,
}
console.log(newUser);

// CRUD -> Create-Read-Update-Delete
