(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(3),r=n.n(o),i=(n(14),n(4)),s=n(5),u=n(6),b=n(9),d=n(8),l=n(0),j=function(e){var t=e.title,n=e.children;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:t}),n]})},h=n(7),O=n.n(h),f=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(l.jsx)("ul",{children:Object.keys(t).map((function(e){return Object(l.jsxs)("button",{className:O.a.button,type:"button",onClick:function(){return n(e)},children:[e," "]},e)}))})},v=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,o=e.positivePercentage;return Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:["Good: ",t]}),Object(l.jsxs)("li",{children:["Neutral: ",n]}),Object(l.jsxs)("li",{children:["Bad: ",c]}),Object(l.jsxs)("li",{children:["Total:",a()]}),Object(l.jsxs)("li",{children:["Positive feedback: ",o(),"%"]})]})},g=function(e){var t=e.message;return Object(l.jsx)("h4",{children:t})},k=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.leaveFeedback=function(t){e.setState((function(){return Object(i.a)({},t,e.state[t]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good;return Math.round(100*t/e.countTotalFeedback())},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{title:"Please leave feedback",children:Object(l.jsx)(f,{options:this.state,onLeaveFeedback:this.leaveFeedback})}),Object(l.jsx)(j,{title:"Statistics",children:this.countTotalFeedback()>0?Object(l.jsx)(v,{good:t,neutral:n,bad:c,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage}):Object(l.jsx)(g,{message:"No feedback given"})})]})}}]),n}(c.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};n(16);r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),x()},7:function(e,t,n){e.exports={button:"FeedbackOptions_button__2FogM"}}},[[17,1,2]]]);
//# sourceMappingURL=main.dd1ce41f.chunk.js.map