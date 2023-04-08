document.getElementById("syousai").style.display ="none";
document.getElementById("4").style.display ="none";
document.getElementById("5").style.display ="none";
document.getElementById("6").style.display ="none";
document.getElementById("7").style.display ="none";
document.getElementById("8").style.display ="none";
document.getElementById("9").style.display ="none";
let answer = 0;
document.getElementById('')
function a(){
  answer +=100
};
function b(){
 answer +=200
};
function c(){
 answer +=10
};
function d(){
  answer +=20
};
function e(){
  answer +=30
};
function f(){
  answer +=1
};
function g(){
  document.getElementById("1").style.display ="none";
  document.getElementById("2").style.display ="none";
  document.getElementById("3").style.display ="none";
  document.getElementById("4").style.display ="inline";
  document.getElementById("5").style.display ="inline";
  document.getElementById("6").style.display ="inline";
  document.getElementById("7").style.display ="inline";
  question.innerHTML = "乗り換え先の格安simで使う予定のスマホにsimロックはかかっていますか？"
  document.getElementById("syousai").style.display ="inline";
};
function h(){
  document.getElementById("4").style.display ="none";
  document.getElementById("5").style.display ="none";
  document.getElementById("6").style.display ="none";
  document.getElementById("7").style.display ="none";
  document.getElementById("8").style.display ="inline";
  document.getElementById("9").style.display ="inline";
  question.innerHTML ="店頭でのサービスは必要ですか？"
  syousai.innerHTML =""
}
function i(){
  document.getElementById("8").style.display ="none";
  document.getElementById("9").style.display ="none";
  money.innerHTML='この格安simの基本料金は'
  if(answer === 0 ||answer === 1){x.innerHTML="1GB/770円  3GB/990円（OCN光モバイル割で220円割引）";
  }else if (answer === 10||answer=== 30){x.innerHTML="3GB/1628円  (自宅セット割の適用で月990円)";
  }else if (answer === 20){x.innerHTML="3GB/2178円  ()";
  }else if (answer === 11||answer === 21||answer === 31){x.innerHTML="3GB/990円";
  }else if (answer ===100||answer === 101||answer===130||answer===131){x.innerHTML="6GB/1320円  10GB/1760円(OCN光モバイル割で220円割引)";
  }else if (answer ===110||answer ===111){x.innerHTML="5GB/2178円  15GB/2728円（自宅セット割の適用で5GB/1540円  15GB/2090円）";
  }else if (answer ===120){x.innerHTML="5GB/2728円  15GB/3278円(おうち割、もしくは家族割の適用で5GB/1540円 15GB/2090円)";
  }else if (answer ===121||answer ===221){x.innerHTML="20GB/2728円";
  }else if (answer ===200){x.innerHTML="20GB/2178円";
  }else if (answer ===201||answer===231){x.innerHTML="20GB/2970円";
  }else if (answer ===210||answer===230){x.innerHTML="20GB/3278円(自宅セット割の適用で月2640円)";
  }else if (answer ===211){x.innerHTML="20GB/2700円";
  }else if (answer ===220){ x.innerHTML="15GB/3278円  20GB/3828円(おうち割、もしくは家族割の適用で 15GB/2090円 20GB/2640円)";
  }gooda.innerHTML='メリット'
  bada.innerHTML='デメリット'
  question.innerHTML='<strong>あなたにおすすめの格安simは</strong>';
  if(answer === 0||answer === 1||answer ===100||answer ===101||answer ===130||answer ===131){
    resurt.innerHTML='<a href="https://service.ocn.ne.jp/mobile/charge/">ocnモバイルone</a>';
    good.innerHTML='<p><ul><li>通信速度の評判がいい</li><li>ドコモショップで申し込める</li></ul></p>'
    bad.innerHTML='<p><ul><li>プラン変更や解約はオンラインでしなければならない</li></ul></p>'
  }else if (answer ===10 ||answer === 30||answer ===110 ||answer ===111||answer ===210 ||answer ===230){
    resurt.innerHTML='<a href="https://www.uqwimax.jp/mobile/newplan/">UQモバイル</a>';
    good.innerHTML='<p><ul><li>データを繰り越せる</li><li>店舗でサポートが受けられる</li></ul></p>'
    bad.innerHTML='<p><ul><li>au光などのサービスを利用していないと、料金が割高になる</li></ul></p>'
  }else if (answer ===11 ||answer ===211){
    resurt.innerHTML='<a href="https://povo.jp/spec/?gid=povo-top-head-002">povo</a>';
    good.innerHTML='<p><ul><li>通信速度の評判がよく、その割に安い</li></ul></p>'
    bad.innerHTML='<p><ul><li>料金システムが分かりずらい</li><li>サポートはチャットが中心、店舗でサポートは受けられない</li></ul></p>'
  }else if (answer ===20 ||answer ===120 ||answer ===220){
    resurt.innerHTML='<a href="https://www.ymobile.jp/plan/">Yモバイル</a>';
    good.innerHTML='<p><ul><li>ペイペイなどのYahoo!経済圏のサービスをお得に利用できる</li><li>店舗でサポートが受けられる</li></ul></p>'
    bad.innerHTML='<p><ul><li>2人以上で申し込まない場合や、ソフトバンク光などのサービスを利用していない場合、料金が割高になる</li></ul></p>'
  }else if (answer ===21 ||answer === 31||answer ===121 ||answer ===221){
    resurt.innerHTML='<a href="https://www.linemo.jp/plan/">LINEMO</a>';
    good.innerHTML='<p><ul><li>通信速度の評判がよくその割に安い</li></ul></p>'
    bad.innerHTML='<p><ul><li>店舗でのサポートを受けられない</li></ul></p>'
  }else if (answer ===200){
    resurt.innerHTML='<a href="https://mineo.jp/price/">MINEO(Dプラン)</a>';
    good.innerHTML='<p><ul><li>料金が最安クラス</li></ul></p>'
    bad.innerHTML='<p><ul><li>店舗の数が少ない</li><li>速度の評判は良くない</li></ul></p>'
  }else if (answer ===201||answer ===231){
    resurt.innerHTML='<a href="https://ahamo.com/">ahamo</a>';
    good.innerHTML='<p><ul><li>通信速度の評判がよくその割に安い</li></ul></p>'
    bad.innerHTML='<p><ul><li>一部、店舗でサポートを受けられるが、有料である（3300円）</li></ul></p>'
  }
}