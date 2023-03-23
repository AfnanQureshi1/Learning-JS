const copy = (obj) => {
    const copy = Object.create(Object.getPrototypeOf(obj));
    const propNames = Object.getOwnPropertyNames(obj);
    propNames.forEach((name) => {
      const desc = Object.getOwnPropertyDescriptor(obj, name);
      Object.defineProperty(copy, name, desc);
    });
    return copy;
  };
  
  const obj1 = { a: 1, b: 2 };
  const obj2 = copy(obj1); // obj2 looks like obj1 now
  console.log(obj1);
  console.log(obj2);

  function Obj () {
    this.name = "max",
    this.greet = function(){
        console.log(`hello i am ${this.name}`);
    }
  }
  
  Obj.prototype.greetGeneral = function () {
    console.log("greetings");
  }
  var obj = new Obj();
  obj.name = "afnan";
  obj.greet();

  var anotherobj = new Obj();
  anotherobj.greet();
  anotherobj.greetGeneral();