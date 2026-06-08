// =========================
// BASES DE DATOS COMPLETAS
// =========================
const hechizosDatabase = [
    { nombre: "Prosperidad", descripcion: "Reflexión enfocada en metas y abundancia. Enciende una vela verde y visualiza dinero entrando.", materiales: "Vela verde, moneda, canela", mejorMomento: "Luna Creciente" },
    { nombre: "Protección", descripcion: "Meditación orientada a la seguridad personal. Usa sal negra en puertas y ventanas.", materiales: "Sal negra, incienso de ruda", mejorMomento: "Luna Menguante" },
    { nombre: "Creatividad", descripcion: "Estimular nuevas ideas y proyectos. Coloca una pluma y tinta morada en tu altar.", materiales: "Pluma, tinta morada, cuarzo", mejorMomento: "Luna Nueva" },
    { nombre: "Confianza", descripcion: "Fortalecer la seguridad en uno mismo. Repite afirmaciones frente a un espejo.", materiales: "Espejo, vela amarilla", mejorMomento: "Luna Llena" },
    { nombre: "Calma", descripcion: "Ejercicio de relajación y concentración. Toma té de manzanilla y respira profundo.", materiales: "Manzanilla, lavanda", mejorMomento: "Cualquier fase" },
    { nombre: "Amistad", descripcion: "Reflexión sobre vínculos positivos. Comparte miel simbólicamente.", materiales: "Miel, fotos de amigos", mejorMomento: "Viernes" },
    { nombre: "Amor Verdadero", descripcion: "Atrae amor sincero con vela rosa y miel.", materiales: "Vela rosa, miel, papel rojo", mejorMomento: "Viernes de Luna Creciente" },
    { nombre: "Abundancia", descripcion: "Ritual con canela y moneda para prosperidad.", materiales: "Canela, moneda dorada", mejorMomento: "Jueves" },
    { nombre: "Sanación", descripcion: "Baño de hierbas para bienestar físico y emocional.", materiales: "Romero, lavanda, sal marina", mejorMomento: "Luna Menguante" },
    { nombre: "Sueños Proféticos", descripcion: "Coloca cuarzo bajo la almohada en luna llena.", materiales: "Cuarzo claro, amatista", mejorMomento: "Luna Llena" },
    { nombre: "Protección del Hogar", descripcion: "Sahumerio de ruda y sal en puertas.", materiales: "Ruda, sal negra", mejorMomento: "Sábado" },
    { nombre: "Limpieza Energética", descripcion: "Baño de sal marina y romero.", materiales: "Sal marina, romero", mejorMomento: "Luna Menguante" }
];

const ritualesDatabase = [
    { nombre: "Círculo Sagrado", descripcion: "Trazar círculo protector invocando los 4 elementos: Este(aire), Sur(fuego), Oeste(agua), Norte(tierra).", materiales: "Incienso, vela, agua, sal", duracion: "15-20 min" },
    { nombre: "Ofrendas de Luna Nueva", descripcion: "Ofrecer leche y miel a plantas o animales.", materiales: "Leche, miel, cuenco", duracion: "10 min" },
    { nombre: "Ritual de Gratitud", descripcion: "Registra 3 bendiciones del día en Luna Llena.", materiales: "Grimorio, pluma blanca", duracion: "15 min" },
    { nombre: "Limpieza con Incienso", descripcion: "Purifica tu aura y espacio con humo sagrado.", materiales: "Incienso de sándalo o ruda", duracion: "10 min" },
    { nombre: "Consagración de Herramientas", descripcion: "Bendice herramientas con los 4 elementos.", materiales: "Tierra, agua, fuego, aire", duracion: "20 min" },
    { nombre: "Atraer el Amor", descripcion: "Vela rosa y miel en luna creciente.", materiales: "Vela rosa, miel", duracion: "15 min" },
    { nombre: "Crear Abundancia", descripcion: "Frasco con canela y moneda.", materiales: "Frasco, canela, moneda", duracion: "10 min" },
    { nombre: "Crear Milagros", descripcion: "Meditación profunda pidiendo guía espiritual.", materiales: "Ninguno", duracion: "20 min" }
];

