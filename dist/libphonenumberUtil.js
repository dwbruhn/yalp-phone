for(var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,m=["String","prototype","repeat"],n=0;n<m.length-1;n++){var p=m[n];p in h||(h[p]={});h=h[p]}
var ba=m[m.length-1],q=h[ba],r=q?q:function(a){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");b=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var c="";a;)if(a&1&&(c+=b),a>>>=1)b+=b;return c};r!=q&&null!=r&&aa(h,ba,{configurable:!0,writable:!0,value:r});var ca=this;function u(a){return"string"==typeof a}
function v(a,b){var c=a.split("."),d=ca;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}function w(a,b){function c(){}c.prototype=b.prototype;a.pa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.oa=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};function x(a,b){null!=a&&this.a.apply(this,arguments)}x.prototype.b="";x.prototype.set=function(a){this.b=""+a};x.prototype.a=function(a,b,c){this.b+=String(a);if(null!=b)for(var d=1;d<arguments.length;d++)this.b+=arguments[d];return this};function y(a){a.b=""}x.prototype.toString=function(){return this.b};var da=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ea=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=u(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];b.call(c,l,k,a)&&(e[f++]=l)}return e};
function fa(a,b){a.sort(b||ga)}function ga(a,b){return a>b?1:a<b?-1:0};function ha(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};function ia(a,b){this.b=a;this.a={};for(var c=0;c<b.length;c++){var d=b[c];this.a[d.a]=d}}function ja(a){a=ha(a.a);fa(a,function(a,c){return a.a-c.a});return a};function ka(a,b){this.a=a;this.h=!!b.w;this.b=b.c;this.l=b.type;this.j=!1;switch(this.b){case la:case ma:case na:case oa:case pa:case qa:case ra:this.j=!0}this.g=b.defaultValue}var ra=1,qa=2,la=3,ma=4,na=6,oa=16,pa=18;function z(){this.f={};this.b=this.i().a;this.a=this.g=null}z.prototype.has=function(a){return null!=this.f[a.a]};z.prototype.get=function(a,b){return A(this,a.a,b)};z.prototype.set=function(a,b){B(this,a.a,b)};
function sa(a,b){for(var c=ja(a.i()),d=0;d<c.length;d++){var e=c[d],f=e.a;if(null!=b.f[f]){a.a&&delete a.a[e.a];var g=11==e.b||10==e.b;if(e.h)for(var e=C(b,f)||[],k=0;k<e.length;k++){var l=a,t=f,fb=g?e[k].clone():e[k];l.f[t]||(l.f[t]=[]);l.f[t].push(fb);l.a&&delete l.a[t]}else e=C(b,f),g?(g=C(a,f))?sa(g,e):B(a,f,e.clone()):B(a,f,e)}}}z.prototype.clone=function(){var a=new this.constructor;a!=this&&(a.f={},a.a&&(a.a={}),sa(a,this));return a};
function C(a,b){var c=a.f[b];if(null==c)return null;if(a.g){if(!(b in a.a)){var d=a.g,e=a.b[b];if(null!=c)if(e.h){for(var f=[],g=0;g<c.length;g++)f[g]=d.a(e,c[g]);c=f}else c=d.a(e,c);return a.a[b]=c}return a.a[b]}return c}function A(a,b,c){var d=C(a,b);return a.b[b].h?d[c||0]:d}function D(a,b){var c;if(null!=a.f[b])c=A(a,b,void 0);else a:{c=a.b[b];if(void 0===c.g){var d=c.l;if(d===Boolean)c.g=!1;else if(d===Number)c.g=0;else if(d===String)c.g=c.j?"0":"";else{c=new d;break a}}c=c.g}return c}
function E(a,b){return a.b[b].h?null!=a.f[b]?a.f[b].length:0:null!=a.f[b]?1:0}function B(a,b,c){a.f[b]=c;a.a&&(a.a[b]=c)}function F(a,b){var c=[],d;for(d in b)0!=d&&c.push(new ka(d,b[d]));return new ia(a,c)};/*

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
function G(){z.call(this)}w(G,z);var ta=null;function H(){z.call(this)}w(H,z);var ua=null;function I(){z.call(this)}w(I,z);var va=null;
G.prototype.i=function(){var a=ta;a||(ta=a=F(G,{0:{name:"NumberFormat",ga:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,c:9,type:String},2:{name:"format",required:!0,c:9,type:String},3:{name:"leading_digits_pattern",w:!0,c:9,type:String},4:{name:"national_prefix_formatting_rule",c:9,type:String},6:{name:"national_prefix_optional_when_formatting",c:8,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",c:9,type:String}}));return a};G.i=G.prototype.i;
H.prototype.i=function(){var a=ua;a||(ua=a=F(H,{0:{name:"PhoneNumberDesc",ga:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",c:9,type:String},3:{name:"possible_number_pattern",c:9,type:String},9:{name:"possible_length",w:!0,c:5,type:Number},10:{name:"possible_length_local_only",w:!0,c:5,type:Number},6:{name:"example_number",c:9,type:String},7:{name:"national_number_matcher_data",c:12,type:String},8:{name:"possible_number_matcher_data",c:12,type:String}}));return a};H.i=H.prototype.i;
I.prototype.i=function(){var a=va;a||(va=a=F(I,{0:{name:"PhoneMetadata",ga:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",c:11,type:H},2:{name:"fixed_line",c:11,type:H},3:{name:"mobile",c:11,type:H},4:{name:"toll_free",c:11,type:H},5:{name:"premium_rate",c:11,type:H},6:{name:"shared_cost",c:11,type:H},7:{name:"personal_number",c:11,type:H},8:{name:"voip",c:11,type:H},21:{name:"pager",c:11,type:H},25:{name:"uan",c:11,type:H},27:{name:"emergency",c:11,type:H},28:{name:"voicemail",c:11,type:H},
24:{name:"no_international_dialling",c:11,type:H},9:{name:"id",required:!0,c:9,type:String},10:{name:"country_code",c:5,type:Number},11:{name:"international_prefix",c:9,type:String},17:{name:"preferred_international_prefix",c:9,type:String},12:{name:"national_prefix",c:9,type:String},13:{name:"preferred_extn_prefix",c:9,type:String},15:{name:"national_prefix_for_parsing",c:9,type:String},16:{name:"national_prefix_transform_rule",c:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",c:8,defaultValue:!1,
type:Boolean},19:{name:"number_format",w:!0,c:11,type:G},20:{name:"intl_number_format",w:!0,c:11,type:G},22:{name:"main_country_for_code",c:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",c:9,type:String},26:{name:"leading_zero_possible",c:8,defaultValue:!1,type:Boolean}}));return a};I.i=I.prototype.i;function J(){z.call(this)}var wa;w(J,z);var xa={na:1,ma:5,la:10,ka:20};
J.prototype.i=function(){wa||(wa=F(J,{0:{name:"PhoneNumber",ga:"i18n.phonenumbers.PhoneNumber"},1:{name:"country_code",required:!0,c:5,type:Number},2:{name:"national_number",required:!0,c:4,type:Number},3:{name:"extension",c:9,type:String},4:{name:"italian_leading_zero",c:8,type:Boolean},8:{name:"number_of_leading_zeros",c:5,defaultValue:1,type:Number},5:{name:"raw_input",c:9,type:String},6:{name:"country_code_source",c:14,defaultValue:1,type:xa},7:{name:"preferred_domestic_carrier_code",c:9,type:String}}));
return wa};J.ctor=J;J.ctor.i=J.prototype.i;function K(){}K.prototype.b=function(a){new a.b;throw Error("Unimplemented");};K.prototype.a=function(a,b){if(11==a.b||10==a.b)return b instanceof z?b:this.b(a.l.prototype.i(),b);if(14==a.b){if(u(b)&&ya.test(b)){var c=Number(b);if(0<c)return c}return b}if(!a.j)return b;c=a.l;if(c===String){if("number"==typeof b)return String(b)}else if(c===Number&&u(b)&&("Infinity"===b||"-Infinity"===b||"NaN"===b||ya.test(b)))return Number(b);return b};var ya=/^-?[0-9]+$/;function za(){}w(za,K);za.prototype.b=function(a,b){var c=new a.b;c.g=this;c.f=b;c.a={};return c};function Aa(){}w(Aa,za);Aa.prototype.a=function(a,b){return 8==a.b?!!b:K.prototype.a.apply(this,arguments)};var L,M;/*

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
var Ba={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9"},Ca={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",
7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9",A:"2",B:"2",C:"2",D:"3",E:"3",F:"3",G:"4",H:"4",I:"4",J:"5",K:"5",L:"5",M:"6",N:"6",O:"6",P:"7",
Q:"7",R:"7",S:"7",T:"8",U:"8",V:"8",W:"9",X:"9",Y:"9",Z:"9"},Da=RegExp("[+\uff0b]+"),O=RegExp("^[+\uff0b]+"),Ea=RegExp("([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])"),Fa=RegExp("[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]"),Ga=/[\\\/] *x/,Ha=RegExp("[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$"),Ia=/(?:.*?[A-Za-z]){3}.*/,Ja=RegExp("(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$",
"i"),Ka=RegExp("^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$",
"i"),La=/(\$\d)/,Ma=/^\(?\$1\)?$/;function Na(a){var b=a.search(Fa);0<=b?(a=a.substring(b),a=a.replace(Ha,""),b=a.search(Ga),0<=b&&(a=a.substring(0,b))):a="";return a}function Oa(a){return 2>a.length?!1:P(Ka,a)}function Pa(a){return P(Ia,a)?Qa(a,Ca):Qa(a,Ba)}function Ra(a){var b=Pa(a.toString());y(a);a.a(b)}function Sa(){return ea(Object.keys(M),function(a){return isNaN(a)})}
function Qa(a,b){for(var c=new x,d,e=a.length,f=0;f<e;++f)d=a.charAt(f),d=b[d.toUpperCase()],null!=d&&c.a(d);return c.toString()}function Q(a){return null!=a&&isNaN(a)&&a.toUpperCase()in M}
function Ta(a,b){var c=R;if(0==A(a,2)&&null!=a.f[5]){var d=D(a,5);if(0<d.length)return d}var d=D(a,1),e=Ua(a);if(0==b)return Va(d,0,e,"");if(!(d in L))return e;var f=S(c,d,T(d)),c=null!=a.f[3]&&A(a,3).length?3==b?";ext="+A(a,3):null!=f.f[13]?A(f,13)+D(a,3):" ext. "+D(a,3):"";a:{for(var f=(C(f,20)||[]).length&&2!=b?C(f,20)||[]:C(f,19)||[],g,k=f.length,l=0;l<k;++l){g=f[l];var t=E(g,3);if(!t||!e.search(A(g,3,t-1)))if(t=new RegExp(A(g,1)),P(t,e)){f=g;break a}}f=null}f&&(k=f,f=D(k,2),g=new RegExp(A(k,
1)),D(k,5),k=D(k,4),e=2==b&&null!=k&&0<k.length?e.replace(g,f.replace(La,k)):e.replace(g,f),3==b&&(e=e.replace(RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+"),""),e=e.replace(RegExp("[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+","g"),"-")));return Va(d,b,e,c)}function S(a,b,c){return"001"==c?U(a,""+b):U(a,c)}
function Ua(a){var b=""+A(a,2);return null!=a.f[4]&&A(a,4)?Array(D(a,8)+1).join("0")+b:b}function Va(a,b,c,d){switch(b){case 0:return"+"+a+c+d;case 1:return"+"+a+" "+c+d;case 3:return"tel:+"+a+"-"+c+d;default:return c+d}}function Wa(a,b){switch(b){case 4:return A(a,5);case 3:return A(a,4);case 1:return A(a,3);case 0:case 2:return A(a,2);case 5:return A(a,6);case 6:return A(a,8);case 7:return A(a,7);case 8:return A(a,21);case 9:return A(a,25);case 10:return A(a,28);default:return A(a,1)}}
function U(a,b){if(null==b)return null;b=b.toUpperCase();var c=a.a[b];if(!c){c=M[b];if(!c)return null;c=(new Aa).b(I.i(),c);a.a[b]=c}return c}function V(a,b){var c=a.length;return 0<E(b,9)&&-1==da(C(b,9)||[],c)?!1:P(D(b,2),a)}function T(a){return(a=L[a])?a[0]:"ZZ"}function Xa(a,b){var c=U(a,b);if(!c)throw"Invalid region code: "+b;return D(c,10)}function Ya(a){a=S(R,a,T(a));return!!a&&D(a,26)}
function Za(a,b){var c=C(b,9)||[],d=C(b,10)||[],e=a.length;if(-1<da(d,e))return 0;d=c[0];return d==e?0:d>e?2:c[c.length-1]<e?3:-1<da(c,e,1)?0:3}function $a(a,b){var c=a.toString();if(!c.length||"0"==c.charAt(0))return 0;for(var d,e=c.length,f=1;3>=f&&f<=e;++f)if(d=parseInt(c.substring(0,f),10),d in L)return b.a(c.substring(f)),d;return 0}
function ab(a,b,c,d){if(!a.length)return 0;a=new x(a);var e;b&&(e=A(b,11));null==e&&(e="NonMatch");var f=a.toString();if(f.length)if(O.test(f))f=f.replace(O,""),y(a),a.a(Pa(f)),e=1;else{f=new RegExp(e);Ra(a);e=a.toString();if(e.search(f))e=!1;else{var f=e.match(f)[0].length,g=e.substring(f).match(Ea);g&&null!=g[1]&&0<g[1].length&&"0"==Qa(g[1],Ba)?e=!1:(y(a),a.a(e.substring(f)),e=!0)}e=e?5:20}else e=20;if(20!=e){if(2>=a.b.length)throw"Phone number too short after IDD";if(c=$a(a,c))return B(d,1,c),
c;throw"Invalid country calling code";}if(b&&(e=D(b,10),f=""+e,g=a.toString(),!g.lastIndexOf(f,0))){var k=new x(g.substring(f.length)),f=A(b,1),g=new RegExp(D(f,2));bb(k,b,null);b=k.toString();if(!P(g,a.toString())&&P(g,b)||3==Za(a.toString(),f))return c.a(b),B(d,1,e),e}B(d,1,0);return 0}
function bb(a,b,c){var d=a.toString(),e=d.length,f=A(b,15);if(e&&null!=f&&f.length){var g=new RegExp("^(?:"+f+")");if(e=g.exec(d)){var f=new RegExp(D(A(b,1),2)),k=P(f,d),l=e.length-1;b=A(b,16);if(null!=b&&b.length&&null!=e[l]&&e[l].length){if(d=d.replace(g,b),!k||P(f,d))c&&0<l&&c.a(e[1]),a.set(d)}else if(!k||P(f,d.substring(e[0].length)))c&&0<l&&null!=e[l]&&c.a(e[1]),a.set(d.substring(e[0].length))}}}
function cb(a,b,c){if(null==b)throw"The string supplied did not seem to be a phone number";if(250<b.length)throw"The string supplied is too long to be a phone number";var d=new x,e=b.indexOf(";phone-context=");if(0<e){var f=e+15;if("+"==b.charAt(f)){var g=b.indexOf(";",f);0<g?d.a(b.substring(f,g)):d.a(b.substring(f))}f=b.indexOf("tel:");d.a(b.substring(0<=f?f+4:0,e))}else d.a(Na(b));b=d.toString();e=b.indexOf(";isub=");0<e&&(y(d),d.a(b.substring(0,e)));if(!Oa(d.toString()))throw"The string supplied did not seem to be a phone number";
b=d.toString();if(!(Q(c)||null!=b&&0<b.length&&O.test(b)))throw"Invalid country calling code";b=new J;a:{e=d.toString();f=e.search(Ja);if(0<=f&&Oa(e.substring(0,f)))for(var g=e.match(Ja),k=g.length,l=1;l<k;++l)if(null!=g[l]&&0<g[l].length){y(d);d.a(e.substring(0,f));e=g[l];break a}e=""}0<e.length&&B(b,3,e);e=U(a,c);f=new x;g=0;k=d.toString();try{g=ab(k,e,f,b)}catch(t){if("Invalid country calling code"==t&&O.test(k)){if(k=k.replace(O,""),g=ab(k,e,f,b),!g)throw t;}else throw t;}g?(d=T(g),d!=c&&(e=S(a,
g,d))):(Ra(d),f.a(d.toString()),null!=c&&(g=D(e,10),B(b,1,g)));if(2>f.b.length)throw"The string supplied is too short to be a phone number";e&&(a=new x(f.toString()),bb(a,e,new x),2!=Za(a.toString(),A(e,1))&&(f=a));a=f.toString();c=a.length;if(2>c)throw"The string supplied is too short to be a phone number";if(17<c)throw"The string supplied is too long to be a phone number";if(1<a.length&&"0"==a.charAt(0)){B(b,4,!0);for(c=1;c<a.length-1&&"0"==a.charAt(c);)c++;1!=c&&B(b,8,c)}B(b,2,parseInt(a,10));
return b}function P(a,b){var c="string"==typeof a?b.match("^(?:"+a+")$"):b.match(a);return c&&c[0].length==b.length?!0:!1};function db(a){this.ha=RegExp("\u2008");this.ca="";this.o=new x;this.$="";this.j=new x;this.v=new x;this.l=!0;this.aa=this.s=this.ea=!1;this.fa=N.a();this.u=0;this.b=new x;this.ba=!1;this.m="";this.a=new x;this.g=[];this.da=a;this.ia=this.h=eb(this,this.da)}var gb=new I;B(gb,11,"NA");
var hb=/\[([^\[\]])*\]/g,ib=/\d(?=[^,}][^,}])/g,jb=RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*(\\$\\d[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*)+$"),kb=/[- ]/;function eb(a,b){var c=Q(b)?Xa(a.fa,b):0;return(c=U(a.fa,T(c)))?c:gb}
function lb(a){for(var b=a.g.length,c=0;c<b;++c){var d=a.g[c],e=D(d,1);if(a.$==e)return!1;var f;f=a;var g=d,k=D(g,1);if(-1!=k.indexOf("|"))f=!1;else{k=k.replace(hb,"\\d");k=k.replace(ib,"\\d");y(f.o);var l;l=f;var g=D(g,2),t="999999999999999".match(k)[0];t.length<l.a.b.length?l="":(l=t.replace(new RegExp(k,"g"),g),l=l.replace(RegExp("9","g"),"\u2008"));0<l.length?(f.o.a(l),f=!0):f=!1}if(f)return a.$=e,a.ba=kb.test(A(d,4)),a.u=0,!0}return a.l=!1}
function mb(a,b){for(var c=[],d=b.length-3,e=a.g.length,f=0;f<e;++f){var g=a.g[f];E(g,3)?(g=A(g,3,Math.min(d,E(g,3)-1)),b.search(g)||c.push(a.g[f])):c.push(a.g[f])}a.g=c}db.prototype.ja=function(a){return this.ca=nb(this,a)};
function nb(a,b){a.j.a(b);var c=b;if(Ea.test(c)||1==a.j.b.length&&Da.test(c)){var c=b,d;"+"==c?(d=c,a.v.a(c)):(d=Ba[c],a.v.a(d),a.a.a(d));b=d}else a.l=!1,a.ea=!0;if(!a.l){if(!a.ea)if(ob(a)){if(pb(a))return qb(a)}else if(0<a.m.length&&(c=a.a.toString(),y(a.a),a.a.a(a.m),a.a.a(c),c=a.b.toString(),d=c.lastIndexOf(a.m),y(a.b),a.b.a(c.substring(0,d))),a.m!=rb(a))return a.b.a(" "),qb(a);return a.j.toString()}switch(a.v.b.length){case 0:case 1:case 2:return a.j.toString();case 3:if(ob(a))a.aa=!0;else return a.m=
rb(a),sb(a);default:if(a.aa)return pb(a)&&(a.aa=!1),a.b.toString()+a.a.toString();if(0<a.g.length){c=tb(a,b);d=ub(a);if(0<d.length)return d;mb(a,a.a.toString());return lb(a)?vb(a):a.l?W(a,c):a.j.toString()}return sb(a)}}function qb(a){a.l=!0;a.aa=!1;a.g=[];a.u=0;y(a.o);a.$="";return sb(a)}function ub(a){for(var b=a.a.toString(),c=a.g.length,d=0;d<c;++d){var e=a.g[d],f=D(e,1);if((new RegExp("^(?:"+f+")$")).test(b))return a.ba=kb.test(A(e,4)),b=b.replace(new RegExp(f,"g"),A(e,2)),W(a,b)}return""}
function W(a,b){var c=a.b.b.length;return a.ba&&0<c&&" "!=a.b.toString().charAt(c-1)?a.b+" "+b:a.b+b}function sb(a){var b=a.a.toString();if(3<=b.length){for(var c=a.s&&0<E(a.h,20)?C(a.h,20)||[]:C(a.h,19)||[],d=c.length,e=0;e<d;++e){var f=c[e],g;(g=null==a.h.f[12]||a.s||A(f,6))||(g=D(f,4),g=!g.length||Ma.test(g));g&&jb.test(D(f,2))&&a.g.push(f)}mb(a,b);b=ub(a);return 0<b.length?b:lb(a)?vb(a):a.j.toString()}return W(a,b)}
function vb(a){var b=a.a.toString(),c=b.length;if(0<c){for(var d="",e=0;e<c;e++)d=tb(a,b.charAt(e));return a.l?W(a,d):a.j.toString()}return a.b.toString()}
function rb(a){var b=a.a.toString(),c=0,d;1!=A(a.h,10)?d=!1:(d=a.a.toString(),d="1"==d.charAt(0)&&"0"!=d.charAt(1)&&"1"!=d.charAt(1));d?(c=1,a.b.a("1").a(" "),a.s=!0):null!=a.h.f[15]&&(d=new RegExp("^(?:"+A(a.h,15)+")"),(d=b.match(d))&&null!=d[0]&&0<d[0].length&&(a.s=!0,c=d[0].length,a.b.a(b.substring(0,c))));y(a.a);a.a.a(b.substring(c));return b.substring(0,c)}
function ob(a){var b=a.v.toString(),c=new RegExp("^(?:\\+|"+A(a.h,11)+")");return(c=b.match(c))&&null!=c[0]&&0<c[0].length?(a.s=!0,c=c[0].length,y(a.a),a.a.a(b.substring(c)),y(a.b),a.b.a(b.substring(0,c)),"+"!=b.charAt(0)&&a.b.a(" "),!0):!1}function pb(a){if(!a.a.b.length)return!1;var b=new x,c=$a(a.a,b);if(!c)return!1;y(a.a);a.a.a(b.toString());b=T(c);"001"==b?a.h=U(a.fa,""+c):b!=a.da&&(a.h=eb(a,b));a.b.a(""+c).a(" ");a.m="";return!0}
function tb(a,b){var c=a.o.toString();if(0<=c.substring(a.u).search(a.ha)){var d=c.search(a.ha),c=c.replace(a.ha,b);y(a.o);a.o.a(c);a.u=d;return c.substring(0,a.u+1)}1==a.g.length&&(a.l=!1);a.$="";return a.j.toString()};var R=N.a(),X,wb={e164:0,international:1,national:2,rfc3966:3},xb={FIXED_LINE:0,MOBILE:1,FIXED_LINE_OR_MOBILE:2,TOLL_FREE:3,PREMIUM_RATE:4,SHARED_COST:5,VOIP:6,PERSONAL_NUMBER:7,PAGER:8,UAN:9,VOICEMAIL:10},yb={"Invalid country calling code":"PHONE_INVALID_COUNTRY_CODE","The string supplied is too short to be a phone number":"PHONE_NUMBER_TOO_SHORT","The string supplied is too long to be a phone number":"PHONE_NUMBER_TOO_LONG","The string supplied did not seem to be a phone number":"PHONE_NOT_A_NUMBER",
"Phone number too short after IDD":"PHONE_TOO_SHORT_AFTER_IDD"};function Y(){if(!X||!X.length)throw Error("No metadata loaded");}function Z(a){if(-1===X.indexOf(a))throw Error("Metadata not loaded for region: "+a);}function zb(a){if(!a)return null;var b={countryCode:a.f[1].toString(),nationalNumber:a.f[2].toString()};a.f[4]&&Ya(a.f[1])&&(b.nationalNumber="0"+b.nationalNumber);void 0!==a.f[3]&&(b.extension=a.f[3]);return b}
function Ab(a){var b=new J,c,d;c=Number(a.countryCode);B(b,1,c);d=a.nationalNumber;"string"===typeof d&&(c="0"===d.charAt(0)&&Ya(c),B(b,4,c),d=Number(d));B(b,2,d);void 0!==a.extension&&null!==a.extension&&(a=a.extension.toString(),B(b,3,a));return b}v("countryCodeToRegionCodeMap",function(){Y();return L});v("getCountryCodeForRegion",function(a){Y();Z(a);return Q(a)?Xa(R,a):0});v("getSupportedRegions",function(){Y();return Sa()});
v("formatPhoneNumber",function(a,b){Y();var c;try{c=Ab(a)}catch(e){throw Error("Phone object conversion failed: "+e.message);}b=b||{};var d=wb[b.style];if(void 0===d)throw Error("Invalid style property: "+b.style);return Ta(c,d).toString()});
v("validatePhoneNumber",function(a,b){Y();Z(b);var c;try{c=Ab(a)}catch(k){throw Error("Phone object conversion failed: "+k.message);}var d;var e=c,f=R,g=D(e,1);d=S(f,g,b);!d||"001"!=b&&g!=Xa(f,b)?d=!1:(e=Ua(e),d=-1!=(V(e,A(d,1))?V(e,A(d,5))?4:V(e,A(d,4))?3:V(e,A(d,6))?5:V(e,A(d,8))?6:V(e,A(d,7))?7:V(e,A(d,21))?8:V(e,A(d,25))?9:V(e,A(d,28))?10:V(e,A(d,2))?A(d,18)||V(e,A(d,3))?2:0:!A(d,18)&&V(e,A(d,3))?1:-1:-1));if(d)return!0;e=c;d=R;c=Ua(e);e=D(e,1);e in L?(d=S(d,e,T(e)),c=Za(c,A(d,1))):c=1;switch(c){case 1:c=
"PHONE_INVALID_COUNTRY_CODE";break;case 2:c="PHONE_NUMBER_TOO_SHORT";break;case 3:c="PHONE_NUMBER_TOO_LONG";break;default:c="PHONE_INVALID_FOR_COUNTRY"}return Error(c)});v("parsePhoneNumber",function(a,b){Y();Z(b);var c;try{c=cb(R,a,b)}catch(d){return Error(yb[d])}return zb(c)});v("getExampleNumberForType",function(a,b){Y();Z(a);var c=xb[b];void 0===c&&(c=-1);var d;a:{var e=c,c=R;if(Q(a)){e=Wa(U(c,a),e);try{if(null!=e.f[6]){var f=A(e,6);d=cb(c,f,a);break a}}catch(g){}}d=null}return zb(d)});
v("useMeta",function(a){X=a.regionCodes;var b=a.countryToMetadata;L=a.countryCodeToRegionCodeMap;M=b});v("getAsYouTypeFormatter",function(a){Y();Z(a);var b=new db(a);return{inputDigit:function(a){return b.ja(a)},clear:function(){b.ca="";y(b.j);y(b.v);y(b.o);b.u=0;b.$="";y(b.b);b.m="";y(b.a);b.l=!0;b.ea=!1;b.s=!1;b.aa=!1;b.g=[];b.ba=!1;b.h!=b.ia&&(b.h=eb(b,b.da))}}});