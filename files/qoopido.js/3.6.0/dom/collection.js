/*!
* Qoopido.js library v3.6.0, 2014-12-2
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(e){window.qoopido.register("dom/collection",e,["../base","./element"])}(function(e,t,n,r,l,o,s){"use strict";function i(){for(var e,t=this,n=t.elements,r=o.createDocumentFragment(),l=0;(e=n[l])!==s;l++)r.appendChild(e.element);return r}function c(e){for(var t,n=this,r=n.elements,l=Array.prototype.slice.call(arguments,1),o=0;(t=r[o])!==s;o++)t[e].apply(t,l);return n}function a(e,t){var n=this;return e=e&&e.element?e:p&&p.obtain(e)||u.create(e),e&&(e[t].call(e,i.call(n)),e.dispose&&e.dispose()),n}var u=e["dom/element"],p=e["pool/module"]&&e["pool/module"].create(u,null,!0)||null;return e.base.extend({elements:null,_constructor:function(e,t,n){var r,l,i,c,a=this;if(a.elements=[],e&&"string"==typeof e)for(r=e.split(","),e=[],i=0;(l=r[i])!==s;i++)try{e=e.concat(Array.prototype.slice.call(o.querySelectorAll(l)))}catch(f){}for(i=0;(c=e[i])!==s;i++)a.elements.push(p&&p.obtain(c)||u.create(c));"object"==typeof t&&null!==t&&a.setAttributes(t),"object"==typeof n&&null!==n&&a.setStyles(n)},get:function(e){return this.elements[e]||null},each:function(e){for(var t,n=this,r=n.elements,l=0;(t=r[l])!==s;l++)e.call(t,l);return n},setAttribute:function(e,t){return c.call(this,"setAttribute",e,t)},setAttributes:function(e){return c.call(this,"setAttributes",e)},removeAttribute:function(e){return c.call(this,"removeAttribute",e)},removeAttributes:function(e){return c.call(this,"removeAttributes",e)},setStyle:function(e,t){return c.call(this,"setStyle",e,t)},setStyles:function(e){return c.call(this,"setStyles",e)},removeStyle:function(e){return c.call(this,"removeStyle",e)},removeStyles:function(e){return c.call(this,"removeStyles",e)},addClass:function(e){return c.call(this,"addClass",e)},removeClass:function(e){return c.call(this,"removeClass",e)},toggleClass:function(e){return c.call(this,"toggleClass",e)},prependTo:function(e){return a.call(this,e,"prepend")},appendTo:function(e){return a.call(this,e,"append")},insertBefore:function(e){var t=this;return e=e&&e.element?e:p&&p.obtain(e)||u.create(e),e&&(e.element.parentNode.insertBefore(i.call(t),e.element),e.dispose&&e.dispose()),t},insertAfter:function(e){var t=this;return e=e&&e.element?e:p&&p.obtain(e)||u.create(e),e&&(e.element.nextSibling?e.element.parentNode.insertBefore(i.call(t),e.element.nextSibling):e.element.appendChild(i.call(t)),e.dispose&&e.dispose()),t},replace:function(e){for(var t,n=this,r=n.elements,l=0;(t=r[l])!==s;l++)0===l?t.replace(e):t.insertAfter(r[l-1]);return n},hide:function(){return c.call(this,"hide")},show:function(){return c.call(this,"show")},remove:function(e){var t,n,r=this,l=r.elements;if(!e&&0!==e||(n=r.elements[e])===s)for(t=l.length-1;(n=l[t])!==s;t--)n.remove(),n.dispose&&n.dispose(),l.pop();else n.remove(),n.dispose&&n.dispose(),l.splice(e,1);return r},on:function(){return c.apply(this,["on"].concat(Array.prototype.slice.call(arguments)))},one:function(){return c.apply(this,["one"].concat(Array.prototype.slice.call(arguments)))},off:function(){return c.apply(this,["off"].concat(Array.prototype.slice.call(arguments)))},emit:function(){return c.apply(this,["emit"].concat(Array.prototype.slice.call(arguments)))}})});