const cristalesDatabase = [
    { nombre: "Cuarzo Transparente", propiedad: "Amplifica energía y claridad mental", chakra: "Corona", limpieza: "Agua y sol" },
    { nombre: "Amatista", propiedad: "Protección espiritual y sueños proféticos", chakra: "Tercer ojo", limpieza: "Agua lunar" },
    { nombre: "Ónix Negro", propiedad: "Absorbe energías negativas", chakra: "Raíz", limpieza: "Humo de salvia" },
    { nombre: "Jade", propiedad: "Atrae prosperidad y armonía", chakra: "Corazón", limpieza: "Tierra" },
    { nombre: "Citrino", propiedad: "Abundancia y alegría", chakra: "Plexo solar", limpieza: "Agua y sol" },
    { nombre: "Rodocrosita", propiedad: "Amor propio y sanación emocional", chakra: "Corazón", limpieza: "Agua" },
    { nombre: "Ojo de Tigre", propiedad: "Protección y claridad", chakra: "Plexo solar", limpieza: "Tierra" },
    { nombre: "Lapislázuli", propiedad: "Sabiduría y verdad", chakra: "Garganta", limpieza: "Agua lunar" }
];

const hierbasDatabase = [
    { nombre: "Romero", uso: "Protección, limpieza, memoria", elemento: "Fuego", planeta: "Sol" },
    { nombre: "Lavanda", uso: "Paz, amor, sueños", elemento: "Aire", planeta: "Mercurio" },
    { nombre: "Ruda", uso: "Protección fuerte, contra mal de ojo", elemento: "Fuego", planeta: "Marte" },
    { nombre: "Canela", uso: "Dinero, éxito, pasión", elemento: "Fuego", planeta: "Júpiter" },
    { nombre: "Salvia", uso: "Purificación, sabiduría", elemento: "Aire", planeta: "Tierra" },
    { nombre: "Menta", uso: "Atraer clientes, prosperidad", elemento: "Aire", planeta: "Mercurio" },
    { nombre: "Manzanilla", uso: "Paz, dinero, sueños", elemento: "Agua", planeta: "Sol" },
    { nombre: "Albahaca", uso: "Amor, protección, dinero", elemento: "Fuego", planeta: "Marte" }
];

const coloresDatabase = [
    { color: "Blanco", significado: "Paz, pureza, protección", uso: "Luna nueva", hex: "#FFFFFF" },
    { color: "Rojo", significado: "Pasión, fuerza, energía", uso: "Beltane, amor", hex: "#FF0000" },
    { color: "Verde", significado: "Abundancia, salud, naturaleza", uso: "Prosperidad", hex: "#00FF00" },
    { color: "Morado", significado: "Espiritualidad, poder psíquico", uso: "Adivinación", hex: "#800080" },
    { color: "Dorado", significado: "Éxito, riqueza, sol", uso: "Litha", hex: "#FFD700" },
    { color: "Rosa", significado: "Amor, amistad, ternura", uso: "Atraer amor", hex: "#FFC0CB" },
    { color: "Azul", significado: "Paz, comunicación, sueños", uso: "Calma", hex: "#0000FF" },
    { color: "Negro", significado: "Protección, absorción", uso: "Limpieza", hex: "#000000" }
];

const sabbatsDatabase = [
    { nombre: "Yule", fecha: "21-22 Diciembre", significado: "Solsticio de invierno. Renacimiento del sol.", elemento: "Hielo/Tejo" },
    { nombre: "Imbolc", fecha: "1-2 Febrero", significado: "Fiesta de la luz. Purificación.", elemento: "Fuego" },
    { nombre: "Ostara", fecha: "20-21 Marzo", significado: "Equinoccio de primavera. Equilibrio.", elemento: "Huevos/Conejos" },
    { nombre: "Beltane", fecha: "30 Abril-1 Mayo", significado: "Fuego, fertilidad, amor.", elemento: "Fuego/Flores" },
    { nombre: "Litha", fecha: "20-21 Junio", significado: "Solsticio de verano. Poder máximo.", elemento: "Sol/Miel" },
    { nombre: "Lughnasadh", fecha: "1-2 Agosto", significado: "Primera cosecha. Gratitud.", elemento: "Pan/Maíz" },
    { nombre: "Mabon", fecha: "22-23 Septiembre", significado: "Equinoccio de otoño. Segunda cosecha.", elemento: "Manzanas/Hojas" },
    { nombre: "Samhain", fecha: "31 Oct-1 Nov", significado: "Año nuevo wiccano. Honrar ancestros.", elemento: "Calabazas" }
];

