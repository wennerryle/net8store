"use strict";(()=>{var vt=Object.defineProperty;var bt=Object.getOwnPropertyDescriptor;var E=(r,t,e,s)=>{for(var i=s>1?void 0:s?bt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&vt(t,e,i),i};var B=globalThis,L=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),st=new WeakMap,P=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(L&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=st.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&st.set(e,t))}return t}toString(){return this.cssText}},it=r=>new P(typeof r=="string"?r:r+"",void 0,V),y=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new P(e,r,V)},W=(r,t)=>{if(L)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=B.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},j=L?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return it(e)})(r):r;var{is:St,defineProperty:Et,getOwnPropertyDescriptor:xt,getOwnPropertyNames:wt,getOwnPropertySymbols:Ct,getPrototypeOf:Pt}=Object,z=globalThis,rt=z.trustedTypes,Ut=rt?rt.emptyScript:"",Ot=z.reactiveElementPolyfillSupport,U=(r,t)=>r,O={toAttribute(r,t){switch(t){case Boolean:r=r?Ut:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},q=(r,t)=>!St(r,t),ot={attribute:!0,type:String,converter:O,reflect:!1,hasChanged:q};Symbol.metadata??=Symbol("metadata"),z.litPropertyMetadata??=new WeakMap;var f=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ot){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Et(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:o}=xt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i?.call(this)},set(n){let c=i?.call(this);o.call(this,n),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ot}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;let t=Pt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){let e=this.properties,s=[...wt(e),...Ct(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(j(i))}else t!==void 0&&e.push(j(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return W(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:O).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:O;this._$Em=i,this[i]=n.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??q)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,o]of s)o.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],o)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}};f.elementStyles=[],f.shadowRootOptions={mode:"open"},f[U("elementProperties")]=new Map,f[U("finalized")]=new Map,Ot?.({ReactiveElement:f}),(z.reactiveElementVersions??=[]).push("2.0.4");var X=globalThis,D=X.trustedTypes,nt=D?D.createPolicy("lit-html",{createHTML:r=>r}):void 0,dt="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,ut="?"+_,Rt=`<${ut}>`,b=document,T=()=>b.createComment(""),H=r=>r===null||typeof r!="object"&&typeof r!="function",Y=Array.isArray,Tt=r=>Y(r)||typeof r?.[Symbol.iterator]=="function",K=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,at=/-->/g,ht=/>/g,A=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ct=/'/g,lt=/"/g,mt=/^(?:script|style|textarea|title)$/i,tt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),et=tt(1),It=tt(2),Vt=tt(3),S=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),pt=new WeakMap,v=b.createTreeWalker(b,129);function ft(r,t){if(!Y(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return nt!==void 0?nt.createHTML(t):t}var Ht=(r,t)=>{let e=r.length-1,s=[],i,o=t===2?"<svg>":t===3?"<math>":"",n=R;for(let c=0;c<e;c++){let a=r[c],l,d,h=-1,m=0;for(;m<a.length&&(n.lastIndex=m,d=n.exec(a),d!==null);)m=n.lastIndex,n===R?d[1]==="!--"?n=at:d[1]!==void 0?n=ht:d[2]!==void 0?(mt.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=A):d[3]!==void 0&&(n=A):n===A?d[0]===">"?(n=i??R,h=-1):d[1]===void 0?h=-2:(h=n.lastIndex-d[2].length,l=d[1],n=d[3]===void 0?A:d[3]==='"'?lt:ct):n===lt||n===ct?n=A:n===at||n===ht?n=R:(n=A,i=void 0);let $=n===A&&r[c+1].startsWith("/>")?" ":"";o+=n===R?a+Rt:h>=0?(s.push(l),a.slice(0,h)+dt+a.slice(h)+_+$):a+_+(h===-2?c:$)}return[ft(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},N=class r{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0,c=t.length-1,a=this.parts,[l,d]=Ht(t,e);if(this.el=r.createElement(l,s),v.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=v.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(dt)){let m=d[n++],$=i.getAttribute(h).split(_),M=/([.?@])?(.*)/.exec(m);a.push({type:1,index:o,name:M[2],strings:$,ctor:M[1]==="."?Z:M[1]==="?"?J:M[1]==="@"?G:w}),i.removeAttribute(h)}else h.startsWith(_)&&(a.push({type:6,index:o}),i.removeAttribute(h));if(mt.test(i.tagName)){let h=i.textContent.split(_),m=h.length-1;if(m>0){i.textContent=D?D.emptyScript:"";for(let $=0;$<m;$++)i.append(h[$],T()),v.nextNode(),a.push({type:2,index:++o});i.append(h[m],T())}}}else if(i.nodeType===8)if(i.data===ut)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(_,h+1))!==-1;)a.push({type:7,index:o}),h+=_.length-1}o++}}static createElement(t,e){let s=b.createElement("template");return s.innerHTML=t,s}};function x(r,t,e=r,s){if(t===S)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,o=H(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=x(r,i._$AS(r,t.values),i,s)),t}var F=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??b).importNode(e,!0);v.currentNode=i;let o=v.nextNode(),n=0,c=0,a=s[0];for(;a!==void 0;){if(n===a.index){let l;a.type===2?l=new k(o,o.nextSibling,this,t):a.type===1?l=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(l=new Q(o,this,t)),this._$AV.push(l),a=s[++c]}n!==a?.index&&(o=v.nextNode(),n++)}return v.currentNode=b,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},k=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),H(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Tt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=N.createElement(ft(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let o=new F(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=pt.get(t.strings);return e===void 0&&pt.set(t.strings,e=new N(t)),e}k(t){Y(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let o of t)i===e.length?e.push(s=new r(this.O(T()),this.O(T()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},w=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,i){let o=this.strings,n=!1;if(o===void 0)t=x(this,t,e,0),n=!H(t)||t!==this._$AH&&t!==S,n&&(this._$AH=t);else{let c=t,a,l;for(t=o[0],a=0;a<o.length-1;a++)l=x(this,c[s+a],e,a),l===S&&(l=this._$AH[a]),n||=!H(l)||l!==this._$AH[a],l===p?t=p:t!==p&&(t+=(l??"")+o[a+1]),this._$AH[a]=l}n&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Z=class extends w{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},J=class extends w{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},G=class extends w{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=x(this,t,e,0)??p)===S)return;let s=this._$AH,i=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Q=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}};var Nt=X.litHtmlPolyfillSupport;Nt?.(N,k),(X.litHtmlVersions??=[]).push("3.2.1");var $t=(r,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let o=e?.renderBefore??null;s._$litPart$=i=new k(t.insertBefore(T(),o),o,void 0,e??{})}return i._$AI(r),i};var g=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$t(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}};g._$litElement$=!0,g.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:g});var kt=globalThis.litElementPolyfillSupport;kt?.({LitElement:g});(globalThis.litElementVersions??=[]).push("4.1.1");var _t=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var Mt={attribute:!0,type:String,converter:O,reflect:!1,hasChanged:q},Bt=(r=Mt,t,e)=>{let{kind:s,metadata:i}=e,o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(e.name,r),s==="accessor"){let{name:n}=e;return{set(c){let a=t.get.call(this);t.set.call(this,c),this.requestUpdate(n,a,r)},init(c){return c!==void 0&&this.P(n,void 0,r),c}}}if(s==="setter"){let{name:n}=e;return function(c){let a=this[n];t.call(this,c),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+s)};function C(r){return(t,e)=>typeof e=="object"?Bt(r,t,e):((s,i,o)=>{let n=i.hasOwnProperty(o);return i.constructor.createProperty(o,n?{...s,wrapped:!0}:s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}var gt=y`
  button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.2s;
  }
`,yt=y`
  .primary-button {
    background-color: #2c5282;
    color: white;
  }

  .primary-button:hover {
    background-color: #2a4365;
  }
`,At=y`
  .secondary-button {
    background-color: #e2e8f0;
    color: #2d3748;
  }

  .secondary-button:hover {
    background-color: #cbd5e0;
  }
`;var u=class extends g{constructor(){super(...arguments);this.title="Product Title";this.description="Product description goes here";this.cost="$0.00";this.imageUrl=""}render(){return et`
      ${this.imageUrl&&et`<img
        class="product-image"
        src=${this.imageUrl}
        alt=${this.title}
      />`}
      <h2 class="product-title">${this.title}</h2>
      <p class="product-description">${this.description}</p>
      <p class="product-cost">${this.cost}</p>
      <div class="product-actions">
        <button class="primary-button" @click=${this._onBuyClick}>
          Купить сейчас
        </button>
        <button class="secondary-button" @click=${this._onCartClick}>
          Добавить в корзину
        </button>
      </div>
    `}_onBuyClick(){this.dispatchEvent(new CustomEvent("buy-click"))}_onCartClick(){this.dispatchEvent(new CustomEvent("cart-click"))}};u.styles=[gt,yt,At,y`
      :host {
        outline: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 16px;
        font-family: Arial, sans-serif;
      }

      .product-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 4px;
        margin-bottom: 12px;
      }

      .product-title {
        font-size: 18px;
        font-weight: bold;
        margin: 0 0 8px 0;
        color: #333;
      }

      .product-description {
        font-size: 14px;
        color: #666;
        margin: 0 0 12px 0;
        line-height: 1.4;
      }

      .product-cost {
        font-size: 20px;
        font-weight: bold;
        color: #2c5282;
        margin: 0;
      }

      .product-actions {
        margin-top: 16px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .primary-button,
      .secondary-button {
        flex: 1;
        min-width: max-content;
      }
    `],E([C()],u.prototype,"title",2),E([C()],u.prototype,"description",2),E([C()],u.prototype,"cost",2),E([C()],u.prototype,"imageUrl",2),u=E([_t("product-card")],u);})();
