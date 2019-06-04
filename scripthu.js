javascript:

/*por Alexandre R2CG*/

cont=document.body.innerHTML;
hb=cont.match(/<pre>  HEMOGLOBINA\.\.\.\.\: <b>.*? g\/dL\<\/b>/);if(hb!=null){hb.toString().replace('<pre>  HEMOGLOBINA....: <b>','').replace(' g/dL</b>','')}else{hb='nulo'};
leuco=cont.match(/<pre>  LEUCÓCITOS\.\.\.\.\.\: <b>.*? \/mm³<\/b>/);if(leuco!=null){leuco.toString().replace('<pre>  LEUCÓCITOS.....: <b>','').replace(' /mm³</b>','')}else{leuco='nulo'};
plq=cont.match(/<pre>  PLAQUETAS\.\.\.\.\.\.\: <b>.*? \/mm³<\/b>/);if(plq!=null){plq.toString().replace('<pre>  PLAQUETAS......: <b>','').replace(' /mm³</b>','')}else{plq='nulo'};
pcr=cont.match(/PROTEINA \- C \- REATIVA \.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\: .*?&nbsp;mg\/L/);if(pcr!=null){pcr.toString().replace('PROTEINA - C - REATIVA .................: ','').replace('&nbsp;mg/L','')}else{pcr='nulo'};
ur=cont.match(/<pre>URÉIA\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\: <b>.*?&nbsp;mg\/dL<\/b>/);if(ur!=null){ur.toString().replace('<pre>URÉIA...................: <b>','').replace('&nbsp;mg/dL</b>','')}else{ur='nulo'};
cr=cont.match(/<pre>CREATININA\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\: <b>.*?&nbsp;mg\/dL<\/b>/);if(cr!=null){cr.toString().replace('<pre>CREATININA.....................: <b>','').replace('&nbsp;mg/dL</b>','')}else{cr='nulo'};
na=cont.match(/<pre>SÓDIO\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\: <b>.*?&nbsp;mEq\/L<\/b>/);if(na!=null){na.toString().replace('<pre>SÓDIO..................: <b>','').replace('&nbsp;mEq/L</b>','')}else{na='nulo'};
k=cont.match(/<pre>POTÁSSIO\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\: <b>.*?&nbsp;mEq\/L<\/b>/);if(k!=null){k.toString().replace('<pre>POTÁSSIO........................: <b>','').replace('&nbsp;mEq/L</b>','')}else{k='nulo'};

a=[hb,leuco,plq,pcr,ur,cr,na,k];
b=['Hb','Leuco','Plaquetas','PCR','Ur','Cr','Na','K'];
msg='Exames --->';

for(i=0;i<a.length;i++){
if(a[i]!='nulo'){
msg+=b[i]+': '+a[i]+' /';
}
}


alert(msg);
