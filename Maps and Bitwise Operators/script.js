const people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 40 },
    { name: "Alice", age: 35 },
  ];
  
  // Using map to create a new array of objects with an additional "greeting" property
  const greetingPeople = people.map((person) => {
    const greeting = `Hello, my name is ${person.name} and I am ${person.age} years old.`;
    return { ...person, greeting };
  });
  
  console.log(greetingPeople);
  