// class employee {

//     // constructor (name, streetAddress){
//     //     this.name = name;
//     //     this.streetAddress = streetAddress;
//     //     }
//     // }
    
//     // const employee1 = new employee ("Obi-Wan", "66 Death Star Road");
    
//     // console.log(employee1);



const employee = {};

employee.name = "Obi-Wan Kenobi";
employee.streetAddress = "66 Death Star Road";

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
 ...obj, [key] : value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
     obj [key] = value;
     return obj;
}

function deleteFromEmployeeByKey(obj, key){
    const newEmployee = {...obj};
    delete obj.key;
    return {newEmployee} 
    }

function destructivelyDeleteFromEmployeeByKey(obj, key){
    const newEmployee = {obj};
    delete obj[key];
    return (employee);
}

