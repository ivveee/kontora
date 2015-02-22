(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
require('./lib/ui');

require('./parts/grid');
require('./parts/inner');

}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_e938bf27.js","/")
},{"+7ZJp0":8,"./lib/ui":2,"./parts/grid":3,"./parts/inner":4,"buffer":5}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*! jQuery UI - v1.10.4 - 2014-06-06
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(e,t){function i(t,i){var s,a,o,r=t.nodeName.toLowerCase();return"area"===r?(s=t.parentNode,a=s.name,t.href&&a&&"map"===s.nodeName.toLowerCase()?(o=e("img[usemap=#"+a+"]")[0],!!o&&n(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||i:i)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var s=0,a=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,n){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),n&&n.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var n,s,a=e(this[0]);a.length&&a[0]!==document;){if(n=a.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(s=parseInt(a.css("zIndex"),10),!isNaN(s)&&0!==s))return s;a=a.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++s)})},removeUniqueId:function(){return this.each(function(){a.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,n){return!!e.data(t,n[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),s=isNaN(n);return(s||n>=0)&&i(t,!s)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,n){function s(t,i,n,s){return e.each(a,function(){i-=parseFloat(e.css(t,"padding"+this))||0,n&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var a="Width"===n?["Left","Right"]:["Top","Bottom"],o=n.toLowerCase(),r={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(i){return i===t?r["inner"+n].call(this):this.each(function(){e(this).css(o,s(this,i)+"px")})},e.fn["outer"+n]=function(t,i){return"number"!=typeof t?r["outer"+n].call(this,t):this.each(function(){e(this).css(o,s(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,n){var s,a=e.ui[t].prototype;for(s in n)a.plugins[s]=a.plugins[s]||[],a.plugins[s].push([i,n[s]])},call:function(e,t,i){var n,s=e.plugins[t];if(s&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(n=0;s.length>n;n++)e.options[s[n][0]]&&s[n][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return t[n]>0?!0:(t[n]=1,s=t[n]>0,t[n]=0,s)}})})(jQuery);(function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,h,l={},c=i.split(".")[0];i=i.split(".")[1],o=c+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(i,n){return t.isFunction(n)?(l[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(l[i]=n,e)}),r.prototype=t.widget.extend(h,{widgetEventPrefix:a?h.widgetEventPrefix||i:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,h=a.length;h>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,h=s.call(arguments,1),l=this;return a=!r&&h.length?t.widget.extend.apply(null,[a].concat(h)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),1===arguments.length)return o[i]===e?null:o[i];o[i]=s}else{if(1===arguments.length)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function h(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?o.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})})(jQuery);(function(t){var e=!1;t(document).mouseup(function(){e=!1}),t.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!e){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return s._mouseMove(t)},this._mouseUpDelegate=function(t){return s._mouseUp(t)},t(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),e=!0,!0)):!0}},_mouseMove:function(e){return t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button?this._mouseUp(e):this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(t){t.widget("ui.draggable",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(t(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(t(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_mouseDrag:function(e,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"original"!==this.options.helper||t.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1):!1},_mouseUp:function(e){return t("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.element.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;return n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===n.containment?(this.containment=[0,0,t(document).width()-this.helperProportions.width-this.margins.left,(t(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):n.containment.constructor===Array?(this.containment=n.containment,undefined):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i),undefined):(this.containment=null,undefined)},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:n.scrollTop(),left:n.scrollLeft()}),{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*s}},_generatePosition:function(e){var i,s,n,a,o=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=e.pageX,h=e.pageY;return this.offset.scroll||(this.offset.scroll={top:r.scrollTop(),left:r.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(h=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(h=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,h=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,l=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s]),"drag"===e&&(this.positionAbs=this._convertPositionTo("absolute")),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i){var s=t(this).data("ui-draggable"),n=s.options,a=t.extend({},i,{item:s.element});s.sortables=[],t(n.connectToSortable).each(function(){var i=t.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",e,a))})},stop:function(e,i){var s=t(this).data("ui-draggable"),n=t.extend({},i,{item:s.element});t.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(e),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",e,n))})},drag:function(e,i){var s=t(this).data("ui-draggable"),n=this;t.each(s.sortables,function(){var a=!1,o=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(a=!0,t.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&t.contains(o.instance.element[0],this.instance.element[0])&&(a=!1),a})),a?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},e.target=this.instance.currentItem[0],this.instance._mouseCapture(e,!0),this.instance._mouseStart(e,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",e),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(e)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",e,this.instance._uiHash(this.instance)),this.instance._mouseStop(e,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",e),s.dropped=!1)})}}),t.ui.plugin.add("draggable","cursor",{start:function(){var e=t("body"),i=t(this).data("ui-draggable").options;e.css("cursor")&&(i._cursor=e.css("cursor")),e.css("cursor",i.cursor)},stop:function(){var e=t(this).data("ui-draggable").options;e._cursor&&t("body").css("cursor",e._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i){var s=t(i.helper),n=t(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(e,i){var s=t(this).data("ui-draggable").options;s._opacity&&t(i.helper).css("opacity",s._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(){var e=t(this).data("ui-draggable");e.scrollParent[0]!==document&&"HTML"!==e.scrollParent[0].tagName&&(e.overflowOffset=e.scrollParent.offset())},drag:function(e){var i=t(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-e.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:e.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-e.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:e.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(e.pageY-t(document).scrollTop()<s.scrollSensitivity?n=t(document).scrollTop(t(document).scrollTop()-s.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<s.scrollSensitivity&&(n=t(document).scrollTop(t(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(e.pageX-t(document).scrollLeft()<s.scrollSensitivity?n=t(document).scrollLeft(t(document).scrollLeft()-s.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<s.scrollSensitivity&&(n=t(document).scrollLeft(t(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(i,e)}}),t.ui.plugin.add("draggable","snap",{start:function(){var e=t(this).data("ui-draggable"),i=e.options;e.snapElements=[],t(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=t(this),s=i.offset();this!==e.element[0]&&e.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(e,i){var s,n,a,o,r,l,h,c,u,d,p=t(this).data("ui-draggable"),g=p.options,f=g.snapTolerance,m=i.offset.left,_=m+p.helperProportions.width,v=i.offset.top,b=v+p.helperProportions.height;for(u=p.snapElements.length-1;u>=0;u--)r=p.snapElements[u].left,l=r+p.snapElements[u].width,h=p.snapElements[u].top,c=h+p.snapElements[u].height,r-f>_||m>l+f||h-f>b||v>c+f||!t.contains(p.snapElements[u].item.ownerDocument,p.snapElements[u].item)?(p.snapElements[u].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,e,t.extend(p._uiHash(),{snapItem:p.snapElements[u].item})),p.snapElements[u].snapping=!1):("inner"!==g.snapMode&&(s=f>=Math.abs(h-b),n=f>=Math.abs(c-v),a=f>=Math.abs(r-_),o=f>=Math.abs(l-m),s&&(i.position.top=p._convertPositionTo("relative",{top:h-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:c,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:l}).left-p.margins.left)),d=s||n||a||o,"outer"!==g.snapMode&&(s=f>=Math.abs(h-v),n=f>=Math.abs(c-b),a=f>=Math.abs(r-m),o=f>=Math.abs(l-_),s&&(i.position.top=p._convertPositionTo("relative",{top:h,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:c-p.helperProportions.height,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:l-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[u].snapping&&(s||n||a||o||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,e,t.extend(p._uiHash(),{snapItem:p.snapElements[u].item})),p.snapElements[u].snapping=s||n||a||o||d)}}),t.ui.plugin.add("draggable","stack",{start:function(){var e,i=this.data("ui-draggable").options,s=t.makeArray(t(i.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});s.length&&(e=parseInt(t(s[0]).css("zIndex"),10)||0,t(s).each(function(i){t(this).css("zIndex",e+i)}),this.css("zIndex",e+s.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i){var s=t(i.helper),n=t(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(e,i){var s=t(this).data("ui-draggable").options;s._zIndex&&t(i.helper).css("zIndex",s._zIndex)}})})(jQuery);

}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/lib/ui.js","/lib")
},{"+7ZJp0":8,"buffer":5}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';
$(function() {
  // not understood yet
  var h = $('.itemb').first().height();
  $('.itemb').css('line-height', h + 'px');

  var $swText = $('.switcher_text'),
    $swImg = $('.switcher_image'),
    // selection var for picture-text mode
    CLASS_TEXT = 'rt';

  // services picture mode and text mode buttons
  // puts current status to cookie
  $swText.on('click', function() {
    $('body').addClass(CLASS_TEXT);
    $.cookie('switcher', 'textPosition', { path: '/' });
    // if ($article.length) $article.trigger('text');
    return false;
  });
  $swImg.on('click', function() {
    $('body').removeClass(CLASS_TEXT);
    $.cookie('switcher', 'imagePosition', { path: '/' });
    // if ($article.length) $article.trigger('image');
    return false;
  });

  // processes current cookie 
  if ($.cookie('switcher') === 'textPosition') {
    $swText.trigger('click');
  }
  if ($.cookie('switcher') === 'imagePosition') {
    $swImg.trigger('click');
  }

  // The idea is that text and images "float" on the background
  // as background is clicked we fall back to home page
  // So grid objects should show "cursor:pointer" imitating a link
  // parse kirbytext'ed text, wrapping text between br's with <span>
  $('.js__article-holder p').contents().filter(function(){
    return this.nodeType === 3;
  }).wrap('<span class="js__article-text-spanned"/>');
  // if anything outside div is clicked - getting back to home
  $('.js__article-box').on('click', function(e){
    e.stopPropagation();
    //set to "return to home" to everything except text and image and header wrapped in dt and dd
    if( !($(e.target).hasClass('js__article-text-spanned') || $(e.target).is('img') || 
          $(e.target).is('dt') || $(e.target).is('dd') ) ) { 
        window.location.href = "/";
    }
  });

  // as is 
  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // as is -- turned off
  function logoReposition() {
    $('.logo').css({
      'background-position': getRandomInt(-10, 110) + '% 50%'
    })
  }
  // logoReposition();

  // serva thumbnail imagini alla "home" pagina
  $('.js__grid').each(function() {
    var $grid = $(this),
      $items = $grid.find('.js__item'),
      $rearranger = $('.js__rearrange'),
      windowWidth,
      windowHeight,
      itemWidth = 150,
      itemHeight = 150,
      maxOffsetX,
      maxOffsetY,
      resizeTimeout,
      z = 100,
      COLS = 7,
      ROWS = 6,
      CLASS_STILL = 'is__still';

    function recalc() {
                  //alert("recalc");

      windowWidth = $grid.width();
      windowHeight = $grid.height();
      // itemWidth = parseInt(windowWidth/COLS);
      // itemHeight = parseInt(windowHeight/ROWS);
      maxOffsetX = windowWidth - itemWidth;
      maxOffsetY = windowHeight - itemHeight - 61;
    }

    // rearranges items using getRandomInt
    function rearrange(force, type) {
      var alpha = 0;
      var rad = maxOffsetY*0.6;
      $items.each(function() {
        alpha+=Math.PI/8;
        rad-=10;
        //read data from cookies
        var id = $(this).attr('id'),
          offsetLeft = $.cookie(id + '_left'), // ATTNT! In percent of window
          offsetTop = $.cookie(id + '_top');
        //if there isn't data get a random
        if (!offsetLeft || force) {
          var  offsetLeft = getRandomInt(0, maxOffsetX)/windowWidth * 100;
          if (type === "spyral")
            offsetLeft = (maxOffsetX/2 + Math.sin(alpha)*rad)/windowWidth * 100;
          $.cookie(id + '_left', offsetLeft, { expires: 1 });
        }
        if (!offsetTop || force) {
          offsetTop = getRandomInt(0, maxOffsetY)/windowHeight * 100;
          if (type === "spyral")
            var offsetTop = ((maxOffsetY)/2 + Math.cos(alpha)*rad)/windowHeight * 100;
          $.cookie(id + '_top', offsetTop, { expires: 1 });
        }
        $(this).css({
          width: itemWidth,
          left: offsetLeft + '%',
          top: offsetTop + '%'
        });
      });
    }

        // rearranges items spyral
    function rearrangeSpyral() {
      var alpha=0;
      var rad=maxOffsetY*0.6;
      $items.each(function() {
        var id = $(this).attr('id');
        var offsetLeft = (maxOffsetX/2 + Math.sin(alpha)*rad)/windowWidth * 100;
        $.cookie(id + '_left', offsetLeft, { expires: 1 });
        var offsetTop = ((maxOffsetY)/2 + Math.cos(alpha)*rad)/windowHeight * 100;
        $.cookie(id + '_top', offsetTop, { expires: 1 });
        alpha+=Math.PI/8;
        rad-=5;
        $(this).css({
          width: itemWidth,
          left: offsetLeft + '%',
          top: offsetTop + '%'
        });
      });
    }

    // aspetta per una seconda quando ha ricesto l'evento "resize" e ricalcolare i variabili
    $(window).on('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function() {
        recalc();
        // rearrange();
      }, 100)
    });

    // sets up thumbnails as jQuery UI items
    $items.draggable({
      containment: '#grid',
      scroll: false,
      start: function(event, ui) {
        ui.helper.addClass(CLASS_STILL);
        ui.helper.css('z-index', z++);
      },
      stop: function(event, ui) {
        var id = ui.helper.attr('id');
        $.cookie(id + '_left', ui.position.left / windowWidth * 100, { expires: 1 });
        $.cookie(id + '_top', ui.position.top / windowHeight * 100, { expires: 1 });
        ui.helper.removeClass(CLASS_STILL);
      }
    });

    // rearranges thumbnails on SPACE
    $(document).on('keydown', function(e) {
      if (e.keyCode == 32) {
        rearrange(true);      
      }

      if (e.keyCode == 83) {
        rearrange(true,"spyral");        
      }
    })

    $rearranger.on('click', function(e) {
      e.preventDefault();
      rearrange(true);
    })

    recalc();
    rearrange();

    // in 0.3 seconds sets grid opacity to 1
    setTimeout(function() {
      $grid.addClass('is__active');
    }, 300);
  });

})

}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/parts/grid.js","/parts")
},{"+7ZJp0":8,"buffer":5}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
$(function() {
	
	// iterates through all js__article children and searches for js__article-home div
	// then sets the height of the found div equal to js__article height
	// then does the same as the images are loaded (purpose unknown yet)
  $('.js__article').each(function() {
    var $box = $(this),
      $home = $box.find('.js__article-home');

    $home.height($box.height());

    $box.imagesLoaded( function() {
      $home.height($box.height());
    });
  });
});

}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/parts/inner.js","/parts")
},{"+7ZJp0":8,"buffer":5}],5:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `Buffer._useTypedArrays`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (compatible down to IE6)
 */
Buffer._useTypedArrays = (function () {
  // Detect if browser supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
  // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the browser does not support adding
  // properties to `Uint8Array` instances, then that's the same as no `Uint8Array` support
  // because we need to be able to add all the node Buffer API methods. This is an issue
  // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() &&
        typeof arr.subarray === 'function' // Chrome 9-10 lack `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Workaround: node's base64 implementation allows for non-padded strings
  // while base64-js does not.
  if (encoding === 'base64' && type === 'string') {
    subject = stringtrim(subject)
    while (subject.length % 4 !== 0) {
      subject = subject + '='
    }
  }

  // Find the length
  var length
  if (type === 'number')
    length = coerce(subject)
  else if (type === 'string')
    length = Buffer.byteLength(subject, encoding)
  else if (type === 'object')
    length = coerce(subject.length) // assume that object is array-like
  else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (Buffer._useTypedArrays) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    for (i = 0; i < length; i++) {
      if (Buffer.isBuffer(subject))
        buf[i] = subject.readUInt8(i)
      else
        buf[i] = subject[i]
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b !== null && b !== undefined && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' +
      'list should be an Array.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (typeof totalLength !== 'number') {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

// BUFFER INSTANCE METHODS
// =======================

function _hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  Buffer._charsWritten = i * 2
  return i
}

function _utf8Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function _asciiWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function _binaryWrite (buf, string, offset, length) {
  return _asciiWrite(buf, string, offset, length)
}

function _base64Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function _utf16leWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = _asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = _binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = _base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leWrite(this, string, offset, length)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end !== undefined)
    ? Number(end)
    : end = self.length

  // Fastpath empty strings
  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = _asciiSlice(self, start, end)
      break
    case 'binary':
      ret = _binarySlice(self, start, end)
      break
    case 'base64':
      ret = _base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !Buffer._useTypedArrays) {
    for (var i = 0; i < len; i++)
      target[i + target_start] = this[i + start]
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

function _base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function _utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function _asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++)
    ret += String.fromCharCode(buf[i])
  return ret
}

function _binarySlice (buf, start, end) {
  return _asciiSlice(buf, start, end)
}

function _hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function _utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i+1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = clamp(start, len, 0)
  end = clamp(end, len, len)

  if (Buffer._useTypedArrays) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function _readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return _readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return _readUInt16(this, offset, false, noAssert)
}

function _readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return _readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return _readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function _readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return _readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return _readInt16(this, offset, false, noAssert)
}

function _readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return _readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return _readInt32(this, offset, false, noAssert)
}

function _readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return _readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return _readFloat(this, offset, false, noAssert)
}

function _readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return _readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return _readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
}

function _writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, false, noAssert)
}

function _writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
}

function _writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, false, noAssert)
}

function _writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, false, noAssert)
}

function _writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, false, noAssert)
}

function _writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (typeof value === 'string') {
    value = value.charCodeAt(0)
  }

  assert(typeof value === 'number' && !isNaN(value), 'value is not a number')
  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  for (var i = start; i < end; i++) {
    this[i] = value
  }
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer._useTypedArrays) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1)
        buf[i] = this[i]
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

// slice(start, end)
function clamp (index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue
  index = ~~index;  // Coerce to integer.
  if (index >= len) return len
  if (index >= 0) return index
  index += len
  if (index >= 0) return index
  return 0
}

