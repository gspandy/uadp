webpackJsonp([7],{0:function(e,t,a){e.exports=a(341)},339:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){function t(e){u.validateFields(function(e,t){e||n({type:"saveOrg",params:t})})}function a(){u.resetFields()}function l(){n({type:"closeOrgModal"})}var n=e.dispatch,u=e.form,r=e.visible,i=e.loading,o=e.isNew,s=e.editData,p=e.orgType,g=u.getFieldDecorator,O={labelCol:{span:8},wrapperCol:{span:14},style:{marginBottom:5}},b={labelCol:{span:4},wrapperCol:{span:19},style:{marginBottom:5}},h=o?"\u65b0\u589e\u673a\u6784":"\u7f16\u8f91\u673a\u6784";return T.default.createElement(d.default,{title:h,okText:"\u4fdd\u5b58",cancelText:"\u8fd4\u56de",visible:r,width:700,afterClose:a,confirmLoading:i,onOk:function(e){return t()},onCancel:function(){return l()}},T.default.createElement(v.default,null,g("id",{initialValue:s.id})(T.default.createElement(y.default,{type:"hidden"})),T.default.createElement(f.default,null,T.default.createElement(c.default,{span:12},T.default.createElement(C,(0,m.default)({},O,{label:"\u673a\u6784\u540d\u79f0"}),g("name",{initialValue:s.name,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u673a\u6784\u540d\u79f0\uff01"}]})(T.default.createElement(y.default,{autoComplete:"off"})))),T.default.createElement(c.default,{span:12},T.default.createElement(C,(0,m.default)({},O,{label:"\u673a\u6784\u5168\u79f0"}),g("fullName",{initialValue:s.fullName})(T.default.createElement(y.default,{autoComplete:"off"}))))),T.default.createElement(f.default,null,T.default.createElement(c.default,{span:12},T.default.createElement(C,(0,m.default)({},O,{label:"\u673a\u6784\u4ee3\u7801"}),g("code",{initialValue:s.code})(T.default.createElement(y.default,{autoComplete:"off"})))),T.default.createElement(c.default,{span:12},T.default.createElement(C,(0,m.default)({},O,{label:"\u673a\u6784\u7c7b\u578b"}),g("type",{initialValue:s.type})(T.default.createElement(E.default,null,p.map(function(e,t){if(e.code)return T.default.createElement(E.default.Option,{key:e.code,value:e.code},e.value)})))))),T.default.createElement(f.default,null,T.default.createElement(c.default,{span:12},T.default.createElement(C,(0,m.default)({},O,{label:"\u90ae\u653f\u7f16\u7801"}),g("zipCode",{initialValue:s.zipCode})(T.default.createElement(y.default,{autoComplete:"off"})))),T.default.createElement(c.default,{span:12},T.default.createElement(C,(0,m.default)({},O,{label:"\u8054\u7cfb\u7535\u8bdd"}),g("tel",{initialValue:s.tel})(T.default.createElement(y.default,{autoComplete:"off"}))))),T.default.createElement(f.default,null,T.default.createElement(c.default,{span:12},T.default.createElement(C,(0,m.default)({},O,{label:"\u4f20\u771f"}),g("tax",{initialValue:s.tax})(T.default.createElement(y.default,{autoComplete:"off"})))),T.default.createElement(c.default,{span:12},T.default.createElement(C,(0,m.default)({},O,{label:"email"}),g("email",{initialValue:s.email,rules:[{type:"email",message:"\u8bf7\u8f93\u5165\u6709\u6548\u683c\u5f0f\u7684\u7535\u5b50\u90ae\u7bb1!"}]})(T.default.createElement(y.default,{autoComplete:"off"}))))),T.default.createElement(f.default,null,T.default.createElement(c.default,{span:12},T.default.createElement(C,(0,m.default)({},O,{label:"\u8054\u7cfb\u4eba"}),g("contacter",{initialValue:s.contacter})(T.default.createElement(y.default,{autoComplete:"off"})))),T.default.createElement(c.default,{span:12},T.default.createElement(C,(0,m.default)({},O,{label:"\u5f53\u524d\u72b6\u6001"}),g("status",{initialValue:s.status})(T.default.createElement(E.default,null,T.default.createElement(E.default.Option,{key:"1",value:"1"},"\u542f\u7528"),T.default.createElement(E.default.Option,{key:"0",value:"0"},"\u505c\u7528")))))),T.default.createElement(f.default,null,T.default.createElement(c.default,{span:24},T.default.createElement(C,(0,m.default)({},b,{label:"\u901a\u8baf\u5730\u5740"}),g("addr",{initialValue:s.addr})(T.default.createElement(y.default,{autoComplete:"off"}))))),T.default.createElement(f.default,null,T.default.createElement(c.default,{span:24},T.default.createElement(C,(0,m.default)({},b,{label:"\u673a\u6784\u63cf\u8ff0"}),g("remark",{initialValue:s.remark})(T.default.createElement(y.default,{type:"textarea",autosize:!0,autoComplete:"off"})))))))}function u(e){return{visible:e.visible,loading:e.loading,isNew:e.isNew,editData:e.editData,orgType:e.orgType}}Object.defineProperty(t,"__esModule",{value:!0});var r=(a(22),a(21)),d=l(r),i=(a(82),a(81)),f=l(i),o=(a(80),a(79)),c=l(o),s=a(2),m=l(s),p=(a(20),a(26)),y=l(p),g=(a(83),a(65)),E=l(g),O=(a(36),a(35)),v=l(O),b=a(1),T=l(b),h=a(15),C=v.default.Item;E.default.Option;t.default=(0,h.connect)(u)(v.default.create()(n)),e.exports=t.default},340:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.dispatch,a=e.dataSource,l=[{title:"\u673a\u6784\u7b80\u79f0",dataIndex:"name",key:"name",width:250},{title:"\u673a\u6784\u4ee3\u7801",dataIndex:"code",key:"code",width:200},{title:"\u673a\u6784\u63cf\u8ff0",dataIndex:"remark",key:"remark",width:350},{title:"\u673a\u6784\u7c7b\u578b",dataIndex:"typeName",key:"typeName",width:350},{title:"\u64cd\u4f5c",width:100,render:function(e,a,l){var n=a.isFixed?"disabled":null;return y.default.createElement("span",null,y.default.createElement(c.default,{title:"\u4fee\u6539",onClick:function(){return t({type:"openOrgModal",params:{isNew:!1,editData:a}})},size:"small",type:"ghost",shape:"circle",icon:"edit",disabled:n}),"\xa0\xa0",y.default.createElement(c.default,{title:"\u5220\u9664",onClick:function(){return t({type:"deleteOrg",params:a})},size:"small",type:"ghost",shape:"circle",icon:"close",disabled:n}))}.bind(this)}],n=y.default.createElement("div",null,y.default.createElement(c.default,{type:"primary",icon:"plus",onClick:function(){return t({type:"openOrgModal",params:{isNew:!0,editData:{}}})}},"\u65b0\u589e"),y.default.createElement("div",{style:{float:"right",paddingBottom:3}},y.default.createElement(h,{placeholder:"\u673a\u6784\u540d\u79f0",style:{width:200},onSearch:function(e){return t({type:"queryOrgByName",params:{name:e}})}}))),u=y.default.createElement(f.default,{onChange:function(e){return t({type:"onCascadeCheck",params:{cascade:e.target.checked}})}},"\u7ea7\u8054\u663e\u793a");return y.default.createElement(g.Layout,null,y.default.createElement(T,{region:"west",style:{width:250}},y.default.createElement(g.Panel,{fit:!0,border:!0,title:"\u7ec4\u7ec7\u673a\u6784\u6811",extra:u},y.default.createElement(O.default,null))),y.default.createElement(T,{region:"center",style:{overflow:"hidden"}},y.default.createElement(g.Panel,{fit:!0,title:n},y.default.createElement(d.default,{rowKey:"id",size:"middle",bordered:!0,dataSource:a,columns:l,pagination:!1}),y.default.createElement(b.default,null))))}function u(e){return{dataSource:e.dataSource}}Object.defineProperty(t,"__esModule",{value:!0});var r=(a(67),a(66)),d=l(r),i=(a(64),a(43)),f=l(i),o=(a(27),a(25)),c=l(o),s=(a(20),a(26)),m=l(s),p=a(1),y=l(p),g=a(15);a(49);var E=a(113),O=l(E),v=a(339),b=l(v),T=g.Layout.Box,h=m.default.Search;t.default=(0,g.connect)(u)(n),e.exports=t.default},341:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var n=a(15),u=a(342),r=l(u),d=a(340),i=l(d),f=new n.stateContainer;f.model(r.default),f.debug(!0),f.ready(function(e){e({type:"initTreeData"}),e({type:"initOrgType"})}),f.start(i.default,"root")},342:function(e,t,a){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(2),r=n(u),d=a(343),i=l(d);t.default={namespace:"org",state:{loading:!1,visible:!1,isNew:!0,editData:{},orgType:[],cascade:!1,orgTreeData:[],dataSource:[]},reducers:{initTreeData:function(e,t,a,l){i.initOrgTree(t,a,l)},initOrgType:function(e,t,a){i.initOrgType(a)},onOrgTreeSelect:function(e,t,a){i.queryOrg(t.selectTreeKey,e.cascade,a)},onCascadeCheck:function(e,t,a){i.queryOrg(e.selectTreeKey,t.cascade,a)},openOrgModal:function(e,t){return(0,r.default)({},t,{visible:!0})},closeOrgModal:function(e,t){return{visible:!1}},saveOrg:function(e,t,a,l){i.saveOrg(e,t,a,l)},deleteOrg:function(e,t,a,l){i.deleteOrg(t,l)}}},e.exports=t.default},343:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t,a){g.request.post("queryOrgTree.do",function(e){var l=null;e&&e.length>0&&(l=e[0].id),t({orgTreeData:e,selectTreeKey:l}),a({type:"onOrgTreeSelect",params:{selectTreeKey:l}})})}function u(e){g.request.post("../dict/queryDict.do",{key:"org_type"},function(t){e({orgType:t})})}function r(e,t,a){g.request.get("queryOrg.do",{id:e,cascade:t},function(l){a({selectTreeKey:e,cascade:t,dataSource:l})})}function d(e,t,a,l){e.isNew?(a({loading:!0}),g.request.post("insertOrg.do",(0,m.default)({},t,{parentId:e.selectTreeKey}),function(){a({loading:!1,visible:!1}),l({type:"initTreeData"}),c.default.success("\u65b0\u5efa\u673a\u6784\u6210\u529f\uff01")},function(e){a({loading:!1}),c.default.success("\u4fdd\u5b58\u673a\u6784\u53d1\u751f\u9519\u8bef\uff01")})):g.request.post("updateOrg.do",t,function(){a({loading:!1,visible:!1}),l({type:"initTreeData"}),c.default.success("\u4fee\u6539\u673a\u6784\u6210\u529f\uff01")},function(e){a({loading:!1}),c.default.success("\u4fee\u6539\u673a\u6784\u53d1\u751f\u9519\u8bef\uff01")})}function i(e,t){E({title:"\u786e\u8ba4\u5220\u9664\u8fd9\u6761\u8bb0\u5f55\u5417\uff1f",onOk:function(){g.request.post("delOrg.do",{id:e.id},function(){t({type:"initTreeData"}),c.default.success("\u5220\u9664\u673a\u6784\u6210\u529f\uff01")})}})}function f(e,t){g.request.post("queryOrgByName.do",e,function(e){t({dataSource:e})})}Object.defineProperty(t,"__esModule",{value:!0});var o=(a(32),a(29)),c=l(o),s=a(2),m=l(s),p=(a(22),a(21)),y=l(p);t.initOrgTree=n,t.initOrgType=u,t.queryOrg=r,t.saveOrg=d,t.deleteOrg=i,t.queryOrgByName=f;var g=a(15),E=y.default.confirm}});