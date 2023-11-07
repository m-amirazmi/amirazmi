"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[9497],{3549:(k,x,a)=>{a.r(x),a.d(x,{default:()=>me});var e=a(67294),c=a(334),S=a(40720),F=a(90731),C=a(34726),Y=a(12473),h=a(16607),P=a(96987),l=a(52820),M=a(18226),y=a(41054),L=a(64593),b=a(86896),R=a(88767),q=a(28840),_=a(27027),$=a(13657),X=a(38670),ee=a(7659),U=a(10574),O=a(31988),u=a(6498),N=a(81851),D=a(92795),ae=a(45697),t=a.n(ae),J=a(88972);const V=(0,J.ZP)(X.o)`
  ::-ms-reveal {
    display: none;
  }
`,H=(0,J.ZP)(ee.E)`
  svg {
    height: ${(0,l.Q1)(16)};
    width: ${(0,l.Q1)(16)};
    path {
      fill: ${({theme:n})=>n.colors.neutral600};
    }
  }
`,B=({errors:n,onChange:d,values:m})=>{const{formatMessage:i}=(0,b.Z)(),[s,T]=(0,e.useState)(!1),[r,A]=(0,e.useState)(!1),[Z,G]=(0,e.useState)(!1);return e.createElement(h.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(P.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(U.Z,{variant:"delta",as:"h2"},i({id:"global.change-password",defaultMessage:"Change password"})),e.createElement(O.r,{gap:5},e.createElement(u.P,{s:12,col:6},e.createElement(X.o,{error:n.currentPassword?i({id:n.currentPassword,defaultMessage:n.currentPassword}):"",onChange:d,value:m.currentPassword,label:i({id:"Auth.form.currentPassword.label",defaultMessage:"Current Password"}),name:"currentPassword",type:s?"text":"password",endAction:e.createElement(H,{onClick:w=>{w.stopPropagation(),T(E=>!E)},label:i(s?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},s?e.createElement(N.Z,null):e.createElement(D.Z,null))}))),e.createElement(O.r,{gap:5},e.createElement(u.P,{s:12,col:6},e.createElement(V,{error:n.password?i({id:n.password,defaultMessage:n.password}):"",onChange:d,value:m.password,label:i({id:"global.password",defaultMessage:"Password"}),name:"password",type:r?"text":"password",autoComplete:"new-password",endAction:e.createElement(H,{onClick:w=>{w.stopPropagation(),A(E=>!E)},label:i(r?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},r?e.createElement(N.Z,null):e.createElement(D.Z,null))})),e.createElement(u.P,{s:12,col:6},e.createElement(V,{error:n.confirmPassword?i({id:n.confirmPassword,defaultMessage:n.confirmPassword}):"",onChange:d,value:m.confirmPassword,label:i({id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"}),name:"confirmPassword",type:Z?"text":"password",autoComplete:"new-password",endAction:e.createElement(H,{onClick:w=>{w.stopPropagation(),G(E=>!E)},label:i(Z?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},Z?e.createElement(N.Z,null):e.createElement(D.Z,null))})))))};B.propTypes={errors:t().shape({currentPassword:t().string,password:t().string,confirmPassword:t().string}),onChange:t().func,values:t().shape({currentPassword:t().string,password:t().string,confirmPassword:t().string})},B.defaultProps={errors:{},onChange(){},values:{currentPassword:"",password:"",confirmPassword:""}};const te=B;var I=a(90090),se=a(11700),ne=a.n(se);const Q=({onChange:n,values:d,localeNames:m,allApplicationThemes:i})=>{const{formatMessage:s}=(0,b.Z)(),T=Object.keys(i).filter(r=>i[r]);return e.createElement(h.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(P.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(P.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(U.Z,{variant:"delta",as:"h2"},s({id:"Settings.profile.form.section.experience.title",defaultMessage:"Experience"})),e.createElement(U.Z,null,s({id:"Settings.profile.form.section.experience.interfaceLanguageHelp",defaultMessage:"Preference changes will apply only to you. More information is available {here}."},{here:e.createElement(h.x,{as:"a",color:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales"},s({id:"Settings.profile.form.section.experience.here",defaultMessage:"here"}))}))),e.createElement(O.r,{gap:5},e.createElement(u.P,{s:12,col:6},e.createElement(I.q4,{label:s({id:"Settings.profile.form.section.experience.interfaceLanguage",defaultMessage:"Interface language"}),placeholder:s({id:"global.select",defaultMessage:"Select"}),hint:s({id:"Settings.profile.form.section.experience.interfaceLanguage.hint",defaultMessage:"This will only display your own interface in the chosen language."}),onClear:()=>{n({target:{name:"preferedLanguage",value:null}})},clearLabel:s({id:"Settings.profile.form.section.experience.clear.select",defaultMessage:"Clear the interface language selected"}),value:d.preferedLanguage,onChange:r=>{n({target:{name:"preferedLanguage",value:r}})}},Object.entries(m).map(([r,A])=>e.createElement(I.ag,{value:r,key:r},A)))),e.createElement(u.P,{s:12,col:6},e.createElement(I.q4,{label:s({id:"Settings.profile.form.section.experience.mode.label",defaultMessage:"Interface mode"}),placeholder:s({id:"components.Select.placeholder",defaultMessage:"Select"}),hint:s({id:"Settings.profile.form.section.experience.mode.hint",defaultMessage:"Displays your interface in the chosen mode."}),value:d.currentTheme,onChange:r=>{n({target:{name:"currentTheme",value:r}})}},e.createElement(I.ag,{value:"system"},s({id:"Settings.profile.form.section.experience.mode.option-system-label",defaultMessage:"Use system settings"})),T.map(r=>e.createElement(I.ag,{value:r,key:r},s({id:"Settings.profile.form.section.experience.mode.option-label",defaultMessage:"{name} mode"},{name:s({id:r,defaultMessage:ne()(r)})}))))))))};Q.propTypes={allApplicationThemes:t().object,onChange:t().func,values:t().shape({preferedLanguage:t().string,currentTheme:t().string}),localeNames:t().object},Q.defaultProps={allApplicationThemes:{},onChange(){},values:{preferedLanguage:null,currentTheme:""},localeNames:{}};const re=Q,z=({errors:n,onChange:d,values:m})=>{const{formatMessage:i}=(0,b.Z)();return e.createElement(h.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(P.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(U.Z,{variant:"delta",as:"h2"},i({id:"global.profile",defaultMessage:"Profile"})),e.createElement(O.r,{gap:5},e.createElement(u.P,{s:12,col:6},e.createElement(l.jm,{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},error:n.firstname,onChange:d,value:m.firstname,type:"text",name:"firstname",required:!0})),e.createElement(u.P,{s:12,col:6},e.createElement(l.jm,{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},error:n.lastname,onChange:d,value:m.lastname,type:"text",name:"lastname"})),e.createElement(u.P,{s:12,col:6},e.createElement(l.jm,{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},error:n.email,onChange:d,value:m.email,type:"email",name:"email",required:!0})),e.createElement(u.P,{s:12,col:6},e.createElement(l.jm,{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},error:n.username,onChange:d,value:m.username,type:"text",name:"username"})))))};z.propTypes={errors:t().shape({firstname:t().string,lastname:t().string,username:t().string,email:t().string}),onChange:t().func,values:t().shape({firstname:t().string,lastname:t().string,username:t().string,email:t().string})},z.defaultProps={errors:{},onChange(){},values:{firstname:"",lastname:"",username:"",email:""}};const oe=z;var le=a(87561),ie=a(39394);const de=le.Ry().shape(ie.Rw),me=()=>{const{changeLocale:n,localeNames:d}=(0,q.nt)(),{setUserDisplayName:m}=(0,l.L7)(),i=(0,R.useQueryClient)(),{formatMessage:s}=(0,b.Z)(),{trackUsage:T}=(0,l.rS)(),r=(0,l.lm)(),{lockApp:A,unlockApp:Z}=(0,l.o1)(),{notifyStatus:G}=(0,c.G)(),{currentTheme:w,themes:E,onChangeTheme:ce}=(0,_.M)(),{get:W,put:ue}=(0,l.kY)();(0,l.go)();const{isLoading:ge,data:j}=(0,R.useQuery)("user",async()=>{const{data:o}=await W("/admin/users/me");return o.data},{onSuccess(){G(s({id:"Settings.profile.form.notify.data.loaded",defaultMessage:"Your profile data has been loaded"}))},onError(){r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),{isLoading:fe,data:pe}=(0,R.useQuery)(["providers","isSSOLocked"],async()=>{const{data:{data:o}}=await W("/admin/providers/isSSOLocked");return o},{enabled:window.strapi.isEE&&window.strapi.features.isEnabled("sso"),onError(){r({type:"warning",message:{id:"Settings.permissions.users.sso.provider.error"}})}}),he=ge||fe,K=(0,R.useMutation)(async o=>{const{confirmPassword:g,currentTheme:f,...v}=o,{data:p}=await ue("/admin/users/me",v);return{...p.data,currentTheme:o.currentTheme}},{async onSuccess(o){await i.invalidateQueries("user");const{email:g,firstname:f,lastname:v,username:p,preferedLanguage:Te}=o;l.I8.setUserInfo({email:g,firstname:f,lastname:v,username:p,preferedLanguage:Te});const Ae=o.username||(0,$.P)(o.firstname,o.lastname);m(Ae),n(o.preferedLanguage),ce(o.currentTheme),T("didChangeMode",{newMode:o.currentTheme}),r({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})},onSettled(){Z()},refetchActive:!0}),{isLoading:we}=K,Ee=async(o,{setErrors:g})=>{A();const f=o.username||null;K.mutate({...o,username:f},{onError(v){const p=v?.response?.data;return p?.data?g(p.data):r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};if(he)return e.createElement(S.o,{"aria-busy":"true"},e.createElement(L.q,{title:s({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),e.createElement(F.T,{title:s({id:"Settings.profile.form.section.profile.page.title",defaultMessage:"Profile page"})}),e.createElement(C.D,null,e.createElement(l.dO,null)));const ve=pe?.isSSOLocked??!1,{email:Pe,firstname:ye,lastname:Se,username:Me,preferedLanguage:Le}=j,Ie={email:Pe,firstname:ye,lastname:Se,username:Me,preferedLanguage:Le,currentTheme:w};return e.createElement(S.o,{"aria-busy":we},e.createElement(L.q,{title:s({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),e.createElement(y.J9,{onSubmit:Ee,initialValues:Ie,validateOnChange:!1,validationSchema:de,enableReinitialize:!0},({errors:o,values:g,handleChange:f,isSubmitting:v,dirty:p})=>e.createElement(l.l0,null,e.createElement(F.T,{title:j.username||(0,$.P)(j.firstname,j.lastname),primaryAction:e.createElement(Y.z,{startIcon:e.createElement(M.Z,null),loading:v,type:"submit",disabled:!p},s({id:"global.save",defaultMessage:"Save"}))}),e.createElement(h.x,{paddingBottom:10},e.createElement(C.D,null,e.createElement(P.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(oe,{errors:o,onChange:f,values:g}),!ve&&e.createElement(te,{errors:o,onChange:f,values:g}),e.createElement(re,{allApplicationThemes:E,onChange:f,values:g,localeNames:d})))))))}},39394:(k,x,a)=>{a.d(x,{YM:()=>l,Rw:()=>C});var e=a(87561),c=a(52820);const S={firstname:e.Z_().trim().required(c.I0.required),lastname:e.Z_(),email:e.Z_().email(c.I0.email).lowercase().required(c.I0.required),username:e.Z_().nullable(),password:e.Z_().min(8,c.I0.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:e.Z_().min(8,c.I0.minLength).oneOf([e.iH("password"),null],"components.Input.error.password.noMatch").when("password",(M,y)=>M?y.required(c.I0.required):y)},C={...S,currentPassword:e.Z_().when(["password","confirmPassword"],(M,y,L)=>M||y?L.required(c.I0.required):L),preferedLanguage:e.Z_().nullable()},h={roles:e.IX().min(1,c.I0.required).required(c.I0.required)},l=e.Ry().shape({...S,isActive:e.Xg(),...h})}}]);
