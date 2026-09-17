i-CITRA ITP TINGKATAN 4 — V1.4 LIVE SUBMIT

STATUS
- Penghantaran murid: LIVE ke Google Apps Script / Google Sheet.
- Dashboard Guru: masih MOD DEMO menggunakan localStorage sehingga endpoint READ guru yang disahkan siap.

KEMAS KINI
- config.js baharu menyimpan URL Web App awam.
- app.js menghantar payload JSON ke backend dengan Content-Type text/plain.
- Data sebenar murid tidak lagi disimpan ke localStorage selepas submit.
- Murid hanya menerima status berjaya/gagal; skor dan peratus tidak dipulangkan.
- CSP sedia ada membenarkan sambungan hanya ke domain Google Script yang diperlukan.

PENTING
URL Web App bukan secret. Keselamatan data datang daripada backend:
- endpoint murid tidak mempunyai fungsi READ,
- Google Sheet kekal Restricted,
- modul bacaan guru akan menggunakan pengesahan server/allowlist.

Fail untuk GitHub:
- index.html
- style.css
- app.js
- config.js
- SECURITY.md
