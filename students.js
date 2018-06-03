console.log('hello');

const initRoom ='3a';
const initArray =['niels', 'mads'];

function StudentsFactory(array_init=[], room_init){

    const add = (name) => {
        array_init.push(name);
    }

    const Delete = (name) => {
       
        let index = array_init.indexOf(name);
        if (index > -1) {
          array_init.splice(index, 1);
        }
    }
  
    const printAll = () => {
        console.log(array_init);
    }

    const deleteAll = () => {
        array_init.splice(0,array_init.length);
    }

    const changeRoom = (room) =>{
        room_init = room;
    }
   const obj = {
       add:add,
       Delete:Delete,
       printAll:printAll,
       deleteAll:deleteAll,
       changeRoom:changeRoom,
       array:array_init,
       room:room_init
    }
    return obj;
}

const students = StudentsFactory(initArray, initRoom);

console.log(students.array,students.room);


students.add('Younes');
console.log(students.array);
students.add('Mads');
console.log(students.array);

students.printAll();

students.changeRoom('3b');
console.log(students.room);

students.Delete('Younes');
console.log(students.array);

students.deleteAll();
console.log(students.array);

