(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t){},110:function(e,t){},143:function(e,t){},144:function(e,t){},191:function(e,t){},192:function(e,t){},193:function(e,t){},194:function(e,t,n){},195:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),c=n(87),i=n.n(c),s=(n(99),n(12)),u=n.n(s),o=n(18),l=n(88),p=n(89),f=n(92),d=n(90),h=n(93),m=n(91),v=n.n(m),g=n(15),w=n(25),b=function(){var e=Object(o.a)(u.a.mark(function e(t,n){var a,r,c,i,s,o=arguments;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=o.length>2&&void 0!==o[2]?o[2]:48,r=t,!n){e.next=6;break}return e.next=5,g.d(t,[n]);case 5:r=e.sent[0];case 6:return(c=document.createElement("canvas")).width=a,c.height=a,c.getContext("2d").drawImage(r,0,0,a,a),i=w.a.fromPixels(c),s=i.mean(2).expandDims(2),e.abrupt("return",s.expandDims(0).toFloat().div(w.c(255)));case 13:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),E=(n(194),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={loading:!0,avg:[]},n.upload=r.a.createRef(),n.webcam=r.a.createRef(),n.preview=r.a.createRef(),n.labels=["Angry","Disgust","Fear","Happy","Sad","Surprise","Neutral"],n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.e("/models");case 2:return this.tinyFace=e.sent,e.next=5,w.b("models/model.json");case 5:return this.smileDetector=e.sent,e.next=8,b(this.getInput());case 8:t=e.sent,this.smileDetector.predict(t),this.setState({loading:!1});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"previewInput",value:function(e){for(var t=this.preview.current.getContext("2d"),n=t.createImageData(48,48),a=0;a<e.length;a+=1)n.data[4*a]=255*e[a],n.data[4*a+1]=255*e[a],n.data[4*a+2]=255*e[a],n.data[4*a+3]=255;t.putImageData(n,0,0)}},{key:"predict",value:function(){var e=Object(o.a)(u.a.mark(function e(t){var n,a,r,c,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.c(t,new g.a({inputSize:256}));case 2:if(!(n=e.sent)){e.next=15;break}return e.next=6,b(t,n);case 6:a=e.sent,this.previewInput(a.dataSync()),this.setState({loading:!0}),r=window.performance.now(),c=this.smileDetector.predict(a).dataSync(),i=window.performance.now()-r,this.setState({loading:!1,inferenceTime:i,avg:this.state.avg.concat(i),results:c}),e.next=16;break;case 15:console.warn("No face found, skipping dection");case 16:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"toggleAutoDetect",value:function(){var e=this;this.state.autoDetect?(clearInterval(this.state.autoDetect),this.setState({autoDetect:!1})):this.setState({autoDetect:setInterval(function(){e.predict(e.getInput())},200)})}},{key:"uploadImage",value:function(){var e=Object(o.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.upload.current.files[0],e.next=3,g.b(t);case 3:e.sent;case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getInput",value:function(){var e=this.webcam.current.getCanvas();if(!e){var t=document.createElement("canvas");t.width=100,t.height=100,t.getContext("2d").fillRect(0,0,100,100),e=t}return e}},{key:"render",value:function(){var e=this,t=[];if(this.state.inferenceTime){var n=0,a=0;this.state.results.forEach(function(e,t){e>n&&(n=e,a=t)}),this.state.results.forEach(function(n,c){return t.push(r.a.createElement("li",{key:c,className:c==a?"best":""},e.labels[c],": ",Math.round(1e4*n)/100,"%"))})}return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"+(this.state.loading?" App-loading":"")},r.a.createElement(v.a,{videoConstraints:{facingMode:"user"},ref:this.webcam}),r.a.createElement("div",{className:"App-controls"},r.a.createElement("button",{className:"App-detect",onClick:function(){return e.predict(e.getInput())}},"Predict Once"),r.a.createElement("button",{className:"App-detect",onClick:function(){return e.toggleAutoDetect()}},this.state.autoDetect?"Stop ":"Start ","Streaming"),r.a.createElement("div",{className:"App-stats"},this.state.inferenceTime&&r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Average time:")," ",Math.round(this.state.avg.reduce(function(e,t){return e+t},0)/this.state.avg.length*100)/100,"ms"),r.a.createElement("li",null,r.a.createElement("strong",null,"Last inference time:")," ",Math.round(100*this.state.inferenceTime)/100,"ms"),r.a.createElement("li",null,r.a.createElement("strong",null,"Results:"),r.a.createElement("ul",null,t)))),r.a.createElement("canvas",{ref:this.preview,width:"48",height:"48"}))))}}]),t}(a.Component));i.a.render(r.a.createElement(E,null),document.getElementById("root"))},94:function(e,t,n){e.exports=n(195)},99:function(e,t,n){}},[[94,1,2]]]);
//# sourceMappingURL=main.2b489c34.chunk.js.map