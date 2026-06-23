/* ==================================
   PadiTani - script.js
   Kalkulator + AI Penyuluh
================================== */

/* ==========================
   KALKULATOR PERTANIAN
========================== */

function hitungKebutuhan() {

    const luas = parseFloat(
        document.getElementById("luasLahan").value
    );

    if (!luas || luas <= 0) {
        alert("Masukkan luas lahan terlebih dahulu.");
        return;
    }

    const benih = 30 * luas;
    const urea = 250 * luas;
    const npk = 300 * luas;
    const sp36 = 100 * luas;
    const organik = 5000 * luas;
    const hasil = 8 * luas;

    document.getElementById("hasilKalkulator").innerHTML = `
        <div class="result-card">
            <h3>🌱 Benih</h3>
            <p>${benih.toFixed(0)} Kg</p>
        </div>

        <div class="result-card">
            <h3>🧪 Urea</h3>
            <p>${urea.toFixed(0)} Kg</p>
        </div>

        <div class="result-card">
            <h3>🌾 NPK</h3>
            <p>${npk.toFixed(0)} Kg</p>
        </div>

        <div class="result-card">
            <h3>📦 SP-36</h3>
            <p>${sp36.toFixed(0)} Kg</p>
        </div>

        <div class="result-card">
            <h3>🍀 Pupuk Organik</h3>
            <p>${organik.toLocaleString()} Kg</p>
        </div>

        <div class="result-card">
            <h3>🚜 Estimasi Hasil Panen</h3>
            <p>${hasil.toFixed(1)} Ton Gabah Kering Panen</p>
        </div>
    `;
}


/* ==========================
   AI PENYULUH
========================== */

function openAI() {

    document.getElementById(
        "aiModal"
    ).style.display = "block";
}

function closeAI() {

    document.getElementById(
        "aiModal"
    ).style.display = "none";
}

/* ==========================
   ENTER KEY
========================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const input =
            document.getElementById(
                "userQuestion"
            );

        if (input) {

            input.addEventListener(
                "keypress",
                function (e) {

                    if (e.key === "Enter") {
                        sendQuestion();
                    }

                }
            );

        }

    }
);

/* ==========================
   CHAT AI
========================== */

function sendQuestion() {

    const input =
        document.getElementById(
            "userQuestion"
        );

    const question =
        input.value.trim();

    if (question === "") return;

    const chat =
        document.getElementById(
            "chatMessages"
        );

    /* USER MESSAGE */

    chat.innerHTML += `
        <div class="user-message">
            ${question}
        </div>
    `;

    const q =
        question.toLowerCase();

    let answer =
        "Silakan konsultasikan lebih lanjut kepada penyuluh pertanian setempat atau masukkan pertanyaan yang lebih spesifik.";

    /* ======================
       KEYWORD RESPONSES
    ====================== */

    if (
        q.includes("pupuk")
    ) {

        answer =
        "Pemupukan padi umumnya menggunakan kombinasi pupuk organik, Urea, SP-36, dan NPK. Untuk 1 hektar lahan biasanya diperlukan sekitar 250 kg Urea, 300 kg NPK, dan 100 kg SP-36 yang diberikan secara bertahap sesuai umur tanaman.";
    }

    else if (
        q.includes("benih")
    ) {

        answer =
        "Gunakan benih bersertifikat dengan daya tumbuh minimal 85%. Kebutuhan benih berkisar 25–30 kg per hektar untuk sistem tanam jajar legowo.";
    }

    else if (
        q.includes("wereng")
    ) {

        answer =
        "Wereng coklat dapat dikendalikan dengan varietas tahan, sanitasi lahan, menjaga keseimbangan ekosistem, dan penggunaan insektisida sesuai rekomendasi apabila serangan telah melewati ambang ekonomi.";
    }

    else if (
        q.includes("blas")
    ) {

        answer =
        "Penyakit blas disebabkan jamur Pyricularia oryzae. Pencegahan dilakukan dengan penggunaan varietas tahan, pemupukan berimbang, serta menjaga kelembapan lahan.";
    }

    else if (
        q.includes("tikus")
    ) {

        answer =
        "Pengendalian tikus dapat dilakukan dengan gropyokan, pemasangan trap barrier system (TBS), rumah burung hantu, sanitasi lingkungan, dan pengendalian terpadu.";
    }

    else if (
        q.includes("pengairan")
    ) {

        answer =
        "Pada fase vegetatif tinggi genangan sekitar 2–5 cm. Menjelang panen lahan dikeringkan untuk meningkatkan kualitas gabah dan mempermudah pemanenan.";
    }

    else if (
        q.includes("irigasi")
    ) {

        answer =
        "Irigasi berselang atau Alternate Wetting and Drying (AWD) dapat menghemat air tanpa mengurangi hasil panen apabila diterapkan dengan benar.";
    }

    else if (
        q.includes("panen")
    ) {

        answer =
        "Panen dilakukan ketika sekitar 90–95% gabah menguning dan kadar air berkisar 20–25%. Panen terlalu cepat atau terlambat dapat menurunkan kualitas gabah.";
    }

    else if (
        q.includes("legowo")
    ) {

        answer =
        "Sistem tanam jajar legowo meningkatkan penetrasi cahaya, sirkulasi udara, dan jumlah rumpun produktif sehingga dapat meningkatkan hasil panen.";
    }

    else if (
        q.includes("organik")
    ) {

        answer =
        "Pupuk organik memperbaiki struktur tanah, meningkatkan aktivitas mikroorganisme, menambah bahan organik, dan membantu meningkatkan efisiensi pemupukan anorganik.";
    }

    else if (
        q.includes("hama")
    ) {

        answer =
        "Pengendalian hama dianjurkan menggunakan prinsip Pengendalian Hama Terpadu (PHT), yaitu kombinasi pengendalian biologis, mekanis, kultur teknis, dan kimia secara bijaksana.";
    }

    else if (
        q.includes("varietas")
    ) {

        answer =
        "Beberapa varietas unggul yang banyak digunakan antara lain Inpari 32, Inpari 42, Ciherang, Mekongga, dan varietas adaptif sesuai wilayah setempat.";
    }

    else if (
        q.includes("hasil")
    ) {

        answer =
        "Produksi padi dapat mencapai 6–10 ton per hektar tergantung varietas, kondisi lahan, pemupukan, irigasi, dan pengendalian organisme pengganggu tanaman.";
    }

    /* BOT RESPONSE */

    setTimeout(() => {

        chat.innerHTML += `
            <div class="bot-message">
                🌾 ${answer}
            </div>
        `;

        chat.scrollTop =
            chat.scrollHeight;

    }, 500);

    input.value = "";

    chat.scrollTop =
        chat.scrollHeight;
}

/* ==========================
   CLOSE MODAL OUTSIDE CLICK
========================== */

window.onclick = function (event) {

    const modal =
        document.getElementById(
            "aiModal"
        );

    if (event.target === modal) {

        modal.style.display = "none";

    }

};

/* ==========================
   SCROLL ANIMATION
========================== */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.1
        }

    );

document.querySelectorAll(
    ".timeline-card, .stat-card, .reference-card"
).forEach(card => {

    observer.observe(card);

});

/* ==========================
   MOBILE MENU
========================== */

const menuButton =
    document.querySelector(
        ".mobile-menu-btn"
    );

const navMenu =
    document.querySelector(
        ".nav-menu"
    );

if (menuButton) {

    menuButton.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle(
                "active"
            );

        }
    );

}
