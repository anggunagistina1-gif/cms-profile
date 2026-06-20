let editId = null;

const form = document.getElementById('formArtikel');
const list = document.getElementById('listArtikel');

/* AMBIL DATA DARI DATABASE*/

async function ambilArtikel(){

    try{

        const response = await fetch(
            "../backend/getArtikel.php"
        );

        const artikel = await response.json();

        tampilkanData(artikel);
        tampilkanArtikel(artikel);

    }catch(error){

        console.log("ERROR AMBIL DATA:", error);

    }

}

/* TAMPILKAN ARTIKEL*/

function tampilkanArtikel(artikel){

    const container =
    document.getElementById('tampilArtikel');

    container.innerHTML = '';

    if(artikel.length === 0){

        container.innerHTML = `
            <div class="card">
                <p>Belum ada artikel 💔</p>
            </div>
        `;

        return;

    }

    artikel.forEach((item)=>{

        container.innerHTML += `

            <div class="card">

                <h3>${item.judul}</h3>

                <p>${item.isi}</p>

            </div>

        `;

    });

}

/*TAMPILKAN TABLE*/

function tampilkanData(artikel){

    list.innerHTML = '';

    artikel.forEach((item)=>{

        list.innerHTML += `

        <tr>

            <td>${item.id}</td>

            <td>${item.judul}</td>

            <td>${item.isi}</td>

            <td>

                <button 
                    class="btn-edit"
                    onclick="editData(
                        ${item.id},
                        \`${item.judul}\`,
                        \`${item.isi}\`
                    )">

                    Edit

                </button>

                <button 
                    class="btn-hapus"
                    onclick="hapusData(${item.id})">

                    Hapus

                </button>

            </td>

        </tr>

        `;

    });

}

/*TAMBAH + UPDATE */

form.addEventListener('submit', async function(e){

    e.preventDefault();

    let judul =
    document.getElementById('judul').value.trim();

    let isi =
    document.getElementById('konten').value.trim();

    if(judul === '' || isi === ''){

        alert("Semua field wajib diisi!");
        return;

    }

    let url =
    "http://localhost:3000/artikel";
    let data = {

        judul : judul,
        isi : isi

    };

    /*MODE EDIT */

    if(editId !== null){

        url =
        `http://localhost:3000/artikel/${editId}`;  

    }

    try{

        const response = await fetch(url,{

            method : editId === null ? "POST" : "PUT",

            headers : {

                "Content-Type":
                "application/json"

            },

            body : JSON.stringify(data)

        });

        const hasil =
        await response.json();

        if(hasil.status === "success"){

            if(editId === null){

                alert("Artikel berhasil ditambah 💖");

            }else{

                alert("Artikel berhasil diupdate 💖");

            }

            form.reset();

            editId = null;

            ambilArtikel();

        }else{

            alert("Gagal menyimpan artikel");

        }

    }catch(error){

        console.log("ERROR SIMPAN:", error);

    }

});

/*EDIT */

function editData(id,judul,isi){

    document.getElementById('judul').value = judul;

    document.getElementById('konten').value = isi;

    editId = id;

}

/*HAPUS */

async function hapusData(id){

    let yakin =
    confirm("Yakin ingin menghapus artikel?");

    if(!yakin){

        return;

    }

    try{

        const response = await fetch(

            "`http://localhost:3000/artikel/${id}`",
        

            {

                method : "DELETE",

                headers : {

                    "Content-Type":
                    "application/json"

                },

                body : JSON.stringify({

                    id : id

                })

            }

        );

        const hasil =
        await response.json();

        if(hasil.status === "success"){

            alert("Artikel berhasil dihapus 💖");

            ambilArtikel();

        }else{

            alert("Gagal menghapus artikel");

        }

    }catch(error){

        console.log("ERROR HAPUS:", error);

    }

}

/* NAVIGASI */

function tampilHalaman(event,nama){

    document.querySelectorAll('.halaman')
    .forEach(h=>{

        h.classList.remove('aktif');

    });

    document.getElementById(nama)
    .classList.add('aktif');

    document.querySelectorAll('.sidebar ul li')
    .forEach(li=>{

        li.classList.remove('active');

    });

    event.target.classList.add('active');

    if(nama === 'artikel'){

        ambilArtikel();

    }

}

/*BUKA PROFIL*/

function bukaProfil(){

    window.location.href =
    "./profil.html";

}

/*LOAD AWAL */

ambilArtikel();