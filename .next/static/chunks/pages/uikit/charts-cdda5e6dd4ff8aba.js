(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8450],{543:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/uikit/charts",function(){return t(6864)}])},6864:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return g}});var l=t(828),a=t(5893),o=t(7294),n=t(3308),i=t(3643);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var u={defaultProps:{__TYPE:"Chart",id:null,type:null,data:null,options:null,plugins:null,width:null,height:null,style:null,className:null,children:void 0},getProps:function(e){return i.gb.getMergedProps(e,u.defaultProps)},getOtherProps:function(e){return i.gb.getDiffProps(e,u.defaultProps)}},d=function(){try{return Chart}catch(e){return null}}(),c=o.memo(o.forwardRef(function(e,r){var l=u.getProps(e),a=o.useRef(null),c=o.useRef(null),p=o.useRef(null),g=function(){y();var e={type:l.type,data:l.data,options:l.options,plugins:l.plugins};d?c.current=new d(p.current,e):Promise.all([t.e(2196),t.e(9352)]).then(t.bind(t,9085)).then(function(r){y(),p.current&&r&&(r.default?c.current=new r.default(p.current,e):c.current=new r(p.current,e))})},y=function(){c.current&&(c.current.destroy(),c.current=null)};o.useImperativeHandle(r,function(){return{props:l,getCanvas:function(){return p.current},getChart:function(){return c.current},getBase64Image:function(){return c.current.toBase64Image()},getElement:function(){return a.current},generateLegend:function(){return c.current&&c.current.generateLegend()},refresh:function(){return c.current&&c.current.update()}}}),o.useEffect(function(){g()}),(0,n.zq)(function(){y()});var f=u.getOtherProps(l),h=(0,i.AK)("p-chart",l.className),b=Object.assign({width:l.width,height:l.height},l.style);return o.createElement("div",s({id:l.id,ref:a,style:b,className:h},f),o.createElement("canvas",{ref:p,width:l.width,height:l.height}))}),function(e,r){return e.data===r.data&&e.options===r.options&&e.type===r.type});c.displayName="Chart";var p=t(8338),g=function(){var e=(0,l.Z)((0,o.useState)({}),2),r=e[0],t=e[1],n=(0,l.Z)((0,o.useState)({}),2),i=n[0],s=n[1],u=(0,o.useContext)(p.V).layoutConfig;return(0,o.useEffect)(function(){var e=getComputedStyle(document.documentElement),r=e.getPropertyValue("--text-color"),l=e.getPropertyValue("--text-color-secondary"),a=e.getPropertyValue("--surface-border"),o={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:e.getPropertyValue("--primary-500"),borderColor:e.getPropertyValue("--primary-500"),data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:e.getPropertyValue("--primary-200"),borderColor:e.getPropertyValue("--primary-200"),data:[28,48,40,19,86,27,90]}]},n={labels:["A","B","C"],datasets:[{data:[540,325,702],backgroundColor:[e.getPropertyValue("--indigo-500"),e.getPropertyValue("--purple-500"),e.getPropertyValue("--teal-500")],hoverBackgroundColor:[e.getPropertyValue("--indigo-400"),e.getPropertyValue("--purple-400"),e.getPropertyValue("--teal-400")]}]},i={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:e.getPropertyValue("--primary-500"),borderColor:e.getPropertyValue("--primary-500"),tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:e.getPropertyValue("--primary-200"),borderColor:e.getPropertyValue("--primary-200"),tension:.4}]},u={datasets:[{data:[11,16,7,3],backgroundColor:[e.getPropertyValue("--indigo-500"),e.getPropertyValue("--purple-500"),e.getPropertyValue("--teal-500"),e.getPropertyValue("--orange-500")],label:"My dataset"}],labels:["Indigo","Purple","Teal","Orange"]},d={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",borderColor:e.getPropertyValue("--indigo-400"),pointBackgroundColor:e.getPropertyValue("--indigo-400"),pointBorderColor:e.getPropertyValue("--indigo-400"),pointHoverBackgroundColor:r,pointHoverBorderColor:e.getPropertyValue("--indigo-400"),data:[65,59,90,81,56,55,40]},{label:"My Second dataset",borderColor:e.getPropertyValue("--purple-400"),pointBackgroundColor:e.getPropertyValue("--purple-400"),pointBorderColor:e.getPropertyValue("--purple-400"),pointHoverBackgroundColor:r,pointHoverBorderColor:e.getPropertyValue("--purple-400"),data:[28,48,40,19,96,27,100]}]};t({barOptions:{plugins:{legend:{labels:{color:r}}},scales:{x:{ticks:{color:l,font:{weight:"500"}},grid:{display:!1},border:{display:!1}},y:{ticks:{color:l},grid:{color:a},border:{display:!1}}}},pieOptions:{plugins:{legend:{labels:{usePointStyle:!0,color:r}}}},lineOptions:{plugins:{legend:{labels:{color:r}}},scales:{x:{ticks:{color:l},grid:{color:a},border:{display:!1}},y:{ticks:{color:l},grid:{color:a},border:{display:!1}}}},polarOptions:{plugins:{legend:{labels:{color:r}}},scales:{r:{grid:{color:a}}}},radarOptions:{plugins:{legend:{labels:{color:r}}},scales:{r:{grid:{color:l}}}}}),s({barData:o,pieData:n,lineData:i,polarData:u,radarData:d})},[u]),(0,a.jsxs)("div",{className:"grid p-fluid",children:[(0,a.jsx)("div",{className:"col-12 xl:col-6",children:(0,a.jsxs)("div",{className:"card",children:[(0,a.jsx)("h5",{children:"Linear Chart"}),(0,a.jsx)(c,{type:"line",data:null==i?void 0:i.lineData,options:null==r?void 0:r.lineOptions})]})}),(0,a.jsx)("div",{className:"col-12 xl:col-6",children:(0,a.jsxs)("div",{className:"card",children:[(0,a.jsx)("h5",{children:"Bar Chart"}),(0,a.jsx)(c,{type:"bar",data:null==i?void 0:i.barData,options:null==r?void 0:r.barOptions})]})}),(0,a.jsx)("div",{className:"col-12 xl:col-6",children:(0,a.jsxs)("div",{className:"card flex flex-column align-items-center",children:[(0,a.jsx)("h5",{className:"text-left w-full",children:"Pie Chart"}),(0,a.jsx)(c,{type:"pie",data:null==i?void 0:i.pieData,options:null==r?void 0:r.pieOptions})]})}),(0,a.jsx)("div",{className:"col-12 xl:col-6",children:(0,a.jsxs)("div",{className:"card flex flex-column align-items-center",children:[(0,a.jsx)("h5",{className:"text-left w-full",children:"Doughnut Chart"}),(0,a.jsx)(c,{type:"doughnut",data:null==i?void 0:i.pieData,options:null==r?void 0:r.pieOptions})]})}),(0,a.jsx)("div",{className:"col-12 xl:col-6",children:(0,a.jsxs)("div",{className:"card flex flex-column align-items-center",children:[(0,a.jsx)("h5",{className:"text-left w-full",children:"Polar Area Chart"}),(0,a.jsx)(c,{type:"polarArea",data:null==i?void 0:i.polarData,options:null==r?void 0:r.polarOptions})]})}),(0,a.jsx)("div",{className:"col-12 xl:col-6",children:(0,a.jsxs)("div",{className:"card flex flex-column align-items-center",children:[(0,a.jsx)("h5",{className:"text-left w-full",children:"Radar Chart"}),(0,a.jsx)(c,{type:"radar",data:null==i?void 0:i.radarData,options:null==r?void 0:r.radarOptions})]})})]})}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=543)}),_N_E=e.O()}]);