javascript:

/*por Alexandre R2CG*/

cont=document.body.innerHTML;

hb=cont.match(/<pre>  HEMOGLOBINA\.\.\.\.\: <b>.*? g\/dL\<\/b>/);
if(hb!=null){hb=hb.toString().replace(/<pre>  HEMOGLOBINA\.\.\.\.\: <b>/gi,'').replace(/g\/dL<\/b>/gi,'')}else{hb='nulo'};

leuco=cont.match(/<pre>  LEUCÓCITOS\.\.\.\.\.\: <b>.*? \/mm³<\/b>/);
if(leuco!=null){leuco=leuco.toString().replace(/<pre>  LEUCÓCITOS\.\.\.\.\.\: <b>/gi,'').replace(/ \/mm³<\/b>/gi,'')}else{leuco='nulo'};

plq=cont.match(/<pre>  PLAQUETAS\.\.\.\.\.\.\: <b>.*? \/mm³<\/b>/);
if(plq!=null){plq=plq.toString().replace(/<pre>  PLAQUETAS\.\.\.\.\.\.\: <b>/gi,'').replace(/ \/mm³<\/b>/gi,'')}else{plq='nulo'};

pcr=cont.match(/PROTEINA \- C \- REATIVA \.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\: .*?&nbsp;mg\/L/);
if(pcr!=null){pcr=pcr.toString().replace(/PROTEINA - C - REATIVA \.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\: /gi,'').replace(/&nbsp;mg\/L/gi,'')}else{pcr='nulo'};

ur=cont.match(/<pre>URÉIA\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\: <b>.*?&nbsp;mg\/dL<\/b>/);
if(ur!=null){ur=ur.toString().replace(/<pre>URÉIA\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\: <b>/gi,'').replace(/&nbsp;mg\/dL<\/b>/gi,'')}else{ur='nulo'};

cr=cont.match(/<pre>CREATININA\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\: <b>.*?&nbsp;mg\/dL<\/b>/);
if(cr!=null){cr=cr.toString().replace(/<pre>CREATININA\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\: <b>/gi,'').replace(/&nbsp;mg\/dL<\/b>/gi,'')}else{cr='nulo'};

na=cont.match(/<pre>SÓDIO\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\: <b>.*?&nbsp;mEq\/L<\/b>/);
if(na!=null){na=na.toString().replace(/<pre>SÓDIO\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\: <b>/gi,'').replace(/&nbsp;mEq\/L<\/b>/gi,'')}else{na='nulo'};

k=cont.match(/<pre>POTÁSSIO\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\: <b>.*?&nbsp;mEq\/L<\/b>/);
if(k!=null){k=k.toString().replace(/<pre>POTÁSSIO\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\: <b>/gi,'').replace(/&nbsp;mEq\/L<\/b>/gi,'')}else{k='nulo'};

ddimero=cont.match(/ D-Dímero\.\.\.\.\.\.\.\.\.\.: <b>.*? ng\/ml<\/b>/);
if(ddimero!=null){ddimero=ddimero.toString().replace(/ D-Dímero\.\.\.\.\.\.\.\.\.\.: <b>/gi,'').replace(/ ng\/ml<\/b>/gi,'')}else{ddimero='nulo'};

ckmb=cont.match(/<pre>CKMB\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.: <b>.*?&nbsp;ng\/mL<\/b><\/pre>/);
if(ckmb!=null){ckmb=ckmb.toString().replace(/<pre>POTÁSSIO\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\: <b>/gi,'').replace(/&nbsp;mEq\/L<\/b>/gi,'')}else{ckmb='nulo'};

troponina=cont.match(/TROPONINA\.\.\.\.\.\.\.\.\.\.\.\.: <b>.*?&nbsp;pg\/mL<\/b><br>/);
if(troponina!=null){troponina=troponina.toString().replace(/TROPONINA\.\.\.\.\.\.\.\.\.\.\.\.: <b>/gi,'').replace(/&nbsp;pg\/mL/gi,'')}else{troponina='nulo'};

bt=cont.match(/<pre>BILIRRUBINA TOTAL\.\.\.\.\.\.\.\.\.\.\.: <b>.*?&nbsp;mg\/dL<\/b><\/pre>/);
if(bt!=null){bt=bt.toString().replace(/<pre>BILIRRUBINA TOTAL\.\.\.\.\.\.\.\.\.\.\.: <b>/gi,'').replace(/&nbsp;mg\/dL<\/b><\/pre>/gi,'')}else{bt='nulo'};

