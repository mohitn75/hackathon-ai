(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2635],{5905:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/uikit/table",function(){return a(2110)}])},6801:function(e,t,a){"use strict";a.d(t,{M:function(){return n}});var n={getProductsSmall:function(){return fetch("/demo/data/products-small.json",{headers:{"Cache-Control":"no-cache"}}).then(function(e){return e.json()}).then(function(e){return e.data})},getProducts:function(){return fetch("/demo/data/products.json",{headers:{"Cache-Control":"no-cache"}}).then(function(e){return e.json()}).then(function(e){return e.data})},getProductsWithOrdersSmall:function(){return fetch("/demo/data/products-orders-small.json",{headers:{"Cache-Control":"no-cache"}}).then(function(e){return e.json()}).then(function(e){return e.data})}}},2110:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return P}});var n=a(1799),r=a(828),l=a(9815),s=a(5893),i=a(7294),o=a(3643),c=a(6367),u=a(2896),d=a(8650),m=a(1202),f=a(1176),p=a(9403),h=a(8927),v=a(8751),g=a(3621),y=a(7974),x=a(7074);function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}var w={defaultProps:{__TYPE:"TriStateCheckbox",id:null,value:null,style:null,className:null,disabled:!1,readOnly:!1,tabIndex:"0",tooltip:null,tooltipOptions:null,onChange:null,children:void 0},getProps:function(e){return o.gb.getMergedProps(e,w.defaultProps)},getOtherProps:function(e){return o.gb.getDiffProps(e,w.defaultProps)}},N=i.memo(i.forwardRef(function(e,t){var a,n=w.getProps(e),r=function(e){if(Array.isArray(e))return e}(a=i.useState(!1))||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l,s,i=[],o=!0,c=!1;try{if(l=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;o=!1}else for(;!(o=(n=l.call(a)).done)&&(i.push(n.value),i.length!==t);o=!0);}catch(e){c=!0,r=e}finally{try{if(!o&&null!=a.return&&(s=a.return(),Object(s)!==s))return}finally{if(c)throw r}}return i}}(a,2)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if("Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return j(e,t)}}(a,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),l=r[0],s=r[1],u=i.useRef(null),d=function(e){var t;null===n.value||void 0===n.value?t=!0:!0===n.value?t=!1:!1===n.value&&(t=null),n.onChange&&n.onChange({originalEvent:e,value:t,stopPropagation:function(){},preventDefault:function(){},target:{name:n.name,id:n.id,value:t}})};i.useImperativeHandle(t,function(){return{props:n,focus:function(){return o.p7.focusFirstElement(u.current)},getElement:function(){return u.current}}});var m=o.gb.isNotEmpty(n.tooltip),f=w.getOtherProps(n),p=o.gb.reduceKeys(f,o.p7.ARIA_PROPS),h=(0,o.AK)("p-tristatecheckbox p-checkbox p-component",n.className,{"p-checkbox-disabled":n.disabled}),v=(0,o.AK)("p-checkbox-box",{"p-highlight":(n.value||!n.value)&&null!==n.value,"p-disabled":n.disabled,"p-focus":l}),g=(0,o.AK)("p-checkbox-icon p-c",{"pi pi-check":!0===n.value,"pi pi-times":!1===n.value}),y=n.value?(0,c.$2)("trueLabel"):!1===n.value?(0,c.$2)("falseLabel"):(0,c.$2)("nullLabel"),N=n.value?"true":"false";return i.createElement(i.Fragment,null,i.createElement("div",b({ref:u,id:n.id,className:h,style:n.style},f,{onClick:function(e){n.disabled||n.readOnly||d(e)}}),i.createElement("div",b({className:v,tabIndex:n.tabIndex,onFocus:function(){s(!0)},onBlur:function(){s(!1)},onKeyDown:function(e){32===e.keyCode&&(d(e),e.preventDefault())},role:"checkbox","aria-checked":N},p),i.createElement("span",{className:g})),l&&i.createElement("span",{className:"p-sr-only","aria-live":"polite"},y)),m&&i.createElement(x.u,b({target:u,content:n.tooltip},n.tooltipOptions)))}));N.displayName="TriStateCheckbox";var C=a(3718),S=a(5969),E={getCustomersMedium:function(){return fetch("/demo/data/customers-medium.json",{headers:{"Cache-Control":"no-cache"}}).then(function(e){return e.json()}).then(function(e){return e.data})},getCustomersLarge:function(){return fetch("/demo/data/customers-large.json",{headers:{"Cache-Control":"no-cache"}}).then(function(e){return e.json()}).then(function(e){return e.data})}},A=a(6801),k=a(6094),P=function(){var e=(0,r.Z)((0,i.useState)([]),2),t=e[0],a=e[1],x=(0,r.Z)((0,i.useState)([]),2),b=x[0],j=x[1],w=(0,r.Z)((0,i.useState)([]),2),P=w[0],O=w[1],T=(0,r.Z)((0,i.useState)({}),2),M=T[0],F=T[1],L=(0,r.Z)((0,i.useState)(!0),2),I=L[0],_=L[1],D=(0,r.Z)((0,i.useState)(!0),2),B=D[0],W=D[1],R=(0,r.Z)((0,i.useState)(!1),2),G=R[0],z=R[1],Z=(0,r.Z)((0,i.useState)([]),2),K=Z[0],U=Z[1],V=(0,r.Z)((0,i.useState)(""),2),H=V[0],X=V[1],$=(0,r.Z)((0,i.useState)([]),2),Q=$[0],q=$[1],Y=(0,r.Z)((0,i.useState)(!1),2),J=Y[0],ee=Y[1],et=[{name:"Amy Elsner",image:"amyelsner.png"},{name:"Anna Fali",image:"annafali.png"},{name:"Asiya Javayant",image:"asiyajavayant.png"},{name:"Bernardo Dominic",image:"bernardodominic.png"},{name:"Elwin Sharvill",image:"elwinsharvill.png"},{name:"Ioni Bowcher",image:"ionibowcher.png"},{name:"Ivan Magalhaes",image:"ivanmagalhaes.png"},{name:"Onyama Limba",image:"onyamalimba.png"},{name:"Stephen Shaw",image:"stephenshaw.png"},{name:"XuXue Feng",image:"xuxuefeng.png"}],ea=["unqualified","qualified","new","negotiation","renewal","proposal"];(0,i.useEffect)(function(){W(!0),E.getCustomersLarge().then(function(e){a(en(e)),_(!1)}),E.getCustomersLarge().then(function(e){j(en(e)),W(!1)}),E.getCustomersMedium().then(function(e){return O(e)}),A.M.getProductsWithOrdersSmall().then(function(e){return U(e)}),el()},[]);var en=function(e){return(0,l.Z)(e||[]).map(function(e){return e.date=new Date(e.date),e})},er=function(e){return null==e?void 0:e.toLocaleString("en-US",{style:"currency",currency:"USD"})},el=function(){F({global:{value:null,matchMode:c.a6.CONTAINS},name:{operator:c.pg.AND,constraints:[{value:null,matchMode:c.a6.STARTS_WITH}]},"country.name":{operator:c.pg.AND,constraints:[{value:null,matchMode:c.a6.STARTS_WITH}]},representative:{value:null,matchMode:c.a6.IN},date:{operator:c.pg.AND,constraints:[{value:null,matchMode:c.a6.DATE_IS}]},balance:{operator:c.pg.AND,constraints:[{value:null,matchMode:c.a6.EQUALS}]},status:{operator:c.pg.OR,constraints:[{value:null,matchMode:c.a6.EQUALS}]},activity:{value:null,matchMode:c.a6.BETWEEN},verified:{value:null,matchMode:c.a6.EQUALS}}),X("")},es=function(e){var t,a;return(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)("img",{alt:"flag",src:"/demo/images/flag/flag_placeholder.png",className:"flag flag-".concat(null===(t=e.country)||void 0===t?void 0:t.code),width:30}),(0,s.jsx)("span",{style:{marginLeft:".5em",verticalAlign:"middle"},children:null===(a=e.country)||void 0===a?void 0:a.name})]})},ei=function(e){var t=e.representative;return(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)("img",{alt:t.name,src:"/demo/images/avatar/".concat(t.image),onError:function(e){return e.currentTarget.src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"},width:32,style:{verticalAlign:"middle"}}),(0,s.jsx)("span",{style:{marginLeft:".5em",verticalAlign:"middle"},children:t.name})]})},eo=function(e){return(0,s.jsxs)("div",{className:"p-multiselect-representative-option",children:[(0,s.jsx)("img",{alt:e.name,src:"/demo/images/avatar/".concat(e.image),width:32,style:{verticalAlign:"middle"}}),(0,s.jsx)("span",{style:{marginLeft:".5em",verticalAlign:"middle"},children:e.name})]})},ec=function(e){return e.date.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"})},eu=function(e){return(0,s.jsx)("span",{className:"customer-badge status-".concat(e.status),children:e.status})},ed=function(e){return(0,s.jsx)("span",{className:"customer-badge status-".concat(e),children:e})},em=function(){var e={};K.forEach(function(t){return e["".concat(t.id)]=!0}),q(e),ee(!0)},ef=function(){q([]),ee(!1)},ep=function(e){return er(e.amount)},eh=function(e){var t;return(0,s.jsx)("span",{className:"order-badge order-".concat(null===(t=e.status)||void 0===t?void 0:t.toLowerCase()),children:e.status})},ev=function(){return(0,s.jsx)(p.z,{icon:"pi pi-search"})},eg=(0,s.jsx)(p.z,{icon:J?"pi pi-minus":"pi pi-plus",label:J?"Collapse All":"Expand All",onClick:function(){J?ef():em()},className:"w-11rem"}),ey=function(e){var t=0;if(P){var a=!0,n=!1,r=void 0;try{for(var l,s=P[Symbol.iterator]();!(a=(l=s.next()).done);a=!0)l.value.representative.name===e&&t++}catch(e){n=!0,r=e}finally{try{a||null==s.return||s.return()}finally{if(n)throw r}}}return t},ex=(0,s.jsxs)("div",{className:"flex justify-content-between",children:[(0,s.jsx)(p.z,{type:"button",icon:"pi pi-filter-slash",label:"Clear",outlined:!0,onClick:function(){el()}}),(0,s.jsxs)("span",{className:"p-input-icon-left",children:[(0,s.jsx)("i",{className:"pi pi-search"}),(0,s.jsx)(k.o,{value:H,onChange:function(e){var t=e.target.value,a=(0,n.Z)({},M);a.global.value=t,F(a),X(t)},placeholder:"Keyword Search"})]})]});return(0,s.jsxs)("div",{className:"grid",children:[(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h5",{children:"Filter Menu"}),(0,s.jsxs)(u.w,{value:t,paginator:!0,className:"p-datatable-gridlines",showGridlines:!0,rows:10,dataKey:"id",filters:M,filterDisplay:"menu",loading:I,responsiveLayout:"scroll",emptyMessage:"No customers found.",header:ex,children:[(0,s.jsx)(d.s,{field:"name",header:"Name",filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"12rem"}}),(0,s.jsx)(d.s,{header:"Country",filterField:"country.name",style:{minWidth:"12rem"},body:es,filter:!0,filterPlaceholder:"Search by country",filterClear:function(e){return(0,s.jsx)(p.z,{type:"button",icon:"pi pi-times",onClick:e.filterClearCallback,severity:"secondary"})},filterApply:function(e){return(0,s.jsx)(p.z,{type:"button",icon:"pi pi-check",onClick:e.filterApplyCallback,severity:"success"})}}),(0,s.jsx)(d.s,{header:"Agent",filterField:"representative",showFilterMatchModes:!1,filterMenuStyle:{width:"14rem"},style:{minWidth:"14rem"},body:ei,filter:!0,filterElement:function(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"mb-3 text-bold",children:"Agent Picker"}),(0,s.jsx)(g.N,{value:e.value,options:et,itemTemplate:eo,onChange:function(t){return e.filterCallback(t.value)},optionLabel:"name",placeholder:"Any",className:"p-column-filter"})]})}}),(0,s.jsx)(d.s,{header:"Date",filterField:"date",dataType:"date",style:{minWidth:"10rem"},body:ec,filter:!0,filterElement:function(e){return(0,s.jsx)(v.f,{value:e.value,onChange:function(t){return e.filterCallback(t.value,e.index)},dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy",mask:"99/99/9999"})}}),(0,s.jsx)(d.s,{header:"Balance",filterField:"balance",dataType:"numeric",style:{minWidth:"10rem"},body:function(e){return er(e.balance)},filter:!0,filterElement:function(e){return(0,s.jsx)(f.R,{value:e.value,onChange:function(t){return e.filterCallback(t.value,e.index)},mode:"currency",currency:"USD",locale:"en-US"})}}),(0,s.jsx)(d.s,{field:"status",header:"Status",filterMenuStyle:{width:"14rem"},style:{minWidth:"12rem"},body:eu,filter:!0,filterElement:function(e){return(0,s.jsx)(m.L,{value:e.value,options:ea,onChange:function(t){return e.filterCallback(t.value,e.index)},itemTemplate:ed,placeholder:"Select a Status",className:"p-column-filter",showClear:!0})}}),(0,s.jsx)(d.s,{field:"activity",header:"Activity",showFilterMatchModes:!1,style:{minWidth:"12rem"},body:function(e){return(0,s.jsx)(h.k,{value:e.activity,showValue:!1,style:{height:".5rem"}})},filter:!0,filterElement:function(e){return(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)(y.i,{value:e.value,onChange:function(t){return e.filterCallback(t.value)},range:!0,className:"m-3"}),(0,s.jsxs)("div",{className:"flex align-items-center justify-content-between px-2",children:[(0,s.jsx)("span",{children:e.value?e.value[0]:0}),(0,s.jsx)("span",{children:e.value?e.value[1]:100})]})]})}}),(0,s.jsx)(d.s,{field:"verified",header:"Verified",dataType:"boolean",bodyClassName:"text-center",style:{minWidth:"8rem"},body:function(e){return(0,s.jsx)("i",{className:(0,o.AK)("pi",{"text-green-500 pi-check-circle":e.verified,"text-pink-500 pi-times-circle":!e.verified})})},filter:!0,filterElement:function(e){return(0,s.jsx)(N,{value:e.value,onChange:function(t){return e.filterCallback(t.value)}})}})]})]})}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h5",{children:"Frozen Columns"}),(0,s.jsx)(C.C,{checked:G,onChange:function(e){return z(e.value)},onIcon:"pi pi-lock",offIcon:"pi pi-lock-open",onLabel:"Unfreeze Id",offLabel:"Freeze Id",style:{width:"10rem"}}),(0,s.jsxs)(u.w,{value:b,scrollable:!0,scrollHeight:"400px",loading:B,className:"mt-3",children:[(0,s.jsx)(d.s,{field:"name",header:"Name",style:{flexGrow:1,flexBasis:"160px"},frozen:!0,className:"font-bold"}),(0,s.jsx)(d.s,{field:"id",header:"Id",style:{flexGrow:1,flexBasis:"100px"},frozen:G,alignFrozen:"left",bodyClassName:(0,o.AK)({"font-bold":G})}),(0,s.jsx)(d.s,{field:"country.name",header:"Country",style:{flexGrow:1,flexBasis:"200px"},body:es}),(0,s.jsx)(d.s,{field:"date",header:"Date",style:{flexGrow:1,flexBasis:"200px"},body:ec}),(0,s.jsx)(d.s,{field:"company",header:"Company",style:{flexGrow:1,flexBasis:"200px"}}),(0,s.jsx)(d.s,{field:"status",header:"Status",style:{flexGrow:1,flexBasis:"200px"},body:eu}),(0,s.jsx)(d.s,{field:"activity",header:"Activity",style:{flexGrow:1,flexBasis:"200px"}}),(0,s.jsx)(d.s,{field:"representative.name",header:"Representative",style:{flexGrow:1,flexBasis:"200px"},body:ei}),(0,s.jsx)(d.s,{field:"balance",header:"Balance",body:function(e){return(0,s.jsx)("div",{children:(0,s.jsx)("span",{className:"text-bold",children:er(e.balance)})})},frozen:!0,style:{flexGrow:1,flexBasis:"120px"},className:"font-bold",alignFrozen:"right"})]})]})}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h5",{children:"Row Expand"}),(0,s.jsxs)(u.w,{value:K,expandedRows:Q,onRowToggle:function(e){return q(e.data)},responsiveLayout:"scroll",rowExpansionTemplate:function(e){return(0,s.jsxs)("div",{className:"orders-subtable",children:[(0,s.jsxs)("h5",{children:["Orders for ",e.name]}),(0,s.jsxs)(u.w,{value:e.orders,responsiveLayout:"scroll",children:[(0,s.jsx)(d.s,{field:"id",header:"Id",sortable:!0}),(0,s.jsx)(d.s,{field:"customer",header:"Customer",sortable:!0}),(0,s.jsx)(d.s,{field:"date",header:"Date",sortable:!0}),(0,s.jsx)(d.s,{field:"amount",header:"Amount",body:ep,sortable:!0}),(0,s.jsx)(d.s,{field:"status",header:"Status",body:eh,sortable:!0}),(0,s.jsx)(d.s,{headerStyle:{width:"4rem"},body:ev})]})]})},dataKey:"id",header:eg,children:[(0,s.jsx)(d.s,{expander:!0,style:{width:"3em"}}),(0,s.jsx)(d.s,{field:"name",header:"Name",sortable:!0}),(0,s.jsx)(d.s,{header:"Image",body:function(e){return(0,s.jsx)("img",{src:"/demo/images/product/".concat(e.image),onError:function(e){return e.currentTarget.src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"},alt:e.image,className:"shadow-2",width:100})}}),(0,s.jsx)(d.s,{field:"price",header:"Price",sortable:!0,body:function(e){return er(e.price)}}),(0,s.jsx)(d.s,{field:"category",header:"Category",sortable:!0}),(0,s.jsx)(d.s,{field:"rating",header:"Reviews",sortable:!0,body:function(e){return(0,s.jsx)(S.i,{value:e.rating,readOnly:!0,cancel:!1})}}),(0,s.jsx)(d.s,{field:"inventoryStatus",header:"Status",sortable:!0,body:function(e){var t;return(0,s.jsx)("span",{className:"product-badge status-".concat(null===(t=e.inventoryStatus)||void 0===t?void 0:t.toLowerCase()),children:e.inventoryStatus})}})]})]})}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h5",{children:"Subheader Grouping"}),(0,s.jsxs)(u.w,{value:P,rowGroupMode:"subheader",groupRowsBy:"representative.name",sortMode:"single",sortField:"representative.name",sortOrder:1,scrollable:!0,scrollHeight:"400px",rowGroupHeaderTemplate:function(e){return(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)("img",{alt:e.representative.name,src:"/demo/images/avatar/".concat(e.representative.image),width:"32",style:{verticalAlign:"middle"}}),(0,s.jsx)("span",{className:"font-bold ml-2",children:e.representative.name})]})},rowGroupFooterTemplate:function(e){return(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)("td",{colSpan:4,style:{textAlign:"right"},className:"text-bold pr-6",children:"Total Customers"}),(0,s.jsx)("td",{children:ey(e.representative.name)})]})},responsiveLayout:"scroll",children:[(0,s.jsx)(d.s,{field:"name",header:"Name",style:{minWidth:"200px"}}),(0,s.jsx)(d.s,{field:"country",header:"Country",body:es,style:{minWidth:"200px"}}),(0,s.jsx)(d.s,{field:"company",header:"Company",style:{minWidth:"200px"}}),(0,s.jsx)(d.s,{field:"status",header:"Status",body:eu,style:{minWidth:"200px"}}),(0,s.jsx)(d.s,{field:"date",header:"Date",style:{minWidth:"200px"}})]})]})})]})}},8650:function(e,t,a){"use strict";a.d(t,{s:function(){return n}});var n=function(){};n.displayName="Column"},8927:function(e,t,a){"use strict";a.d(t,{k:function(){return i}});var n=a(7294),r=a(3643);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s={defaultProps:{__TYPE:"ProgressBar",id:null,value:null,showValue:!0,unit:"%",style:null,className:null,mode:"determinate",displayValueTemplate:null,color:null,children:void 0},getProps:function(e){return r.gb.getMergedProps(e,s.defaultProps)},getOtherProps:function(e){return r.gb.getDiffProps(e,s.defaultProps)}},i=n.memo(n.forwardRef(function(e,t){var a,i,o,c,u,d=s.getProps(e),m=n.useRef(null);if(n.useImperativeHandle(t,function(){return{props:d,getElement:function(){return m.current}}}),"determinate"===d.mode)return a=s.getOtherProps(d),i=(0,r.AK)("p-progressbar p-component p-progressbar-determinate",d.className),o=d.showValue&&null!=d.value?d.displayValueTemplate?d.displayValueTemplate(d.value):d.value+d.unit:null,n.createElement("div",l({role:"progressbar",id:d.id,ref:m,className:i,style:d.style,"aria-valuemin":"0","aria-valuenow":d.value,"aria-valuemax":"100"},a),n.createElement("div",{className:"p-progressbar-value p-progressbar-value-animate",style:{width:d.value+"%",display:"flex",backgroundColor:d.color}},null!=d.value&&0!==d.value&&d.showValue&&n.createElement("div",{className:"p-progressbar-label"},o)));if("indeterminate"===d.mode)return c=s.getOtherProps(d),u=(0,r.AK)("p-progressbar p-component p-progressbar-indeterminate",d.className),n.createElement("div",l({role:"progressbar",id:d.id,ref:m,className:u,style:d.style},c),n.createElement("div",{className:"p-progressbar-indeterminate-container"},n.createElement("div",{className:"p-progressbar-value p-progressbar-value-animate",style:{backgroundColor:d.color}})));throw Error(d.mode+" is not a valid mode for the ProgressBar. Valid values are 'determinate' and 'indeterminate'")}));i.displayName="ProgressBar"}},function(e){e.O(0,[5257,8725,1176,2727,7479,9808,9774,2888,179],function(){return e(e.s=5905)}),_N_E=e.O()}]);