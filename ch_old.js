a=document.body.innerHTML;  d=a.match(/<td>(Leuc�citos)<\/td><td>&nbsp;<\/td><td><b>.*(?=\s.*<\/b>)/igm);o=document.createElement('div');o.setAttribute('style','display:none'); o.innerHTML=d;o.innerHTML=o.innerText.replace(/<(?:.|\n)*?>/gm, '').replace(/Leuc�citos/gm,'Leuco')+' ('; x=a.match(/<td>(Eosin�filos|Neutr�filos|Bas�filos|Linf�citos|Mon�citos|Bastonetes|Segmentados|Miel�citos|Metamiel�citos)<\/td><td>.*(?=\s.*)/igm); w=document.createElement('div');w.setAttribute('style','display:none');w.innerHTML=x;o.innerHTML=o.innerHTML+w.innerText.replace(/<(?:.|\n)*?>/gm, '').replace(/Bastonetes/gm,'</hhh> - Bast�o ').replace(/�,/gm, '</hhh> - ').replace(/%/gm, '% <hhh>').replace(/<hhh>(?:.|\n)*?<\/hhh>/gm, '').replace(/�filos/gm,'o ').replace(/�citos/gm,'o ').replace(/Segmentados/gm,'Segment ').replace(/<hhh>.*�/gm, ''); document.body.appendChild(o);  if(document.body.innerHTML.match(/HEMOGRAMA/g)){if(document.body.innerHTML.match(/HEMOGRAMA/g).length==1){j=' / '+o.innerHTML+')'}else{if(document.body.innerHTML.match(/HEMOGRAMA/g).length>1){j=' / ATEN��O: SELECIONE SOMENTE UM HEMOGRAMA POR VEZ';}else{j=''}}}else{j=''}; b=a.match(/<td>(CREATININA|TROPONINA T|CREATINO FOSFOQUINASE|VANCOMICINA|DOSAGEM DO D�MERO\-D QUANTITATIVO|FIBRINOG�NIO|PLAQUETAS|pH|ctHCO3|pCO2|Hemoglobina|BE|Hemat�crito|F�SFORO|MAGN�SIO|CLORO|S�DIO|POT�SSIO|UR�IA|PROTE�NA C REATIVA \(PCR\)|INR =|R =|AMILASE|LIPASE|BILIRRUBINA TOTAL|BILIRRUBINA DIRETA|BILIRRUBINA INDIRETA|ALANINA AMINOTRANSFERASE|ASPARTATO AMINO TRANSFERASE|ALBUMINA|LACTATO|GLICOSE|CLORO|C�LCIO TOTAL|C�LCIO I�NICO)<\/td><td>&nbsp;<\/td><td><b>.*(?=\s.*<\/b>)/igm); v=document.createElement('div');v.setAttribute('id','a'); v.setAttribute('title','Desenvolvido por Alexandre Kirchner R1CG - Para cr�ticas ou sugest�es, principalmente de exames a serem inclu�dos mande email para alexandrekirpa@gmail.com'); v.innerHTML=b;v.innerHTML=v.innerText.replace(/<(?:.|\n)*?>/gm, '').replace(/ ,/gm,' / ').replace(/CREATININA/gm,'Cr').replace(/CREATINO FOSFOQUINASE/gm,'CPK').replace(/POT�SSIO/gm,'K').replace(/S�DIO/gm,'Na').replace(/MAGN�SIO/gm,'Mg').replace(/F�SFORO/gm,'P').replace(/ctHCO3/gm,'BIC').replace(/CLORO/gm,'Cl').replace(/LACTATO/gm,'Lact').replace(/UR�IA/gm,'Ur').replace(/GLICOSE/gm,'Gli').replace(/PLAQUETAS/gm,'PLQ').replace(/HEMAT�CRITO/gm,'Ht').replace(/HEMOGLOBINA/gm,'Hb').replace(/Leuc�citos/gm,'Leuco').replace(/BILIRRUBINA DIRETA/gm,'BD').replace(/BILIRRUBINA INDIRETA/gm,'BI').replace(/BILIRRUBINA TOTAL/gm,'BT').replace(/PROTE�NA C REATIVA \(PCR\)/gm,'PCR').replace(/C�LCIO I�NICO/gm,'Ca i�nico').replace(/Hemat�crito/gm,'Ht').replace(/Hemoglobina/gm,'Hb').replace(/ASPARTATO AMINO TRANSFERASE/gm,'TGO').replace(/ALANINA AMINOTRANSFERASE/gm,'TGO').replace(/ALANINA AMINO TRANSFERASE/gm,'TGP').replace(/INR/gm,'I.N.R.').replace(/R =/gm,'Rel. TTPA')+j+'<BR>'; document.body.appendChild(v);window.scrollTo(0,document.body.scrollHeight);void(0)

rrrrt=document.createElement('input');
rrrrt.setAttribute('value','Mostrar Template Vascular');
rrrrt.setAttribute('onclick','javascript:document.getElementById(\'c\').setAttribute(\'style\',\'display:block\');');
document.body.appendChild(rrrrt);
rrr=document.createElement('div');
rrr.setAttribute('id','c');
rrr.setAttribute('style','display:none');
document.body.appendChild(rrr);
a2=v.innerHTML.split(' / ');
a3 = {}
for(i2=0;i2<a2.length;i2++){
e2=a2[i2].split('&nbsp;');

if(e2[0] != 'Leuco'){
a3[e2[0].replace('\n','').replace('I.N.R. =','INR').replace('Rel. TTPA','TTPa')]=e2[1];
}else{
a3[e2[0].replace('\n','')]=e2[1].split(' (')[0];
}

}
if('CPK' in a3){}else{a3['CPK']=' - ';}
if('Cr' in a3){}else{a3['Cr']=' - ';}
if('Hb' in a3){}else{a3['Hb']=' - ';}
if('Leuco' in a3){}else{a3['Leuco']=' - ';}
if('PLQ' in a3){}else{a3['PLQ']=' - ';}
if('Na' in a3){}else{a3['Na']=' - ';}
if('PCR' in a3){}else{a3['PCR']=' - ';}
if('K' in a3){}else{a3['K']=' - ';}
if('INR' in a3){}else{a3['INR']=' - ';}
if('TTPa' in a3){}else{a3['TTPa']=' - ';}
if('Ur' in a3){}else{a3['Ur']=' - ';}

a4=document.getElementById('c');
a4.innerHTML=
'<table border="1"><tr><td>CPK</td><td>Cr</td><td>Hb</td><td>Leuco</td><td>PLQ</td><td>K</td><td>Na</td><td>PCR</td><td>INR</td><td>Rel TTPA</td><td>Ur</td></tr><tr>'+
'<td>'+a3['CPK']+'</td><td>'+a3['Cr']+'</td><td>'+a3['Hb']+'</td><td>'+a3['Leuco']+'</td><td>'+a3['PLQ']+'</td><td>'+a3['K']+'</td><td>'+a3['Na']+'</td><td>'+a3['PCR']+'</td><td>'+a3['INR']+'</td><td>'+a3['TTPa']+'</td><td>'+a3['Ur']+'</td></tr></table>'; 


