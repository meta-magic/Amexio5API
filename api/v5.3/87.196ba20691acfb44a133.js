(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{U89g:function(l,e,n){"use strict";n.d(e,"a",function(){return t}),n.d(e,"b",function(){return u});var a=n("CcnG"),t=(n("d2mR"),n("Ip0R"),a.Qa({encapsulation:2,styles:[],data:{}}));function u(l){return a.mb(0,[],null,null)}},XIHC:function(l,e){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(l,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return t}),n("wZee"),n("XIHC");var a=function(){function l(l,e){this._renderer=l,this._el=e,this.nativeElement=e.nativeElement}return l.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},l}(),t=function(){}},dwpQ:function(l,e,n){"use strict";n.r(e);var a=n("CcnG"),t=function(){},u=n("gTgE"),o=n("pMnS"),r=n("U89g"),i=n("d2mR"),s=n("O4vx"),d=n("gIcY"),c=n("Ip0R"),b=function(){function l(l){this.http=l,this.age=10,this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,e,n=this;this.http.get("assets/data/code/layout/box/box.html",{responseType:"text"}).subscribe(function(e){l=e},function(l){},function(){n.htmlCode=l}),this.http.get("assets/data/code/layout/box/box.text",{responseType:"text"}).subscribe(function(l){e=l},function(l){},function(){n.typeScriptCode=e})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),g=n("t/Na"),p=a.Qa({encapsulation:2,styles:[],data:{}});function m(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),a.Ra(2,4243456,null,0,i.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.htmlCode,"html")},null)}function h(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),a.Ra(2,4243456,null,0,i.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.typeScriptCode,"typescript")},null)}function f(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,158,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(l,e,n){var t=!0;return"document:click"===e&&(t=!1!==a.cb(l,1).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==a.cb(l,1).onscroll()&&t),t},u.Sb,u.i)),a.Ra(1,5357568,null,3,s.h,[],{header:[0,"header"]},null),a.ib(603979776,1,{amexioHeader:1}),a.ib(603979776,2,{amexioBody:1}),a.ib(603979776,3,{amexioFooter:1}),(l()(),a.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.bc,u.r)),a.Ra(6,114688,[[1,4]],0,s.v,[],null,null),(l()(),a.kb(-1,0,[" Amexio Box "])),(l()(),a.Sa(8,0,null,1,150,"amexio-body",[],null,null,null,u.Ob,u.e)),a.Ra(9,114688,[[2,4]],0,s.d,[],null,null),(l()(),a.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),a.kb(-1,null,["Amexio Box can be easily wrapped around any other component and configure using the different responsive styling"])),(l()(),a.Sa(12,16777216,null,0,146,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var t=!0;return"document:click"===e&&(t=!1!==a.cb(l,13).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==a.cb(l,13).onscroll()&&t),t},u.mc,u.C)),a.Ra(13,5357568,null,2,s.L,[a.F,a.k,a.R],null,null),a.ib(603979776,4,{queryTabs:1}),a.ib(603979776,5,{queryAction:1}),(l()(),a.Sa(16,0,null,1,98,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.nc,u.D)),a.Ra(17,114688,[[4,4]],0,s.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Sa(18,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),a.kb(-1,null,["Box Component"])),(l()(),a.Sa(20,0,null,0,22,"amexio-row",[],null,null,null,u.ic,u.y)),a.Ra(21,1163264,null,0,s.H,[],null,null),(l()(),a.Sa(22,0,null,0,6,"amexio-column",[],[[1,"class",0]],null,null,u.Ub,u.k)),a.Ra(23,114688,null,0,s.k,[],{size:[0,"size"]},null),(l()(),a.Sa(24,0,null,0,4,"amexio-box",[["border","top"],["border-color","red"],["closable","'true'"],["padding","true"]],null,null,null,u.Rb,u.h)),a.Ra(25,114688,null,0,s.g,[],{border:[0,"border"],borderColor:[1,"borderColor"],padding:[2,"padding"],closable:[3,"closable"]},null),(l()(),a.Sa(26,0,null,0,2,"amexio-label",[["border","top"]],null,null,null,u.Td,u.Jb)),a.Ra(27,114688,null,0,s.xc,[],null,null),(l()(),a.kb(-1,0,["This is small-bold amexio label with red border"])),(l()(),a.Sa(29,0,null,0,6,"amexio-column",[],[[1,"class",0]],null,null,u.Ub,u.k)),a.Ra(30,114688,null,0,s.k,[],{size:[0,"size"]},null),(l()(),a.Sa(31,0,null,0,4,"amexio-box",[["border","bottom"],["border-color","blue"],["padding","true"]],null,null,null,u.Rb,u.h)),a.Ra(32,114688,null,0,s.g,[],{border:[0,"border"],borderColor:[1,"borderColor"],padding:[2,"padding"]},null),(l()(),a.Sa(33,0,null,0,2,"amexio-label",[["border","bottom"]],null,null,null,u.Td,u.Jb)),a.Ra(34,114688,null,0,s.xc,[],null,null),(l()(),a.kb(-1,0,["This is small-bold amexio label with blue border"])),(l()(),a.Sa(36,0,null,0,6,"amexio-column",[],[[1,"class",0]],null,null,u.Ub,u.k)),a.Ra(37,114688,null,0,s.k,[],{size:[0,"size"]},null),(l()(),a.Sa(38,0,null,0,4,"amexio-box",[["border","right"],["border-color","yellow"],["padding","true"]],null,null,null,u.Rb,u.h)),a.Ra(39,114688,null,0,s.g,[],{border:[0,"border"],borderColor:[1,"borderColor"],padding:[2,"padding"]},null),(l()(),a.Sa(40,0,null,0,2,"amexio-label",[["border","right"]],null,null,null,u.Td,u.Jb)),a.Ra(41,114688,null,0,s.xc,[],null,null),(l()(),a.kb(-1,0,["This is small-bold amexio label with yellow border"])),(l()(),a.Sa(43,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),a.Sa(44,0,null,0,22,"amexio-row",[],null,null,null,u.ic,u.y)),a.Ra(45,1163264,null,0,s.H,[],null,null),(l()(),a.Sa(46,0,null,0,6,"amexio-column",[],[[1,"class",0]],null,null,u.Ub,u.k)),a.Ra(47,114688,null,0,s.k,[],{size:[0,"size"]},null),(l()(),a.Sa(48,0,null,0,4,"amexio-box",[["border","left"],["border-color","green"],["padding","true"]],null,null,null,u.Rb,u.h)),a.Ra(49,114688,null,0,s.g,[],{border:[0,"border"],borderColor:[1,"borderColor"],padding:[2,"padding"]},null),(l()(),a.Sa(50,0,null,0,2,"amexio-label",[["border","left"]],null,null,null,u.Td,u.Jb)),a.Ra(51,114688,null,0,s.xc,[],null,null),(l()(),a.kb(-1,0,["This is small-bold amexio label with green border"])),(l()(),a.Sa(53,0,null,0,6,"amexio-column",[],[[1,"class",0]],null,null,u.Ub,u.k)),a.Ra(54,114688,null,0,s.k,[],{size:[0,"size"]},null),(l()(),a.Sa(55,0,null,0,4,"amexio-box",[["background-color","purple"],["padding","true"]],null,null,null,u.Rb,u.h)),a.Ra(56,114688,null,0,s.g,[],{bgColor:[0,"bgColor"],padding:[1,"padding"]},null),(l()(),a.Sa(57,0,null,0,2,"amexio-label",[],null,null,null,u.Td,u.Jb)),a.Ra(58,114688,null,0,s.xc,[],null,null),(l()(),a.kb(-1,0,["This is small-bold amexio label with purple bg color"])),(l()(),a.Sa(60,0,null,0,6,"amexio-column",[],[[1,"class",0]],null,null,u.Ub,u.k)),a.Ra(61,114688,null,0,s.k,[],{size:[0,"size"]},null),(l()(),a.Sa(62,0,null,0,4,"amexio-box",[["background-color","yellow"],["padding","true"]],null,null,null,u.Rb,u.h)),a.Ra(63,114688,null,0,s.g,[],{bgColor:[0,"bgColor"],padding:[1,"padding"]},null),(l()(),a.Sa(64,0,null,0,2,"amexio-label",[],null,null,null,u.Td,u.Jb)),a.Ra(65,114688,null,0,s.xc,[],null,null),(l()(),a.kb(-1,0,["This is small-bold amexio label with background-color yellow"])),(l()(),a.Sa(67,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),a.Sa(68,0,null,0,22,"amexio-row",[],null,null,null,u.ic,u.y)),a.Ra(69,1163264,null,0,s.H,[],null,null),(l()(),a.Sa(70,0,null,0,6,"amexio-column",[],[[1,"class",0]],null,null,u.Ub,u.k)),a.Ra(71,114688,null,0,s.k,[],{size:[0,"size"]},null),(l()(),a.Sa(72,0,null,0,4,"amexio-box",[["background-color","red"],["padding","true"]],null,null,null,u.Rb,u.h)),a.Ra(73,114688,null,0,s.g,[],{bgColor:[0,"bgColor"],padding:[1,"padding"]},null),(l()(),a.Sa(74,0,null,0,2,"amexio-label",[],null,null,null,u.Td,u.Jb)),a.Ra(75,114688,null,0,s.xc,[],null,null),(l()(),a.kb(-1,0,["This is small-bold amexio label with background-color red"])),(l()(),a.Sa(77,0,null,0,6,"amexio-column",[],[[1,"class",0]],null,null,u.Ub,u.k)),a.Ra(78,114688,null,0,s.k,[],{size:[0,"size"]},null),(l()(),a.Sa(79,0,null,0,4,"amexio-box",[["background-color","blue"],["padding","true"]],null,null,null,u.Rb,u.h)),a.Ra(80,114688,null,0,s.g,[],{bgColor:[0,"bgColor"],padding:[1,"padding"]},null),(l()(),a.Sa(81,0,null,0,2,"amexio-label",[],null,null,null,u.Td,u.Jb)),a.Ra(82,114688,null,0,s.xc,[],null,null),(l()(),a.kb(-1,0,["This is small-bold amexio label with background-color blue"])),(l()(),a.Sa(84,0,null,0,6,"amexio-column",[],[[1,"class",0]],null,null,u.Ub,u.k)),a.Ra(85,114688,null,0,s.k,[],{size:[0,"size"]},null),(l()(),a.Sa(86,0,null,0,4,"amexio-box",[["background-color","yellow"],["border","bottom"],["border-color","green"],["padding","true"]],null,null,null,u.Rb,u.h)),a.Ra(87,114688,null,0,s.g,[],{border:[0,"border"],borderColor:[1,"borderColor"],bgColor:[2,"bgColor"],padding:[3,"padding"]},null),(l()(),a.Sa(88,0,null,0,2,"amexio-label",[],null,null,null,u.Td,u.Jb)),a.Ra(89,114688,null,0,s.xc,[],null,null),(l()(),a.kb(-1,0,["This is small-bold amexio label with background-color green"])),(l()(),a.Sa(91,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),a.Sa(92,0,null,0,22,"amexio-row",[],null,null,null,u.ic,u.y)),a.Ra(93,1163264,null,0,s.H,[],null,null),(l()(),a.Sa(94,0,null,0,6,"amexio-column",[],[[1,"class",0]],null,null,u.Ub,u.k)),a.Ra(95,114688,null,0,s.k,[],{size:[0,"size"]},null),(l()(),a.Sa(96,0,null,0,4,"amexio-box",[["background-color","brown"],["border","right-left"],["border-color","brown"],["padding","true"]],null,null,null,u.Rb,u.h)),a.Ra(97,114688,null,0,s.g,[],{border:[0,"border"],borderColor:[1,"borderColor"],bgColor:[2,"bgColor"],padding:[3,"padding"]},null),(l()(),a.Sa(98,0,null,0,2,"amexio-label",[],null,null,null,u.Td,u.Jb)),a.Ra(99,114688,null,0,s.xc,[],null,null),(l()(),a.kb(-1,0,["This is small-bold amexio label with background-color"])),(l()(),a.Sa(101,0,null,0,6,"amexio-column",[],[[1,"class",0]],null,null,u.Ub,u.k)),a.Ra(102,114688,null,0,s.k,[],{size:[0,"size"]},null),(l()(),a.Sa(103,0,null,0,4,"amexio-box",[["background-color","purple"],["border","all"],["border-color","purple"],["box-height","100px"],["box-width","282px"],["padding","true"]],null,null,null,u.Rb,u.h)),a.Ra(104,114688,null,0,s.g,[],{border:[0,"border"],borderColor:[1,"borderColor"],bgColor:[2,"bgColor"],padding:[3,"padding"],height:[4,"height"],width:[5,"width"]},null),(l()(),a.Sa(105,0,null,0,2,"amexio-text-input",[["field-label","Aadhar No"],["icon-feedback","true"],["name","name"],["place-holder","Enter aadhar card no"]],null,null,null,u.ad,u.Qa)),a.hb(5120,null,d.h,function(l){return[l]},[s.rb]),a.Ra(107,114688,null,0,s.rb,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"],iconfeedback:[2,"iconfeedback"]},null),(l()(),a.Sa(108,0,null,0,6,"amexio-column",[],[[1,"class",0]],null,null,u.Ub,u.k)),a.Ra(109,114688,null,0,s.k,[],{size:[0,"size"]},null),(l()(),a.Sa(110,0,null,0,4,"amexio-box",[["border","top-bottom"],["padding","true"]],null,null,null,u.Rb,u.h)),a.Ra(111,114688,null,0,s.g,[],{border:[0,"border"],padding:[1,"padding"]},null),(l()(),a.Sa(112,0,null,0,2,"amexio-label",[],null,null,null,u.Td,u.Jb)),a.Ra(113,114688,null,0,s.xc,[],null,null),(l()(),a.kb(-1,0,["This is small-bold amexio label with background-color"])),(l()(),a.Sa(115,0,null,1,24,"amexio-tab",[["title","API Reference"]],null,null,null,u.nc,u.D)),a.Ra(116,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(l()(),a.Sa(117,0,null,0,22,"amexio-datagrid",[["title","Properties <amexio-box>"]],null,[["document","scroll"],["document","click"]],function(l,e,n){var t=!0;return"document:scroll"===e&&(t=!1!==a.cb(l,118).onscroll()&&t),"document:click"===e&&(t=!1!==a.cb(l,118).onclick()&&t),t},u.td,u.jb)),a.Ra(118,1163264,null,1,s.Qb,[a.l,s.Ka,a.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,6,{columnRef:1}),(l()(),a.Sa(120,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.ud,u.kb)),a.Ra(121,49152,[[6,4]],2,s.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,7,{headerTemplate:0}),a.ib(335544320,8,{bodyTemplate:0}),(l()(),a.Sa(124,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.ud,u.kb)),a.Ra(125,49152,[[6,4]],2,s.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,9,{headerTemplate:0}),a.ib(335544320,10,{bodyTemplate:0}),(l()(),a.Sa(128,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.ud,u.kb)),a.Ra(129,49152,[[6,4]],2,s.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,11,{headerTemplate:0}),a.ib(335544320,12,{bodyTemplate:0}),(l()(),a.Sa(132,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.ud,u.kb)),a.Ra(133,49152,[[6,4]],2,s.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,13,{headerTemplate:0}),a.ib(335544320,14,{bodyTemplate:0}),(l()(),a.Sa(136,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.ud,u.kb)),a.Ra(137,49152,[[6,4]],2,s.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,15,{headerTemplate:0}),a.ib(335544320,16,{bodyTemplate:0}),(l()(),a.Sa(140,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,u.nc,u.D)),a.Ra(141,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(l()(),a.Sa(142,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),a.Sa(143,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,u.pc,u.F)),a.Ra(144,5357568,null,1,s.Q,[a.F],null,null),a.ib(603979776,17,{queryTabs:1}),(l()(),a.Sa(146,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.nc,u.D)),a.Ra(147,114688,[[17,4]],0,s.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Ja(16777216,null,0,1,null,m)),a.Ra(149,16384,null,0,c.l,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(150,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.nc,u.D)),a.Ra(151,114688,[[17,4]],0,s.M,[],{title:[0,"title"]},null),(l()(),a.Ja(16777216,null,0,1,null,h)),a.Ra(153,16384,null,0,c.l,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(154,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.nc,u.D)),a.Ra(155,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(l()(),a.Sa(156,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),a.kb(-1,null,["Amexio Sandbox"])),(l()(),a.Sa(158,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v41-box?embed=1&file=app/forms/box/box.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,e){var n=e.component;l(e,1,0,"true"),l(e,6,0),l(e,9,0),l(e,13,0),l(e,17,0,"Demo","true"),l(e,21,0),l(e,23,0,4),l(e,25,0,"top","red","true","'true'"),l(e,27,0),l(e,30,0,4),l(e,32,0,"bottom","blue","true"),l(e,34,0),l(e,37,0,4),l(e,39,0,"right","yellow","true"),l(e,41,0),l(e,45,0),l(e,47,0,4),l(e,49,0,"left","green","true"),l(e,51,0),l(e,54,0,4),l(e,56,0,"purple","true"),l(e,58,0),l(e,61,0,4),l(e,63,0,"yellow","true"),l(e,65,0),l(e,69,0),l(e,71,0,4),l(e,73,0,"red","true"),l(e,75,0),l(e,78,0,4),l(e,80,0,"blue","true"),l(e,82,0),l(e,85,0,4),l(e,87,0,"bottom","green","yellow","true"),l(e,89,0),l(e,93,0),l(e,95,0,4),l(e,97,0,"right-left","brown","brown","true"),l(e,99,0),l(e,102,0,4),l(e,104,0,"all","purple","purple","true","100px","282px"),l(e,107,0,"Aadhar No","Enter aadhar card no","true"),l(e,109,0,4),l(e,111,0,"top-bottom","true"),l(e,113,0),l(e,116,0,"API Reference"),l(e,118,0,"Properties <amexio-box>","assets/apireference/layout/box.json","get","properties",!1,!1),l(e,121,0,"Name","name",!1,"string",15),l(e,125,0,"Version","version",!1,"string",15),l(e,129,0,"Type","type",!1,"string",15),l(e,133,0,"Default","default",!1,"string",15),l(e,137,0,"Description","description",!1,"string",45),l(e,141,0,"Source"),l(e,144,0),l(e,147,0,"HTML",!0),l(e,149,0,n.htmlCode),l(e,151,0,"Type Script"),l(e,153,0,n.typeScriptCode),l(e,155,0,"Live")},function(l,e){l(e,22,0,a.cb(e,23).role),l(e,29,0,a.cb(e,30).role),l(e,36,0,a.cb(e,37).role),l(e,46,0,a.cb(e,47).role),l(e,53,0,a.cb(e,54).role),l(e,60,0,a.cb(e,61).role),l(e,70,0,a.cb(e,71).role),l(e,77,0,a.cb(e,78).role),l(e,84,0,a.cb(e,85).role),l(e,94,0,a.cb(e,95).role),l(e,101,0,a.cb(e,102).role),l(e,108,0,a.cb(e,109).role)})}var x=a.Oa("box-demo",b,function(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,1,"box-demo",[],null,null,null,f,p)),a.Ra(1,49152,null,0,b,[g.c],null,null)],null,null)},{},{},[]),y=n("ZYCi");n.d(e,"BoxDemoModuleNgFactory",function(){return k});var k=a.Pa(t,[],function(l){return a.Za([a.ab(512,a.k,a.Ea,[[8,[u.a,o.a,x]],[3,a.k],a.z]),a.ab(4608,c.n,c.m,[a.w,[2,c.w]]),a.ab(4608,d.v,d.v,[]),a.ab(4608,g.i,g.o,[c.c,a.D,g.m]),a.ab(4608,g.p,g.p,[g.i,g.n]),a.ab(5120,g.a,function(l){return[l]},[g.p]),a.ab(4608,g.l,g.l,[]),a.ab(6144,g.j,null,[g.l]),a.ab(4608,g.h,g.h,[g.j]),a.ab(6144,g.b,null,[g.h]),a.ab(4608,g.f,g.k,[g.b,a.s]),a.ab(4608,g.c,g.c,[g.f]),a.ab(4608,s.Ka,s.Ka,[g.c]),a.ab(4608,s.Ua,s.Ua,[a.D]),a.ab(4608,s.bb,s.bb,[]),a.ab(4608,s.tc,s.tc,[]),a.ab(1073742336,c.b,c.b,[]),a.ab(1073742336,d.s,d.s,[]),a.ab(1073742336,d.e,d.e,[]),a.ab(1073742336,g.e,g.e,[]),a.ab(1073742336,g.d,g.d,[]),a.ab(1073742336,i.b,i.b,[]),a.ab(1073742336,s.w,s.w,[]),a.ab(1073742336,s.u,s.u,[]),a.ab(1073742336,s.z,s.z,[]),a.ab(1073742336,s.B,s.B,[]),a.ab(1073742336,s.E,s.E,[]),a.ab(1073742336,s.m,s.m,[]),a.ab(1073742336,s.S,s.S,[]),a.ab(1073742336,y.n,y.n,[[2,y.t],[2,y.m]]),a.ab(1073742336,t,t,[]),a.ab(256,g.m,"XSRF-TOKEN",[]),a.ab(256,g.n,"X-XSRF-TOKEN",[]),a.ab(1024,y.i,function(){return[[{path:"",component:b,pathMatch:"full"}]]},[])])})},wZee:function(l,e){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var l=/\blang(?:uage)?-([\w-]+)\b/i,e=0,a=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(l){return l instanceof t?new t(l.type,a.util.encode(l.content),l.alias):"Array"===a.util.type(l)?l.map(a.util.encode):l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(l){return Object.prototype.toString.call(l).match(/\[object (\w+)\]/)[1]},objId:function(l){return l.__id||Object.defineProperty(l,"__id",{value:++e}),l.__id},clone:function(l,e){var n=a.util.type(l);switch(e=e||{},n){case"Object":if(e[a.util.objId(l)])return e[a.util.objId(l)];var t={};for(var u in e[a.util.objId(l)]=t,l)l.hasOwnProperty(u)&&(t[u]=a.util.clone(l[u],e));return t;case"Array":return e[a.util.objId(l)]?e[a.util.objId(l)]:(t=[],e[a.util.objId(l)]=t,l.forEach(function(l,n){t[n]=a.util.clone(l,e)}),t)}return l}},languages:{extend:function(l,e){var n=a.util.clone(a.languages[l]);for(var t in e)n[t]=e[t];return n},insertBefore:function(l,e,n,t){var u=(t=t||a.languages)[l];if(2==arguments.length){for(var o in n=arguments[1])n.hasOwnProperty(o)&&(u[o]=n[o]);return u}var r={};for(var i in u)if(u.hasOwnProperty(i)){if(i==e)for(var o in n)n.hasOwnProperty(o)&&(r[o]=n[o]);r[i]=u[i]}return a.languages.DFS(a.languages,function(e,n){n===t[l]&&e!=l&&(this[e]=r)}),t[l]=r},DFS:function(l,e,n,t){for(var u in t=t||{},l)l.hasOwnProperty(u)&&(e.call(l,u,l[u],n||u),"Object"!==a.util.type(l[u])||t[a.util.objId(l[u])]?"Array"!==a.util.type(l[u])||t[a.util.objId(l[u])]||(t[a.util.objId(l[u])]=!0,a.languages.DFS(l[u],e,u,t)):(t[a.util.objId(l[u])]=!0,a.languages.DFS(l[u],e,null,t)))}},plugins:{},highlightAll:function(l,e){a.highlightAllUnder(document,l,e)},highlightAllUnder:function(l,e,n){var t={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",t);for(var u,o=t.elements||l.querySelectorAll(t.selector),r=0;u=o[r++];)a.highlightElement(u,!0===e,t.callback)},highlightElement:function(e,t,u){for(var o,r,i=e;i&&!l.test(i.className);)i=i.parentNode;i&&(o=(i.className.match(l)||[,""])[1].toLowerCase(),r=a.languages[o]),e.className=e.className.replace(l,"").replace(/\s+/g," ")+" language-"+o,e.parentNode&&/pre/i.test((i=e.parentNode).nodeName)&&(i.className=i.className.replace(l,"").replace(/\s+/g," ")+" language-"+o);var s={element:e,language:o,grammar:r,code:e.textContent};if(a.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(a.hooks.run("before-highlight",s),s.element.textContent=s.code,a.hooks.run("after-highlight",s)),void a.hooks.run("complete",s);if(a.hooks.run("before-highlight",s),t&&n.Worker){var d=new Worker(a.filename);d.onmessage=function(l){s.highlightedCode=l.data,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,u&&u.call(s.element),a.hooks.run("after-highlight",s),a.hooks.run("complete",s)},d.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=a.highlight(s.code,s.grammar,s.language),a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,u&&u.call(e),a.hooks.run("after-highlight",s),a.hooks.run("complete",s)},highlight:function(l,e,n){var u={code:l,grammar:e,language:n};return a.hooks.run("before-tokenize",u),u.tokens=a.tokenize(u.code,u.grammar),a.hooks.run("after-tokenize",u),t.stringify(a.util.encode(u.tokens),u.language)},matchGrammar:function(l,e,n,t,u,o,r){var i=a.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==r)return;var d=n[s];d="Array"===a.util.type(d)?d:[d];for(var c=0;c<d.length;++c){var b=d[c],g=b.inside,p=!!b.lookbehind,m=!!b.greedy,h=0,f=b.alias;if(m&&!b.pattern.global){var x=b.pattern.toString().match(/[imuy]*$/)[0];b.pattern=RegExp(b.pattern.source,x+"g")}b=b.pattern||b;for(var y=t,k=u;y<e.length;k+=e[y].length,++y){var w=e[y];if(e.length>l.length)return;if(!(w instanceof i)){if(m&&y!=e.length-1){if(b.lastIndex=k,!(A=b.exec(l)))break;for(var S=A.index+(p?A[1].length:0),v=A.index+A[0].length,R=y,C=k,T=e.length;R<T&&(C<v||!e[R].type&&!e[R-1].greedy);++R)S>=(C+=e[R].length)&&(++y,k=C);if(e[y]instanceof i)continue;F=R-y,w=l.slice(k,C),A.index-=k}else{b.lastIndex=0;var A=b.exec(w),F=1}if(A){p&&(h=A[1]?A[1].length:0),v=(S=A.index+h)+(A=A[0].slice(h)).length;var z=w.slice(0,S),j=w.slice(v),N=[y,F];z&&(++y,k+=z.length,N.push(z));var E=new i(s,g?a.tokenize(A,g):A,f,A,m);if(N.push(E),j&&N.push(j),Array.prototype.splice.apply(e,N),1!=F&&a.matchGrammar(l,e,n,y,k,!0,s),o)break}else if(o)break}}}}},tokenize:function(l,e,n){var t=[l],u=e.rest;if(u){for(var o in u)e[o]=u[o];delete e.rest}return a.matchGrammar(l,t,e,0,0,!1),t},hooks:{all:{},add:function(l,e){var n=a.hooks.all;n[l]=n[l]||[],n[l].push(e)},run:function(l,e){var n=a.hooks.all[l];if(n&&n.length)for(var t,u=0;t=n[u++];)t(e)}}},t=a.Token=function(l,e,n,a,t){this.type=l,this.content=e,this.alias=n,this.length=0|(a||"").length,this.greedy=!!t};if(t.stringify=function(l,e,n){if("string"==typeof l)return l;if("Array"===a.util.type(l))return l.map(function(n){return t.stringify(n,e,l)}).join("");var u={type:l.type,content:t.stringify(l.content,e,n),tag:"span",classes:["token",l.type],attributes:{},language:e,parent:n};if(l.alias){var o="Array"===a.util.type(l.alias)?l.alias:[l.alias];Array.prototype.push.apply(u.classes,o)}a.hooks.run("wrap",u);var r=Object.keys(u.attributes).map(function(l){return l+'="'+(u.attributes[l]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+u.tag+' class="'+u.classes.join(" ")+'"'+(r?" "+r:"")+">"+u.content+"</"+u.tag+">"},!n.document)return n.addEventListener?(a.disableWorkerMessageHandler||n.addEventListener("message",function(l){var e=JSON.parse(l.data),t=e.language,u=e.immediateClose;n.postMessage(a.highlight(e.code,a.languages[t],t)),u&&n.close()},!1),n.Prism):n.Prism;var u=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return u&&(a.filename=u.src,a.manual||u.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),n.Prism}();void 0!==l&&l.exports&&(l.exports=a),"undefined"!=typeof global&&(global.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(l){"entity"===l.type&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.languages.css,a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css",greedy:!0}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript",greedy:!0}}),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(e){for(var n,t=e.getAttribute("data-src"),u=e,o=/\blang(?:uage)?-(?!\*)([\w-]+)\b/i;u&&!o.test(u.className);)u=u.parentNode;if(u&&(n=(e.className.match(o)||[,""])[1]),!n){var r=(t.match(/\.(\w+)$/)||[,""])[1];n=l[r]||r}var i=document.createElement("code");i.className="language-"+n,e.textContent="",i.textContent="Loading\u2026",e.appendChild(i);var s=new XMLHttpRequest;s.open("GET",t,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(i.textContent=s.responseText,a.highlightElement(i)):i.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},e.hasAttribute("data-download-link")&&a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(){var l=document.createElement("a");return l.textContent=e.getAttribute("data-download-link-label")||"Download",l.setAttribute("download",""),l.href=t,l}),s.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);