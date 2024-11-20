 // var penumpang = [];

        // var tambahPenumpang = function(penumpang) {
        //     var namaPenumpang = prompt('Masukkan nama penumpang yang akan ditambahkan:');
        //     if (penumpang.length == 0) {
        //         penumpang.push(namaPenumpang);
        //         alert(namaPenumpang + ' berhasil ditambahkan ke dalam angkot.');
        //     } else {
        //         for (var i = 0; i < penumpang.length; i++) {
        //             if (penumpang[i] == undefined) {
        //                 penumpang[i] = namaPenumpang;
        //                 alert(namaPenumpang + ' berhasil ditambahkan ke kursi kosong.');
        //                 return penumpang;
        //             } else if (penumpang[i] == namaPenumpang) {
        //                 alert(namaPenumpang + ' sudah ada di dalam angkot.');
        //                 return penumpang;
        //             } else if (i == penumpang.length - 1) {
        //                 penumpang.push(namaPenumpang);
        //                 alert(namaPenumpang + ' berhasil ditambahkan ke kursi baru.');
        //                 return penumpang;
        //             }
        //         }
        //     }
        // };

        // var hapusPenumpang = function(penumpang) {
        //     var namaPenumpang = prompt('Masukkan nama penumpang yang akan dihapus:');
        //     if (penumpang.length == 0) {
        //         alert('Angkot masih kosong.');
        //     } else {
        //         for (var i = 0; i < penumpang.length; i++) {
        //             if (penumpang[i] == namaPenumpang) {
        //                 penumpang[i] = undefined;
        //                 alert(namaPenumpang + ' berhasil dihapus dari angkot.');
        //                 return penumpang;
        //             } else if (i == penumpang.length - 1) {
        //                 alert(namaPenumpang + ' tidak ada di dalam angkot.');
        //             }
        //         }
        //     }
        //     return penumpang;
        // };

        // while (true) {
        //     var aksi = prompt(
        //         'Masukkan yang anda ingin dilakukan:\n1. Naik Ke Angkot\n2. Turun Dari Angkot\n3. See penghasilan{Hanya Admin}\n4. See Angkot Utk Melihat Brp Penumpang Dan Siapa Saja{Hanya Admin}\n5. Tidak Jadi Masuk Angkot\n\nMasukkan nomor pilihan:'
        //     );

        //     if (aksi == '1') {
        //         tambahPenumpang(penumpang);
        //     } else if (aksi == '2') {
        //         hapusPenumpang(penumpang);
        //     } else if (aksi == '3') {

        //     } else if (aksi == '4') {

        //     } else if (aksi == '5') {
        //         var confirmm = confirm('apakah anda benar benar tidak ingin naik angkot? Ke');
        //         if (confirmm) {
        //             alert('Terima kasih! Penumpang saat ini: ' + penumpang.join(', '));
        //             break;
        //         } else {

        //         }
        //     } else {
        //         alert('Pilihan tidak valid. Silakan masukkan angka 1, 2, atau 3. hmm atau gak sama sekali');
        //     }
        // }

        // Data Angkot
        // var angkot = [
        //     { nama: 'Budi', tujuan: { 'Barru': 50000, 'Makassar': 30000, 'Jawa': 300000, 'Sumatra': 400000, 'Bali': 200000, 'Bandung': 250000, 'Surabaya': 270000, 'Medan': 320000, 'Palembang': 280000, 'Manado': 350000 } },
        //     { nama: 'Santo', tujuan: { 'Barru': 55000, 'Makassar': 35000, 'Jawa': 320000, 'Sumatra': 420000, 'Bali': 210000, 'Bandung': 260000, 'Surabaya': 290000, 'Medan': 330000, 'Palembang': 300000, 'Manado': 360000 } },
        //     { nama: 'Andi', tujuan: { 'Barru': 60000, 'Makassar': 40000, 'Jawa': 340000, 'Sumatra': 450000, 'Bali': 220000, 'Bandung': 270000, 'Surabaya': 310000, 'Medan': 340000, 'Palembang': 310000, 'Manado': 370000 } },
        //     { nama: 'Rudi', tujuan: { 'Barru': 52000, 'Makassar': 32000, 'Jawa': 310000, 'Sumatra': 410000, 'Bali': 190000, 'Bandung': 240000, 'Surabaya': 260000, 'Medan': 310000, 'Palembang': 270000, 'Manado': 340000 } },
        //     { nama: 'Liam', tujuan: { 'Barru': 53000, 'Makassar': 33000, 'Jawa': 315000, 'Sumatra': 415000, 'Bali': 195000, 'Bandung': 245000, 'Surabaya': 265000, 'Medan': 315000, 'Palembang': 275000, 'Manado': 345000 } }
        // ];

        // // Data Penumpang per Angkot
        // var penumpang = {
        //     'Budi': [],
        //     'Santo': [],
        //     'Andi': [],
        //     'Rudi': [],
        //     'Liam': []
        // };

        // // Fungsi untuk memilih angkot
        // function pilihAngkot() {
        //     var pilihanAngkot = prompt('Pilih angkot:\n1. Angkot-Pertama Budi\n2. Angkot-Kedua Santo\n3. Angkot-Ketiga Andi\n4. Angkot-Keempat Rudi\n5. Angkot-Kelima Liam\n\nMasukkan nomor pilihan:');
        //     return angkot[pilihanAngkot - 1];
        // }

        // // Fungsi untuk memilih tujuan
        // function pilihTujuan(tujuan) {
        //     var daftarTujuan = 'Pilih tujuan perjalanan:\n';
        //     var i = 1;
        //     for (var key in tujuan) {
        //         daftarTujuan += i + '. ' + key + ' - Rp ' + tujuan[key].toLocaleString() + '\n';
        //         i++;
        //     }
        //     var pilihanTujuan = prompt(daftarTujuan + '\nMasukkan nomor pilihan:');
        //     var tujuanPilihan = Object.keys(tujuan)[pilihanTujuan - 1];
        //     return tujuanPilihan;
        // }

        // // Fungsi untuk tambah penumpang
        // function tambahPenumpang() {
        //     var angkotTerpilih = pilihAngkot();
        //     if (!angkotTerpilih) {
        //         alert('Pilihan angkot tidak valid.');
        //         return;
        //     }

        //     var tujuanTerpilih = pilihTujuan(angkotTerpilih.tujuan);
        //     if (!tujuanTerpilih) {
        //         alert('Pilihan tujuan tidak valid.');
        //         return pilihTujuan();
        //     }

        //     var harga = angkotTerpilih.tujuan[tujuanTerpilih];
        //     var namaPenumpang = prompt('Masukkan nama penumpang:');
        //     penumpang[angkotTerpilih.nama].push({ nama: namaPenumpang, tujuan: tujuanTerpilih, harga: harga });

        //     alert(
        //         'Penumpang berhasil ditambahkan!\n' +
        //         'Nama: ' + namaPenumpang + '\n' +
        //         'Tujuan: ' + tujuanTerpilih + '\n' +
        //         'Harga: Rp ' + harga.toLocaleString()
        //     );
        // }

        // // Menu interaktif
        // while (true) {
        //     var aksi = prompt(
        //         'Masukkan aksi yang ingin dilakukan:\n1. Tambah Penumpang\n2. Lihat Penumpang\n3. Keluar\n\nMasukkan nomor pilihan:'
        //     );
        //     if (aksi == '1') {
        //         tambahPenumpang();
        //     } else if (aksi == '2') {
        //         var daftarPenumpang = 'Daftar Penumpang:\n';
        //         for (var key in penumpang) {
        //             daftarPenumpang += '\nAngkot ' + key + ':\n';
        //             if (penumpang[key].length === 0) {
        //                 daftarPenumpang += '- Tidak ada penumpang\n';
        //             } else {
        //                 penumpang[key].forEach(function(p, index) {
        //                     daftarPenumpang += (index + 1) + '. ' + p.nama + ' - ' + p.tujuan + ' (Rp ' + p.harga.toLocaleString() + ')\n';
        //                 });
        //             }
        //         }
        //         alert(daftarPenumpang);
        //     } else if (aksi == '3') {
        //         var confirmKeluar = confirm('Apakah Anda yakin ingin keluar?');
        //         if (confirmKeluar) {
        //             alert('Terima kasih telah menggunakan aplikasi ini!');
        //             break;
        //         }
        //     } else {
        //         alert('Pilihan tidak valid. Silakan masukkan angka 1, 2, atau 3.');
        //     }
        // }

        var angkot = [
            { nama: 'Budi', tujuan: { 'Barru': 50000, 'Makassar': 30000, 'Jawa': 300000, 'Sumatra': 400000, 'Bali': 200000, 'Bandung': 250000, 'Surabaya': 270000, 'Medan': 320000, 'Palembang': 280000, 'Manado': 350000 }, penghasilan: 0 },
            { nama: 'Santo', tujuan: { 'Barru': 55000, 'Makassar': 35000, 'Jawa': 320000, 'Sumatra': 420000, 'Bali': 210000, 'Bandung': 260000, 'Surabaya': 290000, 'Medan': 330000, 'Palembang': 300000, 'Manado': 360000 }, penghasilan: 0 },
            { nama: 'Andi', tujuan: { 'Barru': 60000, 'Makassar': 40000, 'Jawa': 340000, 'Sumatra': 450000, 'Bali': 220000, 'Bandung': 270000, 'Surabaya': 310000, 'Medan': 340000, 'Palembang': 310000, 'Manado': 370000 }, penghasilan: 0 },
            { nama: 'Rudi', tujuan: { 'Barru': 52000, 'Makassar': 32000, 'Jawa': 310000, 'Sumatra': 410000, 'Bali': 190000, 'Bandung': 240000, 'Surabaya': 260000, 'Medan': 310000, 'Palembang': 270000, 'Manado': 340000 }, penghasilan: 0 },
            { nama: 'Liam', tujuan: { 'Barru': 53000, 'Makassar': 33000, 'Jawa': 315000, 'Sumatra': 415000, 'Bali': 195000, 'Bandung': 245000, 'Surabaya': 265000, 'Medan': 315000, 'Palembang': 275000, 'Manado': 345000 }, penghasilan: 0 }
        ];

        var penumpang = {
            'Budi': [],
            'Santo': [],
            'Andi': [],
            'Rudi': [],
            'Liam': []
        };

        function mintaInputAngka(promptMessage, maxPilihan) {
            let input;
            do {
                input = prompt(promptMessage);
                if (isNaN(input) || input < 1 || input > maxPilihan) {
                    alert("Pilihan tidak valid. Silakan masukkan angka yang benar.");
                }
            } while (isNaN(input) || input < 1 || input > maxPilihan);
            return parseInt(input);
        }

        function tambahPenumpang() {
            var pilihAngkot = mintaInputAngka(
                'Pilih angkot:\n' +
                '1. Budi\n' +
                '2. Santo\n' +
                '3. Andi\n' +
                '4. Rudi\n' +
                '5. Liam\n' +
                'Masukkan nomor pilihan:',
                angkot.length
            );
        
            let angkotTerpilih = angkot[pilihAngkot - 1];
            let daftarPenumpang = penumpang[angkotTerpilih.nama];
        
            if (daftarPenumpang.length >= 15) {
                alert('Angkot ' + angkotTerpilih.nama + ' sudah penuh. Tidak bisa menambah penumpang.');
                return;
            }
        
            let daftarTujuan = 'Pilih tujuan perjalanan:\n';
            let tujuanKeys = Object.keys(angkotTerpilih.tujuan);
            tujuanKeys.forEach((tujuan, index) => {
                daftarTujuan += (index + 1) + '. ' + tujuan + ' - Rp ' + angkotTerpilih.tujuan[tujuan].toLocaleString() + '\n';
            });
        
            let pilihTujuan = mintaInputAngka(daftarTujuan + 'Masukkan nomor pilihan:', tujuanKeys.length);
            let tujuanTerpilih = tujuanKeys[pilihTujuan - 1];
            let harga = angkotTerpilih.tujuan[tujuanTerpilih];
        
            let namaPenumpang;
            do {
                namaPenumpang = prompt('Masukkan nama penumpang:');
                if (daftarPenumpang.some(p => p.nama === namaPenumpang)) {
                    alert('Nama sudah ada dalam angkot. Silakan gunakan nama lain.');
                    namaPenumpang = null; // Reset nama agar prompt muncul kembali
                }
            } while (!namaPenumpang);
        
            daftarPenumpang.push({ nama: namaPenumpang, tujuan: tujuanTerpilih, harga: harga });
            angkotTerpilih.penghasilan += harga;
        
            alert(
                'Penumpang berhasil ditambahkan!\n' +
                'Nama: ' + namaPenumpang + '\n' +
                'Tujuan: ' + tujuanTerpilih + '\n' +
                'Harga: Rp ' + harga.toLocaleString()
            );
        }
        

        function turunPenumpang() {
            var pilihAngkot = mintaInputAngka(
                'Pilih angkot:\n' +
                '1. Budi\n' +
                '2. Santo\n' +
                '3. Andi\n' +
                '4. Rudi\n' +
                '5. Liam\n' +
                'Masukkan nomor pilihan:',
                angkot.length
            );

            let angkotTerpilih = angkot[pilihAngkot - 1];
            let daftarPenumpang = penumpang[angkotTerpilih.nama];

            if (daftarPenumpang.length === 0) {
                alert('Tidak ada penumpang di angkot ' + angkotTerpilih.nama + '.');
                return;
            }

            let penumpangList = 'Daftar penumpang:\n';
            daftarPenumpang.forEach((p, index) => {
                penumpangList += (index + 1) + '. ' + p.nama + ' - ' + p.tujuan + '\n';
            });

            let pilihPenumpang = mintaInputAngka(penumpangList + 'Masukkan nomor penumpang yang turun:', daftarPenumpang.length);
            let penumpangTurun = daftarPenumpang.splice(pilihPenumpang - 1, 1)[0];

            alert(
                'Terima kasih, ' + penumpangTurun.nama + '!\n' +
                'Anda telah turun di tujuan: ' + penumpangTurun.tujuan + '.\n' +
                'Sudah membayar: Rp ' + penumpangTurun.harga.toLocaleString()
            );
        }

        function lihatPenghasilan() {
            let sandi = prompt('Masukkan sandi admin untuk melihat penghasilan:');
            if (sandi !== 'admin12345') {
                alert('Sandi salah. Tidak dapat mengakses penghasilan.');
                return;
            }

            let laporan = 'Laporan Penghasilan Angkot:\n';
            angkot.forEach((a) => {
                laporan += a.nama + ': Rp ' + a.penghasilan.toLocaleString() + '\n';
            });
            alert(laporan);
        }

        function lihatPenumpang() {
            let sandi = prompt('Masukkan sandi admin untuk melihat daftar penumpang:');
            if (sandi !== 'admin123') {
                alert('Sandi salah. Tidak dapat mengakses daftar penumpang.');
                return;
            }

            let laporan = 'Daftar Penumpang per Angkot:\n';
            angkot.forEach((a) => {
                laporan += '\nAngkot ' + a.nama + ':\n';
                penumpang[a.nama].forEach((p) => {
                    laporan += '- ' + p.nama + ' ke ' + p.tujuan + '\n';
                });
            });
            alert(laporan);
        }

        while (true) {
            var aksi = prompt(
                'Masukkan yang anda ingin dilakukan:\n' +
                '1. Naik Ke Angkot\n' +
                '2. Turun Dari Angkot\n' +
                '3. See penghasilan {Hanya Admin}\n' +
                '4. See Angkot untuk Melihat Penumpang {Hanya Admin}\n' +
                '5. Tidak Jadi Masuk Angkot\n\n' +
                'Masukkan nomor pilihan:'
            );

            if (aksi === '1') {
                tambahPenumpang();
            } else if (aksi === '2') {
                turunPenumpang();
            } else if (aksi === '3') {
                lihatPenghasilan();
            } else if (aksi === '4') {
                lihatPenumpang();
            } else if (aksi === '5') {
                var confirmKeluar = confirm('Apakah Anda yakin ingin keluar?');
                if (confirmKeluar) {
                    alert('Terima kasih telah menggunakan aplikasi ini!');
                    break;
                }
            } else {
                alert('Pilihan tidak valid. Silakan coba lagi.');
            }
        }






// i <(lebih kecil) ;
// i >(lebih besar) ;



        
        // tutor 

        // var hapusPenumpang = function(namaPenumpang, penumpang) {
            // jika angkot kosong
                // tampilkan pesan bahwa angkot kosong, dan
                // tidak mungkin ada penumpang turun
                // kembalikan isi arry & keluar dari function
            // else
                // telusuri seluruh kursi dari awal
                    // jika nama penumpang sesuai
                        // hapus penumpang dengsn mengubsh namanya,
                        // menjadi undefined
                        // kembalikan isi arry & keluar dari function
                    // jika tidak ada nama yang sesuai
                        // tampilkan pesan kesalahan
                        // kembalikan isi arry & keluar dari function
        // }