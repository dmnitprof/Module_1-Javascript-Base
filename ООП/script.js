// class Student {
//
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//         this.status = 'Junior'
//     }
//
//     setTechnologies(technologies) {
//         this.technologies = technologies
//     }
//
//     setNewStatus(newStatus) {
//         this.status = newStatus
//     }
// }
//
// const student = new Student('Maxim', 20)
//
// student.setTechnologies(['HTML', 'CSS', 'JavaScript'])
//
// student.setNewStatus('Middle')
//
// console.log(student)

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     compareAge(newPerson = new Person()) {
//         if (newPerson.age < this.age) {
//             alert(`${this.name} старше, чем ${newPerson.name}`)
//         } else {
//             alert(`${this.name} младше, чем ${newPerson.name}`)
//         }
//     }
// }
//
// const person1 = new Person('Максим', 24)
// const person2 = new Person('Светлана', 36)
// const person3 = new Person('Ирина', 23)
//
// person1.compareAge(person2) // Максим младше, чем Светлана
//
// person2.compareAge(person3) // Светлана старше, чем Ирина
// person3.compareAge(person1) // Ирина младше, чем Максим

class CarService {
    static DefaultWorkingHours = {
        from: '8:00',
        till: '20:00'
    }

    constructor(name, workingHours ) {
        this.name = name
        this.workingHours = workingHours
        if (!workingHours) {
            this.workingHours = CarService.DefaultWorkingHours
        }
    }


    repairCar(carName = null) {
        if (!carName) {
           console.error('Вам необходимо указать название машины, чтобы ее отремонтировать')
        }
        const from = +this.workingHours.from.split(':', 1).join('')
        const till = +this.workingHours.till.split(':', 1).join('')
        console.log(from)
        console.log(till)
        if(from === 8 && till === 20){
            alert(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`)

        }else{
            alert('К сожалению, мы сейчас закрыты. Приходите завтра')
        }
    }

}


const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:00' })
console.log(carService)
carService.repairCar('BMW')