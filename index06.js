function getAngkaTerbesarKedua(dataNumbers){

   let max = -Infinity,
   result = Infinity;

   if(Array.isArray(dataNumbers)){
    for (const value of dataNumbers) {
        let number = Number(value);
        if (number > max) {
          [result, max] = [max, number];
        }else if (number < max && number > result){
          result = number;
        }
     }
        }else if (dataNumbers == null) {
         return "Error : Harus diisi dataAngka";
         }else {
         return "Error : Bukan dataAngka";
        }
    return result;
}


const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8]

console.log(getAngkaTerbesarKedua(dataAngka))
//8
console.log(getAngkaTerbesarKedua(0))
//"Error: Bukan dataAngka"
console.log(getAngkaTerbesarKedua())
//"Error: Harus diisi dataAngka"