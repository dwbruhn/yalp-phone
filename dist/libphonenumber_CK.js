var NS={};(function(){for(var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},k="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,l=["String","prototype","repeat"],ba=0;ba<l.length-1;ba++){var ca=l[ba];ca in k||(k[ca]={});k=k[ca]}
var da=l[l.length-1],ea=k[da],fa=ea?ea:function(a){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");b=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var c="";a;)if(a&1&&(c+=b),a>>>=1)b+=b;return c};fa!=ea&&null!=fa&&aa(k,da,{configurable:!0,writable:!0,value:fa});var ga=this;function n(a){return"string"==typeof a}
function p(a,b){var c=a.split("."),d=ga;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}function q(a,b){function c(){}c.prototype=b.prototype;a.na=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ma=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};function r(a,b){null!=a&&this.a.apply(this,arguments)}r.prototype.b="";r.prototype.set=function(a){this.b=""+a};r.prototype.a=function(a,b,c){this.b+=String(a);if(null!=b)for(var d=1;d<arguments.length;d++)this.b+=arguments[d];return this};function t(a){a.b=""}r.prototype.toString=function(){return this.b};var ha=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(n(a))return n(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ia=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=n(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var m=g[h];b.call(c,m,h,a)&&(e[f++]=m)}return e};
function ja(a,b){a.sort(b||ka)}function ka(a,b){return a>b?1:a<b?-1:0};function la(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};function ma(a,b){this.b=a;this.a={};for(var c=0;c<b.length;c++){var d=b[c];this.a[d.a]=d}}function na(a){a=la(a.a);ja(a,function(a,c){return a.a-c.a});return a};function oa(a,b){this.a=a;this.g=!!b.fa;this.b=b.c;this.j=b.type;this.i=!1;switch(this.b){case pa:case qa:case ra:case sa:case ta:case ua:case va:this.i=!0}this.f=b.defaultValue}var va=1,ua=2,pa=3,qa=4,ra=6,sa=16,ta=18;function u(){this.b={};this.f=this.h().a;this.a=this.g=null}u.prototype.has=function(a){return v(this,a.a)};u.prototype.get=function(a,b){return x(this,a.a,b)};u.prototype.set=function(a,b){y(this,a.a,b)};
function wa(a,b){for(var c=na(a.h()),d=0;d<c.length;d++){var e=c[d],f=e.a;if(v(b,f)){a.a&&delete a.a[e.a];var g=11==e.b||10==e.b;if(e.g)for(var e=z(b,f)||[],h=0;h<e.length;h++){var m=a,w=f,R=g?e[h].clone():e[h];m.b[w]||(m.b[w]=[]);m.b[w].push(R);m.a&&delete m.a[w]}else e=z(b,f),g?(g=z(a,f))?wa(g,e):y(a,f,e.clone()):y(a,f,e)}}}u.prototype.clone=function(){var a=new this.constructor;a!=this&&(a.b={},a.a&&(a.a={}),wa(a,this));return a};function v(a,b){return null!=a.b[b]}
function z(a,b){var c=a.b[b];if(null==c)return null;if(a.g){if(!(b in a.a)){var d=a.g,e=a.f[b];if(null!=c)if(e.g){for(var f=[],g=0;g<c.length;g++)f[g]=d.a(e,c[g]);c=f}else c=d.a(e,c);return a.a[b]=c}return a.a[b]}return c}function x(a,b,c){var d=z(a,b);return a.f[b].g?d[c||0]:d}function A(a,b){var c;if(v(a,b))c=x(a,b,void 0);else a:{c=a.f[b];if(void 0===c.f){var d=c.j;if(d===Boolean)c.f=!1;else if(d===Number)c.f=0;else if(d===String)c.f=c.i?"0":"";else{c=new d;break a}}c=c.f}return c}
function B(a,b){return a.f[b].g?v(a,b)?a.b[b].length:0:v(a,b)?1:0}function y(a,b,c){a.b[b]=c;a.a&&(a.a[b]=c)}function xa(a,b){delete a.b[b];a.a&&delete a.a[b]}function C(a,b){var c=[],d;for(d in b)0!=d&&c.push(new oa(d,b[d]));return new ma(a,c)};/*

 Protocol Buffer 2 Copyright 2008 Google Inc.
 All other code copyright its respective owners.
 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function D(){u.call(this)}var ya;q(D,u);function E(){u.call(this)}var za;q(E,u);function F(){u.call(this)}var Aa;q(F,u);
D.prototype.h=function(){ya||(ya=C(D,{0:{name:"NumberFormat",ea:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,c:9,type:String},2:{name:"format",required:!0,c:9,type:String},3:{name:"leading_digits_pattern",fa:!0,c:9,type:String},4:{name:"national_prefix_formatting_rule",c:9,type:String},6:{name:"national_prefix_optional_when_formatting",c:8,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",c:9,type:String}}));return ya};D.ctor=D;D.ctor.h=D.prototype.h;
E.prototype.h=function(){za||(za=C(E,{0:{name:"PhoneNumberDesc",ea:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",c:9,type:String},3:{name:"possible_number_pattern",c:9,type:String},6:{name:"example_number",c:9,type:String},7:{name:"national_number_matcher_data",c:12,type:String},8:{name:"possible_number_matcher_data",c:12,type:String}}));return za};E.ctor=E;E.ctor.h=E.prototype.h;
F.prototype.h=function(){Aa||(Aa=C(F,{0:{name:"PhoneMetadata",ea:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",c:11,type:E},2:{name:"fixed_line",c:11,type:E},3:{name:"mobile",c:11,type:E},4:{name:"toll_free",c:11,type:E},5:{name:"premium_rate",c:11,type:E},6:{name:"shared_cost",c:11,type:E},7:{name:"personal_number",c:11,type:E},8:{name:"voip",c:11,type:E},21:{name:"pager",c:11,type:E},25:{name:"uan",c:11,type:E},27:{name:"emergency",c:11,type:E},28:{name:"voicemail",c:11,type:E},24:{name:"no_international_dialling",
c:11,type:E},9:{name:"id",required:!0,c:9,type:String},10:{name:"country_code",c:5,type:Number},11:{name:"international_prefix",c:9,type:String},17:{name:"preferred_international_prefix",c:9,type:String},12:{name:"national_prefix",c:9,type:String},13:{name:"preferred_extn_prefix",c:9,type:String},15:{name:"national_prefix_for_parsing",c:9,type:String},16:{name:"national_prefix_transform_rule",c:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",c:8,defaultValue:!1,type:Boolean},19:{name:"number_format",
fa:!0,c:11,type:D},20:{name:"intl_number_format",fa:!0,c:11,type:D},22:{name:"main_country_for_code",c:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",c:9,type:String},26:{name:"leading_zero_possible",c:8,defaultValue:!1,type:Boolean}}));return Aa};F.ctor=F;F.ctor.h=F.prototype.h;function G(){u.call(this)}var Ba;q(G,u);var Ca={la:1,ka:5,ja:10,ia:20};
G.prototype.h=function(){Ba||(Ba=C(G,{0:{name:"PhoneNumber",ea:"i18n.phonenumbers.PhoneNumber"},1:{name:"country_code",required:!0,c:5,type:Number},2:{name:"national_number",required:!0,c:4,type:Number},3:{name:"extension",c:9,type:String},4:{name:"italian_leading_zero",c:8,type:Boolean},8:{name:"number_of_leading_zeros",c:5,defaultValue:1,type:Number},5:{name:"raw_input",c:9,type:String},6:{name:"country_code_source",c:14,defaultValue:1,type:Ca},7:{name:"preferred_domestic_carrier_code",c:9,type:String}}));
return Ba};G.ctor=G;G.ctor.h=G.prototype.h;function H(){}H.prototype.b=function(a){new a.b;throw Error("Unimplemented");};H.prototype.a=function(a,b){if(11==a.b||10==a.b)return b instanceof u?b:this.b(a.j.prototype.h(),b);if(14==a.b){if(n(b)&&Da.test(b)){var c=Number(b);if(0<c)return c}return b}if(!a.i)return b;c=a.j;if(c===String){if("number"==typeof b)return String(b)}else if(c===Number&&n(b)&&("Infinity"===b||"-Infinity"===b||"NaN"===b||Da.test(b)))return Number(b);return b};var Da=/^-?[0-9]+$/;function Ea(){}q(Ea,H);Ea.prototype.b=function(a,b){var c=new a.b;c.g=this;c.b=b;c.a={};return c};function Fa(){}q(Fa,Ea);Fa.prototype.a=function(a,b){return 8==a.b?!!b:H.prototype.a.apply(this,arguments)};var I={682:["CK"]},Ga={CK:[null,[null,null,"[2-8]\\d{4}","\\d{5}"],[null,null,"(?:2\\d|3[13-7]|4[1-5])\\d{3}","\\d{5}"],[null,null,"[5-8]\\d{4}","\\d{5}"],[null,null,"NA","NA"],[null,null,"NA","NA"],[null,null,"NA","NA"],[null,null,"NA","NA"],[null,null,"NA","NA"],"CK",682,"00",null,null,null,null,null,null,null,[[null,"(\\d{2})(\\d{3})","$1 $2"]],null,[null,null,"NA","NA"],null,null,[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]]};/*

 Copyright (C) 2010 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function J(){this.a={}}J.a=function(){return J.b?J.b:J.b=new J};
var K={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9"},Ha={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",
7:"7",8:"8",9:"9","+":"+","*":"*"},Ia={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9",A:"2",B:"2",
C:"2",D:"3",E:"3",F:"3",G:"4",H:"4",I:"4",J:"5",K:"5",L:"5",M:"6",N:"6",O:"6",P:"7",Q:"7",R:"7",S:"7",T:"8",U:"8",V:"8",W:"9",X:"9",Y:"9",Z:"9"},Ja=/[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?/,Ka=RegExp("[+\uff0b]+"),L=RegExp("^[+\uff0b]+"),La=RegExp("([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])"),Ma=RegExp("[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]"),Na=/[\\\/] *x/,Oa=RegExp("[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$"),Pa=/(?:.*?[A-Za-z]){3}.*/,Qa=RegExp("(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$",
"i"),Ra=RegExp("^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$",
"i"),Sa=/(\$\d)/,Ta=/\$NP/,Ua=/\$FG/,Va=/\$CC/,Wa=/^\(?\$1\)?$/;function Xa(a){var b=a.search(Ma);0<=b?(a=a.substring(b),a=a.replace(Oa,""),b=a.search(Na),0<=b&&(a=a.substring(0,b))):a="";return a}function Ya(a){return 2>a.length?!1:M(Ra,a)}function Za(a){return M(Pa,a)?N(a,Ia):N(a,K)}function $a(a){var b=Za(a.toString());t(a);a.a(b)}function ab(){return ia(Object.keys(Ga),function(a){return isNaN(a)})}
function N(a,b){for(var c=new r,d,e=a.length,f=0;f<e;++f)d=a.charAt(f),d=b[d.toUpperCase()],null!=d&&c.a(d);return c.toString()}function O(a){return null!=a&&isNaN(a)&&a.toUpperCase()in Ga}function P(a,b,c){if(0==x(b,2)&&v(b,5)){var d=A(b,5);if(0<d.length)return d}var d=A(b,1),e=Q(b);if(0==c)return S(d,0,e,"");if(!(d in I))return e;a=T(a,d,U(d));b=bb(b,a,c);e=cb(e,a,c);return S(d,c,e,b)}function T(a,b,c){return"001"==c?V(a,""+b):V(a,c)}
function db(a,b,c){if(!O(c))return P(a,b,1);var d=A(b,1),e=Q(b);if(!(d in I))return e;if(1==d){if(null!=c&&0<=ha(I[1],c.toUpperCase()))return d+" "+P(a,b,2)}else if(d==eb(a,c))return P(a,b,2);var f=V(a,c),g=A(f,11);c="";M(Ja,g)?c=g:v(f,17)&&(c=A(f,17));a=T(a,d,U(d));e=cb(e,a,1);b=bb(b,a,1);return 0<c.length?c+" "+d+" "+e+b:S(d,1,e,b)}function Q(a){var b=""+x(a,2);return v(a,4)&&x(a,4)?Array(A(a,8)+1).join("0")+b:b}
function S(a,b,c,d){switch(b){case 0:return"+"+a+c+d;case 1:return"+"+a+" "+c+d;case 3:return"tel:+"+a+"-"+c+d;default:return c+d}}function cb(a,b,c){b=(z(b,20)||[]).length&&2!=c?z(b,20)||[]:z(b,19)||[];return(b=fb(b,a))?gb(a,b,c,void 0):a}function fb(a,b){for(var c,d=a.length,e=0;e<d;++e){c=a[e];var f=B(c,3);if(!f||!b.search(x(c,3,f-1)))if(f=new RegExp(x(c,1)),M(f,b))return c}return null}
function gb(a,b,c,d){var e=A(b,2),f=new RegExp(x(b,1)),g=A(b,5);2==c&&null!=d&&0<d.length&&0<g.length?(b=g.replace(Va,d),e=e.replace(Sa,b),a=a.replace(f,e)):(b=A(b,4),a=2==c&&null!=b&&0<b.length?a.replace(f,e.replace(Sa,b)):a.replace(f,e));3==c&&(a=a.replace(RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+"),""),a=a.replace(RegExp("[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+",
"g"),"-"));return a}function bb(a,b,c){return v(a,3)&&x(a,3).length?3==c?";ext="+x(a,3):v(b,13)?x(b,13)+A(a,3):" ext. "+A(a,3):""}function hb(a,b){return W(a,x(b,1))?W(a,x(b,5))?4:W(a,x(b,4))?3:W(a,x(b,6))?5:W(a,x(b,8))?6:W(a,x(b,7))?7:W(a,x(b,21))?8:W(a,x(b,25))?9:W(a,x(b,28))?10:W(a,x(b,2))?x(b,18)||W(a,x(b,3))?2:0:!x(b,18)&&W(a,x(b,3))?1:-1:-1}function V(a,b){if(null==b)return null;b=b.toUpperCase();var c=a.a[b];if(!c){c=Ga[b];if(!c)return null;c=(new Fa).b(F.h(),c);a.a[b]=c}return c}
function W(a,b){return M(A(b,3),a)&&M(A(b,2),a)}function ib(a,b){var c=jb(a,b);return kb(a,b,c)}function kb(a,b,c){var d=A(b,1),e=T(a,d,c);if(!e||"001"!=c&&d!=eb(a,c))return!1;a=Q(b);return-1!=hb(a,e)}function jb(a,b){if(!b)return null;var c=A(b,1);if(c=I[c])if(1==c.length)c=c[0];else a:{for(var d=Q(b),e,f=c.length,g=0;g<f;g++){e=c[g];var h=V(a,e);if(v(h,23)){if(!d.search(x(h,23))){c=e;break a}}else if(-1!=hb(d,h)){c=e;break a}}c=null}else c=null;return c}function U(a){return(a=I[a])?a[0]:"ZZ"}
function eb(a,b){var c=V(a,b);if(!c)throw"Invalid region code: "+b;return A(c,10)}function lb(a,b){return M(a,b)?0:b.search(a)?2:3}function mb(a){var b=X,c=Q(a);a=A(a,1);if(!(a in I))return 1;b=A(x(T(b,a,U(a)),1),3);return lb(b,c)}function nb(a,b){var c=a.toString();if(!c.length||"0"==c.charAt(0))return 0;for(var d,e=c.length,f=1;3>=f&&f<=e;++f)if(d=parseInt(c.substring(0,f),10),d in I)return b.a(c.substring(f)),d;return 0}
function ob(a,b,c,d,e){if(!a.length)return 0;a=new r(a);var f;b&&(f=x(b,11));null==f&&(f="NonMatch");var g=a.toString();if(g.length)if(L.test(g))g=g.replace(L,""),t(a),a.a(Za(g)),f=1;else{g=new RegExp(f);$a(a);f=a.toString();if(f.search(g))f=!1;else{var g=f.match(g)[0].length,h=f.substring(g).match(La);h&&null!=h[1]&&0<h[1].length&&"0"==N(h[1],K)?f=!1:(t(a),a.a(f.substring(g)),f=!0)}f=f?5:20}else f=20;d&&y(e,6,f);if(20!=f){if(2>=a.b.length)throw"Phone number too short after IDD";if(c=nb(a,c))return y(e,
1,c),c;throw"Invalid country calling code";}if(b&&(f=A(b,10),g=""+f,h=a.toString(),!h.lastIndexOf(g,0))){var m=new r(h.substring(g.length)),h=x(b,1),g=new RegExp(A(h,2));pb(m,b,null);b=m.toString();h=A(h,3);if(!M(g,a.toString())&&M(g,b)||3==lb(h,a.toString()))return c.a(b),d&&y(e,6,10),y(e,1,f),f}y(e,1,0);return 0}
function pb(a,b,c){var d=a.toString(),e=d.length,f=x(b,15);if(e&&null!=f&&f.length){var g=new RegExp("^(?:"+f+")");if(e=g.exec(d)){var f=new RegExp(A(x(b,1),2)),h=M(f,d),m=e.length-1;b=x(b,16);if(null!=b&&b.length&&null!=e[m]&&e[m].length){if(d=d.replace(g,b),!h||M(f,d))c&&0<m&&c.a(e[1]),a.set(d)}else if(!h||M(f,d.substring(e[0].length)))c&&0<m&&null!=e[m]&&c.a(e[1]),a.set(d.substring(e[0].length))}}}
function Y(a){var b=X,c=Z;if(!O(c)&&0<a.length&&"+"!=a.charAt(0))throw"Invalid country calling code";return qb(b,a,c,!0)}
function qb(a,b,c,d){if(null==b)throw"The string supplied did not seem to be a phone number";if(250<b.length)throw"The string supplied is too long to be a phone number";var e=new r,f=b.indexOf(";phone-context=");if(0<f){var g=f+15;if("+"==b.charAt(g)){var h=b.indexOf(";",g);0<h?e.a(b.substring(g,h)):e.a(b.substring(g))}g=b.indexOf("tel:");e.a(b.substring(0<=g?g+4:0,f))}else e.a(Xa(b));f=e.toString();g=f.indexOf(";isub=");0<g&&(t(e),e.a(f.substring(0,g)));if(!Ya(e.toString()))throw"The string supplied did not seem to be a phone number";
f=e.toString();if(!(O(c)||null!=f&&0<f.length&&L.test(f)))throw"Invalid country calling code";f=new G;d&&y(f,5,b);a:{b=e.toString();g=b.search(Qa);if(0<=g&&Ya(b.substring(0,g)))for(var h=b.match(Qa),m=h.length,w=1;w<m;++w)if(null!=h[w]&&0<h[w].length){t(e);e.a(b.substring(0,g));b=h[w];break a}b=""}0<b.length&&y(f,3,b);g=V(a,c);b=new r;h=0;m=e.toString();try{h=ob(m,g,b,d,f)}catch(R){if("Invalid country calling code"==R&&L.test(m)){if(m=m.replace(L,""),h=ob(m,g,b,d,f),!h)throw R;}else throw R;}h?(e=
U(h),e!=c&&(g=T(a,h,e))):($a(e),b.a(e.toString()),null!=c?(h=A(g,10),y(f,1,h)):d&&xa(f,6));if(2>b.b.length)throw"The string supplied is too short to be a phone number";g&&(a=new r,c=new r(b.toString()),pb(c,g,a),e=c.toString(),g=A(x(g,1),3),2!=lb(g,e)&&(b=c,d&&y(f,7,a.toString())));d=b.toString();a=d.length;if(2>a)throw"The string supplied is too short to be a phone number";if(17<a)throw"The string supplied is too long to be a phone number";if(1<d.length&&"0"==d.charAt(0)){y(f,4,!0);for(a=1;a<d.length-
1&&"0"==d.charAt(a);)a++;1!=a&&y(f,8,a)}y(f,2,parseInt(d,10));return f}function M(a,b){var c="string"==typeof a?b.match("^(?:"+a+")$"):b.match(a);return c&&c[0].length==b.length?!0:!1};function rb(){var a=Z;this.ga=RegExp("\u2008");this.aa="";this.m=new r;this.v="";this.i=new r;this.u=new r;this.j=!0;this.w=this.o=this.ca=!1;this.da=J.a();this.s=0;this.b=new r;this.$=!1;this.l="";this.a=new r;this.f=[];this.ba=a;this.ha=this.g=sb(this,this.ba)}var tb=new F;y(tb,11,"NA");
var ub=/\[([^\[\]])*\]/g,vb=/\d(?=[^,}][^,}])/g,wb=RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*(\\$\\d[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*)+$"),xb=/[- ]/;function sb(a,b){var c=O(b)?eb(a.da,b):0;return(c=V(a.da,U(c)))?c:tb}
function yb(a){for(var b=a.f.length,c=0;c<b;++c){var d=a.f[c],e=A(d,1);if(a.v==e)return!1;var f;f=a;var g=d,h=A(g,1);if(-1!=h.indexOf("|"))f=!1;else{h=h.replace(ub,"\\d");h=h.replace(vb,"\\d");t(f.m);var m;m=f;var g=A(g,2),w="999999999999999".match(h)[0];w.length<m.a.b.length?m="":(m=w.replace(new RegExp(h,"g"),g),m=m.replace(RegExp("9","g"),"\u2008"));0<m.length?(f.m.a(m),f=!0):f=!1}if(f)return a.v=e,a.$=xb.test(x(d,4)),a.s=0,!0}return a.j=!1}
function zb(a,b){for(var c=[],d=b.length-3,e=a.f.length,f=0;f<e;++f){var g=a.f[f];B(g,3)?(g=x(g,3,Math.min(d,B(g,3)-1)),b.search(g)||c.push(a.f[f])):c.push(a.f[f])}a.f=c}function Ab(a){a.aa="";t(a.i);t(a.u);t(a.m);a.s=0;a.v="";t(a.b);a.l="";t(a.a);a.j=!0;a.ca=!1;a.o=!1;a.w=!1;a.f=[];a.$=!1;a.g!=a.ha&&(a.g=sb(a,a.ba))}function Bb(a,b){a.aa=Cb(a,b);return a.aa}
function Cb(a,b){a.i.a(b);var c=b;if(La.test(c)||1==a.i.b.length&&Ka.test(c)){var c=b,d;"+"==c?(d=c,a.u.a(c)):(d=K[c],a.u.a(d),a.a.a(d));b=d}else a.j=!1,a.ca=!0;if(!a.j){if(!a.ca)if(Db(a)){if(Eb(a))return Fb(a)}else if(0<a.l.length&&(c=a.a.toString(),t(a.a),a.a.a(a.l),a.a.a(c),c=a.b.toString(),d=c.lastIndexOf(a.l),t(a.b),a.b.a(c.substring(0,d))),a.l!=Gb(a))return a.b.a(" "),Fb(a);return a.i.toString()}switch(a.u.b.length){case 0:case 1:case 2:return a.i.toString();case 3:if(Db(a))a.w=!0;else return a.l=
Gb(a),Hb(a);default:if(a.w)return Eb(a)&&(a.w=!1),a.b.toString()+a.a.toString();if(0<a.f.length){c=Ib(a,b);d=Jb(a);if(0<d.length)return d;zb(a,a.a.toString());return yb(a)?Kb(a):a.j?Lb(a,c):a.i.toString()}return Hb(a)}}function Fb(a){a.j=!0;a.w=!1;a.f=[];a.s=0;t(a.m);a.v="";return Hb(a)}function Jb(a){for(var b=a.a.toString(),c=a.f.length,d=0;d<c;++d){var e=a.f[d],f=A(e,1);if((new RegExp("^(?:"+f+")$")).test(b))return a.$=xb.test(x(e,4)),b=b.replace(new RegExp(f,"g"),x(e,2)),Lb(a,b)}return""}
function Lb(a,b){var c=a.b.b.length;return a.$&&0<c&&" "!=a.b.toString().charAt(c-1)?a.b+" "+b:a.b+b}function Hb(a){var b=a.a.toString();if(3<=b.length){for(var c=a.o&&0<B(a.g,20)?z(a.g,20)||[]:z(a.g,19)||[],d=c.length,e=0;e<d;++e){var f=c[e],g;(g=!v(a.g,12)||a.o||x(f,6))||(g=A(f,4),g=!g.length||Wa.test(g));g&&wb.test(A(f,2))&&a.f.push(f)}zb(a,b);b=Jb(a);return 0<b.length?b:yb(a)?Kb(a):a.i.toString()}return Lb(a,b)}
function Kb(a){var b=a.a.toString(),c=b.length;if(0<c){for(var d="",e=0;e<c;e++)d=Ib(a,b.charAt(e));return a.j?Lb(a,d):a.i.toString()}return a.b.toString()}
function Gb(a){var b=a.a.toString(),c=0,d;1!=x(a.g,10)?d=!1:(d=a.a.toString(),d="1"==d.charAt(0)&&"0"!=d.charAt(1)&&"1"!=d.charAt(1));d?(c=1,a.b.a("1").a(" "),a.o=!0):v(a.g,15)&&(d=new RegExp("^(?:"+x(a.g,15)+")"),(d=b.match(d))&&null!=d[0]&&0<d[0].length&&(a.o=!0,c=d[0].length,a.b.a(b.substring(0,c))));t(a.a);a.a.a(b.substring(c));return b.substring(0,c)}
function Db(a){var b=a.u.toString(),c=new RegExp("^(?:\\+|"+x(a.g,11)+")");return(c=b.match(c))&&null!=c[0]&&0<c[0].length?(a.o=!0,c=c[0].length,t(a.a),a.a.a(b.substring(c)),t(a.b),a.b.a(b.substring(0,c)),"+"!=b.charAt(0)&&a.b.a(" "),!0):!1}function Eb(a){if(!a.a.b.length)return!1;var b=new r,c=nb(a.a,b);if(!c)return!1;t(a.a);a.a.a(b.toString());b=U(c);"001"==b?a.g=V(a.da,""+c):b!=a.ba&&(a.g=sb(a,b));a.b.a(""+c).a(" ");a.l="";return!0}
function Ib(a,b){var c=a.m.toString();if(0<=c.substring(a.s).search(a.ga)){var d=c.search(a.ga),c=c.replace(a.ga,b);t(a.m);a.m.a(c);a.s=d;return c.substring(0,a.s+1)}1==a.f.length&&(a.j=!1);a.v="";return a.i.toString()};var X=J.a(),Z,Mb,Nb;p("countryCodeToRegionCodeMap",function(){return I});p("isPossibleNumber",function(a){a=Y(a);return 0==mb(a)});p("isPossibleNumberWithReason",function(a){a=Y(a);return mb(a)});p("isValidNumber",function(a){a=Y(a);return ib(X,a)});p("isValidNumberForRegion",function(a){a=Y(a);return kb(X,a,Z)});p("getCountryCodeForRegion",function(){return O(Z)?eb(X,Z):0});p("getRegionCodeForNumber",function(a){a=Y(a);return jb(X,a)});
p("getNumberType",function(a){var b;a=Y(a);var c=X,d=jb(c,a);(c=T(c,A(a,1),d))?(a=Q(a),a=hb(a,c)):a=-1;switch(a){case 0:b="FIXED_LINE";break;case 1:b="MOBILE";break;case 2:b="FIXED_LINE_OR_MOBILE";break;case 3:b="TOLL_FREE";break;case 4:b="PREMIUM_RATE";break;case 5:b="SHARED_COST";break;case 6:b="VOIP";break;case 7:b="PERSONAL_NUMBER";break;case 8:b="PAGER";break;case 9:b="UAN";break;case -1:b="UNKNOWN"}return b});p("getSupportedRegions",function(){return ab()});
p("formatE164",function(a){a=Y(a);return P(X,a,0)});p("formatNational",function(a){a=Y(a);return P(X,a,2)});p("formatInternational",function(a){a=Y(a);return P(X,a,1)});
p("formatInOriginalFormat",function(a){a=Y(a);var b=X,c=Z,d;if(!(d=!v(a,5))){if(d=v(a,4))d=A(a,1),d=T(b,d,U(d)),d=!(d&&A(d,26));if(d=!d)if(d=A(a,1),d=T(b,d,U(d))){var e=Q(a);d=!!fb(z(d,19)||[],e)}else d=!1}if(d)if(v(a,6)){switch(x(a,6)){case 1:b=P(b,a,1);break;case 5:b=db(b,a,c);break;case 10:b=P(b,a,1).substring(1);break;default:d=U(A(a,1));var f;(c=V(b,d))?(c=A(c,12),f=c.length?c=c.replace("~",""):null):f=null;c=P(b,a,2);if(null!=f&&f.length){var g;b:{e=A(a,5);e=N(e,K);if(!e.lastIndexOf(f,0))try{g=
ib(b,qb(b,e.substring(f.length),d,!1));break b}catch(h){}g=!1}if(g)b=c;else if(g=V(b,d),d=Q(a),g=fb(z(g,19)||[],d))if(d=A(g,4),e=d.indexOf("$1"),0>=e)b=c;else if(d=d.substring(0,e),d=N(d,K),d.length)if(g=g.clone(),xa(g,4),d=[g],g=A(a,1),c=Q(a),g in I){b=T(b,g,U(g));if(e=fb(d,c))d=e.clone(),e=A(e,4),0<e.length&&(f=A(b,12),0<f.length?(e=e.replace(Ta,f).replace(Ua,"$1"),y(d,4,e)):xa(d,4)),c=gb(c,d,2);b=bb(a,b,2);b=S(g,2,c,b)}else b=c;else b=c;else b=c}else b=c}a=A(a,5);null!=b&&0<a.length&&(g=N(b,Ha),
c=N(a,Ha),g!=c&&(b=a));a=b}else a=P(b,a,2);else a=A(a,5);return a});p("formatOutOfCountryCallingNumber",function(a,b){if(b){var c=Y(a);return db(X,c,b)}});p("formatAsTyped",function(a){console.log("Clearing AsYouTypeFormatter for",Z);Ab(Nb);var b;if(a&&"string"===typeof a)for(var c=0;c<a.length;c++)b=Bb(Nb,a.charAt(c)),console.log("char:",a.charAt(c),"output:",b);return b});p("init",function(a){Z=a||"US";Mb=new rb;Nb=new rb;console.log("initialized everything to",Z)});
p("asYouType.clear",function(){console.log("Clearing formatter");Ab(Mb)});p("asYouType.inputDigit",function(a){console.log("Inputting digit",a);return Bb(Mb,a)});}).apply(NS);NS.init('CK');delete NS.init;module.exports=NS;
