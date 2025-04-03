const buku = {
    "Fiksyen": [
        { "tajuk": "Harry Potter", "sinopsis": "Kisah seorang budak yang menjadi ahli sihir." },
        { "tajuk": "Lord of the Rings", "sinopsis": "Perjalanan epik untuk memusnahkan cincin kuasa." },
        { "tajuk": "Percy Jackson", "sinopsis": "Pengembaraan seorang separuh dewa dalam dunia moden." }
    ],
    "Bukan Fiksyen": [
        { "tajuk": "Sapiens", "sinopsis": "Sejarah ringkas umat manusia." },
        { "tajuk": "Atomic Habits", "sinopsis": "Cara membentuk tabiat kecil yang membawa kejayaan besar." }
    ],
    "Komik": [
        { "tajuk": "One Piece", "sinopsis": "Pengembaraan lanun mencari harta karun terhebat." },
        { "tajuk": "Marvel Avengers", "sinopsis": "Kisah wira-wira bertarung melawan kejahatan." }
    ],
    "Novel": [
        { "tajuk": "Pulang", "sinopsis": "Sebuah kisah keluarga dan pencarian diri." },
        { "tajuk": "Tenggelamnya Kapal Van Der Wijck", "sinopsis": "Cinta dan perbezaan darjat dalam masyarakat." }
    ]
};

function cadangBuku() {
    let kategori = document.getElementById("kategori").value;
    let pilihan = buku[kategori][Math.floor(Math.random() * buku[kategori].length)];
    document.getElementById("hasil").innerHTML = `<b>📖 ${pilihan.tajuk}</b><br>📜 ${pilihan.sinopsis}`;
}
