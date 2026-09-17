i-CITRA ITP TINGKATAN 4 — V1.4.1 LIVE SUBMIT FIX

PEMBAIKAN
- Isu submit dari GitHub Pages ke Google Apps Script diperbaiki.
- Punca: respons Google Apps Script Web App boleh disekat oleh polisi CORS browser apabila dibaca melalui fetch biasa.
- Kaedah penghantaran murid ditukar kepada fetch(mode="no-cors").
- Endpoint kekal WRITE sahaja.
- Data dihantar sebagai text/plain JSON.
- Data murid sebenar tidak disimpan dalam localStorage selepas penghantaran.

NOTA PENTING
- Dalam mod no-cors, browser tidak boleh membaca JSON respons Google Apps Script.
- Oleh sebab itu front-end hanya mengesahkan bahawa permintaan penghantaran telah dilepaskan oleh browser.
- Backend masih menjalankan validasi penuh sebelum menulis ke RESPON_MURID.
- Ujian selepas kemas kini mesti disahkan dengan melihat baris baharu dalam Google Sheet.

Dashboard Guru masih mod demo/tempatan sehingga modul READ selamat guru dibina.
