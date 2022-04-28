const dataPenjualanPakAldi = [
    {
        namaProduct : "Sepatu Futsal Nike Vapor Academy 8",
        hargaSatuan : 760000,
        kategori : "Sepatu Sport",
        totalTerjual : 90,
    },
    {
        namaProduct : "Sepatu Warrior Tristan Black Brown Hight-Original",
        hargaSatuan : 960000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 37,
    },
    {
        namaProduct : "Sepatu Warrior Tristan Maroon Hight-Original",
        kategori : "Sepatu Sneaker",
        hargaSatuan : 360000,
        totalTerjual : 90,
    },
    {
        namaProduct : "Sepatu Warrior Rainbow Tosca Corduroy-[BNIB] Original",
        hargaSatuan : 120000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 90,
    },
]

function getTotalPenjualan (dataPenjualan){
   dataPenjualan = dataPenjualanPakAldi
   
    if(typeof dataPenjualan === "object"){
        let result = 0;
    for(let i = 0; i < dataPenjualan.length; i++){
        result += dataPenjualan[i].totalTerjual;
    }
    return result;
}
}

console.log(getTotalPenjualan(dataPenjualanPakAldi))
//307