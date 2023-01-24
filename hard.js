const personDetails = function(personName, personSsn){
    let pii = {
        name:personName,
        ssn:personSsn
    }

    return{
        getName: () => {
            return pii.name
        },
        getSsn: () => {
            return pii.ssn
        }
    }
}

const patientOne = personDetails('Adriann', 124271312)

console.log(patientOne.getName())
console.log(patientOne.getSsn())

// console.log(patientOne.name)
// console.log(patientOne.ssn)