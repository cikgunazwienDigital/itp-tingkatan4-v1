i-CITRA ITP TINGKATAN 4 — V1.3 SECURITY PREP

KEMAS KINI KESELAMATAN
- Hard-coded PIN demo dibuang daripada JavaScript.
- Dashboard guru kini jelas dilabel sebagai mod demo tempatan.
- Content Security Policy (CSP) ditambah.
- Referrer Policy ditetapkan kepada no-referrer.
- Validasi input murid diperkukuh:
  kelas mesti daripada 5 kelas sah,
  jantina mesti Lelaki/Perempuan,
  tepat 150 respons,
  respons hanya Y/T,
  nama 2-100 aksara.
- Output nama/kelas dalam jadual di-escape untuk mengurangkan risiko XSS.
- SECURITY.md ditambah sebagai spesifikasi keselamatan V2 LIVE.

PENTING
Versi ini masih menggunakan localStorage dan BELUM untuk data sebenar murid.
V2 LIVE mesti menggunakan Google Apps Script sebagai backend, Google Sheet Restricted,
dan pengesahan guru berasaskan akaun/e-mel yang dibenarkan.
