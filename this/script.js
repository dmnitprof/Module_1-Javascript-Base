const student = {
    stack: ['HTML'], level: 1, improveLevel: function () {
        this.level++
        if (this.level === 2) {
            this.stack.push('CSS')
            this.level++
        }
        if (this.level === 3) {
            this.stack.push('JavaScript')
            this.level++
        }
        if (this.level === 4) {
            this.stack.push('React')
            this.level++
        }
        if (this.level === 5) {
            this.stack.push('NodeJS')
            this.level++
        }
        if (this.level > 5) {
            alert('Студент выучил все технологии!')
        }
        return this
    }
}
console.log(student.improveLevel())
const dog = {
    name: 'Чарли', type: 'Собака', makeSound() {
        return 'Гав-Гав';
    }
};
const bird = {
    name: 'Петя', type: 'Воробей', makeSound() {
        return 'Чик-чирик';
    }
}

function makeDomestic(isDomestic) {
    this.isDomestic = isDomestic
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound.call(this)}`)
    return this
}

const makeDomesticDog = makeDomestic.bind(dog, true)
makeDomesticDog()
makeDomestic.call(bird, true)
makeDomestic.apply(bird, [true])


const footballer = {
    fullName: 'Cristiano Ronaldo',
    attack() {
        console.log(`${this.fullName} сейчас с мячом и начинает атаку!`)
    },
    scoreGoal(sound) {
        console.log(`${this.fullName} забил гол! Вот это да!`)
        this.celebrate(sound)
    },
    celebrate(sound) {
        console.log(sound)
    },
    goToSubstitution(newPlayer) {
       this.newPlayer =  newPlayer
           console.log(`${this.fullName} уходит на замену. На поле выходит ${this.newPlayer}`)
    }
}
const attack = footballer.attack.bind(footballer)
attack()
footballer.scoreGoal.call(footballer, 'Сиииии')
footballer.goToSubstitution.apply(footballer, ['Paulo Dibala'])

const  car = {
    name: 'aaa',
    test() {
        console.log('here', this)
    }
}

const test = car.test
test()