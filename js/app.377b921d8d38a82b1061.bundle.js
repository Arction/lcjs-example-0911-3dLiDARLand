(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,l)=>{const a=l(89),{lightningChart:i,PointSeriesTypes3D:s,PointStyle3D:o,ColorRGBA:n,PalettedFill:r,LUT:c,AxisTickStrategies:y,emptyLine:d,emptyFill:u,Themes:S}=a,h=i({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).Chart3D({theme:S[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("LiDAR Point Cloud");h.getDefaultAxisX().setTickStrategy(y.Numeric,(e=>e.setMajorTickStyle((e=>e.setLabelFillStyle(u))).setMinorTickStyle((e=>e.setLabelFillStyle(u))))).setStrokeStyle(d),h.getDefaultAxisY().setTickStrategy(y.Numeric,(e=>e.setMajorTickStyle((e=>e.setLabelFillStyle(u))).setMinorTickStyle((e=>e.setLabelFillStyle(u))))).setStrokeStyle(d).setInterval({start:-111,end:2500}),h.getDefaultAxisZ().setTickStrategy(y.Numeric,(e=>e.setMajorTickStyle((e=>e.setLabelFillStyle(u))).setMinorTickStyle((e=>e.setLabelFillStyle(u))))).setStrokeStyle(d);const w=h.addLegendBox();let k=0;(async e=>{const t=await fetch(new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"examples/assets/0911/NEWLAND.bin"),l=await t.blob(),a=await l.arrayBuffer();let i=0;const y=new Uint32Array(a.slice(i,i+4))[0];i+=4;const d=new Array(y).fill(0).map((e=>({}))),u=2*y,S=new Int16Array(a.slice(i,i+u));i+=u,S.forEach(((e,t)=>d[t].x=e));const m=2*y,L=new Int16Array(a.slice(i,i+m));i+=m,L.forEach(((e,t)=>d[t].y=e));const b=2*y,p=new Int16Array(a.slice(i,i+b));i+=b,p.forEach(((e,t)=>d[t].z=e));const T=h.addPointSeries({type:s.Pixelated,individualPointColorEnabled:!0}).add(d).setPointStyle(new o.Pixelated({fillStyle:new r({lookUpProperty:"y",lut:new c({units:"Elevation (m)",interpolate:!1,steps:[{value:-100,color:n(30,144,255)},{value:0,color:n(49,201,60)},{value:200,color:n(255,87,0)},{value:400,color:n(202,22,80)},{value:600,color:n(148,18,18)},{value:800,color:n(178,0,255)},{value:1e3,color:n(225,122,239)}]})}),size:1}));return w.add(T),k+=y,h.setTitle(`LiDAR Point Cloud | ${k} data points`),T})().then((e=>{e.setName("Badwater Basin")}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);