class Person{
   constructor(name, job, age) {
    this.name = name
    this.job = job
    this.age = age
   }

   exercise() {
    console.log("Running is fun! - said no one ever")
   }

   fetchJob() {
    console.log('${this.name} is a ${this.job}')
   }
}

class Programmer extends Person{
    constructor(name, job, age, language = []) {
        super( name, job, age)
        this.language = language
        this.isBusy = true
    }

    completeTask() {
        this.isBusy = false
    }

    acceptNewTask() {
        this.isBusy = true
    }

    offerNewTask() {
        this.isBusy === true ? console.log('${this.name} cant accept any new tasks right now') : console.log('${this.name} would love toaccept any new tasks right now')
    }

    learnLanguage (languageBeingLearned) {
        this.language.push(languageBeingLearned)
    }

    listLanguages() {
        console.log(this.language)
    }
}

const dp = new Programmer("Dp", "Software Engineer", 23, ["javascript"])
const adriann = new Programmer("Adriann", "Software Enginner Apprentice", 23, ["javascript"])

dp.completeTask()
dp.offerNewTask()
dp.listLanguages()
dp.learnLanguage("java")
dp.listLanguages()

adriann.completeTask()
adriann.offerNewTask()
adriann.listLanguages()
adriann.learnLanguage("java")
adriann.learnLanguages("python")
adriann.listLanguages()