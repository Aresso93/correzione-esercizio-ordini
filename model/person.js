class Person{

    constructor(name, surname, dob, gender){
        this.name = name;
        this.surname = surname;
        this.dob = dob;
        this.gender = gender;
    }

    get age(){

        const nowTimeStamp = new Date().getTime();              //qui abbiamo i millisecondi passati dal 1 gennaio 1970 alla data attuale
        const dobTimeStamp = this.dob.getTime();               //qui abbiamo i millisecondi passati dal 1 gennaio 1970 alla data di nascita

        const deltaTimeStamp = nowTimeStamp - dobTimeStamp;
        const age = deltaTimeStamp / 1000 / 60 / 60 / 24 / 365;    //questa è l'età dell'employee non arrotondata. Millisecondi / 1000 = secondi. Secondi / 60 = minuti. Minuti / 60 = ore. Ore / 24 = giorni. Giorni = 365 = anni (non tiene conto dei bisestili, ma per ora non è così importante)
        //const age = Math.floor(deltaTimeStamp / (1000 * 60 * 60 * 24 * 365)); questa commentata è l'età dell'employee in anni arrotondata
        return age;
    }

    toString(){
    return 'Nome: ' + this.name + '\n' +
        'Cognome: ' + this.surname + '\n' +
        'Data di nascita: ' + this.dob + '\n' +
        'Età: ' + this.age + '\n' +
        'Genere: ' + this.gender + '\n';
    }

}