(this["webpackJsonpdead-munshi"]=this["webpackJsonpdead-munshi"]||[]).push([[0],{219:function(e,t,a){},220:function(e,t,a){},226:function(e,t,a){},227:function(e,t,a){},228:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(10),l=a.n(i),r=(a(59),a(12)),o=a(13),c=a(2),m=a(15),u=a(14),g=a(4),d=(a(17),a(70),a(39)),h=a.n(d),p=a(40),E=a.n(p);a(71);var v=function(e){var t=e.version;return s.a.createElement(n.Fragment,null,"Main"===t?s.a.createElement("img",{src:h.a,id:"main",alt:"loading"}):s.a.createElement("img",{src:E.a,id:"loading_small_black",alt:"loading",height:"20"}))},f=a(41),A=a.n(f),S=a(24),b=a.n(S),N=a(25),C=a.n(N),U=a(26),k=a.n(U),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={Email:"",Password:"",currenUser:null,loading:!1,ErrorMsg:void 0},n.EmailOnChange=n.EmailOnChange.bind(Object(c.a)(n)),n.PasswordOnChange=n.PasswordOnChange.bind(Object(c.a)(n)),n.SignIn=n.SignIn.bind(Object(c.a)(n)),n.SignedUp=n.SignedUp.bind(Object(c.a)(n)),n.errorHandle=n.errorHandle.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"errorHandle",value:function(e){"auth/wrong-password"==e.code?this.setState({ErrorMsg:"Wrong Password!"}):this.setState({ErrorMsg:"Koi masla occured!"})}},{key:"SignIn",value:function(e){var t=this;e.preventDefault(),this.setState({loading:!0,errorHandle:void 0}),g.auth().signInWithEmailAndPassword(this.state.Email,this.state.Password).then((function(e){t.setState({currenUser:t.state.email}),console.log("Sucessfull!")})).catch((function(e){t.setState({loading:!1}),t.errorHandle(e),console.log(e)}))}},{key:"EmailOnChange",value:function(e){this.setState({Email:e.target.value})}},{key:"PasswordOnChange",value:function(e){this.setState({Password:e.target.value})}},{key:"SignedUp",value:function(){this.props.signUpStatus(!0),console.log("Sign UP!")}},{key:"render",value:function(){return s.a.createElement("div",{className:"login-outer"},s.a.createElement("div",{class:"Login-main"},s.a.createElement("div",null,s.a.createElement("img",{class:"bg-",src:A.a})),s.a.createElement("div",{className:"Login"},s.a.createElement("form",{className:"loginForm"},s.a.createElement("h1",null,"Sign In"),s.a.createElement("div",{className:"inputFields"},s.a.createElement("label",null,"Email:"),s.a.createElement("input",{type:"text",value:this.state.Email,name:"email",placeholder:"Email...",onChange:this.EmailOnChange})),s.a.createElement("div",{className:"inputFields"},s.a.createElement("label",null,"Password:"),s.a.createElement("input",{type:"password",name:"password",placeholder:"Password...",value:this.state.Password,onChange:this.PasswordOnChange})),s.a.createElement("div",{className:"btnAlign"},s.a.createElement("div",{className:"errorAtLogin"},s.a.createElement("p",null,void 0!==this.state.ErrorMsg?this.state.ErrorMsg:" ")),s.a.createElement("button",{onClick:this.SignIn,className:"btn primary SignInBTN"},this.state.loading?s.a.createElement(v,{version:"Loading_small_black"}):" ","Sign In")),s.a.createElement("div",{className:"Align"},s.a.createElement("p",null,"By signing in you are agreeing to all the user terms and services!"),s.a.createElement("p",null,"Don,t have an account?"," ",s.a.createElement("a",{onClick:this.SignedUp,id:"SignUp"}," ","Sign up")))))),s.a.createElement("footer",{className:"App-footer"},s.a.createElement("div",{className:"footer-site-info"},s.a.createElement("h3",null,"Ao na kadi haveli te khushbu la ke..."),s.a.createElement("p",null,"DEAD-MUNSHI V 1.1.2")),s.a.createElement("div",{className:"social-links"},s.a.createElement("a",{href:"https://web.facebook.com/HmMunybb/",target:"_blank",className:"icon-wrapper bg-wrapper"},s.a.createElement("img",{alt:"facebook",className:"icon",src:b.a})),s.a.createElement("a",{href:"https://www.instagram.com/munyb.xxr/",target:"_blank",className:"icon-wrapper bg-wrapper"},s.a.createElement("img",{alt:"instagram",className:"icon",src:C.a})),s.a.createElement("a",{href:"https://github.com/HM-MUNEEB",target:"_blank",className:"icon-wrapper"},s.a.createElement("img",{alt:"GitHub",className:"git-icon",src:k.a})))))}}]),a}(s.a.Component),w=(a(72),a(6));a(73),a(74);var P=function(e){var t;return t=e.Posts.map((function(e){return s.a.createElement("div",{className:"post",key:e.content+e.date},s.a.createElement("p",{className:"status"},e.status),s.a.createElement("h5",null,"Post: "),s.a.createElement("p",{className:"content"},'"',e.content,'"'),s.a.createElement("p",{className:"date"},e.date))})),s.a.createElement("div",null,s.a.createElement("div",null,t))},I=(a(75),a(32),a(45)),y=a.n(I),M=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={errorMsg:null,postUploadLoading:!1,userPosts:"",post:{outherID:null,content:"",date:null,status:"approved",outherName:"",outherUserName:"",postUID:"",imgURL:""}},n.loadUserPost(),n.postOnChange=n.postOnChange.bind(Object(c.a)(n)),n.postBtn=n.postBtn.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"postBtn",value:function(e){var t=this;e.preventDefault(),this.setState({errorMsg:"",postUploadLoading:!0,userPosts:""});var a=g.firestore(),n=g.auth().currentUser;a.collection("USERS_DATA").doc(n.uid).get().then((function(e){var a;null!=(a=e.data())?t.setState((function(e){return{post:Object(w.a)(Object(w.a)({},e.post),{},{outherName:a.firstName,outherUserName:a.userName})}})):console.log("ERROR 404, recieving data from DB!")}));var s=(new Date).toLocaleString(),i=n.uid;this.setState((function(e){return{post:Object(w.a)(Object(w.a)({},e.post),{},{date:s,outherID:i})}})),setTimeout((function(){if(""!==t.state.post.content){var e=n.uid+"_"+t.state.post.date;e=(e=(e=e.replace(/\s/g,"")).replace(/,/g,"")).replace(/\//g,"_"),t.setState((function(t){return{post:Object(w.a)(Object(w.a)({},t.post),{},{postUID:e})}})),a.collection("POSTS").doc(e).set(t.state.post),a.collection("USERS_DATA").doc(n.uid).collection("POSTS").doc(e).set(t.state.post),console.log("Posted!")}else t.setState({errorMsg:"Post can not be empty!"});t.setState({errorMsg:"",postUploadLoading:!1})}),1e3),setTimeout((function(){t.loadUserPost()}),1e3)}},{key:"loadUserPost",value:function(e){var t=this,a=g.firestore(),n=g.auth().currentUser,s=[];a.collection("USERS_DATA").doc(n.uid).collection("POSTS").orderBy("date").get().then((function(e){e.forEach((function(e){s.push(e.data())})),s.reverse()})),setTimeout((function(){t.setState({userPosts:s})}),1e3)}},{key:"postOnChange",value:function(e){var t=e.target.value;this.setState((function(e){return{post:Object(w.a)(Object(w.a)({},e.post),{},{content:t})}}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"postSection"},s.a.createElement("div",{className:"HeaderPostsCategories"},s.a.createElement("p",{className:"postsCategories"},"Create Post"),s.a.createElement("div",{className:"cancel",onClick:this.props.handleState},s.a.createElement("img",{className:"cancelIcon",src:y.a}))),s.a.createElement("form",{className:"createPost"},s.a.createElement("textarea",{value:this.state.post.content,onChange:this.postOnChange,class:"form-control post-text-area"}),s.a.createElement("button",{onClick:this.postBtn,className:"btn btn-primary btn-sm post-btn"},this.state.postUploadLoading?s.a.createElement(v,{version:"small-blackloading_small_black"}):"","Post"),s.a.createElement("p",null,this.state.errorMsg)),""!=this.state.userPosts?s.a.createElement(P,{Posts:this.state.userPosts}):s.a.createElement("center",null,s.a.createElement(v,{className:"loadingPosts",version:"Main"})))}}]),a}(s.a.Component),L=(a(219),a(46)),j=a.n(L),R=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={FNS:!1,LNS:!1,UNS:!1,ES:!1,PassS:!1,CPassS:!1,Confirmpassword:null,CPS:!1,loading:!1,Error:void 0,password:"",userInfo:{}},n.PasswordOnChange=n.PasswordOnChange.bind(Object(c.a)(n)),n.EmailOnChange=n.EmailOnChange.bind(Object(c.a)(n)),n.FirstNameOnChange=n.FirstNameOnChange.bind(Object(c.a)(n)),n.LastNameOnChange=n.LastNameOnChange.bind(Object(c.a)(n)),n.UserNameOnChange=n.UserNameOnChange.bind(Object(c.a)(n)),n.ConfirmPasswordOnChange=n.ConfirmPasswordOnChange.bind(Object(c.a)(n)),n.SignUp=n.SignUp.bind(Object(c.a)(n)),n.loginClicked=n.loginClicked.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"errorHandle",value:function(e){"404"==e?this.setState({Error:"Please fill out entire form!"}):"401"==e?this.setState({Error:"Please Correct Confirm Password!"}):"auth/email-already-in-use"==e?this.setState({Error:"This email address is already in use!"}):this.setState({Error:"Kuch na Kuch garbar ha ji! \ud83d\ude11"})}},{key:"SignUp",value:function(e){var t=this;if(e.preventDefault(),this.setState({loading:!0}),this.state.FNS&&this.state.PassS&&this.state.UNS&&this.state.LNS&&this.state.ES&&this.state.CPassS)if(this.state.password!==this.state.Confirmpassword)this.setState({loading:!1}),this.errorHandle("401");else{var a,n=this.state.userInfo.email,s=this.state.password;g.auth().createUserWithEmailAndPassword(n,s).catch((function(e){a=e.code,e.message})).then((function(e){if(void 0===a){t.setState({error:"",email:"",password:""});var n=g.firestore(),s=g.auth().currentUser;n.collection("USERS_DATA").doc(s.uid).set({email:t.state.userInfo.email,userName:t.state.userInfo.userName,firstName:t.state.userInfo.firstName,lastName:t.state.userInfo.lastName}),t.SignedUp()}console.log("error code: ",a),t.errorHandle(a)}))}else this.errorHandle("404"),this.setState({loading:!1})}},{key:"SignedUp",value:function(){this.props.signUpStatus(!1),console.log("Signed you UP! Now to the Main app")}},{key:"EmailOnChange",value:function(e){this.setState({ES:!0});var t=e.target.value;this.setState((function(e){return{userInfo:Object(w.a)(Object(w.a)({},e.userInfo),{},{email:t})}}))}},{key:"PasswordOnChange",value:function(e){this.setState({PassS:!0,password:e.target.value})}},{key:"ConfirmPasswordOnChange",value:function(e){this.setState({CPassS:!0,Confirmpassword:e.target.value})}},{key:"FirstNameOnChange",value:function(e){this.setState({FNS:!0});var t=e.target.value;this.setState((function(e){return{userInfo:Object(w.a)(Object(w.a)({},e.userInfo),{},{firstName:t})}}))}},{key:"LastNameOnChange",value:function(e){this.setState({LNS:!0});var t=e.target.value;this.setState((function(e){return{userInfo:Object(w.a)(Object(w.a)({},e.userInfo),{},{lastName:t})}}))}},{key:"UserNameOnChange",value:function(e){this.setState({UNS:!0});var t=e.target.value;this.setState((function(e){return{userInfo:Object(w.a)(Object(w.a)({},e.userInfo),{},{userName:t})}}))}},{key:"loginClicked",value:function(){this.props.signUpStatus(!1),console.log("Signed IN!")}},{key:"render",value:function(){return s.a.createElement("div",{className:"SignUp-outer"},s.a.createElement("div",{className:"SignUp-main"},s.a.createElement("div",null,s.a.createElement("img",{class:"bg-",id:"bg-margin",src:j.a})),s.a.createElement("div",{className:"SignUP"},s.a.createElement("form",{className:"SignUpForm"},s.a.createElement("div",{className:"tagLine-align"},s.a.createElement("h5",{onClick:this.loginClicked}," Login "),s.a.createElement("h1",null,"Sign Up")),s.a.createElement("div",{className:"inputFields"},s.a.createElement("label",null,"First Name"),s.a.createElement("input",{value:this.state.userInfo.firstName,onChange:this.FirstNameOnChange,type:"text"})),s.a.createElement("div",{className:"inputFields"},s.a.createElement("label",null,"last Name"),s.a.createElement("input",{value:this.state.userInfo.lastName,onChange:this.LastNameOnChange,type:"text"})),s.a.createElement("div",{className:"inputFields"},s.a.createElement("label",null,"Username"),s.a.createElement("input",{value:this.state.userInfo.userName,onChange:this.UserNameOnChange,type:"text"})),s.a.createElement("div",{className:"inputFields"},s.a.createElement("label",null,"Email"),s.a.createElement("input",{value:this.state.userInfo.email,type:"email",onChange:this.EmailOnChange})),s.a.createElement("div",{className:"inputFields"},s.a.createElement("label",null,"Password"),s.a.createElement("input",{value:this.state.userInfo.passowrd,type:"password",onChange:this.PasswordOnChange})),s.a.createElement("div",{className:"inputFields"},s.a.createElement("label",null,"Confirm Password"),s.a.createElement("input",{value:this.state.userInfo.ConfirmPassword,type:"password",onChange:this.ConfirmPasswordOnChange})),s.a.createElement("div",{className:"btnAlign"},s.a.createElement("p",{className:"errorAtLogin"},void 0!==this.state.Error?this.state.Error:" "),s.a.createElement("button",{onClick:this.SignUp,className:"btn primary SignUpBTN"},this.state.loading?s.a.createElement(v,{version:"Loading_small_black"}):" ","Sign Up")),s.a.createElement("div",{className:"Align"},s.a.createElement("p",null,"By signing up you are agreeing to all the user terms and services!"))))),s.a.createElement("footer",{className:"App-footer"},s.a.createElement("div",{className:"footer-site-info"},s.a.createElement("h3",null,"Ao na kadi haveli te khushbu la ke..."),s.a.createElement("p",null,"DEAD-MUNSHI V 1.1.2")),s.a.createElement("div",{className:"social-links"},s.a.createElement("a",{href:"https://web.facebook.com/HmMunybb/",target:"_blank",className:"icon-wrapper bg-wrapper"},s.a.createElement("img",{alt:"facebook",className:"icon",src:b.a})),s.a.createElement("a",{href:"https://www.instagram.com/munyb.xxr/",target:"_blank",className:"icon-wrapper bg-wrapper"},s.a.createElement("img",{alt:"instagram",className:"icon",src:C.a})),s.a.createElement("a",{href:"https://github.com/HM-MUNEEB",target:"_blank",className:"icon-wrapper"},s.a.createElement("img",{alt:"GitHub",className:"git-icon",src:k.a})))))}}]),a}(s.a.Component),B=a(47),T=a.n(B),D=a(48),x=a.n(D),G=a(49),H=a.n(G),F=(a(220),a(229)),J=a(230),Z=a(231),Q=a(50),W=a.n(Q),V=a(51),Y=a.n(V),K=a(52),X=a.n(K);a(226);var q=function(e){var t,a=e.GPosts;return null!==a&&void 0!==a&&(t=a.map((function(e){return s.a.createElement(F.a,null,s.a.createElement("div",{className:"GPOST",key:e.autherID+e.date},s.a.createElement("div",{className:"post_header"},s.a.createElement("div",{className:"post_user_info"},s.a.createElement("img",{className:"global_user_svg",src:W.a}),s.a.createElement("h3",null,e.outherUserName)),s.a.createElement("div",{className:"status"},"approved"==e.status?s.a.createElement("img",{className:"check_mark_svg",src:Y.a}):"x")),s.a.createElement("div",{className:"post_content"},s.a.createElement("h4",null,"Arz kiya ha: "),s.a.createElement("p",{className:"content"},s.a.createElement(X.a,{text:e.content,min:100,ideal:100,max:150,readMoreText:s.a.createElement("div",{className:"seeMore"},"See more...")}))),s.a.createElement("p",{className:"post_date"},e.date)))}))),s.a.createElement("center",null,s.a.createElement(J.a,{className:"PostsContainer"},s.a.createElement(Z.a,null,t)))},z=(a(227),a(53)),_=a.n(z);var $=function(e){return s.a.createElement("div",{className:"GLaoding",style:{opacity:"100%"}},s.a.createElement("div",{className:"spin-logo"},s.a.createElement("img",{src:_.a})))},ee=a(54),te=a.n(ee),ae=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={USER:null,CU:null,newPost:!1,signUpStatus:!1,userInfo:null,infoCheck:!1,ALLPOSTS:null,GLoading:!1},n.signUpState=n.signUpState.bind(Object(c.a)(n)),n.newPostClick=n.newPostClick.bind(Object(c.a)(n)),n.changePostSectionState=n.changePostSectionState.bind(Object(c.a)(n)),n.loadPosts=n.loadPosts.bind(Object(c.a)(n)),n.logout=n.logout.bind(Object(c.a)(n)),n.setGLoading=n.setGLoading.bind(Object(c.a)(n)),n.loadPosts(),n}return Object(o.a)(a,[{key:"signUpState",value:function(e){this.setState({signUpStatus:e})}},{key:"getUserInfo",value:function(){var e=this,t=g.firestore(),a=g.auth().currentUser;t.collection("USERS_DATA").doc(a.uid).get().then((function(t){var a;void 0!==(a=t.data())?e.setState({userInfo:a,infoCheck:!0}):console.log("ERROR 404, While reteriving the info obj")})).catch((function(e){console.log(e)}))}},{key:"authListener",value:function(){var e=this;g.auth().onAuthStateChanged((function(t){t?(e.setState({USER:!0,CU:t.email}),e.setGLoading(),e.getUserInfo(),e.loadPosts()):e.setState({USER:null})}))}},{key:"componentDidMount",value:function(){this.authListener()}},{key:"logout",value:function(e){e.preventDefault(),g.auth().signOut(),this.setState({USER:null,CU:null,newPost:!1,signUpStatus:!1,userInfo:null,infoCheck:!1,ALLPOSTS:null})}},{key:"newPostClick",value:function(e){this.state.newPost?this.setState({newPost:!1}):this.setState({newPost:!0})}},{key:"changePostSectionState",value:function(){this.setState({newPost:!1})}},{key:"loadPosts",value:function(){var e=this;console.log(this.state.userInfo),this.setState({ALLPOSTS:null});var t=g.firestore(),a=(g.auth().currentUser,[]);t.collection("POSTS").orderBy("date").get().then((function(e){e.forEach((function(e){a.push(e.data())}))})).catch((function(e){console.log(e)})),setTimeout((function(){e.setState({ALLPOSTS:a})}),1e3)}},{key:"setGLoading",value:function(){var e=this;this.setState({GLoading:!0}),setTimeout((function(){e.setState({GLoading:!1})}),3e3)}},{key:"render",value:function(){return this.state.infoCheck&&this.state.userInfo.firstName,s.a.createElement("div",{className:"App",style:(this.state.USER&&this.state.signUpStatus,{"background-color":"#393c43"})},s.a.createElement("div",{style:this.state.GLoading?{overflow:"hidden"}:{overflow:"auto"}},this.state.GLoading?s.a.createElement("div",{className:"Global-Loading"},s.a.createElement($,null)):"",s.a.createElement("header",{className:"header",style:this.state.USER&&!this.state.signUpStatus?{position:"fixed"}:{position:"relative"}},s.a.createElement("div",{className:"logo-Enclosure"},s.a.createElement("div",{className:"Logo"})),s.a.createElement("div",{className:"tagline-enclosure"},s.a.createElement("h3",null,"Dead Munshi"),s.a.createElement("p",null," A Facebook for jigars")),s.a.createElement("div",null,this.state.USER&&!this.state.signUpStatus?s.a.createElement("div",{className:"right-side-contents"},null!=this.state.userInfo?s.a.createElement("div",{className:"userName"},s.a.createElement("img",{alt:"user",src:H.a,className:"userSvg"}),s.a.createElement("h3",null,this.state.userInfo.userName)):"",s.a.createElement("div",{onClick:this.loadPosts},s.a.createElement("img",{alt:"Reload",src:te.a,className:"reloadSvg"}))):"")),this.state.USER&&!this.state.signUpStatus?s.a.createElement("div",{className:"app-main"},s.a.createElement("nav",{className:"navbar"},s.a.createElement("ul",{className:"navbar-nav"},this.state.USER?s.a.createElement("li",{className:"navitem"},s.a.createElement("div",{className:"UserPosts",onClick:this.newPostClick},s.a.createElement("img",{className:"newPostSvg",src:x.a})),s.a.createElement("div",{className:"spaceSeperator"})):" ",this.state.USER?s.a.createElement("li",{className:"navitem "},s.a.createElement("div",{className:"logout",onClick:this.logout},s.a.createElement("img",{src:T.a,className:"logoutSvg"}))):"")),this.state.newPost?s.a.createElement(M,{className:"postSection",handleState:this.changePostSectionState}):"",null!==this.state.ALLPOSTS&&void 0!==this.state.ALLPOSTS?s.a.createElement("div",{className:"posts_align",style:this.state.newPost?{"margin-left":"28%"}:{"margin-left":"0%"}},s.a.createElement(q,{className:"AllPosts",GPosts:this.state.ALLPOSTS})):s.a.createElement("div",{className:"Loader"},s.a.createElement("center",null,s.a.createElement(v,{version:"Main"})))):this.state.signUpStatus?s.a.createElement(R,{signUpStatus:this.signUpState}):s.a.createElement(O,{signUpStatus:this.signUpState})))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));g.initializeApp({apiKey:"AIzaSyAIN1gijqzfende-1gEUEmj6FcNfkIK-T0",authDomain:"dead-munshi.firebaseapp.com",databaseURL:"https://dead-munshi.firebaseio.com",projectId:"dead-munshi",storageBucket:"dead-munshi.appspot.com",messagingSenderId:"1036837940668",appId:"1:1036837940668:web:fddbfb9aa09db9fc6d8fb9",measurementId:"G-LR7G1YW7T5"}),l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(ae,null)),document.getElementById("point-of-diffrenciation")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},24:function(e,t,a){e.exports=a.p+"static/media/facebook.becc1a48.svg"},25:function(e,t,a){e.exports=a.p+"static/media/instagram.485aabce.svg"},26:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzlFQkFERkU4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzlFQkFERkQ4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJFOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJGOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Kk5lQwAABYxJREFUeNrkm29oVXUYx3+7bM3V1FnbqlltrtXWtYRa1nqxooY5E7EhKWGuaTDBagol9SIMDCKICASj+cISw/DPi16ZBakrUBnoC7nNoTMWy6I1c+LmVq6t78N9jpyu555znt855+536IHPi939/jzP95zznN+/kzc1NaUitirwJJgPasF94DZQDG7hMqNgBFwEZ5kU+AH0R+lcXgQCJMBT4EXwLKgM2N7P4FvwJegCk6YKUA5eB23grogu2C/gc7AN/GGKABTsZtAOZqjc2DjYAT5kUfSNBNCkAGwGo1PTZ6PsQ4FuHLp3QD3YDR5QZtgZsAac1ElYokcGbATHDApesS/kUwf7GEkOKAK7wAvKbNsPXgZjYQowG3wNnlDxsONgCbgchgAU/GHwiIqXUT5o8hLBKwfcDA7FMHgrUR/iGLQEoGTyBWhQ8bUGjiFPR4A3QIuKv7VwLKIcQMnue5Dv0fjT/IwtAM3g+RyMBmkU+BXf3qc5Rx3xqDPBE7LjfkaCheCcj1HYKYe6JeBt8GcEo75L3HaJQ7+nfNQ/x7H9p67TFX4L1Pi4EocdfhsGH4BPwVbwqu0xGwI/8vT2N/77Gv+vAJSCO3n6PJ//Vjz72w62cPtORnfAwx7+1nBsW93ugGow7vOKtPkYa9eDl0Clxji9kuvW+yjb5tPncY7xet3MhjoFt2RzgIlU2DQL/O6017W/Be4BawXJqMCgTH+ToOxajvWG1+AmYVBlBglQKrxwmzIFoB9XCzt91CABpL6sti62JcBiXtKS2GMGCSD1pZxjvi7AKmED9PraYJAAG2yvVL+2yi7AImHl90C3QQJ03/B+97ZF1lCYVlN6BBV/BffykNQkoyF4H5grqJOkO6BR2NF2A4O35gifCOs0JjTW9vYaPPPbJ11LJAFqBRVoDf68wQLQI3BBUL424XPiY1lvDOb/ZwRla0iAOYIKv8dAgEFB2VtJgJmCChMxEEAyHigmAQoFFWbFQIDZgrKF0p2hmTEQQOQjCTAmKD8vBgJUCcqOkQBXBBXosEORwcEXKdmBjCskwICgQr5h0+BMW6i8V7LtNkAC9As7WWqwAM8Jy/cnhBMhspVKvq2eC0uwbxLrSWhMa+dpdJQLW6mRpLtpOlyuMcL7CTwErhoSPG2ApjQEuD3BQ0fp0ZJqlT6pZYpt0wieYh60nuWDGp2+At4xIPgt7IvU0jHzBkFdgD27HWDGNGyGFHHfulaXuTN0IkBjZ8EykJeDwKmPFtAXwN8TTltjrVkKfwcawXJW3G3v8DTYCKoiCLwGvAl6QthpbnU6J5jP2f1uh1Wgxbbxwv0qvT/vtZRGA6wuzs50+Pkb8JdgQtPMq1VJld7bnxtSzhjgJD5hzwEW611OZK6xlSvzeYbAsl3Cx4PK7ozodOl6t93hfJByqbzOVnYh+MdHhxfBLI1bnuoMhRx8imPMKgDR5LG/nrSVfddHpx8HeO4/ClmApsw+snXsdk7gYMat+r5Hp0sDCLAkxOA7nfrI1nGxx2tmQUb5x8FuzgvD4Dw4wNm2MIAA1SEF38cx+RaAeBCMZGlwb44GOyUhBD/CsTj24TatpddXq3L+RIVmXnE4QzjJMaSylvBxFdqzKHsVrDD8Dmj36sOvIx0unewHDRENg4MI0BH2FyP0RcZOlzW3Ib7VLvPqDK0z1PEq7bDmLVwCLgnr0AhvnUp/0eJp0k9m6HO4fUp2nGZODgUY5PzUJVlHkxg1TEfnjxqY8I6yb12SSjqLm7T9/Ax4TaW/+JxuIx862KcL4toBk1QFT1omXZLRHQHaL3Npl/r8jH3QjiGsbJ3kGd/fDo6WBWi31KG9a9xXMgzfw35tVfCR9l52dk8Ibe7htnq57YowfY7i4+lYWUL9z+1fAQYACqstE4NCc18AAAAASUVORK5CYII="},39:function(e,t,a){e.exports=a.p+"static/media/loading.a75a5f09.svg"},40:function(e,t,a){e.exports=a.p+"static/media/loading_small_black.98e0685c.svg"},41:function(e,t,a){e.exports=a.p+"static/media/bg.ddb4d662.png"},45:function(e,t,a){e.exports=a.p+"static/media/cancel.cad70081.svg"},46:function(e,t,a){e.exports=a.p+"static/media/bg - signUp.2d05ef70.png"},47:function(e,t,a){e.exports=a.p+"static/media/logout.e75855a1.svg"},48:function(e,t,a){e.exports=a.p+"static/media/posts.382f1e7d.svg"},49:function(e,t,a){e.exports=a.p+"static/media/user.ee5b2f48.svg"},50:function(e,t){e.exports="data:image/png;base64,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"},51:function(e,t,a){e.exports=a.p+"static/media/check.c0e4ffa8.svg"},53:function(e,t,a){e.exports=a.p+"static/media/DEAD-MUNSHI-LOADING.98e08575.png"},54:function(e,t,a){e.exports=a.p+"static/media/reload.8f3bc11a.svg"},55:function(e,t,a){e.exports=a(228)},59:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.a3e5c38d.chunk.js.map