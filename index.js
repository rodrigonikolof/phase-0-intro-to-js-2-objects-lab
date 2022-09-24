
// const employee = {};

// employee.name = "Obi-Wan Kenobi";
// employee.streetAddress = "66 Death Star Road";

// function updateEmployeeWithKeyAndValue(obj, key, value){
//     return {
//  ...obj, [key] : value,
//     }
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
//      obj [key] = value;
//      return obj;
// }

// function deleteFromEmployeeByKey(obj, key){
//     const newEmployee = {...obj};
//     delete obj.key;
//     return {newEmployee} 
//     }

// function destructivelyDeleteFromEmployeeByKey(obj, key){
//     const newEmployee = {obj};
//     delete obj[key];
//     return (employee);
// }



let employee = {
    name:'John',
    address: '123 George St Sydney',
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {...obj,[key] : value,};
}


function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key]=value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key){
   const obj1 = {...obj};
    delete obj1[key];
    return obj1;
}
function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}