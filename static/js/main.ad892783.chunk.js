(this.webpackJsonphacker_news=this.webpackJsonphacker_news||[]).push([[0],{48:function(e,t,a){e.exports=a(80)},54:function(e,t,a){},61:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(7),s=a.n(c),l=(a(53),a(54),a(22)),u=a.n(l),o=a(37),i=a(11),h=a(13),m=a(82),b=a(83),p=a(42);a(61);var v=function(){return n.a.createElement("h5",{className:"error-message"},"(Search cannot be blank)")};var E=function(){return n.a.createElement("h3",{className:"error-message"},"An error has occurred. Please try your search again.")};var f=function(){return n.a.createElement("h5",{className:"new-search-message"},"Enter a keyword or phrase in the Search bar to get started!")};var d=function(e){var t=e.searchTerm,a=e.submitSearch;return n.a.createElement("p",{className:"search-history-element",onClick:function(e){return a(t,e)}},t)},g=a(84),y=a(85),S=a(41),O=a(86);var j=function(e){var t=e.handleInputChange,a=e.submitSearch,r=e.query;return n.a.createElement(g.a,{className:"navbar",bg:"dark",expand:"lg"},n.a.createElement(g.a.Brand,{href:"#home"},"Hacker News Search"),n.a.createElement(y.a,{inline:!0,className:"ml-auto",onSubmit:function(e){return a(r,e)}},n.a.createElement(S.a,{type:"text",placeholder:"Search",className:"mr-sm-2",onChange:t,value:r}),n.a.createElement(O.a,{variant:"outline-success",onClick:function(e){return a(r,e)}},"Search")))};var k=function(e){var t=e.title,a=e.author,r=e.url;return n.a.createElement("div",{className:"search-result-div"},n.a.createElement("span",{className:"search-result-span"},n.a.createElement("a",{href:r},t)," by: ",a))},w=a(43),N=a.n(w);var H=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(),l=Object(i.a)(s,2),g=l[0],y=l[1],S=Object(r.useState)(!1),O=Object(i.a)(S,2),w=O[0],H=O[1],T=Object(r.useState)(!1),x=Object(i.a)(T,2),_=x[0],C=x[1],A=Object(r.useState)(!1),D=Object(i.a)(A,2),I=D[0],R=D[1],q=Object(h.c)((function(e){return e.searchHistory})),B=Object(h.b)();function J(e,t){return P.apply(this,arguments)}function P(){return(P=Object(o.a)(u.a.mark((function e(t,r){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),H(!1),C(!1),R(!0),""!==t.trim()){e.next=8;break}return y([]),C(!0),e.abrupt("return",H(!0));case 8:return B({type:"ADD_TO_SEARCH_HISTORY",searchTerm:a}),e.prev=9,e.next=12,N.a.get("http://hn.algolia.com/api/v1/search?query=".concat(t));case 12:return n=e.sent,c(""),e.abrupt("return",y(n.data.hits));case 17:e.prev=17,e.t0=e.catch(9),H(!0),c("");case 21:case"end":return e.stop()}}),e,null,[[9,17]])})))).apply(this,arguments)}return n.a.createElement("div",{className:"App"},n.a.createElement(j,{className:"search-input",handleInputChange:function(e){c(e.target.value)},submitSearch:J,query:a}),n.a.createElement(m.a,null,0===q.length&&!I&&n.a.createElement(f,null),w&&n.a.createElement(E,null),_&&n.a.createElement(v,null),n.a.createElement(b.a,null,n.a.createElement(p.a,{md:3,className:"text-center"},q.length>0&&n.a.createElement("h4",null,"Previous Searches:"),q.map((function(e,t){return n.a.createElement(d,{key:t,submitSearch:J,searchTerm:e})}))),n.a.createElement(p.a,{md:9,className:"text-right align-right"},console.log("search results",g),g&&g.length>0&&n.a.createElement("h4",null,"Search Results:"),g&&g.map((function(e){return e.title&&n.a.createElement(k,{key:e.objectID,title:e.title,author:e.author,url:e.url})}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(16),x=a(45),_=a(26),C={searchHistory:[]},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_SEARCH_HISTORY":return e.searchHistory.includes(t.searchTerm)?e:Object(_.a)(Object(_.a)({},e),{},{searchHistory:[].concat(Object(x.a)(e.searchHistory),[t.searchTerm])});default:return e}},D=Object(T.b)(A);s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h.a,{store:D},n.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.ad892783.chunk.js.map