const tarotDatabase = [
    "🌞 El Sol - Éxito, alegría, vitalidad",
    "🌙 La Luna - Intuición, sueños, lo oculto",
    "⭐ La Estrella - Esperanza, guía, inspiración",
    "⚖️ La Justicia - Equilibrio, karma, verdad",
    "🌀 La Rueda - Cambios, destino, ciclos",
    "💀 La Muerte - Transformación, nuevos comienzos",
    "👤 El Ermitaño - Sabiduría, introspección",
    "⚡ La Torre - Crisis, revelación, cambio",
    "💖 Los Enamorados - Amor, decisiones",
    "🦁 La Fuerza - Valentía, control interno"
];

const diasMagicos = [
    { dia: "Lunes", planeta: "🌙 Luna", magia: "Intuición, sueños, emociones", color: "Plateado" },
    { dia: "Martes", planeta: "♂️ Marte", magia: "Protección, coraje, acción", color: "Rojo" },
    { dia: "Miércoles", planeta: "☿ Mercurio", magia: "Comunicación, estudios", color: "Amarillo" },
    { dia: "Jueves", planeta: "♃ Júpiter", magia: "Abundancia, éxito", color: "Azul" },
    { dia: "Viernes", planeta: "♀ Venus", magia: "Amor, amistad, arte", color: "Verde/Rosa" },
    { dia: "Sábado", planeta: "♄ Saturno", magia: "Limpieza, protección", color: "Negro" },
    { dia: "Domingo", planeta: "☉ Sol", magia: "Éxito, salud, energía", color: "Dorado" }
];

const frases = [
    "✨ Confía en tu intuición, ella conoce el camino.",
    "🌙 La paciencia también es poder mágico.",
    "🌀 Cada ciclo trae aprendizaje y renovación.",
    "🌟 Todo cambio empieza con una decisión consciente.",
    "🍃 La naturaleza inspira equilibrio en todo.",
    "🔥 La constancia supera al impulso desordenado.",
    "👁 Escucha antes de actuar, observa antes de hablar.",
    "🌸 Cada día es una nueva oportunidad para crecer.",
    "💜 La magia está en los pequeños rituales diarios.",
    "🌿 Honra tus ciclos como la luna honra los suyos.",
    "💎 Los cristales son la sabiduría petrificada de la tierra.",
    "🕯️ Una vela encendida es un deseo lanzado al universo."
];

