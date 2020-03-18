export const people = [
  {
    id: "0",
    name: "Hong",
    age: 30,
    gender: "male"
  },
  {
    id: "1",
    name: "Jung",
    age: 31,
    gender: "male"
  },
  {
    id: "2",
    name: "Lee",
    age: 33,
    gender: "female"
  },
  {
    id: "3",
    name: "Yeun",
    age: 20,
    gender: "female"
  },
  {
    id: "4",
    name: "JH",
    age: 40,
    gender: "male"
  },
  {
    id: "5",
    name: "YLee",
    age: 29,
    gender: "female"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};
