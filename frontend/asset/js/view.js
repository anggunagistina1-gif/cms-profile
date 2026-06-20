class ArtikelView {

    static tampilkanArtikel(container, artikel) {

        container.innerHTML = "";

        if(artikel.length === 0){

            container.innerHTML =
            "<p>Belum ada artikel 💔</p>";

            return;
        }

        artikel.forEach(item => {

            container.innerHTML += `
                <div class="artikel-box">

                    <h3>${item.judul}</h3>

                    <p>${item.isi}</p>

                </div>
            `;
        });

    }

}