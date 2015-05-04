/*!
* Qoopido.js library v3.6.3, 2015-4-24
* https://github.com/dlueth/qoopido.js
* (c) 2015 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(t){window.qoopido.registerSingleton("transport/jsonp",t,["../transport","../function/merge","../function/unique/uuid","../url","../dom/element","../promise/defer"])}(function(t,e,i,n,o,c){"use strict";function r(t,e){var i=this,n=i.dfd,c=i.script,r=i.settings;e="object"==typeof e?i.serialize(e):e,t="".concat(t,t.indexOf("?")>-1?"&":"?","".concat(r.callback,"=",i.id)),t=r.cache===!1?"".concat(t,t.indexOf("?")>-1?"&":"?","".concat("_=",(new Date).getTime().toString())):t,t=e?"".concat(t,t.indexOf("?")>-1?"&":"?",e):t,o[i.id]=function(t){try{delete o[i.id]}catch(e){o[i.id]=null}d.call(i),n.resolve(t)},c.on("load readystatechange",function(t){s.call(i,t)}).one("error",function(){a.call(i)}).setAttribute("src",t),p.appendChild(c.element),i.timeout=setTimeout(function(){l.call(i)},r.timeout)}function s(t){var e=this,i=e.dfd;t.readyState&&"loaded"!==t.readyState&&"complete"!==t.readyState||e.script.off()&&e.script.element.dispose&&e.script.element.dispose(),e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout(function(){l.call(e)},e.settings.timeout),i.notify(t)}function a(){var t=this;d.call(t),t.dfd.reject()}function l(){var t=this;d.call(t),t.dfd.reject(!1)}function d(){var t=this;t.timeout&&clearTimeout(t.timeout),t.script.off()&&t.script.element.dispose&&t.script.element.dispose()}var u,m=t["promise/defer"],f=e.pool&&e.pool.dom,p=c.getElementsByTagName("head")[0];return u=t.transport.extend({_settings:{callback:"callback",cache:!1,timeout:5e3},load:function(e,i,n){var o={};return e=t.url.resolve(e),o.id="".concat("jsonp-",t["function/unique/string"]()),o.dfd=new m,o.script=t["dom/element"].create(f?f.obtain("script"):c.createElement("script")),o.settings=t["function/merge"]({},this._settings,n),o.timeout=null,o.script.setAttribute("async",!0),r.call(o,e,i),o.dfd.promise}})},window,document);