// =========================
// FUNCIÓN PARA CREAR TARJETAS EXPANDIBLES
// =========================
function crearTarjetaExpandible(item, tipo) {
    const div = document.createElement("div");
    div.className = "item-card";
    let detallesHtml = "";
    if (tipo === "hechizo") {
        detallesHtml = `<p><span class="detail-label">📖 Descripción:</span> ${item.descripcion}</p>
                        <p><span class="detail-label">🧴 Materiales:</span> ${item.materiales || "No especificado"}</p>
                        <p><span class="detail-label">🌙 Mejor momento:</span> ${item.mejorMomento || "Cualquier momento"}</p>`;
    } else if (tipo === "ritual") {
        detallesHtml = `<p><span class="detail-label">📖 Descripción:</span> ${item.descripcion}</p>
                        <p><span class="detail-label">🧴 Materiales:</span> ${item.materiales || "No especificado"}</p>
                        <p><span class="detail-label">⏱️ Duración:</span> ${item.duracion || "Variable"}</p>`;
    } else if (tipo === "cristal") {
        detallesHtml = `<p><span class="detail-label">💎 Propiedad:</span> ${item.propiedad}</p>
                        <p><span class="detail-label">🌀 Chakra:</span> ${item.chakra || "No especificado"}</p>
                        <p><span class="detail-label">💧 Limpieza:</span> ${item.limpieza || "Agua y sol"}</p>`;
    } else if (tipo === "hierba") {
        detallesHtml = `<p><span class="detail-label">🌿 Uso mágico:</span> ${item.uso}</p>
                        <p><span class="detail-label">🔥 Elemento:</span> ${item.elemento}</p>
                        <p><span class="detail-label">🪐 Planeta:</span> ${item.planeta}</p>`;
    } else if (tipo === "color") {
        detallesHtml = `<p><span class="detail-label">🎨 Significado:</span> ${item.significado}</p>
                        <p><span class="detail-label">📿 Uso:</span> ${item.uso}</p>
                        <p><span class="detail-label">💎 Hex:</span> <span style="background:white; padding:2px 8px; border-radius:10px; color:black;">${item.hex}</span></p>`;
    } else if (tipo === "sabbat") {
        detallesHtml = `<p><span class="detail-label">📅 Fecha:</span> ${item.fecha}</p>
                        <p><span class="detail-label">📖 Significado:</span> ${item.significado}</p>
                        <p><span class="detail-label">🔥 Elemento:</span> ${item.elemento}</p>`;
    }
    div.innerHTML = `<div class="item-header"><h3>${tipo === "color" ? "🎨 " : ""}${item.nombre || item.color || ""}</h3><span class="toggle-icon">▼</span></div>
                     <div class="item-details">${detallesHtml}</div>`;
    const header = div.querySelector(".item-header");
    const details = div.querySelector(".item-details");
    const icon = div.querySelector(".toggle-icon");
    header.addEventListener("click", () => {
        details.classList.toggle("show");
        icon.style.transform = details.classList.contains("show") ? "rotate(180deg)" : "rotate(0deg)";
    });
    return div;
}

// =========================
// FUNCIONES DE CARGA
// =========================
function cargarHechizos() { const c = document.getElementById("listaHechizos"); if(c){ c.innerHTML=""; hechizosDatabase.forEach(h=>c.appendChild(crearTarjetaExpandible(h,"hechizo"))); } }
function cargarRituales() { const c = document.getElementById("listaRituales"); if(c){ c.innerHTML=""; ritualesDatabase.forEach(r=>c.appendChild(crearTarjetaExpandible(r,"ritual"))); } }
function cargarCristales() { const c = document.getElementById("listaCristales"); if(c){ c.innerHTML=""; cristalesDatabase.forEach(cr=>c.appendChild(crearTarjetaExpandible(cr,"cristal"))); } }
function cargarHierbas() { const c = document.getElementById("listaHierbas"); if(c){ c.innerHTML=""; hierbasDatabase.forEach(h=>c.appendChild(crearTarjetaExpandible(h,"hierba"))); } }
function cargarColores() { const c = document.getElementById("listaColores"); if(c){ c.innerHTML=""; coloresDatabase.forEach(col=>c.appendChild(crearTarjetaExpandible(col,"color"))); } }
function cargarSabbats() { const c = document.getElementById("listaSabbats"); if(c){ c.innerHTML=""; sabbatsDatabase.forEach(s=>c.appendChild(crearTarjetaExpandible(s,"sabbat"))); } }
function cargarDiasMagicos() { const c = document.getElementById("diasMagicosLista"); if(c){ c.innerHTML=""; diasMagicos.forEach(d=>{const li=document.createElement("li"); li.innerHTML=`<strong>${d.dia}</strong> - ${d.planeta}: ${d.magia} (${d.color})`; c.appendChild(li);}); } }

// =========================
// NAVEGACIÓN
// =========================
function mostrar(id) { document.querySelectorAll(".pagina").forEach(p=>p.classList.add("oculto")); document.getElementById(id).classList.remove("oculto"); localStorage.setItem("ultimaSeccion",id); }
function iniciarNavegacion() { document.querySelectorAll("nav button").forEach(btn=>btn.addEventListener("click",()=>mostrar(btn.dataset.seccion))); const ult=localStorage.getItem("ultimaSeccion"); if(ult&&document.getElementById(ult)) mostrar(ult); else mostrar("inicio"); }

