import { describe } from 'eslint/lib/rule-tester/rule-tester';
import { sports, sortTableByColumn } from '../src/data.js';


// describe('filter test', ()=>{
//     test('it is a function', ()=>{
//       expect(typeof sports).toBe('function');
//     })
//     test('id should show the element of an array', () => {
//       const obj = {
//         "name": "Giovanni Abagnale",
//         "gender": "M",
//         "height": "198",
//         "weight": "90",
//         "sport": "Rowing",
//         "team": "Italy",
//         "noc": "ITA",
//         "age": 21,
//         "event": "Rowing Men's Coxless Pairs",
//         "medal": "Bronze"
//       };
//       expect(obj.sport).toEqual('Rowing');
//     });

    
    
//})

describe('Sort filter test', ()=>{
    test('it is a function', ()=>{
  expect(typeof sortTableByColumn).toBe('function');
    })
    test('id should sort ascendently the elements of an array', () => {
  const obj = [{
    "name": "Giovanni Abagnale",
    "gender": "M",
    "height": "198",
    "weight": "90",
    "sport": "Rowing",
    "team": "Italy",
    "noc": "ITA",
    "age": 21,
    "event": "Rowing Men's Coxless Pairs",
    "medal": "Bronze"
  },
  {
    "name": "Luc Abalo",
    "gender": "M",
    "height": "182",
    "weight": "86",
    "sport": "Handball",
    "team": "France",
    "noc": "FRA",
    "age": 31,
    "event": "Handball Men's Handball",
    "medal": "Silver"
  },
  {
    "name": "Patimat Abakarova",
    "gender": "F",
    "height": "165",
    "weight": "49",
    "sport": "Taekwondo",
    "team": "Azerbaijan",
    "noc": "AZE",
    "age": 21,
    "event": "Taekwondo Women's Flyweight",
    "medal": "Bronze"
  },
 ]
  expect(obj.sortTableByColumn).toEqual[21,21,31];
});

test('id should sort descendently the elements of an array', () => {
  const obj = [{
    "name": "Giovanni Abagnale",
    "gender": "M",
    "height": "198",
    "weight": "90",
    "sport": "Rowing",
    "team": "Italy",
    "noc": "ITA",
    "age": 21,
    "event": "Rowing Men's Coxless Pairs",
    "medal": "Bronze"
  },
  {
    "name": "Luc Abalo",
    "gender": "M",
    "height": "182",
    "weight": "86",
    "sport": "Handball",
    "team": "France",
    "noc": "FRA",
    "age": 31,
    "event": "Handball Men's Handball",
    "medal": "Silver"
  },
  {
    "name": "Patimat Abakarova",
    "gender": "F",
    "height": "165",
    "weight": "49",
    "sport": "Taekwondo",
    "team": "Azerbaijan",
    "noc": "AZE",
    "age": 21,
    "event": "Taekwondo Women's Flyweight",
    "medal": "Bronze"
  },
 ]
  expect(obj.sortTableByColumn).toBeFalsy[31,21,21];
});
});

describe('sports', () => {
  it('debería ser una función', () => {
    expect(typeof sports).toBe('function');
  });
  it('debería filtrar por "sports"', () => {
    expect(sports().toEqual(["Rowing", "Taekwondo", "Handball", "Wrestling", "Gymnastics", "Swimming", "Basketball", "Boxing", "Volleyball", "Athletics", "Rugby Sevens", 
    "Judo", "Rhythmic Gymnastics", "Weightlifting", "Equestrianism", "Badminton", "Water Polo", "Football", "Fencing", "Shooting", "Sailing", 
    "Beach Volleyball", "Canoeing", "Hockey", "Cycling", "Tennis", "Diving", "Table Tennis", "Triathlon", "Archery", "Synchronized Swimming",
     "Modern Pentathlon", "Trampolining", "Golf"])
  );

  })
})
