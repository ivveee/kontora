(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
require('./lib/ui');

require('./parts/grid');
require('./parts/inner');

}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_1be86186.js","/")
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
  // set cursor style to text because 
  $('.js__article-holder p').contents().filter(function(){
    return this.nodeType === 3;
  }).wrap('<span class="js__article-text-spanned" style = "cursor:text"/>');
  // if anything outside div is clicked - getting back to home
  $('.js__article-box').on('click', function(e){
    e.stopPropagation();
    //set to "return to home" to everything except text and image and header wrapped in dt and dd
    if( !($(e.target).hasClass('js__article-text-spanned') || $(e.target).is('img') || 
          $(e.target).is('dt') || $(e.target).is('dd') ) ) { // horrific. to be changed.
        window.location.href = "/";
    }
  });

  // as is 
  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // as is
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
      windowWidth = $grid.width();
      windowHeight = $grid.height();
      // itemWidth = parseInt(windowWidth/COLS);
      // itemHeight = parseInt(windowHeight/ROWS);
      maxOffsetX = windowWidth - itemWidth;
      maxOffsetY = windowHeight - itemHeight - 61;
    }

    function rearrange(force) {
      $items.each(function() {
        var id = $(this).attr('id'),
          offsetLeft = $.cookie(id + '_left'),
          offsetTop = $.cookie(id + '_top');
        if (!offsetLeft || force) {
          offsetLeft = getRandomInt(0, maxOffsetX)/windowWidth * 100;
          $.cookie(id + '_left', offsetLeft, { expires: 1 });
        }
        if (!offsetLeft || force) {
          offsetTop = getRandomInt(0, maxOffsetY)/(windowHeight - 61) * 100;
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

    // rearranges thumbnails on SPACE. Doesn't work
    $(document).on('keydown', function(e) {
      if (e.keyCode == 32) {
        rearrange();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YW5pYS9Eb2N1bWVudHMva29udG9yYS9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdmFuaWEvRG9jdW1lbnRzL2tvbnRvcmEvYXNzZXRzL3NjcmlwdHMvYXBwL2Zha2VfMWJlODYxODYuanMiLCIvVXNlcnMvdmFuaWEvRG9jdW1lbnRzL2tvbnRvcmEvYXNzZXRzL3NjcmlwdHMvYXBwL2xpYi91aS5qcyIsIi9Vc2Vycy92YW5pYS9Eb2N1bWVudHMva29udG9yYS9hc3NldHMvc2NyaXB0cy9hcHAvcGFydHMvZ3JpZC5qcyIsIi9Vc2Vycy92YW5pYS9Eb2N1bWVudHMva29udG9yYS9hc3NldHMvc2NyaXB0cy9hcHAvcGFydHMvaW5uZXIuanMiLCIvVXNlcnMvdmFuaWEvRG9jdW1lbnRzL2tvbnRvcmEvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwiL1VzZXJzL3ZhbmlhL0RvY3VtZW50cy9rb250b3JhL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanMiLCIvVXNlcnMvdmFuaWEvRG9jdW1lbnRzL2tvbnRvcmEvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwiL1VzZXJzL3ZhbmlhL0RvY3VtZW50cy9rb250b3JhL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2bENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5yZXF1aXJlKCcuL2xpYi91aScpO1xuXG5yZXF1aXJlKCcuL3BhcnRzL2dyaWQnKTtcbnJlcXVpcmUoJy4vcGFydHMvaW5uZXInKTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIrN1pKcDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9mYWtlXzFiZTg2MTg2LmpzXCIsXCIvXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyohIGpRdWVyeSBVSSAtIHYxLjEwLjQgLSAyMDE0LTA2LTA2XG4qIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiogSW5jbHVkZXM6IGpxdWVyeS51aS5jb3JlLmpzLCBqcXVlcnkudWkud2lkZ2V0LmpzLCBqcXVlcnkudWkubW91c2UuanMsIGpxdWVyeS51aS5kcmFnZ2FibGUuanNcbiogQ29weXJpZ2h0IDIwMTQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yczsgTGljZW5zZWQgTUlUICovXG5cbihmdW5jdGlvbihlLHQpe2Z1bmN0aW9uIGkodCxpKXt2YXIgcyxhLG8scj10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJhcmVhXCI9PT1yPyhzPXQucGFyZW50Tm9kZSxhPXMubmFtZSx0LmhyZWYmJmEmJlwibWFwXCI9PT1zLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk/KG89ZShcImltZ1t1c2VtYXA9I1wiK2ErXCJdXCIpWzBdLCEhbyYmbihvKSk6ITEpOigvaW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbnxvYmplY3QvLnRlc3Qocik/IXQuZGlzYWJsZWQ6XCJhXCI9PT1yP3QuaHJlZnx8aTppKSYmbih0KX1mdW5jdGlvbiBuKHQpe3JldHVybiBlLmV4cHIuZmlsdGVycy52aXNpYmxlKHQpJiYhZSh0KS5wYXJlbnRzKCkuYWRkQmFjaygpLmZpbHRlcihmdW5jdGlvbigpe3JldHVyblwiaGlkZGVuXCI9PT1lLmNzcyh0aGlzLFwidmlzaWJpbGl0eVwiKX0pLmxlbmd0aH12YXIgcz0wLGE9L151aS1pZC1cXGQrJC87ZS51aT1lLnVpfHx7fSxlLmV4dGVuZChlLnVpLHt2ZXJzaW9uOlwiMS4xMC40XCIsa2V5Q29kZTp7QkFDS1NQQUNFOjgsQ09NTUE6MTg4LERFTEVURTo0NixET1dOOjQwLEVORDozNSxFTlRFUjoxMyxFU0NBUEU6MjcsSE9NRTozNixMRUZUOjM3LE5VTVBBRF9BREQ6MTA3LE5VTVBBRF9ERUNJTUFMOjExMCxOVU1QQURfRElWSURFOjExMSxOVU1QQURfRU5URVI6MTA4LE5VTVBBRF9NVUxUSVBMWToxMDYsTlVNUEFEX1NVQlRSQUNUOjEwOSxQQUdFX0RPV046MzQsUEFHRV9VUDozMyxQRVJJT0Q6MTkwLFJJR0hUOjM5LFNQQUNFOjMyLFRBQjo5LFVQOjM4fX0pLGUuZm4uZXh0ZW5kKHtmb2N1czpmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oaSxuKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgaT90aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD10aGlzO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtlKHQpLmZvY3VzKCksbiYmbi5jYWxsKHQpfSxpKX0pOnQuYXBwbHkodGhpcyxhcmd1bWVudHMpfX0oZS5mbi5mb2N1cyksc2Nyb2xsUGFyZW50OmZ1bmN0aW9uKCl7dmFyIHQ7cmV0dXJuIHQ9ZS51aS5pZSYmLyhzdGF0aWN8cmVsYXRpdmUpLy50ZXN0KHRoaXMuY3NzKFwicG9zaXRpb25cIikpfHwvYWJzb2x1dGUvLnRlc3QodGhpcy5jc3MoXCJwb3NpdGlvblwiKSk/dGhpcy5wYXJlbnRzKCkuZmlsdGVyKGZ1bmN0aW9uKCl7cmV0dXJuLyhyZWxhdGl2ZXxhYnNvbHV0ZXxmaXhlZCkvLnRlc3QoZS5jc3ModGhpcyxcInBvc2l0aW9uXCIpKSYmLyhhdXRvfHNjcm9sbCkvLnRlc3QoZS5jc3ModGhpcyxcIm92ZXJmbG93XCIpK2UuY3NzKHRoaXMsXCJvdmVyZmxvdy15XCIpK2UuY3NzKHRoaXMsXCJvdmVyZmxvdy14XCIpKX0pLmVxKDApOnRoaXMucGFyZW50cygpLmZpbHRlcihmdW5jdGlvbigpe3JldHVybi8oYXV0b3xzY3JvbGwpLy50ZXN0KGUuY3NzKHRoaXMsXCJvdmVyZmxvd1wiKStlLmNzcyh0aGlzLFwib3ZlcmZsb3cteVwiKStlLmNzcyh0aGlzLFwib3ZlcmZsb3cteFwiKSl9KS5lcSgwKSwvZml4ZWQvLnRlc3QodGhpcy5jc3MoXCJwb3NpdGlvblwiKSl8fCF0Lmxlbmd0aD9lKGRvY3VtZW50KTp0fSx6SW5kZXg6ZnVuY3Rpb24oaSl7aWYoaSE9PXQpcmV0dXJuIHRoaXMuY3NzKFwiekluZGV4XCIsaSk7aWYodGhpcy5sZW5ndGgpZm9yKHZhciBuLHMsYT1lKHRoaXNbMF0pO2EubGVuZ3RoJiZhWzBdIT09ZG9jdW1lbnQ7KXtpZihuPWEuY3NzKFwicG9zaXRpb25cIiksKFwiYWJzb2x1dGVcIj09PW58fFwicmVsYXRpdmVcIj09PW58fFwiZml4ZWRcIj09PW4pJiYocz1wYXJzZUludChhLmNzcyhcInpJbmRleFwiKSwxMCksIWlzTmFOKHMpJiYwIT09cykpcmV0dXJuIHM7YT1hLnBhcmVudCgpfXJldHVybiAwfSx1bmlxdWVJZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt0aGlzLmlkfHwodGhpcy5pZD1cInVpLWlkLVwiKyArK3MpfSl9LHJlbW92ZVVuaXF1ZUlkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2EudGVzdCh0aGlzLmlkKSYmZSh0aGlzKS5yZW1vdmVBdHRyKFwiaWRcIil9KX19KSxlLmV4dGVuZChlLmV4cHJbXCI6XCJdLHtkYXRhOmUuZXhwci5jcmVhdGVQc2V1ZG8/ZS5leHByLmNyZWF0ZVBzZXVkbyhmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oaSl7cmV0dXJuISFlLmRhdGEoaSx0KX19KTpmdW5jdGlvbih0LGksbil7cmV0dXJuISFlLmRhdGEodCxuWzNdKX0sZm9jdXNhYmxlOmZ1bmN0aW9uKHQpe3JldHVybiBpKHQsIWlzTmFOKGUuYXR0cih0LFwidGFiaW5kZXhcIikpKX0sdGFiYmFibGU6ZnVuY3Rpb24odCl7dmFyIG49ZS5hdHRyKHQsXCJ0YWJpbmRleFwiKSxzPWlzTmFOKG4pO3JldHVybihzfHxuPj0wKSYmaSh0LCFzKX19KSxlKFwiPGE+XCIpLm91dGVyV2lkdGgoMSkuanF1ZXJ5fHxlLmVhY2goW1wiV2lkdGhcIixcIkhlaWdodFwiXSxmdW5jdGlvbihpLG4pe2Z1bmN0aW9uIHModCxpLG4scyl7cmV0dXJuIGUuZWFjaChhLGZ1bmN0aW9uKCl7aS09cGFyc2VGbG9hdChlLmNzcyh0LFwicGFkZGluZ1wiK3RoaXMpKXx8MCxuJiYoaS09cGFyc2VGbG9hdChlLmNzcyh0LFwiYm9yZGVyXCIrdGhpcytcIldpZHRoXCIpKXx8MCkscyYmKGktPXBhcnNlRmxvYXQoZS5jc3ModCxcIm1hcmdpblwiK3RoaXMpKXx8MCl9KSxpfXZhciBhPVwiV2lkdGhcIj09PW4/W1wiTGVmdFwiLFwiUmlnaHRcIl06W1wiVG9wXCIsXCJCb3R0b21cIl0sbz1uLnRvTG93ZXJDYXNlKCkscj17aW5uZXJXaWR0aDplLmZuLmlubmVyV2lkdGgsaW5uZXJIZWlnaHQ6ZS5mbi5pbm5lckhlaWdodCxvdXRlcldpZHRoOmUuZm4ub3V0ZXJXaWR0aCxvdXRlckhlaWdodDplLmZuLm91dGVySGVpZ2h0fTtlLmZuW1wiaW5uZXJcIituXT1mdW5jdGlvbihpKXtyZXR1cm4gaT09PXQ/cltcImlubmVyXCIrbl0uY2FsbCh0aGlzKTp0aGlzLmVhY2goZnVuY3Rpb24oKXtlKHRoaXMpLmNzcyhvLHModGhpcyxpKStcInB4XCIpfSl9LGUuZm5bXCJvdXRlclwiK25dPWZ1bmN0aW9uKHQsaSl7cmV0dXJuXCJudW1iZXJcIiE9dHlwZW9mIHQ/cltcIm91dGVyXCIrbl0uY2FsbCh0aGlzLHQpOnRoaXMuZWFjaChmdW5jdGlvbigpe2UodGhpcykuY3NzKG8scyh0aGlzLHQsITAsaSkrXCJweFwiKX0pfX0pLGUuZm4uYWRkQmFja3x8KGUuZm4uYWRkQmFjaz1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09ZT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihlKSl9KSxlKFwiPGE+XCIpLmRhdGEoXCJhLWJcIixcImFcIikucmVtb3ZlRGF0YShcImEtYlwiKS5kYXRhKFwiYS1iXCIpJiYoZS5mbi5yZW1vdmVEYXRhPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihpKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD90LmNhbGwodGhpcyxlLmNhbWVsQ2FzZShpKSk6dC5jYWxsKHRoaXMpfX0oZS5mbi5yZW1vdmVEYXRhKSksZS51aS5pZT0hIS9tc2llIFtcXHcuXSsvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKSxlLnN1cHBvcnQuc2VsZWN0c3RhcnQ9XCJvbnNlbGVjdHN0YXJ0XCJpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGUuZm4uZXh0ZW5kKHtkaXNhYmxlU2VsZWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYmluZCgoZS5zdXBwb3J0LnNlbGVjdHN0YXJ0P1wic2VsZWN0c3RhcnRcIjpcIm1vdXNlZG93blwiKStcIi51aS1kaXNhYmxlU2VsZWN0aW9uXCIsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpfSl9LGVuYWJsZVNlbGVjdGlvbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnVuYmluZChcIi51aS1kaXNhYmxlU2VsZWN0aW9uXCIpfX0pLGUuZXh0ZW5kKGUudWkse3BsdWdpbjp7YWRkOmZ1bmN0aW9uKHQsaSxuKXt2YXIgcyxhPWUudWlbdF0ucHJvdG90eXBlO2ZvcihzIGluIG4pYS5wbHVnaW5zW3NdPWEucGx1Z2luc1tzXXx8W10sYS5wbHVnaW5zW3NdLnB1c2goW2ksbltzXV0pfSxjYWxsOmZ1bmN0aW9uKGUsdCxpKXt2YXIgbixzPWUucGx1Z2luc1t0XTtpZihzJiZlLmVsZW1lbnRbMF0ucGFyZW50Tm9kZSYmMTEhPT1lLmVsZW1lbnRbMF0ucGFyZW50Tm9kZS5ub2RlVHlwZSlmb3Iobj0wO3MubGVuZ3RoPm47bisrKWUub3B0aW9uc1tzW25dWzBdXSYmc1tuXVsxXS5hcHBseShlLmVsZW1lbnQsaSl9fSxoYXNTY3JvbGw6ZnVuY3Rpb24odCxpKXtpZihcImhpZGRlblwiPT09ZSh0KS5jc3MoXCJvdmVyZmxvd1wiKSlyZXR1cm4hMTt2YXIgbj1pJiZcImxlZnRcIj09PWk/XCJzY3JvbGxMZWZ0XCI6XCJzY3JvbGxUb3BcIixzPSExO3JldHVybiB0W25dPjA/ITA6KHRbbl09MSxzPXRbbl0+MCx0W25dPTAscyl9fSl9KShqUXVlcnkpOyhmdW5jdGlvbih0LGUpe3ZhciBpPTAscz1BcnJheS5wcm90b3R5cGUuc2xpY2Usbj10LmNsZWFuRGF0YTt0LmNsZWFuRGF0YT1mdW5jdGlvbihlKXtmb3IodmFyIGkscz0wO251bGwhPShpPWVbc10pO3MrKyl0cnl7dChpKS50cmlnZ2VySGFuZGxlcihcInJlbW92ZVwiKX1jYXRjaChvKXt9bihlKX0sdC53aWRnZXQ9ZnVuY3Rpb24oaSxzLG4pe3ZhciBvLGEscixoLGw9e30sYz1pLnNwbGl0KFwiLlwiKVswXTtpPWkuc3BsaXQoXCIuXCIpWzFdLG89YytcIi1cIitpLG58fChuPXMscz10LldpZGdldCksdC5leHByW1wiOlwiXVtvLnRvTG93ZXJDYXNlKCldPWZ1bmN0aW9uKGUpe3JldHVybiEhdC5kYXRhKGUsbyl9LHRbY109dFtjXXx8e30sYT10W2NdW2ldLHI9dFtjXVtpXT1mdW5jdGlvbih0LGkpe3JldHVybiB0aGlzLl9jcmVhdGVXaWRnZXQ/KGFyZ3VtZW50cy5sZW5ndGgmJnRoaXMuX2NyZWF0ZVdpZGdldCh0LGkpLGUpOm5ldyByKHQsaSl9LHQuZXh0ZW5kKHIsYSx7dmVyc2lvbjpuLnZlcnNpb24sX3Byb3RvOnQuZXh0ZW5kKHt9LG4pLF9jaGlsZENvbnN0cnVjdG9yczpbXX0pLGg9bmV3IHMsaC5vcHRpb25zPXQud2lkZ2V0LmV4dGVuZCh7fSxoLm9wdGlvbnMpLHQuZWFjaChuLGZ1bmN0aW9uKGksbil7cmV0dXJuIHQuaXNGdW5jdGlvbihuKT8obFtpXT1mdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKCl7cmV0dXJuIHMucHJvdG90eXBlW2ldLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZT1mdW5jdGlvbih0KXtyZXR1cm4gcy5wcm90b3R5cGVbaV0uYXBwbHkodGhpcyx0KX07cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGkscz10aGlzLl9zdXBlcixvPXRoaXMuX3N1cGVyQXBwbHk7cmV0dXJuIHRoaXMuX3N1cGVyPXQsdGhpcy5fc3VwZXJBcHBseT1lLGk9bi5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5fc3VwZXI9cyx0aGlzLl9zdXBlckFwcGx5PW8saX19KCksZSk6KGxbaV09bixlKX0pLHIucHJvdG90eXBlPXQud2lkZ2V0LmV4dGVuZChoLHt3aWRnZXRFdmVudFByZWZpeDphP2gud2lkZ2V0RXZlbnRQcmVmaXh8fGk6aX0sbCx7Y29uc3RydWN0b3I6cixuYW1lc3BhY2U6Yyx3aWRnZXROYW1lOmksd2lkZ2V0RnVsbE5hbWU6b30pLGE/KHQuZWFjaChhLl9jaGlsZENvbnN0cnVjdG9ycyxmdW5jdGlvbihlLGkpe3ZhciBzPWkucHJvdG90eXBlO3Qud2lkZ2V0KHMubmFtZXNwYWNlK1wiLlwiK3Mud2lkZ2V0TmFtZSxyLGkuX3Byb3RvKX0pLGRlbGV0ZSBhLl9jaGlsZENvbnN0cnVjdG9ycyk6cy5fY2hpbGRDb25zdHJ1Y3RvcnMucHVzaChyKSx0LndpZGdldC5icmlkZ2UoaSxyKX0sdC53aWRnZXQuZXh0ZW5kPWZ1bmN0aW9uKGkpe2Zvcih2YXIgbixvLGE9cy5jYWxsKGFyZ3VtZW50cywxKSxyPTAsaD1hLmxlbmd0aDtoPnI7cisrKWZvcihuIGluIGFbcl0pbz1hW3JdW25dLGFbcl0uaGFzT3duUHJvcGVydHkobikmJm8hPT1lJiYoaVtuXT10LmlzUGxhaW5PYmplY3Qobyk/dC5pc1BsYWluT2JqZWN0KGlbbl0pP3Qud2lkZ2V0LmV4dGVuZCh7fSxpW25dLG8pOnQud2lkZ2V0LmV4dGVuZCh7fSxvKTpvKTtyZXR1cm4gaX0sdC53aWRnZXQuYnJpZGdlPWZ1bmN0aW9uKGksbil7dmFyIG89bi5wcm90b3R5cGUud2lkZ2V0RnVsbE5hbWV8fGk7dC5mbltpXT1mdW5jdGlvbihhKXt2YXIgcj1cInN0cmluZ1wiPT10eXBlb2YgYSxoPXMuY2FsbChhcmd1bWVudHMsMSksbD10aGlzO3JldHVybiBhPSFyJiZoLmxlbmd0aD90LndpZGdldC5leHRlbmQuYXBwbHkobnVsbCxbYV0uY29uY2F0KGgpKTphLHI/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHMsbj10LmRhdGEodGhpcyxvKTtyZXR1cm4gbj90LmlzRnVuY3Rpb24oblthXSkmJlwiX1wiIT09YS5jaGFyQXQoMCk/KHM9blthXS5hcHBseShuLGgpLHMhPT1uJiZzIT09ZT8obD1zJiZzLmpxdWVyeT9sLnB1c2hTdGFjayhzLmdldCgpKTpzLCExKTplKTp0LmVycm9yKFwibm8gc3VjaCBtZXRob2QgJ1wiK2ErXCInIGZvciBcIitpK1wiIHdpZGdldCBpbnN0YW5jZVwiKTp0LmVycm9yKFwiY2Fubm90IGNhbGwgbWV0aG9kcyBvbiBcIitpK1wiIHByaW9yIHRvIGluaXRpYWxpemF0aW9uOyBcIitcImF0dGVtcHRlZCB0byBjYWxsIG1ldGhvZCAnXCIrYStcIidcIil9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT10LmRhdGEodGhpcyxvKTtlP2Uub3B0aW9uKGF8fHt9KS5faW5pdCgpOnQuZGF0YSh0aGlzLG8sbmV3IG4oYSx0aGlzKSl9KSxsfX0sdC5XaWRnZXQ9ZnVuY3Rpb24oKXt9LHQuV2lkZ2V0Ll9jaGlsZENvbnN0cnVjdG9ycz1bXSx0LldpZGdldC5wcm90b3R5cGU9e3dpZGdldE5hbWU6XCJ3aWRnZXRcIix3aWRnZXRFdmVudFByZWZpeDpcIlwiLGRlZmF1bHRFbGVtZW50OlwiPGRpdj5cIixvcHRpb25zOntkaXNhYmxlZDohMSxjcmVhdGU6bnVsbH0sX2NyZWF0ZVdpZGdldDpmdW5jdGlvbihlLHMpe3M9dChzfHx0aGlzLmRlZmF1bHRFbGVtZW50fHx0aGlzKVswXSx0aGlzLmVsZW1lbnQ9dChzKSx0aGlzLnV1aWQ9aSsrLHRoaXMuZXZlbnROYW1lc3BhY2U9XCIuXCIrdGhpcy53aWRnZXROYW1lK3RoaXMudXVpZCx0aGlzLm9wdGlvbnM9dC53aWRnZXQuZXh0ZW5kKHt9LHRoaXMub3B0aW9ucyx0aGlzLl9nZXRDcmVhdGVPcHRpb25zKCksZSksdGhpcy5iaW5kaW5ncz10KCksdGhpcy5ob3ZlcmFibGU9dCgpLHRoaXMuZm9jdXNhYmxlPXQoKSxzIT09dGhpcyYmKHQuZGF0YShzLHRoaXMud2lkZ2V0RnVsbE5hbWUsdGhpcyksdGhpcy5fb24oITAsdGhpcy5lbGVtZW50LHtyZW1vdmU6ZnVuY3Rpb24odCl7dC50YXJnZXQ9PT1zJiZ0aGlzLmRlc3Ryb3koKX19KSx0aGlzLmRvY3VtZW50PXQocy5zdHlsZT9zLm93bmVyRG9jdW1lbnQ6cy5kb2N1bWVudHx8cyksdGhpcy53aW5kb3c9dCh0aGlzLmRvY3VtZW50WzBdLmRlZmF1bHRWaWV3fHx0aGlzLmRvY3VtZW50WzBdLnBhcmVudFdpbmRvdykpLHRoaXMuX2NyZWF0ZSgpLHRoaXMuX3RyaWdnZXIoXCJjcmVhdGVcIixudWxsLHRoaXMuX2dldENyZWF0ZUV2ZW50RGF0YSgpKSx0aGlzLl9pbml0KCl9LF9nZXRDcmVhdGVPcHRpb25zOnQubm9vcCxfZ2V0Q3JlYXRlRXZlbnREYXRhOnQubm9vcCxfY3JlYXRlOnQubm9vcCxfaW5pdDp0Lm5vb3AsZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuX2Rlc3Ryb3koKSx0aGlzLmVsZW1lbnQudW5iaW5kKHRoaXMuZXZlbnROYW1lc3BhY2UpLnJlbW92ZURhdGEodGhpcy53aWRnZXROYW1lKS5yZW1vdmVEYXRhKHRoaXMud2lkZ2V0RnVsbE5hbWUpLnJlbW92ZURhdGEodC5jYW1lbENhc2UodGhpcy53aWRnZXRGdWxsTmFtZSkpLHRoaXMud2lkZ2V0KCkudW5iaW5kKHRoaXMuZXZlbnROYW1lc3BhY2UpLnJlbW92ZUF0dHIoXCJhcmlhLWRpc2FibGVkXCIpLnJlbW92ZUNsYXNzKHRoaXMud2lkZ2V0RnVsbE5hbWUrXCItZGlzYWJsZWQgXCIrXCJ1aS1zdGF0ZS1kaXNhYmxlZFwiKSx0aGlzLmJpbmRpbmdzLnVuYmluZCh0aGlzLmV2ZW50TmFtZXNwYWNlKSx0aGlzLmhvdmVyYWJsZS5yZW1vdmVDbGFzcyhcInVpLXN0YXRlLWhvdmVyXCIpLHRoaXMuZm9jdXNhYmxlLnJlbW92ZUNsYXNzKFwidWktc3RhdGUtZm9jdXNcIil9LF9kZXN0cm95OnQubm9vcCx3aWRnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbGVtZW50fSxvcHRpb246ZnVuY3Rpb24oaSxzKXt2YXIgbixvLGEscj1pO2lmKDA9PT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiB0LndpZGdldC5leHRlbmQoe30sdGhpcy5vcHRpb25zKTtpZihcInN0cmluZ1wiPT10eXBlb2YgaSlpZihyPXt9LG49aS5zcGxpdChcIi5cIiksaT1uLnNoaWZ0KCksbi5sZW5ndGgpe2ZvcihvPXJbaV09dC53aWRnZXQuZXh0ZW5kKHt9LHRoaXMub3B0aW9uc1tpXSksYT0wO24ubGVuZ3RoLTE+YTthKyspb1tuW2FdXT1vW25bYV1dfHx7fSxvPW9bblthXV07aWYoaT1uLnBvcCgpLDE9PT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiBvW2ldPT09ZT9udWxsOm9baV07b1tpXT1zfWVsc2V7aWYoMT09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMub3B0aW9uc1tpXT09PWU/bnVsbDp0aGlzLm9wdGlvbnNbaV07cltpXT1zfXJldHVybiB0aGlzLl9zZXRPcHRpb25zKHIpLHRoaXN9LF9zZXRPcHRpb25zOmZ1bmN0aW9uKHQpe3ZhciBlO2ZvcihlIGluIHQpdGhpcy5fc2V0T3B0aW9uKGUsdFtlXSk7cmV0dXJuIHRoaXN9LF9zZXRPcHRpb246ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5vcHRpb25zW3RdPWUsXCJkaXNhYmxlZFwiPT09dCYmKHRoaXMud2lkZ2V0KCkudG9nZ2xlQ2xhc3ModGhpcy53aWRnZXRGdWxsTmFtZStcIi1kaXNhYmxlZCB1aS1zdGF0ZS1kaXNhYmxlZFwiLCEhZSkuYXR0cihcImFyaWEtZGlzYWJsZWRcIixlKSx0aGlzLmhvdmVyYWJsZS5yZW1vdmVDbGFzcyhcInVpLXN0YXRlLWhvdmVyXCIpLHRoaXMuZm9jdXNhYmxlLnJlbW92ZUNsYXNzKFwidWktc3RhdGUtZm9jdXNcIikpLHRoaXN9LGVuYWJsZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9zZXRPcHRpb24oXCJkaXNhYmxlZFwiLCExKX0sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9zZXRPcHRpb24oXCJkaXNhYmxlZFwiLCEwKX0sX29uOmZ1bmN0aW9uKGkscyxuKXt2YXIgbyxhPXRoaXM7XCJib29sZWFuXCIhPXR5cGVvZiBpJiYobj1zLHM9aSxpPSExKSxuPyhzPW89dChzKSx0aGlzLmJpbmRpbmdzPXRoaXMuYmluZGluZ3MuYWRkKHMpKToobj1zLHM9dGhpcy5lbGVtZW50LG89dGhpcy53aWRnZXQoKSksdC5lYWNoKG4sZnVuY3Rpb24obixyKXtmdW5jdGlvbiBoKCl7cmV0dXJuIGl8fGEub3B0aW9ucy5kaXNhYmxlZCE9PSEwJiYhdCh0aGlzKS5oYXNDbGFzcyhcInVpLXN0YXRlLWRpc2FibGVkXCIpPyhcInN0cmluZ1wiPT10eXBlb2Ygcj9hW3JdOnIpLmFwcGx5KGEsYXJndW1lbnRzKTplfVwic3RyaW5nXCIhPXR5cGVvZiByJiYoaC5ndWlkPXIuZ3VpZD1yLmd1aWR8fGguZ3VpZHx8dC5ndWlkKyspO3ZhciBsPW4ubWF0Y2goL14oXFx3KylcXHMqKC4qKSQvKSxjPWxbMV0rYS5ldmVudE5hbWVzcGFjZSx1PWxbMl07dT9vLmRlbGVnYXRlKHUsYyxoKTpzLmJpbmQoYyxoKX0pfSxfb2ZmOmZ1bmN0aW9uKHQsZSl7ZT0oZXx8XCJcIikuc3BsaXQoXCIgXCIpLmpvaW4odGhpcy5ldmVudE5hbWVzcGFjZStcIiBcIikrdGhpcy5ldmVudE5hbWVzcGFjZSx0LnVuYmluZChlKS51bmRlbGVnYXRlKGUpfSxfZGVsYXk6ZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBpKCl7cmV0dXJuKFwic3RyaW5nXCI9PXR5cGVvZiB0P3NbdF06dCkuYXBwbHkocyxhcmd1bWVudHMpfXZhciBzPXRoaXM7cmV0dXJuIHNldFRpbWVvdXQoaSxlfHwwKX0sX2hvdmVyYWJsZTpmdW5jdGlvbihlKXt0aGlzLmhvdmVyYWJsZT10aGlzLmhvdmVyYWJsZS5hZGQoZSksdGhpcy5fb24oZSx7bW91c2VlbnRlcjpmdW5jdGlvbihlKXt0KGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoXCJ1aS1zdGF0ZS1ob3ZlclwiKX0sbW91c2VsZWF2ZTpmdW5jdGlvbihlKXt0KGUuY3VycmVudFRhcmdldCkucmVtb3ZlQ2xhc3MoXCJ1aS1zdGF0ZS1ob3ZlclwiKX19KX0sX2ZvY3VzYWJsZTpmdW5jdGlvbihlKXt0aGlzLmZvY3VzYWJsZT10aGlzLmZvY3VzYWJsZS5hZGQoZSksdGhpcy5fb24oZSx7Zm9jdXNpbjpmdW5jdGlvbihlKXt0KGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoXCJ1aS1zdGF0ZS1mb2N1c1wiKX0sZm9jdXNvdXQ6ZnVuY3Rpb24oZSl7dChlLmN1cnJlbnRUYXJnZXQpLnJlbW92ZUNsYXNzKFwidWktc3RhdGUtZm9jdXNcIil9fSl9LF90cmlnZ2VyOmZ1bmN0aW9uKGUsaSxzKXt2YXIgbixvLGE9dGhpcy5vcHRpb25zW2VdO2lmKHM9c3x8e30saT10LkV2ZW50KGkpLGkudHlwZT0oZT09PXRoaXMud2lkZ2V0RXZlbnRQcmVmaXg/ZTp0aGlzLndpZGdldEV2ZW50UHJlZml4K2UpLnRvTG93ZXJDYXNlKCksaS50YXJnZXQ9dGhpcy5lbGVtZW50WzBdLG89aS5vcmlnaW5hbEV2ZW50KWZvcihuIGluIG8pbiBpbiBpfHwoaVtuXT1vW25dKTtyZXR1cm4gdGhpcy5lbGVtZW50LnRyaWdnZXIoaSxzKSwhKHQuaXNGdW5jdGlvbihhKSYmYS5hcHBseSh0aGlzLmVsZW1lbnRbMF0sW2ldLmNvbmNhdChzKSk9PT0hMXx8aS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl9fSx0LmVhY2goe3Nob3c6XCJmYWRlSW5cIixoaWRlOlwiZmFkZU91dFwifSxmdW5jdGlvbihlLGkpe3QuV2lkZ2V0LnByb3RvdHlwZVtcIl9cIitlXT1mdW5jdGlvbihzLG4sbyl7XCJzdHJpbmdcIj09dHlwZW9mIG4mJihuPXtlZmZlY3Q6bn0pO3ZhciBhLHI9bj9uPT09ITB8fFwibnVtYmVyXCI9PXR5cGVvZiBuP2k6bi5lZmZlY3R8fGk6ZTtuPW58fHt9LFwibnVtYmVyXCI9PXR5cGVvZiBuJiYobj17ZHVyYXRpb246bn0pLGE9IXQuaXNFbXB0eU9iamVjdChuKSxuLmNvbXBsZXRlPW8sbi5kZWxheSYmcy5kZWxheShuLmRlbGF5KSxhJiZ0LmVmZmVjdHMmJnQuZWZmZWN0cy5lZmZlY3Rbcl0/c1tlXShuKTpyIT09ZSYmc1tyXT9zW3JdKG4uZHVyYXRpb24sbi5lYXNpbmcsbyk6cy5xdWV1ZShmdW5jdGlvbihpKXt0KHRoaXMpW2VdKCksbyYmby5jYWxsKHNbMF0pLGkoKX0pfX0pfSkoalF1ZXJ5KTsoZnVuY3Rpb24odCl7dmFyIGU9ITE7dChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbigpe2U9ITF9KSx0LndpZGdldChcInVpLm1vdXNlXCIse3ZlcnNpb246XCIxLjEwLjRcIixvcHRpb25zOntjYW5jZWw6XCJpbnB1dCx0ZXh0YXJlYSxidXR0b24sc2VsZWN0LG9wdGlvblwiLGRpc3RhbmNlOjEsZGVsYXk6MH0sX21vdXNlSW5pdDpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5lbGVtZW50LmJpbmQoXCJtb3VzZWRvd24uXCIrdGhpcy53aWRnZXROYW1lLGZ1bmN0aW9uKHQpe3JldHVybiBlLl9tb3VzZURvd24odCl9KS5iaW5kKFwiY2xpY2suXCIrdGhpcy53aWRnZXROYW1lLGZ1bmN0aW9uKGkpe3JldHVybiEwPT09dC5kYXRhKGkudGFyZ2V0LGUud2lkZ2V0TmFtZStcIi5wcmV2ZW50Q2xpY2tFdmVudFwiKT8odC5yZW1vdmVEYXRhKGkudGFyZ2V0LGUud2lkZ2V0TmFtZStcIi5wcmV2ZW50Q2xpY2tFdmVudFwiKSxpLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLCExKTp1bmRlZmluZWR9KSx0aGlzLnN0YXJ0ZWQ9ITF9LF9tb3VzZURlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQudW5iaW5kKFwiLlwiK3RoaXMud2lkZ2V0TmFtZSksdGhpcy5fbW91c2VNb3ZlRGVsZWdhdGUmJnQoZG9jdW1lbnQpLnVuYmluZChcIm1vdXNlbW92ZS5cIit0aGlzLndpZGdldE5hbWUsdGhpcy5fbW91c2VNb3ZlRGVsZWdhdGUpLnVuYmluZChcIm1vdXNldXAuXCIrdGhpcy53aWRnZXROYW1lLHRoaXMuX21vdXNlVXBEZWxlZ2F0ZSl9LF9tb3VzZURvd246ZnVuY3Rpb24oaSl7aWYoIWUpe3RoaXMuX21vdXNlU3RhcnRlZCYmdGhpcy5fbW91c2VVcChpKSx0aGlzLl9tb3VzZURvd25FdmVudD1pO3ZhciBzPXRoaXMsbj0xPT09aS53aGljaCxhPVwic3RyaW5nXCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMuY2FuY2VsJiZpLnRhcmdldC5ub2RlTmFtZT90KGkudGFyZ2V0KS5jbG9zZXN0KHRoaXMub3B0aW9ucy5jYW5jZWwpLmxlbmd0aDohMTtyZXR1cm4gbiYmIWEmJnRoaXMuX21vdXNlQ2FwdHVyZShpKT8odGhpcy5tb3VzZURlbGF5TWV0PSF0aGlzLm9wdGlvbnMuZGVsYXksdGhpcy5tb3VzZURlbGF5TWV0fHwodGhpcy5fbW91c2VEZWxheVRpbWVyPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtzLm1vdXNlRGVsYXlNZXQ9ITB9LHRoaXMub3B0aW9ucy5kZWxheSkpLHRoaXMuX21vdXNlRGlzdGFuY2VNZXQoaSkmJnRoaXMuX21vdXNlRGVsYXlNZXQoaSkmJih0aGlzLl9tb3VzZVN0YXJ0ZWQ9dGhpcy5fbW91c2VTdGFydChpKSE9PSExLCF0aGlzLl9tb3VzZVN0YXJ0ZWQpPyhpLnByZXZlbnREZWZhdWx0KCksITApOighMD09PXQuZGF0YShpLnRhcmdldCx0aGlzLndpZGdldE5hbWUrXCIucHJldmVudENsaWNrRXZlbnRcIikmJnQucmVtb3ZlRGF0YShpLnRhcmdldCx0aGlzLndpZGdldE5hbWUrXCIucHJldmVudENsaWNrRXZlbnRcIiksdGhpcy5fbW91c2VNb3ZlRGVsZWdhdGU9ZnVuY3Rpb24odCl7cmV0dXJuIHMuX21vdXNlTW92ZSh0KX0sdGhpcy5fbW91c2VVcERlbGVnYXRlPWZ1bmN0aW9uKHQpe3JldHVybiBzLl9tb3VzZVVwKHQpfSx0KGRvY3VtZW50KS5iaW5kKFwibW91c2Vtb3ZlLlwiK3RoaXMud2lkZ2V0TmFtZSx0aGlzLl9tb3VzZU1vdmVEZWxlZ2F0ZSkuYmluZChcIm1vdXNldXAuXCIrdGhpcy53aWRnZXROYW1lLHRoaXMuX21vdXNlVXBEZWxlZ2F0ZSksaS5wcmV2ZW50RGVmYXVsdCgpLGU9ITAsITApKTohMH19LF9tb3VzZU1vdmU6ZnVuY3Rpb24oZSl7cmV0dXJuIHQudWkuaWUmJighZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHw5PmRvY3VtZW50LmRvY3VtZW50TW9kZSkmJiFlLmJ1dHRvbj90aGlzLl9tb3VzZVVwKGUpOnRoaXMuX21vdXNlU3RhcnRlZD8odGhpcy5fbW91c2VEcmFnKGUpLGUucHJldmVudERlZmF1bHQoKSk6KHRoaXMuX21vdXNlRGlzdGFuY2VNZXQoZSkmJnRoaXMuX21vdXNlRGVsYXlNZXQoZSkmJih0aGlzLl9tb3VzZVN0YXJ0ZWQ9dGhpcy5fbW91c2VTdGFydCh0aGlzLl9tb3VzZURvd25FdmVudCxlKSE9PSExLHRoaXMuX21vdXNlU3RhcnRlZD90aGlzLl9tb3VzZURyYWcoZSk6dGhpcy5fbW91c2VVcChlKSksIXRoaXMuX21vdXNlU3RhcnRlZCl9LF9tb3VzZVVwOmZ1bmN0aW9uKGUpe3JldHVybiB0KGRvY3VtZW50KS51bmJpbmQoXCJtb3VzZW1vdmUuXCIrdGhpcy53aWRnZXROYW1lLHRoaXMuX21vdXNlTW92ZURlbGVnYXRlKS51bmJpbmQoXCJtb3VzZXVwLlwiK3RoaXMud2lkZ2V0TmFtZSx0aGlzLl9tb3VzZVVwRGVsZWdhdGUpLHRoaXMuX21vdXNlU3RhcnRlZCYmKHRoaXMuX21vdXNlU3RhcnRlZD0hMSxlLnRhcmdldD09PXRoaXMuX21vdXNlRG93bkV2ZW50LnRhcmdldCYmdC5kYXRhKGUudGFyZ2V0LHRoaXMud2lkZ2V0TmFtZStcIi5wcmV2ZW50Q2xpY2tFdmVudFwiLCEwKSx0aGlzLl9tb3VzZVN0b3AoZSkpLCExfSxfbW91c2VEaXN0YW5jZU1ldDpmdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5tYXgoTWF0aC5hYnModGhpcy5fbW91c2VEb3duRXZlbnQucGFnZVgtdC5wYWdlWCksTWF0aC5hYnModGhpcy5fbW91c2VEb3duRXZlbnQucGFnZVktdC5wYWdlWSkpPj10aGlzLm9wdGlvbnMuZGlzdGFuY2V9LF9tb3VzZURlbGF5TWV0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubW91c2VEZWxheU1ldH0sX21vdXNlU3RhcnQ6ZnVuY3Rpb24oKXt9LF9tb3VzZURyYWc6ZnVuY3Rpb24oKXt9LF9tb3VzZVN0b3A6ZnVuY3Rpb24oKXt9LF9tb3VzZUNhcHR1cmU6ZnVuY3Rpb24oKXtyZXR1cm4hMH19KX0pKGpRdWVyeSk7KGZ1bmN0aW9uKHQpe3Qud2lkZ2V0KFwidWkuZHJhZ2dhYmxlXCIsdC51aS5tb3VzZSx7dmVyc2lvbjpcIjEuMTAuNFwiLHdpZGdldEV2ZW50UHJlZml4OlwiZHJhZ1wiLG9wdGlvbnM6e2FkZENsYXNzZXM6ITAsYXBwZW5kVG86XCJwYXJlbnRcIixheGlzOiExLGNvbm5lY3RUb1NvcnRhYmxlOiExLGNvbnRhaW5tZW50OiExLGN1cnNvcjpcImF1dG9cIixjdXJzb3JBdDohMSxncmlkOiExLGhhbmRsZTohMSxoZWxwZXI6XCJvcmlnaW5hbFwiLGlmcmFtZUZpeDohMSxvcGFjaXR5OiExLHJlZnJlc2hQb3NpdGlvbnM6ITEscmV2ZXJ0OiExLHJldmVydER1cmF0aW9uOjUwMCxzY29wZTpcImRlZmF1bHRcIixzY3JvbGw6ITAsc2Nyb2xsU2Vuc2l0aXZpdHk6MjAsc2Nyb2xsU3BlZWQ6MjAsc25hcDohMSxzbmFwTW9kZTpcImJvdGhcIixzbmFwVG9sZXJhbmNlOjIwLHN0YWNrOiExLHpJbmRleDohMSxkcmFnOm51bGwsc3RhcnQ6bnVsbCxzdG9wOm51bGx9LF9jcmVhdGU6ZnVuY3Rpb24oKXtcIm9yaWdpbmFsXCIhPT10aGlzLm9wdGlvbnMuaGVscGVyfHwvXig/OnJ8YXxmKS8udGVzdCh0aGlzLmVsZW1lbnQuY3NzKFwicG9zaXRpb25cIikpfHwodGhpcy5lbGVtZW50WzBdLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIiksdGhpcy5vcHRpb25zLmFkZENsYXNzZXMmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcInVpLWRyYWdnYWJsZVwiKSx0aGlzLm9wdGlvbnMuZGlzYWJsZWQmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcInVpLWRyYWdnYWJsZS1kaXNhYmxlZFwiKSx0aGlzLl9tb3VzZUluaXQoKX0sX2Rlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJ1aS1kcmFnZ2FibGUgdWktZHJhZ2dhYmxlLWRyYWdnaW5nIHVpLWRyYWdnYWJsZS1kaXNhYmxlZFwiKSx0aGlzLl9tb3VzZURlc3Ryb3koKX0sX21vdXNlQ2FwdHVyZTpmdW5jdGlvbihlKXt2YXIgaT10aGlzLm9wdGlvbnM7cmV0dXJuIHRoaXMuaGVscGVyfHxpLmRpc2FibGVkfHx0KGUudGFyZ2V0KS5jbG9zZXN0KFwiLnVpLXJlc2l6YWJsZS1oYW5kbGVcIikubGVuZ3RoPjA/ITE6KHRoaXMuaGFuZGxlPXRoaXMuX2dldEhhbmRsZShlKSx0aGlzLmhhbmRsZT8odChpLmlmcmFtZUZpeD09PSEwP1wiaWZyYW1lXCI6aS5pZnJhbWVGaXgpLmVhY2goZnVuY3Rpb24oKXt0KFwiPGRpdiBjbGFzcz0ndWktZHJhZ2dhYmxlLWlmcmFtZUZpeCcgc3R5bGU9J2JhY2tncm91bmQ6ICNmZmY7Jz48L2Rpdj5cIikuY3NzKHt3aWR0aDp0aGlzLm9mZnNldFdpZHRoK1wicHhcIixoZWlnaHQ6dGhpcy5vZmZzZXRIZWlnaHQrXCJweFwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIixvcGFjaXR5OlwiMC4wMDFcIix6SW5kZXg6MWUzfSkuY3NzKHQodGhpcykub2Zmc2V0KCkpLmFwcGVuZFRvKFwiYm9keVwiKX0pLCEwKTohMSl9LF9tb3VzZVN0YXJ0OmZ1bmN0aW9uKGUpe3ZhciBpPXRoaXMub3B0aW9ucztyZXR1cm4gdGhpcy5oZWxwZXI9dGhpcy5fY3JlYXRlSGVscGVyKGUpLHRoaXMuaGVscGVyLmFkZENsYXNzKFwidWktZHJhZ2dhYmxlLWRyYWdnaW5nXCIpLHRoaXMuX2NhY2hlSGVscGVyUHJvcG9ydGlvbnMoKSx0LnVpLmRkbWFuYWdlciYmKHQudWkuZGRtYW5hZ2VyLmN1cnJlbnQ9dGhpcyksdGhpcy5fY2FjaGVNYXJnaW5zKCksdGhpcy5jc3NQb3NpdGlvbj10aGlzLmhlbHBlci5jc3MoXCJwb3NpdGlvblwiKSx0aGlzLnNjcm9sbFBhcmVudD10aGlzLmhlbHBlci5zY3JvbGxQYXJlbnQoKSx0aGlzLm9mZnNldFBhcmVudD10aGlzLmhlbHBlci5vZmZzZXRQYXJlbnQoKSx0aGlzLm9mZnNldFBhcmVudENzc1Bvc2l0aW9uPXRoaXMub2Zmc2V0UGFyZW50LmNzcyhcInBvc2l0aW9uXCIpLHRoaXMub2Zmc2V0PXRoaXMucG9zaXRpb25BYnM9dGhpcy5lbGVtZW50Lm9mZnNldCgpLHRoaXMub2Zmc2V0PXt0b3A6dGhpcy5vZmZzZXQudG9wLXRoaXMubWFyZ2lucy50b3AsbGVmdDp0aGlzLm9mZnNldC5sZWZ0LXRoaXMubWFyZ2lucy5sZWZ0fSx0aGlzLm9mZnNldC5zY3JvbGw9ITEsdC5leHRlbmQodGhpcy5vZmZzZXQse2NsaWNrOntsZWZ0OmUucGFnZVgtdGhpcy5vZmZzZXQubGVmdCx0b3A6ZS5wYWdlWS10aGlzLm9mZnNldC50b3B9LHBhcmVudDp0aGlzLl9nZXRQYXJlbnRPZmZzZXQoKSxyZWxhdGl2ZTp0aGlzLl9nZXRSZWxhdGl2ZU9mZnNldCgpfSksdGhpcy5vcmlnaW5hbFBvc2l0aW9uPXRoaXMucG9zaXRpb249dGhpcy5fZ2VuZXJhdGVQb3NpdGlvbihlKSx0aGlzLm9yaWdpbmFsUGFnZVg9ZS5wYWdlWCx0aGlzLm9yaWdpbmFsUGFnZVk9ZS5wYWdlWSxpLmN1cnNvckF0JiZ0aGlzLl9hZGp1c3RPZmZzZXRGcm9tSGVscGVyKGkuY3Vyc29yQXQpLHRoaXMuX3NldENvbnRhaW5tZW50KCksdGhpcy5fdHJpZ2dlcihcInN0YXJ0XCIsZSk9PT0hMT8odGhpcy5fY2xlYXIoKSwhMSk6KHRoaXMuX2NhY2hlSGVscGVyUHJvcG9ydGlvbnMoKSx0LnVpLmRkbWFuYWdlciYmIWkuZHJvcEJlaGF2aW91ciYmdC51aS5kZG1hbmFnZXIucHJlcGFyZU9mZnNldHModGhpcyxlKSx0aGlzLl9tb3VzZURyYWcoZSwhMCksdC51aS5kZG1hbmFnZXImJnQudWkuZGRtYW5hZ2VyLmRyYWdTdGFydCh0aGlzLGUpLCEwKX0sX21vdXNlRHJhZzpmdW5jdGlvbihlLGkpe2lmKFwiZml4ZWRcIj09PXRoaXMub2Zmc2V0UGFyZW50Q3NzUG9zaXRpb24mJih0aGlzLm9mZnNldC5wYXJlbnQ9dGhpcy5fZ2V0UGFyZW50T2Zmc2V0KCkpLHRoaXMucG9zaXRpb249dGhpcy5fZ2VuZXJhdGVQb3NpdGlvbihlKSx0aGlzLnBvc2l0aW9uQWJzPXRoaXMuX2NvbnZlcnRQb3NpdGlvblRvKFwiYWJzb2x1dGVcIiksIWkpe3ZhciBzPXRoaXMuX3VpSGFzaCgpO2lmKHRoaXMuX3RyaWdnZXIoXCJkcmFnXCIsZSxzKT09PSExKXJldHVybiB0aGlzLl9tb3VzZVVwKHt9KSwhMTt0aGlzLnBvc2l0aW9uPXMucG9zaXRpb259cmV0dXJuIHRoaXMub3B0aW9ucy5heGlzJiZcInlcIj09PXRoaXMub3B0aW9ucy5heGlzfHwodGhpcy5oZWxwZXJbMF0uc3R5bGUubGVmdD10aGlzLnBvc2l0aW9uLmxlZnQrXCJweFwiKSx0aGlzLm9wdGlvbnMuYXhpcyYmXCJ4XCI9PT10aGlzLm9wdGlvbnMuYXhpc3x8KHRoaXMuaGVscGVyWzBdLnN0eWxlLnRvcD10aGlzLnBvc2l0aW9uLnRvcCtcInB4XCIpLHQudWkuZGRtYW5hZ2VyJiZ0LnVpLmRkbWFuYWdlci5kcmFnKHRoaXMsZSksITF9LF9tb3VzZVN0b3A6ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcyxzPSExO3JldHVybiB0LnVpLmRkbWFuYWdlciYmIXRoaXMub3B0aW9ucy5kcm9wQmVoYXZpb3VyJiYocz10LnVpLmRkbWFuYWdlci5kcm9wKHRoaXMsZSkpLHRoaXMuZHJvcHBlZCYmKHM9dGhpcy5kcm9wcGVkLHRoaXMuZHJvcHBlZD0hMSksXCJvcmlnaW5hbFwiIT09dGhpcy5vcHRpb25zLmhlbHBlcnx8dC5jb250YWlucyh0aGlzLmVsZW1lbnRbMF0ub3duZXJEb2N1bWVudCx0aGlzLmVsZW1lbnRbMF0pPyhcImludmFsaWRcIj09PXRoaXMub3B0aW9ucy5yZXZlcnQmJiFzfHxcInZhbGlkXCI9PT10aGlzLm9wdGlvbnMucmV2ZXJ0JiZzfHx0aGlzLm9wdGlvbnMucmV2ZXJ0PT09ITB8fHQuaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMucmV2ZXJ0KSYmdGhpcy5vcHRpb25zLnJldmVydC5jYWxsKHRoaXMuZWxlbWVudCxzKT90KHRoaXMuaGVscGVyKS5hbmltYXRlKHRoaXMub3JpZ2luYWxQb3NpdGlvbixwYXJzZUludCh0aGlzLm9wdGlvbnMucmV2ZXJ0RHVyYXRpb24sMTApLGZ1bmN0aW9uKCl7aS5fdHJpZ2dlcihcInN0b3BcIixlKSE9PSExJiZpLl9jbGVhcigpfSk6dGhpcy5fdHJpZ2dlcihcInN0b3BcIixlKSE9PSExJiZ0aGlzLl9jbGVhcigpLCExKTohMX0sX21vdXNlVXA6ZnVuY3Rpb24oZSl7cmV0dXJuIHQoXCJkaXYudWktZHJhZ2dhYmxlLWlmcmFtZUZpeFwiKS5lYWNoKGZ1bmN0aW9uKCl7dGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpfSksdC51aS5kZG1hbmFnZXImJnQudWkuZGRtYW5hZ2VyLmRyYWdTdG9wKHRoaXMsZSksdC51aS5tb3VzZS5wcm90b3R5cGUuX21vdXNlVXAuY2FsbCh0aGlzLGUpfSxjYW5jZWw6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5oZWxwZXIuaXMoXCIudWktZHJhZ2dhYmxlLWRyYWdnaW5nXCIpP3RoaXMuX21vdXNlVXAoe30pOnRoaXMuX2NsZWFyKCksdGhpc30sX2dldEhhbmRsZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5vcHRpb25zLmhhbmRsZT8hIXQoZS50YXJnZXQpLmNsb3Nlc3QodGhpcy5lbGVtZW50LmZpbmQodGhpcy5vcHRpb25zLmhhbmRsZSkpLmxlbmd0aDohMH0sX2NyZWF0ZUhlbHBlcjpmdW5jdGlvbihlKXt2YXIgaT10aGlzLm9wdGlvbnMscz10LmlzRnVuY3Rpb24oaS5oZWxwZXIpP3QoaS5oZWxwZXIuYXBwbHkodGhpcy5lbGVtZW50WzBdLFtlXSkpOlwiY2xvbmVcIj09PWkuaGVscGVyP3RoaXMuZWxlbWVudC5jbG9uZSgpLnJlbW92ZUF0dHIoXCJpZFwiKTp0aGlzLmVsZW1lbnQ7cmV0dXJuIHMucGFyZW50cyhcImJvZHlcIikubGVuZ3RofHxzLmFwcGVuZFRvKFwicGFyZW50XCI9PT1pLmFwcGVuZFRvP3RoaXMuZWxlbWVudFswXS5wYXJlbnROb2RlOmkuYXBwZW5kVG8pLHNbMF09PT10aGlzLmVsZW1lbnRbMF18fC8oZml4ZWR8YWJzb2x1dGUpLy50ZXN0KHMuY3NzKFwicG9zaXRpb25cIikpfHxzLmNzcyhcInBvc2l0aW9uXCIsXCJhYnNvbHV0ZVwiKSxzfSxfYWRqdXN0T2Zmc2V0RnJvbUhlbHBlcjpmdW5jdGlvbihlKXtcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9ZS5zcGxpdChcIiBcIikpLHQuaXNBcnJheShlKSYmKGU9e2xlZnQ6K2VbMF0sdG9wOitlWzFdfHwwfSksXCJsZWZ0XCJpbiBlJiYodGhpcy5vZmZzZXQuY2xpY2subGVmdD1lLmxlZnQrdGhpcy5tYXJnaW5zLmxlZnQpLFwicmlnaHRcImluIGUmJih0aGlzLm9mZnNldC5jbGljay5sZWZ0PXRoaXMuaGVscGVyUHJvcG9ydGlvbnMud2lkdGgtZS5yaWdodCt0aGlzLm1hcmdpbnMubGVmdCksXCJ0b3BcImluIGUmJih0aGlzLm9mZnNldC5jbGljay50b3A9ZS50b3ArdGhpcy5tYXJnaW5zLnRvcCksXCJib3R0b21cImluIGUmJih0aGlzLm9mZnNldC5jbGljay50b3A9dGhpcy5oZWxwZXJQcm9wb3J0aW9ucy5oZWlnaHQtZS5ib3R0b20rdGhpcy5tYXJnaW5zLnRvcCl9LF9nZXRQYXJlbnRPZmZzZXQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9mZnNldFBhcmVudC5vZmZzZXQoKTtyZXR1cm5cImFic29sdXRlXCI9PT10aGlzLmNzc1Bvc2l0aW9uJiZ0aGlzLnNjcm9sbFBhcmVudFswXSE9PWRvY3VtZW50JiZ0LmNvbnRhaW5zKHRoaXMuc2Nyb2xsUGFyZW50WzBdLHRoaXMub2Zmc2V0UGFyZW50WzBdKSYmKGUubGVmdCs9dGhpcy5zY3JvbGxQYXJlbnQuc2Nyb2xsTGVmdCgpLGUudG9wKz10aGlzLnNjcm9sbFBhcmVudC5zY3JvbGxUb3AoKSksKHRoaXMub2Zmc2V0UGFyZW50WzBdPT09ZG9jdW1lbnQuYm9keXx8dGhpcy5vZmZzZXRQYXJlbnRbMF0udGFnTmFtZSYmXCJodG1sXCI9PT10aGlzLm9mZnNldFBhcmVudFswXS50YWdOYW1lLnRvTG93ZXJDYXNlKCkmJnQudWkuaWUpJiYoZT17dG9wOjAsbGVmdDowfSkse3RvcDplLnRvcCsocGFyc2VJbnQodGhpcy5vZmZzZXRQYXJlbnQuY3NzKFwiYm9yZGVyVG9wV2lkdGhcIiksMTApfHwwKSxsZWZ0OmUubGVmdCsocGFyc2VJbnQodGhpcy5vZmZzZXRQYXJlbnQuY3NzKFwiYm9yZGVyTGVmdFdpZHRoXCIpLDEwKXx8MCl9fSxfZ2V0UmVsYXRpdmVPZmZzZXQ6ZnVuY3Rpb24oKXtpZihcInJlbGF0aXZlXCI9PT10aGlzLmNzc1Bvc2l0aW9uKXt2YXIgdD10aGlzLmVsZW1lbnQucG9zaXRpb24oKTtyZXR1cm57dG9wOnQudG9wLShwYXJzZUludCh0aGlzLmhlbHBlci5jc3MoXCJ0b3BcIiksMTApfHwwKSt0aGlzLnNjcm9sbFBhcmVudC5zY3JvbGxUb3AoKSxsZWZ0OnQubGVmdC0ocGFyc2VJbnQodGhpcy5oZWxwZXIuY3NzKFwibGVmdFwiKSwxMCl8fDApK3RoaXMuc2Nyb2xsUGFyZW50LnNjcm9sbExlZnQoKX19cmV0dXJue3RvcDowLGxlZnQ6MH19LF9jYWNoZU1hcmdpbnM6ZnVuY3Rpb24oKXt0aGlzLm1hcmdpbnM9e2xlZnQ6cGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1hcmdpbkxlZnRcIiksMTApfHwwLHRvcDpwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWFyZ2luVG9wXCIpLDEwKXx8MCxyaWdodDpwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWFyZ2luUmlnaHRcIiksMTApfHwwLGJvdHRvbTpwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWFyZ2luQm90dG9tXCIpLDEwKXx8MH19LF9jYWNoZUhlbHBlclByb3BvcnRpb25zOmZ1bmN0aW9uKCl7dGhpcy5oZWxwZXJQcm9wb3J0aW9ucz17d2lkdGg6dGhpcy5oZWxwZXIub3V0ZXJXaWR0aCgpLGhlaWdodDp0aGlzLmhlbHBlci5vdXRlckhlaWdodCgpfX0sX3NldENvbnRhaW5tZW50OmZ1bmN0aW9uKCl7dmFyIGUsaSxzLG49dGhpcy5vcHRpb25zO3JldHVybiBuLmNvbnRhaW5tZW50P1wid2luZG93XCI9PT1uLmNvbnRhaW5tZW50Pyh0aGlzLmNvbnRhaW5tZW50PVt0KHdpbmRvdykuc2Nyb2xsTGVmdCgpLXRoaXMub2Zmc2V0LnJlbGF0aXZlLmxlZnQtdGhpcy5vZmZzZXQucGFyZW50LmxlZnQsdCh3aW5kb3cpLnNjcm9sbFRvcCgpLXRoaXMub2Zmc2V0LnJlbGF0aXZlLnRvcC10aGlzLm9mZnNldC5wYXJlbnQudG9wLHQod2luZG93KS5zY3JvbGxMZWZ0KCkrdCh3aW5kb3cpLndpZHRoKCktdGhpcy5oZWxwZXJQcm9wb3J0aW9ucy53aWR0aC10aGlzLm1hcmdpbnMubGVmdCx0KHdpbmRvdykuc2Nyb2xsVG9wKCkrKHQod2luZG93KS5oZWlnaHQoKXx8ZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlLnNjcm9sbEhlaWdodCktdGhpcy5oZWxwZXJQcm9wb3J0aW9ucy5oZWlnaHQtdGhpcy5tYXJnaW5zLnRvcF0sdW5kZWZpbmVkKTpcImRvY3VtZW50XCI9PT1uLmNvbnRhaW5tZW50Pyh0aGlzLmNvbnRhaW5tZW50PVswLDAsdChkb2N1bWVudCkud2lkdGgoKS10aGlzLmhlbHBlclByb3BvcnRpb25zLndpZHRoLXRoaXMubWFyZ2lucy5sZWZ0LCh0KGRvY3VtZW50KS5oZWlnaHQoKXx8ZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlLnNjcm9sbEhlaWdodCktdGhpcy5oZWxwZXJQcm9wb3J0aW9ucy5oZWlnaHQtdGhpcy5tYXJnaW5zLnRvcF0sdW5kZWZpbmVkKTpuLmNvbnRhaW5tZW50LmNvbnN0cnVjdG9yPT09QXJyYXk/KHRoaXMuY29udGFpbm1lbnQ9bi5jb250YWlubWVudCx1bmRlZmluZWQpOihcInBhcmVudFwiPT09bi5jb250YWlubWVudCYmKG4uY29udGFpbm1lbnQ9dGhpcy5oZWxwZXJbMF0ucGFyZW50Tm9kZSksaT10KG4uY29udGFpbm1lbnQpLHM9aVswXSxzJiYoZT1cImhpZGRlblwiIT09aS5jc3MoXCJvdmVyZmxvd1wiKSx0aGlzLmNvbnRhaW5tZW50PVsocGFyc2VJbnQoaS5jc3MoXCJib3JkZXJMZWZ0V2lkdGhcIiksMTApfHwwKSsocGFyc2VJbnQoaS5jc3MoXCJwYWRkaW5nTGVmdFwiKSwxMCl8fDApLChwYXJzZUludChpLmNzcyhcImJvcmRlclRvcFdpZHRoXCIpLDEwKXx8MCkrKHBhcnNlSW50KGkuY3NzKFwicGFkZGluZ1RvcFwiKSwxMCl8fDApLChlP01hdGgubWF4KHMuc2Nyb2xsV2lkdGgscy5vZmZzZXRXaWR0aCk6cy5vZmZzZXRXaWR0aCktKHBhcnNlSW50KGkuY3NzKFwiYm9yZGVyUmlnaHRXaWR0aFwiKSwxMCl8fDApLShwYXJzZUludChpLmNzcyhcInBhZGRpbmdSaWdodFwiKSwxMCl8fDApLXRoaXMuaGVscGVyUHJvcG9ydGlvbnMud2lkdGgtdGhpcy5tYXJnaW5zLmxlZnQtdGhpcy5tYXJnaW5zLnJpZ2h0LChlP01hdGgubWF4KHMuc2Nyb2xsSGVpZ2h0LHMub2Zmc2V0SGVpZ2h0KTpzLm9mZnNldEhlaWdodCktKHBhcnNlSW50KGkuY3NzKFwiYm9yZGVyQm90dG9tV2lkdGhcIiksMTApfHwwKS0ocGFyc2VJbnQoaS5jc3MoXCJwYWRkaW5nQm90dG9tXCIpLDEwKXx8MCktdGhpcy5oZWxwZXJQcm9wb3J0aW9ucy5oZWlnaHQtdGhpcy5tYXJnaW5zLnRvcC10aGlzLm1hcmdpbnMuYm90dG9tXSx0aGlzLnJlbGF0aXZlX2NvbnRhaW5lcj1pKSx1bmRlZmluZWQpOih0aGlzLmNvbnRhaW5tZW50PW51bGwsdW5kZWZpbmVkKX0sX2NvbnZlcnRQb3NpdGlvblRvOmZ1bmN0aW9uKGUsaSl7aXx8KGk9dGhpcy5wb3NpdGlvbik7dmFyIHM9XCJhYnNvbHV0ZVwiPT09ZT8xOi0xLG49XCJhYnNvbHV0ZVwiIT09dGhpcy5jc3NQb3NpdGlvbnx8dGhpcy5zY3JvbGxQYXJlbnRbMF0hPT1kb2N1bWVudCYmdC5jb250YWlucyh0aGlzLnNjcm9sbFBhcmVudFswXSx0aGlzLm9mZnNldFBhcmVudFswXSk/dGhpcy5zY3JvbGxQYXJlbnQ6dGhpcy5vZmZzZXRQYXJlbnQ7cmV0dXJuIHRoaXMub2Zmc2V0LnNjcm9sbHx8KHRoaXMub2Zmc2V0LnNjcm9sbD17dG9wOm4uc2Nyb2xsVG9wKCksbGVmdDpuLnNjcm9sbExlZnQoKX0pLHt0b3A6aS50b3ArdGhpcy5vZmZzZXQucmVsYXRpdmUudG9wKnMrdGhpcy5vZmZzZXQucGFyZW50LnRvcCpzLShcImZpeGVkXCI9PT10aGlzLmNzc1Bvc2l0aW9uPy10aGlzLnNjcm9sbFBhcmVudC5zY3JvbGxUb3AoKTp0aGlzLm9mZnNldC5zY3JvbGwudG9wKSpzLGxlZnQ6aS5sZWZ0K3RoaXMub2Zmc2V0LnJlbGF0aXZlLmxlZnQqcyt0aGlzLm9mZnNldC5wYXJlbnQubGVmdCpzLShcImZpeGVkXCI9PT10aGlzLmNzc1Bvc2l0aW9uPy10aGlzLnNjcm9sbFBhcmVudC5zY3JvbGxMZWZ0KCk6dGhpcy5vZmZzZXQuc2Nyb2xsLmxlZnQpKnN9fSxfZ2VuZXJhdGVQb3NpdGlvbjpmdW5jdGlvbihlKXt2YXIgaSxzLG4sYSxvPXRoaXMub3B0aW9ucyxyPVwiYWJzb2x1dGVcIiE9PXRoaXMuY3NzUG9zaXRpb258fHRoaXMuc2Nyb2xsUGFyZW50WzBdIT09ZG9jdW1lbnQmJnQuY29udGFpbnModGhpcy5zY3JvbGxQYXJlbnRbMF0sdGhpcy5vZmZzZXRQYXJlbnRbMF0pP3RoaXMuc2Nyb2xsUGFyZW50OnRoaXMub2Zmc2V0UGFyZW50LGw9ZS5wYWdlWCxoPWUucGFnZVk7cmV0dXJuIHRoaXMub2Zmc2V0LnNjcm9sbHx8KHRoaXMub2Zmc2V0LnNjcm9sbD17dG9wOnIuc2Nyb2xsVG9wKCksbGVmdDpyLnNjcm9sbExlZnQoKX0pLHRoaXMub3JpZ2luYWxQb3NpdGlvbiYmKHRoaXMuY29udGFpbm1lbnQmJih0aGlzLnJlbGF0aXZlX2NvbnRhaW5lcj8ocz10aGlzLnJlbGF0aXZlX2NvbnRhaW5lci5vZmZzZXQoKSxpPVt0aGlzLmNvbnRhaW5tZW50WzBdK3MubGVmdCx0aGlzLmNvbnRhaW5tZW50WzFdK3MudG9wLHRoaXMuY29udGFpbm1lbnRbMl0rcy5sZWZ0LHRoaXMuY29udGFpbm1lbnRbM10rcy50b3BdKTppPXRoaXMuY29udGFpbm1lbnQsZS5wYWdlWC10aGlzLm9mZnNldC5jbGljay5sZWZ0PGlbMF0mJihsPWlbMF0rdGhpcy5vZmZzZXQuY2xpY2subGVmdCksZS5wYWdlWS10aGlzLm9mZnNldC5jbGljay50b3A8aVsxXSYmKGg9aVsxXSt0aGlzLm9mZnNldC5jbGljay50b3ApLGUucGFnZVgtdGhpcy5vZmZzZXQuY2xpY2subGVmdD5pWzJdJiYobD1pWzJdK3RoaXMub2Zmc2V0LmNsaWNrLmxlZnQpLGUucGFnZVktdGhpcy5vZmZzZXQuY2xpY2sudG9wPmlbM10mJihoPWlbM10rdGhpcy5vZmZzZXQuY2xpY2sudG9wKSksby5ncmlkJiYobj1vLmdyaWRbMV0/dGhpcy5vcmlnaW5hbFBhZ2VZK01hdGgucm91bmQoKGgtdGhpcy5vcmlnaW5hbFBhZ2VZKS9vLmdyaWRbMV0pKm8uZ3JpZFsxXTp0aGlzLm9yaWdpbmFsUGFnZVksaD1pP24tdGhpcy5vZmZzZXQuY2xpY2sudG9wPj1pWzFdfHxuLXRoaXMub2Zmc2V0LmNsaWNrLnRvcD5pWzNdP246bi10aGlzLm9mZnNldC5jbGljay50b3A+PWlbMV0/bi1vLmdyaWRbMV06bitvLmdyaWRbMV06bixhPW8uZ3JpZFswXT90aGlzLm9yaWdpbmFsUGFnZVgrTWF0aC5yb3VuZCgobC10aGlzLm9yaWdpbmFsUGFnZVgpL28uZ3JpZFswXSkqby5ncmlkWzBdOnRoaXMub3JpZ2luYWxQYWdlWCxsPWk/YS10aGlzLm9mZnNldC5jbGljay5sZWZ0Pj1pWzBdfHxhLXRoaXMub2Zmc2V0LmNsaWNrLmxlZnQ+aVsyXT9hOmEtdGhpcy5vZmZzZXQuY2xpY2subGVmdD49aVswXT9hLW8uZ3JpZFswXTphK28uZ3JpZFswXTphKSkse3RvcDpoLXRoaXMub2Zmc2V0LmNsaWNrLnRvcC10aGlzLm9mZnNldC5yZWxhdGl2ZS50b3AtdGhpcy5vZmZzZXQucGFyZW50LnRvcCsoXCJmaXhlZFwiPT09dGhpcy5jc3NQb3NpdGlvbj8tdGhpcy5zY3JvbGxQYXJlbnQuc2Nyb2xsVG9wKCk6dGhpcy5vZmZzZXQuc2Nyb2xsLnRvcCksbGVmdDpsLXRoaXMub2Zmc2V0LmNsaWNrLmxlZnQtdGhpcy5vZmZzZXQucmVsYXRpdmUubGVmdC10aGlzLm9mZnNldC5wYXJlbnQubGVmdCsoXCJmaXhlZFwiPT09dGhpcy5jc3NQb3NpdGlvbj8tdGhpcy5zY3JvbGxQYXJlbnQuc2Nyb2xsTGVmdCgpOnRoaXMub2Zmc2V0LnNjcm9sbC5sZWZ0KX19LF9jbGVhcjpmdW5jdGlvbigpe3RoaXMuaGVscGVyLnJlbW92ZUNsYXNzKFwidWktZHJhZ2dhYmxlLWRyYWdnaW5nXCIpLHRoaXMuaGVscGVyWzBdPT09dGhpcy5lbGVtZW50WzBdfHx0aGlzLmNhbmNlbEhlbHBlclJlbW92YWx8fHRoaXMuaGVscGVyLnJlbW92ZSgpLHRoaXMuaGVscGVyPW51bGwsdGhpcy5jYW5jZWxIZWxwZXJSZW1vdmFsPSExfSxfdHJpZ2dlcjpmdW5jdGlvbihlLGkscyl7cmV0dXJuIHM9c3x8dGhpcy5fdWlIYXNoKCksdC51aS5wbHVnaW4uY2FsbCh0aGlzLGUsW2ksc10pLFwiZHJhZ1wiPT09ZSYmKHRoaXMucG9zaXRpb25BYnM9dGhpcy5fY29udmVydFBvc2l0aW9uVG8oXCJhYnNvbHV0ZVwiKSksdC5XaWRnZXQucHJvdG90eXBlLl90cmlnZ2VyLmNhbGwodGhpcyxlLGkscyl9LHBsdWdpbnM6e30sX3VpSGFzaDpmdW5jdGlvbigpe3JldHVybntoZWxwZXI6dGhpcy5oZWxwZXIscG9zaXRpb246dGhpcy5wb3NpdGlvbixvcmlnaW5hbFBvc2l0aW9uOnRoaXMub3JpZ2luYWxQb3NpdGlvbixvZmZzZXQ6dGhpcy5wb3NpdGlvbkFic319fSksdC51aS5wbHVnaW4uYWRkKFwiZHJhZ2dhYmxlXCIsXCJjb25uZWN0VG9Tb3J0YWJsZVwiLHtzdGFydDpmdW5jdGlvbihlLGkpe3ZhciBzPXQodGhpcykuZGF0YShcInVpLWRyYWdnYWJsZVwiKSxuPXMub3B0aW9ucyxhPXQuZXh0ZW5kKHt9LGkse2l0ZW06cy5lbGVtZW50fSk7cy5zb3J0YWJsZXM9W10sdChuLmNvbm5lY3RUb1NvcnRhYmxlKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGk9dC5kYXRhKHRoaXMsXCJ1aS1zb3J0YWJsZVwiKTtpJiYhaS5vcHRpb25zLmRpc2FibGVkJiYocy5zb3J0YWJsZXMucHVzaCh7aW5zdGFuY2U6aSxzaG91bGRSZXZlcnQ6aS5vcHRpb25zLnJldmVydH0pLGkucmVmcmVzaFBvc2l0aW9ucygpLGkuX3RyaWdnZXIoXCJhY3RpdmF0ZVwiLGUsYSkpfSl9LHN0b3A6ZnVuY3Rpb24oZSxpKXt2YXIgcz10KHRoaXMpLmRhdGEoXCJ1aS1kcmFnZ2FibGVcIiksbj10LmV4dGVuZCh7fSxpLHtpdGVtOnMuZWxlbWVudH0pO3QuZWFjaChzLnNvcnRhYmxlcyxmdW5jdGlvbigpe3RoaXMuaW5zdGFuY2UuaXNPdmVyPyh0aGlzLmluc3RhbmNlLmlzT3Zlcj0wLHMuY2FuY2VsSGVscGVyUmVtb3ZhbD0hMCx0aGlzLmluc3RhbmNlLmNhbmNlbEhlbHBlclJlbW92YWw9ITEsdGhpcy5zaG91bGRSZXZlcnQmJih0aGlzLmluc3RhbmNlLm9wdGlvbnMucmV2ZXJ0PXRoaXMuc2hvdWxkUmV2ZXJ0KSx0aGlzLmluc3RhbmNlLl9tb3VzZVN0b3AoZSksdGhpcy5pbnN0YW5jZS5vcHRpb25zLmhlbHBlcj10aGlzLmluc3RhbmNlLm9wdGlvbnMuX2hlbHBlcixcIm9yaWdpbmFsXCI9PT1zLm9wdGlvbnMuaGVscGVyJiZ0aGlzLmluc3RhbmNlLmN1cnJlbnRJdGVtLmNzcyh7dG9wOlwiYXV0b1wiLGxlZnQ6XCJhdXRvXCJ9KSk6KHRoaXMuaW5zdGFuY2UuY2FuY2VsSGVscGVyUmVtb3ZhbD0hMSx0aGlzLmluc3RhbmNlLl90cmlnZ2VyKFwiZGVhY3RpdmF0ZVwiLGUsbikpfSl9LGRyYWc6ZnVuY3Rpb24oZSxpKXt2YXIgcz10KHRoaXMpLmRhdGEoXCJ1aS1kcmFnZ2FibGVcIiksbj10aGlzO3QuZWFjaChzLnNvcnRhYmxlcyxmdW5jdGlvbigpe3ZhciBhPSExLG89dGhpczt0aGlzLmluc3RhbmNlLnBvc2l0aW9uQWJzPXMucG9zaXRpb25BYnMsdGhpcy5pbnN0YW5jZS5oZWxwZXJQcm9wb3J0aW9ucz1zLmhlbHBlclByb3BvcnRpb25zLHRoaXMuaW5zdGFuY2Uub2Zmc2V0LmNsaWNrPXMub2Zmc2V0LmNsaWNrLHRoaXMuaW5zdGFuY2UuX2ludGVyc2VjdHNXaXRoKHRoaXMuaW5zdGFuY2UuY29udGFpbmVyQ2FjaGUpJiYoYT0hMCx0LmVhY2gocy5zb3J0YWJsZXMsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbnN0YW5jZS5wb3NpdGlvbkFicz1zLnBvc2l0aW9uQWJzLHRoaXMuaW5zdGFuY2UuaGVscGVyUHJvcG9ydGlvbnM9cy5oZWxwZXJQcm9wb3J0aW9ucyx0aGlzLmluc3RhbmNlLm9mZnNldC5jbGljaz1zLm9mZnNldC5jbGljayx0aGlzIT09byYmdGhpcy5pbnN0YW5jZS5faW50ZXJzZWN0c1dpdGgodGhpcy5pbnN0YW5jZS5jb250YWluZXJDYWNoZSkmJnQuY29udGFpbnMoby5pbnN0YW5jZS5lbGVtZW50WzBdLHRoaXMuaW5zdGFuY2UuZWxlbWVudFswXSkmJihhPSExKSxhfSkpLGE/KHRoaXMuaW5zdGFuY2UuaXNPdmVyfHwodGhpcy5pbnN0YW5jZS5pc092ZXI9MSx0aGlzLmluc3RhbmNlLmN1cnJlbnRJdGVtPXQobikuY2xvbmUoKS5yZW1vdmVBdHRyKFwiaWRcIikuYXBwZW5kVG8odGhpcy5pbnN0YW5jZS5lbGVtZW50KS5kYXRhKFwidWktc29ydGFibGUtaXRlbVwiLCEwKSx0aGlzLmluc3RhbmNlLm9wdGlvbnMuX2hlbHBlcj10aGlzLmluc3RhbmNlLm9wdGlvbnMuaGVscGVyLHRoaXMuaW5zdGFuY2Uub3B0aW9ucy5oZWxwZXI9ZnVuY3Rpb24oKXtyZXR1cm4gaS5oZWxwZXJbMF19LGUudGFyZ2V0PXRoaXMuaW5zdGFuY2UuY3VycmVudEl0ZW1bMF0sdGhpcy5pbnN0YW5jZS5fbW91c2VDYXB0dXJlKGUsITApLHRoaXMuaW5zdGFuY2UuX21vdXNlU3RhcnQoZSwhMCwhMCksdGhpcy5pbnN0YW5jZS5vZmZzZXQuY2xpY2sudG9wPXMub2Zmc2V0LmNsaWNrLnRvcCx0aGlzLmluc3RhbmNlLm9mZnNldC5jbGljay5sZWZ0PXMub2Zmc2V0LmNsaWNrLmxlZnQsdGhpcy5pbnN0YW5jZS5vZmZzZXQucGFyZW50LmxlZnQtPXMub2Zmc2V0LnBhcmVudC5sZWZ0LXRoaXMuaW5zdGFuY2Uub2Zmc2V0LnBhcmVudC5sZWZ0LHRoaXMuaW5zdGFuY2Uub2Zmc2V0LnBhcmVudC50b3AtPXMub2Zmc2V0LnBhcmVudC50b3AtdGhpcy5pbnN0YW5jZS5vZmZzZXQucGFyZW50LnRvcCxzLl90cmlnZ2VyKFwidG9Tb3J0YWJsZVwiLGUpLHMuZHJvcHBlZD10aGlzLmluc3RhbmNlLmVsZW1lbnQscy5jdXJyZW50SXRlbT1zLmVsZW1lbnQsdGhpcy5pbnN0YW5jZS5mcm9tT3V0c2lkZT1zKSx0aGlzLmluc3RhbmNlLmN1cnJlbnRJdGVtJiZ0aGlzLmluc3RhbmNlLl9tb3VzZURyYWcoZSkpOnRoaXMuaW5zdGFuY2UuaXNPdmVyJiYodGhpcy5pbnN0YW5jZS5pc092ZXI9MCx0aGlzLmluc3RhbmNlLmNhbmNlbEhlbHBlclJlbW92YWw9ITAsdGhpcy5pbnN0YW5jZS5vcHRpb25zLnJldmVydD0hMSx0aGlzLmluc3RhbmNlLl90cmlnZ2VyKFwib3V0XCIsZSx0aGlzLmluc3RhbmNlLl91aUhhc2godGhpcy5pbnN0YW5jZSkpLHRoaXMuaW5zdGFuY2UuX21vdXNlU3RvcChlLCEwKSx0aGlzLmluc3RhbmNlLm9wdGlvbnMuaGVscGVyPXRoaXMuaW5zdGFuY2Uub3B0aW9ucy5faGVscGVyLHRoaXMuaW5zdGFuY2UuY3VycmVudEl0ZW0ucmVtb3ZlKCksdGhpcy5pbnN0YW5jZS5wbGFjZWhvbGRlciYmdGhpcy5pbnN0YW5jZS5wbGFjZWhvbGRlci5yZW1vdmUoKSxzLl90cmlnZ2VyKFwiZnJvbVNvcnRhYmxlXCIsZSkscy5kcm9wcGVkPSExKX0pfX0pLHQudWkucGx1Z2luLmFkZChcImRyYWdnYWJsZVwiLFwiY3Vyc29yXCIse3N0YXJ0OmZ1bmN0aW9uKCl7dmFyIGU9dChcImJvZHlcIiksaT10KHRoaXMpLmRhdGEoXCJ1aS1kcmFnZ2FibGVcIikub3B0aW9ucztlLmNzcyhcImN1cnNvclwiKSYmKGkuX2N1cnNvcj1lLmNzcyhcImN1cnNvclwiKSksZS5jc3MoXCJjdXJzb3JcIixpLmN1cnNvcil9LHN0b3A6ZnVuY3Rpb24oKXt2YXIgZT10KHRoaXMpLmRhdGEoXCJ1aS1kcmFnZ2FibGVcIikub3B0aW9ucztlLl9jdXJzb3ImJnQoXCJib2R5XCIpLmNzcyhcImN1cnNvclwiLGUuX2N1cnNvcil9fSksdC51aS5wbHVnaW4uYWRkKFwiZHJhZ2dhYmxlXCIsXCJvcGFjaXR5XCIse3N0YXJ0OmZ1bmN0aW9uKGUsaSl7dmFyIHM9dChpLmhlbHBlciksbj10KHRoaXMpLmRhdGEoXCJ1aS1kcmFnZ2FibGVcIikub3B0aW9ucztzLmNzcyhcIm9wYWNpdHlcIikmJihuLl9vcGFjaXR5PXMuY3NzKFwib3BhY2l0eVwiKSkscy5jc3MoXCJvcGFjaXR5XCIsbi5vcGFjaXR5KX0sc3RvcDpmdW5jdGlvbihlLGkpe3ZhciBzPXQodGhpcykuZGF0YShcInVpLWRyYWdnYWJsZVwiKS5vcHRpb25zO3MuX29wYWNpdHkmJnQoaS5oZWxwZXIpLmNzcyhcIm9wYWNpdHlcIixzLl9vcGFjaXR5KX19KSx0LnVpLnBsdWdpbi5hZGQoXCJkcmFnZ2FibGVcIixcInNjcm9sbFwiLHtzdGFydDpmdW5jdGlvbigpe3ZhciBlPXQodGhpcykuZGF0YShcInVpLWRyYWdnYWJsZVwiKTtlLnNjcm9sbFBhcmVudFswXSE9PWRvY3VtZW50JiZcIkhUTUxcIiE9PWUuc2Nyb2xsUGFyZW50WzBdLnRhZ05hbWUmJihlLm92ZXJmbG93T2Zmc2V0PWUuc2Nyb2xsUGFyZW50Lm9mZnNldCgpKX0sZHJhZzpmdW5jdGlvbihlKXt2YXIgaT10KHRoaXMpLmRhdGEoXCJ1aS1kcmFnZ2FibGVcIikscz1pLm9wdGlvbnMsbj0hMTtpLnNjcm9sbFBhcmVudFswXSE9PWRvY3VtZW50JiZcIkhUTUxcIiE9PWkuc2Nyb2xsUGFyZW50WzBdLnRhZ05hbWU/KHMuYXhpcyYmXCJ4XCI9PT1zLmF4aXN8fChpLm92ZXJmbG93T2Zmc2V0LnRvcCtpLnNjcm9sbFBhcmVudFswXS5vZmZzZXRIZWlnaHQtZS5wYWdlWTxzLnNjcm9sbFNlbnNpdGl2aXR5P2kuc2Nyb2xsUGFyZW50WzBdLnNjcm9sbFRvcD1uPWkuc2Nyb2xsUGFyZW50WzBdLnNjcm9sbFRvcCtzLnNjcm9sbFNwZWVkOmUucGFnZVktaS5vdmVyZmxvd09mZnNldC50b3A8cy5zY3JvbGxTZW5zaXRpdml0eSYmKGkuc2Nyb2xsUGFyZW50WzBdLnNjcm9sbFRvcD1uPWkuc2Nyb2xsUGFyZW50WzBdLnNjcm9sbFRvcC1zLnNjcm9sbFNwZWVkKSkscy5heGlzJiZcInlcIj09PXMuYXhpc3x8KGkub3ZlcmZsb3dPZmZzZXQubGVmdCtpLnNjcm9sbFBhcmVudFswXS5vZmZzZXRXaWR0aC1lLnBhZ2VYPHMuc2Nyb2xsU2Vuc2l0aXZpdHk/aS5zY3JvbGxQYXJlbnRbMF0uc2Nyb2xsTGVmdD1uPWkuc2Nyb2xsUGFyZW50WzBdLnNjcm9sbExlZnQrcy5zY3JvbGxTcGVlZDplLnBhZ2VYLWkub3ZlcmZsb3dPZmZzZXQubGVmdDxzLnNjcm9sbFNlbnNpdGl2aXR5JiYoaS5zY3JvbGxQYXJlbnRbMF0uc2Nyb2xsTGVmdD1uPWkuc2Nyb2xsUGFyZW50WzBdLnNjcm9sbExlZnQtcy5zY3JvbGxTcGVlZCkpKToocy5heGlzJiZcInhcIj09PXMuYXhpc3x8KGUucGFnZVktdChkb2N1bWVudCkuc2Nyb2xsVG9wKCk8cy5zY3JvbGxTZW5zaXRpdml0eT9uPXQoZG9jdW1lbnQpLnNjcm9sbFRvcCh0KGRvY3VtZW50KS5zY3JvbGxUb3AoKS1zLnNjcm9sbFNwZWVkKTp0KHdpbmRvdykuaGVpZ2h0KCktKGUucGFnZVktdChkb2N1bWVudCkuc2Nyb2xsVG9wKCkpPHMuc2Nyb2xsU2Vuc2l0aXZpdHkmJihuPXQoZG9jdW1lbnQpLnNjcm9sbFRvcCh0KGRvY3VtZW50KS5zY3JvbGxUb3AoKStzLnNjcm9sbFNwZWVkKSkpLHMuYXhpcyYmXCJ5XCI9PT1zLmF4aXN8fChlLnBhZ2VYLXQoZG9jdW1lbnQpLnNjcm9sbExlZnQoKTxzLnNjcm9sbFNlbnNpdGl2aXR5P249dChkb2N1bWVudCkuc2Nyb2xsTGVmdCh0KGRvY3VtZW50KS5zY3JvbGxMZWZ0KCktcy5zY3JvbGxTcGVlZCk6dCh3aW5kb3cpLndpZHRoKCktKGUucGFnZVgtdChkb2N1bWVudCkuc2Nyb2xsTGVmdCgpKTxzLnNjcm9sbFNlbnNpdGl2aXR5JiYobj10KGRvY3VtZW50KS5zY3JvbGxMZWZ0KHQoZG9jdW1lbnQpLnNjcm9sbExlZnQoKStzLnNjcm9sbFNwZWVkKSkpKSxuIT09ITEmJnQudWkuZGRtYW5hZ2VyJiYhcy5kcm9wQmVoYXZpb3VyJiZ0LnVpLmRkbWFuYWdlci5wcmVwYXJlT2Zmc2V0cyhpLGUpfX0pLHQudWkucGx1Z2luLmFkZChcImRyYWdnYWJsZVwiLFwic25hcFwiLHtzdGFydDpmdW5jdGlvbigpe3ZhciBlPXQodGhpcykuZGF0YShcInVpLWRyYWdnYWJsZVwiKSxpPWUub3B0aW9ucztlLnNuYXBFbGVtZW50cz1bXSx0KGkuc25hcC5jb25zdHJ1Y3RvciE9PVN0cmluZz9pLnNuYXAuaXRlbXN8fFwiOmRhdGEodWktZHJhZ2dhYmxlKVwiOmkuc25hcCkuZWFjaChmdW5jdGlvbigpe3ZhciBpPXQodGhpcykscz1pLm9mZnNldCgpO3RoaXMhPT1lLmVsZW1lbnRbMF0mJmUuc25hcEVsZW1lbnRzLnB1c2goe2l0ZW06dGhpcyx3aWR0aDppLm91dGVyV2lkdGgoKSxoZWlnaHQ6aS5vdXRlckhlaWdodCgpLHRvcDpzLnRvcCxsZWZ0OnMubGVmdH0pfSl9LGRyYWc6ZnVuY3Rpb24oZSxpKXt2YXIgcyxuLGEsbyxyLGwsaCxjLHUsZCxwPXQodGhpcykuZGF0YShcInVpLWRyYWdnYWJsZVwiKSxnPXAub3B0aW9ucyxmPWcuc25hcFRvbGVyYW5jZSxtPWkub2Zmc2V0LmxlZnQsXz1tK3AuaGVscGVyUHJvcG9ydGlvbnMud2lkdGgsdj1pLm9mZnNldC50b3AsYj12K3AuaGVscGVyUHJvcG9ydGlvbnMuaGVpZ2h0O2Zvcih1PXAuc25hcEVsZW1lbnRzLmxlbmd0aC0xO3U+PTA7dS0tKXI9cC5zbmFwRWxlbWVudHNbdV0ubGVmdCxsPXIrcC5zbmFwRWxlbWVudHNbdV0ud2lkdGgsaD1wLnNuYXBFbGVtZW50c1t1XS50b3AsYz1oK3Auc25hcEVsZW1lbnRzW3VdLmhlaWdodCxyLWY+X3x8bT5sK2Z8fGgtZj5ifHx2PmMrZnx8IXQuY29udGFpbnMocC5zbmFwRWxlbWVudHNbdV0uaXRlbS5vd25lckRvY3VtZW50LHAuc25hcEVsZW1lbnRzW3VdLml0ZW0pPyhwLnNuYXBFbGVtZW50c1t1XS5zbmFwcGluZyYmcC5vcHRpb25zLnNuYXAucmVsZWFzZSYmcC5vcHRpb25zLnNuYXAucmVsZWFzZS5jYWxsKHAuZWxlbWVudCxlLHQuZXh0ZW5kKHAuX3VpSGFzaCgpLHtzbmFwSXRlbTpwLnNuYXBFbGVtZW50c1t1XS5pdGVtfSkpLHAuc25hcEVsZW1lbnRzW3VdLnNuYXBwaW5nPSExKTooXCJpbm5lclwiIT09Zy5zbmFwTW9kZSYmKHM9Zj49TWF0aC5hYnMoaC1iKSxuPWY+PU1hdGguYWJzKGMtdiksYT1mPj1NYXRoLmFicyhyLV8pLG89Zj49TWF0aC5hYnMobC1tKSxzJiYoaS5wb3NpdGlvbi50b3A9cC5fY29udmVydFBvc2l0aW9uVG8oXCJyZWxhdGl2ZVwiLHt0b3A6aC1wLmhlbHBlclByb3BvcnRpb25zLmhlaWdodCxsZWZ0OjB9KS50b3AtcC5tYXJnaW5zLnRvcCksbiYmKGkucG9zaXRpb24udG9wPXAuX2NvbnZlcnRQb3NpdGlvblRvKFwicmVsYXRpdmVcIix7dG9wOmMsbGVmdDowfSkudG9wLXAubWFyZ2lucy50b3ApLGEmJihpLnBvc2l0aW9uLmxlZnQ9cC5fY29udmVydFBvc2l0aW9uVG8oXCJyZWxhdGl2ZVwiLHt0b3A6MCxsZWZ0OnItcC5oZWxwZXJQcm9wb3J0aW9ucy53aWR0aH0pLmxlZnQtcC5tYXJnaW5zLmxlZnQpLG8mJihpLnBvc2l0aW9uLmxlZnQ9cC5fY29udmVydFBvc2l0aW9uVG8oXCJyZWxhdGl2ZVwiLHt0b3A6MCxsZWZ0Omx9KS5sZWZ0LXAubWFyZ2lucy5sZWZ0KSksZD1zfHxufHxhfHxvLFwib3V0ZXJcIiE9PWcuc25hcE1vZGUmJihzPWY+PU1hdGguYWJzKGgtdiksbj1mPj1NYXRoLmFicyhjLWIpLGE9Zj49TWF0aC5hYnMoci1tKSxvPWY+PU1hdGguYWJzKGwtXykscyYmKGkucG9zaXRpb24udG9wPXAuX2NvbnZlcnRQb3NpdGlvblRvKFwicmVsYXRpdmVcIix7dG9wOmgsbGVmdDowfSkudG9wLXAubWFyZ2lucy50b3ApLG4mJihpLnBvc2l0aW9uLnRvcD1wLl9jb252ZXJ0UG9zaXRpb25UbyhcInJlbGF0aXZlXCIse3RvcDpjLXAuaGVscGVyUHJvcG9ydGlvbnMuaGVpZ2h0LGxlZnQ6MH0pLnRvcC1wLm1hcmdpbnMudG9wKSxhJiYoaS5wb3NpdGlvbi5sZWZ0PXAuX2NvbnZlcnRQb3NpdGlvblRvKFwicmVsYXRpdmVcIix7dG9wOjAsbGVmdDpyfSkubGVmdC1wLm1hcmdpbnMubGVmdCksbyYmKGkucG9zaXRpb24ubGVmdD1wLl9jb252ZXJ0UG9zaXRpb25UbyhcInJlbGF0aXZlXCIse3RvcDowLGxlZnQ6bC1wLmhlbHBlclByb3BvcnRpb25zLndpZHRofSkubGVmdC1wLm1hcmdpbnMubGVmdCkpLCFwLnNuYXBFbGVtZW50c1t1XS5zbmFwcGluZyYmKHN8fG58fGF8fG98fGQpJiZwLm9wdGlvbnMuc25hcC5zbmFwJiZwLm9wdGlvbnMuc25hcC5zbmFwLmNhbGwocC5lbGVtZW50LGUsdC5leHRlbmQocC5fdWlIYXNoKCkse3NuYXBJdGVtOnAuc25hcEVsZW1lbnRzW3VdLml0ZW19KSkscC5zbmFwRWxlbWVudHNbdV0uc25hcHBpbmc9c3x8bnx8YXx8b3x8ZCl9fSksdC51aS5wbHVnaW4uYWRkKFwiZHJhZ2dhYmxlXCIsXCJzdGFja1wiLHtzdGFydDpmdW5jdGlvbigpe3ZhciBlLGk9dGhpcy5kYXRhKFwidWktZHJhZ2dhYmxlXCIpLm9wdGlvbnMscz10Lm1ha2VBcnJheSh0KGkuc3RhY2spKS5zb3J0KGZ1bmN0aW9uKGUsaSl7cmV0dXJuKHBhcnNlSW50KHQoZSkuY3NzKFwiekluZGV4XCIpLDEwKXx8MCktKHBhcnNlSW50KHQoaSkuY3NzKFwiekluZGV4XCIpLDEwKXx8MCl9KTtzLmxlbmd0aCYmKGU9cGFyc2VJbnQodChzWzBdKS5jc3MoXCJ6SW5kZXhcIiksMTApfHwwLHQocykuZWFjaChmdW5jdGlvbihpKXt0KHRoaXMpLmNzcyhcInpJbmRleFwiLGUraSl9KSx0aGlzLmNzcyhcInpJbmRleFwiLGUrcy5sZW5ndGgpKX19KSx0LnVpLnBsdWdpbi5hZGQoXCJkcmFnZ2FibGVcIixcInpJbmRleFwiLHtzdGFydDpmdW5jdGlvbihlLGkpe3ZhciBzPXQoaS5oZWxwZXIpLG49dCh0aGlzKS5kYXRhKFwidWktZHJhZ2dhYmxlXCIpLm9wdGlvbnM7cy5jc3MoXCJ6SW5kZXhcIikmJihuLl96SW5kZXg9cy5jc3MoXCJ6SW5kZXhcIikpLHMuY3NzKFwiekluZGV4XCIsbi56SW5kZXgpfSxzdG9wOmZ1bmN0aW9uKGUsaSl7dmFyIHM9dCh0aGlzKS5kYXRhKFwidWktZHJhZ2dhYmxlXCIpLm9wdGlvbnM7cy5fekluZGV4JiZ0KGkuaGVscGVyKS5jc3MoXCJ6SW5kZXhcIixzLl96SW5kZXgpfX0pfSkoalF1ZXJ5KTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIrN1pKcDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9saWIvdWkuanNcIixcIi9saWJcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4ndXNlIHN0cmljdCc7XG4kKGZ1bmN0aW9uKCkge1xuICAvLyBub3QgdW5kZXJzdG9vZCB5ZXRcbiAgdmFyIGggPSAkKCcuaXRlbWInKS5maXJzdCgpLmhlaWdodCgpO1xuICAkKCcuaXRlbWInKS5jc3MoJ2xpbmUtaGVpZ2h0JywgaCArICdweCcpO1xuXG4gIHZhciAkc3dUZXh0ID0gJCgnLnN3aXRjaGVyX3RleHQnKSxcbiAgICAkc3dJbWcgPSAkKCcuc3dpdGNoZXJfaW1hZ2UnKSxcbiAgICAvLyBzZWxlY3Rpb24gdmFyIGZvciBwaWN0dXJlLXRleHQgbW9kZVxuICAgIENMQVNTX1RFWFQgPSAncnQnO1xuXG4gIC8vIHNlcnZpY2VzIHBpY3R1cmUgbW9kZSBhbmQgdGV4dCBtb2RlIGJ1dHRvbnNcbiAgLy8gcHV0cyBjdXJyZW50IHN0YXR1cyB0byBjb29raWVcbiAgJHN3VGV4dC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoQ0xBU1NfVEVYVCk7XG4gICAgJC5jb29raWUoJ3N3aXRjaGVyJywgJ3RleHRQb3NpdGlvbicsIHsgcGF0aDogJy8nIH0pO1xuICAgIC8vIGlmICgkYXJ0aWNsZS5sZW5ndGgpICRhcnRpY2xlLnRyaWdnZXIoJ3RleHQnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuICAkc3dJbWcub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKENMQVNTX1RFWFQpO1xuICAgICQuY29va2llKCdzd2l0Y2hlcicsICdpbWFnZVBvc2l0aW9uJywgeyBwYXRoOiAnLycgfSk7XG4gICAgLy8gaWYgKCRhcnRpY2xlLmxlbmd0aCkgJGFydGljbGUudHJpZ2dlcignaW1hZ2UnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gIC8vIHByb2Nlc3NlcyBjdXJyZW50IGNvb2tpZSBcbiAgaWYgKCQuY29va2llKCdzd2l0Y2hlcicpID09PSAndGV4dFBvc2l0aW9uJykge1xuICAgICRzd1RleHQudHJpZ2dlcignY2xpY2snKTtcbiAgfVxuICBpZiAoJC5jb29raWUoJ3N3aXRjaGVyJykgPT09ICdpbWFnZVBvc2l0aW9uJykge1xuICAgICRzd0ltZy50cmlnZ2VyKCdjbGljaycpO1xuICB9XG5cbiAgLy8gVGhlIGlkZWEgaXMgdGhhdCB0ZXh0IGFuZCBpbWFnZXMgXCJmbG9hdFwiIG9uIHRoZSBiYWNrZ3JvdW5kXG4gIC8vIGFzIGJhY2tncm91bmQgaXMgY2xpY2tlZCB3ZSBmYWxsIGJhY2sgdG8gaG9tZSBwYWdlXG4gIC8vIFNvIGdyaWQgb2JqZWN0cyBzaG91bGQgc2hvdyBcImN1cnNvcjpwb2ludGVyXCIgaW1pdGF0aW5nIGEgbGlua1xuICAvLyBwYXJzZSBraXJieXRleHQnZWQgdGV4dCwgd3JhcHBpbmcgdGV4dCBiZXR3ZWVuIGJyJ3Mgd2l0aCA8c3Bhbj5cbiAgLy8gc2V0IGN1cnNvciBzdHlsZSB0byB0ZXh0IGJlY2F1c2UgXG4gICQoJy5qc19fYXJ0aWNsZS1ob2xkZXIgcCcpLmNvbnRlbnRzKCkuZmlsdGVyKGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMubm9kZVR5cGUgPT09IDM7XG4gIH0pLndyYXAoJzxzcGFuIGNsYXNzPVwianNfX2FydGljbGUtdGV4dC1zcGFubmVkXCIgc3R5bGUgPSBcImN1cnNvcjp0ZXh0XCIvPicpO1xuICAvLyBpZiBhbnl0aGluZyBvdXRzaWRlIGRpdiBpcyBjbGlja2VkIC0gZ2V0dGluZyBiYWNrIHRvIGhvbWVcbiAgJCgnLmpzX19hcnRpY2xlLWJveCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgLy9zZXQgdG8gXCJyZXR1cm4gdG8gaG9tZVwiIHRvIGV2ZXJ5dGhpbmcgZXhjZXB0IHRleHQgYW5kIGltYWdlIGFuZCBoZWFkZXIgd3JhcHBlZCBpbiBkdCBhbmQgZGRcbiAgICBpZiggISgkKGUudGFyZ2V0KS5oYXNDbGFzcygnanNfX2FydGljbGUtdGV4dC1zcGFubmVkJykgfHwgJChlLnRhcmdldCkuaXMoJ2ltZycpIHx8IFxuICAgICAgICAgICQoZS50YXJnZXQpLmlzKCdkdCcpIHx8ICQoZS50YXJnZXQpLmlzKCdkZCcpICkgKSB7IC8vIGhvcnJpZmljLiB0byBiZSBjaGFuZ2VkLlxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gYXMgaXMgXG4gIGZ1bmN0aW9uIGdldFJhbmRvbUludCAobWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgfVxuXG4gIC8vIGFzIGlzXG4gIGZ1bmN0aW9uIGxvZ29SZXBvc2l0aW9uKCkge1xuICAgICQoJy5sb2dvJykuY3NzKHtcbiAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogZ2V0UmFuZG9tSW50KC0xMCwgMTEwKSArICclIDUwJSdcbiAgICB9KVxuICB9XG4gIC8vIGxvZ29SZXBvc2l0aW9uKCk7XG5cbiAgLy8gc2VydmEgdGh1bWJuYWlsIGltYWdpbmkgYWxsYSBcImhvbWVcIiBwYWdpbmFcbiAgJCgnLmpzX19ncmlkJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICB2YXIgJGdyaWQgPSAkKHRoaXMpLFxuICAgICAgJGl0ZW1zID0gJGdyaWQuZmluZCgnLmpzX19pdGVtJyksXG4gICAgICAkcmVhcnJhbmdlciA9ICQoJy5qc19fcmVhcnJhbmdlJyksXG4gICAgICB3aW5kb3dXaWR0aCxcbiAgICAgIHdpbmRvd0hlaWdodCxcbiAgICAgIGl0ZW1XaWR0aCA9IDE1MCxcbiAgICAgIGl0ZW1IZWlnaHQgPSAxNTAsXG4gICAgICBtYXhPZmZzZXRYLFxuICAgICAgbWF4T2Zmc2V0WSxcbiAgICAgIHJlc2l6ZVRpbWVvdXQsXG4gICAgICB6ID0gMTAwLFxuICAgICAgQ09MUyA9IDcsXG4gICAgICBST1dTID0gNixcbiAgICAgIENMQVNTX1NUSUxMID0gJ2lzX19zdGlsbCc7XG5cbiAgICBmdW5jdGlvbiByZWNhbGMoKSB7XG4gICAgICB3aW5kb3dXaWR0aCA9ICRncmlkLndpZHRoKCk7XG4gICAgICB3aW5kb3dIZWlnaHQgPSAkZ3JpZC5oZWlnaHQoKTtcbiAgICAgIC8vIGl0ZW1XaWR0aCA9IHBhcnNlSW50KHdpbmRvd1dpZHRoL0NPTFMpO1xuICAgICAgLy8gaXRlbUhlaWdodCA9IHBhcnNlSW50KHdpbmRvd0hlaWdodC9ST1dTKTtcbiAgICAgIG1heE9mZnNldFggPSB3aW5kb3dXaWR0aCAtIGl0ZW1XaWR0aDtcbiAgICAgIG1heE9mZnNldFkgPSB3aW5kb3dIZWlnaHQgLSBpdGVtSGVpZ2h0IC0gNjE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVhcnJhbmdlKGZvcmNlKSB7XG4gICAgICAkaXRlbXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpLFxuICAgICAgICAgIG9mZnNldExlZnQgPSAkLmNvb2tpZShpZCArICdfbGVmdCcpLFxuICAgICAgICAgIG9mZnNldFRvcCA9ICQuY29va2llKGlkICsgJ190b3AnKTtcbiAgICAgICAgaWYgKCFvZmZzZXRMZWZ0IHx8IGZvcmNlKSB7XG4gICAgICAgICAgb2Zmc2V0TGVmdCA9IGdldFJhbmRvbUludCgwLCBtYXhPZmZzZXRYKS93aW5kb3dXaWR0aCAqIDEwMDtcbiAgICAgICAgICAkLmNvb2tpZShpZCArICdfbGVmdCcsIG9mZnNldExlZnQsIHsgZXhwaXJlczogMSB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9mZnNldExlZnQgfHwgZm9yY2UpIHtcbiAgICAgICAgICBvZmZzZXRUb3AgPSBnZXRSYW5kb21JbnQoMCwgbWF4T2Zmc2V0WSkvKHdpbmRvd0hlaWdodCAtIDYxKSAqIDEwMDtcbiAgICAgICAgICAkLmNvb2tpZShpZCArICdfdG9wJywgb2Zmc2V0VG9wLCB7IGV4cGlyZXM6IDEgfSk7XG4gICAgICAgIH1cbiAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgIHdpZHRoOiBpdGVtV2lkdGgsXG4gICAgICAgICAgbGVmdDogb2Zmc2V0TGVmdCArICclJyxcbiAgICAgICAgICB0b3A6IG9mZnNldFRvcCArICclJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGFzcGV0dGEgcGVyIHVuYSBzZWNvbmRhIHF1YW5kbyBoYSByaWNlc3RvIGwnZXZlbnRvIFwicmVzaXplXCIgZSByaWNhbGNvbGFyZSBpIHZhcmlhYmlsaVxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKSB7XG4gICAgICBjbGVhclRpbWVvdXQocmVzaXplVGltZW91dCk7XG4gICAgICByZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcmVjYWxjKCk7XG4gICAgICAgIC8vIHJlYXJyYW5nZSgpO1xuICAgICAgfSwgMTAwKVxuICAgIH0pO1xuXG4gICAgLy8gc2V0cyB1cCB0aHVtYm5haWxzIGFzIGpRdWVyeSBVSSBpdGVtc1xuICAgICRpdGVtcy5kcmFnZ2FibGUoe1xuICAgICAgY29udGFpbm1lbnQ6ICcjZ3JpZCcsXG4gICAgICBzY3JvbGw6IGZhbHNlLFxuICAgICAgc3RhcnQ6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICB1aS5oZWxwZXIuYWRkQ2xhc3MoQ0xBU1NfU1RJTEwpO1xuICAgICAgICB1aS5oZWxwZXIuY3NzKCd6LWluZGV4JywgeisrKTtcbiAgICAgIH0sXG4gICAgICBzdG9wOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgdmFyIGlkID0gdWkuaGVscGVyLmF0dHIoJ2lkJyk7XG4gICAgICAgICQuY29va2llKGlkICsgJ19sZWZ0JywgdWkucG9zaXRpb24ubGVmdCAvIHdpbmRvd1dpZHRoICogMTAwLCB7IGV4cGlyZXM6IDEgfSk7XG4gICAgICAgICQuY29va2llKGlkICsgJ190b3AnLCB1aS5wb3NpdGlvbi50b3AgLyB3aW5kb3dIZWlnaHQgKiAxMDAsIHsgZXhwaXJlczogMSB9KTtcbiAgICAgICAgdWkuaGVscGVyLnJlbW92ZUNsYXNzKENMQVNTX1NUSUxMKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHJlYXJyYW5nZXMgdGh1bWJuYWlscyBvbiBTUEFDRS4gRG9lc24ndCB3b3JrXG4gICAgJChkb2N1bWVudCkub24oJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09IDMyKSB7XG4gICAgICAgIHJlYXJyYW5nZSgpO1xuICAgICAgfVxuICAgIH0pXG4gICAgJHJlYXJyYW5nZXIub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmVhcnJhbmdlKHRydWUpO1xuICAgIH0pXG5cbiAgICByZWNhbGMoKTtcbiAgICByZWFycmFuZ2UoKTtcblxuICAgIC8vIGluIDAuMyBzZWNvbmRzIHNldHMgZ3JpZCBvcGFjaXR5IHRvIDFcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgJGdyaWQuYWRkQ2xhc3MoJ2lzX19hY3RpdmUnKTtcbiAgICB9LCAzMDApO1xuICB9KTtcblxufSlcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIrN1pKcDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9wYXJ0cy9ncmlkLmpzXCIsXCIvcGFydHNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4kKGZ1bmN0aW9uKCkge1xuXHRcblx0Ly8gaXRlcmF0ZXMgdGhyb3VnaCBhbGwganNfX2FydGljbGUgY2hpbGRyZW4gYW5kIHNlYXJjaGVzIGZvciBqc19fYXJ0aWNsZS1ob21lIGRpdlxuXHQvLyB0aGVuIHNldHMgdGhlIGhlaWdodCBvZiB0aGUgZm91bmQgZGl2IGVxdWFsIHRvIGpzX19hcnRpY2xlIGhlaWdodFxuXHQvLyB0aGVuIGRvZXMgdGhlIHNhbWUgYXMgdGhlIGltYWdlcyBhcmUgbG9hZGVkIChwdXJwb3NlIHVua25vd24geWV0KVxuICAkKCcuanNfX2FydGljbGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHZhciAkYm94ID0gJCh0aGlzKSxcbiAgICAgICRob21lID0gJGJveC5maW5kKCcuanNfX2FydGljbGUtaG9tZScpO1xuXG4gICAgJGhvbWUuaGVpZ2h0KCRib3guaGVpZ2h0KCkpO1xuXG4gICAgJGJveC5pbWFnZXNMb2FkZWQoIGZ1bmN0aW9uKCkge1xuICAgICAgJGhvbWUuaGVpZ2h0KCRib3guaGVpZ2h0KCkpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIis3WkpwMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3BhcnRzL2lubmVyLmpzXCIsXCIvcGFydHNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5fdXNlVHlwZWRBcnJheXNgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAoY29tcGF0aWJsZSBkb3duIHRvIElFNilcbiAqL1xuQnVmZmVyLl91c2VUeXBlZEFycmF5cyA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIERldGVjdCBpZiBicm93c2VyIHN1cHBvcnRzIFR5cGVkIEFycmF5cy4gU3VwcG9ydGVkIGJyb3dzZXJzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssXG4gIC8vIENocm9tZSA3KywgU2FmYXJpIDUuMSssIE9wZXJhIDExLjYrLCBpT1MgNC4yKy4gSWYgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBhZGRpbmdcbiAgLy8gcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLCB0aGVuIHRoYXQncyB0aGUgc2FtZSBhcyBubyBgVWludDhBcnJheWAgc3VwcG9ydFxuICAvLyBiZWNhdXNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBhZGQgYWxsIHRoZSBub2RlIEJ1ZmZlciBBUEkgbWV0aG9kcy4gVGhpcyBpcyBhbiBpc3N1ZVxuICAvLyBpbiBGaXJlZm94IDQtMjkuIE5vdyBmaXhlZDogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4XG4gIHRyeSB7XG4gICAgdmFyIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcigwKVxuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgYXJyLmZvbyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH1cbiAgICByZXR1cm4gNDIgPT09IGFyci5mb28oKSAmJlxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nIC8vIENocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn0pKClcblxuLyoqXG4gKiBDbGFzczogQnVmZmVyXG4gKiA9PT09PT09PT09PT09XG4gKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBhcmUgYXVnbWVudGVkXG4gKiB3aXRoIGZ1bmN0aW9uIHByb3BlcnRpZXMgZm9yIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBBUEkgZnVuY3Rpb25zLiBXZSB1c2VcbiAqIGBVaW50OEFycmF5YCBzbyB0aGF0IHNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0IHJldHVybnNcbiAqIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIEJ5IGF1Z21lbnRpbmcgdGhlIGluc3RhbmNlcywgd2UgY2FuIGF2b2lkIG1vZGlmeWluZyB0aGUgYFVpbnQ4QXJyYXlgXG4gKiBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIEJ1ZmZlciAoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSlcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKVxuXG4gIHZhciB0eXBlID0gdHlwZW9mIHN1YmplY3RcblxuICAvLyBXb3JrYXJvdW5kOiBub2RlJ3MgYmFzZTY0IGltcGxlbWVudGF0aW9uIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBzdHJpbmdzXG4gIC8vIHdoaWxlIGJhc2U2NC1qcyBkb2VzIG5vdC5cbiAgaWYgKGVuY29kaW5nID09PSAnYmFzZTY0JyAmJiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHN1YmplY3QgPSBzdHJpbmd0cmltKHN1YmplY3QpXG4gICAgd2hpbGUgKHN1YmplY3QubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgICAgc3ViamVjdCA9IHN1YmplY3QgKyAnPSdcbiAgICB9XG4gIH1cblxuICAvLyBGaW5kIHRoZSBsZW5ndGhcbiAgdmFyIGxlbmd0aFxuICBpZiAodHlwZSA9PT0gJ251bWJlcicpXG4gICAgbGVuZ3RoID0gY29lcmNlKHN1YmplY3QpXG4gIGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKVxuICAgIGxlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKHN1YmplY3QsIGVuY29kaW5nKVxuICBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JylcbiAgICBsZW5ndGggPSBjb2VyY2Uoc3ViamVjdC5sZW5ndGgpIC8vIGFzc3VtZSB0aGF0IG9iamVjdCBpcyBhcnJheS1saWtlXG4gIGVsc2VcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG5lZWRzIHRvIGJlIGEgbnVtYmVyLCBhcnJheSBvciBzdHJpbmcuJylcblxuICB2YXIgYnVmXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgLy8gUHJlZmVycmVkOiBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIGJ1ZiA9IEJ1ZmZlci5fYXVnbWVudChuZXcgVWludDhBcnJheShsZW5ndGgpKVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gVEhJUyBpbnN0YW5jZSBvZiBCdWZmZXIgKGNyZWF0ZWQgYnkgYG5ld2ApXG4gICAgYnVmID0gdGhpc1xuICAgIGJ1Zi5sZW5ndGggPSBsZW5ndGhcbiAgICBidWYuX2lzQnVmZmVyID0gdHJ1ZVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgJiYgdHlwZW9mIHN1YmplY3QuYnl0ZUxlbmd0aCA9PT0gJ251bWJlcicpIHtcbiAgICAvLyBTcGVlZCBvcHRpbWl6YXRpb24gLS0gdXNlIHNldCBpZiB3ZSdyZSBjb3B5aW5nIGZyb20gYSB0eXBlZCBhcnJheVxuICAgIGJ1Zi5fc2V0KHN1YmplY3QpXG4gIH0gZWxzZSBpZiAoaXNBcnJheWlzaChzdWJqZWN0KSkge1xuICAgIC8vIFRyZWF0IGFycmF5LWlzaCBvYmplY3RzIGFzIGEgYnl0ZSBhcnJheVxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSlcbiAgICAgICAgYnVmW2ldID0gc3ViamVjdC5yZWFkVUludDgoaSlcbiAgICAgIGVsc2VcbiAgICAgICAgYnVmW2ldID0gc3ViamVjdFtpXVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGJ1Zi53cml0ZShzdWJqZWN0LCAwLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiAhQnVmZmVyLl91c2VUeXBlZEFycmF5cyAmJiAhbm9aZXJvKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBidWZbaV0gPSAwXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG4vLyBTVEFUSUMgTUVUSE9EU1xuLy8gPT09PT09PT09PT09PT1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIChiKSB7XG4gIHJldHVybiAhIShiICE9PSBudWxsICYmIGIgIT09IHVuZGVmaW5lZCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmJ5dGVMZW5ndGggPSBmdW5jdGlvbiAoc3RyLCBlbmNvZGluZykge1xuICB2YXIgcmV0XG4gIHN0ciA9IHN0ciArICcnXG4gIHN3aXRjaCAoZW5jb2RpbmcgfHwgJ3V0ZjgnKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggLyAyXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IHV0ZjhUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBiYXNlNjRUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoICogMlxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiAobGlzdCwgdG90YWxMZW5ndGgpIHtcbiAgYXNzZXJ0KGlzQXJyYXkobGlzdCksICdVc2FnZTogQnVmZmVyLmNvbmNhdChsaXN0LCBbdG90YWxMZW5ndGhdKVxcbicgK1xuICAgICAgJ2xpc3Qgc2hvdWxkIGJlIGFuIEFycmF5LicpXG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoMClcbiAgfSBlbHNlIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBsaXN0WzBdXG4gIH1cblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHRvdGFsTGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgIHRvdGFsTGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b3RhbExlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWYgPSBuZXcgQnVmZmVyKHRvdGFsTGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIGl0ZW0uY29weShidWYsIHBvcylcbiAgICBwb3MgKz0gaXRlbS5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cbi8vIEJVRkZFUiBJTlNUQU5DRSBNRVRIT0RTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBfaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBhc3NlcnQoc3RyTGVuICUgMiA9PT0gMCwgJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBieXRlID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGFzc2VydCghaXNOYU4oYnl0ZSksICdJbnZhbGlkIGhleCBzdHJpbmcnKVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVcbiAgfVxuICBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9IGkgKiAyXG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIF91dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfYmluYXJ5V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gX2FzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBfYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF91dGYxNmxlV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIFN1cHBvcnQgYm90aCAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpXG4gIC8vIGFuZCB0aGUgbGVnYWN5IChzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBpZiAoIWlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIH0gZWxzZSB7ICAvLyBsZWdhY3lcbiAgICB2YXIgc3dhcCA9IGVuY29kaW5nXG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBvZmZzZXQgPSBsZW5ndGhcbiAgICBsZW5ndGggPSBzd2FwXG4gIH1cblxuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG4gIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKVxuXG4gIHZhciByZXRcbiAgc3dpdGNoIChlbmNvZGluZykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBfaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gX3V0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgICByZXQgPSBfYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiaW5hcnknOlxuICAgICAgcmV0ID0gX2JpbmFyeVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBfYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IF91dGYxNmxlV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKVxuICBzdGFydCA9IE51bWJlcihzdGFydCkgfHwgMFxuICBlbmQgPSAoZW5kICE9PSB1bmRlZmluZWQpXG4gICAgPyBOdW1iZXIoZW5kKVxuICAgIDogZW5kID0gc2VsZi5sZW5ndGhcblxuICAvLyBGYXN0cGF0aCBlbXB0eSBzdHJpbmdzXG4gIGlmIChlbmQgPT09IHN0YXJ0KVxuICAgIHJldHVybiAnJ1xuXG4gIHZhciByZXRcbiAgc3dpdGNoIChlbmNvZGluZykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBfaGV4U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gX3V0ZjhTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgICByZXQgPSBfYXNjaWlTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiaW5hcnknOlxuICAgICAgcmV0ID0gX2JpbmFyeVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBfYmFzZTY0U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IF91dGYxNmxlU2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAodGFyZ2V0LCB0YXJnZXRfc3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHNvdXJjZSA9IHRoaXNcblxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAoIXRhcmdldF9zdGFydCkgdGFyZ2V0X3N0YXJ0ID0gMFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHNvdXJjZS5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgYXNzZXJ0KGVuZCA+PSBzdGFydCwgJ3NvdXJjZUVuZCA8IHNvdXJjZVN0YXJ0JylcbiAgYXNzZXJ0KHRhcmdldF9zdGFydCA+PSAwICYmIHRhcmdldF9zdGFydCA8IHRhcmdldC5sZW5ndGgsXG4gICAgICAndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChzdGFydCA+PSAwICYmIHN0YXJ0IDwgc291cmNlLmxlbmd0aCwgJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoZW5kID49IDAgJiYgZW5kIDw9IHNvdXJjZS5sZW5ndGgsICdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKVxuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0IDwgZW5kIC0gc3RhcnQpXG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCArIHN0YXJ0XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG5cbiAgaWYgKGxlbiA8IDEwMCB8fCAhQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICB0YXJnZXRbaSArIHRhcmdldF9zdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuX3NldCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksIHRhcmdldF9zdGFydClcbiAgfVxufVxuXG5mdW5jdGlvbiBfYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIF91dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmVzID0gJydcbiAgdmFyIHRtcCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIGlmIChidWZbaV0gPD0gMHg3Rikge1xuICAgICAgcmVzICs9IGRlY29kZVV0ZjhDaGFyKHRtcCkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgICAgIHRtcCA9ICcnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcCArPSAnJScgKyBidWZbaV0udG9TdHJpbmcoMTYpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcyArIGRlY29kZVV0ZjhDaGFyKHRtcClcbn1cblxuZnVuY3Rpb24gX2FzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKVxuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBfYmluYXJ5U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICByZXR1cm4gX2FzY2lpU2xpY2UoYnVmLCBzdGFydCwgZW5kKVxufVxuXG5mdW5jdGlvbiBfaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiBfdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpKzFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IGNsYW1wKHN0YXJ0LCBsZW4sIDApXG4gIGVuZCA9IGNsYW1wKGVuZCwgbGVuLCBsZW4pXG5cbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICByZXR1cm4gQnVmZmVyLl9hdWdtZW50KHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZCkpXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICB2YXIgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkLCB0cnVlKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47IGkrKykge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICAgIHJldHVybiBuZXdCdWZcbiAgfVxufVxuXG4vLyBgZ2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuZ2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy5yZWFkVUludDgob2Zmc2V0KVxufVxuXG4vLyBgc2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodiwgb2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuc2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy53cml0ZVVJbnQ4KHYsIG9mZnNldClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuZnVuY3Rpb24gX3JlYWRVSW50MTYgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsXG4gIGlmIChsaXR0bGVFbmRpYW4pIHtcbiAgICB2YWwgPSBidWZbb2Zmc2V0XVxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXSA8PCA4XG4gIH0gZWxzZSB7XG4gICAgdmFsID0gYnVmW29mZnNldF0gPDwgOFxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MTYodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MTYodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkVUludDMyIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbFxuICBpZiAobGl0dGxlRW5kaWFuKSB7XG4gICAgaWYgKG9mZnNldCArIDIgPCBsZW4pXG4gICAgICB2YWwgPSBidWZbb2Zmc2V0ICsgMl0gPDwgMTZcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV0gPDwgOFxuICAgIHZhbCB8PSBidWZbb2Zmc2V0XVxuICAgIGlmIChvZmZzZXQgKyAzIDwgbGVuKVxuICAgICAgdmFsID0gdmFsICsgKGJ1ZltvZmZzZXQgKyAzXSA8PCAyNCA+Pj4gMClcbiAgfSBlbHNlIHtcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCA9IGJ1ZltvZmZzZXQgKyAxXSA8PCAxNlxuICAgIGlmIChvZmZzZXQgKyAyIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAyXSA8PCA4XG4gICAgaWYgKG9mZnNldCArIDMgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDNdXG4gICAgdmFsID0gdmFsICsgKGJ1ZltvZmZzZXRdIDw8IDI0ID4+PiAwKVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MzIodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MzIodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCxcbiAgICAgICAgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIHZhciBuZWcgPSB0aGlzW29mZnNldF0gJiAweDgwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5mdW5jdGlvbiBfcmVhZEludDE2IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbCA9IF9yZWFkVUludDE2KGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIHRydWUpXG4gIHZhciBuZWcgPSB2YWwgJiAweDgwMDBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmZmZiAtIHZhbCArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDE2KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQxNih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRJbnQzMiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWwgPSBfcmVhZFVJbnQzMihidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCB0cnVlKVxuICB2YXIgbmVnID0gdmFsICYgMHg4MDAwMDAwMFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZmZmZmZmZiAtIHZhbCArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDMyKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQzMih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRGbG9hdCAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICByZXR1cm4gaWVlZTc1NC5yZWFkKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRmxvYXQodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEZsb2F0KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZERvdWJsZSAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICsgNyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICByZXR1cm4gaWVlZTc1NC5yZWFkKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZERvdWJsZSh0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZERvdWJsZSh0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmYpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKSByZXR1cm5cblxuICB0aGlzW29mZnNldF0gPSB2YWx1ZVxufVxuXG5mdW5jdGlvbiBfd3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZmZmKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihsZW4gLSBvZmZzZXQsIDIpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID1cbiAgICAgICAgKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgICAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZmZmZmZmZilcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4obGVuIC0gb2Zmc2V0LCA0KTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9XG4gICAgICAgICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZiwgLTB4ODApXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIHRoaXMud3JpdGVVSW50OCh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydClcbiAgZWxzZVxuICAgIHRoaXMud3JpdGVVSW50OCgweGZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmZmYsIC0weDgwMDApXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICBfd3JpdGVVSW50MTYoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgX3dyaXRlVUludDE2KGJ1ZiwgMHhmZmZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgX3dyaXRlVUludDMyKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbiAgZWxzZVxuICAgIF93cml0ZVVJbnQzMihidWYsIDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmSUVFRTc1NCh2YWx1ZSwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDcgPCBidWYubGVuZ3RoLFxuICAgICAgICAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZklFRUU3NTQodmFsdWUsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGZpbGwodmFsdWUsIHN0YXJ0PTAsIGVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gKHZhbHVlLCBzdGFydCwgZW5kKSB7XG4gIGlmICghdmFsdWUpIHZhbHVlID0gMFxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQpIGVuZCA9IHRoaXMubGVuZ3RoXG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLmNoYXJDb2RlQXQoMClcbiAgfVxuXG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmICFpc05hTih2YWx1ZSksICd2YWx1ZSBpcyBub3QgYSBudW1iZXInKVxuICBhc3NlcnQoZW5kID49IHN0YXJ0LCAnZW5kIDwgc3RhcnQnKVxuXG4gIC8vIEZpbGwgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgYXNzZXJ0KHN0YXJ0ID49IDAgJiYgc3RhcnQgPCB0aGlzLmxlbmd0aCwgJ3N0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoZW5kID49IDAgJiYgZW5kIDw9IHRoaXMubGVuZ3RoLCAnZW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgdGhpc1tpXSA9IHZhbHVlXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgb3V0ID0gW11cbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBvdXRbaV0gPSB0b0hleCh0aGlzW2ldKVxuICAgIGlmIChpID09PSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTKSB7XG4gICAgICBvdXRbaSArIDFdID0gJy4uLidcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgb3V0LmpvaW4oJyAnKSArICc+J1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYEFycmF5QnVmZmVyYCB3aXRoIHRoZSAqY29waWVkKiBtZW1vcnkgb2YgdGhlIGJ1ZmZlciBpbnN0YW5jZS5cbiAqIEFkZGVkIGluIE5vZGUgMC4xMi4gT25seSBhdmFpbGFibGUgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IEFycmF5QnVmZmVyLlxuICovXG5CdWZmZXIucHJvdG90eXBlLnRvQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgICAgcmV0dXJuIChuZXcgQnVmZmVyKHRoaXMpKS5idWZmZXJcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJ1ZiA9IG5ldyBVaW50OEFycmF5KHRoaXMubGVuZ3RoKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJ1Zi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSlcbiAgICAgICAgYnVmW2ldID0gdGhpc1tpXVxuICAgICAgcmV0dXJuIGJ1Zi5idWZmZXJcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCdWZmZXIudG9BcnJheUJ1ZmZlciBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcicpXG4gIH1cbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG52YXIgQlAgPSBCdWZmZXIucHJvdG90eXBlXG5cbi8qKlxuICogQXVnbWVudCBhIFVpbnQ4QXJyYXkgKmluc3RhbmNlKiAobm90IHRoZSBVaW50OEFycmF5IGNsYXNzISkgd2l0aCBCdWZmZXIgbWV0aG9kc1xuICovXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5faXNCdWZmZXIgPSB0cnVlXG5cbiAgLy8gc2F2ZSByZWZlcmVuY2UgdG8gb3JpZ2luYWwgVWludDhBcnJheSBnZXQvc2V0IG1ldGhvZHMgYmVmb3JlIG92ZXJ3cml0aW5nXG4gIGFyci5fZ2V0ID0gYXJyLmdldFxuICBhcnIuX3NldCA9IGFyci5zZXRcblxuICAvLyBkZXByZWNhdGVkLCB3aWxsIGJlIHJlbW92ZWQgaW4gbm9kZSAwLjEzK1xuICBhcnIuZ2V0ID0gQlAuZ2V0XG4gIGFyci5zZXQgPSBCUC5zZXRcblxuICBhcnIud3JpdGUgPSBCUC53cml0ZVxuICBhcnIudG9TdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9Mb2NhbGVTdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9KU09OID0gQlAudG9KU09OXG4gIGFyci5jb3B5ID0gQlAuY29weVxuICBhcnIuc2xpY2UgPSBCUC5zbGljZVxuICBhcnIucmVhZFVJbnQ4ID0gQlAucmVhZFVJbnQ4XG4gIGFyci5yZWFkVUludDE2TEUgPSBCUC5yZWFkVUludDE2TEVcbiAgYXJyLnJlYWRVSW50MTZCRSA9IEJQLnJlYWRVSW50MTZCRVxuICBhcnIucmVhZFVJbnQzMkxFID0gQlAucmVhZFVJbnQzMkxFXG4gIGFyci5yZWFkVUludDMyQkUgPSBCUC5yZWFkVUludDMyQkVcbiAgYXJyLnJlYWRJbnQ4ID0gQlAucmVhZEludDhcbiAgYXJyLnJlYWRJbnQxNkxFID0gQlAucmVhZEludDE2TEVcbiAgYXJyLnJlYWRJbnQxNkJFID0gQlAucmVhZEludDE2QkVcbiAgYXJyLnJlYWRJbnQzMkxFID0gQlAucmVhZEludDMyTEVcbiAgYXJyLnJlYWRJbnQzMkJFID0gQlAucmVhZEludDMyQkVcbiAgYXJyLnJlYWRGbG9hdExFID0gQlAucmVhZEZsb2F0TEVcbiAgYXJyLnJlYWRGbG9hdEJFID0gQlAucmVhZEZsb2F0QkVcbiAgYXJyLnJlYWREb3VibGVMRSA9IEJQLnJlYWREb3VibGVMRVxuICBhcnIucmVhZERvdWJsZUJFID0gQlAucmVhZERvdWJsZUJFXG4gIGFyci53cml0ZVVJbnQ4ID0gQlAud3JpdGVVSW50OFxuICBhcnIud3JpdGVVSW50MTZMRSA9IEJQLndyaXRlVUludDE2TEVcbiAgYXJyLndyaXRlVUludDE2QkUgPSBCUC53cml0ZVVJbnQxNkJFXG4gIGFyci53cml0ZVVJbnQzMkxFID0gQlAud3JpdGVVSW50MzJMRVxuICBhcnIud3JpdGVVSW50MzJCRSA9IEJQLndyaXRlVUludDMyQkVcbiAgYXJyLndyaXRlSW50OCA9IEJQLndyaXRlSW50OFxuICBhcnIud3JpdGVJbnQxNkxFID0gQlAud3JpdGVJbnQxNkxFXG4gIGFyci53cml0ZUludDE2QkUgPSBCUC53cml0ZUludDE2QkVcbiAgYXJyLndyaXRlSW50MzJMRSA9IEJQLndyaXRlSW50MzJMRVxuICBhcnIud3JpdGVJbnQzMkJFID0gQlAud3JpdGVJbnQzMkJFXG4gIGFyci53cml0ZUZsb2F0TEUgPSBCUC53cml0ZUZsb2F0TEVcbiAgYXJyLndyaXRlRmxvYXRCRSA9IEJQLndyaXRlRmxvYXRCRVxuICBhcnIud3JpdGVEb3VibGVMRSA9IEJQLndyaXRlRG91YmxlTEVcbiAgYXJyLndyaXRlRG91YmxlQkUgPSBCUC53cml0ZURvdWJsZUJFXG4gIGFyci5maWxsID0gQlAuZmlsbFxuICBhcnIuaW5zcGVjdCA9IEJQLmluc3BlY3RcbiAgYXJyLnRvQXJyYXlCdWZmZXIgPSBCUC50b0FycmF5QnVmZmVyXG5cbiAgcmV0dXJuIGFyclxufVxuXG4vLyBzbGljZShzdGFydCwgZW5kKVxuZnVuY3Rpb24gY2xhbXAgKGluZGV4LCBsZW4sIGRlZmF1bHRWYWx1ZSkge1xuICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykgcmV0dXJuIGRlZmF1bHRWYWx1ZVxuICBpbmRleCA9IH5+aW5kZXg7ICAvLyBDb2VyY2UgdG8gaW50ZWdlci5cbiAgaWYgKGluZGV4ID49IGxlbikgcmV0dXJuIGxlblxuICBpZiAoaW5kZXggPj0gMCkgcmV0dXJuIGluZGV4XG4gIGluZGV4ICs9IGxlblxuICBpZiAoaW5kZXggPj0gMCkgcmV0dXJuIGluZGV4XG4gIHJldHVybiAwXG59XG5cbmZ1bmN0aW9uIGNvZXJjZSAobGVuZ3RoKSB7XG4gIC8vIENvZXJjZSBsZW5ndGggdG8gYSBudW1iZXIgKHBvc3NpYmx5IE5hTiksIHJvdW5kIHVwXG4gIC8vIGluIGNhc2UgaXQncyBmcmFjdGlvbmFsIChlLmcuIDEyMy40NTYpIHRoZW4gZG8gYVxuICAvLyBkb3VibGUgbmVnYXRlIHRvIGNvZXJjZSBhIE5hTiB0byAwLiBFYXN5LCByaWdodD9cbiAgbGVuZ3RoID0gfn5NYXRoLmNlaWwoK2xlbmd0aClcbiAgcmV0dXJuIGxlbmd0aCA8IDAgPyAwIDogbGVuZ3RoXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkgKHN1YmplY3QpIHtcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChzdWJqZWN0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzdWJqZWN0KSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICB9KShzdWJqZWN0KVxufVxuXG5mdW5jdGlvbiBpc0FycmF5aXNoIChzdWJqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5KHN1YmplY3QpIHx8IEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSB8fFxuICAgICAgc3ViamVjdCAmJiB0eXBlb2Ygc3ViamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIHR5cGVvZiBzdWJqZWN0Lmxlbmd0aCA9PT0gJ251bWJlcidcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIHZhciBiID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBpZiAoYiA8PSAweDdGKVxuICAgICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpXG4gICAgZWxzZSB7XG4gICAgICB2YXIgc3RhcnQgPSBpXG4gICAgICBpZiAoYiA+PSAweEQ4MDAgJiYgYiA8PSAweERGRkYpIGkrK1xuICAgICAgdmFyIGggPSBlbmNvZGVVUklDb21wb25lbnQoc3RyLnNsaWNlKHN0YXJ0LCBpKzEpKS5zdWJzdHIoMSkuc3BsaXQoJyUnKVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBoLmxlbmd0aDsgaisrKVxuICAgICAgICBieXRlQXJyYXkucHVzaChwYXJzZUludChoW2pdLCAxNikpXG4gICAgfVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KHN0cilcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBwb3NcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSlcbiAgICAgIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gZGVjb2RlVXRmOENoYXIgKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweEZGRkQpIC8vIFVURiA4IGludmFsaWQgY2hhclxuICB9XG59XG5cbi8qXG4gKiBXZSBoYXZlIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSB2YWx1ZSBpcyBhIHZhbGlkIGludGVnZXIuIFRoaXMgbWVhbnMgdGhhdCBpdFxuICogaXMgbm9uLW5lZ2F0aXZlLiBJdCBoYXMgbm8gZnJhY3Rpb25hbCBjb21wb25lbnQgYW5kIHRoYXQgaXQgZG9lcyBub3RcbiAqIGV4Y2VlZCB0aGUgbWF4aW11bSBhbGxvd2VkIHZhbHVlLlxuICovXG5mdW5jdGlvbiB2ZXJpZnVpbnQgKHZhbHVlLCBtYXgpIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlID49IDAsICdzcGVjaWZpZWQgYSBuZWdhdGl2ZSB2YWx1ZSBmb3Igd3JpdGluZyBhbiB1bnNpZ25lZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBpcyBsYXJnZXIgdGhhbiBtYXhpbXVtIHZhbHVlIGZvciB0eXBlJylcbiAgYXNzZXJ0KE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZSwgJ3ZhbHVlIGhhcyBhIGZyYWN0aW9uYWwgY29tcG9uZW50Jylcbn1cblxuZnVuY3Rpb24gdmVyaWZzaW50ICh2YWx1ZSwgbWF4LCBtaW4pIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGxhcmdlciB0aGFuIG1heGltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA+PSBtaW4sICd2YWx1ZSBzbWFsbGVyIHRoYW4gbWluaW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZSwgJ3ZhbHVlIGhhcyBhIGZyYWN0aW9uYWwgY29tcG9uZW50Jylcbn1cblxuZnVuY3Rpb24gdmVyaWZJRUVFNzU0ICh2YWx1ZSwgbWF4LCBtaW4pIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGxhcmdlciB0aGFuIG1heGltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA+PSBtaW4sICd2YWx1ZSBzbWFsbGVyIHRoYW4gbWluaW11bSBhbGxvd2VkIHZhbHVlJylcbn1cblxuZnVuY3Rpb24gYXNzZXJ0ICh0ZXN0LCBtZXNzYWdlKSB7XG4gIGlmICghdGVzdCkgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgfHwgJ0ZhaWxlZCBhc3NlcnRpb24nKVxufVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIis3WkpwMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qc1wiLFwiLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlclwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbnZhciBsb29rdXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbjsoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gIHZhciBBcnIgPSAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKVxuICAgID8gVWludDhBcnJheVxuICAgIDogQXJyYXlcblxuXHR2YXIgUExVUyAgID0gJysnLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIICA9ICcvJy5jaGFyQ29kZUF0KDApXG5cdHZhciBOVU1CRVIgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgTE9XRVIgID0gJ2EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFVQUEVSICA9ICdBJy5jaGFyQ29kZUF0KDApXG5cdHZhciBQTFVTX1VSTF9TQUZFID0gJy0nLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIX1VSTF9TQUZFID0gJ18nLmNoYXJDb2RlQXQoMClcblxuXHRmdW5jdGlvbiBkZWNvZGUgKGVsdCkge1xuXHRcdHZhciBjb2RlID0gZWx0LmNoYXJDb2RlQXQoMClcblx0XHRpZiAoY29kZSA9PT0gUExVUyB8fFxuXHRcdCAgICBjb2RlID09PSBQTFVTX1VSTF9TQUZFKVxuXHRcdFx0cmV0dXJuIDYyIC8vICcrJ1xuXHRcdGlmIChjb2RlID09PSBTTEFTSCB8fFxuXHRcdCAgICBjb2RlID09PSBTTEFTSF9VUkxfU0FGRSlcblx0XHRcdHJldHVybiA2MyAvLyAnLydcblx0XHRpZiAoY29kZSA8IE5VTUJFUilcblx0XHRcdHJldHVybiAtMSAvL25vIG1hdGNoXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIgKyAxMClcblx0XHRcdHJldHVybiBjb2RlIC0gTlVNQkVSICsgMjYgKyAyNlxuXHRcdGlmIChjb2RlIDwgVVBQRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gVVBQRVJcblx0XHRpZiAoY29kZSA8IExPV0VSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIExPV0VSICsgMjZcblx0fVxuXG5cdGZ1bmN0aW9uIGI2NFRvQnl0ZUFycmF5IChiNjQpIHtcblx0XHR2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuXG5cdFx0aWYgKGI2NC5sZW5ndGggJSA0ID4gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0Jylcblx0XHR9XG5cblx0XHQvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuXHRcdC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcblx0XHQvLyByZXByZXNlbnQgb25lIGJ5dGVcblx0XHQvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcblx0XHQvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG5cdFx0dmFyIGxlbiA9IGI2NC5sZW5ndGhcblx0XHRwbGFjZUhvbGRlcnMgPSAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMikgPyAyIDogJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDEpID8gMSA6IDBcblxuXHRcdC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuXHRcdGFyciA9IG5ldyBBcnIoYjY0Lmxlbmd0aCAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKVxuXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuXHRcdGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gYjY0Lmxlbmd0aCAtIDQgOiBiNjQubGVuZ3RoXG5cblx0XHR2YXIgTCA9IDBcblxuXHRcdGZ1bmN0aW9uIHB1c2ggKHYpIHtcblx0XHRcdGFycltMKytdID0gdlxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTgpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgMTIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPDwgNikgfCBkZWNvZGUoYjY0LmNoYXJBdChpICsgMykpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDAwMCkgPj4gMTYpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDApID4+IDgpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpID4+IDQpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTApIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgNCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA+PiAyKVxuXHRcdFx0cHVzaCgodG1wID4+IDgpICYgMHhGRilcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyXG5cdH1cblxuXHRmdW5jdGlvbiB1aW50OFRvQmFzZTY0ICh1aW50OCkge1xuXHRcdHZhciBpLFxuXHRcdFx0ZXh0cmFCeXRlcyA9IHVpbnQ4Lmxlbmd0aCAlIDMsIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG5cdFx0XHRvdXRwdXQgPSBcIlwiLFxuXHRcdFx0dGVtcCwgbGVuZ3RoXG5cblx0XHRmdW5jdGlvbiBlbmNvZGUgKG51bSkge1xuXHRcdFx0cmV0dXJuIGxvb2t1cC5jaGFyQXQobnVtKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKG51bSA+PiAxOCAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiAxMiAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiA2ICYgMHgzRikgKyBlbmNvZGUobnVtICYgMHgzRilcblx0XHR9XG5cblx0XHQvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG5cdFx0Zm9yIChpID0gMCwgbGVuZ3RoID0gdWludDgubGVuZ3RoIC0gZXh0cmFCeXRlczsgaSA8IGxlbmd0aDsgaSArPSAzKSB7XG5cdFx0XHR0ZW1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuXHRcdFx0b3V0cHV0ICs9IHRyaXBsZXRUb0Jhc2U2NCh0ZW1wKVxuXHRcdH1cblxuXHRcdC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcblx0XHRzd2l0Y2ggKGV4dHJhQnl0ZXMpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGVtcCA9IHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAyKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9PSdcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGVtcCA9ICh1aW50OFt1aW50OC5sZW5ndGggLSAyXSA8PCA4KSArICh1aW50OFt1aW50OC5sZW5ndGggLSAxXSlcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDEwKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wID4+IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCAyKSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPSdcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0XG5cdH1cblxuXHRleHBvcnRzLnRvQnl0ZUFycmF5ID0gYjY0VG9CeXRlQXJyYXlcblx0ZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gdWludDhUb0Jhc2U2NFxufSh0eXBlb2YgZXhwb3J0cyA9PT0gJ3VuZGVmaW5lZCcgPyAodGhpcy5iYXNlNjRqcyA9IHt9KSA6IGV4cG9ydHMpKVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIis3WkpwMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanNcIixcIi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9saWJcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5leHBvcnRzLnJlYWQgPSBmdW5jdGlvbihidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIG5CaXRzID0gLTcsXG4gICAgICBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDAsXG4gICAgICBkID0gaXNMRSA/IC0xIDogMSxcbiAgICAgIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV07XG5cbiAgaSArPSBkO1xuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBzID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gZUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIGUgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBtTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KTtcblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXM7XG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KTtcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pO1xuICAgIGUgPSBlIC0gZUJpYXM7XG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbik7XG59O1xuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24oYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGMsXG4gICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApLFxuICAgICAgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpLFxuICAgICAgZCA9IGlzTEUgPyAxIDogLTEsXG4gICAgICBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwO1xuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpO1xuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwO1xuICAgIGUgPSBlTWF4O1xuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKTtcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS07XG4gICAgICBjICo9IDI7XG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcyk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrO1xuICAgICAgYyAvPSAyO1xuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDA7XG4gICAgICBlID0gZU1heDtcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gZSArIGVCaWFzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gMDtcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KTtcblxuICBlID0gKGUgPDwgbUxlbikgfCBtO1xuICBlTGVuICs9IG1MZW47XG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCk7XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4O1xufTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIrN1pKcDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanNcIixcIi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2llZWU3NTRcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5wcm9jZXNzLm5leHRUaWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FuU2V0SW1tZWRpYXRlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cuc2V0SW1tZWRpYXRlO1xuICAgIHZhciBjYW5Qb3N0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cucG9zdE1lc3NhZ2UgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA7XG5cbiAgICBpZiAoY2FuU2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZikgeyByZXR1cm4gd2luZG93LnNldEltbWVkaWF0ZShmKSB9O1xuICAgIH1cblxuICAgIGlmIChjYW5Qb3N0KSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IFtdO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGV2LnNvdXJjZTtcbiAgICAgICAgICAgIGlmICgoc291cmNlID09PSB3aW5kb3cgfHwgc291cmNlID09PSBudWxsKSAmJiBldi5kYXRhID09PSAncHJvY2Vzcy10aWNrJykge1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKCdwcm9jZXNzLXRpY2snLCAnKicpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9O1xufSkoKTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIrN1pKcDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIixcIi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzXCIpIl19
