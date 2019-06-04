javascript:
cont=document.body.innerHTML;
hb=cont.match(/<pre>  HEMOGLOBINA\.\.\.\.\: <b>.*? g\/dL\<\/b>/).toString().replace('<pre>  HEMOGLOBINA....: <b>','').replace(' g/dL</b>','');
leuco=cont.match(/<pre>  LEUCÓCITOS\.\.\.\.\.\: <b>.*? \/mm³<\/b>/).toString().replace('<pre>  LEUCÓCITOS.....: <b>','').replace(' /mm³</b>','');
plq=cont.match(/<pre>  PLAQUETAS\.\.\.\.\.\.\: <b>.*? \/mm³<\/b>/).toString().replace('<pre>  PLAQUETAS......: <b>','').replace(' /mm³</b>','');
pcr=cont.match(/PROTEINA \- C \- REATIVA \.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\: .*?&nbsp;mg\/L/).toString().replace('PROTEINA - C - REATIVA .................: ','').replace('&nbsp;mg/L','');
ur=cont.match(/<pre>URÉIA\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\: <b>.*?&nbsp;mg\/dL<\/b>/).toString().replace('<pre>URÉIA...................: <b>','').replace('&nbsp;mg/dL</b>','');
cr=cont.match(/<pre>CREATININA\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\: <b>.*?&nbsp;mg\/dL<\/b>/).toString().replace('<pre>CREATININA.....................: <b>','').replace('&nbsp;mg/dL</b>','');
na=cont.match(/<pre>SÓDIO\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\: <b>.*?&nbsp;mEq\/L<\/b>/).toString().replace('<pre>SÓDIO..................: <b>','').replace('&nbsp;mEq/L</b>','');
k=cont.match(/<pre>POTÁSSIO\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\: <b>.*?&nbsp;mEq\/L<\/b>/).toString().replace('<pre>POTÁSSIO........................: <b>','').replace('&nbsp;mEq/L</b>','');

a=[hb,leuco,plq,pcr,ur,cr,na,k];
b=['Hb','Leuco','Plaquetas','PCR','Ur','Cr','Na','K'];
msg='Exames --->';

for(i=0;i<a.length;i++){
if(a[i]!=null){
msg+=b[i]+': '+a[i]+' /';
}
}


alert(msg);
