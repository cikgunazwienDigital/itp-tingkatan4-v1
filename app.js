
const QUESTIONS = ["menentukan sesuatu perkara mengikut keputusan sendiri", "boleh menghasilkan karya kreatif", "tidak peduli kritikan terhadap saya", "suka aktiviti yang berbentuk perbincangan", "sangat mementingkan pencapaian dalam peperiksaan", "boleh beradaptasi dengan perubahan", "gemar aktiviti yang mencabar pemikiran", "berupaya memberi arahan dengan berkesan", "lebih selesa berada dalam persekitaran yang teratur", "tidak membiarkan kritikan melemahkan semangat saya", "suka membantu orang lain tanpa mengharapkan balasan", "suka membandingkan maklumat sebelum membuat pilihan", "tidak yakin dengan kebolehan diri sendiri", "mempunyai hala tuju hidup yang jelas", "tidak pernah melakukan kesilapan", "suka diberi kebebasan dalam membuat keputusan", "boleh menghasilkan karya seni", "mempertahankan pandangan saya dengan tegas", "suka bergaul dengan ramai orang", "memastikan kejayaan dicapai", "suka mempelajari budaya yang berbeza", "lebih gemar memahami sesuatu konsep berbanding menghafal", "berupaya mendorong orang lain dalam aktiviti berkumpulan", "menyusun tugasan mengikut keutamaan", "mempunyai tekad untuk menyelesaikan tugasan", "suka membantu orang lain tanpa mengira latar belakang", "mempertimbangkan pelbagai perkara sebelum membuat keputusan", "tidak mempunyai kelebihan diri", "mencari peluang untuk mencapai impian", "tidak pernah berasa takut", "boleh bekerja bersendirian tanpa dipengaruhi orang lain", "mempunyai imaginasi yang tinggi", "sentiasa ingin menang dalam menyuarakan pendapat", "sentiasa memulakan perbualan dengan orang lain", "memastikan prestasi diri pada tahap yang terbaik", "menggunakan pendekatan berbeza dalam menyelesaikan masalah", "boleh menghubungkait sesuatu perkara yang dipelajari", "berani mengambil risiko dalam membuat keputusan", "menyusun pakaian mengikut warna", "mampu bangkit semula selepas mengalami kegagalan", "suka memudahkan urusan orang lain", "sering mengkaji bagaimana sesuatu alat berfungsi", "meragui kebolehan diri saya", "proaktif dalam setiap perkara yang dilakukan", "tidak pernah berselisih faham", "selesa melakukan tugasan mengikut kawalan sendiri", "boleh mengubah suai sesuatu menjadi lebih menarik", "berterus terang jika tidak berpuas hati", "berinteraksi dengan ramai orang", "mengutamakan pencapaian dalam perkara yang dimulakan", "menyesuaikan diri dengan perubahan keadaan", "suka mendalami maklumat baharu untuk menambah pengetahuan", "mengambil berat kebajikan ahli kumpulan", "suka menyusun barang mengikut kategori", "tetap berusaha walaupun menghadapi kesukaran", "bersedia membantu tanpa diminta", "membandingkan secara mendalam tentang sesuatu perkara", "selalu beranggapan diri akan dikritik", "telah menetapkan hala tuju kerjaya", "tidak pernah rasa bersalah", "berpuas hati apabila dapat membuat keputusan sendiri", "menghasilkan sesuatu yang unik", "mengutamakan matlamat sendiri berbanding perasaan orang lain", "yakin untuk bercakap di hadapan orang ramai", "suka mencabar diri", "suka mencuba perkara baharu", "suka meneroka perkembangan teknologi terkini", "memastikan tugasan kumpulan diselesaikan", "suka melakukan perkara yang rutin", "sentiasa berikhtiar untuk menyelesaikan tugasan", "mudah mengasihani orang lain", "meneliti sesuatu perkara daripada pelbagai perspektif", "saya tidak layak gembira", "menetapkan matlamat untuk mencapai cita-cita", "sentiasa jujur", "menyusun jadual belajar sendiri", "suka mempelbagaikan idea dalam sesuatu perkara", "cepat bertindak apabila dicabar", "seronok terlibat dengan aktiviti berkumpulan", "bermotivasi apabila melihat orang lain berjaya", "menghormati kepercayaan dan gaya hidup orang lain", "menggemari permainan berbentuk penyelesaian masalah", "boleh membawa perubahan positif dalam kumpulan", "suka kepada cara kerja yang jelas", "boleh mengawal emosi apabila menghadapi kesukaran", "prihatin terhadap keperluan orang lain", "memastikan sesuatu maklumat adalah sahih", "mudah berasa rendah diri", "bercita-cita mencipta sesuatu yang boleh membawa perubahan", "sentiasa mesra dengan semua orang", "menentukan sendiri aktiviti masa lapang", "menyelesaikan masalah dengan pelbagai cara", "yakin idea saya adalah yang terbaik", "lebih bersemangat apabila berinteraksi dengan orang lain", "sentiasa berusaha untuk menjadi yang terbaik di dalam kelas", "suka pelbagai genre filem", "akan bertanya soalan untuk mendapatkan penjelasan", "memastikan pendapat setiap ahli kumpulan didengari", "mengurus waktu ulang kaji mengikut jadual", "tidak membiarkan kegagalan menghalang impian saya", "sentiasa mencari jalan untuk menawarkan bantuan", "menilai idea berdasarkan fakta", "selalu menyalahkan diri sendiri", "meletakkan matlamat untuk kerjaya masa hadapan", "tidak pernah mungkir janji", "bebas memilih bidang kerjaya", "suka menggabungkan pelbagai idea", "menyuarakan pendapat tanpa menghiraukan orang lain", "suka melibatkan diri dalam aktiviti sosial", "akan memastikan kejayaan dicapai dalam setiap pertandingan", "berminat mencuba pelbagai kaedah pembelajaran", "suka menyertai kuiz", "yakin membuat keputusan dalam kumpulan", "mengutamakan kekemasan diri", "sentiasa mengekalkan motivasi diri", "suka membantu guru", "suka menganalisis maklumat", "berasa tidak mampu untuk berjaya", "menetapkan impian untuk masa hadapan", "sentiasa gembira", "akan menentukan tindakan saya", "tidak suka kerja yang berstruktur", "tidak berdiam diri apabila pendapat ditolak", "yakin apabila berada di khalayak ramai", "suka bersaing", "boleh menyesuaikan diri dalam pelbagai keadaan", "mengaplikasi pengetahuan dalam kehidupan seharian", "berkeyakinan untuk memimpin", "sentiasa menyiapkan tugasan mengikut perancangan", "tidak mudah terpengaruh dengan orang lain", "mengambil berat terhadap orang lain", "berfikir sebelum bertindak", "malu dengan diri sendiri", "mempunyai inspirasi untuk berjaya", "sentiasa menepati masa", "suka membuat perancangan sendiri", "suka aktiviti inovasi", "berani mengkritik pendapat orang lain", "suka meluangkan masa lapang bersama rakan-rakan", "mengekalkan motivasi untuk mencapai matlamat", "mempelbagaikan gaya penampilan", "suka membincangkan perkara ilmiah", "suka menetapkan peraturan dalam kumpulan", "memastikan barangan dalam keadaan tersusun", "terus berjuang walaupun mengalami kegagalan", "simpati terhadap kesusahan orang lain", "cuba memahami sebab disebalik sesuatu peristiwa", "sentiasa berasa diri teraniaya", "menetapkan strategi untuk mencapai matlamat", "sentiasa sihat"];
const TRAITS = ["Autonomi", "Kreatif", "Agresif", "Ekstrovert", "Pencapaian", "Kepelbagaian", "Intelektual", "Kepemimpinan", "Struktur", "Resilien / Daya Tahan", "Menolong", "Analitikal", "Kritik Diri", "Wawasan", "Ketelusan"];
const PAGE_SIZE = 15;
const APP_VERSION="v1.5.1";
const CLASSES = [
  "4 AL FARABI",
  "4 IBNU ABBAS",
  "4 IBNU BATUTAH",
  "4 IBNU KHALDUN",
  "4 AL JABAR"
];
const SCORE_TO_PERCENT = {0:1,1:10,2:20,3:30,4:40,5:50,6:60,7:70,8:80,9:90,10:99};
let page=0;
let answers=Array(150).fill(null);

