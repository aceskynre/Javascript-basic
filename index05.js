function getSplitName(personName){
    if(typeof personName != "string"){
        return "Error: Bukan string"
    }

    let result = personName.split(" ");
    let name = {
        firstName : " ",
        middleName : null,
        lastName : null
    }
    
    if(result.length === 4){
        return "Error: This function is only for 3 characters name";
    }else if(result.length === 3){
        name.firstName = result[0]
        name.middleName = result[1]
        name.lastName = result[2]
    }else if(result.length === 2){
        name.firstName = result[0]
        name.lastName = result[1]
    }else{
        name.firstName = result[0]
    }    
    return name;
}

console.log(getSplitName("Aldi Daniela Pranata"));
// {firstName: 'Aldi', middleName: 'Daniela', lastName: 'Pranata'}
console.log(getSplitName("Dwi Kuncoro"));
// {firstName: 'Dwi', middleName: null, lastName: 'Kuncoro'}
console.log(getSplitName("Aurora"));
// {firstName: 'Aurora', middleName: null, lastName: null}
console.log(getSplitName("Aurora Areliya Sukma Darma"));
// Error: This function is only for 3 characters name
console.log(getSplitName(0));
// Error: Bukan string