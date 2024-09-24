import Team from "../Team";

describe('Проверка методов класса Team', () => { 
   test('Проверка добавления ', () => {
     let person = 'Person1';
     let team = new Team();
     team.add(person);
     expect(team.members.size).toBe(1);
   });

  test('Проверка запрета добавления c одинаковым именем', () => {
    let person1 = 'Person1';
    let team = new Team();
    team.add(person1);
    expect(() => team.add(person1)).toThrowError("Такой персонаж существует");
  });

   test('Проверка добавления нескольких сразу ', () => {
     let persons = ['Person1','Person1','Person2', 'Person4'];
     let team = new Team();
     team.addAll(persons);
     //console.log(team.members);
     expect(team.members.size).toBe(3);
   });


   test('Проверка вывода массива ', () => {
    const persons = ['Person1','Person1','Person2', 'Person4'];
    const expPersons = ['Person1','Person2', 'Person4']
    let team = new Team();
    team.addAll(persons);
    const result = team.toArray();
    console.log(result);
    expect(result).toEqual(expPersons);
  });


});
