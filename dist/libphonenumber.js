for(var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},k="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,m=["String","prototype","repeat"],ba=0;ba<m.length-1;ba++){var ca=m[ba];ca in k||(k[ca]={});k=k[ca]}
var fa=m[m.length-1],ga=k[fa],ha=ga?ga:function(a){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");b=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var c="";a;)if(a&1&&(c+=b),a>>>=1)b+=b;return c};ha!=ga&&null!=ha&&aa(k,fa,{configurable:!0,writable:!0,value:ha});var ia=this;
function p(a,b){var c=a.split("."),d=ia;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}function q(a,b){function c(){}c.prototype=b.prototype;a.oa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.na=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};function r(a,b){null!=a&&this.a.apply(this,arguments)}r.prototype.b="";r.prototype.set=function(a){this.b=""+a};r.prototype.a=function(a,b,c){this.b+=String(a);if(null!=b)for(var d=1;d<arguments.length;d++)this.b+=arguments[d];return this};r.prototype.clear=function(){this.b=""};r.prototype.toString=function(){return this.b};var ja=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g="string"==typeof a?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];b.call(c,l,h,a)&&(e[f++]=l)}return e};function ka(a,b){a.sort(b||la)}function la(a,b){return a>b?1:a<b?-1:0};function ma(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};function na(a,b){this.b=a;this.a={};for(var c=0;c<b.length;c++){var d=b[c];this.a[d.a]=d}}function oa(a){a=ma(a.a);ka(a,function(a,c){return a.a-c.a});return a};function pa(a,b){this.a=a;this.h=!!b.ga;this.b=b.c;this.l=b.type;this.j=!1;switch(this.b){case qa:case ra:case sa:case ta:case ua:case va:case wa:this.j=!0}this.g=b.defaultValue}var wa=1,va=2,qa=3,ra=4,sa=6,ta=16,ua=18;function u(){this.f={};this.b=this.i().a;this.a=this.g=null}u.prototype.has=function(a){return null!=this.f[a.a]};u.prototype.get=function(a,b){return w(this,a.a,b)};u.prototype.set=function(a,b){x(this,a.a,b)};u.prototype.clear=function(a){a=a.a;delete this.f[a];this.a&&delete this.a[a]};
function za(a,b){for(var c=oa(a.i()),d=0;d<c.length;d++){var e=c[d],f=e.a;if(null!=b.f[f]){a.a&&delete a.a[e.a];var g=11==e.b||10==e.b;if(e.h)for(var e=z(b,f)||[],h=0;h<e.length;h++){var l=a,t=f,F=g?e[h].clone():e[h];l.f[t]||(l.f[t]=[]);l.f[t].push(F);l.a&&delete l.a[t]}else e=z(b,f),g?(g=z(a,f))?za(g,e):x(a,f,e.clone()):x(a,f,e)}}}u.prototype.clone=function(){var a=new this.constructor;a!=this&&(a.f={},a.a&&(a.a={}),za(a,this));return a};
function z(a,b){var c=a.f[b];if(null==c)return null;if(a.g){if(!(b in a.a)){var d=a.g,e=a.b[b];if(null!=c)if(e.h){for(var f=[],g=0;g<c.length;g++)f[g]=d.a(e,c[g]);c=f}else c=d.a(e,c);return a.a[b]=c}return a.a[b]}return c}function w(a,b,c){var d=z(a,b);return a.b[b].h?d[c||0]:d}function A(a,b){var c;if(null!=a.f[b])c=w(a,b,void 0);else a:{c=a.b[b];if(void 0===c.g){var d=c.l;if(d===Boolean)c.g=!1;else if(d===Number)c.g=0;else if(d===String)c.g=c.j?"0":"";else{c=new d;break a}}c=c.g}return c}
function B(a,b){return a.b[b].h?null!=a.f[b]?a.f[b].length:0:null!=a.f[b]?1:0}function x(a,b,c){a.f[b]=c;a.a&&(a.a[b]=c)}function C(a,b){var c=[],d;for(d in b)0!=d&&c.push(new pa(d,b[d]));return new na(a,c)};/*

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
function D(){u.call(this)}var Aa;q(D,u);function E(){u.call(this)}var Ba;q(E,u);function G(){u.call(this)}var Ca;q(G,u);
D.prototype.i=function(){Aa||(Aa=C(D,{0:{name:"NumberFormat",fa:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,c:9,type:String},2:{name:"format",required:!0,c:9,type:String},3:{name:"leading_digits_pattern",ga:!0,c:9,type:String},4:{name:"national_prefix_formatting_rule",c:9,type:String},6:{name:"national_prefix_optional_when_formatting",c:8,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",c:9,type:String}}));return Aa};D.ctor=D;D.ctor.i=D.prototype.i;
E.prototype.i=function(){Ba||(Ba=C(E,{0:{name:"PhoneNumberDesc",fa:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",c:9,type:String},3:{name:"possible_number_pattern",c:9,type:String},6:{name:"example_number",c:9,type:String},7:{name:"national_number_matcher_data",c:12,type:String},8:{name:"possible_number_matcher_data",c:12,type:String}}));return Ba};E.ctor=E;E.ctor.i=E.prototype.i;
G.prototype.i=function(){Ca||(Ca=C(G,{0:{name:"PhoneMetadata",fa:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",c:11,type:E},2:{name:"fixed_line",c:11,type:E},3:{name:"mobile",c:11,type:E},4:{name:"toll_free",c:11,type:E},5:{name:"premium_rate",c:11,type:E},6:{name:"shared_cost",c:11,type:E},7:{name:"personal_number",c:11,type:E},8:{name:"voip",c:11,type:E},21:{name:"pager",c:11,type:E},25:{name:"uan",c:11,type:E},27:{name:"emergency",c:11,type:E},28:{name:"voicemail",c:11,type:E},24:{name:"no_international_dialling",
c:11,type:E},9:{name:"id",required:!0,c:9,type:String},10:{name:"country_code",c:5,type:Number},11:{name:"international_prefix",c:9,type:String},17:{name:"preferred_international_prefix",c:9,type:String},12:{name:"national_prefix",c:9,type:String},13:{name:"preferred_extn_prefix",c:9,type:String},15:{name:"national_prefix_for_parsing",c:9,type:String},16:{name:"national_prefix_transform_rule",c:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",c:8,defaultValue:!1,type:Boolean},19:{name:"number_format",
ga:!0,c:11,type:D},20:{name:"intl_number_format",ga:!0,c:11,type:D},22:{name:"main_country_for_code",c:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",c:9,type:String},26:{name:"leading_zero_possible",c:8,defaultValue:!1,type:Boolean}}));return Ca};G.ctor=G;G.ctor.i=G.prototype.i;function H(){u.call(this)}var Da;q(H,u);var Ea={ma:1,la:5,ka:10,ja:20};
H.prototype.i=function(){Da||(Da=C(H,{0:{name:"PhoneNumber",fa:"i18n.phonenumbers.PhoneNumber"},1:{name:"country_code",required:!0,c:5,type:Number},2:{name:"national_number",required:!0,c:4,type:Number},3:{name:"extension",c:9,type:String},4:{name:"italian_leading_zero",c:8,type:Boolean},8:{name:"number_of_leading_zeros",c:5,defaultValue:1,type:Number},5:{name:"raw_input",c:9,type:String},6:{name:"country_code_source",c:14,defaultValue:1,type:Ea},7:{name:"preferred_domestic_carrier_code",c:9,type:String}}));
return Da};H.ctor=H;H.ctor.i=H.prototype.i;function I(){}I.prototype.b=function(a){new a.b;throw Error("Unimplemented");};I.prototype.a=function(a,b){if(11==a.b||10==a.b)return b instanceof u?b:this.b(a.l.prototype.i(),b);if(14==a.b){if("string"==typeof b&&Fa.test(b)){var c=Number(b);if(0<c)return c}return b}if(!a.j)return b;c=a.l;if(c===String){if("number"==typeof b)return String(b)}else if(c===Number&&"string"==typeof b&&("Infinity"===b||"-Infinity"===b||"NaN"===b||Fa.test(b)))return Number(b);return b};var Fa=/^-?[0-9]+$/;function Ga(){}q(Ga,I);Ga.prototype.b=function(a,b){var c=new a.b;c.g=this;c.f=b;c.a={};return c};function Ha(){}q(Ha,Ga);Ha.prototype.a=function(a,b){return 8==a.b?!!b:I.prototype.a.apply(this,arguments)};var J,M;/*

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
function N(){this.a={}}N.a=function(){return N.b?N.b:N.b=new N};
var Ia={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9"},Ja={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",
7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9",A:"2",B:"2",C:"2",D:"3",E:"3",F:"3",G:"4",H:"4",I:"4",J:"5",K:"5",L:"5",M:"6",N:"6",O:"6",P:"7",
Q:"7",R:"7",S:"7",T:"8",U:"8",V:"8",W:"9",X:"9",Y:"9",Z:"9"},Ka=RegExp("[+\uff0b]+"),O=RegExp("^[+\uff0b]+"),La=RegExp("([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])"),Ma=RegExp("[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]"),Na=/[\\\/] *x/,Oa=RegExp("[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$"),Pa=/(?:.*?[A-Za-z]){3}.*/,Qa=RegExp("(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$",
"i"),Ra=RegExp("^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$",
"i"),Sa=/(\$\d)/,Ta=/^\(?\$1\)?$/;function Ua(a){var b=a.search(Ma);0<=b?(a=a.substring(b),a=a.replace(Oa,""),b=a.search(Na),0<=b&&(a=a.substring(0,b))):a="";return a}function Va(a){return 2>a.length?!1:Q(Ra,a)}function Wa(a){return Q(Pa,a)?Xa(a,Ja):Xa(a,Ia)}function Ya(a){var b=Wa(a.toString());a.clear();a.a(b)}function Za(){return ja(Object.keys(M),function(a){return isNaN(a)})}
function Xa(a,b){for(var c=new r,d,e=a.length,f=0;f<e;++f)d=a.charAt(f),d=b[d.toUpperCase()],null!=d&&c.a(d);return c.toString()}function $a(a){return null!=a&&isNaN(a)&&a.toUpperCase()in M}
function ab(a,b){var c=R;if(0==w(a,2)&&null!=a.f[5]){var d=A(a,5);if(0<d.length)return d}var d=A(a,1),e=db(a);if(0==b)return eb(d,0,e,"");if(!(d in J))return e;var f=V(c,d,W(d)),c=null!=a.f[3]&&w(a,3).length?3==b?";ext="+w(a,3):null!=f.f[13]?w(f,13)+A(a,3):" ext. "+A(a,3):"";a:{for(var f=(z(f,20)||[]).length&&2!=b?z(f,20)||[]:z(f,19)||[],g,h=f.length,l=0;l<h;++l){g=f[l];var t=B(g,3);if(!t||!e.search(w(g,3,t-1)))if(t=new RegExp(w(g,1)),Q(t,e)){f=g;break a}}f=null}f&&(h=f,f=A(h,2),g=new RegExp(w(h,
1)),A(h,5),h=A(h,4),e=2==b&&null!=h&&0<h.length?e.replace(g,f.replace(Sa,h)):e.replace(g,f),3==b&&(e=e.replace(RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+"),""),e=e.replace(RegExp("[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+","g"),"-")));return eb(d,b,e,c)}function V(a,b,c){return"001"==c?X(a,""+b):X(a,c)}
function db(a){var b=""+w(a,2);return null!=a.f[4]&&w(a,4)?Array(A(a,8)+1).join("0")+b:b}function eb(a,b,c,d){switch(b){case 0:return"+"+a+c+d;case 1:return"+"+a+" "+c+d;case 3:return"tel:+"+a+"-"+c+d;default:return c+d}}function fb(a,b){return Y(a,w(b,1))?Y(a,w(b,5))?4:Y(a,w(b,4))?3:Y(a,w(b,6))?5:Y(a,w(b,8))?6:Y(a,w(b,7))?7:Y(a,w(b,21))?8:Y(a,w(b,25))?9:Y(a,w(b,28))?10:Y(a,w(b,2))?w(b,18)||Y(a,w(b,3))?2:0:!w(b,18)&&Y(a,w(b,3))?1:-1:-1}
function X(a,b){if(null==b)return null;b=b.toUpperCase();var c=a.a[b];if(!c){c=M[b];if(!c)return null;c=(new Ha).b(G.i(),c);a.a[b]=c}return c}function Y(a,b){return Q(A(b,3),a)&&Q(A(b,2),a)}function gb(a,b,c){var d=A(b,1),e=V(a,d,c);if(!e||"001"!=c&&d!=hb(a,c))return!1;a=db(b);return-1!=fb(a,e)}function W(a){return(a=J[a])?a[0]:"ZZ"}function hb(a,b){var c=X(a,b);if(!c)throw"Invalid region code: "+b;return A(c,10)}function ib(a){a=V(R,a,W(a));return!!a&&A(a,26)}
function jb(a,b){return Q(a,b)?0:b.search(a)?2:3}function kb(a,b){var c=a.toString();if(!c.length||"0"==c.charAt(0))return 0;for(var d,e=c.length,f=1;3>=f&&f<=e;++f)if(d=parseInt(c.substring(0,f),10),d in J)return b.a(c.substring(f)),d;return 0}
function lb(a,b,c,d){if(!a.length)return 0;a=new r(a);var e;b&&(e=w(b,11));null==e&&(e="NonMatch");var f=a.toString();if(f.length)if(O.test(f))f=f.replace(O,""),a.clear(),a.a(Wa(f)),e=1;else{f=new RegExp(e);Ya(a);e=a.toString();if(e.search(f))e=!1;else{var f=e.match(f)[0].length,g=e.substring(f).match(La);g&&null!=g[1]&&0<g[1].length&&"0"==Xa(g[1],Ia)?e=!1:(a.clear(),a.a(e.substring(f)),e=!0)}e=e?5:20}else e=20;if(20!=e){if(2>=a.b.length)throw"Phone number too short after IDD";if(c=kb(a,c))return x(d,
1,c),c;throw"Invalid country calling code";}if(b&&(e=A(b,10),f=""+e,g=a.toString(),!g.lastIndexOf(f,0))){var h=new r(g.substring(f.length)),g=w(b,1),f=new RegExp(A(g,2));mb(h,b,null);b=h.toString();g=A(g,3);if(!Q(f,a.toString())&&Q(f,b)||3==jb(g,a.toString()))return c.a(b),x(d,1,e),e}x(d,1,0);return 0}
function mb(a,b,c){var d=a.toString(),e=d.length,f=w(b,15);if(e&&null!=f&&f.length){var g=new RegExp("^(?:"+f+")");if(e=g.exec(d)){var f=new RegExp(A(w(b,1),2)),h=Q(f,d),l=e.length-1;b=w(b,16);if(null!=b&&b.length&&null!=e[l]&&e[l].length){if(d=d.replace(g,b),!h||Q(f,d))c&&0<l&&c.a(e[1]),a.set(d)}else if(!h||Q(f,d.substring(e[0].length)))c&&0<l&&null!=e[l]&&c.a(e[1]),a.set(d.substring(e[0].length))}}}
function Q(a,b){var c="string"==typeof a?b.match("^(?:"+a+")$"):b.match(a);return c&&c[0].length==b.length?!0:!1};function nb(a){this.ha=RegExp("\u2008");this.ba="";this.o=new r;this.w="";this.j=new r;this.v=new r;this.l=!0;this.$=this.s=this.da=!1;this.ea=N.a();this.u=0;this.b=new r;this.aa=!1;this.m="";this.a=new r;this.g=[];this.ca=a;this.ia=this.h=ob(this,this.ca)}var pb=new G;x(pb,11,"NA");
var qb=/\[([^\[\]])*\]/g,rb=/\d(?=[^,}][^,}])/g,sb=RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*(\\$\\d[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*)+$"),tb=/[- ]/;function ob(a,b){var c=$a(b)?hb(a.ea,b):0;return(c=X(a.ea,W(c)))?c:pb}
function ub(a){for(var b=a.g.length,c=0;c<b;++c){var d=a.g[c],e=A(d,1);if(a.w==e)return!1;var f;f=a;var g=d,h=A(g,1);if(-1!=h.indexOf("|"))f=!1;else{h=h.replace(qb,"\\d");h=h.replace(rb,"\\d");f.o.clear();var l;l=f;var g=A(g,2),t="999999999999999".match(h)[0];t.length<l.a.b.length?l="":(l=t.replace(new RegExp(h,"g"),g),l=l.replace(RegExp("9","g"),"\u2008"));0<l.length?(f.o.a(l),f=!0):f=!1}if(f)return a.w=e,a.aa=tb.test(w(d,4)),a.u=0,!0}return a.l=!1}
function vb(a,b){for(var c=[],d=b.length-3,e=a.g.length,f=0;f<e;++f){var g=a.g[f];B(g,3)?(g=w(g,3,Math.min(d,B(g,3)-1)),b.search(g)||c.push(a.g[f])):c.push(a.g[f])}a.g=c}nb.prototype.clear=function(){this.ba="";this.j.clear();this.v.clear();this.o.clear();this.u=0;this.w="";this.b.clear();this.m="";this.a.clear();this.l=!0;this.$=this.s=this.da=!1;this.g=[];this.aa=!1;this.h!=this.ia&&(this.h=ob(this,this.ca))};
function wb(a,b){a.j.a(b);var c=b;if(La.test(c)||1==a.j.b.length&&Ka.test(c)){var c=b,d;"+"==c?(d=c,a.v.a(c)):(d=Ia[c],a.v.a(d),a.a.a(d));b=d}else a.l=!1,a.da=!0;if(!a.l){if(!a.da)if(xb(a)){if(yb(a))return zb(a)}else if(0<a.m.length&&(c=a.a.toString(),a.a.clear(),a.a.a(a.m),a.a.a(c),c=a.b.toString(),d=c.lastIndexOf(a.m),a.b.clear(),a.b.a(c.substring(0,d))),a.m!=Ab(a))return a.b.a(" "),zb(a);return a.j.toString()}switch(a.v.b.length){case 0:case 1:case 2:return a.j.toString();case 3:if(xb(a))a.$=!0;
else return a.m=Ab(a),Bb(a);default:if(a.$)return yb(a)&&(a.$=!1),a.b.toString()+a.a.toString();if(0<a.g.length){c=Cb(a,b);d=Db(a);if(0<d.length)return d;vb(a,a.a.toString());return ub(a)?Eb(a):a.l?Fb(a,c):a.j.toString()}return Bb(a)}}function zb(a){a.l=!0;a.$=!1;a.g=[];a.u=0;a.o.clear();a.w="";return Bb(a)}
function Db(a){for(var b=a.a.toString(),c=a.g.length,d=0;d<c;++d){var e=a.g[d],f=A(e,1);if((new RegExp("^(?:"+f+")$")).test(b))return a.aa=tb.test(w(e,4)),b=b.replace(new RegExp(f,"g"),w(e,2)),Fb(a,b)}return""}function Fb(a,b){var c=a.b.b.length;return a.aa&&0<c&&" "!=a.b.toString().charAt(c-1)?a.b+" "+b:a.b+b}
function Bb(a){var b=a.a.toString();if(3<=b.length){for(var c=a.s&&0<B(a.h,20)?z(a.h,20)||[]:z(a.h,19)||[],d=c.length,e=0;e<d;++e){var f=c[e],g;(g=null==a.h.f[12]||a.s||w(f,6))||(g=A(f,4),g=!g.length||Ta.test(g));g&&sb.test(A(f,2))&&a.g.push(f)}vb(a,b);b=Db(a);return 0<b.length?b:ub(a)?Eb(a):a.j.toString()}return Fb(a,b)}function Eb(a){var b=a.a.toString(),c=b.length;if(0<c){for(var d="",e=0;e<c;e++)d=Cb(a,b.charAt(e));return a.l?Fb(a,d):a.j.toString()}return a.b.toString()}
function Ab(a){var b=a.a.toString(),c=0,d;1!=w(a.h,10)?d=!1:(d=a.a.toString(),d="1"==d.charAt(0)&&"0"!=d.charAt(1)&&"1"!=d.charAt(1));d?(c=1,a.b.a("1").a(" "),a.s=!0):null!=a.h.f[15]&&(d=new RegExp("^(?:"+w(a.h,15)+")"),(d=b.match(d))&&null!=d[0]&&0<d[0].length&&(a.s=!0,c=d[0].length,a.b.a(b.substring(0,c))));a.a.clear();a.a.a(b.substring(c));return b.substring(0,c)}
function xb(a){var b=a.v.toString(),c=new RegExp("^(?:\\+|"+w(a.h,11)+")");return(c=b.match(c))&&null!=c[0]&&0<c[0].length?(a.s=!0,c=c[0].length,a.a.clear(),a.a.a(b.substring(c)),a.b.clear(),a.b.a(b.substring(0,c)),"+"!=b.charAt(0)&&a.b.a(" "),!0):!1}function yb(a){if(!a.a.b.length)return!1;var b=new r,c=kb(a.a,b);if(!c)return!1;a.a.clear();a.a.a(b.toString());b=W(c);"001"==b?a.h=X(a.ea,""+c):b!=a.ca&&(a.h=ob(a,b));a.b.a(""+c).a(" ");a.m="";return!0}
function Cb(a,b){var c=a.o.toString();if(0<=c.substring(a.u).search(a.ha)){var d=c.search(a.ha),c=c.replace(a.ha,b);a.o.clear();a.o.a(c);a.u=d;return c.substring(0,a.u+1)}1==a.g.length&&(a.l=!1);a.w="";return a.j.toString()};var R=N.a(),Z,Gb={AN:"BQ",PN:"NZ"},Hb=void 0;function Ib(a){a=Gb[a]||a;if(-1===Z.indexOf(a))throw Error("PHN_UNSUPPORTED_REGION");Hb=new nb(a)}
function Jb(a){var b=new H,c=a.countryCode,d=a.nationalNumber;a=a.extension;if(void 0===c)throw Error("PHN_COUNTRY_MISSING");if("string"===typeof c){if(isNaN(Number(c)))throw Error("PHN_COUNTRY_CODE_INVALID");c=Number(c)}x(b,1,c);if(void 0===d)throw Error("PHN_NUMBER_EMPTY");if("string"===typeof d){if(isNaN(Number(d)))throw Error("PHN_FORMAT_INVALID");c="0"===d.charAt(0)&&ib(c);x(b,4,c);d=Number(d)}x(b,2,d);void 0!==a&&("number"===typeof a?x(b,3,a.toString()):x(b,3,a));return b}
p("countryCodeToRegionCodeMap",function(){if(Z)return J});p("getCountryCodeForRegion",function(a){if(Z){a=Gb[a]||a;if(-1===Z.indexOf(a))throw Error("PHN_UNSUPPORTED_REGION");return $a(a)?hb(R,a):0}});p("getSupportedRegions",function(){if(Z)return Za()});
p("formatPhoneNumber",function(a,b){var c;try{c=Jb(a)}catch(e){throw e;}b=b||{};var d;switch(b.style){case "national":d=2;break;case "international":d=1;break;case "e164":d=0;break;case "rfc3966":d=3;break;default:throw Error("PHN_OPTIONS_INVALID");}return ab(c,d).toString()});
p("validatePhoneNumber",function(a,b){b=Gb[b]||b;if(-1===Z.indexOf(b))throw Error("PHN_UNSUPPORTED_REGION");var c;try{c=Jb(a)}catch(S){throw S;}var d,e="PHN_PARSE_ERROR";if(b)d=gb(R,c,b),e="PHN_INVALID_FOR_REGION";else{d=c;var f=R,g;if(d)if(g=A(d,1),g=J[g])if(1==g.length)g=g[0];else b:{for(var h=db(d),l,t=g.length,F=0;F<t;F++){l=g[F];var P=X(f,l);if(null!=P.f[23]){if(!h.search(w(P,23))){g=l;break b}}else if(-1!=fb(h,P)){g=l;break b}}g=null}else g=null;else g=null;d=gb(f,d,g)}if(d)return!0;f=c;d=R;
c=db(f);f=A(f,1);f in J?(d=A(w(V(d,f,W(f)),1),3),d=jb(d,c)):d=1;2===d?e="PHN_NUMBER_TOO_SHORT":3===d&&(e="PHN_NUMBER_TOO_LONG");return Error(e)});
p("parsePhoneNumber",function(a,b){b=Gb[b]||b;if(-1===Z.indexOf(b))throw Error("PHN_UNSUPPORTED_REGION");try{var c=b,d=R;if(null==a)throw"The string supplied did not seem to be a phone number";if(250<a.length)throw"The string supplied is too long to be a phone number";var e=new r,f=a.indexOf(";phone-context=");if(0<f){var g=f+15;if("+"==a.charAt(g)){var h=a.indexOf(";",g);0<h?e.a(a.substring(g,h)):e.a(a.substring(g))}var l=a.indexOf("tel:");e.a(a.substring(0<=l?l+4:0,f))}else e.a(Ua(a));var t=e.toString(),
F=t.indexOf(";isub=");0<F&&(e.clear(),e.a(t.substring(0,F)));if(!Va(e.toString()))throw"The string supplied did not seem to be a phone number";var P;P=!0;var S=e.toString();if(P=!($a(c)||null!=S&&0<S.length&&O.test(S)))throw"Invalid country calling code";var n=new H,v;a:{var da=e.toString(),xa=da.search(Qa);if(0<=xa&&Va(da.substring(0,xa)))for(var ea=da.match(Qa),Kb=ea.length,f=1;f<Kb;++f)if(null!=ea[f]&&0<ea[f].length){e.clear();e.a(da.substring(0,xa));v=ea[f];break a}v=""}0<v.length&&x(n,3,v);var K=
X(d,c),L=new r;v=0;var T=e.toString();try{v=lb(T,K,L,n)}catch(U){if("Invalid country calling code"==U&&O.test(T)){if(T=T.replace(O,""),v=lb(T,K,L,n),!v)throw U;}else throw U;}if(v){var bb=W(v);bb!=c&&(K=V(d,v,bb))}else Ya(e),L.a(e.toString()),null!=c&&(v=A(K,10),x(n,1,v));if(2>L.b.length)throw"The string supplied is too short to be a phone number";if(K){var ya=new r(L.toString());mb(ya,K,new r);var Lb=ya.toString(),Mb=A(w(K,1),3);2!=jb(Mb,Lb)&&(L=ya)}var y=L.toString(),cb=y.length;if(2>cb)throw"The string supplied is too short to be a phone number";
if(17<cb)throw"The string supplied is too long to be a phone number";if(1<y.length&&"0"==y.charAt(0)){x(n,4,!0);for(c=1;c<y.length-1&&"0"==y.charAt(c);)c++;1!=c&&x(n,8,c)}x(n,2,parseInt(y,10))}catch(U){switch(U){case "Invalid country calling code":n="PHN_COUNTRY_CODE_INVALID";break;case "The string supplied did not seem to be a phone number":n="PHN_NOT_A_NUMBER";break;case "Phone number too short after IDD":n="PHN_NUMBER_TOO_SHORT_AFTER_IDD";break;case "The string supplied is too short to be a phone number":n=
"PHN_NUMBER_TOO_SHORT";break;case "The string supplied is too long to be a phone number":n="PHN_NUMBER_TOO_LONG";break;default:n="PHN_PARSE_ERROR"}return Error(n)}n?(y={countryCode:n.f[1].toString(),nationalNumber:n.f[2].toString()},n.f[4]&&ib(n.f[1])&&(y.nationalNumber="0"+y.nationalNumber),void 0!==n.f[3]&&(y.extension=n.f[3]),n=y):n=null;return n});p("useMeta",function(a){Z=a.regionCodes;var b=a.countryToMetadata;J=a.countryCodeToRegionCodeMap;M=b;Ib(Z[0])});p("asYouType.clear",function(){Hb.clear()});
p("asYouType.inputDigit",function(a){var b=Hb;b.ba=wb(b,a);return b.ba});p("asYouType.setRegion",Ib);
