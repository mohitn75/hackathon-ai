(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4732],{9046:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/uikit/input",function(){return s(5314)}])},9826:function(e,n,s){"use strict";s.d(n,{T:function(){return a}});var a={getCountries:function(){return fetch("/demo/data/countries.json",{headers:{"Cache-Control":"no-cache"}}).then(function(e){return e.json()}).then(function(e){return e.data})}}},6593:function(e,n,s){"use strict";s.d(n,{s:function(){return a}});var a={getTreeNodes:function(){return fetch("/demo/data/treenodes.json",{headers:{"Cache-Control":"no-cache"}}).then(function(e){return e.json()}).then(function(e){return e.root})},getTreeTableNodes:function(){return fetch("/demo/data/treetablenodes.json",{headers:{"Cache-Control":"no-cache"}}).then(function(e){return e.json()}).then(function(e){return e.root})}}},5314:function(e,n,s){"use strict";s.r(n),s.d(n,{InputDemo:function(){return I}});var a=s(828),l=s(9815),c=s(5893),o=s(7294),i=s(6094),t=s(2552),r=s(7730),d=s(8751),u=s(7506),h=s(7974),m=s(5486),p=s(5969),x=s(1536),j=s(9710),v=s(1772),g=s(1838),N=s(7315),f=s(1202),C=s(3718),b=s(3621),S=s(966),k=s(3594),w=s(9403),Z=s(1176),O=s(9826),L=s(6593),I=function(){var e,n,s,I,T=(0,a.Z)((0,o.useState)(""),2),y=T[0],E=T[1],R=(0,a.Z)((0,o.useState)([]),2),Y=R[0],_=R[1],F=(0,a.Z)((0,o.useState)(null),2),A=F[0],B=F[1],D=(0,a.Z)((0,o.useState)([]),2),P=D[0],U=D[1],M=(0,a.Z)((0,o.useState)(new Date),2),X=M[0],z=M[1],G=(0,a.Z)((0,o.useState)(null),2),q=G[0],J=G[1],K=(0,a.Z)((0,o.useState)([]),2),Q=K[0],V=K[1],W=(0,a.Z)((0,o.useState)(50),2),$=W[0],H=W[1],ee=(0,a.Z)((0,o.useState)(void 0),2),en=ee[0],es=ee[1],ea=(0,a.Z)((0,o.useState)("1976D2"),2),el=ea[0],ec=ea[1],eo=(0,a.Z)((0,o.useState)(20),2),ei=eo[0],et=eo[1],er=(0,a.Z)((0,o.useState)(null),2),ed=er[0],eu=er[1],eh=(0,a.Z)((0,o.useState)([]),2),em=eh[0],ep=eh[1],ex=(0,a.Z)((0,o.useState)(!1),2),ej=ex[0],ev=ex[1],eg=(0,a.Z)((0,o.useState)(null),2),eN=eg[0],ef=eg[1],eC=(0,a.Z)((0,o.useState)(null),2),eb=eC[0],eS=eC[1],ek=(0,a.Z)((0,o.useState)(null),2),ew=ek[0],eZ=ek[1],eO=(0,a.Z)((0,o.useState)(!1),2),eL=eO[0],eI=eO[1],eT=(0,a.Z)((0,o.useState)(null),2),ey=eT[0],eE=eT[1],eR=(0,a.Z)((0,o.useState)(null),2),eY=eR[0],e_=eR[1],eF=(0,a.Z)((0,o.useState)(!1),2),eA=eF[0],eB=eF[1],eD=(0,a.Z)((0,o.useState)(null),2),eP=eD[0],eU=eD[1],eM=(0,a.Z)((0,o.useState)([]),2),eX=eM[0],ez=eM[1];(0,o.useEffect)(function(){O.T.getCountries().then(function(e){return _(e)}),L.s.getTreeNodes().then(function(e){return ez(e)})},[]);var eG=function(e){var n=(0,l.Z)(em);e.checked?n.push(e.value):n.splice(n.indexOf(e.value),1),ep(n)};return(0,c.jsxs)("div",{className:"grid p-fluid",children:[(0,c.jsxs)("div",{className:"col-12 md:col-6",children:[(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)("h5",{children:"InputText"}),(0,c.jsxs)("div",{className:"grid formgrid",children:[(0,c.jsx)("div",{className:"col-12 mb-2 lg:col-4 lg:mb-0",children:(0,c.jsx)(i.o,{type:"text",placeholder:"Default"})}),(0,c.jsx)("div",{className:"col-12 mb-2 lg:col-4 lg:mb-0",children:(0,c.jsx)(i.o,{type:"text",placeholder:"Disabled",disabled:!0})}),(0,c.jsx)("div",{className:"col-12 mb-2 lg:col-4 lg:mb-0",children:(0,c.jsx)(i.o,{type:"text",placeholder:"Invalid",className:"p-invalid"})})]}),(0,c.jsx)("h5",{children:"Icons"}),(0,c.jsxs)("div",{className:"grid formgrid",children:[(0,c.jsx)("div",{className:"col-12 mb-2 lg:col-4 lg:mb-0",children:(0,c.jsxs)("span",{className:"p-input-icon-left",children:[(0,c.jsx)("i",{className:"pi pi-user"}),(0,c.jsx)(i.o,{type:"text",placeholder:"Username"})]})}),(0,c.jsx)("div",{className:"col-12 mb-2 lg:col-4 lg:mb-0",children:(0,c.jsxs)("span",{className:"p-input-icon-right",children:[(0,c.jsx)(i.o,{type:"text",placeholder:"Search"}),(0,c.jsx)("i",{className:"pi pi-search"})]})}),(0,c.jsx)("div",{className:"col-12 mb-2 lg:col-4 lg:mb-0",children:(0,c.jsxs)("span",{className:"p-input-icon-left p-input-icon-right",children:[(0,c.jsx)("i",{className:"pi pi-user"}),(0,c.jsx)(i.o,{type:"text",placeholder:"Search"}),(0,c.jsx)("i",{className:"pi pi-search"})]})})]}),(0,c.jsx)("h5",{children:"Float Label"}),(0,c.jsxs)("span",{className:"p-float-label",children:[(0,c.jsx)(i.o,{id:"username",type:"text",value:y,onChange:function(e){return E(e.target.value)}}),(0,c.jsx)("label",{htmlFor:"username",children:"Username"})]}),(0,c.jsx)("h5",{children:"Textarea"}),(0,c.jsx)(t.g,{placeholder:"Your Message",autoResize:!0,rows:3,cols:30}),(0,c.jsx)("h5",{children:"AutoComplete"}),(0,c.jsx)(r.Q,{placeholder:"Search",id:"dd",dropdown:!0,multiple:!0,value:A,onChange:function(e){return B(e.value)},suggestions:P,completeMethod:function(e){setTimeout(function(){e.query.trim().length?U(Y.filter(function(n){return n.name.toLowerCase().startsWith(e.query.toLowerCase())})):U((0,l.Z)(Y))},250)},field:"name"}),(0,c.jsx)("h5",{children:"Calendar"}),(0,c.jsx)(d.f,{showIcon:!0,showButtonBar:!0,value:X,onChange:function(e){return z(e.value)}}),(0,c.jsx)("h5",{children:"InputNumber"}),(0,c.jsx)(Z.R,{value:q,onValueChange:function(n){return J(null!==(e=n.value)&&void 0!==e?e:null)},showButtons:!0,mode:"decimal"}),(0,c.jsx)("h5",{children:"Chips"}),(0,c.jsx)(u.c,{value:Q,onChange:function(e){return V(null!==(n=e.value)&&void 0!==n?n:[])}})]}),(0,c.jsx)("div",{className:"card",children:(0,c.jsxs)("div",{className:"grid",children:[(0,c.jsxs)("div",{className:"col-12",children:[(0,c.jsx)("h5",{children:"Slider"}),(0,c.jsx)(i.o,{value:$,onChange:function(e){return H(parseInt(e.target.value))}}),(0,c.jsx)(h.i,{value:$,onChange:function(e){return H(e.value)}})]}),(0,c.jsxs)("div",{className:"col-12 md:col-6",children:[(0,c.jsx)("h5",{children:"Rating"}),(0,c.jsx)(p.i,{value:en,onChange:function(e){return es(e.value)}})]}),(0,c.jsxs)("div",{className:"col-12 md:col-6",children:[(0,c.jsx)("h5",{children:"ColorPicker"}),(0,c.jsx)(x.z,{value:el,onChange:function(e){return ec(e.value)},style:{width:"2rem"}})]}),(0,c.jsxs)("div",{className:"col-12",children:[(0,c.jsx)("h5",{children:"Knob"}),(0,c.jsx)(m.l,{value:ei,valueTemplate:"{value}%",onChange:function(e){return et(e.value)},step:10,min:-50,max:50})]})]})})]}),(0,c.jsxs)("div",{className:"col-12 md:col-6",children:[(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)("h5",{children:"RadioButton"}),(0,c.jsxs)("div",{className:"grid",children:[(0,c.jsx)("div",{className:"col-12 md:col-4",children:(0,c.jsxs)("div",{className:"field-radiobutton",children:[(0,c.jsx)(j.E,{inputId:"option1",name:"option",value:"Chicago",checked:"Chicago"===ed,onChange:function(e){return eu(e.value)}}),(0,c.jsx)("label",{htmlFor:"option1",children:"Chicago"})]})}),(0,c.jsx)("div",{className:"col-12 md:col-4",children:(0,c.jsxs)("div",{className:"field-radiobutton",children:[(0,c.jsx)(j.E,{inputId:"option2",name:"option",value:"Los Angeles",checked:"Los Angeles"===ed,onChange:function(e){return eu(e.value)}}),(0,c.jsx)("label",{htmlFor:"option2",children:"Los Angeles"})]})}),(0,c.jsx)("div",{className:"col-12 md:col-4",children:(0,c.jsxs)("div",{className:"field-radiobutton",children:[(0,c.jsx)(j.E,{inputId:"option3",name:"option",value:"New York",checked:"New York"===ed,onChange:function(e){return eu(e.value)}}),(0,c.jsx)("label",{htmlFor:"option3",children:"New York"})]})})]}),(0,c.jsx)("h5",{children:"Checkbox"}),(0,c.jsxs)("div",{className:"grid",children:[(0,c.jsx)("div",{className:"col-12 md:col-4",children:(0,c.jsxs)("div",{className:"field-checkbox",children:[(0,c.jsx)(v.X,{inputId:"checkOption1",name:"option",value:"Chicago",checked:-1!==em.indexOf("Chicago"),onChange:eG}),(0,c.jsx)("label",{htmlFor:"checkOption1",children:"Chicago"})]})}),(0,c.jsx)("div",{className:"col-12 md:col-4",children:(0,c.jsxs)("div",{className:"field-checkbox",children:[(0,c.jsx)(v.X,{inputId:"checkOption2",name:"option",value:"Los Angeles",checked:-1!==em.indexOf("Los Angeles"),onChange:eG}),(0,c.jsx)("label",{htmlFor:"checkOption2",children:"Los Angeles"})]})}),(0,c.jsx)("div",{className:"col-12 md:col-4",children:(0,c.jsxs)("div",{className:"field-checkbox",children:[(0,c.jsx)(v.X,{inputId:"checkOption3",name:"option",value:"New York",checked:-1!==em.indexOf("New York"),onChange:eG}),(0,c.jsx)("label",{htmlFor:"checkOption3",children:"New York"})]})})]}),(0,c.jsx)("h5",{children:"Input Switch"}),(0,c.jsx)(g.Q,{checked:ej,onChange:function(e){return ev(null!==(s=e.value)&&void 0!==s&&s)}})]}),(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)("h5",{children:"Listbox"}),(0,c.jsx)(N.w,{value:eN,onChange:function(e){return ef(e.value)},options:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],optionLabel:"name",filter:!0}),(0,c.jsx)("h5",{children:"Dropdown"}),(0,c.jsx)(f.L,{value:eb,onChange:function(e){return eS(e.value)},options:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],optionLabel:"name",placeholder:"Select"}),(0,c.jsx)("h5",{children:"MultiSelect"}),(0,c.jsx)(b.N,{value:ew,onChange:function(e){return eZ(e.value)},options:[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}],optionLabel:"name",placeholder:"Select Countries",filter:!0,display:"chip",itemTemplate:function(e){return(0,c.jsxs)("div",{className:"flex align-items-center",children:[(0,c.jsx)("span",{className:"mr-2 flag flag-".concat(e.code.toLowerCase()),style:{width:"18px",height:"12px"}}),(0,c.jsx)("span",{children:e.name})]})}}),(0,c.jsx)("h5",{children:"TreeSelect"}),(0,c.jsx)(S.m,{value:eP,onChange:function(e){return eU(e.value)},options:eX,placeholder:"Select Item"})]}),(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)("h5",{children:"ToggleButton"}),(0,c.jsx)(C.C,{checked:eL,onChange:function(e){return eI(e.value)},onLabel:"Yes",offLabel:"No"}),(0,c.jsx)("h5",{children:"SelectButton"}),(0,c.jsx)(k.U,{value:ey,onChange:function(e){return eE(e.value)},options:[{name:"Option 1",code:"O1"},{name:"Option 2",code:"O2"},{name:"Option 3",code:"O3"}],optionLabel:"name"}),(0,c.jsx)("h5",{children:"SelectButton - Multiple"}),(0,c.jsx)(k.U,{value:eY,onChange:function(e){return e_(e.value)},options:[{name:"Option 1",code:"O1"},{name:"Option 2",code:"O2"},{name:"Option 3",code:"O3"}],optionLabel:"name",multiple:!0})]})]}),(0,c.jsx)("div",{className:"col-12",children:(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)("h5",{children:"Input Groups"}),(0,c.jsxs)("div",{className:"grid p-fluid",children:[(0,c.jsx)("div",{className:"col-12 md:col-6",children:(0,c.jsxs)("div",{className:"p-inputgroup",children:[(0,c.jsx)("span",{className:"p-inputgroup-addon",children:(0,c.jsx)("i",{className:"pi pi-user"})}),(0,c.jsx)(i.o,{placeholder:"Username"})]})}),(0,c.jsx)("div",{className:"col-12 md:col-6",children:(0,c.jsxs)("div",{className:"p-inputgroup",children:[(0,c.jsx)("span",{className:"p-inputgroup-addon",children:(0,c.jsx)("i",{className:"pi pi-shopping-cart"})}),(0,c.jsx)("span",{className:"p-inputgroup-addon",children:(0,c.jsx)("i",{className:"pi pi-globe"})}),(0,c.jsx)(i.o,{placeholder:"Price"}),(0,c.jsx)("span",{className:"p-inputgroup-addon",children:"$"}),(0,c.jsx)("span",{className:"p-inputgroup-addon",children:".00"})]})}),(0,c.jsx)("div",{className:"col-12 md:col-6",children:(0,c.jsxs)("div",{className:"p-inputgroup",children:[(0,c.jsx)(w.z,{label:"Search"}),(0,c.jsx)(i.o,{placeholder:"Keyword"})]})}),(0,c.jsx)("div",{className:"col-12 md:col-6",children:(0,c.jsxs)("div",{className:"p-inputgroup",children:[(0,c.jsx)("span",{className:"p-inputgroup-addon p-inputgroup-addon-checkbox",children:(0,c.jsx)(v.X,{checked:eA,onChange:function(e){return eB(null!==(I=e.checked)&&void 0!==I&&I)}})}),(0,c.jsx)(i.o,{placeholder:"Confirm"})]})})]})]})})]})};n.default=I}},function(e){e.O(0,[8725,1176,7479,6185,4141,9808,8246,9774,2888,179],function(){return e(e.s=9046)}),_N_E=e.O()}]);