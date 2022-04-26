//function isValidPassword(email){
    const isValidPassword = (givenPassword) => {
        var rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(rgx.test(givenPassword)){
            return true;
        }else if(!givenPassword){
            return "Error: Password tidak memenuhi syarat";
        }else if(!(/[a-z]/.test(givenPassword))){
            return false;
        }else if(!(/[A-Z]/.test(givenPassword))){
             return false;
        }else if(givenPassword.length > 7){
            return true;
        }else if(isNaN(givenPassword)){
            return false;
        }}

console.log(isValidPassword("Meong2021"))
console.log(isValidPassword("meong2021"))
console.log(isValidPassword("@eong"))
console.log(isValidPassword("Meong2"))
console.log(isValidPassword(0))
console.log(isValidPassword())