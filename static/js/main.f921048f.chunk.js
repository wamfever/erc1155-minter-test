(this.webpackJsonpkeykot=this.webpackJsonpkeykot||[]).push([[0],{233:function(e,n,t){},247:function(e,n){},256:function(e,n){},274:function(e,n){},276:function(e,n){},294:function(e,n){},295:function(e,n){},359:function(e,n){},361:function(e,n){},370:function(e,n){},372:function(e,n){},397:function(e,n){},399:function(e,n){},400:function(e,n){},405:function(e,n){},407:function(e,n){},420:function(e,n){},432:function(e,n){},435:function(e,n){},440:function(e,n){},451:function(e,n){},454:function(e,n){},519:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/metamask_logo.3e74b4a9.jpeg"},521:function(e,n,t){"use strict";t.r(n);var i,a,r,s,o,d,c,u,l,p,b,m=t(0),y=t.n(m),j=t(72),f=t.n(j),h=(t(233),t(226)),x=t(14),O=t(23),g=t(15),T=t(33),v=(t(234),t(218)),w=t.n(v),k={address:"0x9c88EA32d0693F8dA29EaFa2A239A7EF716290f1",abi:[{inputs:[{internalType:"string",name:"name_",type:"string"},{internalType:"string",name:"symbol_",type:"string"},{internalType:"string",name:"_url",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"",type:"address"}],name:"isWhitelisted",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mintTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"whitelisted",type:"address"}],name:"addWhitelist",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"whitelisted",type:"address"}],name:"removeWhitelist",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"burnTokens",outputs:[],stateMutability:"nonpayable",type:"function"}]},M=null,S=null,C=null,A={setConnectedWeb3:function(e,n){S=new(M=e).eth.Contract(k.abi,k.address),C=n,console.log("Successfully registered Web3",M)},getWeb3:function(){return M},getERC1155Contract:function(){return S},burnTokens:function(e,n){return S.methods.burnTokens(e,n).send({from:C})},mintTokens:function(e,n,t){return S.methods.mintTokens(t,e,n).send({from:C})},addWhitelist:function(e){return S.methods.addWhitelist(e).send({from:C})},removeWhitelist:function(e){return S.methods.removeWhitelist(e).send({from:C})},owner:function(){return S.methods.owner().call()},isWhitelisted:function(e){return S.methods.isWhitelisted(e).call()},getCurrentAddress:function(){return C}},W=t(16),F=t(17),q=Object(F.a)("div")(i||(i=Object(W.a)(["\n    flex-direction: row;\n    display: flex;\n    justify-content: space-around;\n"]))),I=Object(F.a)("div")(a||(a=Object(W.a)(["\n    flex-direction: column;\n    display: flex;\n    justify-content: center;\n    height:100%;\n"]))),B=Object(F.a)("div")(r||(r=Object(W.a)(["\n    flex-direction: row;\n    display: flex;\n    justify-content: center;\n"]))),R=Object(F.a)("div")(s||(s=Object(W.a)(["\n    flex-direction: column;\n    display: flex;\n    margin: 12px;\n"]))),E=Object(F.a)("div")(o||(o=Object(W.a)(["\n    h1 {\n        text-align: center;\n        color: #434343;\n        text-transform: uppercase;\n        letter-spacing: .05em;\n    }\n    width: 400px;\n    padding: 15px;\n    border: #ddd thin solid;\n    section {\n        margin-bottom: 15px;\n    }\n"]))),L=Object(F.a)("span")(d||(d=Object(W.a)(["\n    font-size: 0.75rem;\n    color: red;\n"]))),z=t(40),D=F.a.button(c||(c=Object(W.a)(["\n    padding: 10px;\n    box-sizing: border-box;\n    font-family: 'Catamaran', sans-serif;\n    text-transform: uppercase;\n    letter-spacing: .07em;\n    background: #2980b9;\n    border: none;\n    border-radius: 5px;\n    width: 100%;\n    color: white;\n    font-size:16px;\n    cursor: pointer;\n    transition: background 300ms;\n    &:hover {\n        background: #3498db;     \n    };\n    margin-top: 12px;\n"]))),H=F.a.button(u||(u=Object(W.a)(["\n    padding: 10px;\n    box-sizing: border-box;\n    font-family: 'Catamaran', sans-serif;\n    text-transform: uppercase;\n    letter-spacing: .07em;\n    background: darkgrey;\n    border: none;\n    border-radius: 5px;\n    width: 100%;\n    color: white;\n    font-size:16px;\n    cursor: pointer;\n    transition: background 300ms;\n    margin-top: 12px;\n"]))),_=F.a.input(l||(l=Object(W.a)(["\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n"]))),N=t(2),P={getSubmitButton:function(e){return e?Object(N.jsx)(H,{type:"submit",children:"Loading.."}):Object(N.jsx)(D,{type:"submit",children:"Submit"})}};function G(e){var n=e.refreshRoles,t=y.a.useState(!1),i=Object(g.a)(t,2),a=i[0],r=i[1],s=Object(z.a)(),o=s.register,d=s.handleSubmit,c=(s.watch,s.formState.errors);return Object(N.jsx)(R,{children:Object(N.jsxs)(E,{children:[Object(N.jsx)("h2",{children:"OWNER - Add Whitelist"}),Object(N.jsxs)("form",{onSubmit:d((function(e){r(!0),A.addWhitelist(e.whitelisted).then((function(e){Object(T.b)("Whitelisting completed: ".concat(e.transactionHash)),r(!1),n()}))})),children:[Object(N.jsx)(_,Object(O.a)({type:"text",placeholder:"Account"},o("whitelisted",{required:!0}))),c.whitelisted&&Object(N.jsx)(L,{children:"Whitelisted address is required"}),P.getSubmitButton(a)]})]})})}function J(){var e=y.a.useState(!1),n=Object(g.a)(e,2),t=n[0],i=n[1],a=Object(z.a)(),r=a.register,s=a.handleSubmit,o=(a.watch,a.formState.errors);return Object(N.jsx)(R,{children:Object(N.jsxs)(E,{children:[Object(N.jsx)("h2",{children:"REGULAR - Burn Tokens"}),Object(N.jsxs)("form",{onSubmit:s((function(e){i(!0),A.burnTokens(e.tokenId,e.amount).then((function(e){Object(T.b)("Burning completed: ".concat(e.transactionHash)),i(!1)}))})),children:[Object(N.jsx)(_,Object(O.a)({type:"number",placeholder:"Token ID"},r("tokenId",{required:!0}))),o.tokenId&&Object(N.jsx)(L,{children:"Token ID is required"}),Object(N.jsx)(_,Object(O.a)({type:"number",placeholder:"Amount"},r("amount",{required:!0}))),o.amount&&Object(N.jsx)(L,{children:"Amount is required"}),P.getSubmitButton(t)]})]})})}function K(){var e=y.a.useState(!1),n=Object(g.a)(e,2),t=n[0],i=n[1],a=Object(z.a)(),r=a.register,s=a.handleSubmit,o=(a.watch,a.formState.errors);return Object(N.jsx)(R,{children:Object(N.jsxs)(E,{children:[Object(N.jsx)("h2",{children:"MINTER - Mint Tokens"}),Object(N.jsxs)("form",{onSubmit:s((function(e){i(!0),A.mintTokens(e.tokenId,e.amount,e.address).then((function(e){Object(T.b)("Minting completed: ".concat(e.transactionHash)),i(!1)}))})),children:[Object(N.jsx)(_,Object(O.a)({type:"number",placeholder:"Token ID"},r("tokenId",{required:!0}))),o.tokenId&&Object(N.jsx)(L,{children:"This field is required"}),Object(N.jsx)(_,Object(O.a)({type:"number",placeholder:"Amount"},r("amount",{required:!0}))),o.amount&&Object(N.jsx)(L,{children:"This field is required"}),Object(N.jsx)(_,Object(O.a)({type:"text",placeholder:"Account"},r("address",{required:!0}))),o.address&&Object(N.jsx)(L,{children:"This field is required"}),P.getSubmitButton(t)]})]})})}function U(e){var n=e.refreshRoles,t=y.a.useState(!1),i=Object(g.a)(t,2),a=i[0],r=i[1],s=Object(z.a)(),o=s.register,d=s.handleSubmit,c=(s.watch,s.formState.errors);return Object(N.jsx)(R,{children:Object(N.jsxs)(E,{children:[Object(N.jsx)("h2",{children:"OWNER - Remove Whitelist"}),Object(N.jsxs)("form",{onSubmit:d((function(e){r(!0),A.removeWhitelist(e.whitelisted).then((function(e){Object(T.b)("Blacklisting completed: ".concat(e.transactionHash)),r(!1),n()}))})),children:[Object(N.jsx)(_,Object(O.a)({type:"text",placeholder:"Account"},o("whitelisted",{required:!0}))),c.whitelisted&&Object(N.jsx)(L,{children:"Blacklisted address is required"}),P.getSubmitButton(a)]})]})})}function Q(){var e=y.a.useState(!1),n=Object(g.a)(e,2),t=n[0],i=n[1],a=y.a.useState(!1),r=Object(g.a)(a,2),s=r[0],o=r[1],d=y.a.useState(!1),c=Object(g.a)(d,2),u=c[0],l=c[1],p=new w.a(window.ethereum);A.setConnectedWeb3(p,window.ethereum.selectedAddress);var b=function(){A.owner().then((function(e){e&&A.getCurrentAddress()&&(e.toLowerCase()===A.getCurrentAddress().toLowerCase()&&o(!0),A.isWhitelisted(A.getCurrentAddress()).then((function(e){l(e),i(!0)})))}))};if(b(),!t)return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("h1",{children:"LOADING..."})});var m={refreshRoles:b};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(I,{children:[Object(N.jsx)(B,{children:Object(N.jsx)("h1",{children:"KeyKo - ERC1155 Controller"})}),s&&Object(N.jsxs)(q,{children:[Object(N.jsx)(G,Object(O.a)({},m)),Object(N.jsx)(U,Object(O.a)({},m))]}),Object(N.jsxs)(q,{children:[u&&Object(N.jsx)(K,{}),Object(N.jsx)(J,{})]})]}),Object(N.jsx)(T.a,{})]})}var V,X,Y,Z,$,ee,ne,te=Object(F.a)("div")(p||(p=Object(W.a)(["\n    h1 {\n        text-align: center;\n        color: #434343;\n        text-transform: uppercase;\n        letter-spacing: .05em;\n    }\n    width: 400px;\n    padding: 15px;\n    border: #ddd thin solid;\n    section {\n        margin-bottom: 15px;\n    }\n"]))),ie=Object(F.a)("div")(b||(b=Object(W.a)(["\n    flex-direction: column;\n    display: flex;\n    justify-content: center;\n    height: 100%;\n"]))),ae=t(225),re=t.n(ae),se=Object(F.a)("div")(V||(V=Object(W.a)(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    pointer-events: auto;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid rgba(0,0,0,.2);\n    border-radius: .3rem;\n    outline: 0;\n"]))),oe=Object(F.a)("div")(X||(X=Object(W.a)(["\n    display: flex;\n    flex-shrink: 0;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0.2rem 1rem;\n    border-bottom: 1px solid #dee2e6;\n    border-top-left-radius: calc(.3rem - 1px);\n    border-top-right-radius: calc(.3rem - 1px);\n"]))),de=Object(F.a)("div")(Y||(Y=Object(W.a)(["\n    position: relative;\n    flex: 1 1 auto;\n    padding: 1rem;\n"]))),ce=Object(F.a)("div")(Z||(Z=Object(W.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-shrink: 0;\n    align-items: center;\n    justify-content: flex-end;\n    padding: .75rem;\n    border-top: 1px solid #dee2e6;\n    border-bottom-right-radius: calc(.3rem - 1px);\n    border-bottom-left-radius: calc(.3rem - 1px);\n"]))),ue=Object(F.a)("a")($||($=Object(W.a)(["\n    font-size: 14px;\n    line-height: 1.7;\n    color: #666666;\n    margin: 0px;\n    cursor: pointer;\n"]))),le=Object(F.a)("img")(ee||(ee=Object(W.a)(["\n    height: 40px; \n    vertical-align: middle;\n"]))),pe=Object(F.a)("button")(ne||(ne=Object(W.a)(["\n    border: none;\n    color: #FFFFFF;\n    padding: 10px;\n    text-align: center;\n    \n    text-decoration: none;\n    font-size: 16px;\n    cursor: pointer;\n    background-color: #f44336;\n    border-radius: 5px;\n"]))),be={content:{top:"30%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"transparent",border:"none,",minWidth:"300px"}};function me(e){var n=e.modalIsOpen,i=e.afterOpenModal,a=e.closeModal,r=e.connectSuccessCallback;return Object(N.jsx)(re.a,{isOpen:n,onAfterOpen:i,onRequestClose:a,style:be,ariaHideApp:!1,contentLabel:"Connect Modal",children:Object(N.jsxs)(se,{children:[Object(N.jsx)(oe,{children:Object(N.jsx)("h3",{children:"Providers"})}),Object(N.jsx)(de,{children:Object(N.jsxs)(ue,{onClick:function(){window.ethereum.request({method:"eth_requestAccounts"}).then((function(e){r()}),(function(e){console.log("Metamask request error:",e)}))},children:[Object(N.jsx)(le,{src:t(519).default,alt:"MetaMask Logo"}),"Connect MetaMask"]})}),Object(N.jsx)(ce,{children:Object(N.jsx)(pe,{onClick:a,children:"Close"})})]})})}function ye(){var e=Object(x.f)(),n=y.a.useState(!1),t=Object(g.a)(n,2),i=t[0],a=t[1];return Object(N.jsx)(ie,{children:Object(N.jsxs)(te,{children:[Object(N.jsx)(D,{onClick:function(){a(!0)},children:"Connect Provider"}),Object(N.jsx)(me,{modalIsOpen:i,afterOpenModal:function(){},closeModal:function(){a(!1)},connectSuccessCallback:function(){e.push("/dashboard")}})]})})}function je(){return Object(N.jsx)(h.a,{children:Object(N.jsx)("div",{children:Object(N.jsxs)(x.c,{children:[Object(N.jsx)(x.a,{path:"/dashboard",children:Object(N.jsx)(Q,{})}),Object(N.jsx)(x.a,{path:"/",children:Object(N.jsx)(ye,{})})]})})})}var fe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,525)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),i(e),a(e),r(e),s(e)}))};f.a.render(Object(N.jsx)(y.a.StrictMode,{children:Object(N.jsx)(je,{})}),document.getElementById("root")),fe()}},[[521,1,2]]]);
//# sourceMappingURL=main.f921048f.chunk.js.map