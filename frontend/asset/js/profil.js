// NAVIGASI TAB

function showTab(event, tabId){

    // sembunyikan semua card
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('active');
    });

    // tampilkan card yang dipilih
    document.getElementById(tabId)
    .classList.add('active');

    // hapus active semua tombol
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // aktifkan tombol yang diklik
    event.target.classList.add('active');
}

// TOMBOL KIRIM

function goToProfil(){

    // sembunyikan semua card
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('active');
    });

    // tampilkan profil
    document.getElementById('profil')
    .classList.add('active');

    // ubah active tombol
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.querySelectorAll('.tab-btn')[1]
    .classList.add('active');
}

//LOAD ARTIKEL DENGAN MVP
ArtikelPresenter.loadArtikel();

// LOGOUT

function logout(){

    let yakin = confirm("Yakin ingin logout?");

    if(yakin){

        localStorage.removeItem('login');

        window.location.href = "login.html";

    }

}

// map location

navigator.geolocation.getCurrentPosition(

    function(position){

        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const map = L.map('map').setView([lat, lng], 15);

        L.tileLayer(
            'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
                maxZoom: 19
            }
        ).addTo(map);

        L.marker([lat, lng])
        .addTo(map)
        .bindPopup('Lokasi Saya')
        .openPopup();

        setTimeout(() => {
         map.invalidateSize();
        }, 500);

    },

    function(error){

        console.log("Lokasi tidak dapat diakses");

    }

);

// PUSH NOTIFICATION

if ("Notification" in window) {

    Notification.requestPermission()
        .then((permission) => {

            if (permission === "granted") {

                new Notification("Profil Anggun Agistina", {
                    body: "Selamat datang di halaman profil saya 💖"
                });

            }

        });

}