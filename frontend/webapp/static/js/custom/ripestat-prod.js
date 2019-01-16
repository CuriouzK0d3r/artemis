var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var e=0;return function(){return e<a.length?{done:!1,value:a[e++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var e="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return e?e.call(a):$jscomp.arrayIterator(a)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,e,b){a!=Array.prototype&&a!=Object.prototype&&(a[e]=b.value)};
$jscomp.polyfill=function(a,e,b,c){if(e){b=$jscomp.global;a=a.split(".");for(c=0;c<a.length-1;c++){var d=a[c];d in b||(b[d]={});b=b[d]}a=a[a.length-1];c=b[a];e=e(c);e!=c&&null!=e&&$jscomp.defineProperty(b,a,{configurable:!0,writable:!0,value:e})}};$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.polyfill("Promise",function(a){function e(){this.batch_=null}function b(a){return a instanceof d?a:new d(function(g,f){g(a)})}if(a&&!$jscomp.FORCE_POLYFILL_PROMISE)return a;e.prototype.asyncExecute=function(a){null==this.batch_&&(this.batch_=[],this.asyncExecuteBatch_());this.batch_.push(a);return this};e.prototype.asyncExecuteBatch_=function(){var a=this;this.asyncExecuteFunction(function(){a.executeBatch_()})};var c=$jscomp.global.setTimeout;e.prototype.asyncExecuteFunction=function(a){c(a,
0)};e.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var a=this.batch_;this.batch_=[];for(var b=0;b<a.length;++b){var f=a[b];a[b]=null;try{f()}catch(l){this.asyncThrow_(l)}}}this.batch_=null};e.prototype.asyncThrow_=function(a){this.asyncExecuteFunction(function(){throw a;})};var d=function(a){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];var b=this.createResolveAndReject_();try{a(b.resolve,b.reject)}catch(f){b.reject(f)}};d.prototype.createResolveAndReject_=
function(){function a(a){return function(g){f||(f=!0,a.call(b,g))}}var b=this,f=!1;return{resolve:a(this.resolveTo_),reject:a(this.reject_)}};d.prototype.resolveTo_=function(a){if(a===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof d)this.settleSameAsPromise_(a);else{a:switch(typeof a){case "object":var b=null!=a;break a;case "function":b=!0;break a;default:b=!1}b?this.resolveToNonPromiseObj_(a):this.fulfill_(a)}};d.prototype.resolveToNonPromiseObj_=function(a){var b=
void 0;try{b=a.then}catch(f){this.reject_(f);return}"function"==typeof b?this.settleSameAsThenable_(b,a):this.fulfill_(a)};d.prototype.reject_=function(a){this.settle_(2,a)};d.prototype.fulfill_=function(a){this.settle_(1,a)};d.prototype.settle_=function(a,b){if(0!=this.state_)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.state_);this.state_=a;this.result_=b;this.executeOnSettledCallbacks_()};d.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var a=
0;a<this.onSettledCallbacks_.length;++a)h.asyncExecute(this.onSettledCallbacks_[a]);this.onSettledCallbacks_=null}};var h=new e;d.prototype.settleSameAsPromise_=function(a){var b=this.createResolveAndReject_();a.callWhenSettled_(b.resolve,b.reject)};d.prototype.settleSameAsThenable_=function(a,b){var f=this.createResolveAndReject_();try{a.call(b,f.resolve,f.reject)}catch(l){f.reject(l)}};d.prototype.then=function(a,b){function f(a,f){return"function"==typeof a?function(f){try{c(a(f))}catch(n){e(n)}}:
f}var c,e,g=new d(function(a,f){c=a;e=f});this.callWhenSettled_(f(a,c),f(b,e));return g};d.prototype.catch=function(a){return this.then(void 0,a)};d.prototype.callWhenSettled_=function(a,b){function f(){switch(c.state_){case 1:a(c.result_);break;case 2:b(c.result_);break;default:throw Error("Unexpected state: "+c.state_);}}var c=this;null==this.onSettledCallbacks_?h.asyncExecute(f):this.onSettledCallbacks_.push(f)};d.resolve=b;d.reject=function(a){return new d(function(b,f){f(a)})};d.race=function(a){return new d(function(c,
f){for(var e=$jscomp.makeIterator(a),d=e.next();!d.done;d=e.next())b(d.value).callWhenSettled_(c,f)})};d.all=function(a){var c=$jscomp.makeIterator(a),f=c.next();return f.done?b([]):new d(function(a,e){function d(f){return function(b){l[f]=b;m--;0==m&&a(l)}}var l=[],m=0;do l.push(void 0),m++,b(f.value).callWhenSettled_(d(l.length-1),e),f=c.next();while(!f.done)})};return d},"es6","es3");
$jscomp.checkEs6ConformanceViaProxy=function(){try{var a={},e=Object.create(new $jscomp.global.Proxy(a,{get:function(b,c,d){return b==a&&"q"==c&&d==e}}));return!0===e.q}catch(b){return!1}};$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS=!1;$jscomp.ES6_CONFORMANCE=$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS&&$jscomp.checkEs6ConformanceViaProxy();$jscomp.SYMBOL_PREFIX="jscomp_symbol_";$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};
$jscomp.Symbol=function(){var a=0;return function(e){return $jscomp.SYMBOL_PREFIX+(e||"")+a++}}();$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}});$jscomp.initSymbolIterator=function(){}};
$jscomp.initSymbolAsyncIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.asyncIterator;a||(a=$jscomp.global.Symbol.asyncIterator=$jscomp.global.Symbol("asyncIterator"));$jscomp.initSymbolAsyncIterator=function(){}};$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.owns=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)};
$jscomp.polyfill("WeakMap",function(a){function e(){if(!a||!Object.seal)return!1;try{var f=Object.seal({}),b=Object.seal({}),c=new a([[f,2],[b,3]]);if(2!=c.get(f)||3!=c.get(b))return!1;c.delete(f);c.set(b,4);return!c.has(f)&&4==c.get(b)}catch(q){return!1}}function b(){}function c(a){if(!$jscomp.owns(a,h)){var f=new b;$jscomp.defineProperty(a,h,{value:f})}}function d(a){var f=Object[a];f&&(Object[a]=function(a){if(a instanceof b)return a;c(a);return f(a)})}if($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS){if(a&&
$jscomp.ES6_CONFORMANCE)return a}else if(e())return a;var h="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var g=0,k=function(a){this.id_=(g+=Math.random()+1).toString();if(a){a=$jscomp.makeIterator(a);for(var f;!(f=a.next()).done;)f=f.value,this.set(f[0],f[1])}};k.prototype.set=function(a,b){c(a);if(!$jscomp.owns(a,h))throw Error("WeakMap key fail: "+a);a[h][this.id_]=b;return this};k.prototype.get=function(a){return $jscomp.owns(a,h)?a[h][this.id_]:void 0};k.prototype.has=
function(a){return $jscomp.owns(a,h)&&$jscomp.owns(a[h],this.id_)};k.prototype.delete=function(a){return $jscomp.owns(a,h)&&$jscomp.owns(a[h],this.id_)?delete a[h][this.id_]:!1};return k},"es6","es3");$jscomp.MapEntry=function(){};
$jscomp.polyfill("Map",function(a){function e(){if($jscomp.ASSUME_NO_NATIVE_MAP||!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a($jscomp.makeIterator([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var e=c.entries(),d=e.next();if(d.done||d.value[0]!=b||"s"!=d.value[1])return!1;d=e.next();return d.done||4!=d.value[0].x||"t"!=d.value[1]||!e.next().done?!1:!0}catch(p){return!1}}
if($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS){if(a&&$jscomp.ES6_CONFORMANCE)return a}else if(e())return a;$jscomp.initSymbolIterator();var b=new WeakMap,c=function(a){this.data_={};this.head_=g();this.size=0;if(a){a=$jscomp.makeIterator(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}};c.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.data_[c.id]=[]);c.entry?c.entry.value=b:(c.entry={next:this.head_,previous:this.head_.previous,head:this.head_,key:a,
value:b},c.list.push(c.entry),this.head_.previous.next=c.entry,this.head_.previous=c.entry,this.size++);return this};c.prototype.delete=function(a){a=d(this,a);return a.entry&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.data_[a.id],a.entry.previous.next=a.entry.next,a.entry.next.previous=a.entry.previous,a.entry.head=null,this.size--,!0):!1};c.prototype.clear=function(){this.data_={};this.head_=this.head_.previous=g();this.size=0};c.prototype.has=function(a){return!!d(this,a).entry};
c.prototype.get=function(a){return(a=d(this,a).entry)&&a.value};c.prototype.entries=function(){return h(this,function(a){return[a.key,a.value]})};c.prototype.keys=function(){return h(this,function(a){return a.key})};c.prototype.values=function(){return h(this,function(a){return a.value})};c.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};c.prototype[Symbol.iterator]=c.prototype.entries;var d=function(a,c){var d=c&&typeof c;"object"==
d||"function"==d?b.has(c)?d=b.get(c):(d=""+ ++k,b.set(c,d)):d="p_"+c;var e=a.data_[d];if(e&&$jscomp.owns(a.data_,d))for(a=0;a<e.length;a++){var f=e[a];if(c!==c&&f.key!==f.key||c===f.key)return{id:d,list:e,index:a,entry:f}}return{id:d,list:e,index:-1,entry:void 0}},h=function(a,b){var c=a.head_;return $jscomp.iteratorPrototype(function(){if(c){for(;c.head!=a.head_;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})},g=function(){var a={};return a.previous=
a.next=a.head=a},k=0;return c},"es6","es3");
$jscomp.polyfill("Set",function(a){function e(){if($jscomp.ASSUME_NO_NATIVE_SET||!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a($jscomp.makeIterator([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),g=e.next();if(g.done||g.value[0]!=b||g.value[1]!=b)return!1;g=e.next();return g.done||g.value[0]==b||4!=g.value[0].x||g.value[1]!=g.value[0]?!1:e.next().done}catch(k){return!1}}
if($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS){if(a&&$jscomp.ES6_CONFORMANCE)return a}else if(e())return a;$jscomp.initSymbolIterator();var b=function(a){this.map_=new Map;if(a){a=$jscomp.makeIterator(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.map_.size};b.prototype.add=function(a){a=0===a?0:a;this.map_.set(a,a);this.size=this.map_.size;return this};b.prototype.delete=function(a){a=this.map_.delete(a);this.size=this.map_.size;return a};b.prototype.clear=function(){this.map_.clear();
this.size=0};b.prototype.has=function(a){return this.map_.has(a)};b.prototype.entries=function(){return this.map_.entries()};b.prototype.values=function(){return this.map_.values()};b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.map_.forEach(function(d){return a.call(b,d,d,c)})};return b},"es6","es3");
$jscomp.polyfill("Object.is",function(a){return a?a:function(a,b){return a===b?0!==a||1/a===1/b:a!==a&&b!==b}},"es6","es3");$jscomp.polyfill("Array.prototype.includes",function(a){return a?a:function(a,b){var c=this;c instanceof String&&(c=String(c));var d=c.length;b=b||0;for(0>b&&(b=Math.max(b+d,0));b<d;b++){var e=c[b];if(e===a||Object.is(e,a))return!0}return!1}},"es7","es3");
$jscomp.checkStringArgs=function(a,e,b){if(null==a)throw new TypeError("The 'this' value for String.prototype."+b+" must not be null or undefined");if(e instanceof RegExp)throw new TypeError("First argument to String.prototype."+b+" must not be a regular expression");return a+""};$jscomp.polyfill("String.prototype.includes",function(a){return a?a:function(a,b){return-1!==$jscomp.checkStringArgs(this,a,"includes").indexOf(a,b||0)}},"es6","es3");
$jscomp.polyfill("Array.from",function(a){return a?a:function(a,b,c){b=null!=b?b:function(a){return a};var d=[],e="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if("function"==typeof e){a=e.call(a);for(var g=0;!(e=a.next()).done;)d.push(b.call(c,e.value,g++))}else for(e=a.length,g=0;g<e;g++)d.push(b.call(c,a[g],g));return d}},"es6","es3");var cachedData={};
function getName(a){return fetch("https://stat.ripe.net/data/as-names/data.json?resource=AS"+a).then(function(a){return a.json()})}function getCountry(a){return fetch("https://stat.ripe.net/data/geoloc/data.json?resource=AS"+a).then(function(a){return a.json()})}function getData(a){return Promise.all([getName(a),getCountry(a)])}
function asn_map_to_name(){$("cc_as").mouseover(function(){var a=this;$(this).attr("mouse_hovered","true");if(!$(this).is("[data-toggle]")){var e=parseInt($(this).text()),b=$(this).text();if(b in cachedData){var c='<p class="tooltip-custom-margin">ASN: '+b+" (ASN-DOT: "+cachedData[b][2]+")</br>";c+="Name: "+cachedData[b][0]+"</br>";c+="Type: "+cachedData[b][3]+"</br>";c+="Countries operating: "+cachedData[b][1]+"</p>";$(this).prop("title",c);$(this).attr("data-toggle","tooltip");$(this).attr("data-html",
"true");$(this).attr("data-placement","top");$(this).tooltip("show")}else{var d=[];!isNaN(e)&&0<e&&4294967295>e?getData(e).then(function(c){var g=$jscomp.makeIterator(c);c=g.next().value;g=g.next().value;d[0]=c.data.names[e];c=new Set;for(var h in g.data.locations)g.data.locations[h].country.includes("-")?c.add(g.data.locations[h].country.split("-")[0]):c.add(g.data.locations[h].country);d[1]=Array.from(c).join(", ");d[2]=parseInt(e/65536)+"."+e%65536;d[3]=64512<=e&&65534>=e||42E8<=e&&4294967294>=
e?"Private":"Non-Private";cachedData[b]=d;h='<p class="tooltip-custom-margin">ASN: '+$(a).text()+" (ASN-DOT: "+cachedData[b][2]+")</br>";h+="Name: "+cachedData[b][0]+"</br>";h+="Type: "+cachedData[b][3]+"</br>";h+="Countries operating: "+cachedData[b][1]+"</p>";$(a).prop("title",h);$(a).attr("data-toggle","tooltip");$(a).attr("data-html","true");$(a).attr("data-placement","top");"true"===$(a).attr("mouse_hovered")?$(a).tooltip("show"):$(a).tooltip()}):(d[0]="Not a valid ASN",d[1]="None",d[2]="None",
d[3]="Unknown",cachedData[b]=d,c='<p class="tooltip-custom-margin">ASN: '+$(this).text()+" (ASN-DOT: "+cachedData[b][2]+" )</br>",c+="Name: "+cachedData[b][0]+"</br>",c+="Type: "+cachedData[b][3]+"</br>",c+="Countries operating: "+cachedData[b][1]+"</p>",$(this).prop("title",c),$(this).attr("data-toggle","tooltip"),$(this).attr("data-html","true"),$(this).attr("data-placement","top"),$(this).tooltip("show"))}}});$("cc_as").mouseout(function(){$(this).attr("mouse_hovered","false");$(this).tooltip("hide");
$(".tooltip").tooltip("hide")})};