// =========================
// RELOJ Y FASE LUNAR
// =========================
function actualizarReloj() { const r=document.getElementById("reloj"); if(r) r.innerText=new Date().toLocaleTimeString(); }
setInterval(actualizarReloj,1000);
function actualizarLuna() { document.getElementById("faseLuna").innerHTML="🌕 Luna Llena"; document.getElementById("consejoLunar").innerHTML="🌕 Poder máximo para rituales"; }
function mostrarSabbatActual() { document.getElementById("sabbatActual").innerHTML="✨ Samhain (31 Oct-1 Nov) - Año nuevo wiccano"; }
function mostrarDiaMagico() { const dias=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]; const hoy=dias[new Date().getDay()]; const info=diasMagicos.find(d=>d.dia===hoy)||{planeta:"🌙",magia:"Introspección"}; document.getElementById("diaMagico").innerHTML=`✨ ${hoy} - ${info.planeta}: ${info.magia}`; }
function fechaActual() { const el=document.getElementById("fechaActual"); if(el) el.innerText=`📆 ${new Date().toLocaleDateString('es-ES',{year:'numeric',month:'long',day:'numeric'})}`; }

// =========================
// FRASES Y HECHIZOS ALEATORIOS
// =========================
function nuevaFrase() { document.getElementById("frase").innerText=frases[Math.floor(Math.random()*frases.length)]; }
function hechizoAleatorio() { const h=hechizosDatabase[Math.floor(Math.random()*hechizosDatabase.length)]; document.getElementById("hechizoRandom").innerHTML=`🔮 ${h.nombre}: ${h.descripcion.substring(0,80)}...`; }
function cartaDia() { document.getElementById("cartaDia").innerHTML=`✨ ${tarotDatabase[Math.floor(Math.random()*tarotDatabase.length)]} ✨`; }
function cartaTarotUnica() { document.getElementById("resultadoTarot").innerHTML=`✨ ${tarotDatabase[Math.floor(Math.random()*tarotDatabase.length)]} ✨`; }
function cartasTarotTres() { document.getElementById("resultadoTarotTres").innerHTML=`<div class="tarjeta">📜 Pasado: ${tarotDatabase[Math.floor(Math.random()*tarotDatabase.length)]}</div><div class="tarjeta">🔮 Presente: ${tarotDatabase[Math.floor(Math.random()*tarotDatabase.length)]}</div><div class="tarjeta">✨ Futuro: ${tarotDatabase[Math.floor(Math.random()*tarotDatabase.length)]}</div>`; }
function ritualLunaNuevaAmor() { document.getElementById("ritualDelDia").innerHTML=`🌑 Ritual Luna Nueva: Escribe tu intención, dóblala y colócala bajo agua con vela amarilla.`; }
function ritualAmorSimple() { document.getElementById("ritualDelDia").innerHTML=`💖 Ritual de Amor: Vela rosa + miel + papel rojo. Guarda bajo la almohada.`; }

