let people = [
    {
        name: 'Malika',
        age: 12,
        budget: 20000,
        rent: 15,
        expenses: [
            {
                total: 2000,
                title: 'sousages'
            },
            {
                total: 1200,
                title: 'mobile phone'
            },
            {
                total: 3000,
                title: 'car'
            },
        ]
    },
    {
        name: 'Diyor from 611 gr',
        age: 22,
        budget: 20000,
        rent: 22,
        expenses: [{
                total: 1500,
                title: 'sousages'
            },
            {
                total: 2200,
                title: 'sousages width ketchup'
            },
            {
                total: 3500,
                title: 'sousages'
            },
        ]
    },
    {
        name: 'Aziz',
        age: 19,
        budget: 20200,
        rent: 22,
        expenses: [{
                total: 100,
                title: 'girls'
            },
            {
                total: 4200,
                title: 'girls'
            },
            {
                total: 300,
                title: 'girls'
            },
        ]
    },
    {
        name: 'Amir',
        age: 34,
        budget: 27000,
        rent: 12,
        expenses: [{
                total: 2000,
                title: 'study'
            },
            {
                total: 1000,
                title: 'games'
            },
            {
                total: 5000,
                title: 'clothes'
            },
        ]
    },
    {
        name: 'Maxmudbek',
        age: 42,
        budget: 15000,
        rent: 12,
        expenses: [{
                total: 1111,
                title: 'sigarets'
            },
            {
                total: 1900,
                title: 'chilim'
            },
            {
                total: 6000,
                title: 'anasha'
            },
        ]
    },
    {
        name: 'Samir',
        age: 9,
        budget: 12000,
        rent: 12,
        expenses: [{
                total: 1200,
                title: 'food'
            },
            {
                total: 990,
                title: 'car'
            },
            {
                total: 7000,
                title: 'protain'
            },
        ]
    },
    {
        name: 'Badriddin',
        age: 24,
        budget: 2000,
        rent: 12,
        expenses: [{
                total: 1000,
                title: 'taxi'
            },
            {
                total: 8000,
                title: 'rich girls'
            },
            {
                total: 700,
                title: 'on himself'
            },
        ]
    }
]

let arr_ages = [
    {
        from: 20,
        to: 40,
        count: 0
    },
    {
        from: 10,
        to: 20,
        count: 0
    },
    {
        from: 30,
        to: 50,
        count: 0
    }
]
// Найти человека который тратит больше всех и кто меньше всех
function setUp(arr){
   for(let item of arr){
      item.totalExp = 0
      for(let elem of item.expenses){
         item.totalExp += elem.total
      }
   }

}
setUp(people)

let bigExpenser = []
let lowExpenser = []
let bigExp = people.reduce((a, b) => a.totalExp > b.totalExp ? a : b)
bigExpenser.push(bigExp)
let lowExp = people.reduce((a, b) => a.totalExp < b.totalExp ? a : b)
lowExpenser.push(lowExp)

// Найти того кто больше всех платит налоги
let moreRenter = []
let rents = people.reduce((a, b) => a.rent > b.rent ? a: b) 
moreRenter.push(rents)
// найти средний расход всех людей из массива 
let mediumExp = []
for(let item of people){
    let medExp = item.totalExp++
    mediumExp.push(medExp)
}
mediumExp = mediumExp.reduce((a, b) => a + b) / 4


// Создать массив с теми же самыми людьми только к бьюджету прибавив 5000
let people2 = []
for(let item of people){
    people2.push(item)
}
for(let item of people2){
    item.budget = item.budget + 5000
}
// с помощью циклов в цикле посчитать к какому из возрастов подходать наши участники из массива (посчитать в массиве arr_ages в ключе count)
for(let item of people){
    for(let elem of arr_ages){
        if(item.age > elem.from && item.age < elem.to){
            elem.count++
        }
    }
}
