import{h as Ye,r as i,m as Je,R as p}from"./index-6e03b95f.js";import{D as Qe,E as Ze,ao as ke,O as W,$ as Re,c as O,C as D,i as ze,a0 as eo,H as He,m as M,ap as oe,d as oo,a as z,h as to,W as no,V as ro,o as io}from"./index-60b7b111.js";import{u as lo,i as so,a as ao}from"./useSize-1d1dcbe5.js";import{_ as Te,b as P,L as co,g as uo,a as go}from"./compact-item-d0997b9c.js";const{isValidElement:Ne}=Ye;function mo(e){return e&&Ne(e)&&e.type===i.Fragment}function po(e,o,t){return Ne(e)?i.cloneElement(e,typeof t=="function"?t(e.props||{}):t):o}function je(e,o){return po(e,e,o)}var T=Qe({},Je),fo=T.version,bo=T.render,ho=T.unmountComponentAtNode,F;try{var vo=Number((fo||"").split(".")[0]);vo>=18&&(F=T.createRoot)}catch{}function xe(e){var o=T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;o&&Ze(o)==="object"&&(o.usingClientEntryPoint=e)}var A="__rc_react_root__";function So(e,o){xe(!0);var t=o[A]||F(o);xe(!1),t.render(e),o[A]=t}function yo(e,o){bo(e,o)}function Co(e,o){if(F){So(e,o);return}yo(e,o)}function $o(e){return se.apply(this,arguments)}function se(){return se=Te(P().mark(function e(o){return P().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Promise.resolve().then(function(){var r;(r=o[A])===null||r===void 0||r.unmount(),delete o[A]}));case 1:case"end":return n.stop()}},e)})),se.apply(this,arguments)}function Eo(e){ho(e)}function Oo(e){return ae.apply(this,arguments)}function ae(){return ae=Te(P().mark(function e(o){return P().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(F===void 0){n.next=2;break}return n.abrupt("return",$o(o));case 2:Eo(o);case 3:case"end":return n.stop()}},e)})),ae.apply(this,arguments)}const xo=e=>{const{componentCls:o,colorPrimary:t}=e;return{[o]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${t})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${e.motionEaseOutCirc}`,`opacity 2s ${e.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0},"&.wave-quick":{transition:[`box-shadow 0.3s ${e.motionEaseInOut}`,`opacity 0.35s ${e.motionEaseInOut}`].join(",")}}}}},Bo=ke("Wave",e=>[xo(e)]);function Io(e){const o=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return o&&o[1]&&o[2]&&o[3]?!(o[1]===o[2]&&o[2]===o[3]):!0}function te(e){return e&&e!=="#fff"&&e!=="#ffffff"&&e!=="rgb(255, 255, 255)"&&e!=="rgba(255, 255, 255, 1)"&&Io(e)&&!/rgba\((?:\d*, ){3}0\)/.test(e)&&e!=="transparent"}function wo(e){const{borderTopColor:o,borderColor:t,backgroundColor:n}=getComputedStyle(e);return te(o)?o:te(t)?t:te(n)?n:null}const _e="ant-wave-target";function ne(e){return Number.isNaN(e)?0:e}const Lo=e=>{const{className:o,target:t,component:n}=e,r=i.useRef(null),[l,s]=i.useState(null),[c,u]=i.useState([]),[d,a]=i.useState(0),[b,S]=i.useState(0),[V,$]=i.useState(0),[x,q]=i.useState(0),[U,X]=i.useState(!1),I={left:d,top:b,width:V,height:x,borderRadius:c.map(h=>`${h}px`).join(" ")};l&&(I["--wave-color"]=l);function N(){const h=getComputedStyle(t);s(wo(t));const f=h.position==="static",{borderLeftWidth:E,borderTopWidth:g}=h;a(f?t.offsetLeft:ne(-parseFloat(E))),S(f?t.offsetTop:ne(-parseFloat(g))),$(t.offsetWidth),q(t.offsetHeight);const{borderTopLeftRadius:m,borderTopRightRadius:_,borderBottomLeftRadius:K,borderBottomRightRadius:Y}=h;u([m,_,Y,K].map(J=>ne(parseFloat(J))))}if(i.useEffect(()=>{if(t){const h=W(()=>{N(),X(!0)});let f;return typeof ResizeObserver<"u"&&(f=new ResizeObserver(N),f.observe(t)),()=>{W.cancel(h),f==null||f.disconnect()}}},[]),!U)return null;const j=(n==="Checkbox"||n==="Radio")&&(t==null?void 0:t.classList.contains(_e));return i.createElement(Re,{visible:!0,motionAppear:!0,motionName:"wave-motion",motionDeadline:5e3,onAppearEnd:(h,f)=>{var E;if(f.deadline||f.propertyName==="opacity"){const g=(E=r.current)===null||E===void 0?void 0:E.parentElement;Oo(g).then(()=>{g==null||g.remove()})}return!1}},h=>{let{className:f}=h;return i.createElement("div",{ref:r,className:O(o,{"wave-quick":j},f),style:I})})},Ro=(e,o)=>{var t;const{component:n}=o;if(n==="Checkbox"&&!(!((t=e.querySelector("input"))===null||t===void 0)&&t.checked))return;const r=document.createElement("div");r.style.position="absolute",r.style.left="0px",r.style.top="0px",e==null||e.insertBefore(r,e==null?void 0:e.firstChild),Co(i.createElement(Lo,Object.assign({},o,{target:e})),r)},zo=Ro;function Ho(e,o,t){const{wave:n}=i.useContext(D),[,r,l]=ze(),s=lo(d=>{const a=e.current;if(n!=null&&n.disabled||!a)return;const b=a.querySelector(`.${_e}`)||a,{showEffect:S}=n||{};(S||zo)(b,{className:o,token:r,component:t,event:d,hashId:l})}),c=i.useRef();return d=>{W.cancel(c.current),c.current=W(()=>{s(d)})}}const To=e=>{const{children:o,disabled:t,component:n}=e,{getPrefixCls:r}=i.useContext(D),l=i.useRef(null),s=r("wave"),[,c]=Bo(s),u=Ho(l,O(s,c),n);if(p.useEffect(()=>{const a=l.current;if(!a||a.nodeType!==1||t)return;const b=S=>{!so(S.target)||!a.getAttribute||a.getAttribute("disabled")||a.disabled||a.className.includes("disabled")||a.className.includes("-leave")||u(S)};return a.addEventListener("click",b,!0),()=>{a.removeEventListener("click",b,!0)}},[t]),!p.isValidElement(o))return o??null;const d=eo(o)?He(o.ref,l):l;return je(o,{ref:d})},No=To;var jo=globalThis&&globalThis.__rest||function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)o.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const We=i.createContext(void 0),_o=e=>{const{getPrefixCls:o,direction:t}=i.useContext(D),{prefixCls:n,size:r,className:l}=e,s=jo(e,["prefixCls","size","className"]),c=o("btn-group",n),[,,u]=ze();let d="";switch(r){case"large":d="lg";break;case"small":d="sm";break}const a=O(c,{[`${c}-${d}`]:d,[`${c}-rtl`]:t==="rtl"},l,u);return i.createElement(We.Provider,{value:r},i.createElement("div",Object.assign({},s,{className:a})))},Wo=_o,Be=/^[\u4e00-\u9fa5]{2}$/,ce=Be.test.bind(Be);function Ie(e){return typeof e=="string"}function re(e){return e==="text"||e==="link"}function Po(e,o){if(e==null)return;const t=o?" ":"";return typeof e!="string"&&typeof e!="number"&&Ie(e.type)&&ce(e.props.children)?je(e,{children:e.props.children.split("").join(t)}):Ie(e)?ce(e)?p.createElement("span",null,e.split("").join(t)):p.createElement("span",null,e):mo(e)?p.createElement("span",null,e):e}function Ao(e,o){let t=!1;const n=[];return p.Children.forEach(e,r=>{const l=typeof r,s=l==="string"||l==="number";if(t&&s){const c=n.length-1,u=n[c];n[c]=`${u}${r}`}else n.push(r);t=s}),p.Children.map(n,r=>Po(r,o))}const Go=i.forwardRef((e,o)=>{const{className:t,style:n,children:r,prefixCls:l}=e,s=O(`${l}-icon`,t);return p.createElement("span",{ref:o,className:s,style:n},r)}),Pe=Go,we=i.forwardRef((e,o)=>{let{prefixCls:t,className:n,style:r,iconClassName:l}=e;const s=O(`${t}-loading-icon`,n);return p.createElement(Pe,{prefixCls:t,className:s,style:r,ref:o},p.createElement(co,{className:l}))}),ie=()=>({width:0,opacity:0,transform:"scale(0)"}),le=e=>({width:e.scrollWidth,opacity:1,transform:"scale(1)"}),Do=e=>{const{prefixCls:o,loading:t,existIcon:n,className:r,style:l}=e,s=!!t;return n?p.createElement(we,{prefixCls:o,className:r,style:l}):p.createElement(Re,{visible:s,motionName:`${o}-loading-icon-motion`,motionLeave:s,removeOnLeave:!0,onAppearStart:ie,onAppearActive:le,onEnterStart:ie,onEnterActive:le,onLeaveStart:le,onLeaveActive:ie},(c,u)=>{let{className:d,style:a}=c;return p.createElement(we,{prefixCls:o,className:r,style:Object.assign(Object.assign({},l),a),ref:u,iconClassName:d})})},Mo=Do,Le=(e,o)=>({[`> span, > ${e}`]:{"&:not(:last-child)":{[`&, & > ${e}`]:{"&:not(:disabled)":{borderInlineEndColor:o}}},"&:not(:first-child)":{[`&, & > ${e}`]:{"&:not(:disabled)":{borderInlineStartColor:o}}}}}),Fo=e=>{const{componentCls:o,fontSize:t,lineWidth:n,groupBorderColor:r,colorErrorHover:l}=e;return{[`${o}-group`]:[{position:"relative",display:"inline-flex",[`> span, > ${o}`]:{"&:not(:last-child)":{[`&, & > ${o}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},"&:not(:first-child)":{marginInlineStart:e.calc(n).mul(-1).equal(),[`&, & > ${o}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}},[o]:{position:"relative",zIndex:1,"&:hover,\n          &:focus,\n          &:active":{zIndex:2},"&[disabled]":{zIndex:0}},[`${o}-icon-only`]:{fontSize:t}},Le(`${o}-primary`,r),Le(`${o}-danger`,l)]}},Vo=Fo,Ae=e=>{const{paddingInline:o,onlyIconSize:t,paddingBlock:n}=e;return M(e,{buttonPaddingHorizontal:o,buttonPaddingVertical:n,buttonIconOnlyFontSize:t})},Ge=e=>{var o,t,n,r,l,s;const c=(o=e.contentFontSize)!==null&&o!==void 0?o:e.fontSize,u=(t=e.contentFontSizeSM)!==null&&t!==void 0?t:e.fontSize,d=(n=e.contentFontSizeLG)!==null&&n!==void 0?n:e.fontSizeLG,a=(r=e.contentLineHeight)!==null&&r!==void 0?r:oe(c),b=(l=e.contentLineHeightSM)!==null&&l!==void 0?l:oe(u),S=(s=e.contentLineHeightLG)!==null&&s!==void 0?s:oe(d);return{fontWeight:400,defaultShadow:`0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,primaryShadow:`0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,dangerShadow:`0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,primaryColor:e.colorTextLightSolid,dangerColor:e.colorTextLightSolid,borderColorDisabled:e.colorBorder,defaultGhostColor:e.colorBgContainer,ghostBg:"transparent",defaultGhostBorderColor:e.colorBgContainer,paddingInline:e.paddingContentHorizontal-e.lineWidth,paddingInlineLG:e.paddingContentHorizontal-e.lineWidth,paddingInlineSM:8-e.lineWidth,onlyIconSize:e.fontSizeLG,onlyIconSizeSM:e.fontSizeLG-2,onlyIconSizeLG:e.fontSizeLG+2,groupBorderColor:e.colorPrimaryHover,linkHoverBg:"transparent",textHoverBg:e.colorBgTextHover,defaultColor:e.colorText,defaultBg:e.colorBgContainer,defaultBorderColor:e.colorBorder,defaultBorderColorDisabled:e.colorBorder,contentFontSize:c,contentFontSizeSM:u,contentFontSizeLG:d,contentLineHeight:a,contentLineHeightSM:b,contentLineHeightLG:S,paddingBlock:Math.max((e.controlHeight-c*a)/2-e.lineWidth,0),paddingBlockSM:Math.max((e.controlHeightSM-u*b)/2-e.lineWidth,0),paddingBlockLG:Math.max((e.controlHeightLG-d*S)/2-e.lineWidth,0)}},qo=e=>{const{componentCls:o,iconCls:t,fontWeight:n}=e;return{[o]:{outline:"none",position:"relative",display:"inline-block",fontWeight:n,whiteSpace:"nowrap",textAlign:"center",backgroundImage:"none",background:"transparent",border:`${z(e.lineWidth)} ${e.lineType} transparent`,cursor:"pointer",transition:`all ${e.motionDurationMid} ${e.motionEaseInOut}`,userSelect:"none",touchAction:"manipulation",color:e.colorText,"&:disabled > *":{pointerEvents:"none"},"> span":{display:"inline-block"},[`${o}-icon`]:{lineHeight:0},[`> ${t} + span, > span + ${t}`]:{marginInlineStart:e.marginXS},[`&:not(${o}-icon-only) > ${o}-icon`]:{[`&${o}-loading-icon, &:not(:last-child)`]:{marginInlineEnd:e.marginXS}},"> a":{color:"currentColor"},"&:not(:disabled)":Object.assign({},to(e)),[`&${o}-two-chinese-chars::first-letter`]:{letterSpacing:"0.34em"},[`&${o}-two-chinese-chars > *:not(${t})`]:{marginInlineEnd:"-0.34em",letterSpacing:"0.34em"},[`&-icon-only${o}-compact-item`]:{flex:"none"}}}},C=(e,o,t)=>({[`&:not(:disabled):not(${e}-disabled)`]:{"&:hover":o,"&:active":t}}),Uo=e=>({minWidth:e.controlHeight,paddingInlineStart:0,paddingInlineEnd:0,borderRadius:"50%"}),Xo=e=>({borderRadius:e.controlHeight,paddingInlineStart:e.calc(e.controlHeight).div(2).equal(),paddingInlineEnd:e.calc(e.controlHeight).div(2).equal()}),Ko=e=>({cursor:"not-allowed",borderColor:e.borderColorDisabled,color:e.colorTextDisabled,background:e.colorBgContainerDisabled,boxShadow:"none"}),H=(e,o,t,n,r,l,s,c)=>({[`&${e}-background-ghost`]:Object.assign(Object.assign({color:t||void 0,background:o,borderColor:n||void 0,boxShadow:"none"},C(e,Object.assign({background:o},s),Object.assign({background:o},c))),{"&:disabled":{cursor:"not-allowed",color:r||void 0,borderColor:l||void 0}})}),de=e=>({[`&:disabled, &${e.componentCls}-disabled`]:Object.assign({},Ko(e))}),De=e=>Object.assign({},de(e)),G=e=>({[`&:disabled, &${e.componentCls}-disabled`]:{cursor:"not-allowed",color:e.colorTextDisabled}}),Me=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},De(e)),{background:e.defaultBg,borderColor:e.defaultBorderColor,color:e.defaultColor,boxShadow:e.defaultShadow}),C(e.componentCls,{color:e.colorPrimaryHover,borderColor:e.colorPrimaryHover},{color:e.colorPrimaryActive,borderColor:e.colorPrimaryActive})),H(e.componentCls,e.ghostBg,e.defaultGhostColor,e.defaultGhostBorderColor,e.colorTextDisabled,e.colorBorder)),{[`&${e.componentCls}-dangerous`]:Object.assign(Object.assign(Object.assign({color:e.colorError,borderColor:e.colorError},C(e.componentCls,{color:e.colorErrorHover,borderColor:e.colorErrorBorderHover},{color:e.colorErrorActive,borderColor:e.colorErrorActive})),H(e.componentCls,e.ghostBg,e.colorError,e.colorError,e.colorTextDisabled,e.colorBorder)),de(e))}),Yo=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},De(e)),{color:e.primaryColor,background:e.colorPrimary,boxShadow:e.primaryShadow}),C(e.componentCls,{color:e.colorTextLightSolid,background:e.colorPrimaryHover},{color:e.colorTextLightSolid,background:e.colorPrimaryActive})),H(e.componentCls,e.ghostBg,e.colorPrimary,e.colorPrimary,e.colorTextDisabled,e.colorBorder,{color:e.colorPrimaryHover,borderColor:e.colorPrimaryHover},{color:e.colorPrimaryActive,borderColor:e.colorPrimaryActive})),{[`&${e.componentCls}-dangerous`]:Object.assign(Object.assign(Object.assign({background:e.colorError,boxShadow:e.dangerShadow,color:e.dangerColor},C(e.componentCls,{background:e.colorErrorHover},{background:e.colorErrorActive})),H(e.componentCls,e.ghostBg,e.colorError,e.colorError,e.colorTextDisabled,e.colorBorder,{color:e.colorErrorHover,borderColor:e.colorErrorHover},{color:e.colorErrorActive,borderColor:e.colorErrorActive})),de(e))}),Jo=e=>Object.assign(Object.assign({},Me(e)),{borderStyle:"dashed"}),Qo=e=>Object.assign(Object.assign(Object.assign({color:e.colorLink},C(e.componentCls,{color:e.colorLinkHover,background:e.linkHoverBg},{color:e.colorLinkActive})),G(e)),{[`&${e.componentCls}-dangerous`]:Object.assign(Object.assign({color:e.colorError},C(e.componentCls,{color:e.colorErrorHover},{color:e.colorErrorActive})),G(e))}),Zo=e=>Object.assign(Object.assign(Object.assign({},C(e.componentCls,{color:e.colorText,background:e.textHoverBg},{color:e.colorText,background:e.colorBgTextActive})),G(e)),{[`&${e.componentCls}-dangerous`]:Object.assign(Object.assign({color:e.colorError},G(e)),C(e.componentCls,{color:e.colorErrorHover,background:e.colorErrorBg},{color:e.colorErrorHover,background:e.colorErrorBg}))}),ko=e=>{const{componentCls:o}=e;return{[`${o}-default`]:Me(e),[`${o}-primary`]:Yo(e),[`${o}-dashed`]:Jo(e),[`${o}-link`]:Qo(e),[`${o}-text`]:Zo(e),[`${o}-ghost`]:H(e.componentCls,e.ghostBg,e.colorBgContainer,e.colorBgContainer,e.colorTextDisabled,e.colorBorder)}},ue=function(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const{componentCls:t,controlHeight:n,fontSize:r,lineHeight:l,borderRadius:s,buttonPaddingHorizontal:c,iconCls:u,buttonPaddingVertical:d}=e,a=`${t}-icon-only`;return[{[`${t}${o}`]:{fontSize:r,lineHeight:l,height:n,padding:`${z(d)} ${z(c)}`,borderRadius:s,[`&${a}`]:{width:n,paddingInlineStart:0,paddingInlineEnd:0,[`&${t}-round`]:{width:"auto"},[u]:{fontSize:e.buttonIconOnlyFontSize}},[`&${t}-loading`]:{opacity:e.opacityLoading,cursor:"default"},[`${t}-loading-icon`]:{transition:`width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`}}},{[`${t}${t}-circle${o}`]:Uo(e)},{[`${t}${t}-round${o}`]:Xo(e)}]},et=e=>ue(M(e,{fontSize:e.contentFontSize,lineHeight:e.contentLineHeight})),ot=e=>{const o=M(e,{controlHeight:e.controlHeightSM,fontSize:e.contentFontSizeSM,lineHeight:e.contentLineHeightSM,padding:e.paddingXS,buttonPaddingHorizontal:e.paddingInlineSM,buttonPaddingVertical:e.paddingBlockSM,borderRadius:e.borderRadiusSM,buttonIconOnlyFontSize:e.onlyIconSizeSM});return ue(o,`${e.componentCls}-sm`)},tt=e=>{const o=M(e,{controlHeight:e.controlHeightLG,fontSize:e.contentFontSizeLG,lineHeight:e.contentLineHeightLG,buttonPaddingHorizontal:e.paddingInlineLG,buttonPaddingVertical:e.paddingBlockLG,borderRadius:e.borderRadiusLG,buttonIconOnlyFontSize:e.onlyIconSizeLG});return ue(o,`${e.componentCls}-lg`)},nt=e=>{const{componentCls:o}=e;return{[o]:{[`&${o}-block`]:{width:"100%"}}}},rt=oo("Button",e=>{const o=Ae(e);return[qo(o),ot(o),et(o),tt(o),nt(o),ko(o),Vo(o)]},Ge,{unitless:{fontWeight:!0,contentLineHeight:!0,contentLineHeightSM:!0,contentLineHeightLG:!0}});function it(e,o){return{[`&-item:not(${o}-last-item)`]:{marginBottom:e.calc(e.lineWidth).mul(-1).equal()},"&-item":{"&:hover,&:focus,&:active":{zIndex:2},"&[disabled]":{zIndex:0}}}}function lt(e,o){return{[`&-item:not(${o}-first-item):not(${o}-last-item)`]:{borderRadius:0},[`&-item${o}-first-item:not(${o}-last-item)`]:{[`&, &${e}-sm, &${e}-lg`]:{borderEndEndRadius:0,borderEndStartRadius:0}},[`&-item${o}-last-item:not(${o}-first-item)`]:{[`&, &${e}-sm, &${e}-lg`]:{borderStartStartRadius:0,borderStartEndRadius:0}}}}function st(e){const o=`${e.componentCls}-compact-vertical`;return{[o]:Object.assign(Object.assign({},it(e,o)),lt(e.componentCls,o))}}const at=e=>{const{componentCls:o,calc:t}=e;return{[o]:{[`&-compact-item${o}-primary`]:{[`&:not([disabled]) + ${o}-compact-item${o}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:t(e.lineWidth).mul(-1).equal(),insetInlineStart:t(e.lineWidth).mul(-1).equal(),display:"inline-block",width:e.lineWidth,height:`calc(100% + ${z(e.lineWidth)} * 2)`,backgroundColor:e.colorPrimaryHover,content:'""'}}},"&-compact-vertical-item":{[`&${o}-primary`]:{[`&:not([disabled]) + ${o}-compact-vertical-item${o}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:t(e.lineWidth).mul(-1).equal(),insetInlineStart:t(e.lineWidth).mul(-1).equal(),display:"inline-block",width:`calc(100% + ${z(e.lineWidth)} * 2)`,height:e.lineWidth,backgroundColor:e.colorPrimaryHover,content:'""'}}}}}}},ct=no(["Button","compact"],e=>{const o=Ae(e);return[uo(o),st(o),at(o)]},Ge);var dt=globalThis&&globalThis.__rest||function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)o.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};function ut(e){if(typeof e=="object"&&e){let o=e==null?void 0:e.delay;return o=!Number.isNaN(o)&&typeof o=="number"?o:0,{loading:o<=0,delay:o}}return{loading:!!e,delay:0}}const gt=(e,o)=>{var t,n;const{loading:r=!1,prefixCls:l,type:s="default",danger:c,shape:u="default",size:d,styles:a,disabled:b,className:S,rootClassName:V,children:$,icon:x,ghost:q=!1,block:U=!1,htmlType:X="button",classNames:I,style:N={}}=e,j=dt(e,["loading","prefixCls","type","danger","shape","size","styles","disabled","className","rootClassName","children","icon","ghost","block","htmlType","classNames","style"]),{getPrefixCls:h,autoInsertSpaceInButton:f,direction:E,button:g}=i.useContext(D),m=h("btn",l),[_,K,Y]=rt(m),J=i.useContext(ro),L=b??J,Fe=i.useContext(We),R=i.useMemo(()=>ut(r),[r]),[B,me]=i.useState(R.loading),[Q,pe]=i.useState(!1),w=He(o,i.createRef()),fe=i.Children.count($)===1&&!x&&!re(s);i.useEffect(()=>{let v=null;R.delay>0?v=setTimeout(()=>{v=null,me(!0)},R.delay):me(R.loading);function y(){v&&(clearTimeout(v),v=null)}return y},[R]),i.useEffect(()=>{if(!w||!w.current||f===!1)return;const v=w.current.textContent;fe&&ce(v)?Q||pe(!0):Q&&pe(!1)},[w]);const be=v=>{const{onClick:y}=e;if(B||L){v.preventDefault();return}y==null||y(v)},he=f!==!1,{compactSize:Ve,compactItemClassnames:ve}=go(m,E),qe={large:"lg",small:"sm",middle:void 0},Se=ao(v=>{var y,ee;return(ee=(y=d??Ve)!==null&&y!==void 0?y:Fe)!==null&&ee!==void 0?ee:v}),ye=Se&&qe[Se]||"",Ue=B?"loading":x,Z=io(j,["navigate"]),Ce=O(m,K,Y,{[`${m}-${u}`]:u!=="default"&&u,[`${m}-${s}`]:s,[`${m}-${ye}`]:ye,[`${m}-icon-only`]:!$&&$!==0&&!!Ue,[`${m}-background-ghost`]:q&&!re(s),[`${m}-loading`]:B,[`${m}-two-chinese-chars`]:Q&&he&&!B,[`${m}-block`]:U,[`${m}-dangerous`]:!!c,[`${m}-rtl`]:E==="rtl"},ve,S,V,g==null?void 0:g.className),$e=Object.assign(Object.assign({},g==null?void 0:g.style),N),Xe=O(I==null?void 0:I.icon,(t=g==null?void 0:g.classNames)===null||t===void 0?void 0:t.icon),Ke=Object.assign(Object.assign({},(a==null?void 0:a.icon)||{}),((n=g==null?void 0:g.styles)===null||n===void 0?void 0:n.icon)||{}),Ee=x&&!B?p.createElement(Pe,{prefixCls:m,className:Xe,style:Ke},x):p.createElement(Mo,{existIcon:!!x,prefixCls:m,loading:!!B}),Oe=$||$===0?Ao($,fe&&he):null;if(Z.href!==void 0)return _(p.createElement("a",Object.assign({},Z,{className:O(Ce,{[`${m}-disabled`]:L}),href:L?void 0:Z.href,style:$e,onClick:be,ref:w,tabIndex:L?-1:0}),Ee,Oe));let k=p.createElement("button",Object.assign({},j,{type:X,className:Ce,style:$e,onClick:be,disabled:L,ref:w}),Ee,Oe,!!ve&&p.createElement(ct,{key:"compact",prefixCls:m}));return re(s)||(k=p.createElement(No,{component:"Button",disabled:!!B},k)),_(k)},ge=i.forwardRef(gt);ge.Group=Wo;ge.__ANT_BUTTON=!0;const vt=ge;export{vt as B,_e as T,No as W,mo as a,je as c,Ne as i};