// =========================
// NOTAS Y GRIMORIO
// =========================
function mostrarMensaje(t,d=2000){ const m=document.getElementById("mensaje"); if(m){ m.innerText=t; setTimeout(()=>{if(m.innerText===t)m.innerText="";},d); } }
function guardarNota(){ const t=document.getElementById("nota")?.value||""; if(!t.trim())return mostrarMensaje("⚠️ Escribe algo"); localStorage.setItem("grimorio",t); mostrarMensaje("✅ Guardada"); }
function descargarNotas(){ const t=document.getElementById("nota")?.value||""; if(!t.trim())return mostrarMensaje("📝 No hay nada"); const a=document.createElement("a"); a.href=URL.createObjectURL(new Blob([t])); a.download=`grimorio_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.txt`; a.click(); mostrarMensaje("📄 Descargado"); }
function exportarTodo(){ const datos={grimorio:localStorage.getItem("grimorio")||"",suenos:JSON.parse(localStorage.getItem("suenos")||"[]")}; const a=document.createElement("a"); a.href=URL.createObjectURL(new Blob([JSON.stringify(datos)])); a.download=`grimorio_completo.json`; a.click(); mostrarMensaje("💿 Exportado"); }
function importarTodo(){ document.getElementById("archivoImportar").click(); }
document.getElementById("archivoImportar")?.addEventListener("change",(e)=>{ const f=e.target.files[0]; if(!f)return; const r=new FileReader(); r.onload=(ev)=>{ try{ const d=JSON.parse(ev.target.result); if(d.grimorio)localStorage.setItem("grimorio",d.grimorio); document.getElementById("nota").value=localStorage.getItem("grimorio")||""; mostrarMensaje("📂 Importado"); }catch(e){mostrarMensaje("❌ Error");} }; r.readAsText(f); });
function guardarSueno(){ const f=document.getElementById("fechaSueno").value; const t=document.getElementById("textoSueno").value; if(!f||!t.trim())return mostrarMensaje("⚠️ Completa fecha y sueño"); let s=JSON.parse(localStorage.getItem("suenos")||"[]"); s.push({fecha:f,texto:t}); localStorage.setItem("suenos",JSON.stringify(s)); mostrarMensaje("✅ Sueño guardado"); document.getElementById("textoSueno").value=""; }
function verSuenos(){ const s=JSON.parse(localStorage.getItem("suenos")||"[]"); const c=document.getElementById("listaSuenos"); if(!c)return; if(s.length===0){c.innerHTML="<p>💭 No hay sueños</p>";return;} c.innerHTML="<h3>📖 Tus sueños:</h3>"; s.reverse().forEach(sue=>{const div=document.createElement("div"); div.className="tarjeta"; div.innerHTML=`<strong>📅 ${sue.fecha}</strong><br><p>${sue.texto}</p>`; c.appendChild(div);}); }
function calcularProximasLunas(){ let lunas=[]; for(let i=1;i<=2;i++){ let f=new Date(); f.setDate(f.getDate()+(29.53*i)); lunas.push(`🌕 Aprox: ${f.toLocaleDateString('es-ES')}`); } document.getElementById("proximasLunas").innerHTML=lunas.join("<br>"); }
function calcularLunaNatal(){ const f=document.getElementById("fechaNacimiento").value; if(!f)return; document.getElementById("resultadoLunaNatal").innerHTML=`✨ Naciste bajo una energía lunar especial ✨`; }
function toggleModoOscuro(){ document.body.classList.toggle("modo-claro"); const btn=document.getElementById("btnModoOscuro"); btn.textContent=document.body.classList.contains("modo-claro")?"🌙 Modo Oscuro":"🌓 Modo Claro"; }

// =========================
// BUSCADORES
// =========================
function iniciarBusquedas(){
    const busquedas=["busquedaHechizos","busquedaRituales","busquedaCristales","busquedaHierbas"];
    busquedas.forEach(id=>{ const el=document.getElementById(id); if(el) el.addEventListener("keyup",()=>{ const texto=el.value.toLowerCase(); const listaId=id.replace("busqueda","lista"); const items=document.querySelectorAll(`#${listaId} .item-card`); items.forEach(item=>{ const titulo=item.querySelector("h3")?.innerText.toLowerCase()||""; item.style.display=titulo.includes(texto)?"block":"none"; }); }); });
}

// =========================
// INICIO
// =========================
function iniciarBotones(){
    const btns={btnNuevaFrase:nuevaFrase,btnHechizoAleatorio:hechizoAleatorio,btnCartaDia:cartaDia,btnTarotUnica:cartaTarotUnica,btnTarotTres:cartasTarotTres,btnRitualLunaNueva:ritualLunaNuevaAmor,btnRitualAmor:ritualAmorSimple,btnGuardarNota:guardarNota,btnDescargarNota:descargarNotas,btnExportarTodo:exportarTodo,btnImportarTodo:importarTodo,btnGuardarSueno:guardarSueno,btnVerSuenos:verSuenos,btnProximasLunas:calcularProximasLunas,btnLunaNatal:calcularLunaNatal,btnModoOscuro:toggleModoOscuro};
    for(const[id,fn] of Object.entries(btns)){ const el=document.getElementById(id); if(el) el.addEventListener("click",fn); }
}
window.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("nota").value=localStorage.getItem("grimorio")||"";
    actualizarLuna(); actualizarReloj(); fechaActual(); nuevaFrase(); mostrarDiaMagico(); mostrarSabbatActual();
    cargarHechizos(); cargarRituales(); cargarCristales(); cargarHierbas(); cargarColores(); cargarSabbats(); cargarDiasMagicos();
    iniciarNavegacion(); iniciarBotones(); iniciarBusquedas();
});