const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);

function escapeHTML(value){
  return String(value ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}
function isValidStudentPayload({nama,kelas,jantina,answers}){
  if(typeof nama!=="string" || nama.trim().length<2 || nama.trim().length>100) return false;
  if(!CLASSES.includes(kelas)) return false;
  if(!["Lelaki","Perempuan"].includes(jantina)) return false;
  if(!Array.isArray(answers) || answers.length!==150) return false;
  if(!answers.every(v=>v==="Y" || v==="T")) return false;
  return true;
}

function renderPage(){
  const start=page*PAGE_SIZE,end=Math.min(start+PAGE_SIZE,QUESTIONS.length);
  $("#questions").innerHTML=QUESTIONS.slice(start,end).map((q,i)=>{
    const n=start+i+1, v=answers[n-1];
    return `<div class="qcard"><div class="qtop"><div class="qnum">${n}</div><div class="qtext">Saya ${q}</div></div>
    <div class="choices">
      <div class="choice"><input type="radio" id="q${n}y" name="q${n}" value="Y" ${v==="Y"?"checked":""}><label for="q${n}y">YA</label></div>
      <div class="choice"><input type="radio" id="q${n}t" name="q${n}" value="T" ${v==="T"?"checked":""}><label for="q${n}t">TIDAK</label></div>
    </div></div>`;
  }).join("");
  $$("#questions input").forEach(el=>el.addEventListener("change",e=>{answers[+e.target.name.slice(1)-1]=e.target.value; updateProgress();}));
  $("#pageInfo").textContent=`Bahagian ${page+1} / ${Math.ceil(QUESTIONS.length/PAGE_SIZE)}`;
  $("#prevBtn").disabled=page===0;
  $("#nextBtn").classList.toggle("hidden",page===Math.ceil(QUESTIONS.length/PAGE_SIZE)-1);
  $("#submitBtn").classList.toggle("hidden",page!==Math.ceil(QUESTIONS.length/PAGE_SIZE)-1);
  window.scrollTo({top:0,behavior:"smooth"});
}
function updateProgress(){
  const done=answers.filter(Boolean).length;
  $("#progressText").textContent=`${done} / 150 dijawab`;
  $("#progressBar").style.width=(done/150*100)+"%";
}
$("#nextBtn").onclick=()=>{ if(page<9){page++;renderPage();} };
$("#prevBtn").onclick=()=>{ if(page>0){page--;renderPage();} };

function calcTraits(ans){
  return TRAITS.map((name,idx)=>{
    const items=[]; for(let n=idx+1;n<=150;n+=15) items.push(n);
    const raw=items.reduce((sum,n)=>sum+(ans[n-1]==="Y"?1:0),0);
    return {name,raw,percent:SCORE_TO_PERCENT[raw],items};
  });
}
function getRecords(){return JSON.parse(localStorage.getItem("itpT4Records")||"[]")}
function saveRecords(r){localStorage.setItem("itpT4Records",JSON.stringify(r))}

$("#submitBtn").onclick=()=>{
  const nama=$("#nama").value.trim();
  const kelas=$("#kelas").value;
  const jantina=$("#jantina").value;

  const requestId =
    "REQ-" +
    Date.now() +
    "-" +
    Math.random()
      .toString(36)
      .slice(2,10);

  const payload={
    action:"submit",
    requestId,
    nama,
    kelas,
    jantina,
    answers:[...answers]
  };

  if(!isValidStudentPayload(payload)){
    if(answers.some(v=>!v)){
      return alert("Masih ada item yang belum dijawab.");
    }
    return alert("Maklumat murid tidak lengkap atau tidak sah.");
  }

  const endpoint=window.ITP_CONFIG && window.ITP_CONFIG.SUBMIT_ENDPOINT;
  if(!endpoint){
    return alert("Konfigurasi penghantaran belum tersedia.");
  }

  const btn=$("#submitBtn");
  const oldText=btn.textContent;
  btn.disabled=true;
  btn.textContent="SEDANG MENGHANTAR...";

  let settled=false;

  function cleanup(){
    window.removeEventListener("message",handleSubmitResult);
  }

  function restoreButton(){
    btn.disabled=false;
    btn.textContent=oldText;
  }

  function resetForm(){
    answers=Array(150).fill(null);
    page=0;
    $("#nama").value="";
    $("#kelas").value="";
    $("#jantina").value="";
    renderPage();
    updateProgress();
  }

  function handleSubmitResult(event){
    let originHost="";

    try{
      originHost=new URL(event.origin).hostname;
    }catch(_){
      return;
    }

    const originSah=
      originHost==="script.google.com" ||
      originHost==="script.googleusercontent.com" ||
      originHost.endsWith(".googleusercontent.com");

    if(!originSah) return;

    const data=event.data;
    if(!data || data.type!=="ITP_SUBMIT_RESULT") return;
    if(data.requestId!==requestId) return;

    settled=true;
    cleanup();
    restoreButton();

    if(data.success===true){
      alert("Jawapan anda telah berjaya direkodkan. Terima kasih kerana menjawab dengan jujur.");
      resetForm();
      return;
    }

    if(data.code==="DUPLICATE_RECORD"){
      alert("Rekod anda telah diterima sebelum ini. Sila rujuk guru jika perlu pembetulan.");
      return;
    }

    alert(data.message || "Penghantaran tidak berjaya. Sila cuba semula.");
  }

  window.addEventListener("message",handleSubmitResult);

  try{
    const form=document.createElement("form");
    form.method="POST";
    form.action=endpoint;
    form.target="itpSubmitFrame";
    form.style.display="none";

    const input=document.createElement("input");
    input.type="hidden";
    input.name="payload";
    input.value=JSON.stringify(payload);

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();

    setTimeout(()=>{
      form.remove();
    },1500);

    setTimeout(()=>{
      if(settled) return;
      cleanup();
      restoreButton();
      alert("Sistem belum menerima pengesahan penghantaran. Sila semak sambungan dan cuba semula.");
    },15000);

  }catch(err){
    console.error(err);
    cleanup();
    restoreButton();
    alert("Penghantaran tidak berjaya. Sila cuba semula.");
  }
};

$("#adminBtn").onclick=()=>{   window.open(     "https://script.google.com/macros/s/AKfycbysaFrwQXDpptrlMHgNI0wcYsI0PFO4dKMuauCi_WrX_2a9-vBWv04a8Yl5L-1vVusmkw/exec?mode=guru",     "_blank"   ); };
$("#cancelPin").onclick=()=>$("#modal").classList.add("hidden");
$("#loginPin").onclick=()=>{
  $("#modal").classList.add("hidden");
  sessionStorage.setItem("itp_demo_teacher","1");
  showAdmin();
};
$("#backBtn").onclick=()=>{$("#adminView").classList.add("hidden");$("#studentView").classList.remove("hidden")};

function showAdmin(){
  $("#studentView").classList.add("hidden");$("#adminView").classList.remove("hidden");
  renderAdmin();
}

function averageTraits(records){
  if(!records.length) return TRAITS.map(name=>({name,value:0}));
  return TRAITS.map((name,i)=>({
    name,
    value: records.reduce((s,r)=>s+r.traits[i].percent,0)/records.length
  }));
}
function getTopTraits(avg,n=3){
  return [...avg].sort((a,b)=>b.value-a.value).slice(0,n);
}
function renderClassSummaries(){
  const all=getRecords();
  $("#classCards").innerHTML=CLASSES.map(cls=>{
    const records=all.filter(r=>r.kelas===cls);
    if(!records.length){
      return `<div class="classCard"><h4>${cls}</h4><div class="count">Belum ada rekod</div></div>`;
    }
    const avg=averageTraits(records);
    const top=getTopTraits(avg,3);
    const mini=avg.map(x=>`<div class="miniBarRow"><span>${x.name}</span><div class="miniTrack"><div class="miniFill" style="width:${x.value}%"></div></div><b>${x.value.toFixed(1)}%</b></div>`).join("");
    return `<div class="classCard">
      <h4>${cls}</h4>
      <div class="count">${records.length} murid</div>
      <div class="classTop">${top.map((x,i)=>`<span class="pill">Top ${i+1}: ${x.name} ${x.value.toFixed(1)}%</span>`).join("")}</div>
      <div class="miniBars">${mini}</div>
    </div>`;
  }).join("");
}
function renderComparisonTable(){
  const all=getRecords();
  const thead=$("#comparisonTable thead");
  const tbody=$("#comparisonTable tbody");
  thead.innerHTML=`<tr><th>Tret</th>${CLASSES.map(c=>`<th>${c}</th>`).join("")}</tr>`;
  tbody.innerHTML=TRAITS.map((trait,i)=>{
    const cells=CLASSES.map(cls=>{
      const records=all.filter(r=>r.kelas===cls);
      if(!records.length) return `<td>-</td>`;
      const v=records.reduce((s,r)=>s+r.traits[i].percent,0)/records.length;
      return `<td>${v.toFixed(1)}%</td>`;
    }).join("");
    return `<tr><td><b>${trait}</b></td>${cells}</tr>`;
  }).join("");
}
function renderOverallSummary(){
  const records=getRecords();
  if(!records.length){
    $("#overallTopTraits").innerHTML="<p>Belum ada data.</p>";
    $("#overallNarrative").innerHTML="<p>Rumusan keseluruhan akan dipaparkan selepas data murid diterima.</p>";
    return;
  }
  const avg=averageTraits(records);
  const top=getTopTraits(avg,3);
  $("#overallTopTraits").innerHTML=top.map((x,i)=>`<div class="topTrait"><span class="rank">TOP ${i+1}</span><b>${x.name}</b><strong>${x.value.toFixed(1)}%</strong></div>`).join("");
  $("#overallNarrative").innerHTML=`<p><b>Jumlah responden:</b> ${records.length} murid.</p>
  <p>Tiga tret dengan purata tertinggi bagi keseluruhan Tingkatan 4 ialah <b>${top[0].name}</b> (${top[0].value.toFixed(1)}%), <b>${top[1].name}</b> (${top[1].value.toFixed(1)}%) dan <b>${top[2].name}</b> (${top[2].value.toFixed(1)}%).</p>`;
}

function renderAdmin(){
  const records=getRecords();
  $("#statTotal").textContent=records.length;
  $("#statL").textContent=records.filter(r=>r.jantina==="Lelaki").length;
  $("#statP").textContent=records.filter(r=>r.jantina==="Perempuan").length;
  $("#statK").textContent=new Set(records.map(r=>r.kelas)).size;
  renderTable();
  renderFilteredSummary();
  renderClassSummaries();
  renderComparisonTable();
  renderOverallSummary();
}
function getFilteredRecords(){
  const q=$("#search").value.toLowerCase().trim();
  const fc=$("#filterClass").value;
  const fg=$("#filterGender").value;
  return getRecords().filter(r =>
    (!q || r.nama.toLowerCase().includes(q)) &&
    (!fc || r.kelas===fc) &&
    (!fg || r.jantina===fg)
  );
}
function renderTable(){
  const records=getFilteredRecords();
  $("#recordsBody").innerHTML=records.map(r=>{
    const top=[...r.traits].sort((a,b)=>b.percent-a.percent).slice(0,3).map(t=>`${t.name} (${t.percent}%)`).join(", ");
    return `<tr><td>${escapeHTML(r.nama)}</td><td>${escapeHTML(r.kelas)}</td><td>${escapeHTML(r.jantina)}</td><td>${escapeHTML(top)}</td><td><button onclick="showDetail(${r.id})">Lihat</button></td></tr>`;
  }).join("") || '<tr><td colspan="5">Tiada rekod untuk tapisan ini.</td></tr>';
}
$("#search").addEventListener("input",()=>{renderTable();renderFilteredSummary()});
$("#filterClass").addEventListener("change",()=>{renderTable();renderFilteredSummary()});
$("#filterGender").addEventListener("change",()=>{renderTable();renderFilteredSummary()});

function renderFilteredSummary(){
  const records=getFilteredRecords();
  const fc=$("#filterClass").value || "Semua kelas";
  const fg=$("#filterGender").value || "Semua jantina";
  $("#summaryScope").textContent=`${fc} • ${fg}`;

  if(!records.length){
    $("#summaryBars").innerHTML="<p>Tiada data untuk tapisan ini.</p>";
    $("#topTraits").innerHTML="<p>Tiada data untuk dirumuskan.</p>";
    return;
  }

  const avg=TRAITS.map((name,i)=>({
    name,
    value:records.reduce((s,r)=>s+r.traits[i].percent,0)/records.length
  }));

  $("#summaryBars").innerHTML=avg.map(x=>`<div class="barRow"><span>${x.name}</span><div class="barTrack"><div class="barFill" style="width:${x.value}%"></div></div><b>${x.value.toFixed(1)}%</b></div>`).join("");

  const top=[...avg].sort((a,b)=>b.value-a.value).slice(0,3);
  $("#topTraits").innerHTML=top.map((x,i)=>`<div class="topTrait"><span class="rank">TOP ${i+1}</span><b>${x.name}</b><strong>${x.value.toFixed(1)}%</strong></div>`).join("");
}
window.showDetail=(id)=>{
  const r=getRecords().find(x=>x.id===id); if(!r)return;
  $("#detailCard").classList.remove("hidden"); $("#detailName").textContent=r.nama; $("#detailMeta").textContent=`${r.kelas} • ${r.jantina}`;
  $("#traitGrid").innerHTML=r.traits.map(t=>`<div class="trait"><span>${t.name}</span><b>${t.percent}%</b><small>Skor mentah: ${t.raw}/10</small></div>`).join("");
  $("#answerGrid").innerHTML=r.answers.map((a,i)=>`<div class="ans"><b>${i+1}</b>${a}</div>`).join("");
  $("#detailCard").scrollIntoView({behavior:"smooth"});
};
$("#closeDetail").onclick=()=>$("#detailCard").classList.add("hidden");
$("#printBtn").onclick=()=>window.print();

renderPage(); updateProgress();