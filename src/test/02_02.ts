type LocalCityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type TechObjType = {
    id: number
    title: string
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechObjType>
}

export const student: StudentType = {
    id: 1,
    name: "Vlad",
    age: 29,
    isActive: true,
    address: {
        streetTitle: "Kommunistitheskaya",
        city: {
            title: "Bender",
            countryTitle: "Moldova",
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML",
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)