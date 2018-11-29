!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.MauveViewer=e():t.MauveViewer=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=15)}([,,function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>'},function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>'},function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></svg>'},function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></svg>'},function(t,e){t.exports='<div class=mauve-viewer style=position:relative> <div class=mv-header style=text-align:left> <h4 class=title>Mauve Viewer <sup>(beta)</sup></h4> <div class=help-text> <b>Tips:</b> click and drag to pan; use ctrl-scroll to zoom. </div><br> <div class="options pull-left"> <button class=reset-btn>Reset</button> <div class=dropdown> <button class="opts-btn dd-btn">Options <i class=caret-down></i></button> <div class=dd-content> <div> <label> <input type=checkbox name=showGenomeID checked=checked /> Show Genome ID </label> </div> <div> <label> <input type=checkbox name=showLCBLines checked=checked /> LCB Connecting Lines </label> </div> <div> <label> <input type=checkbox name=showFeatures checked=checked /> Show Features (zoomed) </label> </div> <div> <label> <input type=checkbox name=showContigs checked=checked /> Show Contigs </label> </div> </div> </div> <div class=spacer></div> <button class="pan pan-left"></button> <button class="zoom zoom-in"></button> <button class="zoom zoom-out"></button> <button class="pan pan-right"></button> </div> <table class="cursor-info pull-right" style=visibility:hidden> <thead> <tr> <th class=align-right>Position</th> <th class=align-right>LCB Length</th> <th class=align-right>Contig</th> <th class=align-right>Contig Length</th> </tr> </thead> <tbody> <tr> <td class="nt-pos align-right">-</td> <td class="lcb-length align-right">-</td> <td class="contig-id align-right">-</td> <td class="contig-length align-right">-</td> </tr> </tbody> </table> <br> </div> <br> <div class=mv-chart> <svg></svg> <div style=position:relative> <div class=mv-context-menu style=display:none> <ul> <li id=nucleotide-align>Align by nucleotide</li> <li>Another item</li> </ul> </div> </div> </div> </div>'},function(t,e){var n=["rgb(31, 119, 180)","rgb(174, 199, 232)","rgb(255, 127, 14)","rgb(255, 187, 120)","rgb(44, 160, 44)","rgb(152, 223, 138)","rgb(214, 39, 40)","rgb(255, 152, 150)","rgb(148, 103, 189)","rgb(197, 176, 213)","rgb(140, 86, 75)","rgb(196, 156, 148)","rgb(227, 119, 194)","rgb(247, 182, 210)","rgb(127, 127, 127)","rgb(199, 199, 199)","rgb(188, 189, 34)","rgb(219, 219, 141)","rgb(23, 190, 207)","rgb(158, 218, 229)"];t.exports={schemeCategory20:n}},function(t,e,n){"use strict";n.r(e);var i=20,r=140;function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var o=function(){function t(e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.d3=e.d3,this.svg=e.svg,this.hidden=e.hidden,this.id=e.id,this.name=e.name,this.label=e.label,this.width=e.width,this.xLength=e.xLength,this.yPos=e.yPos,this.regions=e.regions,this.features=e.features,this.contigs=e.contigs,this.x,this.xAxis,this.gX,this.track,this.render(),this._showFeatures=!0,this}var e,n,o;return e=t,(n=[{key:"render",value:function(){var t=this;if(this.hidden)this.hiddenTrack();else{var e=this.d3,n=this.svg;this.x=e.scaleLinear().domain([0,this.xLength]).range([1,this.width+1]),this.xAxis=e.axisBottom(this.x).ticks(5).tickSize(10).tickFormat(e.format("d"));var i=this.track=n.append("g").attr("class",function(e){return"track id-".concat(t.id)});i.append("g").attr("class","regions"),i.append("g").attr("class","contigs"),this.gX=i.append("g").attr("class","axis axis-x-".concat(this.id)).call(this.xAxis).attr("transform","translate(0, ".concat(this.yPos,")")),this.setLabel(this.label||this.name),this.regions&&this.addRegions(this.regions),this.contigs&&this._addContigs(this.contigs)}}},{key:"addRegions",value:function(t){var e=this;this.track.select(".regions").selectAll("rect").data(t).enter().append("rect").attr("class",function(t){return"region track-id-".concat(e.id," group-").concat(t.groupID," id-").concat(t.id)}).attr("x",function(t){return e.x(t.start)}).attr("y",function(t){return e._getRegionYPos(t.strand)}).attr("width",function(t){return e.x(t.end-t.start+1)}).attr("height",22).attr("stroke","#fffff").attr("fill",function(t){return t.color}),this.regions=t}},{key:"_updateFeatures",value:function(t,e){var n=this;if(this.features){this._rmFeatureHoverEvent();var i=this.features.filter(function(n){return n.xStart<t&&n.xEnd>=t||n.xStart<e&&n.xEnd>=e||n.xStart>=t&&n.xEnd<=e}),r=this.track.selectAll(".feature").data(i);r.exit().remove(),r=r.enter().append("rect").attr("class",function(t){return"feature"}).merge(r).attr("x",function(t){return n.x(t.xStart)}).attr("y",function(t){return n._getFeatureYPos(t.strand)+44+5}).attr("width",function(t){return n.x(t.end-t.start+1)}).attr("height",10).attr("stroke","#000").attr("fill",function(t){return"#777"}).attr("opacity",.4),this._addFeatureHoverEvent(),this.svg.selectAll(".lcb-line").attr("opacity",0)}}},{key:"_rmFeatures",value:function(){this.svg.selectAll(".feature").remove(),this._rmFeatureHoverEvent(),this.svg.selectAll(".lcb-line").attr("opacity",1)}},{key:"_addFeatureHoverEvent",value:function(){var t=this.d3,e=this.svg,n=t.select(".mauve-viewer").append("div").attr("class","tooltip").style("position","absolute").style("opacity",0);this.svg.selectAll(".feature").on("mouseover",function(i){n.transition().style("opacity",.9);var r=e.node().getBoundingClientRect(),s=t.event.pageX-r.left,o=t.event.pageY;n.html("<div><b>".concat(i.patric_id,"</b> | <b>").concat(i.refseq_locus_tag,"</b> | <b>").concat(i.gene,"</b></div>\n                     <div>").concat(i.product,"</div>\n                     <div>").concat(i.feature_type," [").concat(i.start,", ").concat(i.end,']</div>\n                     <div class="help-text">click for more</div>')).style("left",s+25+"px").style("top",o-10+"px"),t.select(this).attr("opacity",1)}).on("mouseleave",function(e){t.select(this).attr("opacity",.4),n.style("opacity",0)})}},{key:"_rmFeatureHoverEvent",value:function(){this.svg.selectAll(".feature").on("mouseover",null).on("mouseleave",null),this.d3.selectAll(".tooltip").remove()}},{key:"_addContigs",value:function(t){var e=this;this.track.select(".contigs").selectAll("line.contig").data(t).enter().append("line").attr("class","contig").attr("stroke","#b50707").attr("stroke-width",2).attr("opacity",.65).attr("y1",i+this.yPos).attr("y2",i+this.yPos+100).attr("x1",function(t){return e.x(t.xEnd+1)}).attr("x2",function(t){return e.x(t.xEnd+1)})}},{key:"_addGaps",value:function(t){var e=this;this.track.append("g").attr("class","gaps");t.forEach(function(t,n){t.gaps.forEach(function(e){e.lcb_idx=t.lcb_idx,e.end,t.end,e.s="+"==t.strand?e.start:t.end-e.start,e.e="+"==t.strand?e.end:t.end-e.end,e.start=t.start+e.s,e.end=t.start+e.e}),e.track.selectAll("rect.gap"+n).data(t.gaps).enter().append("rect").attr("class",function(t){return"region gap"}).attr("x",function(t){return e.x(t.start)}).attr("y",function(n){return e._getRegionYPos(t.strand)}).attr("width",function(t){return e.x(t.e-t.s+1)}).attr("height",22).attr("fill",function(t){return"#666"})})}},{key:"hiddenTrack",value:function(){var t=this,e=this.track.append("g").attr("class",function(t){return"hidden-track"});e.append("rect").attr("class",function(e){return"hidden-track track-".concat(t.id)}).attr("x",0).attr("y",function(e){return(t.id-1)*r}).attr("width",function(t){return 1e4}).attr("height",20).attr("stroke","#fffff").attr("fill",function(t){return"#aaa"}),e.append("text").attr("x",10).attr("y",this.yPos-2).text(this.label||this.name).attr("font-family","sans-serif").attr("font-size","10px").attr("fill","#222")}},{key:"rescaleAxis",value:function(){if(!this.hidden){var t=this.d3.event.sourceEvent,e=this.d3.event.transform.rescaleX(this.x),n=e.domain()[0],i=e.domain()[1];i-n<=1e5&&this._showFeatures?this._updateFeatures(n,i):this._rmFeatures(),this.gX.call(this.xAxis.scale(e)),t&&"wheel"!==t.type&&"click"!==t.type?"mousemove"===this.d3.event.sourceEvent.type&&this._panRegions(e):this._scaleRegions(e),this.zoomScale=e}}},{key:"showFeatures",value:function(){this._showFeatures=!0}},{key:"hideFeatures",value:function(){this._showFeatures=!1}},{key:"showContigs",value:function(){this._addContigs(this.contigs)}},{key:"hideContigs",value:function(){this.track.selectAll(".contig").remove()}},{key:"_scaleRegions",value:function(t){this.track.selectAll(".region").attr("x",function(e){return t(e.start)}).attr("width",function(e){return t(e.end+1)-t(e.start)}),this.track.selectAll(".feature").attr("x",function(e){return t(e.xStart)}).attr("width",function(e){return t(e.end+1)-t(e.start)}),this.track.selectAll(".contig").attr("x1",function(e){return t(e.xEnd+1)}).attr("x2",function(e){return t(e.xEnd+1)})}},{key:"_panRegions",value:function(t){this.track.selectAll(".region").attr("x",function(e){return t(e.start)}),this.track.selectAll(".feature").attr("x",function(e){return t(e.xStart)}).attr("width",function(e){return t(e.end+1)-t(e.start)}),this.track.selectAll(".contig").attr("x1",function(e){return t(e.xEnd+1)}).attr("x2",function(e){return t(e.xEnd+1)})}},{key:"_getRegionYPos",value:function(t){return this.yPos+("-"===t?52:30)}},{key:"_getFeatureYPos",value:function(t){return this.yPos+("-"===t?45:30)}},{key:"shift",value:function(t,e,n){var i=this,r=this.d3,s=this.getZoomScale(),o=s.invert(t),a=[s.domain()[0],s.domain()[1]],c=[s.domain()[0]-o,s.domain()[1]-o];this.gX.transition().tween("axis",function(t){var e=r.interpolate(a,c);return function(t){i.x.domain(e(t)),i.gX.call(i.xAxis),i.zoomScale=i.x,n()}})}},{key:"reset",value:function(){this.x=this.d3.scaleLinear().domain([0,this.xLength]).range([1,this.width+1]),this.gX.call(this.xAxis)}},{key:"getScale",value:function(){return this.x}},{key:"getZoomScale",value:function(){return this.zoomScale?this.zoomScale:this.x}},{key:"setLabel",value:function(t){this.track.selectAll(".track-label").remove(),this.track.append("text").attr("class","track-label").attr("x",0).attr("y",this.yPos-3).text(t).attr("font-family","sans-serif").attr("font-size","10px").attr("fill","#888")}}])&&s(e.prototype,n),o&&s(e,o),t}();function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var c="width: 26px; height: 23px;",l=function(){function t(e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=e.id,this.container=e.container,this.svg=e.svg,this.trackCount=e.trackCount,this.yPos=e.yPos||i+(this.id-1)*r,this.ctrls,this.isReference=e.isReference||!1,this.hidden,this.onMoveUp=e.onMoveUp,this.onMoveDown=e.onMoveDown,this.onSetReference=e.onSetReference,this.onHide=e.onHide,this.onShow=e.onShow,this.init(),this}var e,n,s;return e=t,(n=[{key:"init",value:function(){this.destroy(),this.render()}},{key:"render",value:function(){var t=this.container.querySelector(".mauve-viewer").getBoundingClientRect(),e=this.svg.getBoundingClientRect().top-t.top,n=this.node=document.createElement("div");n.setAttribute("class","track-ctrl ctrl-".concat(this.id)),n.style.top=e+this.yPos+6+"px",n.style.left="-35px",n.style.width="25px",n.style.height=r+"px",n.style.position="absolute",this._addMainButtons(),this.container.querySelector(".mauve-viewer").appendChild(n)}},{key:"_addMainButtons",value:function(){var t=this.ctrls=this._getButtons(),e=t.upBtn,n=t.downBtn,i=(t.hideBtn,t.refBtn);this.node.appendChild(e),this.node.appendChild(i),this.node.appendChild(n),this.isReference&&i.classList.add("active")}},{key:"_getButtons",value:function(){var t=document.createElement("button");t.title="Move this genome up",t.style=c,t.innerHTML="▲",t.disabled=1===this.id||!1,t.onclick=this.moveTrackUp.bind(this);var e=document.createElement("button");e.title="Hide this genome",e.style=c,e.innerHTML="−",e.onclick=this.hideTrack.bind(this);var n=document.createElement("button");n.title="Set reference genome",n.classList.add("ref-btn"),n.style=c,n.innerHTML="R",n.onclick=this.refTrack.bind(this);var i=document.createElement("button");return i.title="Move this genome down",i.style=c,i.innerHTML="▼",i.disabled=this.id===this.trackCount||!1,i.onclick=this.moveTrackDown.bind(this),{upBtn:t,downBtn:i,hideBtn:e,refBtn:n}}},{key:"_getShowButton",value:function(){var t=document.createElement("button");return t.title="Show this genome",t.classList.add("show-btn"),t.style=c,t.innerHTML="+",t.onclick=this.showTrack.bind(this),t}},{key:"moveTrackUp",value:function(){this._selectNewRef(this.id,this.id-1),this.onMoveUp(this.id)}},{key:"moveTrackDown",value:function(){this._selectNewRef(this.id,this.id+1),this.onMoveDown(this.id)}},{key:"hideTrack",value:function(){this.node.innerHTML="";var t=this._getShowButton();this.node.appendChild(t),this.hidden=!0,this.onHide(this.id)}},{key:"showTrack",value:function(){this.node.innerHTML="",this._addMainButtons(),this.hidden=!1,this.onShow(this.id)}},{key:"refTrack",value:function(){this.container.querySelectorAll(".ref-btn").forEach(function(t){t.classList.remove("active")}),this.ctrls.refBtn.classList.add("active"),this.onSetReference(this.id),this.isReference=!0}},{key:"_selectNewRef",value:function(t,e){var n,i=this.container.querySelector(".ctrl-".concat(t," .ref-btn")),r=this.container.querySelector(".ctrl-".concat(e," .ref-btn"));r.classList.contains("active")&&(r.classList.remove("active"),i.classList.add("active"),n=!0),i.classList.contains("active")&&!n&&(i.classList.remove("active"),r.classList.add("active"))}},{key:"destroy",value:function(){var t=this.container.querySelector(".ctrl-".concat(this.id));t&&t.remove()}}])&&a(e.prototype,n),s&&a(e,s),t}();function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var u=function(){function t(e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e.container,this.d3=e.d3,this.svg=e.svg,this.trackCount=e.trackCount,this.onclick=e.onclick,this.tracks=e.tracks,this.zoom=e.zoom,this.hoverXPos,this.hoverTrackID,this.hoverLCBID,this.scales={},this.relativeXs={},this.hoverLines=[],this.cursorInfoNode=this.container.querySelector("table.cursor-info"),this.lengthNode=this.container.querySelector(".lcb-length"),this.ntPosNode=this.container.querySelector(".nt-pos"),this.contigIDNode=this.container.querySelector(".contig-id"),this.contigLengthNode=this.container.querySelector(".contig-length"),this.render(),this}var e,n,s;return e=t,(n=[{key:"render",value:function(){for(var t=this,e=(this.d3,1);e<=this.trackCount;e++){var n=this._getRegionYPos(e,"-"),r=this.svg.append("g").attr("class","cursor");r.append("rect").attr("class","hover-box hover-box-".concat(e)).attr("y",i+n-30).attr("x",-11).attr("width",10).attr("height",60).attr("fill","none").attr("stroke","#000").style("pointer-events","none");var s=r.append("line").attr("class","cursor-line").style("stroke","#222").attr("y1",i+n-30).attr("y2",i+n+30).attr("x1",-11).attr("x2",-11);this.hoverLines.push(s)}this.resetHover(),this.svg.on("click",function(e){t.onclick({event:e,trackID:t.hoverTrackID,lcbID:t.hoverLCBID,xPos:t.hoverXPos,relativeXs:t.relativeXs,scales:t.scales})})}},{key:"resetHover",value:function(){var t=this.svg,e=this.d3,n=this.hoverLines;t.selectAll(".track").on("mouseover",null).on("mousemove",null).on("mouseout",null);var i=this;t.selectAll(".track").on("mouseover",function(){e.selectAll(".cursor-line").attr("opacity",1),e.selectAll(".hover-box").attr("opacity",1)}).on("mousemove",function(){var r=e.event.clientX,s=e.event.clientY,o=document.elementFromPoint(r,s),a=e.select(o).data()[0];if(o)if("rect"===o.tagName&&o.classList.contains("region")){var c=e.mouse(this)[0],l=i.hoverTrackID=a.lcb_idx,h=i.tracks[l-1],u=(a.strand,h.getZoomScale());c=u(Math.round(u.invert(c))),i.hoverXPos=c,i.relativeXs[l-1]=0,i.scales[l-1]=u;u(a.start);n[l-1].attr("class","cursor-line").attr("x1",c).attr("x2",c),t.select(".hover-box-".concat(l)).attr("x",c-5);var d=i.hoverLCBID=a.groupID;t.selectAll(".lcb-line.id-".concat(d)).attr("stroke-width",5).raise(),t.selectAll(".group-".concat(d)).each(function(t){e.select(this).attr("stroke","#222").attr("stroke-width",2).raise()});var f=Math.round(u.invert(c));i._setLCBInfo(l,f,a.start,a.end)}else{if(o.classList.contains("cursor-line")||o.classList.contains("hover-box"))return;e.selectAll(".hover-box").attr("opacity",0);for(var v=0;v<n.length;v++)n[v].attr("opacity",0)}}).on("mouseout",function(n){e.event.relatedTarget&&e.event.relatedTarget.classList.contains("cursor-line")||(e.selectAll(".cursor-line").attr("opacity",0).attr("x1",-2).attr("x2",-2),e.selectAll(".hover-box").attr("opacity",0).attr("x",-11),t.selectAll(".region").attr("stroke",null),t.selectAll(".lcb-line").attr("stroke-width",1),i._clearLCBInfo())})}},{key:"_setLCBInfo",value:function(t,e,n,i){var r=this.tracks[t-1].contigs;if(r){var s=r.filter(function(t){return e>=t.xStart&&e<=t.xEnd})[0];this.cursorInfoNode.style.visibility="visible",this.lengthNode.innerHTML="".concat(i-n+1),this.ntPosNode.innerHTML="".concat(e),this.contigIDNode.innerHTML=s.accession,this.contigLengthNode.innerHTML=s.length}}},{key:"_clearLCBInfo",value:function(){this.cursorInfoNode.style.visibility="hidden",this.lengthNode.innerHTML="-",this.ntPosNode.innerHTML="-",this.contigIDNode.innerHTML="-",this.contigLengthNode.innerHTML="-"}},{key:"_getRegionYPos",value:function(t,e){return("-"===e?52:30)+(t-1)*r}}])&&h(e.prototype,n),s&&h(e,s),t}();function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var f=function(){function t(e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.d3=e.d3,this.svg=e.svg,this.data=e.data,this.tracks=e.tracks,this.render(this.data),this}var e,n,s;return e=t,(n=[{key:"render",value:function(t){var e=this,n=this.tracks,r=[];t.forEach(function(t){var s=[];t.forEach(function(r,o){if(!r.hidden){var a=n[r.lcb_idx-1].getZoomScale(),c=a(r.start)+(a(r.end)-a(r.start))/2;if(1==r.lcb_idx)return s.push({color:r.color,lcb_idx:r.lcb_idx,start:r.start,end:r.end,x:c,y:i+e._getRegionYPos(r.lcb_idx,r.strand)+11}),void s.push({color:r.color,lcb_idx:r.lcb_idx,start:r.start,end:r.end,x:c,y:i+e._getRegionYPos(r.lcb_idx,r.strand)+22+10});if(r.lcb_idx==e.tracks.length)return s.push({color:r.color,lcb_idx:r.lcb_idx,start:r.start,end:r.end,x:c,y:i+e._getRegionYPos(r.lcb_idx,r.strand)-22-("-"===r.strand?10:0)}),void s.push({color:r.color,lcb_idx:r.lcb_idx,start:r.start,end:r.end,x:c,y:i+e._getRegionYPos(r.lcb_idx,r.strand)+11});s.push({color:r.color,lcb_idx:r.lcb_idx,start:r.start,end:r.end,x:c,y:i+e._getRegionYPos(r.lcb_idx,r.strand)-22-("-"===r.strand?10:0)}),s.push({color:r.color,lcb_idx:r.lcb_idx,start:r.start,end:r.end,x:c,y:i+e._getRegionYPos(r.lcb_idx,r.strand)+11}),o!=t.length-1&&s.push({color:r.color,lcb_idx:r.lcb_idx,start:r.start,end:r.end,x:c,y:i+e._getRegionYPos(r.lcb_idx,r.strand)+22+10+("+"===r.strand?10:0)})}}),r.push(s)}),this.lineFunction=this.d3.line().x(function(t){return t.x}).y(function(t){return t.y});var s=this.svg.insert("g",":first-child").attr("class","lcb-lines");return r.forEach(function(t,n){s.datum(t).append("path").attr("class","lcb-line id-".concat(n)).attr("d",e.lineFunction(t)).attr("stroke-width",1).attr("stroke",function(t){return t[0].color}).attr("fill","none")}),r}},{key:"scale",value:function(t){var e=this;this.svg.selectAll("path.lcb-line").attr("d",function(t){var n=t.map(function(t){var n=e.tracks[t.lcb_idx-1].getZoomScale();return{start:t.start,end:t.end,x:n(t.start)+(n(t.end)-n(t.start))/2,y:t.y}});return e.lineFunction(n)})}},{key:"getLineFunction",value:function(){return this.lineFunction}},{key:"_getRegionYPos",value:function(t,e){return("-"===e?52:30)+(t-1)*r}},{key:"hide",value:function(){this.svg.selectAll("path.lcb-line").attr("opacity",0)}},{key:"show",value:function(){this.svg.selectAll("path.lcb-line").attr("opacity",1)}}])&&d(e.prototype,n),s&&d(e,s),t}(),v=n(2),g=n.n(v),p=n(3),b=n.n(p),y=n(4),k=n.n(y),m=n(5),x=n.n(m);function w(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var _=function(){function t(e){var n=e.ele,i=e.d3,r=e.zoom,s=e.tracks,o=e.backbone,a=e.getLabel;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ele=n,this.d3=i,this.tracks=s,this.backbone=o,this.getLabel=a,this.zoom=r,this.setSVGs(),this.init(),this}var e,n,i;return e=t,(n=[{key:"setSVGs",value:function(){var t=this.ele;t.querySelector(".pan-left").innerHTML=g.a,t.querySelector(".pan-right").innerHTML=b.a,t.querySelector(".zoom-in").innerHTML=k.a,t.querySelector(".zoom-out").innerHTML=x.a}},{key:"init",value:function(){var t=this,e=this.ele,n=e.querySelector(".opts-btn"),i=e.querySelector(".dropdown");n&&(n.onclick=function(){e.querySelector(".dd-content").classList.toggle("show")},document.onclick=function(t){if(!i.contains(t.target)&&!t.target.matches(".dd-btn")){var n=e.getElementsByClassName("dd-content");Array.from(n).forEach(function(t){t.classList.remove("show")})}},i.querySelector("[name=showGenomeID]").onclick=function(){this.checked?t.tracks.forEach(function(e){var n=e.name,i=t.getLabel(n);e.setLabel(i)}):t.tracks.forEach(function(t){var e=t.label,n=e.slice(0,e.lastIndexOf("[")-1);t.setLabel(n)})},i.querySelector("[name=showLCBLines]").onclick=function(){this.checked?t.backbone.show():t.backbone.hide()},i.querySelector("[name=showFeatures]").onclick=function(){this.checked?t.tracks.forEach(function(t){return t.showFeatures()}):t.tracks.forEach(function(t){return t.hideFeatures()})},i.querySelector("[name=showContigs]").onclick=function(){if(this.checked){t.tracks.forEach(function(t){return t.showContigs()});var n=e.querySelector("svg");t.zoom.transform(t.d3.select(n),t.d3.zoomTransform(n))}else t.tracks.forEach(function(t){return t.hideContigs()})})}}])&&w(e.prototype,n),i&&w(e,i),t}(),L=n(6),S=n.n(L),T=n(7);function C(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function E(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.d(e,"default",function(){return M});var M=function(){function t(e){var n=e.d3,i=e.ele,r=e.lcbs,s=e.labels,o=e.features,a=e.contigs;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.d3=n,this.ele=i,this.data=r,this.features=o,this.contigs=a,this.labels=s,this.svg,this.tracks=[],this.trackCount,this.hiddenTracks=[],this.backbone,this.cursor,this.zoom,this.init()}var e,n,s;return e=t,(n=[{key:"init",value:function(){var t=this.getGenomeRegions(this.data).regions;this.genomeRegions=t,this.trackCount=Object.keys(this.genomeRegions).length,this.setReference(1,!0),this.ele.innerHTML=S.a,this.render(),this.rendered=!0,new _({ele:this.ele,tracks:this.tracks,backbone:this.backbone,getLabel:this.getLabel,zoom:this.zoom,d3:this.d3})}},{key:"render",value:function(){var t=this,e=this.d3,n=this.data,s=this.genomeRegions,a=this.trackCount,c=Math.max.apply(Math,C([].concat.apply([],n).map(function(t){return t.end})))+100;e.select(this.ele.querySelector(".mv-chart svg")).remove();var h=this.svg=e.select(this.ele.querySelector(".mv-chart")).append("svg").attr("width",1e3).attr("height",165*a),d=+h.attr("width"),v=+h.attr("height"),g=this.zoom=e.zoom().scaleExtent([1,c/10]).translateExtent([[-d,0],[2*d,0]]).on("zoom",function(){for(var t=0;t<p.length;t++)p[t].rescaleAxis();L.scale()}).filter(function(){return e.event.ctrlKey||"mousedown"===e.event.type||"dblclick"===e.event.type});h.call(g),h.on("dblclick.zoom",null);for(var p=this.tracks,b=i,y=1;y<=a;y++){var k=this.hiddenTracks.includes(y),m=s[y][0].name,x=this.getLabel(m),w=m.slice(0,m.lastIndexOf(".")),_=new o({d3:e,yPos:b+=1===y?0:k?35:r,svg:h,id:y,name:m,label:x,container:this.ele,width:d,xLength:c,hidden:k,regions:s[y],features:this.features?this.features[w]:null,contigs:this.contigs?this.contigs[w]:null});p.push(_),this.rendered||new l({id:y,yPos:b,height:v,container:this.ele,svg:this.ele.querySelector("svg"),trackCount:this.trackCount,isReference:1===y,onMoveUp:function(e){t.moveTrackUp(e)},onMoveDown:function(e){t.moveTrackDown(e)},onSetReference:function(e){t.setReference(e)},onHide:function(e){t.hideTrack(e)},onShow:function(e){t.showTrack(e)}})}this.cursor=new u({d3:e,trackCount:a,svg:h,container:this.ele,tracks:this.tracks,onclick:function(t){}});var L=this.backbone=new f({tracks:p,data:n,d3:e,svg:h});g.transform(h,e.zoomIdentity),e.select(this.ele.querySelector(".reset-btn")).on("click",function(){t.reset()}),e.selectAll("button.pan").on("click",function(e,n,i){t.pan(i[n])}),e.selectAll("button.zoom").on("click",function(e,n,i){t.zoomTo(d/2,i[n])})}},{key:"moveTrackUp",value:function(t){var e=t-1;e<1||(this.swapTrack(t,e),this.swapBackbones(t,e),this.render())}},{key:"moveTrackDown",value:function(t){var e=t+1;e>this.trackCount||(this.swapTrack(t,e),this.swapBackbones(t,e),this.render())}},{key:"swapTrack",value:function(t,e){var n=this.genomeRegions[e];this.genomeRegions[e]=this.genomeRegions[t],this.genomeRegions[t]=n}},{key:"swapBackbones",value:function(t,e){this.data.forEach(function(n){n.forEach(function(n){n.lcb_idx===t?n.lcb_idx=e:n.lcb_idx===e&&(n.lcb_idx=t)}),n.sort(function(t,e){return t.lcb_idx-e.lcb_idx})})}},{key:"setReference",value:function(t,e){this.data.forEach(function(e){var n=!1;e.forEach(function(e){e.lcb_idx===t&&"+"!==e.strand&&(e.strand="+",n=!0)}),n&&e.forEach(function(e){e.lcb_idx!==t&&(e.strand="-"===e.strand?"+":"-")})}),e||this.render()}},{key:"hideTrack",value:function(t){this.data.forEach(function(e){e.forEach(function(e){e.lcb_idx==t&&(e.hidden=!0)})}),this.hiddenTracks.push(t),this.render()}},{key:"showTrack",value:function(t){this.data.forEach(function(e){e.forEach(function(e){e.lcb_idx==t&&delete e.hidden})}),this.hiddenTracks.splice(this.hiddenTracks.indexOf(t)),this.render()}},{key:"reset",value:function(){this.tracks.forEach(function(t){t.reset()}),this.zoom.transform(this.svg,this.d3.zoomIdentity)}},{key:"zoomTo",value:function(t,e){var n=this.zoom,i=this.svg,r=this.d3.zoomTransform(i.node()),s=r.k,o=n.scaleExtent(),a=r.x,c=e.classList.contains("zoom-in")?1.5:1/1.5,l=s*c;if(l<o[0]||l>o[1])return!1;var h=Math.max(o[0],Math.min(o[1],l));h!=l&&(c=(l=h)/s),a=(a-t)*c+t,r.k=l,r.x=a,n.transform(i,r)}},{key:"pan",value:function(t){var e=this.zoom,n=this.svg,i=this.d3.zoomTransform(n.node()),r=i.x,s=t.classList.contains("pan-right")?-100:100;i.x=r+s,e.transform(n,i)}},{key:"onCursorClick",value:function(t){var e=this,n=t.trackID,i=t.relativeXs,r=(t.lcbID,t.xPos,t.scales);n&&this.tracks.forEach(function(t,s){var o=i[s];if(o){e.tracks[n-1];t.shift(o,r[s],function(){1,e.rect.transition().call(e.zoom.transform,e.d3.zoomTransform({k:1,x:0,y:0}))})}})}},{key:"getSharedLCBs",value:function(t){var e=Math.max.apply(Math,C(t.map(function(t){return t.length})));return t.filter(function(t){return t.length==e})}},{key:"getGenomeRegions",value:function(t){var e={},n=0,i=0;return t.forEach(function(t,r){i+=1,t.length<2||t.forEach(function(t){n+=1,t.id=n,t.groupID=r,t.color=T.schemeCategory20[r%20];var i=t.lcb_idx;i in e?e[i].push(t):e[i]=[t]})}),{regions:e,regionCount:n,lcbCount:i}}},{key:"getLabel",value:function(t){var e=t.slice(0,t.lastIndexOf("."));return this.labels?"".concat(this.labels[t]," [").concat(e,"]"):""}}])&&E(e.prototype,n),s&&E(e,s),t}()},,,,,,,function(t,e,n){t.exports=n(8).default}])});