bd=cont.match(/<pre>BILIRRUBINA DIRETA\.\.\.\.\.\.\.\.\.\.:<b>.*?&nbsp;mg\/dL<\/b><\/pre>/);
if(bd!=null){bd=bd.toString().replace(/<pre>BILIRRUBINA DIRETA\.\.\.\.\.\.\.\.\.\.:<b>/gi,'').replace(/&nbsp;mg\/dL<\/b><\/pre>/gi,'')}else{bd='nulo'};

bi=cont.match(/<pre>BILIRRUBINA INDIRETA\.\.\.\.\.\.\.\.: <b>.*?&nbsp;mg\/dL<\/b><\/pre>/);
if(bi!=null){bt=bt.toString().replace(/<pre>BILIRRUBINA INDIRETA\.\.\.\.\.\.\.\.: <b>/gi,'').replace(/&nbsp;mg\/dL<\/b><\/pre>/gi,'')}else{bi='nulo'};

tgo=cont.match(/<pre>ASPARTATO TRANSAMINASE (TGO\/AST)\.\.\.\.: <b>.*?&nbsp;U\/L<\/b><\/pre>/);
if(tgo!=null){tgo=tgo.toString().replace(/<pre>ASPARTATO TRANSAMINASE (TGO\/AST)\.\.\.\.: <b>/gi,'').replace(/&nbsp;U\/L<\/b><\/pre>/gi,'')}else{tgo='nulo'};

tgp=cont.match(/<pre>ALANINA TRANSAMINASE (TGP\/ALT)\.\.\.\.: <b>.*?&nbsp;U\/L<\/b><\/pre>/);
if(tgp!=null){tgp=tgp.toString().replace(/<pre>ALANINA TRANSAMINASE (TGP\/ALT)\.\.\.\.: <b>/gi,'').replace(/&nbsp;U\/L<\/b><\/pre>/gi,'')}else{tgp='nulo'};

ggt=cont.match(/<pre>GAMA GT\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.: <b>.*?&nbsp;U\/L<\/b><\/pre>/);
if(ggt!=null){ggt=ggt.toString().replace(/<pre>GAMA GT\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.: <b>/gi,'').replace(/&nbsp;U\/L<\/b><\/pre>/gi,'')}else{ggt='nulo'};

fa=cont.match(/<pre>FOSFATASE ALCALINA\.\.\.\.\.: <b>.*?&nbsp;U\/L<\/b><\/pre>/);
if(fa!=null){fa=fa.toString().replace(/<pre>FOSFATASE ALCALINA\.\.\.\.\.: <b>/gi,'').replace(/&nbsp;U\/L<\/b><\/pre>/gi,'')}else{fa='nulo'};

amilase=cont.match(/<pre>ALFA AMILASE\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.: <b>.*?&nbsp;U\/L<\/b><\/pre>/);
if(amilase!=null){amilase=amilase.toString().replace(/<pre>ALFA AMILASE\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.: <b>/gi,'').replace(/&nbsp;U\/L<\/b><\/pre>/gi,'')}else{amilase='nulo'};

lipase=cont.match(/LÍPASE\.\.\.\.\.\.\.\.\.\.\.\.: <b>.*?&nbsp;U\/L<\/b><br>/);
if(lipase!=null){lipase=lipase.toString().replace(/LÍPASE\.\.\.\.\.\.\.\.\.\.\.\.: <b>/gi,'').replace(/&nbsp;U\/L<\/b><br>/gi,'')}else{lipase='nulo'};

ph=cont.match(/PH\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.: <b>.*?&nbsp;<\/b>/);
if(ph!=null){ph=ph.toString().replace(/PH\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.: <b>/gi,'').replace(/&nbsp;<\/b>/gi,'')}else{ph='nulo'};

po2=cont.match(/PO2\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.: <b>.*?&nbsp;mmHg<\/b><br>/);
if(po2!=null){po2=po2.toString().replace(/PO2\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.: <b>/gi,'').replace(/&nbsp;mmHg<\/b><br>/gi,'')}else{po2='nulo'};

hco3=cont.match(/HCO3\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.: <b>.*?&nbsp;mmol\/L<\/b><br>/);
if(hco3!=null){hco3=hco3.toString().replace(/HCO3\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.: <b>/gi,'').replace(/&nbsp;mmol\/L<\/b><br>/gi,'')}else{hco3='nulo'};

pco2=cont.match(/PCO2\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.: <b>.*?&nbsp;mmHg<\/b><br>/);
if(pco2!=null){pco2=pco2.toString().replace(/PCO2\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.: <b>/gi,'').replace(/&nbsp;mmHg<\/b><br>/gi,'')}else{pco2='nulo'};

