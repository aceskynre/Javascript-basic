const dataPenjualanNovel = [
{
    idProduct: "BOOK002421",
    namaProduk: "Pulang-Pergi",
    Penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
},
{
    idProduct: "BOOK002325",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
},
{
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
},
{
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
},
]

let idrCurrency = Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
});

function getInfoPenjualan(dataPenjualan){

    let TotalKeuntungan = 0;
    let TotalModal = 0;
    let PersentaseKeuntungan = 0;
    let DaftarBukuTerlaris = 0;
    let ProdukBukuTerlaris = "";
    let PenulisTerlaris = "";

    for (let i in dataPenjualan) {
        if (
          typeof dataPenjualan[i].namaProduk != "string" ||
          typeof dataPenjualan[i].penulis != "string" ||
          typeof dataPenjualan[i].totalTerjual != "number" ||
          typeof dataPenjualan[i].hargaBeli != "number" ||
          typeof dataPenjualan[i].hargaJual != "number" ||
          typeof dataPenjualan[i].sisaStok != "number"
        )
    
        TotalKeuntungan += dataPenjualan[i].hargaJual * dataPenjualan[i].totalTerjual 
                         - dataPenjualan[i].hargaBeli * (dataPenjualan[i].totalTerjual 
                        + dataPenjualan[i].sisaStok);
        TotalModal += dataPenjualan[i].hargaBeli * (dataPenjualan[i].totalTerjual 
                    + dataPenjualan[i].sisaStok);
        PersentaseKeuntungan = (TotalKeuntungan / TotalModal) * 100;
        if (dataPenjualan[i].totalTerjual > DaftarBukuTerlaris) {
            DaftarBukuTerlaris = dataPenjualan[i].totalTerjual;
            ProdukBukuTerlaris = dataPenjualan[i].namaProduk;
            PenulisTerlaris = dataPenjualan[i].penulis;
}}
return (
    result = {
        totalKeuntungan: idrCurrency.format(TotalKeuntungan),
        totalModal: idrCurrency.format(TotalModal),
        persentaseKeuntungan: PersentaseKeuntungan.toFixed(1) + "%",
        produkBukuTerlaris: ProdukBukuTerlaris,
        penulisTerlaris: PenulisTerlaris,
    });
}

console.log(getInfoPenjualan(dataPenjualanNovel))