!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(window,function(){return function(t){function e(e){for(var n,r,o=e[0],a=e[1],s=0,l=[];s<o.length;s++)r=o[s],i[r]&&l.push(i[r][0]),i[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(c&&c(e);l.length;)l.shift()()}var n={},i={0:0};function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,r){n=i[t]=[e,r]});e.push(n[2]=o);var a,s=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=function(t){return r.p+""+({}[t]||t)+".js"}(t),a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}i[t]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,s.appendChild(c)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r.oe=function(t){throw console.error(t),t};var o=window.webpackJsonp=window.webpackJsonp||[],a=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var c=a;return r(r.s=2)}([function(t,e){t.exports={schemeCategory20:["#1f77b4","#aec7e8","#ff7f0e","#ffbb78","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5","#8c564b","#c49c94","#e377c2","#f7b6d2","#7f7f7f","#c7c7c7","#bcbd22","#dbdb8d","#17becf","#9edae5"]}},function(t,e,n){"use strict";n.r(e);var i=n(0),r=20,o=100,a=30,s=20;function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var l=function(){function t(e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.d3=e.d3,this.svg=e.svg,this.hidden=e.hidden,this.id=e.id,this.name=e.name,this.label=e.label,this.width=e.width,this.xLength=e.xLength,this.regions=e.regions,this.yPos=e.yPos||r+(this.id-1)*o,this.render(),this.x,this.xAxis,this.gX,this}return function(t,e,n){e&&c(t.prototype,e),n&&c(t,n)}(t,[{key:"render",value:function(){if(this.hidden)this.hiddenTrack();else{var t=this.d3;this.x=t.scaleLinear().domain([0,this.xLength]).range([0,this.width+1]),this.xAxis=t.axisBottom(this.x).ticks((this.width+2)/1700*10).tickSize(10),this.gX=this.svg.append("g").attr("class","axis axis-x-".concat(this.id)).call(this.xAxis).attr("transform","translate(0, ".concat(this.yPos,")")),this.svg.append("text").attr("x",0).attr("y",this.yPos+o-5).text(this.label||this.name).attr("font-family","sans-serif").attr("font-size","10px").attr("fill","#888"),this.regions&&this.addRegions(this.regions)}}},{key:"addRegions",value:function(t){var e=this,n=t.length;this.svg.select("g").append("g").attr("class",function(t){return"track"}).selectAll("rect").data(t).enter().append("rect").attr("class",function(t){return"region region-track-".concat(e.id," group-").concat(t.groupID," region-").concat(t.id)}).attr("x",function(t){return e.x(t.start)}).attr("y",function(t){return e._getRegionYPos(e.id,t.strand)}).attr("width",function(t){return e.x(t.end-t.start)}).attr("height",s).attr("stroke","#fffff").attr("fill",function(t){return i.schemeCategory20[t.groupID%n%20]}),this.regions=t}},{key:"hiddenTrack",value:function(){var t=this,e=this.svg.select("g").append("g").attr("class",function(t){return"hidden-track"});e.append("rect").attr("class",function(e){return"hidden-track track-".concat(t.id)}).attr("x",0).attr("y",function(e){return(t.id-1)*o}).attr("width",function(t){return 1e4}).attr("height",20).attr("stroke","#fffff").attr("fill",function(t){return"#aaa"}),e.append("text").attr("x",10).attr("y",this.yPos-2).text(this.label||this.name).attr("font-family","sans-serif").attr("font-size","10px").attr("fill","#222")}},{key:"rescaleAxis",value:function(){this.hidden||this.gX.call(this.xAxis.scale(this.d3.event.transform.rescaleX(this.x)))}},{key:"_getRegionYPos",value:function(t,e){return this.yPos+("-"===e?a+s:a)-r}}]),t}();function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var h="width: 26px; height: 23px;",d=function(){function t(e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=e.id,this.container=e.container,this.svg=e.svg,this.trackCount=e.trackCount,this.yPos=e.yPos||r+(this.id-1)*o,this.ctrls,this.isReference=e.isReference||!1,this.hidden,this.onMoveUp=e.onMoveUp,this.onMoveDown=e.onMoveDown,this.onSetReference=e.onSetReference,this.onHide=e.onHide,this.onShow=e.onShow,this.init(),this}return function(t,e,n){e&&u(t.prototype,e),n&&u(t,n)}(t,[{key:"init",value:function(){this.destroy(),this.render()}},{key:"render",value:function(){var t=this.container.querySelector(".mauve-viewer").getBoundingClientRect(),e=this.svg.getBoundingClientRect().top-t.top,n=this.node=document.createElement("div");n.setAttribute("class","track-ctrl ctrl-".concat(this.id)),n.style.top=e+this.yPos+5+"px",n.style.left="-35px",n.style.width="25px",n.style.height=o+"px",n.style.position="absolute",this._addMainButtons(),this.container.querySelector(".mauve-viewer").appendChild(n)}},{key:"_addMainButtons",value:function(){var t=this.ctrls=this._getButtons(),e=t.upBtn,n=t.downBtn,i=(t.hideBtn,t.refBtn);this.node.appendChild(e),this.node.appendChild(i),this.node.appendChild(n),this.isReference&&i.classList.add("active")}},{key:"_getButtons",value:function(){var t=document.createElement("button");t.title="Move this genome up",t.style=h,t.innerHTML="▲",t.disabled=1===this.id||!1,t.onclick=this.moveTrackUp.bind(this);var e=document.createElement("button");e.title="Hide this genome",e.style=h,e.innerHTML="−",e.onclick=this.hideTrack.bind(this);var n=document.createElement("button");n.title="Set reference genome",n.classList.add("ref-btn"),n.style=h,n.innerHTML="R",n.onclick=this.refTrack.bind(this);var i=document.createElement("button");return i.title="Move this genome down",i.style=h,i.innerHTML="▼",i.disabled=this.id===this.trackCount||!1,i.onclick=this.moveTrackDown.bind(this),{upBtn:t,downBtn:i,hideBtn:e,refBtn:n}}},{key:"_getShowButton",value:function(){var t=document.createElement("button");return t.title="Show this genome",t.classList.add("show-btn"),t.style=h,t.innerHTML="+",t.onclick=this.showTrack.bind(this),t}},{key:"moveTrackUp",value:function(){this._selectNewRef(this.id,this.id-1),this.onMoveUp(this.id)}},{key:"moveTrackDown",value:function(){this._selectNewRef(this.id,this.id+1),this.onMoveDown(this.id)}},{key:"hideTrack",value:function(){this.node.innerHTML="";var t=this._getShowButton();this.node.appendChild(t),this.hidden=!0,this.onHide(this.id)}},{key:"showTrack",value:function(){console.log("called show"),this.node.innerHTML="",this._addMainButtons(),this.hidden=!1,this.onShow(this.id)}},{key:"refTrack",value:function(){this.container.querySelectorAll(".ref-btn").forEach(function(t){t.classList.remove("active")}),this.ctrls.refBtn.classList.add("active"),this.onSetReference(this.id),this.isReference=!0}},{key:"_selectNewRef",value:function(t,e){var n,i=this.container.querySelector(".ctrl-".concat(t," .ref-btn")),r=this.container.querySelector(".ctrl-".concat(e," .ref-btn"));r.classList.contains("active")&&(r.classList.remove("active"),i.classList.add("active"),n=!0),i.classList.contains("active")&&!n&&(i.classList.remove("active"),r.classList.add("active"))}},{key:"destroy",value:function(){var t=this.container.querySelector(".ctrl-".concat(this.id));t&&t.remove()}}]),t}();function f(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var v=function(){function t(e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.d3=e.d3,this.svg=e.svg,this.data=e.data,this.x=e.scale,this.render(this.data),this}return function(t,e,n){e&&f(t.prototype,e),n&&f(t,n)}(t,[{key:"render",value:function(t){var e=this,n=this.x,o=[];return t.forEach(function(t){var i=[];t.forEach(function(t){t.hidden||i.push({start:t.start,end:t.end,x:n(t.start)+(n(t.end)-n(t.start))/2,y:r+e._getRegionYPos(t.lcb_idx,t.strand)+s/2})}),o.push(i)}),this.lineFunction=this.d3.line().x(function(t){return t.x}).y(function(t){return t.y}),o.forEach(function(t,n){e.svg.datum(t).insert("path",":first-child").attr("class","lcb-line").attr("d",e.lineFunction(t)).attr("stroke-width",1).attr("stroke",i.schemeCategory20[n%20]).attr("fill","none")}),o}},{key:"scale",value:function(t){var e=this;this.svg.selectAll("path.lcb-line").attr("d",function(n){var i=n.map(function(e){return{start:e.start,end:e.end,x:t(e.start)+(t(e.end)-t(e.start))/2,y:e.y}});return e.lineFunction(i)})}},{key:"_getRegionYPos",value:function(t,e){return("-"===e?a+s:a)+(t-1)*o}}]),t}();function p(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.d(e,"default",function(){return y});var y=function(){function t(e){var n=e.d3,i=e.ele,r=e.data,o=e.labels;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ele=i,this.data=r,this.d3=n,this.labels=o,this.hiddenTracks=[],this.init()}return function(t,e,n){e&&g(t.prototype,e),n&&g(t,n)}(t,[{key:"init",value:function(){var t=this.getGenomeRegions(this.data),e=t.regions;t.regCount,t.lcbCount;this.genomeRegions=e,this.trackCount=Object.keys(this.genomeRegions).length,this.setReference(1,!0),this.ele.innerHTML='\n    <div class="mauve-viewer" style="position: relative;">\n        <div class="mv-header" style="text-align: left;">\n            <h4 class="title">Mauve Viewer (Alpha)</h4>\n            <div class="help-text">\n                <b>Tips:</b> click and drag to pan; use ctrl-scroll or double click to zoom.\n            </div><br>\n            <button class="reset-btn">Reset</button><br>\n        </div>\n        <br>\n        <div class="mv-chart">\n            <svg></svg>\n\n            <div style="position: relative;">\n                <div class="mv-context-menu" style="display: none;">\n                    <ul>\n                        <li id="nucleotide-align">Align by nucleotide</li>\n                        <li>Another item</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>',this.render(),this.rendered=!0}},{key:"render",value:function(){var t=this,e=this.d3,n=this.data,i=this.genomeRegions,c=this.trackCount,u=Math.max.apply(Math,p([].concat.apply([],n).map(function(t){return t.end})))+100;e.select(this.ele.querySelector("svg")).remove();var h=e.select(this.ele.querySelector(".mv-chart")).append("svg").attr("width",1e3).attr("height",165*c),f=+h.attr("width"),g=+h.attr("height"),y=e.zoom().scaleExtent([1,150]).translateExtent([[-2e3,0],[f+90,g+100]]).on("zoom",function(){for(var t=e.event.sourceEvent,n=e.event.transform.rescaleX(k[0]),i=0;i<w.length;i++)w[i].rescaleAxis();t&&"wheel"!==t.type&&"click"!==t.type?"mousemove"===e.event.sourceEvent.type&&h.selectAll(".region").attr("x",function(t){return n(t.start)}):h.selectAll(".region").attr("x",function(t){return n(t.start)}).attr("width",function(t){return n(t.end)-n(t.start)});L.scale(n),h.selectAll(".region").on("mousemove",null).on("mouseover",null).on("mouseenter",null).on("mouseleave",null).on("mouseout",null),B(n)}).filter(function(){return e.event.ctrlKey||"mousedown"===e.event.type||"dblclick"==e.event.type});h.call(y),e.select(this.ele.querySelector(".reset-btn")).on("click",function(){y.transform(h,e.zoomIdentity)});for(var m=[],b=[],k=[],w=[],x=r,T=1;T<=c;T++){var _=this.hiddenTracks.includes(T);x+=1===T?0:_?35:o;var E=i[T][0].name,A=this.labels?this.labels[E]:"",R=new l({d3:e,yPos:x,svg:h,id:T,name:E,label:A,width:f,xLength:u,hidden:_,regions:i[T]});m.push(R.xAxis),b.push(R.gX),k.push(R.x),w.push(R),this.rendered||new d({id:T,yPos:x,height:g,container:this.ele,svg:this.ele.querySelector("svg"),trackCount:this.trackCount,isReference:1===T,onMoveUp:function(e){t.moveTrackUp(e)},onMoveDown:function(e){t.moveTrackDown(e)},onSetReference:function(e){t.setReference(e)},onHide:function(e){t.hideTrack(e)},onShow:function(e){t.showTrack(e)}})}for(var S=k[0],M=[],C=1;C<=c;C++){var P=O(C,"-"),j=h.append("line").attr("class","hover-line").style("stroke","#222").attr("y1",r+P-30).attr("y2",r+P+30);M.push(j)}B(S);var L=new v({scale:S,data:n,d3:e,svg:h});function B(t){var n=t,i=M;h.selectAll(".region").on("mousemove",function(t){var r=t.groupID,o=e.mouse(this)[0],a=t.lcb_idx,s=t.strand,c=o-n(t.start);i[a-1].attr("x1",o).attr("x2",o),h.selectAll(".group-".concat(r)).each(function(t){var e;t.lcb_idx!==a&&(e=s!==t.strand?n(t.end)-c:n(t.start)+c,i[t.lcb_idx-1].attr("x1",e).attr("x2",e))})}),h.selectAll(".region").on("mouseover",function(t){for(var e=0;e<i.length;e++)i[e].attr("opacity",1)}).on("mouseout",function(t){for(var e=0;e<i.length;e++)i[e].attr("opacity",0)})}function O(t,e){return("-"===e?a+s:a)+(t-1)*o}}},{key:"moveTrackUp",value:function(t){var e=t-1;e<1||(this.swapTrack(t,e),this.swapBackbones(t,e),this.render())}},{key:"moveTrackDown",value:function(t){var e=t+1;e>this.trackCount||(this.swapTrack(t,e),this.swapBackbones(t,e),this.render())}},{key:"swapTrack",value:function(t,e){var n=this.genomeRegions[e];this.genomeRegions[e]=this.genomeRegions[t],this.genomeRegions[t]=n}},{key:"swapBackbones",value:function(t,e){this.data.forEach(function(n){n.forEach(function(n){n.lcb_idx===t?n.lcb_idx=e:n.lcb_idx===e&&(n.lcb_idx=t)}),n.sort(function(t,e){return t.lcb_idx-e.lcb_idx})})}},{key:"setReference",value:function(t,e){this.data.forEach(function(e){var n=!1;e.forEach(function(e){e.lcb_idx===t&&"+"!==e.strand&&(e.strand="+",n=!0)}),n&&e.forEach(function(e){e.lcb_idx!==t&&(e.strand="-"===e.strand?"+":"-")})}),e||this.render()}},{key:"hideTrack",value:function(t){console.log("called hide track",t),this.data.forEach(function(e){e.forEach(function(e){e.lcb_idx==t&&(e.hidden=!0)})}),this.hiddenTracks.push(t),this.render()}},{key:"showTrack",value:function(t){console.log("called show track",t),console.log("this.hiddentTracks",this.hiddenTracks),this.data.forEach(function(e){e.forEach(function(e){e.lcb_idx==t&&delete e.hidden})}),this.hiddenTracks.splice(this.hiddenTracks.indexOf(t)),console.log("this.hiddentTracks",this.hiddenTracks),this.render()}},{key:"getSharedLCBs",value:function(t){var e=Math.max.apply(Math,p(t.map(function(t){return t.length})));return t.filter(function(t){return t.length===e})}},{key:"getGenomeRegions",value:function(t){var e={},n=0,i=0;return t.forEach(function(t,r){i+=1,t.forEach(function(t){n+=1,t.id=n,t.groupID=r;var i=t.lcb_idx;i in e?e[i].push(t):e[i]=[t]})}),{regions:e,regionCount:n,lcbCount:i}}}]),t}()},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";n.r(e);var i=n(1);function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a="https://p3.theseed.org/services/data_api/genome/";Promise.all([n.e(2).then(n.bind(null,6)),n.e(3).then(n.t.bind(null,5,7))]).then(function(t){var e=o(t,2),n=e[0],s=e[1];s.get("more-brucella.json").then(function(t){var e,o=t.data,c=document.getElementById("chart"),l=r(o.map(function(t){return t.map(function(t){return e=t.name.split(".").pop(),t.name.replace(".".concat(e),"")})})).filter(function(t,e,n){return n.indexOf(t)===e}),u="".concat(a,"?in(genome_id,(").concat(l.join(","),"))&select(genome_id,genome_name)");s.get(u).then(function(t){var r={};t.data.forEach(function(t){r["".concat(t.genome_id,".").concat(e)]=t.genome_name}),new i.default({ele:c,data:o,d3:n,labels:r})})}).catch(function(t){alert("Could not fetch alignment json: ".concat(t.message))})}).catch(function(t){return"An error occurred while loading the component"})}])});
//# sourceMappingURL=app.js.map