a=document.body.innerHTML;  d=a.match(/<td>(Leucócitos)<\/td><td>&nbsp;<\/td><td><b>.*(?=\s.*<\/b>)/igm);o=document.createElement('div');o.setAttribute('style','display:none'); o.innerHTML=d;o.innerHTML=o.innerText.replace(/<(?:.|\n)*?>/gm, '').replace(/Leucócitos/gm,'Leuco')+' ('; x=a.match(/<td>(Eosinófilos|Neutrófilos|Basófilos|Linfócitos|Monócitos|Bastonetes|Segmentados|Mielócitos|Metamielócitos)<\/td><td>.*(?=\s.*)/igm); w=document.createElement('div');w.setAttribute('style','display:none');w.innerHTML=x;o.innerHTML=o.innerHTML+w.innerText.replace(/<(?:.|\n)*?>/gm, '').replace(/Bastonetes/gm,'</hhh> - Bastão ').replace(/³,/gm, '</hhh> - ').replace(/%/gm, '% <hhh>').replace(/<hhh>(?:.|\n)*?<\/hhh>/gm, '').replace(/ófilos/gm,'o ').replace(/ócitos/gm,'o ').replace(/Segmentados/gm,'Segment ').replace(/<hhh>.*³/gm, ''); document.body.appendChild(o);  if(document.body.innerHTML.match(/HEMOGRAMA/g)){if(document.body.innerHTML.match(/HEMOGRAMA/g).length==1){j=' / '+o.innerHTML+')'}else{if(document.body.innerHTML.match(/HEMOGRAMA/g).length>1){j=' / ATENÇÃO: SELECIONE SOMENTE UM HEMOGRAMA POR VEZ';}else{j=''}}}else{j=''}; b=a.match(/<td>(CREATININA|TROPONINA T|CREATINO FOSFOQUINASE|VANCOMICINA|DOSAGEM DO DÍMERO\-D QUANTITATIVO|FIBRINOGÊNIO|PLAQUETAS|pH|ctHCO3|pCO2|Hemoglobina|BE|Hematócrito|FÓSFORO|MAGNÉSIO|CLORO|SÓDIO|POTÁSSIO|URÉIA|PROTEÍNA C REATIVA \(PCR\)|INR =|R =|AMILASE|LIPASE|BILIRRUBINA TOTAL|BILIRRUBINA DIRETA|BILIRRUBINA INDIRETA|ALANINA AMINOTRANSFERASE|ASPARTATO AMINO TRANSFERASE|ALBUMINA|LACTATO|GLICOSE|CLORO|CÁLCIO TOTAL|CÁLCIO IÔNICO)<\/td><td>&nbsp;<\/td><td><b>.*(?=\s.*<\/b>)/igm); v=document.createElement('div');v.setAttribute('id','a'); v.setAttribute('title','Desenvolvido por Alexandre Kirchner R1CG - Para críticas ou sugestões, principalmente de exames a serem incluídos mande email para alexandrekirpa@gmail.com'); v.innerHTML=b;v.innerHTML=v.innerText.replace(/<(?:.|\n)*?>/gm, '').replace(/ ,/gm,' / ').replace(/CREATININA/gm,'Cr').replace(/CREATINO FOSFOQUINASE/gm,'CPK').replace(/POTÁSSIO/gm,'K').replace(/SÓDIO/gm,'Na').replace(/MAGNÉSIO/gm,'Mg').replace(/FÓSFORO/gm,'P').replace(/ctHCO3/gm,'BIC').replace(/CLORO/gm,'Cl').replace(/LACTATO/gm,'Lact').replace(/URÉIA/gm,'Ur').replace(/GLICOSE/gm,'Gli').replace(/PLAQUETAS/gm,'PLQ').replace(/HEMATÓCRITO/gm,'Ht').replace(/HEMOGLOBINA/gm,'Hb').replace(/Leucócitos/gm,'Leuco').replace(/BILIRRUBINA DIRETA/gm,'BD').replace(/BILIRRUBINA INDIRETA/gm,'BI').replace(/BILIRRUBINA TOTAL/gm,'BT').replace(/PROTEÍNA C REATIVA \(PCR\)/gm,'PCR').replace(/CÁLCIO IÔNICO/gm,'Ca iônico').replace(/Hematócrito/gm,'Ht').replace(/Hemoglobina/gm,'Hb').replace(/ASPARTATO AMINO TRANSFERASE/gm,'TGO').replace(/ALANINA AMINOTRANSFERASE/gm,'TGO').replace(/ALANINA AMINO TRANSFERASE/gm,'TGP').replace(/INR/gm,'I.N.R.').replace(/R =/gm,'Rel. TTPA')+j+'<BR>'; document.body.appendChild(v);void(0)

