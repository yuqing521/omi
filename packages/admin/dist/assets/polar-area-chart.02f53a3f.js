import{W as e,h as t,t as a,s as r,b as n}from"./vendor.3f489542.js";import"./admin-docs.bfe65179.js";import"./index.039482e5.js";import"./container.db7f9588.js";import"./index.esm.fc42bb18.js";import"./___vite-browser-external_commonjs-proxy.755037e0.js";var o=Object.defineProperty,i=Object.getOwnPropertyDescriptor;let s=class extends e{constructor(){super(...arguments),this.options={responsive:!0,legend:{position:"top"},title:{display:!0,text:"Omim Pie Chart"},animation:{animateScale:!0,animateRotate:!0}},this.data={labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderColor:"white",borderWidth:1}]},this.mdA="\n  ```html\n<o-polar-area id=\"myChart\" width=\"350\" height=\"350\"\n  data=\"{\n    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],\n    datasets: [{\n      label: '# of Votes',\n      data: [12, 19, 3, 5, 2, 3],\n      backgroundColor: [\n        'rgba(255,99,132,1)',\n        'rgba(54, 162, 235, 1)',\n        'rgba(255, 206, 86, 1)',\n        'rgba(75, 192, 192, 1)',\n        'rgba(153, 102, 255, 1)',\n        'rgba(255, 159, 64, 1)'\n      ],\n      borderColor: 'white',\n      borderWidth: 1\n    }]\n  }\"\n\n  options=\"{\n    responsive: true,\n    legend: {\n      position: 'top',\n    },\n    title: {\n      display: true,\n      text: 'Omim Pie Chart'\n    },\n    animation: {\n      animateScale: true,\n      animateRotate: true\n    }\n  }\">\n</o-polar-area>\n  ```\n  "}installed(){}render(){return t("code-demo-container",null,t("code-demo",{title:"极区图",describe:"极区图显示",code:this.mdA},t("div",{slot:"demo",class:a`px-3 py-5`},t("o-polar-area",{id:"myChart",width:"350",height:"350",data:this.data,options:this.options}))))}};s.css=[r.target],s=((e,t,a,r)=>{for(var n,s=r>1?void 0:r?i(t,a):t,d=e.length-1;d>=0;d--)(n=e[d])&&(s=(r?n(t,a,s):n(s))||s);return r&&s&&o(t,a,s),s})([n("polar-area-chart")],s);export{s as default};
