"use strict";(self["webpackChunks010"]=self["webpackChunks010"]||[]).push([[3610],{3610:(t,e,a)=>{a.r(e),a.d(e,{default:()=>m});var s=function(){var t=this,e=t._self._c;return e("div",[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[t._v("添加")]),e("Form",{ref:"form",attrs:{model:t.form,"label-width":90,rules:t.formValidate}},[e("FormItem",{attrs:{label:"名称",prop:"name"}},[e("Input",{staticStyle:{width:"400px"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("Form-item",{staticClass:"br"},[e("Button",{attrs:{loading:t.submitLoading,type:"primary"},on:{click:t.handleSubmit}},[t._v("提交并保存")]),e("Button",{on:{click:t.handleReset}},[t._v("重置")])],1)],1)],1)],1)},r=[];const i={name:"add",data(){return{loading:!0,submitLoading:!1,form:{id:"",name:""},formValidate:{name:[{required:!0,message:"不能为空",trigger:"blur"}]},backRoute:""}},methods:{init(){this.backRoute=this.$route.query.backRoute},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((t=>{t&&(this.submitLoading=!1,this.$Message.success("添加成功"),this.closeCurrentPage())}))},closeCurrentPage(){this.$store.commit("removeTag","add"),localStorage.pageOpenedList=JSON.stringify(this.$store.state.app.pageOpenedList),this.$router.push({name:this.backRoute})}},watch:{$route(t,e){"add"==t.name&&this.handleReset()}},mounted(){this.init()}},o=i;var n=a(1001),l=(0,n.Z)(o,s,r,!1,null,null,null);const m=l.exports}}]);