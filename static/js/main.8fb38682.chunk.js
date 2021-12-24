(this["webpackJsonptech-bridge"]=this["webpackJsonptech-bridge"]||[]).push([[0],{25:function(e,t,s){},26:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var n=s(1),r=s.n(n),o=s(13),i=s.n(o),c=(s(25),s(6)),a=s(7),l=s(10),d=s(9),j=s(8),u=(s(26),s(27),s(4)),h=s(12),p=s(5),b=s(2),O=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{id:"navbar",children:Object(b.jsx)(u.p,{color:"dark",dark:!0,fixed:"top",children:Object(b.jsx)(u.q,{href:"/",children:"Tech-Bridge"})})})}}]),s}(n.Component),m=O,g=(s(31),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){var e,t=this.props,s=t.zoneData,n=t.status;return"locked"===n&&(e=Object(b.jsx)(u.e,{color:"danger",disabled:!0,children:"Locked"})),"completed"===n&&(e=Object(b.jsx)(h.b,{to:"/zone/".concat(s.name),children:Object(b.jsx)(u.e,{color:"success",children:"Completed"})})),"start"===n&&(e=Object(b.jsx)(h.b,{to:"/zone/".concat(s.name),children:Object(b.jsx)(u.e,{color:"primary",children:"Start"})})),"inprogress"===n&&(e=Object(b.jsx)(h.b,{to:"/zone/".concat(s.name),children:Object(b.jsx)(u.e,{color:"warning",children:"Resume"})})),Object(b.jsx)(u.f,{className:"zone",children:Object(b.jsxs)(u.g,{children:[Object(b.jsx)(u.j,{tag:"h5",children:s.name}),Object(b.jsx)(u.i,{children:s.desc}),e]})})}}]),s}(n.Component)),x=g,f=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){for(var e=this.props.zonesJson,t=[],s=0;s<e.length;s++)t.push(e[s].name);for(var n=this.props.lessonProgress,r=[],o=0,i=[],c=!1,a=0;a<n.length;a++)n[a].status?i.push(n[a].zoneName):c=!0;for(;o<t.length&&i.find((function(e){return e===t[o]}));)r.push(Object(b.jsx)(x,{zoneData:e[o],status:"completed"})),o++;for(c?r.push(Object(b.jsx)(x,{zoneData:e[o],status:"inprogress"})):o<t.length&&r.push(Object(b.jsx)(x,{zoneData:e[o],status:"start"})),o++;o<t.length;)r.push(Object(b.jsx)(x,{zoneData:e[o],status:"locked"})),o++;return Object(b.jsx)("div",{className:"zones",children:r})}}]),s}(n.Component),v=f,y=(s(32),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return this.props.status?Object(b.jsx)(u.e,{className:"instructionFunction",color:"success",onClick:this.props.onClick,children:"Watch Again"}):Object(b.jsx)(u.e,{className:"instructionFunction",color:"primary",onClick:this.props.onClick,children:"Play"})}}]),s}(n.Component)),P=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return"completed"===this.props.status?Object(b.jsx)(u.e,{className:"instructionFunction",color:"success",onClick:this.props.onClick,children:"Completed"}):"start"===this.props.status?Object(b.jsx)(u.e,{className:"instructionFunction",color:"primary",onClick:this.props.onClick,children:"Start"}):"locked"===this.props.status?Object(b.jsx)(u.e,{className:"instructionFunction",color:"danger",onClick:this.props.onClick,disabled:!0,children:"Locked"}):Object(b.jsx)(b.Fragment,{})}}]),s}(n.Component),k=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).state={openId:0,startTime:"",sectionProgress:n.props.sectionProgress},n.toggle=n.toggle.bind(Object(l.a)(n)),n.sendExerciseResponse=n.sendExerciseResponse.bind(Object(l.a)(n)),n.completeVideo=n.completeVideo.bind(Object(l.a)(n)),n}return Object(a.a)(s,[{key:"toggle",value:function(e){this.state.openId===e?this.setState({openId:0}):this.setState({openId:e,startTime:Math.round((new Date).getTime()/1e3)})}},{key:"sendExerciseResponse",value:function(e){this.props.sendExerciseResponse(e,this.state.sectionProgress.exercises[e].response,this.state.startTime),this.setState({openId:0})}},{key:"completeVideo",value:function(){this.props.completeVideo(),this.setState({openId:0})}},{key:"render",value:function(){var e=this,t=this.props.sectionData,s=t.exercises,n=[],r=[],o=0;if(this.state.sectionProgress.video){for(var i=function(){var t=o+2;n.push(Object(b.jsxs)(u.f,{children:[Object(b.jsxs)(u.h,{className:"instructionHeader",children:[Object(b.jsx)(u.j,{className:"instruction",children:s[o].code}),Object(b.jsx)(P,{status:"completed",onClick:function(){return e.toggle(t)}})]}),Object(b.jsx)(u.k,{isOpen:e.state.openId===t,children:Object(b.jsxs)(u.g,{children:[s[o].desc,Object(b.jsx)(u.n,{type:"textarea",placeholder:"Enter your response",value:e.state.sectionProgress.exercises[o].response,onChange:function(s){var n=e.state.sectionProgress;n.exercises[t-2].response=s.target.value,e.setState({sectionProgress:n})}}),Object(b.jsx)(u.e,{color:"primary",onClick:function(){return e.sendExerciseResponse(t-2)},children:"Submit"})]})})]})),o++};o<s.length&&this.state.sectionProgress.exercises[o].status;)i();if(o<s.length){var c=o+2;n.push(Object(b.jsxs)(u.f,{children:[Object(b.jsxs)(u.h,{className:"instructionHeader",children:[Object(b.jsx)(u.j,{className:"instruction",children:s[o].code}),Object(b.jsx)(P,{status:"start",onClick:function(){return e.toggle(c)}})]}),Object(b.jsx)(u.k,{isOpen:this.state.openId===c,children:Object(b.jsxs)(u.g,{children:[s[o].desc,Object(b.jsx)(u.n,{type:"textarea",placeholder:"Enter your response",value:this.state.sectionProgress.exercises[o].response,onChange:function(t){var s=e.state.sectionProgress;s.exercises[c-2].response=t.target.value,e.setState({sectionProgress:s})}}),Object(b.jsx)(u.e,{color:"primary",onClick:function(){return e.sendExerciseResponse(c-2)},children:"Submit"})]})})]})),o++}}else r.push(Object(b.jsx)(u.e,{color:"primary",onClick:function(){return e.completeVideo()},children:"Mark Video as complete"}));for(var a=function(){var t=o+2;n.push(Object(b.jsxs)(u.f,{children:[Object(b.jsxs)(u.h,{className:"instructionHeader",children:[Object(b.jsx)(u.j,{className:"instruction",children:s[o].code}),Object(b.jsx)(P,{status:"locked",onClick:function(){return e.toggle(t)}})]}),Object(b.jsx)(u.k,{isOpen:e.state.openId===t,children:Object(b.jsxs)(u.g,{children:[s[o].desc,Object(b.jsx)(u.n,{type:"textarea",placeholder:"Enter your response"}),Object(b.jsx)(u.e,{color:"primary",children:"Submit"})]})})]})),o++};o<s.length;)a();return Object(b.jsxs)("div",{children:[Object(b.jsxs)(u.f,{children:[Object(b.jsxs)(u.h,{className:"instructionHeader",children:[Object(b.jsx)(u.j,{className:"instruction",children:"Play Course Video"}),Object(b.jsx)(y,{status:this.state.sectionProgress.video,onClick:function(){return e.toggle(1)}})]}),Object(b.jsx)(u.k,{isOpen:1===this.state.openId,children:Object(b.jsxs)(u.g,{children:[Object(b.jsxs)("video",{width:"400",controls:!0,children:[Object(b.jsx)("source",{src:t.video,type:"video/mp4"}),"Your browser doesn't support HTML video"]}),r]})})]}),n]})}}]),s}(n.Component),C=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).state={error:null,isLoaded:!1,sectionsJson:[],activeCardNo:0,lessonProgress:n.props.lessonProgress},n.toggle=n.toggle.bind(Object(l.a)(n)),n.completeVideo=n.completeVideo.bind(Object(l.a)(n)),n.completeExercise=n.completeExercise.bind(Object(l.a)(n)),n}return Object(a.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("/Tech-Bridge/data/foundation/"+this.props.zoneName+".json").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,sectionsJson:t.sections})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"toggle",value:function(e){e===this.state.activeCardNo?this.setState({activeCardNo:0}):this.setState({activeCardNo:e})}},{key:"completeVideo",value:function(e,t){var s=this.state.lessonProgress;s[e].zoneProgress[t].video=!0,this.updateLessonProgress(s),this.setState({lessonProgress:s})}},{key:"completeExercise",value:function(e,t,s,n,r){var o=this.state.lessonProgress,i=this.state.activeCardNo;o[e].zoneProgress[t].exercises[s].response=n,o[e].zoneProgress[t].exercises[s].startTime=r,o[e].zoneProgress[t].exercises[s].endTime=Math.round((new Date).getTime()/1e3),o[e].zoneProgress[t].exercises[s].status=!0,o[e].zoneProgress[t].exercises.length===s+1&&(o[e].zoneProgress[t].status=!0,o[e].zoneProgress.length===t+1&&(o[e].status=!0)),this.updateLessonProgress(o),this.state.sectionsJson[t].exercises.length===s+1&&i++,this.setState({lessonProgress:o,activeCardNo:i})}},{key:"updateLessonProgress",value:function(e){var t=JSON.stringify({email:this.props.email,lessonProgress:e}),s=new Headers;s.append("Content-Type","application/json");var n={method:"POST",headers:s,body:t,redirect:"follow"};fetch(this.props.mainApis.updateLesson,n).then((function(e){return e.text()})).then((function(e){200!==JSON.parse(e).status&&alert("Couldn't update progress to server")})).catch((function(e){alert("Couldn't update progress to server"),console.log("error",e)}))}},{key:"render",value:function(){var e=this,t=this.state,s=t.error,n=t.isLoaded,r=t.sectionsJson,o=t.lessonProgress;if(s)return Object(b.jsxs)("div",{children:["Error: ",s.message]});if(!n)return Object(b.jsx)("div",{children:"Loading..."});var i=function(){var t,s,n=[],i=0,c=e.props.zoneName;if(!o.find((function(e){return e.zoneName===c}))){for(var a={zoneName:c,status:!1,zoneProgress:[]},l=0;l<r.length;l++){a.zoneProgress.push({status:!1,video:!1,exercises:[]});for(var d=0;d<r[l].exercises.length;d++)a.zoneProgress[l].exercises.push({status:!1,startTime:"",endTime:"",response:""})}o.push(a),e.setState({lessonProgress:o})}t=o.find((function(e){return e.zoneName===c})).zoneProgress,s=o.findIndex((function(e){return e.zoneName===c}));for(var j=function(){var o=i+1;n.push(Object(b.jsxs)(u.d,{children:[Object(b.jsx)(u.c,{targetId:o,children:r[i].desc}),Object(b.jsx)(u.b,{accordionId:o,children:Object(b.jsx)(k,{completeVideo:function(){return e.completeVideo(s,o-1)},sendExerciseResponse:function(t,n,r){return e.completeExercise(s,o-1,t,n,r)},sectionProgress:t[i],sectionData:r[i]})})]})),i++};i<r.length&&!0===t[i].status;)j();if(i<r.length){var h=i+1;n.push(Object(b.jsxs)(u.d,{children:[Object(b.jsx)(u.c,{targetId:h,children:r[i].desc}),Object(b.jsx)(u.b,{accordionId:h,children:Object(b.jsx)(k,{completeVideo:function(){return e.completeVideo(s,h-1)},sendExerciseResponse:function(t,n,r){return e.completeExercise(s,h-1,t,n,r)},sectionProgress:t[i],sectionData:r[i]})})]})),i++}for(var p=function(){var o=i+1;n.push(Object(b.jsxs)(u.d,{children:[Object(b.jsx)(u.c,{targetId:o,children:r[i].desc}),Object(b.jsx)(u.b,{accordionId:o,children:Object(b.jsx)(k,{completeVideo:function(){return e.completeVideo(s,o-1)},sectionProgress:t[i],sectionData:r[i]})})]})),i++};i<r.length;)p();return{v:Object(b.jsx)("div",{className:"sections",children:Object(b.jsx)(u.a,{open:e.state.activeCardNo,toggle:e.toggle,children:n})})}}();return"object"===typeof i?i.v:void 0}}]),s}(n.Component),N=function(e){var t=Object(p.h)().zoneName;return Object(b.jsx)(C,{zoneName:t,lessonProgress:e.lessonProgress,mainApis:e.mainApis,email:e.email})},S=(s(33),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{id:"start_page",children:Object(b.jsxs)("div",{id:"loginOptions",children:[Object(b.jsx)(h.b,{to:"/signup",children:Object(b.jsx)(u.e,{color:"primary",className:"loginButtons",children:"Sign Up"})}),Object(b.jsx)("div",{id:"or",children:"OR"}),Object(b.jsx)(h.b,{to:"/login",children:Object(b.jsx)(u.e,{color:"primary",className:"loginButtons",children:"Login"})})]})})}}]),s}(n.Component)),w=S,z=function(e){var t=e.nav,s=Object(p.g)();return t&&s("/startpage"),Object(b.jsx)(b.Fragment,{})},E=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).state={emails:[],navigate:!1},n.signUpAccount=n.signUpAccount.bind(Object(l.a)(n)),n}return Object(a.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.signUpApis.getEmails).then((function(e){return e.json()})).then((function(t){e.setState({emails:t})}))}},{key:"signUpAccount",value:function(e){var t=this;if(e.preventDefault(),this.state.emails.find((function(e){return e===t.email.value})))alert("Account with this email altready exists");else if(this.password.value===this.confirmPassword.value){var s=JSON.stringify({emailId:this.email.value,name:this.name.value,password:this.password.value});this.sendSignUpToServerAndReportToUser(s)}else alert("Passwords didn't match")}},{key:"sendSignUpToServerAndReportToUser",value:function(e){var t=this,s=new Headers;s.append("Content-Type","application/json");var n={method:"POST",headers:s,body:e,redirect:"follow"};fetch(this.props.signUpApis.createUser,n).then((function(e){return e.text()})).then((function(e){var s=JSON.parse(e);200===s.statusCode&&(alert(s.body),t.setState({navigate:!0}))})).catch((function(e){alert("Account Creation Failed"),console.log("error",e)}))}},{key:"render",value:function(){var e=this;return Object(b.jsxs)(u.l,{onSubmit:this.signUpAccount,children:[Object(b.jsxs)(u.m,{children:[Object(b.jsx)(u.o,{for:"email",children:"Email"}),Object(b.jsx)(u.n,{id:"signupEmail",name:"email",placeholder:"Enter your email ID",type:"email",innerRef:function(t){return e.email=t}})]}),Object(b.jsxs)(u.m,{children:[Object(b.jsx)(u.o,{for:"name",children:"Name"}),Object(b.jsx)(u.n,{id:"signupName",name:"name",placeholder:"Enter your Name",type:"text",innerRef:function(t){return e.name=t}})]}),Object(b.jsxs)(u.m,{children:[Object(b.jsx)(u.o,{for:"password",children:"Password"}),Object(b.jsx)(u.n,{id:"signupPassword",name:"password",placeholder:"Enter password",type:"password",innerRef:function(t){return e.password=t}})]}),Object(b.jsxs)(u.m,{children:[Object(b.jsx)(u.o,{for:"confirmPassword",children:"Confirm Password"}),Object(b.jsx)(u.n,{id:"signupConfirmPassword",name:"confirmPassword",placeholder:"Re-Enter your password",type:"password",innerRef:function(t){return e.confirmPassword=t}})]}),Object(b.jsx)(u.e,{type:"submit",color:"primary",children:"Submit"}),Object(b.jsx)(z,{nav:this.state.navigate})]})}}]),s}(n.Component),A=function(e){var t=e.nav,s=Object(p.g)();return t&&s("/home"),Object(b.jsx)(b.Fragment,{})},T=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).state={navigate:!1},n.login=n.login.bind(Object(l.a)(n)),n}return Object(a.a)(s,[{key:"login",value:function(e){var t=this;e.preventDefault(),fetch("".concat(this.props.loginApis.loginUser,"?email=").concat(this.email.value,"&password=").concat(this.password.value)).then((function(e){return e.json()})).then((function(e){e.authorized?(t.props.getLessonProgressAndEmail(e.lessonProgress,t.email.value),t.setState({navigate:!0})):alert("Incorrect email or password")}))}},{key:"render",value:function(){var e=this;return Object(b.jsxs)(u.l,{onSubmit:this.login,children:[Object(b.jsxs)(u.m,{children:[Object(b.jsx)(u.o,{for:"email",children:"Email"}),Object(b.jsx)(u.n,{id:"loginEmail",name:"email",placeholder:"Enter your email ID",type:"email",innerRef:function(t){return e.email=t}})]}),Object(b.jsxs)(u.m,{children:[Object(b.jsx)(u.o,{for:"password",children:"Password"}),Object(b.jsx)(u.n,{id:"loginPassword",name:"password",placeholder:"Enter password",type:"password",innerRef:function(t){return e.password=t}})]}),Object(b.jsx)(u.e,{type:"submit",color:"primary",children:"Submit"}),Object(b.jsx)(A,{nav:this.state.navigate})]})}}]),s}(n.Component),I=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).state={baseFile:!1,lessonProgress:!1,zonesJson:[],email:""},n.getLessonProgressAndEmail=n.getLessonProgressAndEmail.bind(Object(l.a)(n)),n}return Object(a.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("/Tech-Bridge/data/index.json").then((function(e){return e.json()})).then((function(t){e.setState({baseFile:t})})),fetch("/Tech-Bridge/data/roadmap_foundation.json").then((function(e){return e.json()})).then((function(t){e.setState({zonesJson:t.zones})}))}},{key:"getLessonProgressAndEmail",value:function(e,t){this.setState({lessonProgress:e,email:t})}},{key:"render",value:function(){return this.state.baseFile?Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(h.a,{children:[Object(b.jsx)(m,{}),Object(b.jsxs)(p.d,{children:[Object(b.jsx)(p.b,{exact:!0,path:"/",element:Object(b.jsx)(p.a,{to:"/startpage"})}),Object(b.jsx)(p.b,{exact:!0,path:"/startpage",element:Object(b.jsx)(w,{})}),Object(b.jsx)(p.b,{exact:!0,path:"/signup",element:Object(b.jsx)(E,{signUpApis:this.state.baseFile.apis.signUp})}),Object(b.jsx)(p.b,{exact:!0,path:"/login",element:Object(b.jsx)(T,{loginApis:this.state.baseFile.apis.login,getLessonProgressAndEmail:this.getLessonProgressAndEmail})}),Object(b.jsx)(p.b,{exact:!0,path:"/home",element:Object(b.jsx)(v,{lessonProgress:this.state.lessonProgress,zonesJson:this.state.zonesJson})}),Object(b.jsx)(p.b,{exact:!0,path:"/zone/:zoneName",element:Object(b.jsx)(N,{lessonProgress:this.state.lessonProgress,mainApis:this.state.baseFile.apis.main,email:this.state.email})})]})]})}):Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{}),Object(b.jsx)("div",{id:"loadingApp",children:Object(b.jsx)(u.r,{id:"appSpinner",children:"Loading..."})})]})}}]),s}(n.Component),L=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,41)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;s(e),n(e),r(e),o(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),L()}},[[34,1,2]]]);
//# sourceMappingURL=main.8fb38682.chunk.js.map