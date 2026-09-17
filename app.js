
const QUESTIONS = ["menentukan sesuatu perkara mengikut keputusan sendiri", "boleh menghasilkan karya kreatif", "tidak peduli kritikan terhadap saya", "suka aktiviti yang berbentuk perbincangan", "sangat mementingkan pencapaian dalam peperiksaan", "boleh beradaptasi dengan perubahan", "gemar aktiviti yang mencabar pemikiran", "berupaya memberi arahan dengan berkesan", "lebih selesa berada dalam persekitaran yang teratur", "tidak membiarkan kritikan melemahkan semangat saya", "suka membantu orang lain tanpa mengharapkan balasan", "suka membandingkan maklumat sebelum membuat pilihan", "tidak yakin dengan kebolehan diri sendiri", "mempunyai hala tuju hidup yang jelas", "tidak pernah melakukan kesilapan", "suka diberi kebebasan dalam membuat keputusan", "boleh menghasilkan karya seni", "mempertahankan pandangan saya dengan tegas", "suka bergaul dengan ramai orang", "memastikan kejayaan dicapai", "suka mempelajari budaya yang berbeza", "lebih gemar memahami sesuatu konsep berbanding menghafal", "berupaya mendorong orang lain dalam aktiviti berkumpulan", "menyusun tugasan mengikut keutamaan", "mempunyai tekad untuk menyelesaikan tugasan", "suka membantu orang lain tanpa mengira latar belakang", "mempertimbangkan pelbagai perkara sebelum membuat keputusan", "tidak mempunyai kelebihan diri", "mencari peluang untuk mencapai impian", "tidak pernah berasa takut", "boleh bekerja bersendirian tanpa dipengaruhi orang lain", "mempunyai imaginasi yang tinggi", "sentiasa ingin menang dalam menyuarakan pendapat", "sentiasa memulakan perbualan dengan orang lain", "memastikan prestasi diri pada tahap yang terbaik", "menggunakan pendekatan berbeza dalam menyelesaikan masalah", "boleh menghubungkait sesuatu perkara yang dipelajari", "berani mengambil risiko dalam membuat keputusan", "menyusun pakaian mengikut warna", "mampu bangkit semula selepas mengalami kegagalan", "suka memudahkan urusan orang lain", "sering mengkaji bagaimana sesuatu alat berfungsi", "meragui kebolehan diri saya", "proaktif dalam setiap perkara yang dilakukan", "tidak pernah berselisih faham", "selesa melakukan tugasan mengikut kawalan sendiri", "boleh mengubah suai sesuatu menjadi lebih menarik", "berterus terang jika tidak berpuas hati", "berinteraksi dengan ramai orang", "mengutamakan pencapaian dalam perkara yang dimulakan", "menyesuaikan diri dengan perubahan keadaan", "suka mendalami maklumat baharu untuk menambah pengetahuan", "mengambil berat kebajikan ahli kumpulan", "suka menyusun barang mengikut kategori", "tetap berusaha walaupun menghadapi kesukaran", "bersedia membantu tanpa diminta", "membandingkan secara mendalam tentang sesuatu perkara", "selalu beranggapan diri akan dikritik", "telah menetapkan hala tuju kerjaya", "tidak pernah rasa bersalah", "berpuas hati apabila dapat membuat keputusan sendiri", "menghasilkan sesuatu yang unik", "mengutamakan matlamat sendiri berbanding perasaan orang lain", "yakin untuk bercakap di hadapan orang ramai", "suka mencabar diri", "suka mencuba perkara baharu", "suka meneroka perkembangan teknologi terkini", "memastikan tugasan kumpulan diselesaikan", "suka melakukan perkara yang rutin", "sentiasa berikhtiar untuk menyelesaikan tugasan", "mudah mengasihani orang lain", "meneliti sesuatu perkara daripada pelbagai perspektif", "saya tidak layak gembira", "menetapkan matlamat untuk mencapai cita-cita", "sentiasa jujur", "menyusun jadual belajar sendiri", "suka mempelbagaikan idea dalam sesuatu perkara", "cepat bertindak apabila dicabar", "seronok terlibat dengan aktiviti berkumpulan", "bermotivasi apabila melihat orang lain berjaya", "menghormati kepercayaan dan gaya hidup orang lain", "menggemari permainan berbentuk penyelesaian masalah", "boleh membawa perubahan positif dalam kumpulan", "suka kepada cara kerja yang jelas", "boleh mengawal emosi apabila menghadapi kesukaran", "prihatin terhadap keperluan orang lain", "memastikan sesuatu maklumat adalah sahih", "mudah berasa rendah diri", "bercita-cita mencipta sesuatu yang boleh membawa perubahan", "sentiasa mesra dengan semua orang", "menentukan sendiri aktiviti masa lapang", "menyelesaikan masalah dengan pelbagai cara", "yakin idea saya adalah yang terbaik", "lebih bersemangat apabila berinteraksi dengan orang lain", "sentiasa berusaha untuk menjadi yang terbaik di dalam kelas", "suka pelbagai genre filem", "akan bertanya soalan untuk mendapatkan penjelasan", "memastikan pendapat setiap ahli kumpulan didengari", "mengurus waktu ulang kaji mengikut jadual", "tidak membiarkan kegagalan menghalang impian saya", "sentiasa mencari jalan untuk menawarkan bantuan", "menilai idea berdasarkan fakta", "selalu menyalahkan diri sendiri", "meletakkan matlamat untuk kerjaya masa hadapan", "tidak pernah mungkir janji", "bebas memilih bidang kerjaya", "suka menggabungkan pelbagai idea", "menyuarakan pendapat tanpa menghiraukan orang lain", "suka melibatkan diri dalam aktiviti sosial", "akan memastikan kejayaan dicapai dalam setiap pertandingan", "berminat mencuba pelbagai kaedah pembelajaran", "suka menyertai kuiz", "yakin membuat keputusan dalam kumpulan", "mengutamakan kekemasan diri", "sentiasa mengekalkan motivasi diri", "suka membantu guru", "suka menganalisis maklumat", "berasa tidak mampu untuk berjaya", "menetapkan impian untuk masa hadapan", "sentiasa gembira", "akan menentukan tindakan saya", "tidak suka kerja yang berstruktur", "tidak berdiam diri apabila pendapat ditolak", "yakin apabila berada di khalayak ramai", "suka bersaing", "boleh menyesuaikan diri dalam pelbagai keadaan", "mengaplikasi pengetahuan dalam kehidupan seharian", "berkeyakinan untuk memimpin", "sentiasa menyiapkan tugasan mengikut perancangan", "tidak mudah terpengaruh dengan orang lain", "mengambil berat terhadap orang lain", "berfikir sebelum bertindak", "malu dengan diri sendiri", "mempunyai inspirasi untuk berjaya", "sentiasa menepati masa", "suka membuat perancangan sendiri", "suka aktiviti inovasi", "berani mengkritik pendapat orang lain", "suka meluangkan masa lapang bersama rakan-rakan", "mengekalkan motivasi untuk mencapai matlamat", "mempelbagaikan gaya penampilan", "suka membincangkan perkara ilmiah", "suka menetapkan peraturan dalam kumpulan", "memastikan barangan dalam keadaan tersusun", "terus berjuang walaupun mengalami kegagalan", "simpati terhadap kesusahan orang lain", "cuba memahami sebab disebalik sesuatu peristiwa", "sentiasa berasa diri teraniaya", "menetapkan strategi untuk mencapai matlamat", "sentiasa sihat"];
const TRAITS = ["Autonomi", "Kreatif", "Agresif", "Ekstrovert", "Pencapaian", "Kepelbagaian", "Intelektual", "Kepemimpinan", "Struktur", "Resilien / Daya Tahan", "Menolong", "Analitikal", "Kritik Diri", "Wawasan", "Ketelusan"];
const PAGE_SIZE = 15;
const SCORE_TO_PERCENT = {0:1,1:10,2:20,3:30,4:40,5:50,6:60,7:70,8:80,9:90,10:99};
let page=0;
let answers=Array(150).fill(null);

