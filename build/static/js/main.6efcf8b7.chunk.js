(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{179:function(e,t,a){e.exports=a(308)},308:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(27),o=a.n(n),s=a(37),c=a(75),h=a(167),l=a(22),d=a.n(l),u=a(169),f=d.a.mark(g),v=d.a.mark(m);function g(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),f)}function m(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)(g);case 2:case"end":return e.stop()}}),v)}var p="initialized",y="running",w={QVGA:{facingMode:"environment",width:{exact:320},height:{exact:240}},VGA:{facingMode:"environment",width:{exact:640},height:{exact:480}},HD:{facingMode:"environment",width:{exact:1280},height:{exact:720}},FULLHD:{facingMode:"environment",width:{exact:1920},height:{exact:1080}},FourK:{facingMode:"environment",width:{ideal:2500,max:4096},height:{ideal:1600,max:4096}},EightK:{facingMode:"environment",width:{ideal:7680},height:{ideal:4320}}},R={VGA:w.VGA,HD:w.HD,FULLHD:w.FULLHD},C={counter:0,status:"initializing",barcode:"",execScan:!1,select_start_x:0,select_start_y:0,select_end_x:0,select_end_y:0,inSelect:!1,finSelect:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,a=Object.assign({},e);switch(a.counter++,a.execScan=!1,console.log(t),t.type){case"INITIALIZED":a.status=p,a.execScan=!0;break;case"SCANNED":a.status=y,a.execScan=!0,a.barcode=t.payload;break;case"START_SELECT":a.select_start_x=t.payload[0],a.select_start_y=t.payload[1];break;case"MOVE_SELECT":a.select_end_x=t.payload[0],a.select_end_y=t.payload[1],a.inSelect=!0;break;case"END_SELECT":a.select_end_x=t.payload[0],a.select_end_y=t.payload[1],a.inSelect=!1,a.finSelect=!0}return a},b=a(316),k=Object(b.a)({INITIALIZED:function(e){return e},SCANNED:function(e){return e},START_SELECT:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t},MOVE_SELECT:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t},END_SELECT:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t}}),O=a(53),E=a(99),x=a(100),H=a(106),D=a(105);var M=a(318),W=a(168),_=a(150),A=function(e){var t=document.createElement("canvas");return t.width=e.videoWidth,t.height=e.videoHeight,t.getContext("2d").drawImage(e,0,0,t.width,t.height),t},B=function(e){Object(H.a)(a,e);var t=Object(D.a)(a);function a(){var e;Object(E.a)(this,a);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={count:0,videoResolution:"VGA",colnum:1,rownum:1,showCode:!0,showSS:!1,showGrid:!1},e.parentRef=r.createRef(),e.imageRef1=r.createRef(),e.imageRef2=r.createRef(),e.videoRef=r.createRef(),e.barcodeDisplayCanvasRef=r.createRef(),e.controllerCanvasRef=r.createRef(),e.statusCanvasRef=r.createRef(),e.controllerDivRef=r.createRef(),e.workerSSMaskMonitorCanvasRef=r.createRef(),e.workerAreaCVCanvasRef=r.createRef(),e.videoHeight=0,e.videoWidth=0,e.parentHeight=0,e.parentWidth=0,e.overlayWidth=0,e.overlayHeight=0,e.overlayXOffset=0,e.overlayYOffset=0,e.multiBarcodReader=new _.MultiBarcodeReader,e.frame=0,e.fps=0,e.frameCountStartTime=(new Date).getTime(),e.changeCameraResolution=function(t){if(e.videoRef.current.srcObject.getTracks().map((function(e){return e.stop()})),navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){var a=navigator.mediaDevices.getUserMedia({audio:!1,video:R[t]}).then((function(t){return console.log(e.videoRef),e.videoRef.current.srcObject=t,new Promise((function(t,a){e.videoRef.current.onloadedmetadata=function(){t()}}))}));Promise.all([a]).then((function(a){console.log("Camera and model ready!");var r=e.videoRef.current;e.checkParentSizeChanged(r),e.setState({videoResolution:t})})).catch((function(e){console.error(e)}))}},e.requestScanBarcode=Object(O.a)(d.a.mark((function t(){var a,r,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("requestScanBarcode"),a=e.videoRef.current,(r=e.controllerCanvasRef.current).width=e.overlayWidth,r.height=e.overlayHeight,0!==(i=A(a)).width){t.next=10;break}return i.remove(),window.requestAnimationFrame(e.requestScanBarcode),t.abrupt("return");case 10:e.multiBarcodReader.requestScanBarcode(i,e.state.colnum,e.state.rownum),i.remove();case 12:case"end":return t.stop()}}),t)}))),e}return Object(x.a)(a,[{key:"gameLoop",value:function(){this.frame++;var e=(new Date).getTime();if(e-this.frameCountStartTime>1e3){var t=this.frame/(e-this.frameCountStartTime)*1e3;this.frameCountStartTime=(new Date).getTime(),this.frame=0,this.fps=t}}},{key:"initWorker",value:function(){var e=Object(O.a)(d.a.mark((function e(){var t=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.multiBarcodReader.addInitializedListener((function(){t.props.initialized(),t.requestScanBarcode(),t.multiBarcodReader.barcodePreviewCanvas=t.state.showCode?t.workerAreaCVCanvasRef.current:null})),this.multiBarcodReader.addWaitNextFrameListeners((function(){t.requestScanBarcode()})),this.multiBarcodReader.addScanedBarcordListeners((function(e,t){console.log("SCANNED!!!")})),this.multiBarcodReader.init(),e.abrupt("return");case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"checkParentSizeChanged",value:function(e){this.videoHeight=e.videoHeight,this.videoWidth=e.videoWidth;var t=(e.getBoundingClientRect().bottom,e.getBoundingClientRect().top),a=e.getBoundingClientRect().right-e.getBoundingClientRect().left;t=a/this.videoWidth*this.videoHeight,this.parentHeight=t,this.parentWidth=a;var r=function(e,t,a,r){var i=0,n=0,o=0,s=0;return e/t>a/r?(s=0,o=(e-(n=(i=t)*(a/r)))/2):(o=0,s=(t-(i=(n=e)*(r/a)))/2),{overlayWidth:n=Math.floor(n),overlayHeight:i=Math.floor(i),overlayXOffset:o=Math.floor(o),overlayYOffset:s=Math.floor(s)}}(this.parentWidth,this.parentHeight,this.videoWidth,this.videoHeight),i=r.overlayWidth,n=r.overlayHeight,o=r.overlayXOffset,s=r.overlayYOffset;this.overlayWidth=i,this.overlayHeight=n,this.overlayXOffset=o,this.overlayYOffset=s,this.workerAreaCVCanvasRef.current.width=this.overlayWidth,this.workerAreaCVCanvasRef.current.height=this.overlayHeight,this.workerSSMaskMonitorCanvasRef.current.width=this.overlayWidth,this.workerSSMaskMonitorCanvasRef.current.height=this.overlayHeight,this.controllerCanvasRef.current.width=this.overlayWidth,this.controllerCanvasRef.current.height=this.overlayHeight}},{key:"componentDidMount",value:function(){var e=this;console.log("Initializing");var t=this.initWorker();if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){var a=navigator.mediaDevices.getUserMedia({audio:!1,video:R[this.state.videoResolution]}).then((function(t){return console.log(e.videoRef),e.videoRef.current.srcObject=t,new Promise((function(t,a){e.videoRef.current.onloadedmetadata=function(){t()}}))}));Promise.all([t,a]).then((function(e){console.log("Camera and model ready!")})).catch((function(e){console.error(e)}))}}},{key:"render",value:function(){var e=this,t=this.props,a=this.videoRef.current;t.status===p&&(console.log("initialized"),this.checkParentSizeChanged(a));var i=Object.keys(R).map((function(e){return{key:e,text:e,value:e}})),n=[1,2,3].map((function(e){return{key:e,text:e,value:e}})),o=[1,2,3].map((function(e){return{key:e,text:e,value:e}}));return r.createElement("div",{style:{width:"100%",height:this.parentHeight,position:"relative",top:0,left:0},ref:this.parentRef},r.createElement("video",{autoPlay:!0,playsInline:!0,muted:!0,ref:this.videoRef,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0}}),r.createElement("canvas",{ref:this.workerSSMaskMonitorCanvasRef,style:{position:"absolute",top:this.overlayYOffset,left:this.overlayXOffset,width:this.parentWidth,height:this.parentHeight}}),r.createElement("canvas",{ref:this.workerAreaCVCanvasRef,style:{position:"absolute",top:this.overlayYOffset,left:this.overlayXOffset,width:this.parentWidth,height:this.parentHeight}}),r.createElement("canvas",{ref:this.barcodeDisplayCanvasRef,style:{position:"absolute",top:this.overlayYOffset,left:this.overlayXOffset,width:this.parentWidth,height:this.parentHeight}}),r.createElement("canvas",{ref:this.controllerCanvasRef,style:{position:"absolute",top:this.overlayYOffset,left:this.overlayXOffset,width:this.parentWidth,height:this.parentHeight}}),r.createElement("canvas",{ref:this.statusCanvasRef,style:{position:"absolute",top:this.overlayYOffset,left:this.overlayXOffset,width:this.parentWidth,height:this.parentHeight}}),r.createElement("div",{ref:this.controllerDivRef,style:{position:"absolute",top:this.overlayYOffset,left:this.overlayXOffset,width:this.parentWidth,height:this.parentHeight}},r.createElement(M.a,{text:"Resolution",options:i,simple:!0,item:!0,onChange:function(t,a){var r=a.value;e.changeCameraResolution(r)}}),r.createElement(M.a,{text:"col",options:n,simple:!0,item:!0,onChange:function(t,a){var r=a.value;e.setState({colnum:r})}}),r.createElement(M.a,{text:"row",options:o,simple:!0,item:!0,onChange:function(t,a){var r=a.value;e.setState({rownum:r})}}),r.createElement(W.a,{basic:!0,size:"tiny",color:this.state.showCode?"red":"grey",onClick:function(){var t=!e.state.showCode;e.multiBarcodReader.barcodePreviewCanvas=t?e.workerAreaCVCanvasRef.current:null,e.setState({showCode:t})}},"code"),r.createElement(W.a,{basic:!0,size:"tiny",color:this.state.showSS?"red":"grey",onClick:function(){var t=!e.state.showSS;e.multiBarcodReader.previewCanvas=t?e.workerSSMaskMonitorCanvasRef.current:null,e.setState({showSS:t})}},"ss"),r.createElement(W.a,{basic:!0,size:"tiny",color:this.state.showGrid?"red":"grey",onClick:function(){var t=!e.state.showGrid;e.multiBarcodReader.girdDrawCanvas=t?e.controllerCanvasRef.current:null,e.setState({showGrid:!e.state.showGrid})}},"grid")))}}]),a}(r.Component),j=function(e){Object(H.a)(a,e);var t=Object(D.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(x.a)(a,[{key:"render",value:function(){var e=this.props;return r.createElement("div",null,r.createElement(B,e))}}]),a}(r.Component);var T=Object(c.b)((function(e){return e}),(function(e){return{initialized:function(t){e(k.initialized(t))}}}))(j),L=Object(h.a)(),z=Object(s.d)(S,Object(s.a)(L));L.run(m),o.a.render(i.a.createElement(c.a,{store:z},i.a.createElement(T,null)),document.getElementById("root"))}},[[179,1,2]]]);
//# sourceMappingURL=main.6efcf8b7.chunk.js.map