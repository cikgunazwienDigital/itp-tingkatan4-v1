i-CITRA ITP TINGKATAN 4 — V1.4.3 CSP FIX

PUNCA RALAT DITEMUI
V1.3 Security Prep menggunakan Content Security Policy:
  form-action 'self'

V1.4.2 pula menghantar borang terus dari GitHub Pages ke Google Apps Script.
CSP lama menghalang borang daripada dihantar ke domain luar.

Selain itu hidden iframe yang menerima respons Google juga memerlukan frame-src
untuk domain Google Apps Script.

PEMBAIKAN V1.4.3
- form-action kini membenarkan:
  https://script.google.com
  https://script.googleusercontent.com
- frame-src kini membenarkan:
  https://script.google.com
  https://script.googleusercontent.com
- Kaedah POST form + hidden iframe dikekalkan.
- Backend doPost V1.4.2 tidak perlu diubah lagi.
- config.js tidak perlu diubah.
- Paparan status menunjukkan V1.4.3 supaya mudah sahkan cache/deploy.

UJIAN
1. Upload index.html terkini ke GitHub (boleh upload semua fail V1.4.3).
2. Commit.
3. Tunggu GitHub Pages deploy.
4. Hard refresh / Incognito.
5. Pastikan label V1.4.3 kelihatan.
6. Submit satu rekod ujian.
7. Semak RESPON_MURID.
