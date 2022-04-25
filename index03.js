function checkEmail(email){
    var rgx = /^\S+([\.-]?\S+)*@\S+([\.-]?\S+)*(\.\S{2,3})+$/;

    if(rgx.test(email)){
        return "VALID";
    }else if(!email){
        return "Error: Email wajib diisi";
    }
    else if(!isNaN(email)){
        return "Error: Penulisan email salah";
     }
    else if(email.indexOf("@") < 1){
        return "Error: Email tidak terdeteksi";
    }
    else{
        return "INVALID";
    }
}

console.log(checkEmail("ihtisyam376@study.co.id"));
console.log(checkEmail("ihtisyam376@study.com"));
console.log(checkEmail("ihtisyam376@study"));
console.log(checkEmail("ihtisyam376"));
console.log(checkEmail(3377));
console.log(checkEmail());