be=cont.match(/B\.E\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.: <b>.*?&nbsp;mmol\/L<\/b><br>/);
if(be!=null){be=be.toString().replace(/B\.E\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.: <b>/gi,'').replace(/&nbsp;mmol\/L<\/b><br>/gi,'')}else{be='nulo'};

sato2=cont.match(/SAT\. O2\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.: <b>.*?&nbsp;%<\/b><br>/);
if(sato2!=null){sato2=sato2.toString().replace(/SAT\. O2\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.: <b>/gi,'').replace(/&nbsp;%<\/b><br>/gi,'')}else{sato2='nulo'};

cai=cont.match(/CÁLCIO IONIZADO - SANGUE\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.: <b>.*?&nbsp;mmol\/L<\/b><br>/);
if(cai!=null){cai=cai.toString().replace(/CÁLCIO IONIZADO - SANGUE\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.: <b>/gi,'').replace(/&nbsp;mmol\/L<\/b><br>/gi,'')}else{cai='nulo'};

lactato=cont.match(/<pre>LACTATO\.\.\.\.\.\.\.\.\.\.\.\.: <b>.*?&nbsp;mg\/dL<\/b><\/pre>/);
if(lactato!=null){lactato=lactato.toString().replace(/<pre>LACTATO\.\.\.\.\.\.\.\.\.\.\.\.: <b>/gi,'').replace(/&nbsp;mg\/dL<\/b><\/pre>/gi,'')}else{lactato='nulo'};


if(cont.match(/URINA TIPO 1/gi)){
var urina;
if(cont.match(/LEUCÓCITOS \.\.\.\.\.\.\.\.: <b>.*?<\/b>&nbsp;\/ml<\/td>/)){
urina_leuco=cont.match(/LEUCÓCITOS \.\.\.\.\.\.\.\.: <b>.*?<\/b>&nbsp;\/ml<\/td>/).toString().replace(/<\/b>&nbsp;\/ml<\/td>/gi,'').replace(/LEUCÓCITOS \.\.\.\.\.\.\.\.: <b>/gi,'');
else{
urina_leuco='não disponível';
}
if(cont.match(/HEMÁCIAS \.\.\.\.\.\.\.\.\.\.: <b>.*?<\/b>&nbsp;\/ml<\/td>/)){
urina_hemacias=cont.match(/HEMÁCIAS \.\.\.\.\.\.\.\.\.\.: <b>.*?<\/b>&nbsp;\/ml<\/td>/).toString().replace(/<\/b>&nbsp;\/ml<\/td>/gi,'').replace(/HEMÁCIAS \.\.\.\.\.\.\.\.\.\.: <b>/gi,'');
}else{
urina_hemacias='não disponível';
}
if(cont.match(/NITRITO\.\.\.\.\.\.\.\.\.\.\.\.: <b>.*?<\/b><\/td>/){  
urina_nitrito=cont.match(/NITRITO\.\.\.\.\.\.\.\.\.\.\.\.: <b>.*?<\/b><\/td>/).toString().replace(/<\/b><\/td>/gi,'').replace(/NITRITO\.\.\.\.\.\.\.\.\.\.\.\.: <b>/gi,'');
}else{
urina_nitrito='não disponível';  
}
  
urina_sangue=cont.match(/SANGUE OCULTO \.\.\.\.\.: <b>.*?<\/b><\/td>/).toString().replace(/<\/b><\/td>/gi,'').replace(/SANGUE OCULTO \.\.\.\.\.: <b>/gi,'');
urina='Leuco (urina): '+urina_leuco+' | Hemacias (urina): '+urina_hemacias+' | Nitrito: '+ urina_nitrito+ ' | Sangue oculto (urina): ' + urina_sangue;
}else{
urina='nulo'  
}




a=[hb,leuco,plq,pcr,ur,cr,na,k,ddimero,ckmb,troponina,bt,bd,bi,tgo,tgp,ggt,fa,amilase,lipase,ph,po2,hco3,pco2,be,sato2,cai,lactato,urina];
b=['Hb','Leuco','Plaquetas','PCR','Ur','Cr','Na','K','DDIMERO','CKMB','TROPONINA','BT','BD','BI','TGO','TGP','GGT','FA','AMILASE','LIPASE','pH','pO2','HCO3','pCO2','BE','SatO2','CAi','Lactato','Urina1'];
msg='Exames --->';

for(i=0;i<a.length;i++){
if(a[i]!='nulo'){
msg+=b[i]+': '+a[i]+' / ';
}
}


document.body.innerHTML='<br><br> <b><h1>LabsHU 1.0</h1></b> - por Alexandre Kirchner R2CG (sugestões: alexandrekirpa@gmail.com)<br><br>'+msg+ '<br><br><br>'+document.body.innerHTML;