const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);

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
  const nama=$("#nama").value.trim(), kelas=$("#kelas").value.trim(), jantina=$("#jantina").value;
  if(!nama||!kelas||!jantina) return alert("Sila lengkapkan nama, kelas dan jantina.");
  if(answers.some(v=>!v)) return alert("Masih ada item yang belum dijawab.");
  const rec={id:Date.now(),nama,kelas,jantina,answers:[...answers],traits:calcTraits(answers),submittedAt:new Date().toISOString()};
  const records=getRecords(); records.push(rec); saveRecords(records);
  alert("Jawapan anda telah berjaya dihantar. Terima kasih kerana menjawab dengan jujur.");
  answers=Array(150).fill(null); page=0; $("#nama").value=""; $("#kelas").value=""; $("#jantina").value=""; renderPage(); updateProgress();
};

$("#adminBtn").onclick=()=>$("#modal").classList.remove("hidden");
$("#cancelPin").onclick=()=>$("#modal").classList.add("hidden");
$("#loginPin").onclick=()=>{
  if($("#pin").value==="2026"){$("#modal").classList.add("hidden");showAdmin();$("#pin").value="";}
  else alert("PIN tidak tepat.");
};
$("#backBtn").onclick=()=>{$("#adminView").classList.add("hidden");$("#studentView").classList.remove("hidden")};

