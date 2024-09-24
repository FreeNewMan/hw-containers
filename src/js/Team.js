import Character from "./Character";

export default class Team {
  constructor(){
    this.members = new Set();
  }

  add(personName) {
    if (this.checkExist(personName)) {
      throw new Error('Такой персонаж существует');
    }
    const obj = new Character(personName);
    this.members.add(obj);
  }

  addAll(persons) {
    let personNames = new Set()
    persons.forEach(element => {
      personNames.add(element);
    });
    for (const personItem of personNames) { 
      this.add(personItem);
    }
  }

  checkExist(prsName){
    for (const personItem of this.members) {
      if (prsName === personItem.name) {
        return true;
      }
    }
    return false;
  }

  toArray(){
    return Array.from(this.members).reduce((result, item) => {result.push(item.name); return result;}, []);
  }

}
