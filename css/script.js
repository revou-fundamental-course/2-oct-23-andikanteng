function konversiSuhu() {
    // Mengambil nilai suhu dari input
    let suhuCelsius = document.getElementById("celsius").value;
  
    // Mengambil nilai jenis konversi dari select
    let jenisKonversi = document.getElementById("konversiSuhu").value;
  
    // Melakukan konversi suhu
    let suhuHasil;
    switch (jenisKonversi) {
      case "fahrenheit":
        suhuHasil = (suhuCelsius * 9 / 5) + 32;
        break;
    
    }
  
    // Menampilkan hasil konversi
    document.getElementById("hasil").innerHTML = `Hasil dari konversi: ${suhuHasil}`;





  }
  