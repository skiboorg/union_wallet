(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[532],{75008:(e,t,a)=>{"use strict";a.d(t,{C:()=>s,d:()=>o});var n=a(13433),l=a(17779);const o=({seed:e,password:t})=>{const a={status:!0,seed:e},l=n.createCipher("aes192",t);return l.update(JSON.stringify(a),"utf8","hex")+l.final("hex")},s=({hash:e,password:t})=>{try{const a=n.createDecipher("aes192",t),l=a.update(e,"hex","utf8")+a.final("utf8"),o=JSON.parse(l);return!!o.status&&o.seed}catch(a){return l.log(a),!1}}},23532:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>M});var n=a(59835),l=a(86970),o=a(744),s=a.n(o);const i=(0,n._)("img",{src:s()},null,-1),u=[i],c={key:1},r=(0,n._)("p",{class:"text-center text-weight-bold"},"или",-1);function d(e,t,a,o,s,i){const d=(0,n.up)("Login"),g=(0,n.up)("btn"),p=(0,n.up)("Register"),v=(0,n.up)("page-body"),m=(0,n.up)("page");return(0,n.wg)(),(0,n.j4)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(v,{class:"q-px-lg flex column justify-center"},{default:(0,n.w5)((()=>[(0,n._)("div",{class:(0,l.C_)(["logo",{"logo-small":o.is_seed_good||o.hash}])},u,2),o.loginActive?((0,n.wg)(),(0,n.j4)(d,{key:0,onSeedGood:o.setSeed},null,8,["onSeedGood"])):(0,n.kq)("",!0),o.is_seed_good||!o.loginActive||o.hash?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",c,[r,(0,n.Wm)(g,{label:"Создать кошелек",outline:!1,onClick:t[0]||(t[0]=e=>o.loginActive=!1)})])),o.loginActive?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(p,{key:2,onOpenLogin:o.openLogin},null,8,["onOpenLogin"]))])),_:1})])),_:1})}a(46727);var g=a(60499),p=a(87270),v=a(75008),m=a(18910),w=a(96928),h=a(43463),_=a(44974);const y=(0,n._)("p",{class:"text-h6 text-bold text-center text-primary"},"Вход",-1),f={key:0},x={key:0,class:"flex column justify-between"},k={class:""},b={key:1,class:"pincode-tab"},S={__name:"Login",emits:["seedGood"],setup(e,{emit:t}){const a=(0,m.tv)(),l=(0,w.t)(),o=(0,h.s)(),s=(0,_.T)(),i=(0,g.iH)(""),u=(0,g.iH)(""),c=((0,g.iH)(!0),localStorage.getItem("hash"));async function r(e){const t=(0,v.C)({hash:c,password:e});t?(i.value=t,await d()):(0,p.d)("negative","Неверный пинкод")}async function d(){o.toggleLoadingState();const e=(0,v.d)({seed:i.value,password:u.value});await l.login(i.value,e);const t=localStorage.getItem("addresses");await s.connectWS(JSON.parse(t)[0].address),o.toggleLoadingState(),await a.push({name:"wallet_index"})}async function S(e){u.value=e,await d()}async function q(){await l.logout()}function H(e){const a=/^[A-Za-z0-9]+$/;return!!a.test(e)&&(t("seedGood",{val:[43,44,86,87,88].includes(e.length)}),[43,44,86,87,88].includes(e.length))}return(e,t)=>{const a=(0,n.up)("q-input"),l=(0,n.up)("pin-code"),o=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.iD)(n.HY,null,[y,(0,g.SU)(c)?((0,n.wg)(),(0,n.iD)("div",b,[(0,n.Wm)(l,{showDigits:!1,onPincode_ready:r}),(0,n.Wm)(o,{rounded:"","no-caps":"",outline:"",flat:"",class:"full-width q-mt-md",onClick:q,size:"14px",dense:"",color:"negative",label:"Я забыл пин-код. Сбросить все данные"})])):((0,n.wg)(),(0,n.iD)("div",f,[(0,n.Wm)(a,{autofocus:"",outlined:"",modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e),color:"primary",label:"Введите Ваш сид",rounded:"",rules:[e=>e&&e.length>0||"Это обязательное поле",e=>H(e)||"Введен не корректный сид"]},null,8,["modelValue","rules"]),H(i.value)?((0,n.wg)(),(0,n.iD)("div",x,[(0,n._)("div",k,[(0,n.Wm)(l,{showDigits:!0,onPincode_ready:S})])])):(0,n.kq)("",!0)]))],64)}}};var q=a(24455),H=a(13119),C=a(69984),D=a.n(C);const L=S,W=L;D()(S,"components",{QBtn:q.Z,QInput:H.Z});var j=a(99407);const A=(0,n._)("p",{class:"text-h6 text-bold text-center text-primary"},"Регистрация",-1),I={key:0,class:""},T=(0,n._)("p",{class:"text-weight-bold text-center text-negative"},"Убедитесь, что вы со всем согласны:",-1),U=["innerHTML"],V=(0,n._)("p",null,[(0,n._)("a",{target:"_blank",href:"https://wallet.rupay.pro/rupay_user_agreement.pdf"},"Пользовательское соглашение")],-1),O={key:1,class:""},Z={key:2,class:""},P=(0,n._)("p",null,"Ваш сид:",-1),Q={style:{"word-break":"break-all"},class:"text-caption bg-grey-3 q-pa-md"},G=(0,n._)("p",{class:"text-caption text-negative q-pa-md text-weight-medium"}," Скопируйте или запишите ваш сид (секретный ключ) и сохраните его в максимально защищенном месте. Ни в коем случае не делитесь и никому не сообщайте ваш сид (секретный ключ)!!! ",-1),J={__name:"Register",emits:["openLogin"],setup(e,{emit:t}){const a=(0,w.t)(),o=(0,m.tv)(),s=(0,_.T)(),i=(0,g.iH)(1),u=(0,g.iH)(""),c=((0,g.iH)(!0),(0,g.iH)(!1)),r=(0,g.iH)(!1);let d=(0,g.iH)(null);const h=(0,g.iH)([{agree:!1,text:" Я согласен с тем, что доступ к сиду и ключам, имеется только у меня.\n     При утере сида, доступ к счетам  будет <strong>невозможно</strong> восстановить "},{agree:!1,text:" Я согласен с тем, что <strong>при передаче сида</strong>  третьим лицам,\n    я могу <strong>лишиться всех средств</strong> находящихся на счетах "},{agree:!1,text:"Я <strong>прочитал и согласен</strong> с пользовательским соглашением об общих условиях использования мобильного платежного приложения «RUPAY» "}]),y=(0,n.Fl)((()=>h.value[0].agree&&h.value[1].agree&&h.value[2].agree));function f(){t("openLogin")}async function x(e){u.value=e,await k()}async function k(){c.value=!c.value,d.value=await j.EraChain.Crypt.generateSeed(),c.value=!c.value,i.value=3}async function b(){c.value=!c.value;const e=(0,v.d)({seed:d.value,password:u.value});await a.login(d.value,e);const t=localStorage.getItem("addresses");await s.connectWS(JSON.parse(t)[0].address),await o.push({name:"wallet_index"}),c.value=!c.value}async function S(){await(0,p.Q)(d.value,"positive","Сид скопирован"),r.value=!0}return(e,t)=>{const a=(0,n.up)("q-toggle"),o=(0,n.up)("btn"),s=(0,n.up)("pin-code"),u=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.iD)(n.HY,null,[A,1===i.value?((0,n.wg)(),(0,n.iD)("div",I,[T,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(h.value,((e,t)=>((0,n.wg)(),(0,n.j4)(a,{modelValue:h.value[t].agree,"onUpdate:modelValue":e=>h.value[t].agree=e,"checked-icon":"check",color:"green","unchecked-icon":"clear",class:"text-caption q-mb-md",style:{"line-height":"110%"}},{default:(0,n.w5)((()=>[(0,n._)("p",{class:"no-margin",innerHTML:e.text},null,8,U)])),_:2},1032,["modelValue","onUpdate:modelValue"])))),256)),V,(0,g.SU)(y)?((0,n.wg)(),(0,n.j4)(o,{key:0,label:"Продолжить",onClick:t[0]||(t[0]=e=>i.value=2),type:"submit",outline:!1})):(0,n.kq)("",!0)])):(0,n.kq)("",!0),2===i.value?((0,n.wg)(),(0,n.iD)("div",O,[(0,n.Wm)(s,{showDigits:!0,onPincode_ready:x}),(0,n._)("div",{class:"text-center q-mt-md"},[(0,n._)("p",{class:"text-caption no-margin",onClick:f},"У меня есть сид")])])):(0,n.kq)("",!0),3===i.value?((0,n.wg)(),(0,n.iD)("div",Z,[P,(0,n._)("p",Q,(0,l.zw)((0,g.SU)(d)),1),(0,n.Wm)(u,{rounded:"",outline:"",onClick:S,"no-caps":"",label:"Скопировать сид",unelevated:"",color:"primary",class:"full-width q-mb-md"}),G,(0,n.Wm)(o,{label:r.value?"Продолжить":"Для продолжения скопируйте сид",disabled:!r.value,is_loading:c.value,onClick:b,type:"submit",outline:!1},null,8,["label","disabled","is_loading"])])):(0,n.kq)("",!0)],64)}}};var N=a(23175);const R=J,Y=R;D()(J,"components",{QToggle:N.Z,QBtn:q.Z});const z={name:"IndexPage",components:{Register:Y,Login:W},preFetch({redirect:e,router:t}){localStorage.getItem("seed")},setup(){const e=(0,g.iH)(!0),t=(0,g.iH)(!1),a=localStorage.getItem("hash");function n(e){t.value=e.val}function l(a){t.value=!1,e.value=!0}return{loginActive:e,is_seed_good:t,hash:a,setSeed:n,openLogin:l}}};var B=a(11639);const F=(0,B.Z)(z,[["render",d]]),M=F},744:(e,t,a)=>{e.exports=a.p+"img/logo.5329c942.png"}}]);