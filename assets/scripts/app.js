(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
require('./lib/ui');

require('./parts/grid');
require('./parts/inner');

}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_f16b489d.js","/")
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
  //$('.js__article-holder p').contents().filter(function(){
  //  return this.nodeType === 3;
  //}).wrap('<span class="js__article-text-spanned"/>');
  // if anything outside div is clicked - getting back to home
  $('.js__article-box').on('click', function(e){
    e.stopPropagation();
    //set to "return to home" to everything except text and image and header wrapped in dt and dd
    if( !($(e.target).is('p') || $(e.target).is('img') || 
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
      //Scale thumbnails if resolution is less than treshold
      windowWidth = $grid.width();
      windowHeight = $grid.height();
      var tresholdWindowWidth = 1920;
      if(windowWidth < tresholdWindowWidth){
        var scale = windowWidth/tresholdWindowWidth;
        itemWidth = scale * itemWidth;
        itemHeight = scale * itemHeight;
      }
      //itemWidth = parseInt(windowWidth/COLS);
      //itemHeight = parseInt(windowHeight/ROWS);
      maxOffsetX = windowWidth - itemWidth;
      maxOffsetY = windowHeight - itemHeight - 61;
    }

    // rearranges items using getRandomInt
    function rearrange(force, type) {
      var alpha = 0;
      var rad = maxOffsetY*0.6;
      $items.each(function() {
        alpha+=Math.PI/8;
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

    // aspetta per una seconda quando ha ricesto l'evento "resize" e ricalcolare i variabili
    $(window).on('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function() {
        recalc();
        // rearrange();
      }, 500)
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


    $(window).load( function(){
    recalc();
    rearrange();
  $grid.addClass('is__active');});

    // in 0.5 seconds sets grid opacity to 1
    setTimeout(function() {
      //$grid.addClass('is__active');
    }, 700);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YW5pYS9Eb2N1bWVudHMva29udG9yYS9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdmFuaWEvRG9jdW1lbnRzL2tvbnRvcmEvYXNzZXRzL3NjcmlwdHMvYXBwL2Zha2VfZjE2YjQ4OWQuanMiLCIvVXNlcnMvdmFuaWEvRG9jdW1lbnRzL2tvbnRvcmEvYXNzZXRzL3NjcmlwdHMvYXBwL2xpYi91aS5qcyIsIi9Vc2Vycy92YW5pYS9Eb2N1bWVudHMva29udG9yYS9hc3NldHMvc2NyaXB0cy9hcHAvcGFydHMvZ3JpZC5qcyIsIi9Vc2Vycy92YW5pYS9Eb2N1bWVudHMva29udG9yYS9hc3NldHMvc2NyaXB0cy9hcHAvcGFydHMvaW5uZXIuanMiLCIvVXNlcnMvdmFuaWEvRG9jdW1lbnRzL2tvbnRvcmEvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwiL1VzZXJzL3ZhbmlhL0RvY3VtZW50cy9rb250b3JhL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanMiLCIvVXNlcnMvdmFuaWEvRG9jdW1lbnRzL2tvbnRvcmEvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwiL1VzZXJzL3ZhbmlhL0RvY3VtZW50cy9rb250b3JhL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbnJlcXVpcmUoJy4vbGliL3VpJyk7XG5cbnJlcXVpcmUoJy4vcGFydHMvZ3JpZCcpO1xucmVxdWlyZSgnLi9wYXJ0cy9pbm5lcicpO1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIis3WkpwMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2Zha2VfZjE2YjQ4OWQuanNcIixcIi9cIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKiEgalF1ZXJ5IFVJIC0gdjEuMTAuNCAtIDIwMTQtMDYtMDZcbiogaHR0cDovL2pxdWVyeXVpLmNvbVxuKiBJbmNsdWRlczoganF1ZXJ5LnVpLmNvcmUuanMsIGpxdWVyeS51aS53aWRnZXQuanMsIGpxdWVyeS51aS5tb3VzZS5qcywganF1ZXJ5LnVpLmRyYWdnYWJsZS5qc1xuKiBDb3B5cmlnaHQgMjAxNCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzOyBMaWNlbnNlZCBNSVQgKi9cblxuKGZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gaSh0LGkpe3ZhciBzLGEsbyxyPXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImFyZWFcIj09PXI/KHM9dC5wYXJlbnROb2RlLGE9cy5uYW1lLHQuaHJlZiYmYSYmXCJtYXBcIj09PXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKT8obz1lKFwiaW1nW3VzZW1hcD0jXCIrYStcIl1cIilbMF0sISFvJiZuKG8pKTohMSk6KC9pbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9ufG9iamVjdC8udGVzdChyKT8hdC5kaXNhYmxlZDpcImFcIj09PXI/dC5ocmVmfHxpOmkpJiZuKHQpfWZ1bmN0aW9uIG4odCl7cmV0dXJuIGUuZXhwci5maWx0ZXJzLnZpc2libGUodCkmJiFlKHQpLnBhcmVudHMoKS5hZGRCYWNrKCkuZmlsdGVyKGZ1bmN0aW9uKCl7cmV0dXJuXCJoaWRkZW5cIj09PWUuY3NzKHRoaXMsXCJ2aXNpYmlsaXR5XCIpfSkubGVuZ3RofXZhciBzPTAsYT0vXnVpLWlkLVxcZCskLztlLnVpPWUudWl8fHt9LGUuZXh0ZW5kKGUudWkse3ZlcnNpb246XCIxLjEwLjRcIixrZXlDb2RlOntCQUNLU1BBQ0U6OCxDT01NQToxODgsREVMRVRFOjQ2LERPV046NDAsRU5EOjM1LEVOVEVSOjEzLEVTQ0FQRToyNyxIT01FOjM2LExFRlQ6MzcsTlVNUEFEX0FERDoxMDcsTlVNUEFEX0RFQ0lNQUw6MTEwLE5VTVBBRF9ESVZJREU6MTExLE5VTVBBRF9FTlRFUjoxMDgsTlVNUEFEX01VTFRJUExZOjEwNixOVU1QQURfU1VCVFJBQ1Q6MTA5LFBBR0VfRE9XTjozNCxQQUdFX1VQOjMzLFBFUklPRDoxOTAsUklHSFQ6MzksU1BBQ0U6MzIsVEFCOjksVVA6Mzh9fSksZS5mbi5leHRlbmQoe2ZvY3VzOmZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihpLG4pe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBpP3RoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PXRoaXM7c2V0VGltZW91dChmdW5jdGlvbigpe2UodCkuZm9jdXMoKSxuJiZuLmNhbGwodCl9LGkpfSk6dC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fShlLmZuLmZvY3VzKSxzY3JvbGxQYXJlbnQ6ZnVuY3Rpb24oKXt2YXIgdDtyZXR1cm4gdD1lLnVpLmllJiYvKHN0YXRpY3xyZWxhdGl2ZSkvLnRlc3QodGhpcy5jc3MoXCJwb3NpdGlvblwiKSl8fC9hYnNvbHV0ZS8udGVzdCh0aGlzLmNzcyhcInBvc2l0aW9uXCIpKT90aGlzLnBhcmVudHMoKS5maWx0ZXIoZnVuY3Rpb24oKXtyZXR1cm4vKHJlbGF0aXZlfGFic29sdXRlfGZpeGVkKS8udGVzdChlLmNzcyh0aGlzLFwicG9zaXRpb25cIikpJiYvKGF1dG98c2Nyb2xsKS8udGVzdChlLmNzcyh0aGlzLFwib3ZlcmZsb3dcIikrZS5jc3ModGhpcyxcIm92ZXJmbG93LXlcIikrZS5jc3ModGhpcyxcIm92ZXJmbG93LXhcIikpfSkuZXEoMCk6dGhpcy5wYXJlbnRzKCkuZmlsdGVyKGZ1bmN0aW9uKCl7cmV0dXJuLyhhdXRvfHNjcm9sbCkvLnRlc3QoZS5jc3ModGhpcyxcIm92ZXJmbG93XCIpK2UuY3NzKHRoaXMsXCJvdmVyZmxvdy15XCIpK2UuY3NzKHRoaXMsXCJvdmVyZmxvdy14XCIpKX0pLmVxKDApLC9maXhlZC8udGVzdCh0aGlzLmNzcyhcInBvc2l0aW9uXCIpKXx8IXQubGVuZ3RoP2UoZG9jdW1lbnQpOnR9LHpJbmRleDpmdW5jdGlvbihpKXtpZihpIT09dClyZXR1cm4gdGhpcy5jc3MoXCJ6SW5kZXhcIixpKTtpZih0aGlzLmxlbmd0aClmb3IodmFyIG4scyxhPWUodGhpc1swXSk7YS5sZW5ndGgmJmFbMF0hPT1kb2N1bWVudDspe2lmKG49YS5jc3MoXCJwb3NpdGlvblwiKSwoXCJhYnNvbHV0ZVwiPT09bnx8XCJyZWxhdGl2ZVwiPT09bnx8XCJmaXhlZFwiPT09bikmJihzPXBhcnNlSW50KGEuY3NzKFwiekluZGV4XCIpLDEwKSwhaXNOYU4ocykmJjAhPT1zKSlyZXR1cm4gczthPWEucGFyZW50KCl9cmV0dXJuIDB9LHVuaXF1ZUlkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3RoaXMuaWR8fCh0aGlzLmlkPVwidWktaWQtXCIrICsrcyl9KX0scmVtb3ZlVW5pcXVlSWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7YS50ZXN0KHRoaXMuaWQpJiZlKHRoaXMpLnJlbW92ZUF0dHIoXCJpZFwiKX0pfX0pLGUuZXh0ZW5kKGUuZXhwcltcIjpcIl0se2RhdGE6ZS5leHByLmNyZWF0ZVBzZXVkbz9lLmV4cHIuY3JlYXRlUHNldWRvKGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihpKXtyZXR1cm4hIWUuZGF0YShpLHQpfX0pOmZ1bmN0aW9uKHQsaSxuKXtyZXR1cm4hIWUuZGF0YSh0LG5bM10pfSxmb2N1c2FibGU6ZnVuY3Rpb24odCl7cmV0dXJuIGkodCwhaXNOYU4oZS5hdHRyKHQsXCJ0YWJpbmRleFwiKSkpfSx0YWJiYWJsZTpmdW5jdGlvbih0KXt2YXIgbj1lLmF0dHIodCxcInRhYmluZGV4XCIpLHM9aXNOYU4obik7cmV0dXJuKHN8fG4+PTApJiZpKHQsIXMpfX0pLGUoXCI8YT5cIikub3V0ZXJXaWR0aCgxKS5qcXVlcnl8fGUuZWFjaChbXCJXaWR0aFwiLFwiSGVpZ2h0XCJdLGZ1bmN0aW9uKGksbil7ZnVuY3Rpb24gcyh0LGksbixzKXtyZXR1cm4gZS5lYWNoKGEsZnVuY3Rpb24oKXtpLT1wYXJzZUZsb2F0KGUuY3NzKHQsXCJwYWRkaW5nXCIrdGhpcykpfHwwLG4mJihpLT1wYXJzZUZsb2F0KGUuY3NzKHQsXCJib3JkZXJcIit0aGlzK1wiV2lkdGhcIikpfHwwKSxzJiYoaS09cGFyc2VGbG9hdChlLmNzcyh0LFwibWFyZ2luXCIrdGhpcykpfHwwKX0pLGl9dmFyIGE9XCJXaWR0aFwiPT09bj9bXCJMZWZ0XCIsXCJSaWdodFwiXTpbXCJUb3BcIixcIkJvdHRvbVwiXSxvPW4udG9Mb3dlckNhc2UoKSxyPXtpbm5lcldpZHRoOmUuZm4uaW5uZXJXaWR0aCxpbm5lckhlaWdodDplLmZuLmlubmVySGVpZ2h0LG91dGVyV2lkdGg6ZS5mbi5vdXRlcldpZHRoLG91dGVySGVpZ2h0OmUuZm4ub3V0ZXJIZWlnaHR9O2UuZm5bXCJpbm5lclwiK25dPWZ1bmN0aW9uKGkpe3JldHVybiBpPT09dD9yW1wiaW5uZXJcIituXS5jYWxsKHRoaXMpOnRoaXMuZWFjaChmdW5jdGlvbigpe2UodGhpcykuY3NzKG8scyh0aGlzLGkpK1wicHhcIil9KX0sZS5mbltcIm91dGVyXCIrbl09ZnVuY3Rpb24odCxpKXtyZXR1cm5cIm51bWJlclwiIT10eXBlb2YgdD9yW1wib3V0ZXJcIituXS5jYWxsKHRoaXMsdCk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZSh0aGlzKS5jc3MobyxzKHRoaXMsdCwhMCxpKStcInB4XCIpfSl9fSksZS5mbi5hZGRCYWNrfHwoZS5mbi5hZGRCYWNrPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmFkZChudWxsPT1lP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGUpKX0pLGUoXCI8YT5cIikuZGF0YShcImEtYlwiLFwiYVwiKS5yZW1vdmVEYXRhKFwiYS1iXCIpLmRhdGEoXCJhLWJcIikmJihlLmZuLnJlbW92ZURhdGE9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGkpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoP3QuY2FsbCh0aGlzLGUuY2FtZWxDYXNlKGkpKTp0LmNhbGwodGhpcyl9fShlLmZuLnJlbW92ZURhdGEpKSxlLnVpLmllPSEhL21zaWUgW1xcdy5dKy8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpLGUuc3VwcG9ydC5zZWxlY3RzdGFydD1cIm9uc2VsZWN0c3RhcnRcImluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZS5mbi5leHRlbmQoe2Rpc2FibGVTZWxlY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5iaW5kKChlLnN1cHBvcnQuc2VsZWN0c3RhcnQ/XCJzZWxlY3RzdGFydFwiOlwibW91c2Vkb3duXCIpK1wiLnVpLWRpc2FibGVTZWxlY3Rpb25cIixmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCl9KX0sZW5hYmxlU2VsZWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudW5iaW5kKFwiLnVpLWRpc2FibGVTZWxlY3Rpb25cIil9fSksZS5leHRlbmQoZS51aSx7cGx1Z2luOnthZGQ6ZnVuY3Rpb24odCxpLG4pe3ZhciBzLGE9ZS51aVt0XS5wcm90b3R5cGU7Zm9yKHMgaW4gbilhLnBsdWdpbnNbc109YS5wbHVnaW5zW3NdfHxbXSxhLnBsdWdpbnNbc10ucHVzaChbaSxuW3NdXSl9LGNhbGw6ZnVuY3Rpb24oZSx0LGkpe3ZhciBuLHM9ZS5wbHVnaW5zW3RdO2lmKHMmJmUuZWxlbWVudFswXS5wYXJlbnROb2RlJiYxMSE9PWUuZWxlbWVudFswXS5wYXJlbnROb2RlLm5vZGVUeXBlKWZvcihuPTA7cy5sZW5ndGg+bjtuKyspZS5vcHRpb25zW3Nbbl1bMF1dJiZzW25dWzFdLmFwcGx5KGUuZWxlbWVudCxpKX19LGhhc1Njcm9sbDpmdW5jdGlvbih0LGkpe2lmKFwiaGlkZGVuXCI9PT1lKHQpLmNzcyhcIm92ZXJmbG93XCIpKXJldHVybiExO3ZhciBuPWkmJlwibGVmdFwiPT09aT9cInNjcm9sbExlZnRcIjpcInNjcm9sbFRvcFwiLHM9ITE7cmV0dXJuIHRbbl0+MD8hMDoodFtuXT0xLHM9dFtuXT4wLHRbbl09MCxzKX19KX0pKGpRdWVyeSk7KGZ1bmN0aW9uKHQsZSl7dmFyIGk9MCxzPUFycmF5LnByb3RvdHlwZS5zbGljZSxuPXQuY2xlYW5EYXRhO3QuY2xlYW5EYXRhPWZ1bmN0aW9uKGUpe2Zvcih2YXIgaSxzPTA7bnVsbCE9KGk9ZVtzXSk7cysrKXRyeXt0KGkpLnRyaWdnZXJIYW5kbGVyKFwicmVtb3ZlXCIpfWNhdGNoKG8pe31uKGUpfSx0LndpZGdldD1mdW5jdGlvbihpLHMsbil7dmFyIG8sYSxyLGgsbD17fSxjPWkuc3BsaXQoXCIuXCIpWzBdO2k9aS5zcGxpdChcIi5cIilbMV0sbz1jK1wiLVwiK2ksbnx8KG49cyxzPXQuV2lkZ2V0KSx0LmV4cHJbXCI6XCJdW28udG9Mb3dlckNhc2UoKV09ZnVuY3Rpb24oZSl7cmV0dXJuISF0LmRhdGEoZSxvKX0sdFtjXT10W2NdfHx7fSxhPXRbY11baV0scj10W2NdW2ldPWZ1bmN0aW9uKHQsaSl7cmV0dXJuIHRoaXMuX2NyZWF0ZVdpZGdldD8oYXJndW1lbnRzLmxlbmd0aCYmdGhpcy5fY3JlYXRlV2lkZ2V0KHQsaSksZSk6bmV3IHIodCxpKX0sdC5leHRlbmQocixhLHt2ZXJzaW9uOm4udmVyc2lvbixfcHJvdG86dC5leHRlbmQoe30sbiksX2NoaWxkQ29uc3RydWN0b3JzOltdfSksaD1uZXcgcyxoLm9wdGlvbnM9dC53aWRnZXQuZXh0ZW5kKHt9LGgub3B0aW9ucyksdC5lYWNoKG4sZnVuY3Rpb24oaSxuKXtyZXR1cm4gdC5pc0Z1bmN0aW9uKG4pPyhsW2ldPWZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oKXtyZXR1cm4gcy5wcm90b3R5cGVbaV0uYXBwbHkodGhpcyxhcmd1bWVudHMpfSxlPWZ1bmN0aW9uKHQpe3JldHVybiBzLnByb3RvdHlwZVtpXS5hcHBseSh0aGlzLHQpfTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgaSxzPXRoaXMuX3N1cGVyLG89dGhpcy5fc3VwZXJBcHBseTtyZXR1cm4gdGhpcy5fc3VwZXI9dCx0aGlzLl9zdXBlckFwcGx5PWUsaT1uLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLl9zdXBlcj1zLHRoaXMuX3N1cGVyQXBwbHk9byxpfX0oKSxlKToobFtpXT1uLGUpfSksci5wcm90b3R5cGU9dC53aWRnZXQuZXh0ZW5kKGgse3dpZGdldEV2ZW50UHJlZml4OmE/aC53aWRnZXRFdmVudFByZWZpeHx8aTppfSxsLHtjb25zdHJ1Y3RvcjpyLG5hbWVzcGFjZTpjLHdpZGdldE5hbWU6aSx3aWRnZXRGdWxsTmFtZTpvfSksYT8odC5lYWNoKGEuX2NoaWxkQ29uc3RydWN0b3JzLGZ1bmN0aW9uKGUsaSl7dmFyIHM9aS5wcm90b3R5cGU7dC53aWRnZXQocy5uYW1lc3BhY2UrXCIuXCIrcy53aWRnZXROYW1lLHIsaS5fcHJvdG8pfSksZGVsZXRlIGEuX2NoaWxkQ29uc3RydWN0b3JzKTpzLl9jaGlsZENvbnN0cnVjdG9ycy5wdXNoKHIpLHQud2lkZ2V0LmJyaWRnZShpLHIpfSx0LndpZGdldC5leHRlbmQ9ZnVuY3Rpb24oaSl7Zm9yKHZhciBuLG8sYT1zLmNhbGwoYXJndW1lbnRzLDEpLHI9MCxoPWEubGVuZ3RoO2g+cjtyKyspZm9yKG4gaW4gYVtyXSlvPWFbcl1bbl0sYVtyXS5oYXNPd25Qcm9wZXJ0eShuKSYmbyE9PWUmJihpW25dPXQuaXNQbGFpbk9iamVjdChvKT90LmlzUGxhaW5PYmplY3QoaVtuXSk/dC53aWRnZXQuZXh0ZW5kKHt9LGlbbl0sbyk6dC53aWRnZXQuZXh0ZW5kKHt9LG8pOm8pO3JldHVybiBpfSx0LndpZGdldC5icmlkZ2U9ZnVuY3Rpb24oaSxuKXt2YXIgbz1uLnByb3RvdHlwZS53aWRnZXRGdWxsTmFtZXx8aTt0LmZuW2ldPWZ1bmN0aW9uKGEpe3ZhciByPVwic3RyaW5nXCI9PXR5cGVvZiBhLGg9cy5jYWxsKGFyZ3VtZW50cywxKSxsPXRoaXM7cmV0dXJuIGE9IXImJmgubGVuZ3RoP3Qud2lkZ2V0LmV4dGVuZC5hcHBseShudWxsLFthXS5jb25jYXQoaCkpOmEscj90aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgcyxuPXQuZGF0YSh0aGlzLG8pO3JldHVybiBuP3QuaXNGdW5jdGlvbihuW2FdKSYmXCJfXCIhPT1hLmNoYXJBdCgwKT8ocz1uW2FdLmFwcGx5KG4saCkscyE9PW4mJnMhPT1lPyhsPXMmJnMuanF1ZXJ5P2wucHVzaFN0YWNrKHMuZ2V0KCkpOnMsITEpOmUpOnQuZXJyb3IoXCJubyBzdWNoIG1ldGhvZCAnXCIrYStcIicgZm9yIFwiK2krXCIgd2lkZ2V0IGluc3RhbmNlXCIpOnQuZXJyb3IoXCJjYW5ub3QgY2FsbCBtZXRob2RzIG9uIFwiK2krXCIgcHJpb3IgdG8gaW5pdGlhbGl6YXRpb247IFwiK1wiYXR0ZW1wdGVkIHRvIGNhbGwgbWV0aG9kICdcIithK1wiJ1wiKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPXQuZGF0YSh0aGlzLG8pO2U/ZS5vcHRpb24oYXx8e30pLl9pbml0KCk6dC5kYXRhKHRoaXMsbyxuZXcgbihhLHRoaXMpKX0pLGx9fSx0LldpZGdldD1mdW5jdGlvbigpe30sdC5XaWRnZXQuX2NoaWxkQ29uc3RydWN0b3JzPVtdLHQuV2lkZ2V0LnByb3RvdHlwZT17d2lkZ2V0TmFtZTpcIndpZGdldFwiLHdpZGdldEV2ZW50UHJlZml4OlwiXCIsZGVmYXVsdEVsZW1lbnQ6XCI8ZGl2PlwiLG9wdGlvbnM6e2Rpc2FibGVkOiExLGNyZWF0ZTpudWxsfSxfY3JlYXRlV2lkZ2V0OmZ1bmN0aW9uKGUscyl7cz10KHN8fHRoaXMuZGVmYXVsdEVsZW1lbnR8fHRoaXMpWzBdLHRoaXMuZWxlbWVudD10KHMpLHRoaXMudXVpZD1pKyssdGhpcy5ldmVudE5hbWVzcGFjZT1cIi5cIit0aGlzLndpZGdldE5hbWUrdGhpcy51dWlkLHRoaXMub3B0aW9ucz10LndpZGdldC5leHRlbmQoe30sdGhpcy5vcHRpb25zLHRoaXMuX2dldENyZWF0ZU9wdGlvbnMoKSxlKSx0aGlzLmJpbmRpbmdzPXQoKSx0aGlzLmhvdmVyYWJsZT10KCksdGhpcy5mb2N1c2FibGU9dCgpLHMhPT10aGlzJiYodC5kYXRhKHMsdGhpcy53aWRnZXRGdWxsTmFtZSx0aGlzKSx0aGlzLl9vbighMCx0aGlzLmVsZW1lbnQse3JlbW92ZTpmdW5jdGlvbih0KXt0LnRhcmdldD09PXMmJnRoaXMuZGVzdHJveSgpfX0pLHRoaXMuZG9jdW1lbnQ9dChzLnN0eWxlP3Mub3duZXJEb2N1bWVudDpzLmRvY3VtZW50fHxzKSx0aGlzLndpbmRvdz10KHRoaXMuZG9jdW1lbnRbMF0uZGVmYXVsdFZpZXd8fHRoaXMuZG9jdW1lbnRbMF0ucGFyZW50V2luZG93KSksdGhpcy5fY3JlYXRlKCksdGhpcy5fdHJpZ2dlcihcImNyZWF0ZVwiLG51bGwsdGhpcy5fZ2V0Q3JlYXRlRXZlbnREYXRhKCkpLHRoaXMuX2luaXQoKX0sX2dldENyZWF0ZU9wdGlvbnM6dC5ub29wLF9nZXRDcmVhdGVFdmVudERhdGE6dC5ub29wLF9jcmVhdGU6dC5ub29wLF9pbml0OnQubm9vcCxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5fZGVzdHJveSgpLHRoaXMuZWxlbWVudC51bmJpbmQodGhpcy5ldmVudE5hbWVzcGFjZSkucmVtb3ZlRGF0YSh0aGlzLndpZGdldE5hbWUpLnJlbW92ZURhdGEodGhpcy53aWRnZXRGdWxsTmFtZSkucmVtb3ZlRGF0YSh0LmNhbWVsQ2FzZSh0aGlzLndpZGdldEZ1bGxOYW1lKSksdGhpcy53aWRnZXQoKS51bmJpbmQodGhpcy5ldmVudE5hbWVzcGFjZSkucmVtb3ZlQXR0cihcImFyaWEtZGlzYWJsZWRcIikucmVtb3ZlQ2xhc3ModGhpcy53aWRnZXRGdWxsTmFtZStcIi1kaXNhYmxlZCBcIitcInVpLXN0YXRlLWRpc2FibGVkXCIpLHRoaXMuYmluZGluZ3MudW5iaW5kKHRoaXMuZXZlbnROYW1lc3BhY2UpLHRoaXMuaG92ZXJhYmxlLnJlbW92ZUNsYXNzKFwidWktc3RhdGUtaG92ZXJcIiksdGhpcy5mb2N1c2FibGUucmVtb3ZlQ2xhc3MoXCJ1aS1zdGF0ZS1mb2N1c1wiKX0sX2Rlc3Ryb3k6dC5ub29wLHdpZGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVsZW1lbnR9LG9wdGlvbjpmdW5jdGlvbihpLHMpe3ZhciBuLG8sYSxyPWk7aWYoMD09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHQud2lkZ2V0LmV4dGVuZCh7fSx0aGlzLm9wdGlvbnMpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpKWlmKHI9e30sbj1pLnNwbGl0KFwiLlwiKSxpPW4uc2hpZnQoKSxuLmxlbmd0aCl7Zm9yKG89cltpXT10LndpZGdldC5leHRlbmQoe30sdGhpcy5vcHRpb25zW2ldKSxhPTA7bi5sZW5ndGgtMT5hO2ErKylvW25bYV1dPW9bblthXV18fHt9LG89b1tuW2FdXTtpZihpPW4ucG9wKCksMT09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIG9baV09PT1lP251bGw6b1tpXTtvW2ldPXN9ZWxzZXtpZigxPT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5vcHRpb25zW2ldPT09ZT9udWxsOnRoaXMub3B0aW9uc1tpXTtyW2ldPXN9cmV0dXJuIHRoaXMuX3NldE9wdGlvbnMociksdGhpc30sX3NldE9wdGlvbnM6ZnVuY3Rpb24odCl7dmFyIGU7Zm9yKGUgaW4gdCl0aGlzLl9zZXRPcHRpb24oZSx0W2VdKTtyZXR1cm4gdGhpc30sX3NldE9wdGlvbjpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLm9wdGlvbnNbdF09ZSxcImRpc2FibGVkXCI9PT10JiYodGhpcy53aWRnZXQoKS50b2dnbGVDbGFzcyh0aGlzLndpZGdldEZ1bGxOYW1lK1wiLWRpc2FibGVkIHVpLXN0YXRlLWRpc2FibGVkXCIsISFlKS5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLGUpLHRoaXMuaG92ZXJhYmxlLnJlbW92ZUNsYXNzKFwidWktc3RhdGUtaG92ZXJcIiksdGhpcy5mb2N1c2FibGUucmVtb3ZlQ2xhc3MoXCJ1aS1zdGF0ZS1mb2N1c1wiKSksdGhpc30sZW5hYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3NldE9wdGlvbihcImRpc2FibGVkXCIsITEpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3NldE9wdGlvbihcImRpc2FibGVkXCIsITApfSxfb246ZnVuY3Rpb24oaSxzLG4pe3ZhciBvLGE9dGhpcztcImJvb2xlYW5cIiE9dHlwZW9mIGkmJihuPXMscz1pLGk9ITEpLG4/KHM9bz10KHMpLHRoaXMuYmluZGluZ3M9dGhpcy5iaW5kaW5ncy5hZGQocykpOihuPXMscz10aGlzLmVsZW1lbnQsbz10aGlzLndpZGdldCgpKSx0LmVhY2gobixmdW5jdGlvbihuLHIpe2Z1bmN0aW9uIGgoKXtyZXR1cm4gaXx8YS5vcHRpb25zLmRpc2FibGVkIT09ITAmJiF0KHRoaXMpLmhhc0NsYXNzKFwidWktc3RhdGUtZGlzYWJsZWRcIik/KFwic3RyaW5nXCI9PXR5cGVvZiByP2Fbcl06cikuYXBwbHkoYSxhcmd1bWVudHMpOmV9XCJzdHJpbmdcIiE9dHlwZW9mIHImJihoLmd1aWQ9ci5ndWlkPXIuZ3VpZHx8aC5ndWlkfHx0Lmd1aWQrKyk7dmFyIGw9bi5tYXRjaCgvXihcXHcrKVxccyooLiopJC8pLGM9bFsxXSthLmV2ZW50TmFtZXNwYWNlLHU9bFsyXTt1P28uZGVsZWdhdGUodSxjLGgpOnMuYmluZChjLGgpfSl9LF9vZmY6ZnVuY3Rpb24odCxlKXtlPShlfHxcIlwiKS5zcGxpdChcIiBcIikuam9pbih0aGlzLmV2ZW50TmFtZXNwYWNlK1wiIFwiKSt0aGlzLmV2ZW50TmFtZXNwYWNlLHQudW5iaW5kKGUpLnVuZGVsZWdhdGUoZSl9LF9kZWxheTpmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIGkoKXtyZXR1cm4oXCJzdHJpbmdcIj09dHlwZW9mIHQ/c1t0XTp0KS5hcHBseShzLGFyZ3VtZW50cyl9dmFyIHM9dGhpcztyZXR1cm4gc2V0VGltZW91dChpLGV8fDApfSxfaG92ZXJhYmxlOmZ1bmN0aW9uKGUpe3RoaXMuaG92ZXJhYmxlPXRoaXMuaG92ZXJhYmxlLmFkZChlKSx0aGlzLl9vbihlLHttb3VzZWVudGVyOmZ1bmN0aW9uKGUpe3QoZS5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcyhcInVpLXN0YXRlLWhvdmVyXCIpfSxtb3VzZWxlYXZlOmZ1bmN0aW9uKGUpe3QoZS5jdXJyZW50VGFyZ2V0KS5yZW1vdmVDbGFzcyhcInVpLXN0YXRlLWhvdmVyXCIpfX0pfSxfZm9jdXNhYmxlOmZ1bmN0aW9uKGUpe3RoaXMuZm9jdXNhYmxlPXRoaXMuZm9jdXNhYmxlLmFkZChlKSx0aGlzLl9vbihlLHtmb2N1c2luOmZ1bmN0aW9uKGUpe3QoZS5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcyhcInVpLXN0YXRlLWZvY3VzXCIpfSxmb2N1c291dDpmdW5jdGlvbihlKXt0KGUuY3VycmVudFRhcmdldCkucmVtb3ZlQ2xhc3MoXCJ1aS1zdGF0ZS1mb2N1c1wiKX19KX0sX3RyaWdnZXI6ZnVuY3Rpb24oZSxpLHMpe3ZhciBuLG8sYT10aGlzLm9wdGlvbnNbZV07aWYocz1zfHx7fSxpPXQuRXZlbnQoaSksaS50eXBlPShlPT09dGhpcy53aWRnZXRFdmVudFByZWZpeD9lOnRoaXMud2lkZ2V0RXZlbnRQcmVmaXgrZSkudG9Mb3dlckNhc2UoKSxpLnRhcmdldD10aGlzLmVsZW1lbnRbMF0sbz1pLm9yaWdpbmFsRXZlbnQpZm9yKG4gaW4gbyluIGluIGl8fChpW25dPW9bbl0pO3JldHVybiB0aGlzLmVsZW1lbnQudHJpZ2dlcihpLHMpLCEodC5pc0Z1bmN0aW9uKGEpJiZhLmFwcGx5KHRoaXMuZWxlbWVudFswXSxbaV0uY29uY2F0KHMpKT09PSExfHxpLmlzRGVmYXVsdFByZXZlbnRlZCgpKX19LHQuZWFjaCh7c2hvdzpcImZhZGVJblwiLGhpZGU6XCJmYWRlT3V0XCJ9LGZ1bmN0aW9uKGUsaSl7dC5XaWRnZXQucHJvdG90eXBlW1wiX1wiK2VdPWZ1bmN0aW9uKHMsbixvKXtcInN0cmluZ1wiPT10eXBlb2YgbiYmKG49e2VmZmVjdDpufSk7dmFyIGEscj1uP249PT0hMHx8XCJudW1iZXJcIj09dHlwZW9mIG4/aTpuLmVmZmVjdHx8aTplO249bnx8e30sXCJudW1iZXJcIj09dHlwZW9mIG4mJihuPXtkdXJhdGlvbjpufSksYT0hdC5pc0VtcHR5T2JqZWN0KG4pLG4uY29tcGxldGU9byxuLmRlbGF5JiZzLmRlbGF5KG4uZGVsYXkpLGEmJnQuZWZmZWN0cyYmdC5lZmZlY3RzLmVmZmVjdFtyXT9zW2VdKG4pOnIhPT1lJiZzW3JdP3Nbcl0obi5kdXJhdGlvbixuLmVhc2luZyxvKTpzLnF1ZXVlKGZ1bmN0aW9uKGkpe3QodGhpcylbZV0oKSxvJiZvLmNhbGwoc1swXSksaSgpfSl9fSl9KShqUXVlcnkpOyhmdW5jdGlvbih0KXt2YXIgZT0hMTt0KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uKCl7ZT0hMX0pLHQud2lkZ2V0KFwidWkubW91c2VcIix7dmVyc2lvbjpcIjEuMTAuNFwiLG9wdGlvbnM6e2NhbmNlbDpcImlucHV0LHRleHRhcmVhLGJ1dHRvbixzZWxlY3Qsb3B0aW9uXCIsZGlzdGFuY2U6MSxkZWxheTowfSxfbW91c2VJbml0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLmVsZW1lbnQuYmluZChcIm1vdXNlZG93bi5cIit0aGlzLndpZGdldE5hbWUsZnVuY3Rpb24odCl7cmV0dXJuIGUuX21vdXNlRG93bih0KX0pLmJpbmQoXCJjbGljay5cIit0aGlzLndpZGdldE5hbWUsZnVuY3Rpb24oaSl7cmV0dXJuITA9PT10LmRhdGEoaS50YXJnZXQsZS53aWRnZXROYW1lK1wiLnByZXZlbnRDbGlja0V2ZW50XCIpPyh0LnJlbW92ZURhdGEoaS50YXJnZXQsZS53aWRnZXROYW1lK1wiLnByZXZlbnRDbGlja0V2ZW50XCIpLGkuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksITEpOnVuZGVmaW5lZH0pLHRoaXMuc3RhcnRlZD0hMX0sX21vdXNlRGVzdHJveTpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC51bmJpbmQoXCIuXCIrdGhpcy53aWRnZXROYW1lKSx0aGlzLl9tb3VzZU1vdmVEZWxlZ2F0ZSYmdChkb2N1bWVudCkudW5iaW5kKFwibW91c2Vtb3ZlLlwiK3RoaXMud2lkZ2V0TmFtZSx0aGlzLl9tb3VzZU1vdmVEZWxlZ2F0ZSkudW5iaW5kKFwibW91c2V1cC5cIit0aGlzLndpZGdldE5hbWUsdGhpcy5fbW91c2VVcERlbGVnYXRlKX0sX21vdXNlRG93bjpmdW5jdGlvbihpKXtpZighZSl7dGhpcy5fbW91c2VTdGFydGVkJiZ0aGlzLl9tb3VzZVVwKGkpLHRoaXMuX21vdXNlRG93bkV2ZW50PWk7dmFyIHM9dGhpcyxuPTE9PT1pLndoaWNoLGE9XCJzdHJpbmdcIj09dHlwZW9mIHRoaXMub3B0aW9ucy5jYW5jZWwmJmkudGFyZ2V0Lm5vZGVOYW1lP3QoaS50YXJnZXQpLmNsb3Nlc3QodGhpcy5vcHRpb25zLmNhbmNlbCkubGVuZ3RoOiExO3JldHVybiBuJiYhYSYmdGhpcy5fbW91c2VDYXB0dXJlKGkpPyh0aGlzLm1vdXNlRGVsYXlNZXQ9IXRoaXMub3B0aW9ucy5kZWxheSx0aGlzLm1vdXNlRGVsYXlNZXR8fCh0aGlzLl9tb3VzZURlbGF5VGltZXI9c2V0VGltZW91dChmdW5jdGlvbigpe3MubW91c2VEZWxheU1ldD0hMH0sdGhpcy5vcHRpb25zLmRlbGF5KSksdGhpcy5fbW91c2VEaXN0YW5jZU1ldChpKSYmdGhpcy5fbW91c2VEZWxheU1ldChpKSYmKHRoaXMuX21vdXNlU3RhcnRlZD10aGlzLl9tb3VzZVN0YXJ0KGkpIT09ITEsIXRoaXMuX21vdXNlU3RhcnRlZCk/KGkucHJldmVudERlZmF1bHQoKSwhMCk6KCEwPT09dC5kYXRhKGkudGFyZ2V0LHRoaXMud2lkZ2V0TmFtZStcIi5wcmV2ZW50Q2xpY2tFdmVudFwiKSYmdC5yZW1vdmVEYXRhKGkudGFyZ2V0LHRoaXMud2lkZ2V0TmFtZStcIi5wcmV2ZW50Q2xpY2tFdmVudFwiKSx0aGlzLl9tb3VzZU1vdmVEZWxlZ2F0ZT1mdW5jdGlvbih0KXtyZXR1cm4gcy5fbW91c2VNb3ZlKHQpfSx0aGlzLl9tb3VzZVVwRGVsZWdhdGU9ZnVuY3Rpb24odCl7cmV0dXJuIHMuX21vdXNlVXAodCl9LHQoZG9jdW1lbnQpLmJpbmQoXCJtb3VzZW1vdmUuXCIrdGhpcy53aWRnZXROYW1lLHRoaXMuX21vdXNlTW92ZURlbGVnYXRlKS5iaW5kKFwibW91c2V1cC5cIit0aGlzLndpZGdldE5hbWUsdGhpcy5fbW91c2VVcERlbGVnYXRlKSxpLnByZXZlbnREZWZhdWx0KCksZT0hMCwhMCkpOiEwfX0sX21vdXNlTW92ZTpmdW5jdGlvbihlKXtyZXR1cm4gdC51aS5pZSYmKCFkb2N1bWVudC5kb2N1bWVudE1vZGV8fDk+ZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSYmIWUuYnV0dG9uP3RoaXMuX21vdXNlVXAoZSk6dGhpcy5fbW91c2VTdGFydGVkPyh0aGlzLl9tb3VzZURyYWcoZSksZS5wcmV2ZW50RGVmYXVsdCgpKToodGhpcy5fbW91c2VEaXN0YW5jZU1ldChlKSYmdGhpcy5fbW91c2VEZWxheU1ldChlKSYmKHRoaXMuX21vdXNlU3RhcnRlZD10aGlzLl9tb3VzZVN0YXJ0KHRoaXMuX21vdXNlRG93bkV2ZW50LGUpIT09ITEsdGhpcy5fbW91c2VTdGFydGVkP3RoaXMuX21vdXNlRHJhZyhlKTp0aGlzLl9tb3VzZVVwKGUpKSwhdGhpcy5fbW91c2VTdGFydGVkKX0sX21vdXNlVXA6ZnVuY3Rpb24oZSl7cmV0dXJuIHQoZG9jdW1lbnQpLnVuYmluZChcIm1vdXNlbW92ZS5cIit0aGlzLndpZGdldE5hbWUsdGhpcy5fbW91c2VNb3ZlRGVsZWdhdGUpLnVuYmluZChcIm1vdXNldXAuXCIrdGhpcy53aWRnZXROYW1lLHRoaXMuX21vdXNlVXBEZWxlZ2F0ZSksdGhpcy5fbW91c2VTdGFydGVkJiYodGhpcy5fbW91c2VTdGFydGVkPSExLGUudGFyZ2V0PT09dGhpcy5fbW91c2VEb3duRXZlbnQudGFyZ2V0JiZ0LmRhdGEoZS50YXJnZXQsdGhpcy53aWRnZXROYW1lK1wiLnByZXZlbnRDbGlja0V2ZW50XCIsITApLHRoaXMuX21vdXNlU3RvcChlKSksITF9LF9tb3VzZURpc3RhbmNlTWV0OmZ1bmN0aW9uKHQpe3JldHVybiBNYXRoLm1heChNYXRoLmFicyh0aGlzLl9tb3VzZURvd25FdmVudC5wYWdlWC10LnBhZ2VYKSxNYXRoLmFicyh0aGlzLl9tb3VzZURvd25FdmVudC5wYWdlWS10LnBhZ2VZKSk+PXRoaXMub3B0aW9ucy5kaXN0YW5jZX0sX21vdXNlRGVsYXlNZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb3VzZURlbGF5TWV0fSxfbW91c2VTdGFydDpmdW5jdGlvbigpe30sX21vdXNlRHJhZzpmdW5jdGlvbigpe30sX21vdXNlU3RvcDpmdW5jdGlvbigpe30sX21vdXNlQ2FwdHVyZTpmdW5jdGlvbigpe3JldHVybiEwfX0pfSkoalF1ZXJ5KTsoZnVuY3Rpb24odCl7dC53aWRnZXQoXCJ1aS5kcmFnZ2FibGVcIix0LnVpLm1vdXNlLHt2ZXJzaW9uOlwiMS4xMC40XCIsd2lkZ2V0RXZlbnRQcmVmaXg6XCJkcmFnXCIsb3B0aW9uczp7YWRkQ2xhc3NlczohMCxhcHBlbmRUbzpcInBhcmVudFwiLGF4aXM6ITEsY29ubmVjdFRvU29ydGFibGU6ITEsY29udGFpbm1lbnQ6ITEsY3Vyc29yOlwiYXV0b1wiLGN1cnNvckF0OiExLGdyaWQ6ITEsaGFuZGxlOiExLGhlbHBlcjpcIm9yaWdpbmFsXCIsaWZyYW1lRml4OiExLG9wYWNpdHk6ITEscmVmcmVzaFBvc2l0aW9uczohMSxyZXZlcnQ6ITEscmV2ZXJ0RHVyYXRpb246NTAwLHNjb3BlOlwiZGVmYXVsdFwiLHNjcm9sbDohMCxzY3JvbGxTZW5zaXRpdml0eToyMCxzY3JvbGxTcGVlZDoyMCxzbmFwOiExLHNuYXBNb2RlOlwiYm90aFwiLHNuYXBUb2xlcmFuY2U6MjAsc3RhY2s6ITEsekluZGV4OiExLGRyYWc6bnVsbCxzdGFydDpudWxsLHN0b3A6bnVsbH0sX2NyZWF0ZTpmdW5jdGlvbigpe1wib3JpZ2luYWxcIiE9PXRoaXMub3B0aW9ucy5oZWxwZXJ8fC9eKD86cnxhfGYpLy50ZXN0KHRoaXMuZWxlbWVudC5jc3MoXCJwb3NpdGlvblwiKSl8fCh0aGlzLmVsZW1lbnRbMF0uc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSx0aGlzLm9wdGlvbnMuYWRkQ2xhc3NlcyYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwidWktZHJhZ2dhYmxlXCIpLHRoaXMub3B0aW9ucy5kaXNhYmxlZCYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwidWktZHJhZ2dhYmxlLWRpc2FibGVkXCIpLHRoaXMuX21vdXNlSW5pdCgpfSxfZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcInVpLWRyYWdnYWJsZSB1aS1kcmFnZ2FibGUtZHJhZ2dpbmcgdWktZHJhZ2dhYmxlLWRpc2FibGVkXCIpLHRoaXMuX21vdXNlRGVzdHJveSgpfSxfbW91c2VDYXB0dXJlOmZ1bmN0aW9uKGUpe3ZhciBpPXRoaXMub3B0aW9ucztyZXR1cm4gdGhpcy5oZWxwZXJ8fGkuZGlzYWJsZWR8fHQoZS50YXJnZXQpLmNsb3Nlc3QoXCIudWktcmVzaXphYmxlLWhhbmRsZVwiKS5sZW5ndGg+MD8hMToodGhpcy5oYW5kbGU9dGhpcy5fZ2V0SGFuZGxlKGUpLHRoaXMuaGFuZGxlPyh0KGkuaWZyYW1lRml4PT09ITA/XCJpZnJhbWVcIjppLmlmcmFtZUZpeCkuZWFjaChmdW5jdGlvbigpe3QoXCI8ZGl2IGNsYXNzPSd1aS1kcmFnZ2FibGUtaWZyYW1lRml4JyBzdHlsZT0nYmFja2dyb3VuZDogI2ZmZjsnPjwvZGl2PlwiKS5jc3Moe3dpZHRoOnRoaXMub2Zmc2V0V2lkdGgrXCJweFwiLGhlaWdodDp0aGlzLm9mZnNldEhlaWdodCtcInB4XCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLG9wYWNpdHk6XCIwLjAwMVwiLHpJbmRleDoxZTN9KS5jc3ModCh0aGlzKS5vZmZzZXQoKSkuYXBwZW5kVG8oXCJib2R5XCIpfSksITApOiExKX0sX21vdXNlU3RhcnQ6ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcy5vcHRpb25zO3JldHVybiB0aGlzLmhlbHBlcj10aGlzLl9jcmVhdGVIZWxwZXIoZSksdGhpcy5oZWxwZXIuYWRkQ2xhc3MoXCJ1aS1kcmFnZ2FibGUtZHJhZ2dpbmdcIiksdGhpcy5fY2FjaGVIZWxwZXJQcm9wb3J0aW9ucygpLHQudWkuZGRtYW5hZ2VyJiYodC51aS5kZG1hbmFnZXIuY3VycmVudD10aGlzKSx0aGlzLl9jYWNoZU1hcmdpbnMoKSx0aGlzLmNzc1Bvc2l0aW9uPXRoaXMuaGVscGVyLmNzcyhcInBvc2l0aW9uXCIpLHRoaXMuc2Nyb2xsUGFyZW50PXRoaXMuaGVscGVyLnNjcm9sbFBhcmVudCgpLHRoaXMub2Zmc2V0UGFyZW50PXRoaXMuaGVscGVyLm9mZnNldFBhcmVudCgpLHRoaXMub2Zmc2V0UGFyZW50Q3NzUG9zaXRpb249dGhpcy5vZmZzZXRQYXJlbnQuY3NzKFwicG9zaXRpb25cIiksdGhpcy5vZmZzZXQ9dGhpcy5wb3NpdGlvbkFicz10aGlzLmVsZW1lbnQub2Zmc2V0KCksdGhpcy5vZmZzZXQ9e3RvcDp0aGlzLm9mZnNldC50b3AtdGhpcy5tYXJnaW5zLnRvcCxsZWZ0OnRoaXMub2Zmc2V0LmxlZnQtdGhpcy5tYXJnaW5zLmxlZnR9LHRoaXMub2Zmc2V0LnNjcm9sbD0hMSx0LmV4dGVuZCh0aGlzLm9mZnNldCx7Y2xpY2s6e2xlZnQ6ZS5wYWdlWC10aGlzLm9mZnNldC5sZWZ0LHRvcDplLnBhZ2VZLXRoaXMub2Zmc2V0LnRvcH0scGFyZW50OnRoaXMuX2dldFBhcmVudE9mZnNldCgpLHJlbGF0aXZlOnRoaXMuX2dldFJlbGF0aXZlT2Zmc2V0KCl9KSx0aGlzLm9yaWdpbmFsUG9zaXRpb249dGhpcy5wb3NpdGlvbj10aGlzLl9nZW5lcmF0ZVBvc2l0aW9uKGUpLHRoaXMub3JpZ2luYWxQYWdlWD1lLnBhZ2VYLHRoaXMub3JpZ2luYWxQYWdlWT1lLnBhZ2VZLGkuY3Vyc29yQXQmJnRoaXMuX2FkanVzdE9mZnNldEZyb21IZWxwZXIoaS5jdXJzb3JBdCksdGhpcy5fc2V0Q29udGFpbm1lbnQoKSx0aGlzLl90cmlnZ2VyKFwic3RhcnRcIixlKT09PSExPyh0aGlzLl9jbGVhcigpLCExKToodGhpcy5fY2FjaGVIZWxwZXJQcm9wb3J0aW9ucygpLHQudWkuZGRtYW5hZ2VyJiYhaS5kcm9wQmVoYXZpb3VyJiZ0LnVpLmRkbWFuYWdlci5wcmVwYXJlT2Zmc2V0cyh0aGlzLGUpLHRoaXMuX21vdXNlRHJhZyhlLCEwKSx0LnVpLmRkbWFuYWdlciYmdC51aS5kZG1hbmFnZXIuZHJhZ1N0YXJ0KHRoaXMsZSksITApfSxfbW91c2VEcmFnOmZ1bmN0aW9uKGUsaSl7aWYoXCJmaXhlZFwiPT09dGhpcy5vZmZzZXRQYXJlbnRDc3NQb3NpdGlvbiYmKHRoaXMub2Zmc2V0LnBhcmVudD10aGlzLl9nZXRQYXJlbnRPZmZzZXQoKSksdGhpcy5wb3NpdGlvbj10aGlzLl9nZW5lcmF0ZVBvc2l0aW9uKGUpLHRoaXMucG9zaXRpb25BYnM9dGhpcy5fY29udmVydFBvc2l0aW9uVG8oXCJhYnNvbHV0ZVwiKSwhaSl7dmFyIHM9dGhpcy5fdWlIYXNoKCk7aWYodGhpcy5fdHJpZ2dlcihcImRyYWdcIixlLHMpPT09ITEpcmV0dXJuIHRoaXMuX21vdXNlVXAoe30pLCExO3RoaXMucG9zaXRpb249cy5wb3NpdGlvbn1yZXR1cm4gdGhpcy5vcHRpb25zLmF4aXMmJlwieVwiPT09dGhpcy5vcHRpb25zLmF4aXN8fCh0aGlzLmhlbHBlclswXS5zdHlsZS5sZWZ0PXRoaXMucG9zaXRpb24ubGVmdCtcInB4XCIpLHRoaXMub3B0aW9ucy5heGlzJiZcInhcIj09PXRoaXMub3B0aW9ucy5heGlzfHwodGhpcy5oZWxwZXJbMF0uc3R5bGUudG9wPXRoaXMucG9zaXRpb24udG9wK1wicHhcIiksdC51aS5kZG1hbmFnZXImJnQudWkuZGRtYW5hZ2VyLmRyYWcodGhpcyxlKSwhMX0sX21vdXNlU3RvcDpmdW5jdGlvbihlKXt2YXIgaT10aGlzLHM9ITE7cmV0dXJuIHQudWkuZGRtYW5hZ2VyJiYhdGhpcy5vcHRpb25zLmRyb3BCZWhhdmlvdXImJihzPXQudWkuZGRtYW5hZ2VyLmRyb3AodGhpcyxlKSksdGhpcy5kcm9wcGVkJiYocz10aGlzLmRyb3BwZWQsdGhpcy5kcm9wcGVkPSExKSxcIm9yaWdpbmFsXCIhPT10aGlzLm9wdGlvbnMuaGVscGVyfHx0LmNvbnRhaW5zKHRoaXMuZWxlbWVudFswXS5vd25lckRvY3VtZW50LHRoaXMuZWxlbWVudFswXSk/KFwiaW52YWxpZFwiPT09dGhpcy5vcHRpb25zLnJldmVydCYmIXN8fFwidmFsaWRcIj09PXRoaXMub3B0aW9ucy5yZXZlcnQmJnN8fHRoaXMub3B0aW9ucy5yZXZlcnQ9PT0hMHx8dC5pc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy5yZXZlcnQpJiZ0aGlzLm9wdGlvbnMucmV2ZXJ0LmNhbGwodGhpcy5lbGVtZW50LHMpP3QodGhpcy5oZWxwZXIpLmFuaW1hdGUodGhpcy5vcmlnaW5hbFBvc2l0aW9uLHBhcnNlSW50KHRoaXMub3B0aW9ucy5yZXZlcnREdXJhdGlvbiwxMCksZnVuY3Rpb24oKXtpLl90cmlnZ2VyKFwic3RvcFwiLGUpIT09ITEmJmkuX2NsZWFyKCl9KTp0aGlzLl90cmlnZ2VyKFwic3RvcFwiLGUpIT09ITEmJnRoaXMuX2NsZWFyKCksITEpOiExfSxfbW91c2VVcDpmdW5jdGlvbihlKXtyZXR1cm4gdChcImRpdi51aS1kcmFnZ2FibGUtaWZyYW1lRml4XCIpLmVhY2goZnVuY3Rpb24oKXt0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyl9KSx0LnVpLmRkbWFuYWdlciYmdC51aS5kZG1hbmFnZXIuZHJhZ1N0b3AodGhpcyxlKSx0LnVpLm1vdXNlLnByb3RvdHlwZS5fbW91c2VVcC5jYWxsKHRoaXMsZSl9LGNhbmNlbDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmhlbHBlci5pcyhcIi51aS1kcmFnZ2FibGUtZHJhZ2dpbmdcIik/dGhpcy5fbW91c2VVcCh7fSk6dGhpcy5fY2xlYXIoKSx0aGlzfSxfZ2V0SGFuZGxlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLm9wdGlvbnMuaGFuZGxlPyEhdChlLnRhcmdldCkuY2xvc2VzdCh0aGlzLmVsZW1lbnQuZmluZCh0aGlzLm9wdGlvbnMuaGFuZGxlKSkubGVuZ3RoOiEwfSxfY3JlYXRlSGVscGVyOmZ1bmN0aW9uKGUpe3ZhciBpPXRoaXMub3B0aW9ucyxzPXQuaXNGdW5jdGlvbihpLmhlbHBlcik/dChpLmhlbHBlci5hcHBseSh0aGlzLmVsZW1lbnRbMF0sW2VdKSk6XCJjbG9uZVwiPT09aS5oZWxwZXI/dGhpcy5lbGVtZW50LmNsb25lKCkucmVtb3ZlQXR0cihcImlkXCIpOnRoaXMuZWxlbWVudDtyZXR1cm4gcy5wYXJlbnRzKFwiYm9keVwiKS5sZW5ndGh8fHMuYXBwZW5kVG8oXCJwYXJlbnRcIj09PWkuYXBwZW5kVG8/dGhpcy5lbGVtZW50WzBdLnBhcmVudE5vZGU6aS5hcHBlbmRUbyksc1swXT09PXRoaXMuZWxlbWVudFswXXx8LyhmaXhlZHxhYnNvbHV0ZSkvLnRlc3Qocy5jc3MoXCJwb3NpdGlvblwiKSl8fHMuY3NzKFwicG9zaXRpb25cIixcImFic29sdXRlXCIpLHN9LF9hZGp1c3RPZmZzZXRGcm9tSGVscGVyOmZ1bmN0aW9uKGUpe1wic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1lLnNwbGl0KFwiIFwiKSksdC5pc0FycmF5KGUpJiYoZT17bGVmdDorZVswXSx0b3A6K2VbMV18fDB9KSxcImxlZnRcImluIGUmJih0aGlzLm9mZnNldC5jbGljay5sZWZ0PWUubGVmdCt0aGlzLm1hcmdpbnMubGVmdCksXCJyaWdodFwiaW4gZSYmKHRoaXMub2Zmc2V0LmNsaWNrLmxlZnQ9dGhpcy5oZWxwZXJQcm9wb3J0aW9ucy53aWR0aC1lLnJpZ2h0K3RoaXMubWFyZ2lucy5sZWZ0KSxcInRvcFwiaW4gZSYmKHRoaXMub2Zmc2V0LmNsaWNrLnRvcD1lLnRvcCt0aGlzLm1hcmdpbnMudG9wKSxcImJvdHRvbVwiaW4gZSYmKHRoaXMub2Zmc2V0LmNsaWNrLnRvcD10aGlzLmhlbHBlclByb3BvcnRpb25zLmhlaWdodC1lLmJvdHRvbSt0aGlzLm1hcmdpbnMudG9wKX0sX2dldFBhcmVudE9mZnNldDpmdW5jdGlvbigpe3ZhciBlPXRoaXMub2Zmc2V0UGFyZW50Lm9mZnNldCgpO3JldHVyblwiYWJzb2x1dGVcIj09PXRoaXMuY3NzUG9zaXRpb24mJnRoaXMuc2Nyb2xsUGFyZW50WzBdIT09ZG9jdW1lbnQmJnQuY29udGFpbnModGhpcy5zY3JvbGxQYXJlbnRbMF0sdGhpcy5vZmZzZXRQYXJlbnRbMF0pJiYoZS5sZWZ0Kz10aGlzLnNjcm9sbFBhcmVudC5zY3JvbGxMZWZ0KCksZS50b3ArPXRoaXMuc2Nyb2xsUGFyZW50LnNjcm9sbFRvcCgpKSwodGhpcy5vZmZzZXRQYXJlbnRbMF09PT1kb2N1bWVudC5ib2R5fHx0aGlzLm9mZnNldFBhcmVudFswXS50YWdOYW1lJiZcImh0bWxcIj09PXRoaXMub2Zmc2V0UGFyZW50WzBdLnRhZ05hbWUudG9Mb3dlckNhc2UoKSYmdC51aS5pZSkmJihlPXt0b3A6MCxsZWZ0OjB9KSx7dG9wOmUudG9wKyhwYXJzZUludCh0aGlzLm9mZnNldFBhcmVudC5jc3MoXCJib3JkZXJUb3BXaWR0aFwiKSwxMCl8fDApLGxlZnQ6ZS5sZWZ0KyhwYXJzZUludCh0aGlzLm9mZnNldFBhcmVudC5jc3MoXCJib3JkZXJMZWZ0V2lkdGhcIiksMTApfHwwKX19LF9nZXRSZWxhdGl2ZU9mZnNldDpmdW5jdGlvbigpe2lmKFwicmVsYXRpdmVcIj09PXRoaXMuY3NzUG9zaXRpb24pe3ZhciB0PXRoaXMuZWxlbWVudC5wb3NpdGlvbigpO3JldHVybnt0b3A6dC50b3AtKHBhcnNlSW50KHRoaXMuaGVscGVyLmNzcyhcInRvcFwiKSwxMCl8fDApK3RoaXMuc2Nyb2xsUGFyZW50LnNjcm9sbFRvcCgpLGxlZnQ6dC5sZWZ0LShwYXJzZUludCh0aGlzLmhlbHBlci5jc3MoXCJsZWZ0XCIpLDEwKXx8MCkrdGhpcy5zY3JvbGxQYXJlbnQuc2Nyb2xsTGVmdCgpfX1yZXR1cm57dG9wOjAsbGVmdDowfX0sX2NhY2hlTWFyZ2luczpmdW5jdGlvbigpe3RoaXMubWFyZ2lucz17bGVmdDpwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWFyZ2luTGVmdFwiKSwxMCl8fDAsdG9wOnBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtYXJnaW5Ub3BcIiksMTApfHwwLHJpZ2h0OnBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtYXJnaW5SaWdodFwiKSwxMCl8fDAsYm90dG9tOnBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtYXJnaW5Cb3R0b21cIiksMTApfHwwfX0sX2NhY2hlSGVscGVyUHJvcG9ydGlvbnM6ZnVuY3Rpb24oKXt0aGlzLmhlbHBlclByb3BvcnRpb25zPXt3aWR0aDp0aGlzLmhlbHBlci5vdXRlcldpZHRoKCksaGVpZ2h0OnRoaXMuaGVscGVyLm91dGVySGVpZ2h0KCl9fSxfc2V0Q29udGFpbm1lbnQ6ZnVuY3Rpb24oKXt2YXIgZSxpLHMsbj10aGlzLm9wdGlvbnM7cmV0dXJuIG4uY29udGFpbm1lbnQ/XCJ3aW5kb3dcIj09PW4uY29udGFpbm1lbnQ/KHRoaXMuY29udGFpbm1lbnQ9W3Qod2luZG93KS5zY3JvbGxMZWZ0KCktdGhpcy5vZmZzZXQucmVsYXRpdmUubGVmdC10aGlzLm9mZnNldC5wYXJlbnQubGVmdCx0KHdpbmRvdykuc2Nyb2xsVG9wKCktdGhpcy5vZmZzZXQucmVsYXRpdmUudG9wLXRoaXMub2Zmc2V0LnBhcmVudC50b3AsdCh3aW5kb3cpLnNjcm9sbExlZnQoKSt0KHdpbmRvdykud2lkdGgoKS10aGlzLmhlbHBlclByb3BvcnRpb25zLndpZHRoLXRoaXMubWFyZ2lucy5sZWZ0LHQod2luZG93KS5zY3JvbGxUb3AoKSsodCh3aW5kb3cpLmhlaWdodCgpfHxkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUuc2Nyb2xsSGVpZ2h0KS10aGlzLmhlbHBlclByb3BvcnRpb25zLmhlaWdodC10aGlzLm1hcmdpbnMudG9wXSx1bmRlZmluZWQpOlwiZG9jdW1lbnRcIj09PW4uY29udGFpbm1lbnQ/KHRoaXMuY29udGFpbm1lbnQ9WzAsMCx0KGRvY3VtZW50KS53aWR0aCgpLXRoaXMuaGVscGVyUHJvcG9ydGlvbnMud2lkdGgtdGhpcy5tYXJnaW5zLmxlZnQsKHQoZG9jdW1lbnQpLmhlaWdodCgpfHxkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUuc2Nyb2xsSGVpZ2h0KS10aGlzLmhlbHBlclByb3BvcnRpb25zLmhlaWdodC10aGlzLm1hcmdpbnMudG9wXSx1bmRlZmluZWQpOm4uY29udGFpbm1lbnQuY29uc3RydWN0b3I9PT1BcnJheT8odGhpcy5jb250YWlubWVudD1uLmNvbnRhaW5tZW50LHVuZGVmaW5lZCk6KFwicGFyZW50XCI9PT1uLmNvbnRhaW5tZW50JiYobi5jb250YWlubWVudD10aGlzLmhlbHBlclswXS5wYXJlbnROb2RlKSxpPXQobi5jb250YWlubWVudCkscz1pWzBdLHMmJihlPVwiaGlkZGVuXCIhPT1pLmNzcyhcIm92ZXJmbG93XCIpLHRoaXMuY29udGFpbm1lbnQ9WyhwYXJzZUludChpLmNzcyhcImJvcmRlckxlZnRXaWR0aFwiKSwxMCl8fDApKyhwYXJzZUludChpLmNzcyhcInBhZGRpbmdMZWZ0XCIpLDEwKXx8MCksKHBhcnNlSW50KGkuY3NzKFwiYm9yZGVyVG9wV2lkdGhcIiksMTApfHwwKSsocGFyc2VJbnQoaS5jc3MoXCJwYWRkaW5nVG9wXCIpLDEwKXx8MCksKGU/TWF0aC5tYXgocy5zY3JvbGxXaWR0aCxzLm9mZnNldFdpZHRoKTpzLm9mZnNldFdpZHRoKS0ocGFyc2VJbnQoaS5jc3MoXCJib3JkZXJSaWdodFdpZHRoXCIpLDEwKXx8MCktKHBhcnNlSW50KGkuY3NzKFwicGFkZGluZ1JpZ2h0XCIpLDEwKXx8MCktdGhpcy5oZWxwZXJQcm9wb3J0aW9ucy53aWR0aC10aGlzLm1hcmdpbnMubGVmdC10aGlzLm1hcmdpbnMucmlnaHQsKGU/TWF0aC5tYXgocy5zY3JvbGxIZWlnaHQscy5vZmZzZXRIZWlnaHQpOnMub2Zmc2V0SGVpZ2h0KS0ocGFyc2VJbnQoaS5jc3MoXCJib3JkZXJCb3R0b21XaWR0aFwiKSwxMCl8fDApLShwYXJzZUludChpLmNzcyhcInBhZGRpbmdCb3R0b21cIiksMTApfHwwKS10aGlzLmhlbHBlclByb3BvcnRpb25zLmhlaWdodC10aGlzLm1hcmdpbnMudG9wLXRoaXMubWFyZ2lucy5ib3R0b21dLHRoaXMucmVsYXRpdmVfY29udGFpbmVyPWkpLHVuZGVmaW5lZCk6KHRoaXMuY29udGFpbm1lbnQ9bnVsbCx1bmRlZmluZWQpfSxfY29udmVydFBvc2l0aW9uVG86ZnVuY3Rpb24oZSxpKXtpfHwoaT10aGlzLnBvc2l0aW9uKTt2YXIgcz1cImFic29sdXRlXCI9PT1lPzE6LTEsbj1cImFic29sdXRlXCIhPT10aGlzLmNzc1Bvc2l0aW9ufHx0aGlzLnNjcm9sbFBhcmVudFswXSE9PWRvY3VtZW50JiZ0LmNvbnRhaW5zKHRoaXMuc2Nyb2xsUGFyZW50WzBdLHRoaXMub2Zmc2V0UGFyZW50WzBdKT90aGlzLnNjcm9sbFBhcmVudDp0aGlzLm9mZnNldFBhcmVudDtyZXR1cm4gdGhpcy5vZmZzZXQuc2Nyb2xsfHwodGhpcy5vZmZzZXQuc2Nyb2xsPXt0b3A6bi5zY3JvbGxUb3AoKSxsZWZ0Om4uc2Nyb2xsTGVmdCgpfSkse3RvcDppLnRvcCt0aGlzLm9mZnNldC5yZWxhdGl2ZS50b3Aqcyt0aGlzLm9mZnNldC5wYXJlbnQudG9wKnMtKFwiZml4ZWRcIj09PXRoaXMuY3NzUG9zaXRpb24/LXRoaXMuc2Nyb2xsUGFyZW50LnNjcm9sbFRvcCgpOnRoaXMub2Zmc2V0LnNjcm9sbC50b3ApKnMsbGVmdDppLmxlZnQrdGhpcy5vZmZzZXQucmVsYXRpdmUubGVmdCpzK3RoaXMub2Zmc2V0LnBhcmVudC5sZWZ0KnMtKFwiZml4ZWRcIj09PXRoaXMuY3NzUG9zaXRpb24/LXRoaXMuc2Nyb2xsUGFyZW50LnNjcm9sbExlZnQoKTp0aGlzLm9mZnNldC5zY3JvbGwubGVmdCkqc319LF9nZW5lcmF0ZVBvc2l0aW9uOmZ1bmN0aW9uKGUpe3ZhciBpLHMsbixhLG89dGhpcy5vcHRpb25zLHI9XCJhYnNvbHV0ZVwiIT09dGhpcy5jc3NQb3NpdGlvbnx8dGhpcy5zY3JvbGxQYXJlbnRbMF0hPT1kb2N1bWVudCYmdC5jb250YWlucyh0aGlzLnNjcm9sbFBhcmVudFswXSx0aGlzLm9mZnNldFBhcmVudFswXSk/dGhpcy5zY3JvbGxQYXJlbnQ6dGhpcy5vZmZzZXRQYXJlbnQsbD1lLnBhZ2VYLGg9ZS5wYWdlWTtyZXR1cm4gdGhpcy5vZmZzZXQuc2Nyb2xsfHwodGhpcy5vZmZzZXQuc2Nyb2xsPXt0b3A6ci5zY3JvbGxUb3AoKSxsZWZ0OnIuc2Nyb2xsTGVmdCgpfSksdGhpcy5vcmlnaW5hbFBvc2l0aW9uJiYodGhpcy5jb250YWlubWVudCYmKHRoaXMucmVsYXRpdmVfY29udGFpbmVyPyhzPXRoaXMucmVsYXRpdmVfY29udGFpbmVyLm9mZnNldCgpLGk9W3RoaXMuY29udGFpbm1lbnRbMF0rcy5sZWZ0LHRoaXMuY29udGFpbm1lbnRbMV0rcy50b3AsdGhpcy5jb250YWlubWVudFsyXStzLmxlZnQsdGhpcy5jb250YWlubWVudFszXStzLnRvcF0pOmk9dGhpcy5jb250YWlubWVudCxlLnBhZ2VYLXRoaXMub2Zmc2V0LmNsaWNrLmxlZnQ8aVswXSYmKGw9aVswXSt0aGlzLm9mZnNldC5jbGljay5sZWZ0KSxlLnBhZ2VZLXRoaXMub2Zmc2V0LmNsaWNrLnRvcDxpWzFdJiYoaD1pWzFdK3RoaXMub2Zmc2V0LmNsaWNrLnRvcCksZS5wYWdlWC10aGlzLm9mZnNldC5jbGljay5sZWZ0PmlbMl0mJihsPWlbMl0rdGhpcy5vZmZzZXQuY2xpY2subGVmdCksZS5wYWdlWS10aGlzLm9mZnNldC5jbGljay50b3A+aVszXSYmKGg9aVszXSt0aGlzLm9mZnNldC5jbGljay50b3ApKSxvLmdyaWQmJihuPW8uZ3JpZFsxXT90aGlzLm9yaWdpbmFsUGFnZVkrTWF0aC5yb3VuZCgoaC10aGlzLm9yaWdpbmFsUGFnZVkpL28uZ3JpZFsxXSkqby5ncmlkWzFdOnRoaXMub3JpZ2luYWxQYWdlWSxoPWk/bi10aGlzLm9mZnNldC5jbGljay50b3A+PWlbMV18fG4tdGhpcy5vZmZzZXQuY2xpY2sudG9wPmlbM10/bjpuLXRoaXMub2Zmc2V0LmNsaWNrLnRvcD49aVsxXT9uLW8uZ3JpZFsxXTpuK28uZ3JpZFsxXTpuLGE9by5ncmlkWzBdP3RoaXMub3JpZ2luYWxQYWdlWCtNYXRoLnJvdW5kKChsLXRoaXMub3JpZ2luYWxQYWdlWCkvby5ncmlkWzBdKSpvLmdyaWRbMF06dGhpcy5vcmlnaW5hbFBhZ2VYLGw9aT9hLXRoaXMub2Zmc2V0LmNsaWNrLmxlZnQ+PWlbMF18fGEtdGhpcy5vZmZzZXQuY2xpY2subGVmdD5pWzJdP2E6YS10aGlzLm9mZnNldC5jbGljay5sZWZ0Pj1pWzBdP2Etby5ncmlkWzBdOmErby5ncmlkWzBdOmEpKSx7dG9wOmgtdGhpcy5vZmZzZXQuY2xpY2sudG9wLXRoaXMub2Zmc2V0LnJlbGF0aXZlLnRvcC10aGlzLm9mZnNldC5wYXJlbnQudG9wKyhcImZpeGVkXCI9PT10aGlzLmNzc1Bvc2l0aW9uPy10aGlzLnNjcm9sbFBhcmVudC5zY3JvbGxUb3AoKTp0aGlzLm9mZnNldC5zY3JvbGwudG9wKSxsZWZ0OmwtdGhpcy5vZmZzZXQuY2xpY2subGVmdC10aGlzLm9mZnNldC5yZWxhdGl2ZS5sZWZ0LXRoaXMub2Zmc2V0LnBhcmVudC5sZWZ0KyhcImZpeGVkXCI9PT10aGlzLmNzc1Bvc2l0aW9uPy10aGlzLnNjcm9sbFBhcmVudC5zY3JvbGxMZWZ0KCk6dGhpcy5vZmZzZXQuc2Nyb2xsLmxlZnQpfX0sX2NsZWFyOmZ1bmN0aW9uKCl7dGhpcy5oZWxwZXIucmVtb3ZlQ2xhc3MoXCJ1aS1kcmFnZ2FibGUtZHJhZ2dpbmdcIiksdGhpcy5oZWxwZXJbMF09PT10aGlzLmVsZW1lbnRbMF18fHRoaXMuY2FuY2VsSGVscGVyUmVtb3ZhbHx8dGhpcy5oZWxwZXIucmVtb3ZlKCksdGhpcy5oZWxwZXI9bnVsbCx0aGlzLmNhbmNlbEhlbHBlclJlbW92YWw9ITF9LF90cmlnZ2VyOmZ1bmN0aW9uKGUsaSxzKXtyZXR1cm4gcz1zfHx0aGlzLl91aUhhc2goKSx0LnVpLnBsdWdpbi5jYWxsKHRoaXMsZSxbaSxzXSksXCJkcmFnXCI9PT1lJiYodGhpcy5wb3NpdGlvbkFicz10aGlzLl9jb252ZXJ0UG9zaXRpb25UbyhcImFic29sdXRlXCIpKSx0LldpZGdldC5wcm90b3R5cGUuX3RyaWdnZXIuY2FsbCh0aGlzLGUsaSxzKX0scGx1Z2luczp7fSxfdWlIYXNoOmZ1bmN0aW9uKCl7cmV0dXJue2hlbHBlcjp0aGlzLmhlbHBlcixwb3NpdGlvbjp0aGlzLnBvc2l0aW9uLG9yaWdpbmFsUG9zaXRpb246dGhpcy5vcmlnaW5hbFBvc2l0aW9uLG9mZnNldDp0aGlzLnBvc2l0aW9uQWJzfX19KSx0LnVpLnBsdWdpbi5hZGQoXCJkcmFnZ2FibGVcIixcImNvbm5lY3RUb1NvcnRhYmxlXCIse3N0YXJ0OmZ1bmN0aW9uKGUsaSl7dmFyIHM9dCh0aGlzKS5kYXRhKFwidWktZHJhZ2dhYmxlXCIpLG49cy5vcHRpb25zLGE9dC5leHRlbmQoe30saSx7aXRlbTpzLmVsZW1lbnR9KTtzLnNvcnRhYmxlcz1bXSx0KG4uY29ubmVjdFRvU29ydGFibGUpLmVhY2goZnVuY3Rpb24oKXt2YXIgaT10LmRhdGEodGhpcyxcInVpLXNvcnRhYmxlXCIpO2kmJiFpLm9wdGlvbnMuZGlzYWJsZWQmJihzLnNvcnRhYmxlcy5wdXNoKHtpbnN0YW5jZTppLHNob3VsZFJldmVydDppLm9wdGlvbnMucmV2ZXJ0fSksaS5yZWZyZXNoUG9zaXRpb25zKCksaS5fdHJpZ2dlcihcImFjdGl2YXRlXCIsZSxhKSl9KX0sc3RvcDpmdW5jdGlvbihlLGkpe3ZhciBzPXQodGhpcykuZGF0YShcInVpLWRyYWdnYWJsZVwiKSxuPXQuZXh0ZW5kKHt9LGkse2l0ZW06cy5lbGVtZW50fSk7dC5lYWNoKHMuc29ydGFibGVzLGZ1bmN0aW9uKCl7dGhpcy5pbnN0YW5jZS5pc092ZXI/KHRoaXMuaW5zdGFuY2UuaXNPdmVyPTAscy5jYW5jZWxIZWxwZXJSZW1vdmFsPSEwLHRoaXMuaW5zdGFuY2UuY2FuY2VsSGVscGVyUmVtb3ZhbD0hMSx0aGlzLnNob3VsZFJldmVydCYmKHRoaXMuaW5zdGFuY2Uub3B0aW9ucy5yZXZlcnQ9dGhpcy5zaG91bGRSZXZlcnQpLHRoaXMuaW5zdGFuY2UuX21vdXNlU3RvcChlKSx0aGlzLmluc3RhbmNlLm9wdGlvbnMuaGVscGVyPXRoaXMuaW5zdGFuY2Uub3B0aW9ucy5faGVscGVyLFwib3JpZ2luYWxcIj09PXMub3B0aW9ucy5oZWxwZXImJnRoaXMuaW5zdGFuY2UuY3VycmVudEl0ZW0uY3NzKHt0b3A6XCJhdXRvXCIsbGVmdDpcImF1dG9cIn0pKToodGhpcy5pbnN0YW5jZS5jYW5jZWxIZWxwZXJSZW1vdmFsPSExLHRoaXMuaW5zdGFuY2UuX3RyaWdnZXIoXCJkZWFjdGl2YXRlXCIsZSxuKSl9KX0sZHJhZzpmdW5jdGlvbihlLGkpe3ZhciBzPXQodGhpcykuZGF0YShcInVpLWRyYWdnYWJsZVwiKSxuPXRoaXM7dC5lYWNoKHMuc29ydGFibGVzLGZ1bmN0aW9uKCl7dmFyIGE9ITEsbz10aGlzO3RoaXMuaW5zdGFuY2UucG9zaXRpb25BYnM9cy5wb3NpdGlvbkFicyx0aGlzLmluc3RhbmNlLmhlbHBlclByb3BvcnRpb25zPXMuaGVscGVyUHJvcG9ydGlvbnMsdGhpcy5pbnN0YW5jZS5vZmZzZXQuY2xpY2s9cy5vZmZzZXQuY2xpY2ssdGhpcy5pbnN0YW5jZS5faW50ZXJzZWN0c1dpdGgodGhpcy5pbnN0YW5jZS5jb250YWluZXJDYWNoZSkmJihhPSEwLHQuZWFjaChzLnNvcnRhYmxlcyxmdW5jdGlvbigpe3JldHVybiB0aGlzLmluc3RhbmNlLnBvc2l0aW9uQWJzPXMucG9zaXRpb25BYnMsdGhpcy5pbnN0YW5jZS5oZWxwZXJQcm9wb3J0aW9ucz1zLmhlbHBlclByb3BvcnRpb25zLHRoaXMuaW5zdGFuY2Uub2Zmc2V0LmNsaWNrPXMub2Zmc2V0LmNsaWNrLHRoaXMhPT1vJiZ0aGlzLmluc3RhbmNlLl9pbnRlcnNlY3RzV2l0aCh0aGlzLmluc3RhbmNlLmNvbnRhaW5lckNhY2hlKSYmdC5jb250YWlucyhvLmluc3RhbmNlLmVsZW1lbnRbMF0sdGhpcy5pbnN0YW5jZS5lbGVtZW50WzBdKSYmKGE9ITEpLGF9KSksYT8odGhpcy5pbnN0YW5jZS5pc092ZXJ8fCh0aGlzLmluc3RhbmNlLmlzT3Zlcj0xLHRoaXMuaW5zdGFuY2UuY3VycmVudEl0ZW09dChuKS5jbG9uZSgpLnJlbW92ZUF0dHIoXCJpZFwiKS5hcHBlbmRUbyh0aGlzLmluc3RhbmNlLmVsZW1lbnQpLmRhdGEoXCJ1aS1zb3J0YWJsZS1pdGVtXCIsITApLHRoaXMuaW5zdGFuY2Uub3B0aW9ucy5faGVscGVyPXRoaXMuaW5zdGFuY2Uub3B0aW9ucy5oZWxwZXIsdGhpcy5pbnN0YW5jZS5vcHRpb25zLmhlbHBlcj1mdW5jdGlvbigpe3JldHVybiBpLmhlbHBlclswXX0sZS50YXJnZXQ9dGhpcy5pbnN0YW5jZS5jdXJyZW50SXRlbVswXSx0aGlzLmluc3RhbmNlLl9tb3VzZUNhcHR1cmUoZSwhMCksdGhpcy5pbnN0YW5jZS5fbW91c2VTdGFydChlLCEwLCEwKSx0aGlzLmluc3RhbmNlLm9mZnNldC5jbGljay50b3A9cy5vZmZzZXQuY2xpY2sudG9wLHRoaXMuaW5zdGFuY2Uub2Zmc2V0LmNsaWNrLmxlZnQ9cy5vZmZzZXQuY2xpY2subGVmdCx0aGlzLmluc3RhbmNlLm9mZnNldC5wYXJlbnQubGVmdC09cy5vZmZzZXQucGFyZW50LmxlZnQtdGhpcy5pbnN0YW5jZS5vZmZzZXQucGFyZW50LmxlZnQsdGhpcy5pbnN0YW5jZS5vZmZzZXQucGFyZW50LnRvcC09cy5vZmZzZXQucGFyZW50LnRvcC10aGlzLmluc3RhbmNlLm9mZnNldC5wYXJlbnQudG9wLHMuX3RyaWdnZXIoXCJ0b1NvcnRhYmxlXCIsZSkscy5kcm9wcGVkPXRoaXMuaW5zdGFuY2UuZWxlbWVudCxzLmN1cnJlbnRJdGVtPXMuZWxlbWVudCx0aGlzLmluc3RhbmNlLmZyb21PdXRzaWRlPXMpLHRoaXMuaW5zdGFuY2UuY3VycmVudEl0ZW0mJnRoaXMuaW5zdGFuY2UuX21vdXNlRHJhZyhlKSk6dGhpcy5pbnN0YW5jZS5pc092ZXImJih0aGlzLmluc3RhbmNlLmlzT3Zlcj0wLHRoaXMuaW5zdGFuY2UuY2FuY2VsSGVscGVyUmVtb3ZhbD0hMCx0aGlzLmluc3RhbmNlLm9wdGlvbnMucmV2ZXJ0PSExLHRoaXMuaW5zdGFuY2UuX3RyaWdnZXIoXCJvdXRcIixlLHRoaXMuaW5zdGFuY2UuX3VpSGFzaCh0aGlzLmluc3RhbmNlKSksdGhpcy5pbnN0YW5jZS5fbW91c2VTdG9wKGUsITApLHRoaXMuaW5zdGFuY2Uub3B0aW9ucy5oZWxwZXI9dGhpcy5pbnN0YW5jZS5vcHRpb25zLl9oZWxwZXIsdGhpcy5pbnN0YW5jZS5jdXJyZW50SXRlbS5yZW1vdmUoKSx0aGlzLmluc3RhbmNlLnBsYWNlaG9sZGVyJiZ0aGlzLmluc3RhbmNlLnBsYWNlaG9sZGVyLnJlbW92ZSgpLHMuX3RyaWdnZXIoXCJmcm9tU29ydGFibGVcIixlKSxzLmRyb3BwZWQ9ITEpfSl9fSksdC51aS5wbHVnaW4uYWRkKFwiZHJhZ2dhYmxlXCIsXCJjdXJzb3JcIix7c3RhcnQ6ZnVuY3Rpb24oKXt2YXIgZT10KFwiYm9keVwiKSxpPXQodGhpcykuZGF0YShcInVpLWRyYWdnYWJsZVwiKS5vcHRpb25zO2UuY3NzKFwiY3Vyc29yXCIpJiYoaS5fY3Vyc29yPWUuY3NzKFwiY3Vyc29yXCIpKSxlLmNzcyhcImN1cnNvclwiLGkuY3Vyc29yKX0sc3RvcDpmdW5jdGlvbigpe3ZhciBlPXQodGhpcykuZGF0YShcInVpLWRyYWdnYWJsZVwiKS5vcHRpb25zO2UuX2N1cnNvciYmdChcImJvZHlcIikuY3NzKFwiY3Vyc29yXCIsZS5fY3Vyc29yKX19KSx0LnVpLnBsdWdpbi5hZGQoXCJkcmFnZ2FibGVcIixcIm9wYWNpdHlcIix7c3RhcnQ6ZnVuY3Rpb24oZSxpKXt2YXIgcz10KGkuaGVscGVyKSxuPXQodGhpcykuZGF0YShcInVpLWRyYWdnYWJsZVwiKS5vcHRpb25zO3MuY3NzKFwib3BhY2l0eVwiKSYmKG4uX29wYWNpdHk9cy5jc3MoXCJvcGFjaXR5XCIpKSxzLmNzcyhcIm9wYWNpdHlcIixuLm9wYWNpdHkpfSxzdG9wOmZ1bmN0aW9uKGUsaSl7dmFyIHM9dCh0aGlzKS5kYXRhKFwidWktZHJhZ2dhYmxlXCIpLm9wdGlvbnM7cy5fb3BhY2l0eSYmdChpLmhlbHBlcikuY3NzKFwib3BhY2l0eVwiLHMuX29wYWNpdHkpfX0pLHQudWkucGx1Z2luLmFkZChcImRyYWdnYWJsZVwiLFwic2Nyb2xsXCIse3N0YXJ0OmZ1bmN0aW9uKCl7dmFyIGU9dCh0aGlzKS5kYXRhKFwidWktZHJhZ2dhYmxlXCIpO2Uuc2Nyb2xsUGFyZW50WzBdIT09ZG9jdW1lbnQmJlwiSFRNTFwiIT09ZS5zY3JvbGxQYXJlbnRbMF0udGFnTmFtZSYmKGUub3ZlcmZsb3dPZmZzZXQ9ZS5zY3JvbGxQYXJlbnQub2Zmc2V0KCkpfSxkcmFnOmZ1bmN0aW9uKGUpe3ZhciBpPXQodGhpcykuZGF0YShcInVpLWRyYWdnYWJsZVwiKSxzPWkub3B0aW9ucyxuPSExO2kuc2Nyb2xsUGFyZW50WzBdIT09ZG9jdW1lbnQmJlwiSFRNTFwiIT09aS5zY3JvbGxQYXJlbnRbMF0udGFnTmFtZT8ocy5heGlzJiZcInhcIj09PXMuYXhpc3x8KGkub3ZlcmZsb3dPZmZzZXQudG9wK2kuc2Nyb2xsUGFyZW50WzBdLm9mZnNldEhlaWdodC1lLnBhZ2VZPHMuc2Nyb2xsU2Vuc2l0aXZpdHk/aS5zY3JvbGxQYXJlbnRbMF0uc2Nyb2xsVG9wPW49aS5zY3JvbGxQYXJlbnRbMF0uc2Nyb2xsVG9wK3Muc2Nyb2xsU3BlZWQ6ZS5wYWdlWS1pLm92ZXJmbG93T2Zmc2V0LnRvcDxzLnNjcm9sbFNlbnNpdGl2aXR5JiYoaS5zY3JvbGxQYXJlbnRbMF0uc2Nyb2xsVG9wPW49aS5zY3JvbGxQYXJlbnRbMF0uc2Nyb2xsVG9wLXMuc2Nyb2xsU3BlZWQpKSxzLmF4aXMmJlwieVwiPT09cy5heGlzfHwoaS5vdmVyZmxvd09mZnNldC5sZWZ0K2kuc2Nyb2xsUGFyZW50WzBdLm9mZnNldFdpZHRoLWUucGFnZVg8cy5zY3JvbGxTZW5zaXRpdml0eT9pLnNjcm9sbFBhcmVudFswXS5zY3JvbGxMZWZ0PW49aS5zY3JvbGxQYXJlbnRbMF0uc2Nyb2xsTGVmdCtzLnNjcm9sbFNwZWVkOmUucGFnZVgtaS5vdmVyZmxvd09mZnNldC5sZWZ0PHMuc2Nyb2xsU2Vuc2l0aXZpdHkmJihpLnNjcm9sbFBhcmVudFswXS5zY3JvbGxMZWZ0PW49aS5zY3JvbGxQYXJlbnRbMF0uc2Nyb2xsTGVmdC1zLnNjcm9sbFNwZWVkKSkpOihzLmF4aXMmJlwieFwiPT09cy5heGlzfHwoZS5wYWdlWS10KGRvY3VtZW50KS5zY3JvbGxUb3AoKTxzLnNjcm9sbFNlbnNpdGl2aXR5P249dChkb2N1bWVudCkuc2Nyb2xsVG9wKHQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpLXMuc2Nyb2xsU3BlZWQpOnQod2luZG93KS5oZWlnaHQoKS0oZS5wYWdlWS10KGRvY3VtZW50KS5zY3JvbGxUb3AoKSk8cy5zY3JvbGxTZW5zaXRpdml0eSYmKG49dChkb2N1bWVudCkuc2Nyb2xsVG9wKHQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpK3Muc2Nyb2xsU3BlZWQpKSkscy5heGlzJiZcInlcIj09PXMuYXhpc3x8KGUucGFnZVgtdChkb2N1bWVudCkuc2Nyb2xsTGVmdCgpPHMuc2Nyb2xsU2Vuc2l0aXZpdHk/bj10KGRvY3VtZW50KS5zY3JvbGxMZWZ0KHQoZG9jdW1lbnQpLnNjcm9sbExlZnQoKS1zLnNjcm9sbFNwZWVkKTp0KHdpbmRvdykud2lkdGgoKS0oZS5wYWdlWC10KGRvY3VtZW50KS5zY3JvbGxMZWZ0KCkpPHMuc2Nyb2xsU2Vuc2l0aXZpdHkmJihuPXQoZG9jdW1lbnQpLnNjcm9sbExlZnQodChkb2N1bWVudCkuc2Nyb2xsTGVmdCgpK3Muc2Nyb2xsU3BlZWQpKSkpLG4hPT0hMSYmdC51aS5kZG1hbmFnZXImJiFzLmRyb3BCZWhhdmlvdXImJnQudWkuZGRtYW5hZ2VyLnByZXBhcmVPZmZzZXRzKGksZSl9fSksdC51aS5wbHVnaW4uYWRkKFwiZHJhZ2dhYmxlXCIsXCJzbmFwXCIse3N0YXJ0OmZ1bmN0aW9uKCl7dmFyIGU9dCh0aGlzKS5kYXRhKFwidWktZHJhZ2dhYmxlXCIpLGk9ZS5vcHRpb25zO2Uuc25hcEVsZW1lbnRzPVtdLHQoaS5zbmFwLmNvbnN0cnVjdG9yIT09U3RyaW5nP2kuc25hcC5pdGVtc3x8XCI6ZGF0YSh1aS1kcmFnZ2FibGUpXCI6aS5zbmFwKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGk9dCh0aGlzKSxzPWkub2Zmc2V0KCk7dGhpcyE9PWUuZWxlbWVudFswXSYmZS5zbmFwRWxlbWVudHMucHVzaCh7aXRlbTp0aGlzLHdpZHRoOmkub3V0ZXJXaWR0aCgpLGhlaWdodDppLm91dGVySGVpZ2h0KCksdG9wOnMudG9wLGxlZnQ6cy5sZWZ0fSl9KX0sZHJhZzpmdW5jdGlvbihlLGkpe3ZhciBzLG4sYSxvLHIsbCxoLGMsdSxkLHA9dCh0aGlzKS5kYXRhKFwidWktZHJhZ2dhYmxlXCIpLGc9cC5vcHRpb25zLGY9Zy5zbmFwVG9sZXJhbmNlLG09aS5vZmZzZXQubGVmdCxfPW0rcC5oZWxwZXJQcm9wb3J0aW9ucy53aWR0aCx2PWkub2Zmc2V0LnRvcCxiPXYrcC5oZWxwZXJQcm9wb3J0aW9ucy5oZWlnaHQ7Zm9yKHU9cC5zbmFwRWxlbWVudHMubGVuZ3RoLTE7dT49MDt1LS0pcj1wLnNuYXBFbGVtZW50c1t1XS5sZWZ0LGw9citwLnNuYXBFbGVtZW50c1t1XS53aWR0aCxoPXAuc25hcEVsZW1lbnRzW3VdLnRvcCxjPWgrcC5zbmFwRWxlbWVudHNbdV0uaGVpZ2h0LHItZj5ffHxtPmwrZnx8aC1mPmJ8fHY+YytmfHwhdC5jb250YWlucyhwLnNuYXBFbGVtZW50c1t1XS5pdGVtLm93bmVyRG9jdW1lbnQscC5zbmFwRWxlbWVudHNbdV0uaXRlbSk/KHAuc25hcEVsZW1lbnRzW3VdLnNuYXBwaW5nJiZwLm9wdGlvbnMuc25hcC5yZWxlYXNlJiZwLm9wdGlvbnMuc25hcC5yZWxlYXNlLmNhbGwocC5lbGVtZW50LGUsdC5leHRlbmQocC5fdWlIYXNoKCkse3NuYXBJdGVtOnAuc25hcEVsZW1lbnRzW3VdLml0ZW19KSkscC5zbmFwRWxlbWVudHNbdV0uc25hcHBpbmc9ITEpOihcImlubmVyXCIhPT1nLnNuYXBNb2RlJiYocz1mPj1NYXRoLmFicyhoLWIpLG49Zj49TWF0aC5hYnMoYy12KSxhPWY+PU1hdGguYWJzKHItXyksbz1mPj1NYXRoLmFicyhsLW0pLHMmJihpLnBvc2l0aW9uLnRvcD1wLl9jb252ZXJ0UG9zaXRpb25UbyhcInJlbGF0aXZlXCIse3RvcDpoLXAuaGVscGVyUHJvcG9ydGlvbnMuaGVpZ2h0LGxlZnQ6MH0pLnRvcC1wLm1hcmdpbnMudG9wKSxuJiYoaS5wb3NpdGlvbi50b3A9cC5fY29udmVydFBvc2l0aW9uVG8oXCJyZWxhdGl2ZVwiLHt0b3A6YyxsZWZ0OjB9KS50b3AtcC5tYXJnaW5zLnRvcCksYSYmKGkucG9zaXRpb24ubGVmdD1wLl9jb252ZXJ0UG9zaXRpb25UbyhcInJlbGF0aXZlXCIse3RvcDowLGxlZnQ6ci1wLmhlbHBlclByb3BvcnRpb25zLndpZHRofSkubGVmdC1wLm1hcmdpbnMubGVmdCksbyYmKGkucG9zaXRpb24ubGVmdD1wLl9jb252ZXJ0UG9zaXRpb25UbyhcInJlbGF0aXZlXCIse3RvcDowLGxlZnQ6bH0pLmxlZnQtcC5tYXJnaW5zLmxlZnQpKSxkPXN8fG58fGF8fG8sXCJvdXRlclwiIT09Zy5zbmFwTW9kZSYmKHM9Zj49TWF0aC5hYnMoaC12KSxuPWY+PU1hdGguYWJzKGMtYiksYT1mPj1NYXRoLmFicyhyLW0pLG89Zj49TWF0aC5hYnMobC1fKSxzJiYoaS5wb3NpdGlvbi50b3A9cC5fY29udmVydFBvc2l0aW9uVG8oXCJyZWxhdGl2ZVwiLHt0b3A6aCxsZWZ0OjB9KS50b3AtcC5tYXJnaW5zLnRvcCksbiYmKGkucG9zaXRpb24udG9wPXAuX2NvbnZlcnRQb3NpdGlvblRvKFwicmVsYXRpdmVcIix7dG9wOmMtcC5oZWxwZXJQcm9wb3J0aW9ucy5oZWlnaHQsbGVmdDowfSkudG9wLXAubWFyZ2lucy50b3ApLGEmJihpLnBvc2l0aW9uLmxlZnQ9cC5fY29udmVydFBvc2l0aW9uVG8oXCJyZWxhdGl2ZVwiLHt0b3A6MCxsZWZ0OnJ9KS5sZWZ0LXAubWFyZ2lucy5sZWZ0KSxvJiYoaS5wb3NpdGlvbi5sZWZ0PXAuX2NvbnZlcnRQb3NpdGlvblRvKFwicmVsYXRpdmVcIix7dG9wOjAsbGVmdDpsLXAuaGVscGVyUHJvcG9ydGlvbnMud2lkdGh9KS5sZWZ0LXAubWFyZ2lucy5sZWZ0KSksIXAuc25hcEVsZW1lbnRzW3VdLnNuYXBwaW5nJiYoc3x8bnx8YXx8b3x8ZCkmJnAub3B0aW9ucy5zbmFwLnNuYXAmJnAub3B0aW9ucy5zbmFwLnNuYXAuY2FsbChwLmVsZW1lbnQsZSx0LmV4dGVuZChwLl91aUhhc2goKSx7c25hcEl0ZW06cC5zbmFwRWxlbWVudHNbdV0uaXRlbX0pKSxwLnNuYXBFbGVtZW50c1t1XS5zbmFwcGluZz1zfHxufHxhfHxvfHxkKX19KSx0LnVpLnBsdWdpbi5hZGQoXCJkcmFnZ2FibGVcIixcInN0YWNrXCIse3N0YXJ0OmZ1bmN0aW9uKCl7dmFyIGUsaT10aGlzLmRhdGEoXCJ1aS1kcmFnZ2FibGVcIikub3B0aW9ucyxzPXQubWFrZUFycmF5KHQoaS5zdGFjaykpLnNvcnQoZnVuY3Rpb24oZSxpKXtyZXR1cm4ocGFyc2VJbnQodChlKS5jc3MoXCJ6SW5kZXhcIiksMTApfHwwKS0ocGFyc2VJbnQodChpKS5jc3MoXCJ6SW5kZXhcIiksMTApfHwwKX0pO3MubGVuZ3RoJiYoZT1wYXJzZUludCh0KHNbMF0pLmNzcyhcInpJbmRleFwiKSwxMCl8fDAsdChzKS5lYWNoKGZ1bmN0aW9uKGkpe3QodGhpcykuY3NzKFwiekluZGV4XCIsZStpKX0pLHRoaXMuY3NzKFwiekluZGV4XCIsZStzLmxlbmd0aCkpfX0pLHQudWkucGx1Z2luLmFkZChcImRyYWdnYWJsZVwiLFwiekluZGV4XCIse3N0YXJ0OmZ1bmN0aW9uKGUsaSl7dmFyIHM9dChpLmhlbHBlciksbj10KHRoaXMpLmRhdGEoXCJ1aS1kcmFnZ2FibGVcIikub3B0aW9ucztzLmNzcyhcInpJbmRleFwiKSYmKG4uX3pJbmRleD1zLmNzcyhcInpJbmRleFwiKSkscy5jc3MoXCJ6SW5kZXhcIixuLnpJbmRleCl9LHN0b3A6ZnVuY3Rpb24oZSxpKXt2YXIgcz10KHRoaXMpLmRhdGEoXCJ1aS1kcmFnZ2FibGVcIikub3B0aW9ucztzLl96SW5kZXgmJnQoaS5oZWxwZXIpLmNzcyhcInpJbmRleFwiLHMuX3pJbmRleCl9fSl9KShqUXVlcnkpO1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIis3WkpwMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2xpYi91aS5qc1wiLFwiL2xpYlwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbid1c2Ugc3RyaWN0JztcbiQoZnVuY3Rpb24oKSB7XG4gIC8vIG5vdCB1bmRlcnN0b29kIHlldFxuICB2YXIgaCA9ICQoJy5pdGVtYicpLmZpcnN0KCkuaGVpZ2h0KCk7XG4gICQoJy5pdGVtYicpLmNzcygnbGluZS1oZWlnaHQnLCBoICsgJ3B4Jyk7XG5cbiAgdmFyICRzd1RleHQgPSAkKCcuc3dpdGNoZXJfdGV4dCcpLFxuICAgICRzd0ltZyA9ICQoJy5zd2l0Y2hlcl9pbWFnZScpLFxuICAgIC8vIHNlbGVjdGlvbiB2YXIgZm9yIHBpY3R1cmUtdGV4dCBtb2RlXG4gICAgQ0xBU1NfVEVYVCA9ICdydCc7XG5cbiAgLy8gc2VydmljZXMgcGljdHVyZSBtb2RlIGFuZCB0ZXh0IG1vZGUgYnV0dG9uc1xuICAvLyBwdXRzIGN1cnJlbnQgc3RhdHVzIHRvIGNvb2tpZVxuICAkc3dUZXh0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQoJ2JvZHknKS5hZGRDbGFzcyhDTEFTU19URVhUKTtcbiAgICAkLmNvb2tpZSgnc3dpdGNoZXInLCAndGV4dFBvc2l0aW9uJywgeyBwYXRoOiAnLycgfSk7XG4gICAgLy8gaWYgKCRhcnRpY2xlLmxlbmd0aCkgJGFydGljbGUudHJpZ2dlcigndGV4dCcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG4gICRzd0ltZy5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoQ0xBU1NfVEVYVCk7XG4gICAgJC5jb29raWUoJ3N3aXRjaGVyJywgJ2ltYWdlUG9zaXRpb24nLCB7IHBhdGg6ICcvJyB9KTtcbiAgICAvLyBpZiAoJGFydGljbGUubGVuZ3RoKSAkYXJ0aWNsZS50cmlnZ2VyKCdpbWFnZScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgLy8gcHJvY2Vzc2VzIGN1cnJlbnQgY29va2llIFxuICBpZiAoJC5jb29raWUoJ3N3aXRjaGVyJykgPT09ICd0ZXh0UG9zaXRpb24nKSB7XG4gICAgJHN3VGV4dC50cmlnZ2VyKCdjbGljaycpO1xuICB9XG4gIGlmICgkLmNvb2tpZSgnc3dpdGNoZXInKSA9PT0gJ2ltYWdlUG9zaXRpb24nKSB7XG4gICAgJHN3SW1nLnRyaWdnZXIoJ2NsaWNrJyk7XG4gIH1cblxuICAvLyBUaGUgaWRlYSBpcyB0aGF0IHRleHQgYW5kIGltYWdlcyBcImZsb2F0XCIgb24gdGhlIGJhY2tncm91bmRcbiAgLy8gYXMgYmFja2dyb3VuZCBpcyBjbGlja2VkIHdlIGZhbGwgYmFjayB0byBob21lIHBhZ2VcbiAgLy8gU28gZ3JpZCBvYmplY3RzIHNob3VsZCBzaG93IFwiY3Vyc29yOnBvaW50ZXJcIiBpbWl0YXRpbmcgYSBsaW5rXG4gIC8vIHBhcnNlIGtpcmJ5dGV4dCdlZCB0ZXh0LCB3cmFwcGluZyB0ZXh0IGJldHdlZW4gYnIncyB3aXRoIDxzcGFuPlxuICAvLyQoJy5qc19fYXJ0aWNsZS1ob2xkZXIgcCcpLmNvbnRlbnRzKCkuZmlsdGVyKGZ1bmN0aW9uKCl7XG4gIC8vICByZXR1cm4gdGhpcy5ub2RlVHlwZSA9PT0gMztcbiAgLy99KS53cmFwKCc8c3BhbiBjbGFzcz1cImpzX19hcnRpY2xlLXRleHQtc3Bhbm5lZFwiLz4nKTtcbiAgLy8gaWYgYW55dGhpbmcgb3V0c2lkZSBkaXYgaXMgY2xpY2tlZCAtIGdldHRpbmcgYmFjayB0byBob21lXG4gICQoJy5qc19fYXJ0aWNsZS1ib3gnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vc2V0IHRvIFwicmV0dXJuIHRvIGhvbWVcIiB0byBldmVyeXRoaW5nIGV4Y2VwdCB0ZXh0IGFuZCBpbWFnZSBhbmQgaGVhZGVyIHdyYXBwZWQgaW4gZHQgYW5kIGRkXG4gICAgaWYoICEoJChlLnRhcmdldCkuaXMoJ3AnKSB8fCAkKGUudGFyZ2V0KS5pcygnaW1nJykgfHwgXG4gICAgICAgICAgJChlLnRhcmdldCkuaXMoJ2R0JykgfHwgJChlLnRhcmdldCkuaXMoJ2RkJykgKSApIHsgXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7XG4gICAgfVxuICB9KTtcblxuICAvLyBhcyBpcyBcbiAgZnVuY3Rpb24gZ2V0UmFuZG9tSW50IChtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICB9XG5cbiAgLy8gYXMgaXMgLS0gdHVybmVkIG9mZlxuICBmdW5jdGlvbiBsb2dvUmVwb3NpdGlvbigpIHtcbiAgICAkKCcubG9nbycpLmNzcyh7XG4gICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6IGdldFJhbmRvbUludCgtMTAsIDExMCkgKyAnJSA1MCUnXG4gICAgfSlcbiAgfVxuICAvLyBsb2dvUmVwb3NpdGlvbigpO1xuXG4gIC8vIHNlcnZhIHRodW1ibmFpbCBpbWFnaW5pIGFsbGEgXCJob21lXCIgcGFnaW5hXG4gICQoJy5qc19fZ3JpZCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgdmFyICRncmlkID0gJCh0aGlzKSxcbiAgICAgICRpdGVtcyA9ICRncmlkLmZpbmQoJy5qc19faXRlbScpLFxuICAgICAgJHJlYXJyYW5nZXIgPSAkKCcuanNfX3JlYXJyYW5nZScpLFxuICAgICAgd2luZG93V2lkdGgsXG4gICAgICB3aW5kb3dIZWlnaHQsXG4gICAgICBpdGVtV2lkdGggPSAxNTAsXG4gICAgICBpdGVtSGVpZ2h0ID0gMTUwLFxuICAgICAgbWF4T2Zmc2V0WCxcbiAgICAgIG1heE9mZnNldFksXG4gICAgICByZXNpemVUaW1lb3V0LFxuICAgICAgeiA9IDEwMCxcbiAgICAgIENPTFMgPSA3LFxuICAgICAgUk9XUyA9IDYsXG4gICAgICBDTEFTU19TVElMTCA9ICdpc19fc3RpbGwnO1xuXG4gICAgZnVuY3Rpb24gcmVjYWxjKCkge1xuICAgICAgICAgICAgICAgICAgLy9hbGVydChcInJlY2FsY1wiKTtcbiAgICAgIC8vU2NhbGUgdGh1bWJuYWlscyBpZiByZXNvbHV0aW9uIGlzIGxlc3MgdGhhbiB0cmVzaG9sZFxuICAgICAgd2luZG93V2lkdGggPSAkZ3JpZC53aWR0aCgpO1xuICAgICAgd2luZG93SGVpZ2h0ID0gJGdyaWQuaGVpZ2h0KCk7XG4gICAgICB2YXIgdHJlc2hvbGRXaW5kb3dXaWR0aCA9IDE5MjA7XG4gICAgICBpZih3aW5kb3dXaWR0aCA8IHRyZXNob2xkV2luZG93V2lkdGgpe1xuICAgICAgICB2YXIgc2NhbGUgPSB3aW5kb3dXaWR0aC90cmVzaG9sZFdpbmRvd1dpZHRoO1xuICAgICAgICBpdGVtV2lkdGggPSBzY2FsZSAqIGl0ZW1XaWR0aDtcbiAgICAgICAgaXRlbUhlaWdodCA9IHNjYWxlICogaXRlbUhlaWdodDtcbiAgICAgIH1cbiAgICAgIC8vaXRlbVdpZHRoID0gcGFyc2VJbnQod2luZG93V2lkdGgvQ09MUyk7XG4gICAgICAvL2l0ZW1IZWlnaHQgPSBwYXJzZUludCh3aW5kb3dIZWlnaHQvUk9XUyk7XG4gICAgICBtYXhPZmZzZXRYID0gd2luZG93V2lkdGggLSBpdGVtV2lkdGg7XG4gICAgICBtYXhPZmZzZXRZID0gd2luZG93SGVpZ2h0IC0gaXRlbUhlaWdodCAtIDYxO1xuICAgIH1cblxuICAgIC8vIHJlYXJyYW5nZXMgaXRlbXMgdXNpbmcgZ2V0UmFuZG9tSW50XG4gICAgZnVuY3Rpb24gcmVhcnJhbmdlKGZvcmNlLCB0eXBlKSB7XG4gICAgICB2YXIgYWxwaGEgPSAwO1xuICAgICAgdmFyIHJhZCA9IG1heE9mZnNldFkqMC42O1xuICAgICAgJGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGFscGhhKz1NYXRoLlBJLzg7XG4gICAgICAgIC8vcmVhZCBkYXRhIGZyb20gY29va2llc1xuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyksXG4gICAgICAgICAgb2Zmc2V0TGVmdCA9ICQuY29va2llKGlkICsgJ19sZWZ0JyksIC8vIEFUVE5UISBJbiBwZXJjZW50IG9mIHdpbmRvd1xuICAgICAgICAgIG9mZnNldFRvcCA9ICQuY29va2llKGlkICsgJ190b3AnKTtcbiAgICAgICAgLy9pZiB0aGVyZSBpc24ndCBkYXRhIGdldCBhIHJhbmRvbVxuICAgICAgICBpZiAoIW9mZnNldExlZnQgfHwgZm9yY2UpIHtcbiAgICAgICAgICB2YXIgIG9mZnNldExlZnQgPSBnZXRSYW5kb21JbnQoMCwgbWF4T2Zmc2V0WCkvd2luZG93V2lkdGggKiAxMDA7XG4gICAgICAgICAgaWYgKHR5cGUgPT09IFwic3B5cmFsXCIpXG4gICAgICAgICAgICBvZmZzZXRMZWZ0ID0gKG1heE9mZnNldFgvMiArIE1hdGguc2luKGFscGhhKSpyYWQpL3dpbmRvd1dpZHRoICogMTAwO1xuICAgICAgICAgICQuY29va2llKGlkICsgJ19sZWZ0Jywgb2Zmc2V0TGVmdCwgeyBleHBpcmVzOiAxIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghb2Zmc2V0VG9wIHx8IGZvcmNlKSB7XG4gICAgICAgICAgb2Zmc2V0VG9wID0gZ2V0UmFuZG9tSW50KDAsIG1heE9mZnNldFkpL3dpbmRvd0hlaWdodCAqIDEwMDtcbiAgICAgICAgICBpZiAodHlwZSA9PT0gXCJzcHlyYWxcIilcbiAgICAgICAgICAgIHZhciBvZmZzZXRUb3AgPSAoKG1heE9mZnNldFkpLzIgKyBNYXRoLmNvcyhhbHBoYSkqcmFkKS93aW5kb3dIZWlnaHQgKiAxMDA7XG4gICAgICAgICAgJC5jb29raWUoaWQgKyAnX3RvcCcsIG9mZnNldFRvcCwgeyBleHBpcmVzOiAxIH0pO1xuICAgICAgICB9XG4gICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICB3aWR0aDogaXRlbVdpZHRoLFxuICAgICAgICAgIGxlZnQ6IG9mZnNldExlZnQgKyAnJScsXG4gICAgICAgICAgdG9wOiBvZmZzZXRUb3AgKyAnJSdcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBhc3BldHRhIHBlciB1bmEgc2Vjb25kYSBxdWFuZG8gaGEgcmljZXN0byBsJ2V2ZW50byBcInJlc2l6ZVwiIGUgcmljYWxjb2xhcmUgaSB2YXJpYWJpbGlcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVvdXQpO1xuICAgICAgcmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlY2FsYygpO1xuICAgICAgICAvLyByZWFycmFuZ2UoKTtcbiAgICAgIH0sIDUwMClcbiAgICB9KTtcblxuICAgIC8vIHNldHMgdXAgdGh1bWJuYWlscyBhcyBqUXVlcnkgVUkgaXRlbXNcbiAgICAkaXRlbXMuZHJhZ2dhYmxlKHtcbiAgICAgIGNvbnRhaW5tZW50OiAnI2dyaWQnLFxuICAgICAgc2Nyb2xsOiBmYWxzZSxcbiAgICAgIHN0YXJ0OiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgdWkuaGVscGVyLmFkZENsYXNzKENMQVNTX1NUSUxMKTtcbiAgICAgICAgdWkuaGVscGVyLmNzcygnei1pbmRleCcsIHorKyk7XG4gICAgICB9LFxuICAgICAgc3RvcDogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgIHZhciBpZCA9IHVpLmhlbHBlci5hdHRyKCdpZCcpO1xuICAgICAgICAkLmNvb2tpZShpZCArICdfbGVmdCcsIHVpLnBvc2l0aW9uLmxlZnQgLyB3aW5kb3dXaWR0aCAqIDEwMCwgeyBleHBpcmVzOiAxIH0pO1xuICAgICAgICAkLmNvb2tpZShpZCArICdfdG9wJywgdWkucG9zaXRpb24udG9wIC8gd2luZG93SGVpZ2h0ICogMTAwLCB7IGV4cGlyZXM6IDEgfSk7XG4gICAgICAgIHVpLmhlbHBlci5yZW1vdmVDbGFzcyhDTEFTU19TVElMTCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyByZWFycmFuZ2VzIHRodW1ibmFpbHMgb24gU1BBQ0VcbiAgICAkKGRvY3VtZW50KS5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT0gMzIpIHtcbiAgICAgICAgcmVhcnJhbmdlKHRydWUpOyAgICAgIFxuICAgICAgfVxuXG4gICAgICBpZiAoZS5rZXlDb2RlID09IDgzKSB7XG4gICAgICAgIHJlYXJyYW5nZSh0cnVlLFwic3B5cmFsXCIpOyAgICAgICAgXG4gICAgICB9XG4gICAgfSlcblxuICAgICRyZWFycmFuZ2VyLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJlYXJyYW5nZSh0cnVlKTtcbiAgICB9KVxuXG5cbiAgICAkKHdpbmRvdykubG9hZCggZnVuY3Rpb24oKXtcbiAgICByZWNhbGMoKTtcbiAgICByZWFycmFuZ2UoKTtcbiAgJGdyaWQuYWRkQ2xhc3MoJ2lzX19hY3RpdmUnKTt9KTtcblxuICAgIC8vIGluIDAuNSBzZWNvbmRzIHNldHMgZ3JpZCBvcGFjaXR5IHRvIDFcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgLy8kZ3JpZC5hZGRDbGFzcygnaXNfX2FjdGl2ZScpO1xuICAgIH0sIDcwMCk7XG4gIH0pO1xuXG59KVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIis3WkpwMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3BhcnRzL2dyaWQuanNcIixcIi9wYXJ0c1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbiQoZnVuY3Rpb24oKSB7XG5cdFxuXHQvLyBpdGVyYXRlcyB0aHJvdWdoIGFsbCBqc19fYXJ0aWNsZSBjaGlsZHJlbiBhbmQgc2VhcmNoZXMgZm9yIGpzX19hcnRpY2xlLWhvbWUgZGl2XG5cdC8vIHRoZW4gc2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSBmb3VuZCBkaXYgZXF1YWwgdG8ganNfX2FydGljbGUgaGVpZ2h0XG5cdC8vIHRoZW4gZG9lcyB0aGUgc2FtZSBhcyB0aGUgaW1hZ2VzIGFyZSBsb2FkZWQgKHB1cnBvc2UgdW5rbm93biB5ZXQpXG4gICQoJy5qc19fYXJ0aWNsZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgdmFyICRib3ggPSAkKHRoaXMpLFxuICAgICAgJGhvbWUgPSAkYm94LmZpbmQoJy5qc19fYXJ0aWNsZS1ob21lJyk7XG5cbiAgICAkaG9tZS5oZWlnaHQoJGJveC5oZWlnaHQoKSk7XG5cbiAgICAkYm94LmltYWdlc0xvYWRlZCggZnVuY3Rpb24oKSB7XG4gICAgICAkaG9tZS5oZWlnaHQoJGJveC5oZWlnaHQoKSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiKzdaSnAwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvcGFydHMvaW5uZXIuanNcIixcIi9wYXJ0c1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTJcblxuLyoqXG4gKiBJZiBgQnVmZmVyLl91c2VUeXBlZEFycmF5c2A6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChjb21wYXRpYmxlIGRvd24gdG8gSUU2KVxuICovXG5CdWZmZXIuX3VzZVR5cGVkQXJyYXlzID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gRGV0ZWN0IGlmIGJyb3dzZXIgc3VwcG9ydHMgVHlwZWQgQXJyYXlzLiBTdXBwb3J0ZWQgYnJvd3NlcnMgYXJlIElFIDEwKywgRmlyZWZveCA0KyxcbiAgLy8gQ2hyb21lIDcrLCBTYWZhcmkgNS4xKywgT3BlcmEgMTEuNissIGlPUyA0LjIrLiBJZiB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGFkZGluZ1xuICAvLyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsIHRoZW4gdGhhdCdzIHRoZSBzYW1lIGFzIG5vIGBVaW50OEFycmF5YCBzdXBwb3J0XG4gIC8vIGJlY2F1c2Ugd2UgbmVlZCB0byBiZSBhYmxlIHRvIGFkZCBhbGwgdGhlIG5vZGUgQnVmZmVyIEFQSSBtZXRob2RzLiBUaGlzIGlzIGFuIGlzc3VlXG4gIC8vIGluIEZpcmVmb3ggNC0yOS4gTm93IGZpeGVkOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzhcbiAgdHJ5IHtcbiAgICB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKDApXG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICBhcnIuZm9vID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfVxuICAgIHJldHVybiA0MiA9PT0gYXJyLmZvbygpICYmXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgLy8gQ2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSkoKVxuXG4vKipcbiAqIENsYXNzOiBCdWZmZXJcbiAqID09PT09PT09PT09PT1cbiAqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGFyZSBhdWdtZW50ZWRcbiAqIHdpdGggZnVuY3Rpb24gcHJvcGVydGllcyBmb3IgYWxsIHRoZSBub2RlIGBCdWZmZXJgIEFQSSBmdW5jdGlvbnMuIFdlIHVzZVxuICogYFVpbnQ4QXJyYXlgIHNvIHRoYXQgc3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXQgcmV0dXJuc1xuICogYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogQnkgYXVnbWVudGluZyB0aGUgaW5zdGFuY2VzLCB3ZSBjYW4gYXZvaWQgbW9kaWZ5aW5nIHRoZSBgVWludDhBcnJheWBcbiAqIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gQnVmZmVyIChzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKVxuICAgIHJldHVybiBuZXcgQnVmZmVyKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pXG5cbiAgdmFyIHR5cGUgPSB0eXBlb2Ygc3ViamVjdFxuXG4gIC8vIFdvcmthcm91bmQ6IG5vZGUncyBiYXNlNjQgaW1wbGVtZW50YXRpb24gYWxsb3dzIGZvciBub24tcGFkZGVkIHN0cmluZ3NcbiAgLy8gd2hpbGUgYmFzZTY0LWpzIGRvZXMgbm90LlxuICBpZiAoZW5jb2RpbmcgPT09ICdiYXNlNjQnICYmIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgc3ViamVjdCA9IHN0cmluZ3RyaW0oc3ViamVjdClcbiAgICB3aGlsZSAoc3ViamVjdC5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgICBzdWJqZWN0ID0gc3ViamVjdCArICc9J1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbmQgdGhlIGxlbmd0aFxuICB2YXIgbGVuZ3RoXG4gIGlmICh0eXBlID09PSAnbnVtYmVyJylcbiAgICBsZW5ndGggPSBjb2VyY2Uoc3ViamVjdClcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpXG4gICAgbGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoc3ViamVjdCwgZW5jb2RpbmcpXG4gIGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKVxuICAgIGxlbmd0aCA9IGNvZXJjZShzdWJqZWN0Lmxlbmd0aCkgLy8gYXNzdW1lIHRoYXQgb2JqZWN0IGlzIGFycmF5LWxpa2VcbiAgZWxzZVxuICAgIHRocm93IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgbmVlZHMgdG8gYmUgYSBudW1iZXIsIGFycmF5IG9yIHN0cmluZy4nKVxuXG4gIHZhciBidWZcbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICAvLyBQcmVmZXJyZWQ6IFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgYnVmID0gQnVmZmVyLl9hdWdtZW50KG5ldyBVaW50OEFycmF5KGxlbmd0aCkpXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBUSElTIGluc3RhbmNlIG9mIEJ1ZmZlciAoY3JlYXRlZCBieSBgbmV3YClcbiAgICBidWYgPSB0aGlzXG4gICAgYnVmLmxlbmd0aCA9IGxlbmd0aFxuICAgIGJ1Zi5faXNCdWZmZXIgPSB0cnVlXG4gIH1cblxuICB2YXIgaVxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cyAmJiB0eXBlb2Ygc3ViamVjdC5ieXRlTGVuZ3RoID09PSAnbnVtYmVyJykge1xuICAgIC8vIFNwZWVkIG9wdGltaXphdGlvbiAtLSB1c2Ugc2V0IGlmIHdlJ3JlIGNvcHlpbmcgZnJvbSBhIHR5cGVkIGFycmF5XG4gICAgYnVmLl9zZXQoc3ViamVjdClcbiAgfSBlbHNlIGlmIChpc0FycmF5aXNoKHN1YmplY3QpKSB7XG4gICAgLy8gVHJlYXQgYXJyYXktaXNoIG9iamVjdHMgYXMgYSBieXRlIGFycmF5XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpKVxuICAgICAgICBidWZbaV0gPSBzdWJqZWN0LnJlYWRVSW50OChpKVxuICAgICAgZWxzZVxuICAgICAgICBidWZbaV0gPSBzdWJqZWN0W2ldXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgYnVmLndyaXRlKHN1YmplY3QsIDAsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmICFCdWZmZXIuX3VzZVR5cGVkQXJyYXlzICYmICFub1plcm8pIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1ZltpXSA9IDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmXG59XG5cbi8vIFNUQVRJQyBNRVRIT0RTXG4vLyA9PT09PT09PT09PT09PVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAncmF3JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gKGIpIHtcbiAgcmV0dXJuICEhKGIgIT09IG51bGwgJiYgYiAhPT0gdW5kZWZpbmVkICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGZ1bmN0aW9uIChzdHIsIGVuY29kaW5nKSB7XG4gIHZhciByZXRcbiAgc3RyID0gc3RyICsgJydcbiAgc3dpdGNoIChlbmNvZGluZyB8fCAndXRmOCcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAvIDJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gdXRmOFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAncmF3JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IGJhc2U2NFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggKiAyXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIChsaXN0LCB0b3RhbExlbmd0aCkge1xuICBhc3NlcnQoaXNBcnJheShsaXN0KSwgJ1VzYWdlOiBCdWZmZXIuY29uY2F0KGxpc3QsIFt0b3RhbExlbmd0aF0pXFxuJyArXG4gICAgICAnbGlzdCBzaG91bGQgYmUgYW4gQXJyYXkuJylcblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcigwKVxuICB9IGVsc2UgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGxpc3RbMF1cbiAgfVxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdG90YWxMZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgdG90YWxMZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvdGFsTGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIodG90YWxMZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgaXRlbS5jb3B5KGJ1ZiwgcG9zKVxuICAgIHBvcyArPSBpdGVtLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZcbn1cblxuLy8gQlVGRkVSIElOU1RBTkNFIE1FVEhPRFNcbi8vID09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIF9oZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGFzc2VydChzdHJMZW4gJSAyID09PSAwLCAnSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGJ5dGUgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgYXNzZXJ0KCFpc05hTihieXRlKSwgJ0ludmFsaWQgaGV4IHN0cmluZycpXG4gICAgYnVmW29mZnNldCArIGldID0gYnl0ZVxuICB9XG4gIEJ1ZmZlci5fY2hhcnNXcml0dGVuID0gaSAqIDJcbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gX3V0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF9hc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF9iaW5hcnlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBfYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIF9iYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX3V0ZjE2bGVXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gU3VwcG9ydCBib3RoIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZylcbiAgLy8gYW5kIHRoZSBsZWdhY3kgKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIGlmICghaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfSBlbHNlIHsgIC8vIGxlZ2FjeVxuICAgIHZhciBzd2FwID0gZW5jb2RpbmdcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIG9mZnNldCA9IGxlbmd0aFxuICAgIGxlbmd0aCA9IHN3YXBcbiAgfVxuXG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IF9oZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSBfdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IF9hc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBfYmluYXJ5V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IF9iYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gX3V0ZjE2bGVXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG4gIHN0YXJ0ID0gTnVtYmVyKHN0YXJ0KSB8fCAwXG4gIGVuZCA9IChlbmQgIT09IHVuZGVmaW5lZClcbiAgICA/IE51bWJlcihlbmQpXG4gICAgOiBlbmQgPSBzZWxmLmxlbmd0aFxuXG4gIC8vIEZhc3RwYXRoIGVtcHR5IHN0cmluZ3NcbiAgaWYgKGVuZCA9PT0gc3RhcnQpXG4gICAgcmV0dXJuICcnXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IF9oZXhTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSBfdXRmOFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IF9hc2NpaVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBfYmluYXJ5U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IF9iYXNlNjRTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gX3V0ZjE2bGVTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldF9zdGFydCwgc3RhcnQsIGVuZCkge1xuICB2YXIgc291cmNlID0gdGhpc1xuXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICghdGFyZ2V0X3N0YXJ0KSB0YXJnZXRfc3RhcnQgPSAwXG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgc291cmNlLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBhc3NlcnQoZW5kID49IHN0YXJ0LCAnc291cmNlRW5kIDwgc291cmNlU3RhcnQnKVxuICBhc3NlcnQodGFyZ2V0X3N0YXJ0ID49IDAgJiYgdGFyZ2V0X3N0YXJ0IDwgdGFyZ2V0Lmxlbmd0aCxcbiAgICAgICd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KHN0YXJ0ID49IDAgJiYgc3RhcnQgPCBzb3VyY2UubGVuZ3RoLCAnc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChlbmQgPj0gMCAmJiBlbmQgPD0gc291cmNlLmxlbmd0aCwgJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpXG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgPCBlbmQgLSBzdGFydClcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0ICsgc3RhcnRcblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcblxuICBpZiAobGVuIDwgMTAwIHx8ICFCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0X3N0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICB9IGVsc2Uge1xuICAgIHRhcmdldC5fc2V0KHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSwgdGFyZ2V0X3N0YXJ0KVxuICB9XG59XG5cbmZ1bmN0aW9uIF9iYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gX3V0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXMgPSAnJ1xuICB2YXIgdG1wID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgaWYgKGJ1ZltpXSA8PSAweDdGKSB7XG4gICAgICByZXMgKz0gZGVjb2RlVXRmOENoYXIodG1wKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICAgICAgdG1wID0gJydcbiAgICB9IGVsc2Uge1xuICAgICAgdG1wICs9ICclJyArIGJ1ZltpXS50b1N0cmluZygxNilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzICsgZGVjb2RlVXRmOENoYXIodG1wKVxufVxuXG5mdW5jdGlvbiBfYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspXG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIF9iaW5hcnlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHJldHVybiBfYXNjaWlTbGljZShidWYsIHN0YXJ0LCBlbmQpXG59XG5cbmZ1bmN0aW9uIF9oZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIF91dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2krMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gY2xhbXAoc3RhcnQsIGxlbiwgMClcbiAgZW5kID0gY2xhbXAoZW5kLCBsZW4sIGxlbilcblxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIHJldHVybiBCdWZmZXIuX2F1Z21lbnQodGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSlcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIHZhciBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQsIHRydWUpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgaSsrKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0J1ZlxuICB9XG59XG5cbi8vIGBnZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5nZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLnJlYWRVSW50OChvZmZzZXQpXG59XG5cbi8vIGBzZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh2LCBvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5zZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLndyaXRlVUludDgodiwgb2Zmc2V0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5mdW5jdGlvbiBfcmVhZFVJbnQxNiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWxcbiAgaWYgKGxpdHRsZUVuZGlhbikge1xuICAgIHZhbCA9IGJ1ZltvZmZzZXRdXG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdIDw8IDhcbiAgfSBlbHNlIHtcbiAgICB2YWwgPSBidWZbb2Zmc2V0XSA8PCA4XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQxNih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQxNih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRVSW50MzIgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsXG4gIGlmIChsaXR0bGVFbmRpYW4pIHtcbiAgICBpZiAob2Zmc2V0ICsgMiA8IGxlbilcbiAgICAgIHZhbCA9IGJ1ZltvZmZzZXQgKyAyXSA8PCAxNlxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXSA8PCA4XG4gICAgdmFsIHw9IGJ1ZltvZmZzZXRdXG4gICAgaWYgKG9mZnNldCArIDMgPCBsZW4pXG4gICAgICB2YWwgPSB2YWwgKyAoYnVmW29mZnNldCArIDNdIDw8IDI0ID4+PiAwKVxuICB9IGVsc2Uge1xuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsID0gYnVmW29mZnNldCArIDFdIDw8IDE2XG4gICAgaWYgKG9mZnNldCArIDIgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDJdIDw8IDhcbiAgICBpZiAob2Zmc2V0ICsgMyA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgM11cbiAgICB2YWwgPSB2YWwgKyAoYnVmW29mZnNldF0gPDwgMjQgPj4+IDApXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQzMih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQzMih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLFxuICAgICAgICAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgdmFyIG5lZyA9IHRoaXNbb2Zmc2V0XSAmIDB4ODBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbmZ1bmN0aW9uIF9yZWFkSW50MTYgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsID0gX3JlYWRVSW50MTYoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgdHJ1ZSlcbiAgdmFyIG5lZyA9IHZhbCAmIDB4ODAwMFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZmZmIC0gdmFsICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MTYodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDE2KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZEludDMyIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbCA9IF9yZWFkVUludDMyKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIHRydWUpXG4gIHZhciBuZWcgPSB2YWwgJiAweDgwMDAwMDAwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmZmZmZmZmIC0gdmFsICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MzIodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDMyKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZEZsb2F0IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHJldHVybiBpZWVlNzU0LnJlYWQoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRGbG9hdCh0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRmxvYXQodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkRG91YmxlIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgKyA3IDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHJldHVybiBpZWVlNzU0LnJlYWQoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRG91YmxlKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRG91YmxlKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZilcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpIHJldHVyblxuXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG59XG5cbmZ1bmN0aW9uIF93cml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmZmYpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGxlbiAtIG9mZnNldCwgMik7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPVxuICAgICAgICAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmZmZmZmZmKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihsZW4gLSBvZmZzZXQsIDQpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID1cbiAgICAgICAgKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmLCAtMHg4MClcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgdGhpcy53cml0ZVVJbnQ4KHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgdGhpcy53cml0ZVVJbnQ4KDB4ZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2ZmZiwgLTB4ODAwMClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIF93cml0ZVVJbnQxNihidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICBfd3JpdGVVSW50MTYoYnVmLCAweGZmZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICBfd3JpdGVVSW50MzIoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgX3dyaXRlVUludDMyKGJ1ZiwgMHhmZmZmZmZmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZJRUVFNzU0KHZhbHVlLCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgNyA8IGJ1Zi5sZW5ndGgsXG4gICAgICAgICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmSUVFRTc1NCh2YWx1ZSwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gZmlsbCh2YWx1ZSwgc3RhcnQ9MCwgZW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiAodmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCF2YWx1ZSkgdmFsdWUgPSAwXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCkgZW5kID0gdGhpcy5sZW5ndGhcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHZhbHVlID0gdmFsdWUuY2hhckNvZGVBdCgwKVxuICB9XG5cbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbHVlKSwgJ3ZhbHVlIGlzIG5vdCBhIG51bWJlcicpXG4gIGFzc2VydChlbmQgPj0gc3RhcnQsICdlbmQgPCBzdGFydCcpXG5cbiAgLy8gRmlsbCAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICBhc3NlcnQoc3RhcnQgPj0gMCAmJiBzdGFydCA8IHRoaXMubGVuZ3RoLCAnc3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChlbmQgPj0gMCAmJiBlbmQgPD0gdGhpcy5sZW5ndGgsICdlbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICB0aGlzW2ldID0gdmFsdWVcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvdXQgPSBbXVxuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIG91dFtpXSA9IHRvSGV4KHRoaXNbaV0pXG4gICAgaWYgKGkgPT09IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMpIHtcbiAgICAgIG91dFtpICsgMV0gPSAnLi4uJ1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBvdXQuam9pbignICcpICsgJz4nXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgQXJyYXlCdWZmZXJgIHdpdGggdGhlICpjb3BpZWQqIG1lbW9yeSBvZiB0aGUgYnVmZmVyIGluc3RhbmNlLlxuICogQWRkZWQgaW4gTm9kZSAwLjEyLiBPbmx5IGF2YWlsYWJsZSBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgQXJyYXlCdWZmZXIuXG4gKi9cbkJ1ZmZlci5wcm90b3R5cGUudG9BcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgICByZXR1cm4gKG5ldyBCdWZmZXIodGhpcykpLmJ1ZmZlclxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYnVmID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5sZW5ndGgpXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYnVmLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKVxuICAgICAgICBidWZbaV0gPSB0aGlzW2ldXG4gICAgICByZXR1cm4gYnVmLmJ1ZmZlclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0J1ZmZlci50b0FycmF5QnVmZmVyIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJylcbiAgfVxufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbnZhciBCUCA9IEJ1ZmZlci5wcm90b3R5cGVcblxuLyoqXG4gKiBBdWdtZW50IGEgVWludDhBcnJheSAqaW5zdGFuY2UqIChub3QgdGhlIFVpbnQ4QXJyYXkgY2xhc3MhKSB3aXRoIEJ1ZmZlciBtZXRob2RzXG4gKi9cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9pc0J1ZmZlciA9IHRydWVcblxuICAvLyBzYXZlIHJlZmVyZW5jZSB0byBvcmlnaW5hbCBVaW50OEFycmF5IGdldC9zZXQgbWV0aG9kcyBiZWZvcmUgb3ZlcndyaXRpbmdcbiAgYXJyLl9nZXQgPSBhcnIuZ2V0XG4gIGFyci5fc2V0ID0gYXJyLnNldFxuXG4gIC8vIGRlcHJlY2F0ZWQsIHdpbGwgYmUgcmVtb3ZlZCBpbiBub2RlIDAuMTMrXG4gIGFyci5nZXQgPSBCUC5nZXRcbiAgYXJyLnNldCA9IEJQLnNldFxuXG4gIGFyci53cml0ZSA9IEJQLndyaXRlXG4gIGFyci50b1N0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0xvY2FsZVN0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0pTT04gPSBCUC50b0pTT05cbiAgYXJyLmNvcHkgPSBCUC5jb3B5XG4gIGFyci5zbGljZSA9IEJQLnNsaWNlXG4gIGFyci5yZWFkVUludDggPSBCUC5yZWFkVUludDhcbiAgYXJyLnJlYWRVSW50MTZMRSA9IEJQLnJlYWRVSW50MTZMRVxuICBhcnIucmVhZFVJbnQxNkJFID0gQlAucmVhZFVJbnQxNkJFXG4gIGFyci5yZWFkVUludDMyTEUgPSBCUC5yZWFkVUludDMyTEVcbiAgYXJyLnJlYWRVSW50MzJCRSA9IEJQLnJlYWRVSW50MzJCRVxuICBhcnIucmVhZEludDggPSBCUC5yZWFkSW50OFxuICBhcnIucmVhZEludDE2TEUgPSBCUC5yZWFkSW50MTZMRVxuICBhcnIucmVhZEludDE2QkUgPSBCUC5yZWFkSW50MTZCRVxuICBhcnIucmVhZEludDMyTEUgPSBCUC5yZWFkSW50MzJMRVxuICBhcnIucmVhZEludDMyQkUgPSBCUC5yZWFkSW50MzJCRVxuICBhcnIucmVhZEZsb2F0TEUgPSBCUC5yZWFkRmxvYXRMRVxuICBhcnIucmVhZEZsb2F0QkUgPSBCUC5yZWFkRmxvYXRCRVxuICBhcnIucmVhZERvdWJsZUxFID0gQlAucmVhZERvdWJsZUxFXG4gIGFyci5yZWFkRG91YmxlQkUgPSBCUC5yZWFkRG91YmxlQkVcbiAgYXJyLndyaXRlVUludDggPSBCUC53cml0ZVVJbnQ4XG4gIGFyci53cml0ZVVJbnQxNkxFID0gQlAud3JpdGVVSW50MTZMRVxuICBhcnIud3JpdGVVSW50MTZCRSA9IEJQLndyaXRlVUludDE2QkVcbiAgYXJyLndyaXRlVUludDMyTEUgPSBCUC53cml0ZVVJbnQzMkxFXG4gIGFyci53cml0ZVVJbnQzMkJFID0gQlAud3JpdGVVSW50MzJCRVxuICBhcnIud3JpdGVJbnQ4ID0gQlAud3JpdGVJbnQ4XG4gIGFyci53cml0ZUludDE2TEUgPSBCUC53cml0ZUludDE2TEVcbiAgYXJyLndyaXRlSW50MTZCRSA9IEJQLndyaXRlSW50MTZCRVxuICBhcnIud3JpdGVJbnQzMkxFID0gQlAud3JpdGVJbnQzMkxFXG4gIGFyci53cml0ZUludDMyQkUgPSBCUC53cml0ZUludDMyQkVcbiAgYXJyLndyaXRlRmxvYXRMRSA9IEJQLndyaXRlRmxvYXRMRVxuICBhcnIud3JpdGVGbG9hdEJFID0gQlAud3JpdGVGbG9hdEJFXG4gIGFyci53cml0ZURvdWJsZUxFID0gQlAud3JpdGVEb3VibGVMRVxuICBhcnIud3JpdGVEb3VibGVCRSA9IEJQLndyaXRlRG91YmxlQkVcbiAgYXJyLmZpbGwgPSBCUC5maWxsXG4gIGFyci5pbnNwZWN0ID0gQlAuaW5zcGVjdFxuICBhcnIudG9BcnJheUJ1ZmZlciA9IEJQLnRvQXJyYXlCdWZmZXJcblxuICByZXR1cm4gYXJyXG59XG5cbi8vIHNsaWNlKHN0YXJ0LCBlbmQpXG5mdW5jdGlvbiBjbGFtcCAoaW5kZXgsIGxlbiwgZGVmYXVsdFZhbHVlKSB7XG4gIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSByZXR1cm4gZGVmYXVsdFZhbHVlXG4gIGluZGV4ID0gfn5pbmRleDsgIC8vIENvZXJjZSB0byBpbnRlZ2VyLlxuICBpZiAoaW5kZXggPj0gbGVuKSByZXR1cm4gbGVuXG4gIGlmIChpbmRleCA+PSAwKSByZXR1cm4gaW5kZXhcbiAgaW5kZXggKz0gbGVuXG4gIGlmIChpbmRleCA+PSAwKSByZXR1cm4gaW5kZXhcbiAgcmV0dXJuIDBcbn1cblxuZnVuY3Rpb24gY29lcmNlIChsZW5ndGgpIHtcbiAgLy8gQ29lcmNlIGxlbmd0aCB0byBhIG51bWJlciAocG9zc2libHkgTmFOKSwgcm91bmQgdXBcbiAgLy8gaW4gY2FzZSBpdCdzIGZyYWN0aW9uYWwgKGUuZy4gMTIzLjQ1NikgdGhlbiBkbyBhXG4gIC8vIGRvdWJsZSBuZWdhdGUgdG8gY29lcmNlIGEgTmFOIHRvIDAuIEVhc3ksIHJpZ2h0P1xuICBsZW5ndGggPSB+fk1hdGguY2VpbCgrbGVuZ3RoKVxuICByZXR1cm4gbGVuZ3RoIDwgMCA/IDAgOiBsZW5ndGhcbn1cblxuZnVuY3Rpb24gaXNBcnJheSAoc3ViamVjdCkge1xuICByZXR1cm4gKEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHN1YmplY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN1YmplY3QpID09PSAnW29iamVjdCBBcnJheV0nXG4gIH0pKHN1YmplY3QpXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlpc2ggKHN1YmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc3ViamVjdCkgfHwgQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpIHx8XG4gICAgICBzdWJqZWN0ICYmIHR5cGVvZiBzdWJqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mIHN1YmplY3QubGVuZ3RoID09PSAnbnVtYmVyJ1xufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGIgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGlmIChiIDw9IDB4N0YpXG4gICAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSlcbiAgICBlbHNlIHtcbiAgICAgIHZhciBzdGFydCA9IGlcbiAgICAgIGlmIChiID49IDB4RDgwMCAmJiBiIDw9IDB4REZGRikgaSsrXG4gICAgICB2YXIgaCA9IGVuY29kZVVSSUNvbXBvbmVudChzdHIuc2xpY2Uoc3RhcnQsIGkrMSkpLnN1YnN0cigxKS5zcGxpdCgnJScpXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGgubGVuZ3RoOyBqKyspXG4gICAgICAgIGJ5dGVBcnJheS5wdXNoKHBhcnNlSW50KGhbal0sIDE2KSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoc3RyKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIHBvc1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKVxuICAgICAgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBkZWNvZGVVdGY4Q2hhciAoc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCkgLy8gVVRGIDggaW52YWxpZCBjaGFyXG4gIH1cbn1cblxuLypcbiAqIFdlIGhhdmUgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHZhbHVlIGlzIGEgdmFsaWQgaW50ZWdlci4gVGhpcyBtZWFucyB0aGF0IGl0XG4gKiBpcyBub24tbmVnYXRpdmUuIEl0IGhhcyBubyBmcmFjdGlvbmFsIGNvbXBvbmVudCBhbmQgdGhhdCBpdCBkb2VzIG5vdFxuICogZXhjZWVkIHRoZSBtYXhpbXVtIGFsbG93ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHZlcmlmdWludCAodmFsdWUsIG1heCkge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPj0gMCwgJ3NwZWNpZmllZCBhIG5lZ2F0aXZlIHZhbHVlIGZvciB3cml0aW5nIGFuIHVuc2lnbmVkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGlzIGxhcmdlciB0aGFuIG1heGltdW0gdmFsdWUgZm9yIHR5cGUnKVxuICBhc3NlcnQoTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlLCAndmFsdWUgaGFzIGEgZnJhY3Rpb25hbCBjb21wb25lbnQnKVxufVxuXG5mdW5jdGlvbiB2ZXJpZnNpbnQgKHZhbHVlLCBtYXgsIG1pbikge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgbGFyZ2VyIHRoYW4gbWF4aW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlID49IG1pbiwgJ3ZhbHVlIHNtYWxsZXIgdGhhbiBtaW5pbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQoTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlLCAndmFsdWUgaGFzIGEgZnJhY3Rpb25hbCBjb21wb25lbnQnKVxufVxuXG5mdW5jdGlvbiB2ZXJpZklFRUU3NTQgKHZhbHVlLCBtYXgsIG1pbikge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgbGFyZ2VyIHRoYW4gbWF4aW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlID49IG1pbiwgJ3ZhbHVlIHNtYWxsZXIgdGhhbiBtaW5pbXVtIGFsbG93ZWQgdmFsdWUnKVxufVxuXG5mdW5jdGlvbiBhc3NlcnQgKHRlc3QsIG1lc3NhZ2UpIHtcbiAgaWYgKCF0ZXN0KSB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSB8fCAnRmFpbGVkIGFzc2VydGlvbicpXG59XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiKzdaSnAwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzXCIsXCIvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xudmFyIGxvb2t1cCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblxuOyhmdW5jdGlvbiAoZXhwb3J0cykge1xuXHQndXNlIHN0cmljdCc7XG5cbiAgdmFyIEFyciA9ICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgPyBVaW50OEFycmF5XG4gICAgOiBBcnJheVxuXG5cdHZhciBQTFVTICAgPSAnKycuY2hhckNvZGVBdCgwKVxuXHR2YXIgU0xBU0ggID0gJy8nLmNoYXJDb2RlQXQoMClcblx0dmFyIE5VTUJFUiA9ICcwJy5jaGFyQ29kZUF0KDApXG5cdHZhciBMT1dFUiAgPSAnYScuY2hhckNvZGVBdCgwKVxuXHR2YXIgVVBQRVIgID0gJ0EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFBMVVNfVVJMX1NBRkUgPSAnLScuY2hhckNvZGVBdCgwKVxuXHR2YXIgU0xBU0hfVVJMX1NBRkUgPSAnXycuY2hhckNvZGVBdCgwKVxuXG5cdGZ1bmN0aW9uIGRlY29kZSAoZWx0KSB7XG5cdFx0dmFyIGNvZGUgPSBlbHQuY2hhckNvZGVBdCgwKVxuXHRcdGlmIChjb2RlID09PSBQTFVTIHx8XG5cdFx0ICAgIGNvZGUgPT09IFBMVVNfVVJMX1NBRkUpXG5cdFx0XHRyZXR1cm4gNjIgLy8gJysnXG5cdFx0aWYgKGNvZGUgPT09IFNMQVNIIHx8XG5cdFx0ICAgIGNvZGUgPT09IFNMQVNIX1VSTF9TQUZFKVxuXHRcdFx0cmV0dXJuIDYzIC8vICcvJ1xuXHRcdGlmIChjb2RlIDwgTlVNQkVSKVxuXHRcdFx0cmV0dXJuIC0xIC8vbm8gbWF0Y2hcblx0XHRpZiAoY29kZSA8IE5VTUJFUiArIDEwKVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBOVU1CRVIgKyAyNiArIDI2XG5cdFx0aWYgKGNvZGUgPCBVUFBFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBVUFBFUlxuXHRcdGlmIChjb2RlIDwgTE9XRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gTE9XRVIgKyAyNlxuXHR9XG5cblx0ZnVuY3Rpb24gYjY0VG9CeXRlQXJyYXkgKGI2NCkge1xuXHRcdHZhciBpLCBqLCBsLCB0bXAsIHBsYWNlSG9sZGVycywgYXJyXG5cblx0XHRpZiAoYjY0Lmxlbmd0aCAlIDQgPiAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuXHRcdH1cblxuXHRcdC8vIHRoZSBudW1iZXIgb2YgZXF1YWwgc2lnbnMgKHBsYWNlIGhvbGRlcnMpXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHR3byBwbGFjZWhvbGRlcnMsIHRoYW4gdGhlIHR3byBjaGFyYWN0ZXJzIGJlZm9yZSBpdFxuXHRcdC8vIHJlcHJlc2VudCBvbmUgYnl0ZVxuXHRcdC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lLCB0aGVuIHRoZSB0aHJlZSBjaGFyYWN0ZXJzIGJlZm9yZSBpdCByZXByZXNlbnQgMiBieXRlc1xuXHRcdC8vIHRoaXMgaXMganVzdCBhIGNoZWFwIGhhY2sgdG8gbm90IGRvIGluZGV4T2YgdHdpY2Vcblx0XHR2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXHRcdHBsYWNlSG9sZGVycyA9ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAyKSA/IDIgOiAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMSkgPyAxIDogMFxuXG5cdFx0Ly8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5cdFx0YXJyID0gbmV3IEFycihiNjQubGVuZ3RoICogMyAvIDQgLSBwbGFjZUhvbGRlcnMpXG5cblx0XHQvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG5cdFx0bCA9IHBsYWNlSG9sZGVycyA+IDAgPyBiNjQubGVuZ3RoIC0gNCA6IGI2NC5sZW5ndGhcblxuXHRcdHZhciBMID0gMFxuXG5cdFx0ZnVuY3Rpb24gcHVzaCAodikge1xuXHRcdFx0YXJyW0wrK10gPSB2XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgaiA9IDA7IGkgPCBsOyBpICs9IDQsIGogKz0gMykge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxOCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCAxMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA8PCA2KSB8IGRlY29kZShiNjQuY2hhckF0KGkgKyAzKSlcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMDAwKSA+PiAxNilcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMCkgPj4gOClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPj4gNClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxMCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCA0KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpID4+IDIpXG5cdFx0XHRwdXNoKCh0bXAgPj4gOCkgJiAweEZGKVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdHJldHVybiBhcnJcblx0fVxuXG5cdGZ1bmN0aW9uIHVpbnQ4VG9CYXNlNjQgKHVpbnQ4KSB7XG5cdFx0dmFyIGksXG5cdFx0XHRleHRyYUJ5dGVzID0gdWludDgubGVuZ3RoICUgMywgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcblx0XHRcdG91dHB1dCA9IFwiXCIsXG5cdFx0XHR0ZW1wLCBsZW5ndGhcblxuXHRcdGZ1bmN0aW9uIGVuY29kZSAobnVtKSB7XG5cdFx0XHRyZXR1cm4gbG9va3VwLmNoYXJBdChudW0pXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcblx0XHRcdHJldHVybiBlbmNvZGUobnVtID4+IDE4ICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDEyICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDYgJiAweDNGKSArIGVuY29kZShudW0gJiAweDNGKVxuXHRcdH1cblxuXHRcdC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcblx0XHRmb3IgKGkgPSAwLCBsZW5ndGggPSB1aW50OC5sZW5ndGggLSBleHRyYUJ5dGVzOyBpIDwgbGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdHRlbXAgPSAodWludDhbaV0gPDwgMTYpICsgKHVpbnQ4W2kgKyAxXSA8PCA4KSArICh1aW50OFtpICsgMl0pXG5cdFx0XHRvdXRwdXQgKz0gdHJpcGxldFRvQmFzZTY0KHRlbXApXG5cdFx0fVxuXG5cdFx0Ly8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuXHRcdHN3aXRjaCAoZXh0cmFCeXRlcykge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0ZW1wID0gdWludDhbdWludDgubGVuZ3RoIC0gMV1cblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDIpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz09J1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0ZW1wID0gKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDJdIDw8IDgpICsgKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMTApXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPj4gNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDIpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9J1xuXHRcdFx0XHRicmVha1xuXHRcdH1cblxuXHRcdHJldHVybiBvdXRwdXRcblx0fVxuXG5cdGV4cG9ydHMudG9CeXRlQXJyYXkgPSBiNjRUb0J5dGVBcnJheVxuXHRleHBvcnRzLmZyb21CeXRlQXJyYXkgPSB1aW50OFRvQmFzZTY0XG59KHR5cGVvZiBleHBvcnRzID09PSAndW5kZWZpbmVkJyA/ICh0aGlzLmJhc2U2NGpzID0ge30pIDogZXhwb3J0cykpXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiKzdaSnAwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qc1wiLFwiLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYlwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sXG4gICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgbkJpdHMgPSAtNyxcbiAgICAgIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMCxcbiAgICAgIGQgPSBpc0xFID8gLTEgOiAxLFxuICAgICAgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXTtcblxuICBpICs9IGQ7XG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIHMgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBlTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KTtcblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgZSA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IG1MZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhcztcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpO1xuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbik7XG4gICAgZSA9IGUgLSBlQmlhcztcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKTtcbn07XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbihidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgYyxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMCksXG4gICAgICBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSksXG4gICAgICBkID0gaXNMRSA/IDEgOiAtMSxcbiAgICAgIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDA7XG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSk7XG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDA7XG4gICAgZSA9IGVNYXg7XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpO1xuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLTtcbiAgICAgIGMgKj0gMjtcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKys7XG4gICAgICBjIC89IDI7XG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMDtcbiAgICAgIGUgPSBlTWF4O1xuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSBlICsgZUJpYXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSAwO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpO1xuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG07XG4gIGVMZW4gKz0gbUxlbjtcbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KTtcblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjg7XG59O1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIis3WkpwMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qc1wiLFwiLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NFwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gZXYuc291cmNlO1xuICAgICAgICAgICAgaWYgKChzb3VyY2UgPT09IHdpbmRvdyB8fCBzb3VyY2UgPT09IG51bGwpICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn1cblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIis3WkpwMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiLFwiLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3NcIikiXX0=