function showAdmin(){
  $("#studentView").classList.add("hidden");$("#adminView").classList.remove("hidden");
  renderAdmin();
}
function renderAdmin(){
  const records=getRecords();
  $("#statTotal").textContent=records.length;
  $("#statL").textContent=records.filter(r=>r.jantina==="Lelaki").length;
  $("#statP").textContent=records.filter(r=>r.jantina==="Perempuan").length;
  $("#statK").textContent=new Set(records.map(r=>r.kelas)).size;
  const classes=[...new Set(records.map(r=>r.kelas))].sort();
  $("#filterClass").innerHTML='<option value="">Semua kelas</option>'+classes.map(c=>`<option>${c}</option>`).join("");
  renderTable(); renderSummary(records);
}
function renderTable(){
  const q=$("#search").value.toLowerCase(), fc=$("#filterClass").value;
  const records=getRecords().filter(r=>(!q||r.nama.toLowerCase().includes(q))&&(!fc||r.kelas===fc));
  $("#recordsBody").innerHTML=records.map(r=>{
    const top=[...r.traits].sort((a,b)=>b.percent-a.percent).slice(0,3).map(t=>`${t.name} (${t.percent}%)`).join(", ");
    return `<tr><td>${r.nama}</td><td>${r.kelas}</td><td>${r.jantina}</td><td>${top}</td><td><button onclick="showDetail(${r.id})">Lihat</button></td></tr>`;
  }).join("") || '<tr><td colspan="5">Tiada rekod.</td></tr>';
}
$("#search").addEventListener("input",renderTable); $("#filterClass").addEventListener("change",renderTable);

function renderSummary(records){
  if(!records.length){$("#summaryBars").innerHTML="<p>Belum ada data.</p>";return}
  const avg=TRAITS.map((name,i)=>records.reduce((s,r)=>s+r.traits[i].percent,0)/records.length);
  $("#summaryBars").innerHTML=avg.map((v,i)=>`<div class="barRow"><span>${TRAITS[i]}</span><div class="barTrack"><div class="barFill" style="width:${v}%"></div></div><b>${v.toFixed(1)}%</b></div>`).join("");
}
window.showDetail=(id)=>{
  const r=getRecords().find(x=>x.id===id); if(!r)return;
  $("#detailCard").classList.remove("hidden"); $("#detailName").textContent=r.nama; $("#detailMeta").textContent=`${r.kelas} • ${r.jantina}`;
  $("#traitGrid").innerHTML=r.traits.map(t=>`<div class="trait"><span>${t.name}</span><b>${t.percent}%</b><small>Skor mentah: ${t.raw}/10</small></div>`).join("");
  $("#answerGrid").innerHTML=r.answers.map((a,i)=>`<div class="ans"><b>${i+1}</b>${a}</div>`).join("");
  $("#detailCard").scrollIntoView({behavior:"smooth"});
};
$("#closeDetail").onclick=()=>$("#detailCard").classList.add("hidden");

renderPage(); updateProgress();
