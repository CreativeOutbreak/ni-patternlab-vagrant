/*! JavaScript Hooker - v0.2.3 - 1/29/2012
* http://github.com/cowboy/javascript-hooker
* Copyright (c) 2012 "Cowboy" Ben Alman; Licensed MIT */
(function(a){function d(a){this.value=a}function e(a){this.value=a}function f(a,b){this.context=a,this.args=b}function g(a,b,d){var e;if(typeof b=="string")b=[b];else if(b==null){b=[];for(e in a)a.hasOwnProperty(e)&&b.push(e)}var f=b.length;while(f--)(c.call(a[b[f]])!=="[object Function]"||d(a,b[f])===!1)&&b.splice(f,1);return b}var b=[].slice,c={}.toString;a.override=function(a){return new d(a)},a.preempt=function(a){return new e(a)},a.filter=function(a,b){return new f(a,b)},a.hook=function(c,h,i){return i==null&&(i=h,h=null),typeof i=="function"&&(i={pre:i}),g(c,h,function(c,g){function j(){var j,k,l,m=b.call(arguments);return i.passName&&m.unshift(g),i.pre&&(j=i.pre.apply(this,m)),j instanceof f?k=j=h.apply(j.context,j.args):j instanceof e?k=j=j.value:(k=h.apply(this,arguments),j=j instanceof d?j.value:k),i.post&&(l=i.post.apply(this,[k].concat(m)),l instanceof d&&(j=l.value)),i.once&&a.unhook(c,g),j}var h=c[g];c[g]=j;if(c[g]!==j)return!1;c[g]._orig=h})},a.orig=function(a,b){return a[b]._orig},a.unhook=function(b,c){return g(b,c,function(b,c){var d=a.orig(b,c);if(!d)return!1;b[c]=d})}})(typeof exports=="object"&&exports||this)