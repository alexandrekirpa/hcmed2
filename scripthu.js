javascript:

/*por Alexandre R2CG*/

cont=document.body.innerHTML;

hb=cont.match(/<pre>  HEMOGLOBINA\.\.\.\.\: <b>.*? g\/dL\<\/b>/)[0];
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

a=[hb,leuco,plq,pcr,ur,cr,na,k];
b=['Hb','Leuco','Plaquetas','PCR','Ur','Cr','Na','K'];
msg='Exames --->';

for(i=0;i<a.length;i++){
if(a[i]!='nulo'){
msg+=b[i]+': '+a[i]+' /';
}
}


alert(msg);
