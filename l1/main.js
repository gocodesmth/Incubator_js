// Объекты
// - составной (комбинированный)
// - ссылочный тип данных

// const user = { name: "Bob" }
// const user2 = user
// user2.name = "Alex"
// console.log(user.name)

// const arr = [1, 2, 3, 4]
// arr.push(5) // мутирует массив
// // arr.pop() // remove last elem
// // arr.shift() // remove first elem
// // arr.unshift(5) //insert elem at the start
// // семантичный - логическое наименование итемов
// const newarr = arr.concat(6); // копирует массив (добавляет 6 в конце массива), не мутирует исходный массив
// console.log(arr);

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
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true,
    }
]

const newUser = {
    id: 5,
    name: 'Farid',
    isStudent: true,
}

// // CRUD Operations -> Create-Read-Update-Delete

// // Create
// const copyUsers = users.concat(newUser)
// console.log(copyUsers);
// // Read
// // Update

// const changeUserStatus = (u) => u.id === 2 ? { ...u, isStudent: false } : u // ... -> spread
// const updatedUsers = copyUsers.map(changeUserStatus) // map -> иммутабельная операция копирования объекта   
// // //Delete
// const deletedUsers = updatedUsers.filter(u => u.id !== 4) // filter -> иммутабельная операция удаления
// console.log(deletedUsers);
// console.log(deletedUsers === updatedUsers);
// console.log(copyUsers === updatedUsers);

const superUser = { // данные глубокой вложенности - сложно изменять -> использовать реже
    "id": 1,
    "name": "Leanne Graham",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildergard.org",
    "company": {
        "name": "Romanguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net,",
        "bs": "harness real-time e-markets"
    }
}


const superUserCopy = { ...superUser, company: { ...superUser.company, catchPhrase: "harness" } }

const superUserCopy2 = { ...superUser, address: { ...superUser.address, geo: { ...superUser.address.geo, lng: "85.00" } } }

const superUserCopy3 = { ...superUser, email: "asdfgh@april.com" }