function coerce (length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length)
  return length < 0 ? 0 : length
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F)
      byteArray.push(str.charCodeAt(i))
    else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16))
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  var pos
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/index.js","/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer")
},{"+7ZJp0":8,"base64-js":6,"buffer":5,"ieee754":7}],6:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")
},{"+7ZJp0":8,"buffer":5}],7:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")
},{"+7ZJp0":8,"buffer":5}],8:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process/browser.js","/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process")
},{"+7ZJp0":8,"buffer":5}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YW5pYS9Eb2N1bWVudHMva29udG9yYS9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdmFuaWEvRG9jdW1lbnRzL2tvbnRvcmEvYXNzZXRzL3NjcmlwdHMvYXBwL2Zha2VfZTkzOGJmMjcuanMiLCIvVXNlcnMvdmFuaWEvRG9jdW1lbnRzL2tvbnRvcmEvYXNzZXRzL3NjcmlwdHMvYXBwL2xpYi91aS5qcyIsIi9Vc2Vycy92YW5pYS9Eb2N1bWVudHMva29udG9yYS9hc3NldHMvc2NyaXB0cy9hcHAvcGFydHMvZ3JpZC5qcyIsIi9Vc2Vycy92YW5pYS9Eb2N1bWVudHMva29udG9yYS9hc3NldHMvc2NyaXB0cy9hcHAvcGFydHMvaW5uZXIuanMiLCIvVXNlcnMvdmFuaWEvRG9jdW1lbnRzL2tvbnRvcmEvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwiL1VzZXJzL3ZhbmlhL0RvY3VtZW50cy9rb250b3JhL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanMiLCIvVXNlcnMvdmFuaWEvRG9jdW1lbnRzL2tvbnRvcmEvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwiL1VzZXJzL3ZhbmlhL0RvY3VtZW50cy9rb250b3JhL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDck1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbnJlcXVpcmUoJy4vbGliL3VpJyk7XG5cbnJlcXVpcmUoJy4vcGFydHMvZ3JpZCcpO1xucmVxdWlyZSgnLi9wYXJ0cy9pbm5lcicpO1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIis3WkpwMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2Zha2VfZTkzOGJmMjcuanNcIixcIi9cIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKiEgalF1ZXJ5IFVJIC0gdjEuMTAuNCAtIDIwMTQtMDYtMDZcbiogaHR0cDovL2pxdWVyeXVpLmNvbVxuKiBJbmNsdWRlczoganF1ZXJ5LnVpLmNvcmUuanMsIGpxdWVyeS51aS53aWRnZXQuanMsIGpxdWVyeS51aS5tb3VzZS5qcywganF1ZXJ5LnVpLmRyYWdnYWJsZS5qc1xuKiBDb3B5cmlnaHQgMjAxNCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzOyBMaWNlbnNlZCBNSVQgKi9cblxuKGZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gaSh0LGkpe3ZhciBzLGEsbyxyPXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImFyZWFcIj09PXI/KHM9dC5wYXJlbnROb2RlLGE9cy5uYW1lLHQuaHJlZiYmYSYmXCJtYXBcIj09PXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKT8obz1lKFwiaW1nW3VzZW1hcD0jXCIrYStcIl1cIilbMF0sISFvJiZuKG8pKTohMSk6KC9pbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9ufG9iamVjdC8udGVzdChyKT8hdC5kaXNhYmxlZDpcImFcIj09PXI/dC5ocmVmfHxpOmkpJiZuKHQpfWZ1bmN0aW9uIG4odCl7cmV0dXJuIGUuZXhwci5maWx0ZXJzLnZpc2libGUodCkmJiFlKHQpLnBhcmVudHMoKS5hZGRCYWNrKCkuZmlsdGVyKGZ1bmN0aW9uKCl7cmV0dXJuXCJoaWRkZW5cIj09PWUuY3NzKHRoaXMsXCJ2aXNpYmlsaXR5XCIpfSkubGVuZ3RofXZhciBzPTAsYT0vXnVpLWlkLVxcZCskLztlLnVpPWUudWl8fHt9LGUuZXh0ZW5kKGUudWkse3ZlcnNpb246XCIxLjEwLjRcIixrZXlDb2RlOntCQUNLU1BBQ0U6OCxDT01NQToxODgsREVMRVRFOjQ2LERPV046NDAsRU5EOjM1LEVOVEVSOjEzLEVTQ0FQRToyNyxIT01FOjM2LExFRlQ6MzcsTlVNUEFEX0FERDoxMDcsTlVNUEFEX0RFQ0lNQUw6MTEwLE5VTVBBRF9ESVZJREU6MTExLE5VTVBBRF9FTlRFUjoxMDgsTlVNUEFEX01VTFRJUExZOjEwNixOVU1QQURfU1VCVFJBQ1Q6MTA5LFBBR0VfRE9XTjozNCxQQUdFX1VQOjMzLFBFUklPRDoxOTAsUklHSFQ6MzksU1BBQ0U6MzIsVEFCOjksVVA6Mzh9fSksZS5mbi5leHRlbmQoe2ZvY3VzOmZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihpLG4pe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBpP3RoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PXRoaXM7c2V0VGltZW91dChmdW5jdGlvbigpe2UodCkuZm9jdXMoKSxuJiZuLmNhbGwodCl9LGkpfSk6dC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fShlLmZuLmZvY3VzKSxzY3JvbGxQYXJlbnQ6ZnVuY3Rpb24oKXt2YXIgdDtyZXR1cm4gdD1lLnVpLmllJiYvKHN0YXRpY3xyZWxhdGl2ZSkvLnRlc3QodGhpcy5jc3MoXCJwb3NpdGlvblwiKSl8fC9hYnNvbHV0ZS8udGVzdCh0aGlzLmNzcyhcInBvc2l0aW9uXCIpKT90aGlzLnBhcmVudHMoKS5maWx0ZXIoZnVuY3Rpb24oKXtyZXR1cm4vKHJlbGF0aXZlfGFic29sdXRlfGZpeGVkKS8udGVzdChlLmNzcyh0aGlzLFwicG9zaXRpb25cIikpJiYvKGF1dG98c2Nyb2xsKS8udGVzdChlLmNzcyh0aGlzLFwib3ZlcmZsb3dcIikrZS5jc3ModGhpcyxcIm92ZXJmbG93LXlcIikrZS5jc3ModGhpcyxcIm92ZXJmbG93LXhcIikpfSkuZXEoMCk6dGhpcy5wYXJlbnRzKCkuZmlsdGVyKGZ1bmN0aW9uKCl7cmV0dXJuLyhhdXRvfHNjcm9sbCkvLnRlc3QoZS5jc3ModGhpcyxcIm92ZXJmbG93XCIpK2UuY3NzKHRoaXMsXCJvdmVyZmxvdy15XCIpK2UuY3NzKHRoaXMsXCJvdmVyZmxvdy14XCIpKX0pLmVxKDApLC9maXhlZC8udGVzdCh0aGlzLmNzcyhcInBvc2l0aW9uXCIpKXx8IXQubGVuZ3RoP2UoZG9jdW1lbnQpOnR9LHpJbmRleDpmdW5jdGlvbihpKXtpZihpIT09dClyZXR1cm4gdGhpcy5jc3MoXCJ6SW5kZXhcIixpKTtpZih0aGlzLmxlbmd0aClmb3IodmFyIG4scyxhPWUodGhpc1swXSk7YS5sZW5ndGgmJmFbMF0hPT1kb2N1bWVudDspe2lmKG49YS5jc3MoXCJwb3NpdGlvblwiKSwoXCJhYnNvbHV0ZVwiPT09bnx8XCJyZWxhdGl2ZVwiPT09bnx8XCJmaXhlZFwiPT09bikmJihzPXBhcnNlSW50KGEuY3NzKFwiekluZGV4XCIpLDEwKSwhaXNOYU4ocykmJjAhPT1zKSlyZXR1cm4gczthPWEucGFyZW50KCl9cmV0dXJuIDB9LHVuaXF1ZUlkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3RoaXMuaWR8fCh0aGlzLmlkPVwidWktaWQtXCIrICsrcyl9KX0scmVtb3ZlVW5pcXVlSWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7YS50ZXN0KHRoaXMuaWQpJiZlKHRoaXMpLnJlbW92ZUF0dHIoXCJpZFwiKX0pfX0pLGUuZXh0ZW5kKGUuZXhwcltcIjpcIl0se2RhdGE6ZS5leHByLmNyZWF0ZVBzZXVkbz9lLmV4cHIuY3JlYXRlUHNldWRvKGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihpKXtyZXR1cm4hIWUuZGF0YShpLHQpfX0pOmZ1bmN0aW9uKHQsaSxuKXtyZXR1cm4hIWUuZGF0YSh0LG5bM10pfSxmb2N1c2FibGU6ZnVuY3Rpb24odCl7cmV0dXJuIGkodCwhaXNOYU4oZS5hdHRyKHQsXCJ0YWJpbmRleFwiKSkpfSx0YWJiYWJsZTpmdW5jdGlvbih0KXt2YXIgbj1lLmF0dHIodCxcInRhYmluZGV4XCIpLHM9aXNOYU4obik7cmV0dXJuKHN8fG4+PTApJiZpKHQsIXMpfX0pLGUoXCI8YT5cIikub3V0ZXJXaWR0aCgxKS5qcXVlcnl8fGUuZWFjaChbXCJXaWR0aFwiLFwiSGVpZ2h0XCJdLGZ1bmN0aW9uKGksbil7ZnVuY3Rpb24gcyh0LGksbixzKXtyZXR1cm4gZS5lYWNoKGEsZnVuY3Rpb24oKXtpLT1wYXJzZUZsb2F0KGUuY3NzKHQsXCJwYWRkaW5nXCIrdGhpcykpfHwwLG4mJihpLT1wYXJzZUZsb2F0KGUuY3NzKHQsXCJib3JkZXJcIit0aGlzK1wiV2lkdGhcIikpfHwwKSxzJiYoaS09cGFyc2VGbG9hdChlLmNzcyh0LFwibWFyZ2luXCIrdGhpcykpfHwwKX0pLGl9dmFyIGE9XCJXaWR0aFwiPT09bj9bXCJMZWZ0XCIsXCJSaWdodFwiXTpbXCJUb3BcIixcIkJvdHRvbVwiXSxvPW4udG9Mb3dlckNhc2UoKSxyPXtpbm5lcldpZHRoOmUuZm4uaW5uZXJXaWR0aCxpbm5lckhlaWdodDplLmZuLmlubmVySGVpZ2h0LG91dGVyV2lkdGg6ZS5mbi5vdXRlcldpZHRoLG91dGVySGVpZ2h0OmUuZm4ub3V0ZXJIZWlnaHR9O2UuZm5bXCJpbm5lclwiK25dPWZ1bmN0aW9uKGkpe3JldHVybiBpPT09dD9yW1wiaW5uZXJcIituXS5jYWxsKHRoaXMpOnRoaXMuZWFjaChmdW5jdGlvbigpe2UodGhpcykuY3NzKG8scyh0aGlzLGkpK1wicHhcIil9KX0sZS5mbltcIm91dGVyXCIrbl09ZnVuY3Rpb24odCxpKXtyZXR1cm5cIm51bWJlclwiIT10eXBlb2YgdD9yW1wib3V0ZXJcIituXS5jYWxsKHRoaXMsdCk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZSh0aGlzKS5jc3MobyxzKHRoaXMsdCwhMCxpKStcInB4XCIpfSl9fSksZS5mbi5hZGRCYWNrfHwoZS5mbi5hZGRCYWNrPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmFkZChudWxsPT1lP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGUpKX0pLGUoXCI8YT5cIikuZGF0YShcImEtYlwiLFwiYVwiKS5yZW1vdmVEYXRhKFwiYS1iXCIpLmRhdGEoXCJhLWJcIikmJihlLmZuLnJlbW92ZURhdGE9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGkpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoP3QuY2FsbCh0aGlzLGUuY2FtZWxDYXNlKGkpKTp0LmNhbGwodGhpcyl9fShlLmZuLnJlbW92ZURhdGEpKSxlLnVpLmllPSEhL21zaWUgW1xcdy5dKy8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpLGUuc3VwcG9ydC5zZWxlY3RzdGFydD1cIm9uc2VsZWN0c3RhcnRcImluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZS5mbi5leHRlbmQoe2Rpc2FibGVTZWxlY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5iaW5kKChlLnN1cHBvcnQuc2VsZWN0c3RhcnQ/XCJzZWxlY3RzdGFydFwiOlwibW91c2Vkb3duXCIpK1wiLnVpLWRpc2FibGVTZWxlY3Rpb25cIixmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCl9KX0sZW5hYmxlU2VsZWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudW5iaW5kKFwiLnVpLWRpc2FibGVTZWxlY3Rpb25cIil9fSksZS5leHRlbmQoZS51aSx7cGx1Z2luOnthZGQ6ZnVuY3Rpb24odCxpLG4pe3ZhciBzLGE9ZS51aVt0XS5wcm90b3R5cGU7Zm9yKHMgaW4gbilhLnBsdWdpbnNbc109YS5wbHVnaW5zW3NdfHxbXSxhLnBsdWdpbnNbc10ucHVzaChbaSxuW3NdXSl9LGNhbGw6ZnVuY3Rpb24oZSx0LGkpe3ZhciBuLHM9ZS5wbHVnaW5zW3RdO2lmKHMmJmUuZWxlbWVudFswXS5wYXJlbnROb2RlJiYxMSE9PWUuZWxlbWVudFswXS5wYXJlbnROb2RlLm5vZGVUeXBlKWZvcihuPTA7cy5sZW5ndGg+bjtuKyspZS5vcHRpb25zW3Nbbl1bMF1dJiZzW25dWzFdLmFwcGx5KGUuZWxlbWVudCxpKX19LGhhc1Njcm9sbDpmdW5jdGlvbih0LGkpe2lmKFwiaGlkZGVuXCI9PT1lKHQpLmNzcyhcIm92ZXJmbG93XCIpKXJldHVybiExO3ZhciBuPWkmJlwibGVmdFwiPT09aT9cInNjcm9sbExlZnRcIjpcInNjcm9sbFRvcFwiLHM9ITE7cmV0dXJuIHRbbl0+MD8hMDoodFtuXT0xLHM9dFtuXT4wLHRbbl09MCxzKX19KX0pKGpRdWVyeSk7KGZ1bmN0aW9uKHQsZSl7dmFyIGk9MCxzPUFycmF5LnByb3RvdHlwZS5zbGljZSxuPXQuY2xlYW5EYXRhO3QuY2xlYW5EYXRhPWZ1bmN0aW9uKGUpe2Zvcih2YXIgaSxzPTA7bnVsbCE9KGk9ZVtzXSk7cysrKXRyeXt0KGkpLnRyaWdnZXJIYW5kbGVyKFwicmVtb3ZlXCIpfWNhdGNoKG8pe31uKGUpfSx0LndpZGdldD1mdW5jdGlvbihpLHMsbil7dmFyIG8sYSxyLGgsbD17fSxjPWkuc3BsaXQoXCIuXCIpWzBdO2k9aS5zcGxpdChcIi5cIilbMV0sbz1jK1wiLVwiK2ksbnx8KG49cyxzPXQuV2lkZ2V0KSx0LmV4cHJbXCI6XCJdW28udG9Mb3dlckNhc2UoKV09ZnVuY3Rpb24oZSl7cmV0dXJuISF0LmRhdGEoZSxvKX0sdFtjXT10W2NdfHx7fSxhPXRbY11baV0scj10W2NdW2ldPWZ1bmN0aW9uKHQsaSl7cmV0dXJuIHRoaXMuX2NyZWF0ZVdpZGdldD8oYXJndW1lbnRzLmxlbmd0aCYmdGhpcy5fY3JlYXRlV2lkZ2V0KHQsaSksZSk6bmV3IHIodCxpKX0sdC5leHRlbmQocixhLHt2ZXJzaW9uOm4udmVyc2lvbixfcHJvdG86dC5leHRlbmQoe30sbiksX2NoaWxkQ29uc3RydWN0b3JzOltdfSksaD1uZXcgcyxoLm9wdGlvbnM9dC53aWRnZXQuZXh0ZW5kKHt9LGgub3B0aW9ucyksdC5lYWNoKG4sZnVuY3Rpb24oaSxuKXtyZXR1cm4gdC5pc0Z1bmN0aW9uKG4pPyhsW2ldPWZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oKXtyZXR1cm4gcy5wcm90b3R5cGVbaV0uYXBwbHkodGhpcyxhcmd1bWVudHMpfSxlPWZ1bmN0aW9uKHQpe3JldHVybiBzLnByb3RvdHlwZVtpXS5hcHBseSh0aGlzLHQpfTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgaSxzPXRoaXMuX3N1cGVyLG89dGhpcy5fc3VwZXJBcHBseTtyZXR1cm4gdGhpcy5fc3VwZXI9dCx0aGlzLl9zdXBlckFwcGx5PWUsaT1uLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLl9zdXBlcj1zLHRoaXMuX3N1cGVyQXBwbHk9byxpfX0oKSxlKToobFtpXT1uLGUpfSksci5wcm90b3R5cGU9dC53aWRnZXQuZXh0ZW5kKGgse3dpZGdldEV2ZW50UHJlZml4OmE/aC53aWRnZXRFdmVudFByZWZpeHx8aTppfSxsLHtjb25zdHJ1Y3RvcjpyLG5hbWVzcGFjZTpjLHdpZGdldE5hbWU6aSx3aWRnZXRGdWxsTmFtZTpvfSksYT8odC5lYWNoKGEuX2NoaWxkQ29uc3RydWN0b3JzLGZ1bmN0aW9uKGUsaSl7dmFyIHM9aS5wcm90b3R5cGU7dC53aWRnZXQocy5uYW1lc3BhY2UrXCIuXCIrcy53aWRnZXROYW1lLHIsaS5fcHJvdG8pfSksZGVsZXRlIGEuX2NoaWxkQ29uc3RydWN0b3JzKTpzLl9jaGlsZENvbnN0cnVjdG9ycy5wdXNoKHIpLHQud2lkZ2V0LmJyaWRnZShpLHIpfSx0LndpZGdldC5leHRlbmQ9ZnVuY3Rpb24oaSl7Zm9yKHZhciBuLG8sYT1zLmNhbGwoYXJndW1lbnRzLDEpLHI9MCxoPWEubGVuZ3RoO2g+cjtyKyspZm9yKG4gaW4gYVtyXSlvPWFbcl1bbl0sYVtyXS5oYXNPd25Qcm9wZXJ0eShuKSYmbyE9PWUmJihpW25dPXQuaXNQbGFpbk9iamVjdChvKT90LmlzUGxhaW5PYmplY3QoaVtuXSk/dC53aWRnZXQuZXh0ZW5kKHt9LGlbbl0sbyk6dC53aWRnZXQuZXh0ZW5kKHt9LG8pOm8pO3JldHVybiBpfSx0LndpZGdldC5icmlkZ2U9ZnVuY3Rpb24oaSxuKXt2YXIgbz1uLnByb3RvdHlwZS53aWRnZXRGdWxsTmFtZXx8aTt0LmZuW2ldPWZ1bmN0aW9uKGEpe3ZhciByPVwic3RyaW5nXCI9PXR5cGVvZiBhLGg9cy5jYWxsKGFyZ3VtZW50cywxKSxsPXRoaXM7cmV0dXJuIGE9IXImJmgubGVuZ3RoP3Qud2lkZ2V0LmV4dGVuZC5hcHBseShudWxsLFthXS5jb25jYXQoaCkpOmEscj90aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgcyxuPXQuZGF0YSh0aGlzLG8pO3JldHVybiBuP3QuaXNGdW5jdGlvbihuW2FdKSYmXCJfXCIhPT1hLmNoYXJBdCgwKT8ocz1uW2FdLmFwcGx5KG4saCkscyE9PW4mJnMhPT1lPyhsPXMmJnMuanF1ZXJ5P2wucHVzaFN0YWNrKHMuZ2V0KCkpOnMsITEpOmUpOnQuZXJyb3IoXCJubyBzdWNoIG1ldGhvZCAnXCIrYStcIicgZm9yIFwiK2krXCIgd2lkZ2V0IGluc3RhbmNlXCIpOnQuZXJyb3IoXCJjYW5ub3QgY2FsbCBtZXRob2RzIG9uIFwiK2krXCIgcHJpb3IgdG8gaW5pdGlhbGl6YXRpb247IFwiK1wiYXR0ZW1wdGVkIHRvIGNhbGwgbWV0aG9kICdcIithK1wiJ1wiKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPXQuZGF0YSh0aGlzLG8pO2U/ZS5vcHRpb24oYXx8e30pLl9pbml0KCk6dC5kYXRhKHRoaXMsbyxuZXcgbihhLHRoaXMpKX0pLGx9fSx0LldpZGdldD1mdW5jdGlvbigpe30sdC5XaWRnZXQuX2NoaWxkQ29uc3RydWN0b3JzPVtdLHQuV2lkZ2V0LnByb3RvdHlwZT17d2lkZ2V0TmFtZTpcIndpZGdldFwiLHdpZGdldEV2ZW50UHJlZml4OlwiXCIsZGVmYXVsdEVsZW1lbnQ6XCI8ZGl2PlwiLG9wdGlvbnM6e2Rpc2FibGVkOiExLGNyZWF0ZTpudWxsfSxfY3JlYXRlV2lkZ2V0OmZ1bmN0aW9uKGUscyl7cz10KHN8fHRoaXMuZGVmYXVsdEVsZW1lbnR8fHRoaXMpWzBdLHRoaXMuZWxlbWVudD10KHMpLHRoaXMudXVpZD1pKyssdGhpcy5ldmVudE5hbWVzcGFjZT1cIi5cIit0aGlzLndpZGdldE5hbWUrdGhpcy51dWlkLHRoaXMub3B0aW9ucz10LndpZGdldC5leHRlbmQoe30sdGhpcy5vcHRpb25zLHRoaXMuX2dldENyZWF0ZU9wdGlvbnMoKSxlKSx0aGlzLmJpbmRpbmdzPXQoKSx0aGlzLmhvdmVyYWJsZT10KCksdGhpcy5mb2N1c2FibGU9dCgpLHMhPT10aGlzJiYodC5kYXRhKHMsdGhpcy53aWRnZXRGdWxsTmFtZSx0aGlzKSx0aGlzLl9vbighMCx0aGlzLmVsZW1lbnQse3JlbW92ZTpmdW5jdGlvbih0KXt0LnRhcmdldD09PXMmJnRoaXMuZGVzdHJveSgpfX0pLHRoaXMuZG9jdW1lbnQ9dChzLnN0eWxlP3Mub3duZXJEb2N1bWVudDpzLmRvY3VtZW50fHxzKSx0aGlzLndpbmRvdz10KHRoaXMuZG9jdW1lbnRbMF0uZGVmYXVsdFZpZXd8fHRoaXMuZG9jdW1lbnRbMF0ucGFyZW50V2luZG93KSksdGhpcy5fY3JlYXRlKCksdGhpcy5fdHJpZ2dlcihcImNyZWF0ZVwiLG51bGwsdGhpcy5fZ2V0Q3JlYXRlRXZlbnREYXRhKCkpLHRoaXMuX2luaXQoKX0sX2dldENyZWF0ZU9wdGlvbnM6dC5ub29wLF9nZXRDcmVhdGVFdmVudERhdGE6dC5ub29wLF9jcmVhdGU6dC5ub29wLF9pbml0OnQubm9vcCxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5fZGVzdHJveSgpLHRoaXMuZWxlbWVudC51bmJpbmQodGhpcy5ldmVudE5hbWVzcGFjZSkucmVtb3ZlRGF0YSh0aGlzLndpZGdldE5hbWUpLnJlbW92ZURhdGEodGhpcy53aWRnZXRGdWxsTmFtZSkucmVtb3ZlRGF0YSh0LmNhbWVsQ2FzZSh0aGlzLndpZGdldEZ1bGxOYW1lKSksdGhpcy53aWRnZXQoKS51bmJpbmQodGhpcy5ldmVudE5hbWVzcGFjZSkucmVtb3ZlQXR0cihcImFyaWEtZGlzYWJsZWRcIikucmVtb3ZlQ2xhc3ModGhpcy53aWRnZXRGdWxsTmFtZStcIi1kaXNhYmxlZCBcIitcInVpLXN0YXRlLWRpc2FibGVkXCIpLHRoaXMuYmluZGluZ3MudW5iaW5kKHRoaXMuZXZlbnROYW1lc3BhY2UpLHRoaXMuaG92ZXJhYmxlLnJlbW92ZUNsYXNzKFwidWktc3RhdGUtaG92ZXJcIiksdGhpcy5mb2N1c2FibGUucmVtb3ZlQ2xhc3MoXCJ1aS1zdGF0ZS1mb2N1c1wiKX0sX2Rlc3Ryb3k6dC5ub29wLHdpZGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVsZW1lbnR9LG9wdGlvbjpmdW5jdGlvbihpLHMpe3ZhciBuLG8sYSxyPWk7aWYoMD09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHQud2lkZ2V0LmV4dGVuZCh7fSx0aGlzLm9wdGlvbnMpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpKWlmKHI9e30sbj1pLnNwbGl0KFwiLlwiKSxpPW4uc2hpZnQoKSxuLmxlbmd0aCl7Zm9yKG89cltpXT10LndpZGdldC5leHRlbmQoe30sdGhpcy5vcHRpb25zW2ldKSxhPTA7bi5sZW5ndGgtMT5hO2ErKylvW25bYV1dPW9bblthXV18fHt9LG89b1tuW2FdXTtpZihpPW4ucG9wKCksMT09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIG9baV09PT1lP251bGw6b1tpXTtvW2ldPXN9ZWxzZXtpZigxPT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5vcHRpb25zW2ldPT09ZT9udWxsOnRoaXMub3B0aW9uc1tpXTtyW2ldPXN9cmV0dXJuIHRoaXMuX3NldE9wdGlvbnMociksdGhpc30sX3NldE9wdGlvbnM6ZnVuY3Rpb24odCl7dmFyIGU7Zm9yKGUgaW4gdCl0aGlzLl9zZXRPcHRpb24oZSx0W2VdKTtyZXR1cm4gdGhpc30sX3NldE9wdGlvbjpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLm9wdGlvbnNbdF09ZSxcImRpc2FibGVkXCI9PT10JiYodGhpcy53aWRnZXQoKS50b2dnbGVDbGFzcyh0aGlzLndpZGdldEZ1bGxOYW1lK1wiLWRpc2FibGVkIHVpLXN0YXRlLWRpc2FibGVkXCIsISFlKS5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLGUpLHRoaXMuaG92ZXJhYmxlLnJlbW92ZUNsYXNzKFwidWktc3RhdGUtaG92ZXJcIiksdGhpcy5mb2N1c2FibGUucmVtb3ZlQ2xhc3MoXCJ1aS1zdGF0ZS1mb2N1c1wiKSksdGhpc30sZW5hYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3NldE9wdGlvbihcImRpc2FibGVkXCIsITEpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3NldE9wdGlvbihcImRpc2FibGVkXCIsITApfSxfb246ZnVuY3Rpb24oaSxzLG4pe3ZhciBvLGE9dGhpcztcImJvb2xlYW5cIiE9dHlwZW9mIGkmJihuPXMscz1pLGk9ITEpLG4/KHM9bz10KHMpLHRoaXMuYmluZGluZ3M9dGhpcy5iaW5kaW5ncy5hZGQocykpOihuPXMscz10aGlzLmVsZW1lbnQsbz10aGlzLndpZGdldCgpKSx0LmVhY2gobixmdW5jdGlvbihuLHIpe2Z1bmN0aW9uIGgoKXtyZXR1cm4gaXx8YS5vcHRpb25zLmRpc2FibGVkIT09ITAmJiF0KHRoaXMpLmhhc0NsYXNzKFwidWktc3RhdGUtZGlzYWJsZWRcIik/KFwic3RyaW5nXCI9PXR5cGVvZiByP2Fbcl06cikuYXBwbHkoYSxhcmd1bWVudHMpOmV9XCJzdHJpbmdcIiE9dHlwZW9mIHImJihoLmd1aWQ9ci5ndWlkPXIuZ3VpZHx8aC5ndWlkfHx0Lmd1aWQrKyk7dmFyIGw9bi5tYXRjaCgvXihcXHcrKVxccyooLiopJC8pLGM9bFsxXSthLmV2ZW50TmFtZXNwYWNlLHU9bFsyXTt1P28uZGVsZWdhdGUodSxjLGgpOnMuYmluZChjLGgpfSl9LF9vZmY6ZnVuY3Rpb24odCxlKXtlPShlfHxcIlwiKS5zcGxpdChcIiBcIikuam9pbih0aGlzLmV2ZW50TmFtZXNwYWNlK1wiIFwiKSt0aGlzLmV2ZW50TmFtZXNwYWNlLHQudW5iaW5kKGUpLnVuZGVsZWdhdGUoZSl9LF9kZWxheTpmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIGkoKXtyZXR1cm4oXCJzdHJpbmdcIj09dHlwZW9mIHQ/c1t0XTp0KS5hcHBseShzLGFyZ3VtZW50cyl9dmFyIHM9dGhpcztyZXR1cm4gc2V0VGltZW91dChpLGV8fDApfSxfaG92ZXJhYmxlOmZ1bmN0aW9uKGUpe3RoaXMuaG92ZXJhYmxlPXRoaXMuaG92ZXJhYmxlLmFkZChlKSx0aGlzLl9vbihlLHttb3VzZWVudGVyOmZ1bmN0aW9uKGUpe3QoZS5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcyhcInVpLXN0YXRlLWhvdmVyXCIpfSxtb3VzZWxlYXZlOmZ1bmN0aW9uKGUpe3QoZS5jdXJyZW50VGFyZ2V0KS5yZW1vdmVDbGFzcyhcInVpLXN0YXRlLWhvdmVyXCIpfX0pfSxfZm9jdXNhYmxlOmZ1bmN0aW9uKGUpe3RoaXMuZm9jdXNhYmxlPXRoaXMuZm9jdXNhYmxlLmFkZChlKSx0aGlzLl9vbihlLHtmb2N1c2luOmZ1bmN0aW9uKGUpe3QoZS5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcyhcInVpLXN0YXRlLWZvY3VzXCIpfSxmb2N1c291dDpmdW5jdGlvbihlKXt0KGUuY3VycmVudFRhcmdldCkucmVtb3ZlQ2xhc3MoXCJ1aS1zdGF0ZS1mb2N1c1wiKX19KX0sX3RyaWdnZXI6ZnVuY3Rpb24oZSxpLHMpe3ZhciBuLG8sYT10aGlzLm9wdGlvbnNbZV07aWYocz1zfHx7fSxpPXQuRXZlbnQoaSksaS50eXBlPShlPT09dGhpcy53aWRnZXRFdmVudFByZWZpeD9lOnRoaXMud2lkZ2V0RXZlbnRQcmVmaXgrZSkudG9Mb3dlckNhc2UoKSxpLnRhcmdldD10aGlzLmVsZW1lbnRbMF0sbz1pLm9yaWdpbmFsRXZlbnQpZm9yKG4gaW4gbyluIGluIGl8fChpW25dPW9bbl0pO3JldHVybiB0aGlzLmVsZW1lbnQudHJpZ2dlcihpLHMpLCEodC5pc0Z1bmN0aW9uKGEpJiZhLmFwcGx5KHRoaXMuZWxlbWVudFswXSxbaV0uY29uY2F0KHMpKT09PSExfHxpLmlzRGVmYXVsdFByZXZlbnRlZCgpKX19LHQuZWFjaCh7c2hvdzpcImZhZGVJblwiLGhpZGU6XCJmYWRlT3V0XCJ9LGZ1bmN0aW9uKGUsaSl7dC5XaWRnZXQucHJvdG90eXBlW1wiX1wiK2VdPWZ1bmN0aW9uKHMsbixvKXtcInN0cmluZ1wiPT10eXBlb2YgbiYmKG49e2VmZmVjdDpufSk7dmFyIGEscj1uP249PT0hMHx8XCJudW1iZXJcIj09dHlwZW9mIG4/aTpuLmVmZmVjdHx8aTplO249bnx8e30sXCJudW1iZXJcIj09dHlwZW9mIG4mJihuPXtkdXJhdGlvbjpufSksYT0hdC5pc0VtcHR5T2JqZWN0KG4pLG4uY29tcGxldGU9byxuLmRlbGF5JiZzLmRlbGF5KG4uZGVsYXkpLGEmJnQuZWZmZWN0cyYmdC5lZmZlY3RzLmVmZmVjdFtyXT9zW2VdKG4pOnIhPT1lJiZzW3JdP3Nbcl0obi5kdXJhdGlvbixuLmVhc2luZyxvKTpzLnF1ZXVlKGZ1bmN0aW9uKGkpe3QodGhpcylbZV0oKSxvJiZvLmNhbGwoc1swXSksaSgpfSl9fSl9KShqUXVlcnkpOyhmdW5jdGlvbih0KXt2YXIgZT0hMTt0KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uKCl7ZT0hMX0pLHQud2lkZ2V0KFwidWkubW91c2VcIix7dmVyc2lvbjpcIjEuMTAuNFwiLG9wdGlvbnM6e2NhbmNlbDpcImlucHV0LHRleHRhcmVhLGJ1dHRvbixzZWxlY3Qsb3B0aW9uXCIsZGlzdGFuY2U6MSxkZWxheTowfSxfbW91c2VJbml0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLmVsZW1lbnQuYmluZChcIm1vdXNlZG93bi5cIit0aGlzLndpZGdldE5hbWUsZnVuY3Rpb24odCl7cmV0dXJuIGUuX21vdXNlRG93bih0KX0pLmJpbmQoXCJjbGljay5cIit0aGlzLndpZGdldE5hbWUsZnVuY3Rpb24oaSl7cmV0dXJuITA9PT10LmRhdGEoaS50YXJnZXQsZS53aWRnZXROYW1lK1wiLnByZXZlbnRDbGlja0V2ZW50XCIpPyh0LnJlbW92ZURhdGEoaS50YXJnZXQsZS53aWRnZXROYW1lK1wiLnByZXZlbnRDbGlja0V2ZW50XCIpLGkuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksITEpOnVuZGVmaW5lZH0pLHRoaXMuc3RhcnRlZD0hMX0sX21vdXNlRGVzdHJveTpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC51bmJpbmQoXCIuXCIrdGhpcy53aWRnZXROYW1lKSx0aGlzLl9tb3VzZU1vdmVEZWxlZ2F0ZSYmdChkb2N1bWVudCkudW5iaW5kKFwibW91c2Vtb3ZlLlwiK3RoaXMud2lkZ2V0TmFtZSx0aGlzLl9tb3VzZU1vdmVEZWxlZ2F0ZSkudW5iaW5kKFwibW91c2V1cC5cIit0aGlzLndpZGdldE5hbWUsdGhpcy5fbW91c2VVcERlbGVnYXRlKX0sX21vdXNlRG93bjpmdW5jdGlvbihpKXtpZighZSl7dGhpcy5fbW91c2VTdGFydGVkJiZ0aGlzLl9tb3VzZVVwKGkpLHRoaXMuX21vdXNlRG93bkV2ZW50PWk7dmFyIHM9dGhpcyxuPTE9PT1pLndoaWNoLGE9XCJzdHJpbmdcIj09dHlwZW9mIHRoaXMub3B0aW9ucy5jYW5jZWwmJmkudGFyZ2V0Lm5vZGVOYW1lP3QoaS50YXJnZXQpLmNsb3Nlc3QodGhpcy5vcHRpb25zLmNhbmNlbCkubGVuZ3RoOiExO3JldHVybiBuJiYhYSYmdGhpcy5fbW91c2VDYXB0dXJlKGkpPyh0aGlzLm1vdXNlRGVsYXlNZXQ9IXRoaXMub3B0aW9ucy5kZWxheSx0aGlzLm1vdXNlRGVsYXlNZXR8fCh0aGlzLl9tb3VzZURlbGF5VGltZXI9c2V0VGltZW91dChmdW5jdGlvbigpe3MubW91c2VEZWxheU1ldD0hMH0sdGhpcy5vcHRpb25zLmRlbGF5KSksdGhpcy5fbW91c2VEaXN0YW5jZU1ldChpKSYmdGhpcy5fbW91c2VEZWxheU1ldChpKSYmKHRoaXMuX21vdXNlU3RhcnRlZD10aGlzLl9tb3VzZVN0YXJ0KGkpIT09ITEsIXRoaXMuX21vdXNlU3RhcnRlZCk/KGkucHJldmVudERlZmF1bHQoKSwhMCk6KCEwPT09dC5kYXRhKGkudGFyZ2V0LHRoaXMud2lkZ2V0TmFtZStcIi5wcmV2ZW50Q2xpY2tFdmVudFwiKSYmdC5yZW1vdmVEYXRhKGkudGFyZ2V0LHRoaXMud2lkZ2V0TmFtZStcIi5wcmV2ZW50Q2xpY2tFdmVudFwiKSx0aGlzLl9tb3VzZU1vdmVEZWxlZ2F0ZT1mdW5jdGlvbih0KXtyZXR1cm4gcy5fbW91c2VNb3ZlKHQpfSx0aGlzLl9tb3VzZVVwRGVsZWdhdGU9ZnVuY3Rpb24odCl7cmV0dXJuIHMuX21vdXNlVXAodCl9LHQoZG9jdW1lbnQpLmJpbmQoXCJtb3VzZW1vdmUuXCIrdGhpcy53aWRnZXROYW1lLHRoaXMuX21vdXNlTW92ZURlbGVnYXRlKS5iaW5kKFwibW91c2V1cC5cIit0aGlzLndpZGdldE5hbWUsdGhpcy5fbW91c2VVcERlbGVnYXRlKSxpLnByZXZlbnREZWZhdWx0KCksZT0hMCwhMCkpOiEwfX0sX21vdXNlTW92ZTpmdW5jdGlvbihlKXtyZXR1cm4gdC51aS5pZSYmKCFkb2N1bWVudC5kb2N1bWVudE1vZGV8fDk+ZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSYmIWUuYnV0dG9uP3RoaXMuX21vdXNlVXAoZSk6dGhpcy5fbW91c2VTdGFydGVkPyh0aGlzLl9tb3VzZURyYWcoZSksZS5wcmV2ZW50RGVmYXVsdCgpKToodGhpcy5fbW91c2VEaXN0YW5jZU1ldChlKSYmdGhpcy5fbW91c2VEZWxheU1ldChlKSYmKHRoaXMuX21vdXNlU3RhcnRlZD10aGlzLl9tb3VzZVN0YXJ0KHRoaXMuX21vdXNlRG93bkV2ZW50LGUpIT09ITEsdGhpcy5fbW91c2VTdGFydGVkP3RoaXMuX21vdXNlRHJhZyhlKTp0aGlzLl9tb3VzZVVwKGUpKSwhdGhpcy5fbW91c2VTdGFydGVkKX0sX21vdXNlVXA6ZnVuY3Rpb24oZSl7cmV0dXJuIHQoZG9jdW1lbnQpLnVuYmluZChcIm1vdXNlbW92ZS5cIit0aGlzLndpZGdldE5hbWUsdGhpcy5fbW91c2VNb3ZlRGVsZWdhdGUpLnVuYmluZChcIm1vdXNldXAuXCIrdGhpcy53aWRnZXROYW1lLHRoaXMuX21vdXNlVXBEZWxlZ2F0ZSksdGhpcy5fbW91c2VTdGFydGVkJiYodGhpcy5fbW91c2VTdGFydGVkPSExLGUudGFyZ2V0PT09dGhpcy5fbW91c2VEb3duRXZlbnQudGFyZ2V0JiZ0LmRhdGEoZS50YXJnZXQsdGhpcy53aWRnZXROYW1lK1wiLnByZXZlbnRDbGlja0V2ZW50XCIsITApLHRoaXMuX21vdXNlU3RvcChlKSksITF9LF9tb3VzZURpc3RhbmNlTWV0OmZ1bmN0aW9uKHQpe3JldHVybiBNYXRoLm1heChNYXRoLmFicyh0aGlzLl9tb3VzZURvd25FdmVudC5wYWdlWC10LnBhZ2VYKSxNYXRoLmFicyh0aGlzLl9tb3VzZURvd25FdmVudC5wYWdlWS10LnBhZ2VZKSk+PXRoaXMub3B0aW9ucy5kaXN0YW5jZX0sX21vdXNlRGVsYXlNZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb3VzZURlbGF5TWV0fSxfbW91c2VTdGFydDpmdW5jdGlvbigpe30sX21vdXNlRHJhZzpmdW5jdGlvbigpe30sX21vdXNlU3RvcDpmdW5jdGlvbigpe30sX21vdXNlQ2FwdHVyZTpmdW5jdGlvbigpe3JldHVybiEwfX0pfSkoalF1ZXJ5KTsoZnVuY3Rpb24odCl7dC53aWRnZXQoXCJ1aS5kcmFnZ2FibGVcIix0LnVpLm1vdXNlLHt2ZXJzaW9uOlwiMS4xMC40XCIsd2lkZ2V0RXZlbnRQcmVmaXg6XCJkcmFnXCIsb3B0aW9uczp7YWRkQ2xhc3NlczohMCxhcHBlbmRUbzpcInBhcmVudFwiLGF4aXM6ITEsY29ubmVjdFRvU29ydGFibGU6ITEsY29udGFpbm1lbnQ6ITEsY3Vyc29yOlwiYXV0b1wiLGN1cnNvckF0OiExLGdyaWQ6ITEsaGFuZGxlOiExLGhlbHBlcjpcIm9yaWdpbmFsXCIsaWZyYW1lRml4OiExLG9wYWNpdHk6ITEscmVmcmVzaFBvc2l0aW9uczohMSxyZXZlcnQ6ITEscmV2ZXJ0RHVyYXRpb246NTAwLHNjb3BlOlwiZGVmYXVsdFwiLHNjcm9sbDohMCxzY3JvbGxTZW5zaXRpdml0eToyMCxzY3JvbGxTcGVlZDoyMCxzbmFwOiExLHNuYXBNb2RlOlwiYm90aFwiLHNuYXBUb2xlcmFuY2U6MjAsc3RhY2s6ITEsekluZGV4OiExLGRyYWc6bnVsbCxzdGFydDpudWxsLHN0b3A6bnVsbH0sX2NyZWF0ZTpmdW5jdGlvbigpe1wib3JpZ2luYWxcIiE9PXRoaXMub3B0aW9ucy5oZWxwZXJ8fC9eKD86cnxhfGYpLy50ZXN0KHRoaXMuZWxlbWVudC5jc3MoXCJwb3NpdGlvblwiKSl8fCh0aGlzLmVsZW1lbnRbMF0uc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSx0aGlzLm9wdGlvbnMuYWRkQ2xhc3NlcyYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwidWktZHJhZ2dhYmxlXCIpLHRoaXMub3B0aW9ucy5kaXNhYmxlZCYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwidWktZHJhZ2dhYmxlLWRpc2FibGVkXCIpLHRoaXMuX21vdXNlSW5pdCgpfSxfZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcInVpLWRyYWdnYWJsZSB1aS1kcmFnZ2FibGUtZHJhZ2dpbmcgdWktZHJhZ2dhYmxlLWRpc2FibGVkXCIpLHRoaXMuX21vdXNlRGVzdHJveSgpfSxfbW91c2VDYXB0dXJlOmZ1bmN0aW9uKGUpe3ZhciBpPXRoaXMub3B0aW9ucztyZXR1cm4gdGhpcy5oZWxwZXJ8fGkuZGlzYWJsZWR8fHQoZS50YXJnZXQpLmNsb3Nlc3QoXCIudWktcmVzaXphYmxlLWhhbmRsZVwiKS5sZW5ndGg+MD8hMToodGhpcy5oYW5kbGU9dGhpcy5fZ2V0SGFuZGxlKGUpLHRoaXMuaGFuZGxlPyh0KGkuaWZyYW1lRml4PT09ITA/XCJpZnJhbWVcIjppLmlmcmFtZUZpeCkuZWFjaChmdW5jdGlvbigpe3QoXCI8ZGl2IGNsYXNzPSd1aS1kcmFnZ2FibGUtaWZyYW1lRml4JyBzdHlsZT0nYmFja2dyb3VuZDogI2ZmZjsnPjwvZGl2PlwiKS5jc3Moe3dpZHRoOnRoaXMub2Zmc2V0V2lkdGgrXCJweFwiLGhlaWdodDp0aGlzLm9mZnNldEhlaWdodCtcInB4XCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLG9wYWNpdHk6XCIwLjAwMVwiLHpJbmRleDoxZTN9KS5jc3ModCh0aGlzKS5vZmZzZXQoKSkuYXBwZW5kVG8oXCJib2R5XCIpfSksITApOiExKX0sX21vdXNlU3RhcnQ6ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcy5vcHRpb25zO3JldHVybiB0aGlzLmhlbHBlcj10aGlzLl9jcmVhdGVIZWxwZXIoZSksdGhpcy5oZWxwZXIuYWRkQ2xhc3MoXCJ1aS1kcmFnZ2FibGUtZHJhZ2dpbmdcIiksdGhpcy5fY2FjaGVIZWxwZXJQcm9wb3J0aW9ucygpLHQudWkuZGRtYW5hZ2VyJiYodC51aS5kZG1hbmFnZXIuY3VycmVudD10aGlzKSx0aGlzLl9jYWNoZU1hcmdpbnMoKSx0aGlzLmNzc1Bvc2l0aW9uPXRoaXMuaGVscGVyLmNzcyhcInBvc2l0aW9uXCIpLHRoaXMuc2Nyb2xsUGFyZW50PXRoaXMuaGVscGVyLnNjcm9sbFBhcmVudCgpLHRoaXMub2Zmc2V0UGFyZW50PXRoaXMuaGVscGVyLm9mZnNldFBhcmVudCgpLHRoaXMub2Zmc2V0UGFyZW50Q3NzUG9zaXRpb249dGhpcy5vZmZzZXRQYXJlbnQuY3NzKFwicG9zaXRpb25cIiksdGhpcy5vZmZzZXQ9dGhpcy5wb3NpdGlvbkFicz10aGlzLmVsZW1lbnQub2Zmc2V0KCksdGhpcy5vZmZzZXQ9e3RvcDp0aGlzLm9mZnNldC50b3AtdGhpcy5tYXJnaW5zLnRvcCxsZWZ0OnRoaXMub2Zmc2V0LmxlZnQtdGhpcy5tYXJnaW5zLmxlZnR9LHRoaXMub2Zmc2V0LnNjcm9sbD0hMSx0LmV4dGVuZCh0aGlzLm9mZnNldCx7Y2xpY2s6e2xlZnQ6ZS5wYWdlWC10aGlzLm9mZnNldC5sZWZ0LHRvcDplLnBhZ2VZLXRoaXMub2Zmc2V0LnRvcH0scGFyZW50OnRoaXMuX2dldFBhcmVudE9mZnNldCgpLHJlbGF0aXZlOnRoaXMuX2dldFJlbGF0aXZlT2Zmc2V0KCl9KSx0aGlzLm9yaWdpbmFsUG9zaXRpb249dGhpcy5wb3NpdGlvbj10aGlzLl9nZW5lcmF0ZVBvc2l0aW9uKGUpLHRoaXMub3JpZ2luYWxQYWdlWD1lLnBhZ2VYLHRoaXMub3JpZ2luYWxQYWdlWT1lLnBhZ2VZLGkuY3Vyc29yQXQmJnRoaXMuX2FkanVzdE9mZnNldEZyb21IZWxwZXIoaS5jdXJzb3JBdCksdGhpcy5fc2V0Q29udGFpbm1lbnQoKSx0aGlzLl90cmlnZ2VyKFwic3RhcnRcIixlKT09PSExPyh0aGlzLl9jbGVhcigpLCExKToodGhpcy5fY2FjaGVIZWxwZXJQcm9wb3J0aW9ucygpLHQudWkuZGRtYW5hZ2VyJiYhaS5kcm9wQmVoYXZpb3VyJiZ0LnVpLmRkbWFuYWdlci5wcmVwYXJlT2Zmc2V0cyh0aGlzLGUpLHRoaXMuX21vdXNlRHJhZyhlLCEwKSx0LnVpLmRkbWFuYWdlciYmdC51aS5kZG1hbmFnZXIuZHJhZ1N0YXJ0KHRoaXMsZSksITApfSxfbW91c2VEcmFnOmZ1bmN0aW9uKGUsaSl7aWYoXCJmaXhlZFwiPT09dGhpcy5vZmZzZXRQYXJlbnRDc3NQb3NpdGlvbiYmKHRoaXMub2Zmc2V0LnBhcmVudD10aGlzLl9nZXRQYXJlbnRPZmZzZXQoKSksdGhpcy5wb3NpdGlvbj10aGlzLl9nZW5lcmF0ZVBvc2l0aW9uKGUpLHRoaXMucG9zaXRpb25BYnM9dGhpcy5fY29udmVydFBvc2l0aW9uVG8oXCJhYnNvbHV0ZVwiKSwhaSl7dmFyIHM9dGhpcy5fdWlIYXNoKCk7aWYodGhpcy5fdHJpZ2dlcihcImRyYWdcIixlLHMpPT09ITEpcmV0dXJuIHRoaXMuX21vdXNlVXAoe30pLCExO3RoaXMucG9zaXRpb249cy5wb3NpdGlvbn1yZXR1cm4gdGhpcy5vcHRpb25zLmF4aXMmJlwieVwiPT09dGhpcy5vcHRpb25zLmF4aXN8fCh0aGlzLmhlbHBlclswXS5zdHlsZS5sZWZ0PXRoaXMucG9zaXRpb24ubGVmdCtcInB4XCIpLHRoaXMub3B0aW9ucy5heGlzJiZcInhcIj09PXRoaXMub3B0aW9ucy5heGlzfHwodGhpcy5oZWxwZXJbMF0uc3R5bGUudG9wPXRoaXMucG9zaXRpb24udG9wK1wicHhcIiksdC51aS5kZG1hbmFnZXImJnQudWkuZGRtYW5hZ2VyLmRyYWcodGhpcyxlKSwhMX0sX21vdXNlU3RvcDpmdW5jdGlvbihlKXt2YXIgaT10aGlzLHM9ITE7cmV0dXJuIHQudWkuZGRtYW5hZ2VyJiYhdGhpcy5vcHRpb25zLmRyb3BCZWhhdmlvdXImJihzPXQudWkuZGRtYW5hZ2VyLmRyb3AodGhpcyxlKSksdGhpcy5kcm9wcGVkJiYocz10aGlzLmRyb3BwZWQsdGhpcy5kcm9wcGVkPSExKSxcIm9yaWdpbmFsXCIhPT10aGlzLm9wdGlvbnMuaGVscGVyfHx0LmNvbnRhaW5zKHRoaXMuZWxlbWVudFswXS5vd25lckRvY3VtZW50LHRoaXMuZWxlbWVudFswXSk/KFwiaW52YWxpZFwiPT09dGhpcy5vcHRpb25zLnJldmVydCYmIXN8fFwidmFsaWRcIj09PXRoaXMub3B0aW9ucy5yZXZlcnQmJnN8fHRoaXMub3B0aW9ucy5yZXZlcnQ9PT0hMHx8dC5pc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy5yZXZlcnQpJiZ0aGlzLm9wdGlvbnMucmV2ZXJ0LmNhbGwodGhpcy5lbGVtZW50LHMpP3QodGhpcy5oZWxwZXIpLmFuaW1hdGUodGhpcy5vcmlnaW5hbFBvc2l0aW9uLHBhcnNlSW50KHRoaXMub3B0aW9ucy5yZXZlcnREdXJhdGlvbiwxMCksZnVuY3Rpb24oKXtpLl90cmlnZ2VyKFwic3RvcFwiLGUpIT09ITEmJmkuX2NsZWFyKCl9KTp0aGlzLl90cmlnZ2VyKFwic3RvcFwiLGUpIT09ITEmJnRoaXMuX2NsZWFyKCksITEpOiExfSxfbW91c2VVcDpmdW5jdGlvbihlKXtyZXR1cm4gdChcImRpdi51aS1kcmFnZ2FibGUtaWZyYW1lRml4XCIpLmVhY2goZnVuY3Rpb24oKXt0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyl9KSx0LnVpLmRkbWFuYWdlciYmdC51aS5kZG1hbmFnZXIuZHJhZ1N0b3AodGhpcyxlKSx0LnVpLm1vdXNlLnByb3RvdHlwZS5fbW91c2VVcC5jYWxsKHRoaXMsZSl9LGNhbmNlbDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmhlbHBlci5pcyhcIi51aS1kcmFnZ2FibGUtZHJhZ2dpbmdcIik/dGhpcy5fbW91c2VVcCh7fSk6dGhpcy5fY2xlYXIoKSx0aGlzfSxfZ2V0SGFuZGxlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLm9wdGlvbnMuaGFuZGxlPyEhdChlLnRhcmdldCkuY2xvc2VzdCh0aGlzLmVsZW1lbnQuZmluZCh0aGlzLm9wdGlvbnMuaGFuZGxlKSkubGVuZ3RoOiEwfSxfY3JlYXRlSGVscGVyOmZ1bmN0aW9uKGUpe3ZhciBpPXRoaXMub3B0aW9ucyxzPXQuaXNGdW5jdGlvbihpLmhlbHBlcik/dChpLmhlbHBlci5hcHBseSh0aGlzLmVsZW1lbnRbMF0sW2VdKSk6XCJjbG9uZVwiPT09aS5oZWxwZXI/dGhpcy5lbGVtZW50LmNsb25lKCkucmVtb3ZlQXR0cihcImlkXCIpOnRoaXMuZWxlbWVudDtyZXR1cm4gcy5wYXJlbnRzKFwiYm9keVwiKS5sZW5ndGh8fHMuYXBwZW5kVG8oXCJwYXJlbnRcIj09PWkuYXBwZW5kVG8/dGhpcy5lbGVtZW50WzBdLnBhcmVudE5vZGU6aS5hcHBlbmRUbyksc1swXT09PXRoaXMuZWxlbWVudFswXXx8LyhmaXhlZHxhYnNvbHV0ZSkvLnRlc3Qocy5jc3MoXCJwb3NpdGlvblwiKSl8fHMuY3NzKFwicG9zaXRpb25cIixcImFic29sdXRlXCIpLHN9LF9hZGp1c3RPZmZzZXRGcm9tSGVscGVyOmZ1bmN0aW9uKGUpe1wic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1lLnNwbGl0KFwiIFwiKSksdC5pc0FycmF5KGUpJiYoZT17bGVmdDorZVswXSx0b3A6K2VbMV18fDB9KSxcImxlZnRcImluIGUmJih0aGlzLm9mZnNldC5jbGljay5sZWZ0PWUubGVmdCt0aGlzLm1hcmdpbnMubGVmdCksXCJyaWdodFwiaW4gZSYmKHRoaXMub2Zmc2V0LmNsaWNrLmxlZnQ9dGhpcy5oZWxwZXJQcm9wb3J0aW9ucy53aWR0aC1lLnJpZ2h0K3RoaXMubWFyZ2lucy5sZWZ0KSxcInRvcFwiaW4gZSYmKHRoaXMub2Zmc2V0LmNsaWNrLnRvcD1lLnRvcCt0aGlzLm1hcmdpbnMudG9wKSxcImJvdHRvbVwiaW4gZSYmKHRoaXMub2Zmc2V0LmNsaWNrLnRvcD10aGlzLmhlbHBlclByb3BvcnRpb25zLmhlaWdodC1lLmJvdHRvbSt0aGlzLm1hcmdpbnMudG9wKX0sX2dldFBhcmVudE9mZnNldDpmdW5jdGlvbigpe3ZhciBlPXRoaXMub2Zmc2V0UGFyZW50Lm9mZnNldCgpO3JldHVyblwiYWJzb2x1dGVcIj09PXRoaXMuY3NzUG9zaXRpb24mJnRoaXMuc2Nyb2xsUGFyZW50WzBdIT09ZG9jdW1lbnQmJnQuY29udGFpbnModGhpcy5zY3JvbGxQYXJlbnRbMF0sdGhpcy5vZmZzZXRQYXJlbnRbMF0pJiYoZS5sZWZ0Kz10aGlzLnNjcm9sbFBhcmVudC5zY3JvbGxMZWZ0KCksZS50b3ArPXRoaXMuc2Nyb2xsUGFyZW50LnNjcm9sbFRvcCgpKSwodGhpcy5vZmZzZXRQYXJlbnRbMF09PT1kb2N1bWVudC5ib2R5fHx0aGlzLm9mZnNldFBhcmVudFswXS50YWdOYW1lJiZcImh0bWxcIj09PXRoaXMub2Zmc2V0UGFyZW50WzBdLnRhZ05hbWUudG9Mb3dlckNhc2UoKSYmdC51aS5pZSkmJihlPXt0b3A6MCxsZWZ0OjB9KSx7dG9wOmUudG9wKyhwYXJzZUludCh0aGlzLm9mZnNldFBhcmVudC5jc3MoXCJib3JkZXJUb3BXaWR0aFwiKSwxMCl8fDApLGxlZnQ6ZS5sZWZ0KyhwYXJzZUludCh0aGlzLm9mZnNldFBhcmVudC5jc3MoXCJib3JkZXJMZWZ0V2lkdGhcIiksMTApfHwwKX19LF9nZXRSZWxhdGl2ZU9mZnNldDpmdW5jdGlvbigpe2lmKFwicmVsYXRpdmVcIj09PXRoaXMuY3NzUG9zaXRpb24pe3ZhciB0PXRoaXMuZWxlbWVudC5wb3NpdGlvbigpO3JldHVybnt0b3A6dC50b3AtKHBhcnNlSW50KHRoaXMuaGVscGVyLmNzcyhcInRvcFwiKSwxMCl8fDApK3RoaXMuc2Nyb2xsUGFyZW50LnNjcm9sbFRvcCgpLGxlZnQ6dC5sZWZ0LShwYXJzZUludCh0aGlzLmhlbHBlci5jc3MoXCJsZWZ0XCIpLDEwKXx8MCkrdGhpcy5zY3JvbGxQYXJlbnQuc2Nyb2xsTGVmdCgpfX1yZXR1cm57dG9wOjAsbGVmdDowfX0sX2NhY2hlTWFyZ2luczpmdW5jdGlvbigpe3RoaXMubWFyZ2lucz17bGVmdDpwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWFyZ2luTGVmdFwiKSwxMCl8fDAsdG9wOnBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtYXJnaW5Ub3BcIiksMTApfHwwLHJpZ2h0OnBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtYXJnaW5SaWdodFwiKSwxMCl8fDAsYm90dG9tOnBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtYXJnaW5Cb3R0b21cIiksMTApfHwwfX0sX2NhY2hlSGVscGVyUHJvcG9ydGlvbnM6ZnVuY3Rpb24oKXt0aGlzLmhlbHBlclByb3BvcnRpb25zPXt3aWR0aDp0aGlzLmhlbHBlci5vdXRlcldpZHRoKCksaGVpZ2h0OnRoaXMuaGVscGVyLm91dGVySGVpZ2h0KCl9fSxfc2V0Q29udGFpbm1lbnQ6ZnVuY3Rpb24oKXt2YXIgZSxpLHMsbj10aGlzLm9wdGlvbnM7cmV0dXJuIG4uY29udGFpbm1lbnQ/XCJ3aW5kb3dcIj09PW4uY29udGFpbm1lbnQ/KHRoaXMuY29udGFpbm1lbnQ9W3Qod2luZG93KS5zY3JvbGxMZWZ0KCktdGhpcy5vZmZzZXQucmVsYXRpdmUubGVmdC10aGlzLm9mZnNldC5wYXJlbnQubGVmdCx0KHdpbmRvdykuc2Nyb2xsVG9wKCktdGhpcy5vZmZzZXQucmVsYXRpdmUudG9wLXRoaXMub2Zmc2V0LnBhcmVudC50b3AsdCh3aW5kb3cpLnNjcm9sbExlZnQoKSt0KHdpbmRvdykud2lkdGgoKS10aGlzLmhlbHBlclByb3BvcnRpb25zLndpZHRoLXRoaXMubWFyZ2lucy5sZWZ0LHQod2luZG93KS5zY3JvbGxUb3AoKSsodCh3aW5kb3cpLmhlaWdodCgpfHxkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUuc2Nyb2xsSGVpZ2h0KS10aGlzLmhlbHBlclByb3BvcnRpb25zLmhlaWdodC10aGlzLm1hcmdpbnMudG9wXSx1bmRlZmluZWQpOlwiZG9jdW1lbnRcIj09PW4uY29udGFpbm1lbnQ/KHRoaXMuY29udGFpbm1lbnQ9WzAsMCx0KGRvY3VtZW50KS53aWR0aCgpLXRoaXMuaGVscGVyUHJvcG9ydGlvbnMud2lkdGgtdGhpcy5tYXJnaW5zLmxlZnQsKHQoZG9jdW1lbnQpLmhlaWdodCgpfHxkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUuc2Nyb2xsSGVpZ2h0KS10aGlzLmhlbHBlclByb3BvcnRpb25zLmhlaWdodC10aGlzLm1hcmdpbnMudG9wXSx1bmRlZmluZWQpOm4uY29udGFpbm1lbnQuY29uc3RydWN0b3I9PT1BcnJheT8odGhpcy5jb250YWlubWVudD1uLmNvbnRhaW5tZW50LHVuZGVmaW5lZCk6KFwicGFyZW50XCI9PT1uLmNvbnRhaW5tZW50JiYobi5jb250YWlubWVudD10aGlzLmhlbHBlclswXS5wYXJlbnROb2RlKSxpPXQobi5jb250YWlubWVudCkscz1pWzBdLHMmJihlPVwiaGlkZGVuXCIhPT1pLmNzcyhcIm92ZXJmbG93XCIpLHRoaXMuY29udGFpbm1lbnQ9WyhwYXJzZUludChpLmNzcyhcImJvcmRlckxlZnRXaWR0aFwiKSwxMCl8fDApKyhwYXJzZUludChpLmNzcyhcInBhZGRpbmdMZWZ0XCIpLDEwKXx8MCksKHBhcnNlSW50KGkuY3NzKFwiYm9yZGVyVG9wV2lkdGhcIiksMTApfHwwKSsocGFyc2VJbnQoaS5jc3MoXCJwYWRkaW5nVG9wXCIpLDEwKXx8MCksKGU/TWF0aC5tYXgocy5zY3JvbGxXaWR0aCxzLm9mZnNldFdpZHRoKTpzLm9mZnNldFdpZHRoKS0ocGFyc2VJbnQoaS5jc3MoXCJib3JkZXJSaWdodFdpZHRoXCIpLDEwKXx8MCktKHBhcnNlSW50KGkuY3NzKFwicGFkZGluZ1JpZ2h0XCIpLDEwKXx8MCktdGhpcy5oZWxwZXJQcm9wb3J0aW9ucy53aWR0aC10aGlzLm1hcmdpbnMubGVmdC10aGlzLm1hcmdpbnMucmlnaHQsKGU/TWF0aC5tYXgocy5zY3JvbGxIZWlnaHQscy5vZmZzZXRIZWlnaHQpOnMub2Zmc2V0SGVpZ2h0KS0ocGFyc2VJbnQoaS5jc3MoXCJib3JkZXJCb3R0b21XaWR0aFwiKSwxMCl8fDApLShwYXJzZUludChpLmNzcyhcInBhZGRpbmdCb3R0b21cIiksMTApfHwwKS10aGlzLmhlbHBlclByb3BvcnRpb25zLmhlaWdodC10aGlzLm1hcmdpbnMudG9wLXRoaXMubWFyZ2lucy5ib3R0b21dLHRoaXMucmVsYXRpdmVfY29udGFpbmVyPWkpLHVuZGVmaW5lZCk6KHRoaXMuY29udGFpbm1lbnQ9bnVsbCx1bmRlZmluZWQpfSxfY29udmVydFBvc2l0aW9uVG86ZnVuY3Rpb24oZSxpKXtpfHwoaT10aGlzLnBvc2l0aW9uKTt2YXIgcz1cImFic29sdXRlXCI9PT1lPzE6LTEsbj1cImFic29sdXRlXCIhPT10aGlzLmNzc1Bvc2l0aW9ufHx0aGlzLnNjcm9sbFBhcmVudFswXSE9PWRvY3VtZW50JiZ0LmNvbnRhaW5zKHRoaXMuc2Nyb2xsUGFyZW50WzBdLHRoaXMub2Zmc2V0UGFyZW50WzBdKT90aGlzLnNjcm9sbFBhcmVudDp0aGlzLm9mZnNldFBhcmVudDtyZXR1cm4gdGhpcy5vZmZzZXQuc2Nyb2xsfHwodGhpcy5vZmZzZXQuc2Nyb2xsPXt0b3A6bi5zY3JvbGxUb3AoKSxsZWZ0Om4uc2Nyb2xsTGVmdCgpfSkse3RvcDppLnRvcCt0aGlzLm9mZnNldC5yZWxhdGl2ZS50b3Aqcyt0aGlzLm9mZnNldC5wYXJlbnQudG9wKnMtKFwiZml4ZWRcIj09PXRoaXMuY3NzUG9zaXRpb24/LXRoaXMuc2Nyb2xsUGFyZW50LnNjcm9sbFRvcCgpOnRoaXMub2Zmc2V0LnNjcm9sbC50b3ApKnMsbGVmdDppLmxlZnQrdGhpcy5vZmZzZXQucmVsYXRpdmUubGVmdCpzK3RoaXMub2Zmc2V0LnBhcmVudC5sZWZ0KnMtKFwiZml4ZWRcIj09PXRoaXMuY3NzUG9zaXRpb24/LXRoaXMuc2Nyb2xsUGFyZW50LnNjcm9sbExlZnQoKTp0aGlzLm9mZnNldC5zY3JvbGwubGVmdCkqc319LF9nZW5lcmF0ZVBvc2l0aW9uOmZ1bmN0aW9uKGUpe3ZhciBpLHMsbixhLG89dGhpcy5vcHRpb25zLHI9XCJhYnNvbHV0ZVwiIT09dGhpcy5jc3NQb3NpdGlvbnx8dGhpcy5zY3JvbGxQYXJlbnRbMF0hPT1kb2N1bWVudCYmdC5jb250YWlucyh0aGlzLnNjcm9sbFBhcmVudFswXSx0aGlzLm9mZnNldFBhcmVudFswXSk/dGhpcy5zY3JvbGxQYXJlbnQ6dGhpcy5vZmZzZXRQYXJlbnQsbD1lLnBhZ2VYLGg9ZS5wYWdlWTtyZXR1cm4gdGhpcy5vZmZzZXQuc2Nyb2xsfHwodGhpcy5vZmZzZXQuc2Nyb2xsPXt0b3A6ci5zY3JvbGxUb3AoKSxsZWZ0OnIuc2Nyb2xsTGVmdCgpfSksdGhpcy5vcmlnaW5hbFBvc2l0aW9uJiYodGhpcy5jb250YWlubWVudCYmKHRoaXMucmVsYXRpdmVfY29udGFpbmVyPyhzPXRoaXMucmVsYXRpdmVfY29udGFpbmVyLm9mZnNldCgpLGk9W3RoaXMuY29udGFpbm1lbnRbMF0rcy5sZWZ0LHRoaXMuY29udGFpbm1lbnRbMV0rcy50b3AsdGhpcy5jb250YWlubWVudFsyXStzLmxlZnQsdGhpcy5jb250YWlubWVudFszXStzLnRvcF0pOmk9dGhpcy5jb250YWlubWVudCxlLnBhZ2VYLXRoaXMub2Zmc2V0LmNsaWNrLmxlZnQ8aVswXSYmKGw9aVswXSt0aGlzLm9mZnNldC5jbGljay5sZWZ0KSxlLnBhZ2VZLXRoaXMub2Zmc2V0LmNsaWNrLnRvcDxpWzFdJiYoaD1pWzFdK3RoaXMub2Zmc2V0LmNsaWNrLnRvcCksZS5wYWdlWC10aGlzLm9mZnNldC5jbGljay5sZWZ0PmlbMl0mJihsPWlbMl0rdGhpcy5vZmZzZXQuY2xpY2subGVmdCksZS5wYWdlWS10aGlzLm9mZnNldC5jbGljay50b3A+aVszXSYmKGg9aVszXSt0aGlzLm9mZnNldC5jbGljay50b3ApKSxvLmdyaWQmJihuPW8uZ3JpZFsxXT90aGlzLm9yaWdpbmFsUGFnZVkrTWF0aC5yb3VuZCgoaC10aGlzLm9yaWdpbmFsUGFnZVkpL28uZ3JpZFsxXSkqby5ncmlkWzFdOnRoaXMub3JpZ2luYWxQYWdlWSxoPWk/bi10aGlzLm9mZnNldC5jbGljay50b3A+PWlbMV18fG4tdGhpcy5vZmZzZXQuY2xpY2sudG9wPmlbM10/bjpuLXRoaXMub2Zmc2V0LmNsaWNrLnRvcD49aVsxXT9uLW8uZ3JpZFsxXTpuK28uZ3JpZFsxXTpuLGE9by5ncmlkWzBdP3RoaXMub3JpZ2luYWxQYWdlWCtNYXRoLnJvdW5kKChsLXRoaXMub3JpZ2luYWxQYWdlWCkvby5ncmlkWzBdKSpvLmdyaWRbMF06dGhpcy5vcmlnaW5hbFBhZ2VYLGw9aT9hLXRoaXMub2Zmc2V0LmNsaWNrLmxlZnQ+PWlbMF18fGEtdGhpcy5vZmZzZXQuY2xpY2subGVmdD5pWzJdP2E6YS10aGlzLm9mZnNldC5jbGljay5sZWZ0Pj1pWzBdP2Etby5ncmlkWzBdOmErby5ncmlkWzBdOmEpKSx7dG9wOmgtdGhpcy5vZmZzZXQuY2xpY2sudG9wLXRoaXMub2Zmc2V0LnJlbGF0aXZlLnRvcC10aGlzLm9mZnNldC5wYXJlbnQudG9wKyhcImZpeGVkXCI9PT10aGlzLmNzc1Bvc2l0aW9uPy10aGlzLnNjcm9sbFBhcmVudC5zY3JvbGxUb3AoKTp0aGlzLm9mZnNldC5zY3JvbGwudG9wKSxsZWZ0OmwtdGhpcy5vZmZzZXQuY2xpY2subGVmdC10aGlzLm9mZnNldC5yZWxhdGl2ZS5sZWZ0LXRoaXMub2Zmc2V0LnBhcmVudC5sZWZ0KyhcImZpeGVkXCI9PT10aGlzLmNzc1Bvc2l0aW9uPy10aGlzLnNjcm9sbFBhcmVudC5zY3JvbGxMZWZ0KCk6dGhpcy5vZmZzZXQuc2Nyb2xsLmxlZnQpfX0sX2NsZWFyOmZ1bmN0aW9uKCl7dGhpcy5oZWxwZXIucmVtb3ZlQ2xhc3MoXCJ1aS1kcmFnZ2FibGUtZHJhZ2dpbmdcIiksdGhpcy5oZWxwZXJbMF09PT10aGlzLmVsZW1lbnRbMF18fHRoaXMuY2FuY2VsSGVscGVyUmVtb3ZhbHx8dGhpcy5oZWxwZXIucmVtb3ZlKCksdGhpcy5oZWxwZXI9bnVsbCx0aGlzLmNhbmNlbEhlbHBlclJlbW92YWw9ITF9LF90cmlnZ2VyOmZ1bmN0aW9uKGUsaSxzKXtyZXR1cm4gcz1zfHx0aGlzLl91aUhhc2goKSx0LnVpLnBsdWdpbi5jYWxsKHRoaXMsZSxbaSxzXSksXCJkcmFnXCI9PT1lJiYodGhpcy5wb3NpdGlvbkFicz10aGlzLl9jb252ZXJ0UG9zaXRpb25UbyhcImFic29sdXRlXCIpKSx0LldpZGdldC5wcm90b3R5cGUuX3RyaWdnZXIuY2FsbCh0aGlzLGUsaSxzKX0scGx1Z2luczp7fSxfdWlIYXNoOmZ1bmN0aW9uKCl7cmV0dXJue2hlbHBlcjp0aGlzLmhlbHBlcixwb3NpdGlvbjp0aGlzLnBvc2l0aW9uLG9yaWdpbmFsUG9zaXRpb246dGhpcy5vcmlnaW5hbFBvc2l0aW9uLG9mZnNldDp0aGlzLnBvc2l0aW9uQWJzfX19KSx0LnVpLnBsdWdpbi5hZGQoXCJkcmFnZ2FibGVcIixcImNvbm5lY3RUb1NvcnRhYmxlXCIse3N0YXJ0OmZ1bmN0aW9uKGUsaSl7dmFyIHM9dCh0aGlzKS5kYXRhKFwidWktZHJhZ2dhYmxlXCIpLG49cy5vcHRpb25zLGE9dC5leHRlbmQoe30saSx7aXRlbTpzLmVsZW1lbnR9KTtzLnNvcnRhYmxlcz1bXSx0KG4uY29ubmVjdFRvU29ydGFibGUpLmVhY2goZnVuY3Rpb24oKXt2YXIgaT10LmRhdGEodGhpcyxcInVpLXNvcnRhYmxlXCIpO2kmJiFpLm9wdGlvbnMuZGlzYWJsZWQmJihzLnNvcnRhYmxlcy5wdXNoKHtpbnN0YW5jZTppLHNob3VsZFJldmVydDppLm9wdGlvbnMucmV2ZXJ0fSksaS5yZWZyZXNoUG9zaXRpb25zKCksaS5fdHJpZ2dlcihcImFjdGl2YXRlXCIsZSxhKSl9KX0sc3RvcDpmdW5jdGlvbihlLGkpe3ZhciBzPXQodGhpcykuZGF0YShcInVpLWRyYWdnYWJsZVwiKSxuPXQuZXh0ZW5kKHt9LGkse2l0ZW06cy5lbGVtZW50fSk7dC5lYWNoKHMuc29ydGFibGVzLGZ1bmN0aW9uKCl7dGhpcy5pbnN0YW5jZS5pc092ZXI/KHRoaXMuaW5zdGFuY2UuaXNPdmVyPTAscy5jYW5jZWxIZWxwZXJSZW1vdmFsPSEwLHRoaXMuaW5zdGFuY2UuY2FuY2VsSGVscGVyUmVtb3ZhbD0hMSx0aGlzLnNob3VsZFJldmVydCYmKHRoaXMuaW5zdGFuY2Uub3B0aW9ucy5yZXZlcnQ9dGhpcy5zaG91bGRSZXZlcnQpLHRoaXMuaW5zdGFuY2UuX21vdXNlU3RvcChlKSx0aGlzLmluc3RhbmNlLm9wdGlvbnMuaGVscGVyPXRoaXMuaW5zdGFuY2Uub3B0aW9ucy5faGVscGVyLFwib3JpZ2luYWxcIj09PXMub3B0aW9ucy5oZWxwZXImJnRoaXMuaW5zdGFuY2UuY3VycmVudEl0ZW0uY3NzKHt0b3A6XCJhdXRvXCIsbGVmdDpcImF1dG9cIn0pKToodGhpcy5pbnN0YW5jZS5jYW5jZWxIZWxwZXJSZW1vdmFsPSExLHRoaXMuaW5zdGFuY2UuX3RyaWdnZXIoXCJkZWFjdGl2YXRlXCIsZSxuKSl9KX0sZHJhZzpmdW5jdGlvbihlLGkpe3ZhciBzPXQodGhpcykuZGF0YShcInVpLWRyYWdnYWJsZVwiKSxuPXRoaXM7dC5lYWNoKHMuc29ydGFibGVzLGZ1bmN0aW9uKCl7dmFyIGE9ITEsbz10aGlzO3RoaXMuaW5zdGFuY2UucG9zaXRpb25BYnM9cy5wb3NpdGlvbkFicyx0aGlzLmluc3RhbmNlLmhlbHBlclByb3BvcnRpb25zPXMuaGVscGVyUHJvcG9ydGlvbnMsdGhpcy5pbnN0YW5jZS5vZmZzZXQuY2xpY2s9cy5vZmZzZXQuY2xpY2ssdGhpcy5pbnN0YW5jZS5faW50ZXJzZWN0c1dpdGgodGhpcy5pbnN0YW5jZS5jb250YWluZXJDYWNoZSkmJihhPSEwLHQuZWFjaChzLnNvcnRhYmxlcyxmdW5jdGlvbigpe3JldHVybiB0aGlzLmluc3RhbmNlLnBvc2l0aW9uQWJzPXMucG9zaXRpb25BYnMsdGhpcy5pbnN0YW5jZS5oZWxwZXJQcm9wb3J0aW9ucz1zLmhlbHBlclByb3BvcnRpb25zLHRoaXMuaW5zdGFuY2Uub2Zmc2V0LmNsaWNrPXMub2Zmc2V0LmNsaWNrLHRoaXMhPT1vJiZ0aGlzLmluc3RhbmNlLl9pbnRlcnNlY3RzV2l0aCh0aGlzLmluc3RhbmNlLmNvbnRhaW5lckNhY2hlKSYmdC5jb250YWlucyhvLmluc3RhbmNlLmVsZW1lbnRbMF0sdGhpcy5pbnN0YW5jZS5lbGVtZW50WzBdKSYmKGE9ITEpLGF9KSksYT8odGhpcy5pbnN0YW5jZS5pc092ZXJ8fCh0aGlzLmluc3RhbmNlLmlzT3Zlcj0xLHRoaXMuaW5zdGFuY2UuY3VycmVudEl0ZW09dChuKS5jbG9uZSgpLnJlbW92ZUF0dHIoXCJpZFwiKS5hcHBlbmRUbyh0aGlzLmluc3RhbmNlLmVsZW1lbnQpLmRhdGEoXCJ1aS1zb3J0YWJsZS1pdGVtXCIsITApLHRoaXMuaW5zdGFuY2Uub3B0aW9ucy5faGVscGVyPXRoaXMuaW5zdGFuY2Uub3B0aW9ucy5oZWxwZXIsdGhpcy5pbnN0YW5jZS5vcHRpb25zLmhlbHBlcj1mdW5jdGlvbigpe3JldHVybiBpLmhlbHBlclswXX0sZS50YXJnZXQ9dGhpcy5pbnN0YW5jZS5jdXJyZW50SXRlbVswXSx0aGlzLmluc3RhbmNlLl9tb3VzZUNhcHR1cmUoZSwhMCksdGhpcy5pbnN0YW5jZS5fbW91c2VTdGFydChlLCEwLCEwKSx0aGlzLmluc3RhbmNlLm9mZnNldC5jbGljay50b3A9cy5vZmZzZXQuY2xpY2sudG9wLHRoaXMuaW5zdGFuY2Uub2Zmc2V0LmNsaWNrLmxlZnQ9cy5vZmZzZXQuY2xpY2subGVmdCx0aGlzLmluc3RhbmNlLm9mZnNldC5wYXJlbnQubGVmdC09cy5vZmZzZXQucGFyZW50LmxlZnQtdGhpcy5pbnN0YW5jZS5vZmZzZXQucGFyZW50LmxlZnQsdGhpcy5pbnN0YW5jZS5vZmZzZXQucGFyZW50LnRvcC09cy5vZmZzZXQucGFyZW50LnRvcC10aGlzLmluc3RhbmNlLm9mZnNldC5wYXJlbnQudG9wLHMuX3RyaWdnZXIoXCJ0b1NvcnRhYmxlXCIsZSkscy5kcm9wcGVkPXRoaXMuaW5zdGFuY2UuZWxlbWVudCxzLmN1cnJlbnRJdGVtPXMuZWxlbWVudCx0aGlzLmluc3RhbmNlLmZyb21PdXRzaWRlPXMpLHRoaXMuaW5zdGFuY2UuY3VycmVudEl0ZW0mJnRoaXMuaW5zdGFuY2UuX21vdXNlRHJhZyhlKSk6dGhpcy5pbnN0YW5jZS5pc092ZXImJih0aGlzLmluc3RhbmNlLmlzT3Zlcj0wLHRoaXMuaW5zdGFuY2UuY2FuY2VsSGVscGVyUmVtb3ZhbD0hMCx0aGlzLmluc3RhbmNlLm9wdGlvbnMucmV2ZXJ0PSExLHRoaXMuaW5zdGFuY2UuX3RyaWdnZXIoXCJvdXRcIixlLHRoaXMuaW5zdGFuY2UuX3VpSGFzaCh0aGlzLmluc3RhbmNlKSksdGhpcy5pbnN0YW5jZS5fbW91c2VTdG9wKGUsITApLHRoaXMuaW5zdGFuY2Uub3B0aW9ucy5oZWxwZXI9dGhpcy5pbnN0YW5jZS5vcHRpb25zLl9oZWxwZXIsdGhpcy5pbnN0YW5jZS5jdXJyZW50SXRlbS5yZW1vdmUoKSx0aGlzLmluc3RhbmNlLnBsYWNlaG9sZGVyJiZ0aGlzLmluc3RhbmNlLnBsYWNlaG9sZGVyLnJlbW92ZSgpLHMuX3RyaWdnZXIoXCJmcm9tU29ydGFibGVcIixlKSxzLmRyb3BwZWQ9ITEpfSl9fSksdC51aS5wbHVnaW4uYWRkKFwiZHJhZ2dhYmxlXCIsXCJjdXJzb3JcIix7c3RhcnQ6ZnVuY3Rpb24oKXt2YXIgZT10KFwiYm9keVwiKSxpPXQodGhpcykuZGF0YShcInVpLWRyYWdnYWJsZVwiKS5vcHRpb25zO2UuY3NzKFwiY3Vyc29yXCIpJiYoaS5fY3Vyc29yPWUuY3NzKFwiY3Vyc29yXCIpKSxlLmNzcyhcImN1cnNvclwiLGkuY3Vyc29yKX0sc3RvcDpmdW5jdGlvbigpe3ZhciBlPXQodGhpcykuZGF0YShcInVpLWRyYWdnYWJsZVwiKS5vcHRpb25zO2UuX2N1cnNvciYmdChcImJvZHlcIikuY3NzKFwiY3Vyc29yXCIsZS5fY3Vyc29yKX19KSx0LnVpLnBsdWdpbi5hZGQoXCJkcmFnZ2FibGVcIixcIm9wYWNpdHlcIix7c3RhcnQ6ZnVuY3Rpb24oZSxpKXt2YXIgcz10KGkuaGVscGVyKSxuPXQodGhpcykuZGF0YShcInVpLWRyYWdnYWJsZVwiKS5vcHRpb25zO3MuY3NzKFwib3BhY2l0eVwiKSYmKG4uX29wYWNpdHk9cy5jc3MoXCJvcGFjaXR5XCIpKSxzLmNzcyhcIm9wYWNpdHlcIixuLm9wYWNpdHkpfSxzdG9wOmZ1bmN0aW9uKGUsaSl7dmFyIHM9dCh0aGlzKS5kYXRhKFwidWktZHJhZ2dhYmxlXCIpLm9wdGlvbnM7cy5fb3BhY2l0eSYmdChpLmhlbHBlcikuY3NzKFwib3BhY2l0eVwiLHMuX29wYWNpdHkpfX0pLHQudWkucGx1Z2luLmFkZChcImRyYWdnYWJsZVwiLFwic2Nyb2xsXCIse3N0YXJ0OmZ1bmN0aW9uKCl7dmFyIGU9dCh0aGlzKS5kYXRhKFwidWktZHJhZ2dhYmxlXCIpO2Uuc2Nyb2xsUGFyZW50WzBdIT09ZG9jdW1lbnQmJlwiSFRNTFwiIT09ZS5zY3JvbGxQYXJlbnRbMF0udGFnTmFtZSYmKGUub3ZlcmZsb3dPZmZzZXQ9ZS5zY3JvbGxQYXJlbnQub2Zmc2V0KCkpfSxkcmFnOmZ1bmN0aW9uKGUpe3ZhciBpPXQodGhpcykuZGF0YShcInVpLWRyYWdnYWJsZVwiKSxzPWkub3B0aW9ucyxuPSExO2kuc2Nyb2xsUGFyZW50WzBdIT09ZG9jdW1lbnQmJlwiSFRNTFwiIT09aS5zY3JvbGxQYXJlbnRbMF0udGFnTmFtZT8ocy5heGlzJiZcInhcIj09PXMuYXhpc3x8KGkub3ZlcmZsb3dPZmZzZXQudG9wK2kuc2Nyb2xsUGFyZW50WzBdLm9mZnNldEhlaWdodC1lLnBhZ2VZPHMuc2Nyb2xsU2Vuc2l0aXZpdHk/aS5zY3JvbGxQYXJlbnRbMF0uc2Nyb2xsVG9wPW49aS5zY3JvbGxQYXJlbnRbMF0uc2Nyb2xsVG9wK3Muc2Nyb2xsU3BlZWQ6ZS5wYWdlWS1pLm92ZXJmbG93T2Zmc2V0LnRvcDxzLnNjcm9sbFNlbnNpdGl2aXR5JiYoaS5zY3JvbGxQYXJlbnRbMF0uc2Nyb2xsVG9wPW49aS5zY3JvbGxQYXJlbnRbMF0uc2Nyb2xsVG9wLXMuc2Nyb2xsU3BlZWQpKSxzLmF4aXMmJlwieVwiPT09cy5heGlzfHwoaS5vdmVyZmxvd09mZnNldC5sZWZ0K2kuc2Nyb2xsUGFyZW50WzBdLm9mZnNldFdpZHRoLWUucGFnZVg8cy5zY3JvbGxTZW5zaXRpdml0eT9pLnNjcm9sbFBhcmVudFswXS5zY3JvbGxMZWZ0PW49aS5zY3JvbGxQYXJlbnRbMF0uc2Nyb2xsTGVmdCtzLnNjcm9sbFNwZWVkOmUucGFnZVgtaS5vdmVyZmxvd09mZnNldC5sZWZ0PHMuc2Nyb2xsU2Vuc2l0aXZpdHkmJihpLnNjcm9sbFBhcmVudFswXS5zY3JvbGxMZWZ0PW49aS5zY3JvbGxQYXJlbnRbMF0uc2Nyb2xsTGVmdC1zLnNjcm9sbFNwZWVkKSkpOihzLmF4aXMmJlwieFwiPT09cy5heGlzfHwoZS5wYWdlWS10KGRvY3VtZW50KS5zY3JvbGxUb3AoKTxzLnNjcm9sbFNlbnNpdGl2aXR5P249dChkb2N1bWVudCkuc2Nyb2xsVG9wKHQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpLXMuc2Nyb2xsU3BlZWQpOnQod2luZG93KS5oZWlnaHQoKS0oZS5wYWdlWS10KGRvY3VtZW50KS5zY3JvbGxUb3AoKSk8cy5zY3JvbGxTZW5zaXRpdml0eSYmKG49dChkb2N1bWVudCkuc2Nyb2xsVG9wKHQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpK3Muc2Nyb2xsU3BlZWQpKSkscy5heGlzJiZcInlcIj09PXMuYXhpc3x8KGUucGFnZVgtdChkb2N1bWVudCkuc2Nyb2xsTGVmdCgpPHMuc2Nyb2xsU2Vuc2l0aXZpdHk/bj10KGRvY3VtZW50KS5zY3JvbGxMZWZ0KHQoZG9jdW1lbnQpLnNjcm9sbExlZnQoKS1zLnNjcm9sbFNwZWVkKTp0KHdpbmRvdykud2lkdGgoKS0oZS5wYWdlWC10KGRvY3VtZW50KS5zY3JvbGxMZWZ0KCkpPHMuc2Nyb2xsU2Vuc2l0aXZpdHkmJihuPXQoZG9jdW1lbnQpLnNjcm9sbExlZnQodChkb2N1bWVudCkuc2Nyb2xsTGVmdCgpK3Muc2Nyb2xsU3BlZWQpKSkpLG4hPT0hMSYmdC51aS5kZG1hbmFnZXImJiFzLmRyb3BCZWhhdmlvdXImJnQudWkuZGRtYW5hZ2VyLnByZXBhcmVPZmZzZXRzKGksZSl9fSksdC51aS5wbHVnaW4uYWRkKFwiZHJhZ2dhYmxlXCIsXCJzbmFwXCIse3N0YXJ0OmZ1bmN0aW9uKCl7dmFyIGU9dCh0aGlzKS5kYXRhKFwidWktZHJhZ2dhYmxlXCIpLGk9ZS5vcHRpb25zO2Uuc25hcEVsZW1lbnRzPVtdLHQoaS5zbmFwLmNvbnN0cnVjdG9yIT09U3RyaW5nP2kuc25hcC5pdGVtc3x8XCI6ZGF0YSh1aS1kcmFnZ2FibGUpXCI6aS5zbmFwKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGk9dCh0aGlzKSxzPWkub2Zmc2V0KCk7dGhpcyE9PWUuZWxlbWVudFswXSYmZS5zbmFwRWxlbWVudHMucHVzaCh7aXRlbTp0aGlzLHdpZHRoOmkub3V0ZXJXaWR0aCgpLGhlaWdodDppLm91dGVySGVpZ2h0KCksdG9wOnMudG9wLGxlZnQ6cy5sZWZ0fSl9KX0sZHJhZzpmdW5jdGlvbihlLGkpe3ZhciBzLG4sYSxvLHIsbCxoLGMsdSxkLHA9dCh0aGlzKS5kYXRhKFwidWktZHJhZ2dhYmxlXCIpLGc9cC5vcHRpb25zLGY9Zy5zbmFwVG9sZXJhbmNlLG09aS5vZmZzZXQubGVmdCxfPW0rcC5oZWxwZXJQcm9wb3J0aW9ucy53aWR0aCx2PWkub2Zmc2V0LnRvcCxiPXYrcC5oZWxwZXJQcm9wb3J0aW9ucy5oZWlnaHQ7Zm9yKHU9cC5zbmFwRWxlbWVudHMubGVuZ3RoLTE7dT49MDt1LS0pcj1wLnNuYXBFbGVtZW50c1t1XS5sZWZ0LGw9citwLnNuYXBFbGVtZW50c1t1XS53aWR0aCxoPXAuc25hcEVsZW1lbnRzW3VdLnRvcCxjPWgrcC5zbmFwRWxlbWVudHNbdV0uaGVpZ2h0LHItZj5ffHxtPmwrZnx8aC1mPmJ8fHY+YytmfHwhdC5jb250YWlucyhwLnNuYXBFbGVtZW50c1t1XS5pdGVtLm93bmVyRG9jdW1lbnQscC5zbmFwRWxlbWVudHNbdV0uaXRlbSk/KHAuc25hcEVsZW1lbnRzW3VdLnNuYXBwaW5nJiZwLm9wdGlvbnMuc25hcC5yZWxlYXNlJiZwLm9wdGlvbnMuc25hcC5yZWxlYXNlLmNhbGwocC5lbGVtZW50LGUsdC5leHRlbmQocC5fdWlIYXNoKCkse3NuYXBJdGVtOnAuc25hcEVsZW1lbnRzW3VdLml0ZW19KSkscC5zbmFwRWxlbWVudHNbdV0uc25hcHBpbmc9ITEpOihcImlubmVyXCIhPT1nLnNuYXBNb2RlJiYocz1mPj1NYXRoLmFicyhoLWIpLG49Zj49TWF0aC5hYnMoYy12KSxhPWY+PU1hdGguYWJzKHItXyksbz1mPj1NYXRoLmFicyhsLW0pLHMmJihpLnBvc2l0aW9uLnRvcD1wLl9jb252ZXJ0UG9zaXRpb25UbyhcInJlbGF0aXZlXCIse3RvcDpoLXAuaGVscGVyUHJvcG9ydGlvbnMuaGVpZ2h0LGxlZnQ6MH0pLnRvcC1wLm1hcmdpbnMudG9wKSxuJiYoaS5wb3NpdGlvbi50b3A9cC5fY29udmVydFBvc2l0aW9uVG8oXCJyZWxhdGl2ZVwiLHt0b3A6YyxsZWZ0OjB9KS50b3AtcC5tYXJnaW5zLnRvcCksYSYmKGkucG9zaXRpb24ubGVmdD1wLl9jb252ZXJ0UG9zaXRpb25UbyhcInJlbGF0aXZlXCIse3RvcDowLGxlZnQ6ci1wLmhlbHBlclByb3BvcnRpb25zLndpZHRofSkubGVmdC1wLm1hcmdpbnMubGVmdCksbyYmKGkucG9zaXRpb24ubGVmdD1wLl9jb252ZXJ0UG9zaXRpb25UbyhcInJlbGF0aXZlXCIse3RvcDowLGxlZnQ6bH0pLmxlZnQtcC5tYXJnaW5zLmxlZnQpKSxkPXN8fG58fGF8fG8sXCJvdXRlclwiIT09Zy5zbmFwTW9kZSYmKHM9Zj49TWF0aC5hYnMoaC12KSxuPWY+PU1hdGguYWJzKGMtYiksYT1mPj1NYXRoLmFicyhyLW0pLG89Zj49TWF0aC5hYnMobC1fKSxzJiYoaS5wb3NpdGlvbi50b3A9cC5fY29udmVydFBvc2l0aW9uVG8oXCJyZWxhdGl2ZVwiLHt0b3A6aCxsZWZ0OjB9KS50b3AtcC5tYXJnaW5zLnRvcCksbiYmKGkucG9zaXRpb24udG9wPXAuX2NvbnZlcnRQb3NpdGlvblRvKFwicmVsYXRpdmVcIix7dG9wOmMtcC5oZWxwZXJQcm9wb3J0aW9ucy5oZWlnaHQsbGVmdDowfSkudG9wLXAubWFyZ2lucy50b3ApLGEmJihpLnBvc2l0aW9uLmxlZnQ9cC5fY29udmVydFBvc2l0aW9uVG8oXCJyZWxhdGl2ZVwiLHt0b3A6MCxsZWZ0OnJ9KS5sZWZ0LXAubWFyZ2lucy5sZWZ0KSxvJiYoaS5wb3NpdGlvbi5sZWZ0PXAuX2NvbnZlcnRQb3NpdGlvblRvKFwicmVsYXRpdmVcIix7dG9wOjAsbGVmdDpsLXAuaGVscGVyUHJvcG9ydGlvbnMud2lkdGh9KS5sZWZ0LXAubWFyZ2lucy5sZWZ0KSksIXAuc25hcEVsZW1lbnRzW3VdLnNuYXBwaW5nJiYoc3x8bnx8YXx8b3x8ZCkmJnAub3B0aW9ucy5zbmFwLnNuYXAmJnAub3B0aW9ucy5zbmFwLnNuYXAuY2FsbChwLmVsZW1lbnQsZSx0LmV4dGVuZChwLl91aUhhc2goKSx7c25hcEl0ZW06cC5zbmFwRWxlbWVudHNbdV0uaXRlbX0pKSxwLnNuYXBFbGVtZW50c1t1XS5zbmFwcGluZz1zfHxufHxhfHxvfHxkKX19KSx0LnVpLnBsdWdpbi5hZGQoXCJkcmFnZ2FibGVcIixcInN0YWNrXCIse3N0YXJ0OmZ1bmN0aW9uKCl7dmFyIGUsaT10aGlzLmRhdGEoXCJ1aS1kcmFnZ2FibGVcIikub3B0aW9ucyxzPXQubWFrZUFycmF5KHQoaS5zdGFjaykpLnNvcnQoZnVuY3Rpb24oZSxpKXtyZXR1cm4ocGFyc2VJbnQodChlKS5jc3MoXCJ6SW5kZXhcIiksMTApfHwwKS0ocGFyc2VJbnQodChpKS5jc3MoXCJ6SW5kZXhcIiksMTApfHwwKX0pO3MubGVuZ3RoJiYoZT1wYXJzZUludCh0KHNbMF0pLmNzcyhcInpJbmRleFwiKSwxMCl8fDAsdChzKS5lYWNoKGZ1bmN0aW9uKGkpe3QodGhpcykuY3NzKFwiekluZGV4XCIsZStpKX0pLHRoaXMuY3NzKFwiekluZGV4XCIsZStzLmxlbmd0aCkpfX0pLHQudWkucGx1Z2luLmFkZChcImRyYWdnYWJsZVwiLFwiekluZGV4XCIse3N0YXJ0OmZ1bmN0aW9uKGUsaSl7dmFyIHM9dChpLmhlbHBlciksbj10KHRoaXMpLmRhdGEoXCJ1aS1kcmFnZ2FibGVcIikub3B0aW9ucztzLmNzcyhcInpJbmRleFwiKSYmKG4uX3pJbmRleD1zLmNzcyhcInpJbmRleFwiKSkscy5jc3MoXCJ6SW5kZXhcIixuLnpJbmRleCl9LHN0b3A6ZnVuY3Rpb24oZSxpKXt2YXIgcz10KHRoaXMpLmRhdGEoXCJ1aS1kcmFnZ2FibGVcIikub3B0aW9ucztzLl96SW5kZXgmJnQoaS5oZWxwZXIpLmNzcyhcInpJbmRleFwiLHMuX3pJbmRleCl9fSl9KShqUXVlcnkpO1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIis3WkpwMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2xpYi91aS5qc1wiLFwiL2xpYlwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbid1c2Ugc3RyaWN0JztcbiQoZnVuY3Rpb24oKSB7XG4gIC8vIG5vdCB1bmRlcnN0b29kIHlldFxuICB2YXIgaCA9ICQoJy5pdGVtYicpLmZpcnN0KCkuaGVpZ2h0KCk7XG4gICQoJy5pdGVtYicpLmNzcygnbGluZS1oZWlnaHQnLCBoICsgJ3B4Jyk7XG5cbiAgdmFyICRzd1RleHQgPSAkKCcuc3dpdGNoZXJfdGV4dCcpLFxuICAgICRzd0ltZyA9ICQoJy5zd2l0Y2hlcl9pbWFnZScpLFxuICAgIC8vIHNlbGVjdGlvbiB2YXIgZm9yIHBpY3R1cmUtdGV4dCBtb2RlXG4gICAgQ0xBU1NfVEVYVCA9ICdydCc7XG5cbiAgLy8gc2VydmljZXMgcGljdHVyZSBtb2RlIGFuZCB0ZXh0IG1vZGUgYnV0dG9uc1xuICAvLyBwdXRzIGN1cnJlbnQgc3RhdHVzIHRvIGNvb2tpZVxuICAkc3dUZXh0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQoJ2JvZHknKS5hZGRDbGFzcyhDTEFTU19URVhUKTtcbiAgICAkLmNvb2tpZSgnc3dpdGNoZXInLCAndGV4dFBvc2l0aW9uJywgeyBwYXRoOiAnLycgfSk7XG4gICAgLy8gaWYgKCRhcnRpY2xlLmxlbmd0aCkgJGFydGljbGUudHJpZ2dlcigndGV4dCcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG4gICRzd0ltZy5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoQ0xBU1NfVEVYVCk7XG4gICAgJC5jb29raWUoJ3N3aXRjaGVyJywgJ2ltYWdlUG9zaXRpb24nLCB7IHBhdGg6ICcvJyB9KTtcbiAgICAvLyBpZiAoJGFydGljbGUubGVuZ3RoKSAkYXJ0aWNsZS50cmlnZ2VyKCdpbWFnZScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgLy8gcHJvY2Vzc2VzIGN1cnJlbnQgY29va2llIFxuICBpZiAoJC5jb29raWUoJ3N3aXRjaGVyJykgPT09ICd0ZXh0UG9zaXRpb24nKSB7XG4gICAgJHN3VGV4dC50cmlnZ2VyKCdjbGljaycpO1xuICB9XG4gIGlmICgkLmNvb2tpZSgnc3dpdGNoZXInKSA9PT0gJ2ltYWdlUG9zaXRpb24nKSB7XG4gICAgJHN3SW1nLnRyaWdnZXIoJ2NsaWNrJyk7XG4gIH1cblxuICAvLyBUaGUgaWRlYSBpcyB0aGF0IHRleHQgYW5kIGltYWdlcyBcImZsb2F0XCIgb24gdGhlIGJhY2tncm91bmRcbiAgLy8gYXMgYmFja2dyb3VuZCBpcyBjbGlja2VkIHdlIGZhbGwgYmFjayB0byBob21lIHBhZ2VcbiAgLy8gU28gZ3JpZCBvYmplY3RzIHNob3VsZCBzaG93IFwiY3Vyc29yOnBvaW50ZXJcIiBpbWl0YXRpbmcgYSBsaW5rXG4gIC8vIHBhcnNlIGtpcmJ5dGV4dCdlZCB0ZXh0LCB3cmFwcGluZyB0ZXh0IGJldHdlZW4gYnIncyB3aXRoIDxzcGFuPlxuICAkKCcuanNfX2FydGljbGUtaG9sZGVyIHAnKS5jb250ZW50cygpLmZpbHRlcihmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLm5vZGVUeXBlID09PSAzO1xuICB9KS53cmFwKCc8c3BhbiBjbGFzcz1cImpzX19hcnRpY2xlLXRleHQtc3Bhbm5lZFwiLz4nKTtcbiAgLy8gaWYgYW55dGhpbmcgb3V0c2lkZSBkaXYgaXMgY2xpY2tlZCAtIGdldHRpbmcgYmFjayB0byBob21lXG4gICQoJy5qc19fYXJ0aWNsZS1ib3gnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vc2V0IHRvIFwicmV0dXJuIHRvIGhvbWVcIiB0byBldmVyeXRoaW5nIGV4Y2VwdCB0ZXh0IGFuZCBpbWFnZSBhbmQgaGVhZGVyIHdyYXBwZWQgaW4gZHQgYW5kIGRkXG4gICAgaWYoICEoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2pzX19hcnRpY2xlLXRleHQtc3Bhbm5lZCcpIHx8ICQoZS50YXJnZXQpLmlzKCdpbWcnKSB8fCBcbiAgICAgICAgICAkKGUudGFyZ2V0KS5pcygnZHQnKSB8fCAkKGUudGFyZ2V0KS5pcygnZGQnKSApICkgeyBcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIGFzIGlzIFxuICBmdW5jdGlvbiBnZXRSYW5kb21JbnQgKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIH1cblxuICAvLyBhcyBpcyAtLSB0dXJuZWQgb2ZmXG4gIGZ1bmN0aW9uIGxvZ29SZXBvc2l0aW9uKCkge1xuICAgICQoJy5sb2dvJykuY3NzKHtcbiAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogZ2V0UmFuZG9tSW50KC0xMCwgMTEwKSArICclIDUwJSdcbiAgICB9KVxuICB9XG4gIC8vIGxvZ29SZXBvc2l0aW9uKCk7XG5cbiAgLy8gc2VydmEgdGh1bWJuYWlsIGltYWdpbmkgYWxsYSBcImhvbWVcIiBwYWdpbmFcbiAgJCgnLmpzX19ncmlkJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICB2YXIgJGdyaWQgPSAkKHRoaXMpLFxuICAgICAgJGl0ZW1zID0gJGdyaWQuZmluZCgnLmpzX19pdGVtJyksXG4gICAgICAkcmVhcnJhbmdlciA9ICQoJy5qc19fcmVhcnJhbmdlJyksXG4gICAgICB3aW5kb3dXaWR0aCxcbiAgICAgIHdpbmRvd0hlaWdodCxcbiAgICAgIGl0ZW1XaWR0aCA9IDE1MCxcbiAgICAgIGl0ZW1IZWlnaHQgPSAxNTAsXG4gICAgICBtYXhPZmZzZXRYLFxuICAgICAgbWF4T2Zmc2V0WSxcbiAgICAgIHJlc2l6ZVRpbWVvdXQsXG4gICAgICB6ID0gMTAwLFxuICAgICAgQ09MUyA9IDcsXG4gICAgICBST1dTID0gNixcbiAgICAgIENMQVNTX1NUSUxMID0gJ2lzX19zdGlsbCc7XG5cbiAgICBmdW5jdGlvbiByZWNhbGMoKSB7XG4gICAgICAgICAgICAgICAgICAvL2FsZXJ0KFwicmVjYWxjXCIpO1xuXG4gICAgICB3aW5kb3dXaWR0aCA9ICRncmlkLndpZHRoKCk7XG4gICAgICB3aW5kb3dIZWlnaHQgPSAkZ3JpZC5oZWlnaHQoKTtcbiAgICAgIC8vIGl0ZW1XaWR0aCA9IHBhcnNlSW50KHdpbmRvd1dpZHRoL0NPTFMpO1xuICAgICAgLy8gaXRlbUhlaWdodCA9IHBhcnNlSW50KHdpbmRvd0hlaWdodC9ST1dTKTtcbiAgICAgIG1heE9mZnNldFggPSB3aW5kb3dXaWR0aCAtIGl0ZW1XaWR0aDtcbiAgICAgIG1heE9mZnNldFkgPSB3aW5kb3dIZWlnaHQgLSBpdGVtSGVpZ2h0IC0gNjE7XG4gICAgfVxuXG4gICAgLy8gcmVhcnJhbmdlcyBpdGVtcyB1c2luZyBnZXRSYW5kb21JbnRcbiAgICBmdW5jdGlvbiByZWFycmFuZ2UoZm9yY2UsIHR5cGUpIHtcbiAgICAgIHZhciBhbHBoYSA9IDA7XG4gICAgICB2YXIgcmFkID0gbWF4T2Zmc2V0WSowLjY7XG4gICAgICAkaXRlbXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgYWxwaGErPU1hdGguUEkvODtcbiAgICAgICAgcmFkLT0xMDtcbiAgICAgICAgLy9yZWFkIGRhdGEgZnJvbSBjb29raWVzXG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaWQnKSxcbiAgICAgICAgICBvZmZzZXRMZWZ0ID0gJC5jb29raWUoaWQgKyAnX2xlZnQnKSwgLy8gQVRUTlQhIEluIHBlcmNlbnQgb2Ygd2luZG93XG4gICAgICAgICAgb2Zmc2V0VG9wID0gJC5jb29raWUoaWQgKyAnX3RvcCcpO1xuICAgICAgICAvL2lmIHRoZXJlIGlzbid0IGRhdGEgZ2V0IGEgcmFuZG9tXG4gICAgICAgIGlmICghb2Zmc2V0TGVmdCB8fCBmb3JjZSkge1xuICAgICAgICAgIHZhciAgb2Zmc2V0TGVmdCA9IGdldFJhbmRvbUludCgwLCBtYXhPZmZzZXRYKS93aW5kb3dXaWR0aCAqIDEwMDtcbiAgICAgICAgICBpZiAodHlwZSA9PT0gXCJzcHlyYWxcIilcbiAgICAgICAgICAgIG9mZnNldExlZnQgPSAobWF4T2Zmc2V0WC8yICsgTWF0aC5zaW4oYWxwaGEpKnJhZCkvd2luZG93V2lkdGggKiAxMDA7XG4gICAgICAgICAgJC5jb29raWUoaWQgKyAnX2xlZnQnLCBvZmZzZXRMZWZ0LCB7IGV4cGlyZXM6IDEgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvZmZzZXRUb3AgfHwgZm9yY2UpIHtcbiAgICAgICAgICBvZmZzZXRUb3AgPSBnZXRSYW5kb21JbnQoMCwgbWF4T2Zmc2V0WSkvd2luZG93SGVpZ2h0ICogMTAwO1xuICAgICAgICAgIGlmICh0eXBlID09PSBcInNweXJhbFwiKVxuICAgICAgICAgICAgdmFyIG9mZnNldFRvcCA9ICgobWF4T2Zmc2V0WSkvMiArIE1hdGguY29zKGFscGhhKSpyYWQpL3dpbmRvd0hlaWdodCAqIDEwMDtcbiAgICAgICAgICAkLmNvb2tpZShpZCArICdfdG9wJywgb2Zmc2V0VG9wLCB7IGV4cGlyZXM6IDEgfSk7XG4gICAgICAgIH1cbiAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgIHdpZHRoOiBpdGVtV2lkdGgsXG4gICAgICAgICAgbGVmdDogb2Zmc2V0TGVmdCArICclJyxcbiAgICAgICAgICB0b3A6IG9mZnNldFRvcCArICclJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgICAgICAvLyByZWFycmFuZ2VzIGl0ZW1zIHNweXJhbFxuICAgIGZ1bmN0aW9uIHJlYXJyYW5nZVNweXJhbCgpIHtcbiAgICAgIHZhciBhbHBoYT0wO1xuICAgICAgdmFyIHJhZD1tYXhPZmZzZXRZKjAuNjtcbiAgICAgICRpdGVtcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gKG1heE9mZnNldFgvMiArIE1hdGguc2luKGFscGhhKSpyYWQpL3dpbmRvd1dpZHRoICogMTAwO1xuICAgICAgICAkLmNvb2tpZShpZCArICdfbGVmdCcsIG9mZnNldExlZnQsIHsgZXhwaXJlczogMSB9KTtcbiAgICAgICAgdmFyIG9mZnNldFRvcCA9ICgobWF4T2Zmc2V0WSkvMiArIE1hdGguY29zKGFscGhhKSpyYWQpL3dpbmRvd0hlaWdodCAqIDEwMDtcbiAgICAgICAgJC5jb29raWUoaWQgKyAnX3RvcCcsIG9mZnNldFRvcCwgeyBleHBpcmVzOiAxIH0pO1xuICAgICAgICBhbHBoYSs9TWF0aC5QSS84O1xuICAgICAgICByYWQtPTU7XG4gICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICB3aWR0aDogaXRlbVdpZHRoLFxuICAgICAgICAgIGxlZnQ6IG9mZnNldExlZnQgKyAnJScsXG4gICAgICAgICAgdG9wOiBvZmZzZXRUb3AgKyAnJSdcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBhc3BldHRhIHBlciB1bmEgc2Vjb25kYSBxdWFuZG8gaGEgcmljZXN0byBsJ2V2ZW50byBcInJlc2l6ZVwiIGUgcmljYWxjb2xhcmUgaSB2YXJpYWJpbGlcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVvdXQpO1xuICAgICAgcmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlY2FsYygpO1xuICAgICAgICAvLyByZWFycmFuZ2UoKTtcbiAgICAgIH0sIDEwMClcbiAgICB9KTtcblxuICAgIC8vIHNldHMgdXAgdGh1bWJuYWlscyBhcyBqUXVlcnkgVUkgaXRlbXNcbiAgICAkaXRlbXMuZHJhZ2dhYmxlKHtcbiAgICAgIGNvbnRhaW5tZW50OiAnI2dyaWQnLFxuICAgICAgc2Nyb2xsOiBmYWxzZSxcbiAgICAgIHN0YXJ0OiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgdWkuaGVscGVyLmFkZENsYXNzKENMQVNTX1NUSUxMKTtcbiAgICAgICAgdWkuaGVscGVyLmNzcygnei1pbmRleCcsIHorKyk7XG4gICAgICB9LFxuICAgICAgc3RvcDogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgIHZhciBpZCA9IHVpLmhlbHBlci5hdHRyKCdpZCcpO1xuICAgICAgICAkLmNvb2tpZShpZCArICdfbGVmdCcsIHVpLnBvc2l0aW9uLmxlZnQgLyB3aW5kb3dXaWR0aCAqIDEwMCwgeyBleHBpcmVzOiAxIH0pO1xuICAgICAgICAkLmNvb2tpZShpZCArICdfdG9wJywgdWkucG9zaXRpb24udG9wIC8gd2luZG93SGVpZ2h0ICogMTAwLCB7IGV4cGlyZXM6IDEgfSk7XG4gICAgICAgIHVpLmhlbHBlci5yZW1vdmVDbGFzcyhDTEFTU19TVElMTCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyByZWFycmFuZ2VzIHRodW1ibmFpbHMgb24gU1BBQ0VcbiAgICAkKGRvY3VtZW50KS5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT0gMzIpIHtcbiAgICAgICAgcmVhcnJhbmdlKHRydWUpOyAgICAgIFxuICAgICAgfVxuXG4gICAgICBpZiAoZS5rZXlDb2RlID09IDgzKSB7XG4gICAgICAgIHJlYXJyYW5nZSh0cnVlLFwic3B5cmFsXCIpOyAgICAgICAgXG4gICAgICB9XG4gICAgfSlcblxuICAgICRyZWFycmFuZ2VyLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJlYXJyYW5nZSh0cnVlKTtcbiAgICB9KVxuXG4gICAgcmVjYWxjKCk7XG4gICAgcmVhcnJhbmdlKCk7XG5cbiAgICAvLyBpbiAwLjMgc2Vjb25kcyBzZXRzIGdyaWQgb3BhY2l0eSB0byAxXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICRncmlkLmFkZENsYXNzKCdpc19fYWN0aXZlJyk7XG4gICAgfSwgMzAwKTtcbiAgfSk7XG5cbn0pXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiKzdaSnAwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvcGFydHMvZ3JpZC5qc1wiLFwiL3BhcnRzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuJChmdW5jdGlvbigpIHtcblx0XG5cdC8vIGl0ZXJhdGVzIHRocm91Z2ggYWxsIGpzX19hcnRpY2xlIGNoaWxkcmVuIGFuZCBzZWFyY2hlcyBmb3IganNfX2FydGljbGUtaG9tZSBkaXZcblx0Ly8gdGhlbiBzZXRzIHRoZSBoZWlnaHQgb2YgdGhlIGZvdW5kIGRpdiBlcXVhbCB0byBqc19fYXJ0aWNsZSBoZWlnaHRcblx0Ly8gdGhlbiBkb2VzIHRoZSBzYW1lIGFzIHRoZSBpbWFnZXMgYXJlIGxvYWRlZCAocHVycG9zZSB1bmtub3duIHlldClcbiAgJCgnLmpzX19hcnRpY2xlJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICB2YXIgJGJveCA9ICQodGhpcyksXG4gICAgICAkaG9tZSA9ICRib3guZmluZCgnLmpzX19hcnRpY2xlLWhvbWUnKTtcblxuICAgICRob21lLmhlaWdodCgkYm94LmhlaWdodCgpKTtcblxuICAgICRib3guaW1hZ2VzTG9hZGVkKCBmdW5jdGlvbigpIHtcbiAgICAgICRob21lLmhlaWdodCgkYm94LmhlaWdodCgpKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIrN1pKcDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9wYXJ0cy9pbm5lci5qc1wiLFwiL3BhcnRzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuQnVmZmVyLnBvb2xTaXplID0gODE5MlxuXG4vKipcbiAqIElmIGBCdWZmZXIuX3VzZVR5cGVkQXJyYXlzYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKGNvbXBhdGlibGUgZG93biB0byBJRTYpXG4gKi9cbkJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBEZXRlY3QgaWYgYnJvd3NlciBzdXBwb3J0cyBUeXBlZCBBcnJheXMuIFN1cHBvcnRlZCBicm93c2VycyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLFxuICAvLyBDaHJvbWUgNyssIFNhZmFyaSA1LjErLCBPcGVyYSAxMS42KywgaU9TIDQuMisuIElmIHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgYWRkaW5nXG4gIC8vIHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcywgdGhlbiB0aGF0J3MgdGhlIHNhbWUgYXMgbm8gYFVpbnQ4QXJyYXlgIHN1cHBvcnRcbiAgLy8gYmVjYXVzZSB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gYWRkIGFsbCB0aGUgbm9kZSBCdWZmZXIgQVBJIG1ldGhvZHMuIFRoaXMgaXMgYW4gaXNzdWVcbiAgLy8gaW4gRmlyZWZveCA0LTI5LiBOb3cgZml4ZWQ6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOFxuICB0cnkge1xuICAgIHZhciBidWYgPSBuZXcgQXJyYXlCdWZmZXIoMClcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIGFyci5mb28gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9XG4gICAgcmV0dXJuIDQyID09PSBhcnIuZm9vKCkgJiZcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAvLyBDaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59KSgpXG5cbi8qKlxuICogQ2xhc3M6IEJ1ZmZlclxuICogPT09PT09PT09PT09PVxuICpcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgYXJlIGF1Z21lbnRlZFxuICogd2l0aCBmdW5jdGlvbiBwcm9wZXJ0aWVzIGZvciBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgQVBJIGZ1bmN0aW9ucy4gV2UgdXNlXG4gKiBgVWludDhBcnJheWAgc28gdGhhdCBzcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdCByZXR1cm5zXG4gKiBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBCeSBhdWdtZW50aW5nIHRoZSBpbnN0YW5jZXMsIHdlIGNhbiBhdm9pZCBtb2RpZnlpbmcgdGhlIGBVaW50OEFycmF5YFxuICogcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBCdWZmZXIgKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpXG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybylcblxuICB2YXIgdHlwZSA9IHR5cGVvZiBzdWJqZWN0XG5cbiAgLy8gV29ya2Fyb3VuZDogbm9kZSdzIGJhc2U2NCBpbXBsZW1lbnRhdGlvbiBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgc3RyaW5nc1xuICAvLyB3aGlsZSBiYXNlNjQtanMgZG9lcyBub3QuXG4gIGlmIChlbmNvZGluZyA9PT0gJ2Jhc2U2NCcgJiYgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBzdWJqZWN0ID0gc3RyaW5ndHJpbShzdWJqZWN0KVxuICAgIHdoaWxlIChzdWJqZWN0Lmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICAgIHN1YmplY3QgPSBzdWJqZWN0ICsgJz0nXG4gICAgfVxuICB9XG5cbiAgLy8gRmluZCB0aGUgbGVuZ3RoXG4gIHZhciBsZW5ndGhcbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKVxuICAgIGxlbmd0aCA9IGNvZXJjZShzdWJqZWN0KVxuICBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJylcbiAgICBsZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChzdWJqZWN0LCBlbmNvZGluZylcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpXG4gICAgbGVuZ3RoID0gY29lcmNlKHN1YmplY3QubGVuZ3RoKSAvLyBhc3N1bWUgdGhhdCBvYmplY3QgaXMgYXJyYXktbGlrZVxuICBlbHNlXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCBuZWVkcyB0byBiZSBhIG51bWJlciwgYXJyYXkgb3Igc3RyaW5nLicpXG5cbiAgdmFyIGJ1ZlxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIC8vIFByZWZlcnJlZDogUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICBidWYgPSBCdWZmZXIuX2F1Z21lbnQobmV3IFVpbnQ4QXJyYXkobGVuZ3RoKSlcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIFRISVMgaW5zdGFuY2Ugb2YgQnVmZmVyIChjcmVhdGVkIGJ5IGBuZXdgKVxuICAgIGJ1ZiA9IHRoaXNcbiAgICBidWYubGVuZ3RoID0gbGVuZ3RoXG4gICAgYnVmLl9pc0J1ZmZlciA9IHRydWVcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzICYmIHR5cGVvZiBzdWJqZWN0LmJ5dGVMZW5ndGggPT09ICdudW1iZXInKSB7XG4gICAgLy8gU3BlZWQgb3B0aW1pemF0aW9uIC0tIHVzZSBzZXQgaWYgd2UncmUgY29weWluZyBmcm9tIGEgdHlwZWQgYXJyYXlcbiAgICBidWYuX3NldChzdWJqZWN0KVxuICB9IGVsc2UgaWYgKGlzQXJyYXlpc2goc3ViamVjdCkpIHtcbiAgICAvLyBUcmVhdCBhcnJheS1pc2ggb2JqZWN0cyBhcyBhIGJ5dGUgYXJyYXlcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkpXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3QucmVhZFVJbnQ4KGkpXG4gICAgICBlbHNlXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3RbaV1cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBidWYud3JpdGUoc3ViamVjdCwgMCwgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgIUJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgJiYgIW5vWmVybykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYnVmW2ldID0gMFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuLy8gU1RBVElDIE1FVEhPRFNcbi8vID09PT09PT09PT09PT09XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICdyYXcnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiAoYikge1xuICByZXR1cm4gISEoYiAhPT0gbnVsbCAmJiBiICE9PSB1bmRlZmluZWQgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gZnVuY3Rpb24gKHN0ciwgZW5jb2RpbmcpIHtcbiAgdmFyIHJldFxuICBzdHIgPSBzdHIgKyAnJ1xuICBzd2l0Y2ggKGVuY29kaW5nIHx8ICd1dGY4Jykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoIC8gMlxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSB1dGY4VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdyYXcnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gYmFzZTY0VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAqIDJcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gKGxpc3QsIHRvdGFsTGVuZ3RoKSB7XG4gIGFzc2VydChpc0FycmF5KGxpc3QpLCAnVXNhZ2U6IEJ1ZmZlci5jb25jYXQobGlzdCwgW3RvdGFsTGVuZ3RoXSlcXG4nICtcbiAgICAgICdsaXN0IHNob3VsZCBiZSBhbiBBcnJheS4nKVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKDApXG4gIH0gZWxzZSBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gbGlzdFswXVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB0b3RhbExlbmd0aCAhPT0gJ251bWJlcicpIHtcbiAgICB0b3RhbExlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdG90YWxMZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcih0b3RhbExlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICBpdGVtLmNvcHkoYnVmLCBwb3MpXG4gICAgcG9zICs9IGl0ZW0ubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG4vLyBCVUZGRVIgSU5TVEFOQ0UgTUVUSE9EU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gX2hleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgYXNzZXJ0KHN0ckxlbiAlIDIgPT09IDAsICdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYnl0ZSA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBhc3NlcnQoIWlzTmFOKGJ5dGUpLCAnSW52YWxpZCBoZXggc3RyaW5nJylcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlXG4gIH1cbiAgQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPSBpICogMlxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBfdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX2FzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX2JpbmFyeVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIF9hc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gX2Jhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfdXRmMTZsZVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBTdXBwb3J0IGJvdGggKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKVxuICAvLyBhbmQgdGhlIGxlZ2FjeSAoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpXG4gIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgaWYgKCFpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICB9IGVsc2UgeyAgLy8gbGVnYWN5XG4gICAgdmFyIHN3YXAgPSBlbmNvZGluZ1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgb2Zmc2V0ID0gbGVuZ3RoXG4gICAgbGVuZ3RoID0gc3dhcFxuICB9XG5cbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gX2hleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IF91dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gX2FzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IF9iaW5hcnlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gX2Jhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBfdXRmMTZsZVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcbiAgc3RhcnQgPSBOdW1iZXIoc3RhcnQpIHx8IDBcbiAgZW5kID0gKGVuZCAhPT0gdW5kZWZpbmVkKVxuICAgID8gTnVtYmVyKGVuZClcbiAgICA6IGVuZCA9IHNlbGYubGVuZ3RoXG5cbiAgLy8gRmFzdHBhdGggZW1wdHkgc3RyaW5nc1xuICBpZiAoZW5kID09PSBzdGFydClcbiAgICByZXR1cm4gJydcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gX2hleFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IF91dGY4U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gX2FzY2lpU2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IF9iaW5hcnlTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gX2Jhc2U2NFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBfdXRmMTZsZVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0X3N0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzXG5cbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKCF0YXJnZXRfc3RhcnQpIHRhcmdldF9zdGFydCA9IDBcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCBzb3VyY2UubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGFzc2VydChlbmQgPj0gc3RhcnQsICdzb3VyY2VFbmQgPCBzb3VyY2VTdGFydCcpXG4gIGFzc2VydCh0YXJnZXRfc3RhcnQgPj0gMCAmJiB0YXJnZXRfc3RhcnQgPCB0YXJnZXQubGVuZ3RoLFxuICAgICAgJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoc3RhcnQgPj0gMCAmJiBzdGFydCA8IHNvdXJjZS5sZW5ndGgsICdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KGVuZCA+PSAwICYmIGVuZCA8PSBzb3VyY2UubGVuZ3RoLCAnc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aClcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCA8IGVuZCAtIHN0YXJ0KVxuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgKyBzdGFydFxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuXG4gIGlmIChsZW4gPCAxMDAgfHwgIUJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRfc3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0Ll9zZXQodGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLCB0YXJnZXRfc3RhcnQpXG4gIH1cbn1cblxuZnVuY3Rpb24gX2Jhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiBfdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJlcyA9ICcnXG4gIHZhciB0bXAgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBpZiAoYnVmW2ldIDw9IDB4N0YpIHtcbiAgICAgIHJlcyArPSBkZWNvZGVVdGY4Q2hhcih0bXApICsgU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gICAgICB0bXAgPSAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0bXAgKz0gJyUnICsgYnVmW2ldLnRvU3RyaW5nKDE2KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXMgKyBkZWNvZGVVdGY4Q2hhcih0bXApXG59XG5cbmZ1bmN0aW9uIF9hc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKylcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gX2JpbmFyeVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIF9hc2NpaVNsaWNlKGJ1Ziwgc3RhcnQsIGVuZClcbn1cblxuZnVuY3Rpb24gX2hleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gX3V0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSsxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSBjbGFtcChzdGFydCwgbGVuLCAwKVxuICBlbmQgPSBjbGFtcChlbmQsIGxlbiwgbGVuKVxuXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5fYXVnbWVudCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpKVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgdmFyIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyBpKyspIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgICByZXR1cm4gbmV3QnVmXG4gIH1cbn1cblxuLy8gYGdldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLmdldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMucmVhZFVJbnQ4KG9mZnNldClcbn1cblxuLy8gYHNldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHYsIG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLnNldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMud3JpdGVVSW50OCh2LCBvZmZzZXQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbmZ1bmN0aW9uIF9yZWFkVUludDE2IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbFxuICBpZiAobGl0dGxlRW5kaWFuKSB7XG4gICAgdmFsID0gYnVmW29mZnNldF1cbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV0gPDwgOFxuICB9IGVsc2Uge1xuICAgIHZhbCA9IGJ1ZltvZmZzZXRdIDw8IDhcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV1cbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDE2KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDE2KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZFVJbnQzMiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWxcbiAgaWYgKGxpdHRsZUVuZGlhbikge1xuICAgIGlmIChvZmZzZXQgKyAyIDwgbGVuKVxuICAgICAgdmFsID0gYnVmW29mZnNldCArIDJdIDw8IDE2XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdIDw8IDhcbiAgICB2YWwgfD0gYnVmW29mZnNldF1cbiAgICBpZiAob2Zmc2V0ICsgMyA8IGxlbilcbiAgICAgIHZhbCA9IHZhbCArIChidWZbb2Zmc2V0ICsgM10gPDwgMjQgPj4+IDApXG4gIH0gZWxzZSB7XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgPSBidWZbb2Zmc2V0ICsgMV0gPDwgMTZcbiAgICBpZiAob2Zmc2V0ICsgMiA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMl0gPDwgOFxuICAgIGlmIChvZmZzZXQgKyAzIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAzXVxuICAgIHZhbCA9IHZhbCArIChidWZbb2Zmc2V0XSA8PCAyNCA+Pj4gMClcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDMyKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDMyKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsXG4gICAgICAgICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICB2YXIgbmVnID0gdGhpc1tvZmZzZXRdICYgMHg4MFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuZnVuY3Rpb24gX3JlYWRJbnQxNiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWwgPSBfcmVhZFVJbnQxNihidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCB0cnVlKVxuICB2YXIgbmVnID0gdmFsICYgMHg4MDAwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmZmYgLSB2YWwgKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQxNih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MTYodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkSW50MzIgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsID0gX3JlYWRVSW50MzIoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgdHJ1ZSlcbiAgdmFyIG5lZyA9IHZhbCAmIDB4ODAwMDAwMDBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmZmZmZmZmYgLSB2YWwgKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQzMih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MzIodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkRmxvYXQgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgcmV0dXJuIGllZWU3NTQucmVhZChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEZsb2F0KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRGbG9hdCh0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWREb3VibGUgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCArIDcgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgcmV0dXJuIGllZWU3NTQucmVhZChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWREb3VibGUodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWREb3VibGUodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuXG5cbiAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbn1cblxuZnVuY3Rpb24gX3dyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmZmZilcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4obGVuIC0gb2Zmc2V0LCAyKTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9XG4gICAgICAgICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAgICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmZmZmZmZmYpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGxlbiAtIG9mZnNldCwgNCk7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPVxuICAgICAgICAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2YsIC0weDgwKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICB0aGlzLndyaXRlVUludDgodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICB0aGlzLndyaXRlVUludDgoMHhmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZmZmLCAtMHg4MDAwKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgX3dyaXRlVUludDE2KGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbiAgZWxzZVxuICAgIF93cml0ZVVJbnQxNihidWYsIDB4ZmZmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIF93cml0ZVVJbnQzMihidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICBfd3JpdGVVSW50MzIoYnVmLCAweGZmZmZmZmZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZklFRUU3NTQodmFsdWUsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyA3IDwgYnVmLmxlbmd0aCxcbiAgICAgICAgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZJRUVFNzU0KHZhbHVlLCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBmaWxsKHZhbHVlLCBzdGFydD0wLCBlbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXZhbHVlKSB2YWx1ZSA9IDBcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kKSBlbmQgPSB0aGlzLmxlbmd0aFxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5jaGFyQ29kZUF0KDApXG4gIH1cblxuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpLCAndmFsdWUgaXMgbm90IGEgbnVtYmVyJylcbiAgYXNzZXJ0KGVuZCA+PSBzdGFydCwgJ2VuZCA8IHN0YXJ0JylcblxuICAvLyBGaWxsIDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIGFzc2VydChzdGFydCA+PSAwICYmIHN0YXJ0IDwgdGhpcy5sZW5ndGgsICdzdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KGVuZCA+PSAwICYmIGVuZCA8PSB0aGlzLmxlbmd0aCwgJ2VuZCBvdXQgb2YgYm91bmRzJylcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHRoaXNbaV0gPSB2YWx1ZVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG91dCA9IFtdXG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgb3V0W2ldID0gdG9IZXgodGhpc1tpXSlcbiAgICBpZiAoaSA9PT0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUykge1xuICAgICAgb3V0W2kgKyAxXSA9ICcuLi4nXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIG91dC5qb2luKCcgJykgKyAnPidcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBBcnJheUJ1ZmZlcmAgd2l0aCB0aGUgKmNvcGllZCogbWVtb3J5IG9mIHRoZSBidWZmZXIgaW5zdGFuY2UuXG4gKiBBZGRlZCBpbiBOb2RlIDAuMTIuIE9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBBcnJheUJ1ZmZlci5cbiAqL1xuQnVmZmVyLnByb3RvdHlwZS50b0FycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICAgIHJldHVybiAobmV3IEJ1ZmZlcih0aGlzKSkuYnVmZmVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBidWYgPSBuZXcgVWludDhBcnJheSh0aGlzLmxlbmd0aClcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBidWYubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpXG4gICAgICAgIGJ1ZltpXSA9IHRoaXNbaV1cbiAgICAgIHJldHVybiBidWYuYnVmZmVyXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQnVmZmVyLnRvQXJyYXlCdWZmZXIgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInKVxuICB9XG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxudmFyIEJQID0gQnVmZmVyLnByb3RvdHlwZVxuXG4vKipcbiAqIEF1Z21lbnQgYSBVaW50OEFycmF5ICppbnN0YW5jZSogKG5vdCB0aGUgVWludDhBcnJheSBjbGFzcyEpIHdpdGggQnVmZmVyIG1ldGhvZHNcbiAqL1xuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX2lzQnVmZmVyID0gdHJ1ZVxuXG4gIC8vIHNhdmUgcmVmZXJlbmNlIHRvIG9yaWdpbmFsIFVpbnQ4QXJyYXkgZ2V0L3NldCBtZXRob2RzIGJlZm9yZSBvdmVyd3JpdGluZ1xuICBhcnIuX2dldCA9IGFyci5nZXRcbiAgYXJyLl9zZXQgPSBhcnIuc2V0XG5cbiAgLy8gZGVwcmVjYXRlZCwgd2lsbCBiZSByZW1vdmVkIGluIG5vZGUgMC4xMytcbiAgYXJyLmdldCA9IEJQLmdldFxuICBhcnIuc2V0ID0gQlAuc2V0XG5cbiAgYXJyLndyaXRlID0gQlAud3JpdGVcbiAgYXJyLnRvU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvTG9jYWxlU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvSlNPTiA9IEJQLnRvSlNPTlxuICBhcnIuY29weSA9IEJQLmNvcHlcbiAgYXJyLnNsaWNlID0gQlAuc2xpY2VcbiAgYXJyLnJlYWRVSW50OCA9IEJQLnJlYWRVSW50OFxuICBhcnIucmVhZFVJbnQxNkxFID0gQlAucmVhZFVJbnQxNkxFXG4gIGFyci5yZWFkVUludDE2QkUgPSBCUC5yZWFkVUludDE2QkVcbiAgYXJyLnJlYWRVSW50MzJMRSA9IEJQLnJlYWRVSW50MzJMRVxuICBhcnIucmVhZFVJbnQzMkJFID0gQlAucmVhZFVJbnQzMkJFXG4gIGFyci5yZWFkSW50OCA9IEJQLnJlYWRJbnQ4XG4gIGFyci5yZWFkSW50MTZMRSA9IEJQLnJlYWRJbnQxNkxFXG4gIGFyci5yZWFkSW50MTZCRSA9IEJQLnJlYWRJbnQxNkJFXG4gIGFyci5yZWFkSW50MzJMRSA9IEJQLnJlYWRJbnQzMkxFXG4gIGFyci5yZWFkSW50MzJCRSA9IEJQLnJlYWRJbnQzMkJFXG4gIGFyci5yZWFkRmxvYXRMRSA9IEJQLnJlYWRGbG9hdExFXG4gIGFyci5yZWFkRmxvYXRCRSA9IEJQLnJlYWRGbG9hdEJFXG4gIGFyci5yZWFkRG91YmxlTEUgPSBCUC5yZWFkRG91YmxlTEVcbiAgYXJyLnJlYWREb3VibGVCRSA9IEJQLnJlYWREb3VibGVCRVxuICBhcnIud3JpdGVVSW50OCA9IEJQLndyaXRlVUludDhcbiAgYXJyLndyaXRlVUludDE2TEUgPSBCUC53cml0ZVVJbnQxNkxFXG4gIGFyci53cml0ZVVJbnQxNkJFID0gQlAud3JpdGVVSW50MTZCRVxuICBhcnIud3JpdGVVSW50MzJMRSA9IEJQLndyaXRlVUludDMyTEVcbiAgYXJyLndyaXRlVUludDMyQkUgPSBCUC53cml0ZVVJbnQzMkJFXG4gIGFyci53cml0ZUludDggPSBCUC53cml0ZUludDhcbiAgYXJyLndyaXRlSW50MTZMRSA9IEJQLndyaXRlSW50MTZMRVxuICBhcnIud3JpdGVJbnQxNkJFID0gQlAud3JpdGVJbnQxNkJFXG4gIGFyci53cml0ZUludDMyTEUgPSBCUC53cml0ZUludDMyTEVcbiAgYXJyLndyaXRlSW50MzJCRSA9IEJQLndyaXRlSW50MzJCRVxuICBhcnIud3JpdGVGbG9hdExFID0gQlAud3JpdGVGbG9hdExFXG4gIGFyci53cml0ZUZsb2F0QkUgPSBCUC53cml0ZUZsb2F0QkVcbiAgYXJyLndyaXRlRG91YmxlTEUgPSBCUC53cml0ZURvdWJsZUxFXG4gIGFyci53cml0ZURvdWJsZUJFID0gQlAud3JpdGVEb3VibGVCRVxuICBhcnIuZmlsbCA9IEJQLmZpbGxcbiAgYXJyLmluc3BlY3QgPSBCUC5pbnNwZWN0XG4gIGFyci50b0FycmF5QnVmZmVyID0gQlAudG9BcnJheUJ1ZmZlclxuXG4gIHJldHVybiBhcnJcbn1cblxuLy8gc2xpY2Uoc3RhcnQsIGVuZClcbmZ1bmN0aW9uIGNsYW1wIChpbmRleCwgbGVuLCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgaW5kZXggPSB+fmluZGV4OyAgLy8gQ29lcmNlIHRvIGludGVnZXIuXG4gIGlmIChpbmRleCA+PSBsZW4pIHJldHVybiBsZW5cbiAgaWYgKGluZGV4ID49IDApIHJldHVybiBpbmRleFxuICBpbmRleCArPSBsZW5cbiAgaWYgKGluZGV4ID49IDApIHJldHVybiBpbmRleFxuICByZXR1cm4gMFxufVxuXG5mdW5jdGlvbiBjb2VyY2UgKGxlbmd0aCkge1xuICAvLyBDb2VyY2UgbGVuZ3RoIHRvIGEgbnVtYmVyIChwb3NzaWJseSBOYU4pLCByb3VuZCB1cFxuICAvLyBpbiBjYXNlIGl0J3MgZnJhY3Rpb25hbCAoZS5nLiAxMjMuNDU2KSB0aGVuIGRvIGFcbiAgLy8gZG91YmxlIG5lZ2F0ZSB0byBjb2VyY2UgYSBOYU4gdG8gMC4gRWFzeSwgcmlnaHQ/XG4gIGxlbmd0aCA9IH5+TWF0aC5jZWlsKCtsZW5ndGgpXG4gIHJldHVybiBsZW5ndGggPCAwID8gMCA6IGxlbmd0aFxufVxuXG5mdW5jdGlvbiBpc0FycmF5IChzdWJqZWN0KSB7XG4gIHJldHVybiAoQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoc3ViamVjdCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ViamVjdCkgPT09ICdbb2JqZWN0IEFycmF5XSdcbiAgfSkoc3ViamVjdClcbn1cblxuZnVuY3Rpb24gaXNBcnJheWlzaCAoc3ViamVjdCkge1xuICByZXR1cm4gaXNBcnJheShzdWJqZWN0KSB8fCBCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkgfHxcbiAgICAgIHN1YmplY3QgJiYgdHlwZW9mIHN1YmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICB0eXBlb2Ygc3ViamVjdC5sZW5ndGggPT09ICdudW1iZXInXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYiA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaWYgKGIgPD0gMHg3RilcbiAgICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKVxuICAgIGVsc2Uge1xuICAgICAgdmFyIHN0YXJ0ID0gaVxuICAgICAgaWYgKGIgPj0gMHhEODAwICYmIGIgPD0gMHhERkZGKSBpKytcbiAgICAgIHZhciBoID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0ci5zbGljZShzdGFydCwgaSsxKSkuc3Vic3RyKDEpLnNwbGl0KCclJylcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaC5sZW5ndGg7IGorKylcbiAgICAgICAgYnl0ZUFycmF5LnB1c2gocGFyc2VJbnQoaFtqXSwgMTYpKVxuICAgIH1cbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShzdHIpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgcG9zXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpXG4gICAgICBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGRlY29kZVV0ZjhDaGFyIChzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhGRkZEKSAvLyBVVEYgOCBpbnZhbGlkIGNoYXJcbiAgfVxufVxuXG4vKlxuICogV2UgaGF2ZSB0byBtYWtlIHN1cmUgdGhhdCB0aGUgdmFsdWUgaXMgYSB2YWxpZCBpbnRlZ2VyLiBUaGlzIG1lYW5zIHRoYXQgaXRcbiAqIGlzIG5vbi1uZWdhdGl2ZS4gSXQgaGFzIG5vIGZyYWN0aW9uYWwgY29tcG9uZW50IGFuZCB0aGF0IGl0IGRvZXMgbm90XG4gKiBleGNlZWQgdGhlIG1heGltdW0gYWxsb3dlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gdmVyaWZ1aW50ICh2YWx1ZSwgbWF4KSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA+PSAwLCAnc3BlY2lmaWVkIGEgbmVnYXRpdmUgdmFsdWUgZm9yIHdyaXRpbmcgYW4gdW5zaWduZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgaXMgbGFyZ2VyIHRoYW4gbWF4aW11bSB2YWx1ZSBmb3IgdHlwZScpXG4gIGFzc2VydChNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWUsICd2YWx1ZSBoYXMgYSBmcmFjdGlvbmFsIGNvbXBvbmVudCcpXG59XG5cbmZ1bmN0aW9uIHZlcmlmc2ludCAodmFsdWUsIG1heCwgbWluKSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBsYXJnZXIgdGhhbiBtYXhpbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPj0gbWluLCAndmFsdWUgc21hbGxlciB0aGFuIG1pbmltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydChNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWUsICd2YWx1ZSBoYXMgYSBmcmFjdGlvbmFsIGNvbXBvbmVudCcpXG59XG5cbmZ1bmN0aW9uIHZlcmlmSUVFRTc1NCAodmFsdWUsIG1heCwgbWluKSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBsYXJnZXIgdGhhbiBtYXhpbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPj0gbWluLCAndmFsdWUgc21hbGxlciB0aGFuIG1pbmltdW0gYWxsb3dlZCB2YWx1ZScpXG59XG5cbmZ1bmN0aW9uIGFzc2VydCAodGVzdCwgbWVzc2FnZSkge1xuICBpZiAoIXRlc3QpIHRocm93IG5ldyBFcnJvcihtZXNzYWdlIHx8ICdGYWlsZWQgYXNzZXJ0aW9uJylcbn1cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIrN1pKcDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanNcIixcIi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXJcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG52YXIgbG9va3VwID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuXG47KGZ1bmN0aW9uIChleHBvcnRzKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuICB2YXIgQXJyID0gKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJylcbiAgICA/IFVpbnQ4QXJyYXlcbiAgICA6IEFycmF5XG5cblx0dmFyIFBMVVMgICA9ICcrJy5jaGFyQ29kZUF0KDApXG5cdHZhciBTTEFTSCAgPSAnLycuY2hhckNvZGVBdCgwKVxuXHR2YXIgTlVNQkVSID0gJzAnLmNoYXJDb2RlQXQoMClcblx0dmFyIExPV0VSICA9ICdhJy5jaGFyQ29kZUF0KDApXG5cdHZhciBVUFBFUiAgPSAnQScuY2hhckNvZGVBdCgwKVxuXHR2YXIgUExVU19VUkxfU0FGRSA9ICctJy5jaGFyQ29kZUF0KDApXG5cdHZhciBTTEFTSF9VUkxfU0FGRSA9ICdfJy5jaGFyQ29kZUF0KDApXG5cblx0ZnVuY3Rpb24gZGVjb2RlIChlbHQpIHtcblx0XHR2YXIgY29kZSA9IGVsdC5jaGFyQ29kZUF0KDApXG5cdFx0aWYgKGNvZGUgPT09IFBMVVMgfHxcblx0XHQgICAgY29kZSA9PT0gUExVU19VUkxfU0FGRSlcblx0XHRcdHJldHVybiA2MiAvLyAnKydcblx0XHRpZiAoY29kZSA9PT0gU0xBU0ggfHxcblx0XHQgICAgY29kZSA9PT0gU0xBU0hfVVJMX1NBRkUpXG5cdFx0XHRyZXR1cm4gNjMgLy8gJy8nXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIpXG5cdFx0XHRyZXR1cm4gLTEgLy9ubyBtYXRjaFxuXHRcdGlmIChjb2RlIDwgTlVNQkVSICsgMTApXG5cdFx0XHRyZXR1cm4gY29kZSAtIE5VTUJFUiArIDI2ICsgMjZcblx0XHRpZiAoY29kZSA8IFVQUEVSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIFVQUEVSXG5cdFx0aWYgKGNvZGUgPCBMT1dFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBMT1dFUiArIDI2XG5cdH1cblxuXHRmdW5jdGlvbiBiNjRUb0J5dGVBcnJheSAoYjY0KSB7XG5cdFx0dmFyIGksIGosIGwsIHRtcCwgcGxhY2VIb2xkZXJzLCBhcnJcblxuXHRcdGlmIChiNjQubGVuZ3RoICUgNCA+IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG5cdFx0fVxuXG5cdFx0Ly8gdGhlIG51bWJlciBvZiBlcXVhbCBzaWducyAocGxhY2UgaG9sZGVycylcblx0XHQvLyBpZiB0aGVyZSBhcmUgdHdvIHBsYWNlaG9sZGVycywgdGhhbiB0aGUgdHdvIGNoYXJhY3RlcnMgYmVmb3JlIGl0XG5cdFx0Ly8gcmVwcmVzZW50IG9uZSBieXRlXG5cdFx0Ly8gaWYgdGhlcmUgaXMgb25seSBvbmUsIHRoZW4gdGhlIHRocmVlIGNoYXJhY3RlcnMgYmVmb3JlIGl0IHJlcHJlc2VudCAyIGJ5dGVzXG5cdFx0Ly8gdGhpcyBpcyBqdXN0IGEgY2hlYXAgaGFjayB0byBub3QgZG8gaW5kZXhPZiB0d2ljZVxuXHRcdHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cdFx0cGxhY2VIb2xkZXJzID0gJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDIpID8gMiA6ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAxKSA/IDEgOiAwXG5cblx0XHQvLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcblx0XHRhcnIgPSBuZXcgQXJyKGI2NC5sZW5ndGggKiAzIC8gNCAtIHBsYWNlSG9sZGVycylcblxuXHRcdC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcblx0XHRsID0gcGxhY2VIb2xkZXJzID4gMCA/IGI2NC5sZW5ndGggLSA0IDogYjY0Lmxlbmd0aFxuXG5cdFx0dmFyIEwgPSAwXG5cblx0XHRmdW5jdGlvbiBwdXNoICh2KSB7XG5cdFx0XHRhcnJbTCsrXSA9IHZcblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwLCBqID0gMDsgaSA8IGw7IGkgKz0gNCwgaiArPSAzKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDE4KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpIDw8IDEyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpIDw8IDYpIHwgZGVjb2RlKGI2NC5jaGFyQXQoaSArIDMpKVxuXHRcdFx0cHVzaCgodG1wICYgMHhGRjAwMDApID4+IDE2KVxuXHRcdFx0cHVzaCgodG1wICYgMHhGRjAwKSA+PiA4KVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdGlmIChwbGFjZUhvbGRlcnMgPT09IDIpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA+PiA0KVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH0gZWxzZSBpZiAocGxhY2VIb2xkZXJzID09PSAxKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDEwKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpIDw8IDQpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPj4gMilcblx0XHRcdHB1c2goKHRtcCA+PiA4KSAmIDB4RkYpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFyclxuXHR9XG5cblx0ZnVuY3Rpb24gdWludDhUb0Jhc2U2NCAodWludDgpIHtcblx0XHR2YXIgaSxcblx0XHRcdGV4dHJhQnl0ZXMgPSB1aW50OC5sZW5ndGggJSAzLCAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuXHRcdFx0b3V0cHV0ID0gXCJcIixcblx0XHRcdHRlbXAsIGxlbmd0aFxuXG5cdFx0ZnVuY3Rpb24gZW5jb2RlIChudW0pIHtcblx0XHRcdHJldHVybiBsb29rdXAuY2hhckF0KG51bSlcblx0XHR9XG5cblx0XHRmdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuXHRcdFx0cmV0dXJuIGVuY29kZShudW0gPj4gMTggJiAweDNGKSArIGVuY29kZShudW0gPj4gMTIgJiAweDNGKSArIGVuY29kZShudW0gPj4gNiAmIDB4M0YpICsgZW5jb2RlKG51bSAmIDB4M0YpXG5cdFx0fVxuXG5cdFx0Ly8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuXHRcdGZvciAoaSA9IDAsIGxlbmd0aCA9IHVpbnQ4Lmxlbmd0aCAtIGV4dHJhQnl0ZXM7IGkgPCBsZW5ndGg7IGkgKz0gMykge1xuXHRcdFx0dGVtcCA9ICh1aW50OFtpXSA8PCAxNikgKyAodWludDhbaSArIDFdIDw8IDgpICsgKHVpbnQ4W2kgKyAyXSlcblx0XHRcdG91dHB1dCArPSB0cmlwbGV0VG9CYXNlNjQodGVtcClcblx0XHR9XG5cblx0XHQvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG5cdFx0c3dpdGNoIChleHRyYUJ5dGVzKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRlbXAgPSB1aW50OFt1aW50OC5sZW5ndGggLSAxXVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCA0KSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPT0nXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRlbXAgPSAodWludDhbdWludDgubGVuZ3RoIC0gMl0gPDwgOCkgKyAodWludDhbdWludDgubGVuZ3RoIC0gMV0pXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAxMClcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA+PiA0KSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgMikgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz0nXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG91dHB1dFxuXHR9XG5cblx0ZXhwb3J0cy50b0J5dGVBcnJheSA9IGI2NFRvQnl0ZUFycmF5XG5cdGV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IHVpbnQ4VG9CYXNlNjRcbn0odHlwZW9mIGV4cG9ydHMgPT09ICd1bmRlZmluZWQnID8gKHRoaXMuYmFzZTY0anMgPSB7fSkgOiBleHBvcnRzKSlcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIrN1pKcDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9saWIvYjY0LmpzXCIsXCIvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24oYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBuQml0cyA9IC03LFxuICAgICAgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwLFxuICAgICAgZCA9IGlzTEUgPyAtMSA6IDEsXG4gICAgICBzID0gYnVmZmVyW29mZnNldCArIGldO1xuXG4gIGkgKz0gZDtcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgcyA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IGVMZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBlID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gbUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzO1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSk7XG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICBlID0gZSAtIGVCaWFzO1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pO1xufTtcblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKSxcbiAgICAgIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKSxcbiAgICAgIGQgPSBpc0xFID8gMSA6IC0xLFxuICAgICAgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMDtcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKTtcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMDtcbiAgICBlID0gZU1heDtcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMik7XG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tO1xuICAgICAgYyAqPSAyO1xuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrKztcbiAgICAgIGMgLz0gMjtcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwO1xuICAgICAgZSA9IGVNYXg7XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IGUgKyBlQmlhcztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IDA7XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCk7XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbTtcbiAgZUxlbiArPSBtTGVuO1xuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpO1xuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyODtcbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiKzdaSnAwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzXCIsXCIvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0XCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB2YXIgcXVldWUgPSBbXTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldi5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoKHNvdXJjZSA9PT0gd2luZG93IHx8IHNvdXJjZSA9PT0gbnVsbCkgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufVxuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiKzdaSnAwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIsXCIvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzc1wiKSJdfQ==