adi=document.createElement('script');adi.setAttribute('src','https://code.jquery.com/jquery-1.12.4.js');document.body.appendChild(adi);
adi2=document.createElement('script');adi2.setAttribute('src','https://code.jquery.com/ui/1.12.1/jquery-ui.js');document.body.appendChild(adi2);
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
'<br><br><table border="1"><tr><td>CPK</td><td>Cr</td><td>Hb</td><td>Leuco</td><td>PLQ</td><td>K</td><td>Na</td><td>PCR</td><td>INR</td><td>Rel TTPA</td><td>Ur</td></tr><tr>'+
'<td>'+a3['CPK']+'</td><td>'+a3['Cr']+'</td><td>'+a3['Hb']+'</td><td>'+a3['Leuco']+'</td><td>'+a3['PLQ']+'</td><td>'+a3['K']+'</td><td>'+a3['Na']+'</td><td>'+a3['PCR']+'</td><td>'+a3['INR']+'</td><td>'+a3['TTPa']+'</td><td>'+a3['Ur']+'</td></tr></table>'; 

/*URO*/

rrrrt2=document.createElement('input');
rrrrt2.setAttribute('value','Mostrar Template URO');
rrrrt2.setAttribute('onclick','javascript:document.getElementById(\'c2\').setAttribute(\'style\',\'display:block\');');
document.body.appendChild(rrrrt2);
rrr2=document.createElement('div');
rrr2.setAttribute('id','c2');
rrr2.setAttribute('style','display:none');
document.body.appendChild(rrr2);
a22=v.innerHTML.split(' / ');
a32 = {}
for(i22=0;i22<a22.length;i22++){
e22=a22[i22].split('&nbsp;');

if(e22[0] != 'Leuco'){
a32[e22[0].replace('\n','').replace('I.N.R. =','INR').replace('Rel. TTPA','TTPa')]=e22[1];
}else{
a32[e22[0].replace('\n','')]=e22[1].split(' (')[0];
}

}
if('CPK' in a32){}else{a32['CPK']=' - ';}
if('Cr' in a32){}else{a32['Cr']=' - ';}
if('Hb' in a32){}else{a32['Hb']=' - ';}
if('Leuco' in a32){}else{a32['Leuco']=' - ';}
if('PLQ' in a32){}else{a32['PLQ']=' - ';}
if('Na' in a32){}else{a32['Na']=' - ';}
if('PCR' in a32){}else{a32['PCR']=' - ';}
if('K' in a32){}else{a32['K']=' - ';}
if('INR' in a32){}else{a32['INR']=' - ';}
if('TTPa' in a32){}else{a32['TTPa']=' - ';}
if('Ur' in a32){}else{a32['Ur']=' - ';}
if('pH' in a32){}else{a32['pH']=' - ';}
if('pCO2' in a32){}else{a32['pCO2']=' - ';}
if('BIC' in a32){}else{a32['BIC']=' - ';}

a42=document.getElementById('c2');
a42.innerHTML=
'<br><br><table border="1"><tr><td>Cr</td><td>PLQ</td><td>Hb</td><td>Leuco</td><td>K</td><td>Na</td><td>Ur</td><td>PCR</td><td>INR</td><td>R</td><td>pH</td><td>pCO2</td><td>BIC</td></tr><tr>'+
'<td>'+a32['Cr']+
'</td><td>'+a32['PLQ']+
'</td><td>'+a32['Hb']+
'</td><td>'+a32['Leuco']+
'</td><td>'+a32['K']+
'</td><td>'+a32['Na']+
'</td><td>'+a32['Ur']+
'</td><td>'+a32['PCR']+
'</td><td>'+a32['INR']+
'</td><td>'+a32['TTPa']+
'</td><td>'+a32['pH']+
'</td><td>'+a32['pCO2']+
'</td><td>'+a32['BIC']+
'</td></tr></table>'; 

/*fim uro*/


window.scrollTo(0,document.body.scrollHeight);

dde=document.createElement;
dde.innerHTML='<script>  $( function() {    $( \"#c2\" ).dialog();  } );  </script>';
document.body.appendChild(dde);
