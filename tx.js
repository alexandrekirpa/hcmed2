javascript: function dat(){ 
  var data = new Date(), dia = parseInt(data.getDate().toString().padStart(2, '0')), mes = (data.getMonth()+1).toString().padStart(2, '0'), ano = data.getFullYear(), hora=data.getHours(), min=data.getMinutes();
  
  if(dia<=9){dia="0"+dia;};
  return dia+"/"+mes+"/"+ano+" "+hora+":"+min; 
}; 

document.getElementById('PESO_PACIENTE').setAttribute('value','70'); document.getElementById('DESCRICAO_CID10').setAttribute('value','ANEMIA AGUDA POS-HEMORRAGICA'); document.getElementById('CID10').setAttribute('value','D62'); document.getElementById('JUSTIFICATIVA_DIAGNOSTICO').setAttribute('value','Z513 - TRANSFUSAO DE SANGUE, SEM DIAGNOSTICO REGISTRADO'); document.getElementById('IGNORADO_TRANSFUSAO_PREVIA').click(); document.getElementById('IGNORADO_REACAO_TRANSFUSIONAL').click(); document.getElementById('div_DATA_PROGRAMADA').setAttribute('style','display:block'); document.getElementById('div_DATA_CIRURGIA').setAttribute('style','display:block'); document.getElementById('PROGRAMADA').click(); document.getElementById('CKB_CIRURGIA').click(); document.getElementById('DATA_PROGRAMADA').value=dat(); document.getElementById('DATA_CIRURGIA').value=dat(); document.getElementById("ID_ORIGEMREQUISICAO").selectedIndex=14; cs=prompt('Digite: \n 1 para Concentrado de Hemacias \n2 para plaquetas \n3 para plasma fresco congelado'); 

if(cs=='1'){
document.getElementById("cmb_procedimento").selectedIndex=
document.getElementById("cmb_procedimento").querySelectorAll("option[value=Concentrado de Hemácias]")[0].index;
var event = new Event('change');
document.getElementById("cmb_procedimento").dispatchEvent(event); 
document.getElementById("Hemacia_13__Selecionado").click();
document.getElementById("Hemacia_13__Justificativa").value="RESERVA CIRURGICA TX HEPATICO"; 
document.getElementById("CON_HEMACIA_HB").value="10,0";
document.getElementById("CON_HEMACIA_HT").value="30"; 
document.getElementById("cmbQuantidade").selectedIndex=10; 
}

else if(cs=='2'){

 document.getElementById("cmb_procedimento").selectedIndex=25;v
 ar event = new Event('change');
 document.getElementById("cmb_procedimento").dispatchEvent(event); 
 document.getElementById("Plaqueta_10__Selecionado").click(); 
 document.getElementById("Plaqueta_7__Selecionado").click(); 
 document.getElementById("Plaqueta_10__Justificativa").value="RESERVA CIRURGICA TX HEPATICO"; 
 document.getElementById("CON_PLAQUETA_PLAQUETA").value="150.000"; 
 document.getElementById("cmbQuantidade").selectedIndex=10; }

else if(cs=='3'){
document.getElementById("cmb_procedimento").selectedIndex=37;
var event = new Event('change');
document.getElementById("cmb_procedimento").dispatchEvent(event); 
document.getElementById("Plasma_9__Selecionado").click(); 
document.getElementById("Plasma_9__Justificativa").value="RESERVA CIRURGICA TX HEPATICO"; 
}else{alert('erro')}; void(0)
