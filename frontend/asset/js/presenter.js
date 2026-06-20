class ArtikelPresenter {

    static async loadArtikel() {

        const artikel =
        await ArtikelModel.getArtikel();

        const container =
        document.getElementById('artikelProfil');

        ArtikelView.tampilkanArtikel(
            container,
            artikel
        );

    }

}