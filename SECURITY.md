# i-CITRA ITP Tingkatan 4 — Pelan Keselamatan V1.3 / V2 LIVE

## Prinsip Dikunci
1. Front-end (HTML/CSS/JS) tidak menyimpan sebarang rahsia.
2. Spreadsheet ID, Folder ID, secret key, token, kata laluan dan senarai e-mel guru tidak boleh diletakkan dalam GitHub.
3. Murid hanya dibenarkan menghantar data. Tiada endpoint murid untuk membaca data.
4. Dashboard Guru hanya menerima data selepas pengesahan server.
5. Google Sheet mesti ditetapkan sebagai Restricted.
6. Pengesahan guru menggunakan allowlist e-mel/akaun yang diluluskan.
7. Server mesti mengesahkan:
   - kelas daripada senarai sah,
   - jantina sah,
   - tepat 150 respons,
   - setiap respons hanya Y atau T,
   - panjang nama munasabah.
8. Semua output yang mengandungi input pengguna mesti dipaparkan secara selamat untuk mengurangkan risiko XSS.
9. Jangan gunakan PIN hard-coded di browser sebagai kawalan akses sebenar.
10. Log akses dan tindakan pentadbir hendaklah direkodkan di server untuk audit.

## Peranan
- Murid: WRITE sahaja.
- Guru sah: READ + ANALISIS.
- Orang luar: TIADA AKSES.

## Status V1.3
- Masih prototaip localStorage.
- Hard-coded PIN telah dibuang.
- Validasi input ditambah.
- Output user-controlled di-escape.
- Content Security Policy dan Referrer Policy ditambah.
- Belum dianggap LIVE/Production sehingga Google Apps Script + Google Sheet dengan pengesahan server siap.


## V1.4 LIVE SUBMIT
- Front-end menggunakan endpoint Web App awam hanya untuk SUBMIT.
- Endpoint awam tidak dianggap secret dan tidak memberi akses baca.
- Jangan tambah fungsi READ kepada endpoint murid.
- Dashboard Guru LIVE mesti menggunakan laluan server berasingan yang mengesahkan guru.
- Data murid sebenar tidak disimpan dalam localStorage selepas penghantaran.


## V1.4.1 CORS FIX
- Submit murid menggunakan `fetch(..., mode="no-cors")`.
- Ini diperlukan kerana GitHub Pages tidak semestinya dibenarkan membaca respons Apps Script secara cross-origin.
- Endpoint murid kekal WRITE sahaja.
- Validasi sebenar tetap berlaku di backend sebelum `appendRow`.


## V1.4.2 FORM POST
- GitHub Pages menghantar respons murid melalui standard HTML POST form ke hidden iframe.
- Ini mengelakkan kebergantungan kepada pembacaan respons cross-origin.
- Backend mesti membaca `e.parameter.payload`, JSON.parse, kemudian melakukan validasi server sedia ada.
- Endpoint kekal submit-only.


## V1.4.3 CSP FIX
- `form-action` membenarkan hanya GitHub origin sendiri serta domain Google Apps Script yang diperlukan.
- `frame-src` membenarkan hanya domain Google Apps Script yang diperlukan untuk hidden iframe.
- Perlindungan CSP lain dikekalkan.
