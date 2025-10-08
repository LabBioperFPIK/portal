document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const content = document.getElementById('content');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      window.location.href = 'dashboard.html';
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Pendaftaran berhasil! Silakan login.');
      window.location.href = 'index.html';
    });
  }

  if (content) {
    document.getElementById('menu-peminjaman').onclick = () => {
      content.innerHTML = `
        <h2>Formulir Peminjaman Alat</h2>
        <form>
          <input type="text" placeholder="Nama peminjam">
          <input type="text" placeholder="Nama alat">
          <input type="date" placeholder="Tanggal pinjam">
          <button type="button" onclick="alert('Permintaan peminjaman dikirim!')">Kirim</button>
        </form>`;
    };

    document.getElementById('menu-inventaris').onclick = () => {
      content.innerHTML = `
        <h2>Inventaris Alat Laboratorium</h2>
        <ul>
          <li>Spektrofotometer — Analisis sampel air</li>
          <li>Microscope — Observasi mikroorganisme</li>
          <li>DO Meter — Pengukuran oksigen terlarut</li>
        </ul>`;
    };

    document.getElementById('menu-sop').onclick = () => {
      content.innerHTML = `
        <h2>SOP Laboratorium</h2>
        <p>1. Gunakan APD lengkap sebelum bekerja.</p>
        <p>2. Catat semua kegiatan di logbook laboratorium.</p>
        <p>3. Jaga kebersihan area kerja.</p>`;
    };
  }
});
