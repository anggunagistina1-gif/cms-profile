class ArtikelModel {

    static async getArtikel() {

        const response =
        await fetch("http://localhost:3000/artikel");

        return await response.json();

    }

}