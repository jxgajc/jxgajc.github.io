define("wkview:widget/raw_income/raw_income.js",function(e,o,t){function n(e){this.options=e||{},this.step2Tmpl=i.template('<div class="WkDownload-activity">\n<div class="dialog-ad dialog-ad-nomarl">\n<div class="donwload-activity-dialog-container">\n<div class="myclose"></div>\n<div class="income-close-btn verify-close-btn" data-fun="close-dialog"></div>\n<div class="dialog-left-greenbar"></div>\n<div class="dialog-top">\n<p class="doc-title" rel="new-dialog" alt="dialog_tit">{{=it.tmpdata.step2.title}}</p>\n</div>\n<div class="dialog-inner tac">\n<div id="giftform">\n{{~it.tmpdata.step2.collectList:value:index}}<div class="formgroup {{=value.className}}">\n{{? value.type == \'options\'}}<div class="ui-bz-select"><p class="ui-bz-select-word" data-fun="select">{{=value.title}}</p>\n<ul class="ui-bz-select-option">\n{{~value.list:valuelist:indexlist}}<li><a href="javascript:;" data-fun="choice" data-value="{{=valuelist.value}}">{{=valuelist.value}}</span></a></li>\n{{~}}</ul>\n<input type="text" name="{{=value.name}}" class="ipt-hide">\n</div>\n{{??}}<input type="text" placeholder="{{=value.title}}" name="{{=value.name}}" class="txt_usname"/>\n{{?}}</div>\n{{~}}<div class="formgroup">\n<input class="ui-bz-ipt ui-bz-ipt-bgw fixplaceholder" type="text" placeholder="\u8bf7\u586b\u5199\u624b\u673a\u53f7\u7801" name="phone" autocomplete="off">\n<div class="sug phone-sug"></div>\n<span class="errorinfo">\u8bf7\u586b\u5199\u6b63\u786e\u7684\u624b\u673a\u53f7</span>\n</div>\n<div class="formgroup" style="display: none;">\n<div class="tel-wrap">\n<input class="ui-bz-ipt ui-bz-ipt-bgw fixplaceholder" type="text" placeholder="\u8bf7\u586b\u5199\u624b\u673a\u9a8c\u8bc1\u7801" name="phone_vcode" style="width: 139px;">\n<a href="javascript:;" class="ui-bz-btn-normal ui-bz-btn-51offer">\n<b class="ui-bz-btn-p-15 ui-bz-btc" data-fun="get-smsg">\u83b7\u53d6\u77ed\u4fe1\u9a8c\u8bc1\u7801</b>\n</a>\n</div>\n<span class="errorinfo" id="telerror">\u8bf7\u586b\u5199\u6b63\u786e\u624b\u673a\u9a8c\u8bc1\u7801</span>\n</div>\n<div class="formgroup form-err-group">\n<span class="errorinfo"></span>\n</div>\n</div>\n<a href="javascript:;" class="ui-bz-btn-senior btn-diaolog-downdoc"><b class="ui-bz-btn-p-16 ui-bz-btc" data-fun="submit-info">\u514d\u8d39\u4e0b\u8f7d</b></a>\n<div class="public-tip">\n{{=it.tmpdata.advertiser}}<span class="private">\n&nbsp;\u9690\u79c1\u4fdd\u969c<div class="hover-tip-hujiang">\n<span class="arrow-icon"></span>\n{{=it.tmpdata.privacy_policy}}</div>\n</span>\n</div>\n</div>\n</div>\n</div>\n</div>\n<div class="WkDownload-activity-iframe">\n<iframe allowTransparency="true" src="" frameborder="0" scrolling="no"></iframe>\n</div>\n'),this.init()}var a=e("wkcommon:widget/ui/lib/jquery/jquery.js"),i=e("wkcommon:widget/lib/doT/doT.min.js"),r=e("wkcommon:widget/lib/tangram/base/base.js"),s=e("wkcommon:widget/ui/js_core/log/log.js"),l=(e("wkcommon:widget/ui/js_core/dialog/dialog.js"),e("wkcommon:widget/ui/js_core/_dialog/_dialog.js"));n.prototype={init:function(){var e=this;e.addEventListener()},getHTML:function(e){var o="step"+(e||2)+"Tmpl";return this[o]({type:e||0,activity_id:this.activity_id})},closeDialog:function(e){var o=this;a(".WkDownload-activity, .WkDownload-activity-iframe").remove(),"function"==typeof e&&e(o)},showDialog:function(){var e=this,o=(a(window).height(),l.customDialog);new o({width:481,content:e.step2Tmpl({tmpdata:e.options}),closeSelector:".myclose",mask:{bgColor:"transparent"}}),e.placeholder()},getPhoneMsg:function(e){a.get("/org/interface/getphone?&t="+Math.random(),function(e){0===e.errno&&e.data.securemobil&&!e.data.is_same&&a(".phone-sug").html(e.data.securemobil)})},addEventListener:function(){var e=this;a("body").on("click",".dialog-ad",function(o){var t=a(o.target),n=t.attr("data-fun");switch(n){case"submit-info":var i={},r=e.getFormData();if(i.phone=r.phone,i.pid=79,i.phone_vcode=r.phone_vcode,delete r.phone_vcode,i.clues_data=r,i.ad_id=e.options.adId,!e.checkData(i))return;a(".form-err-group").removeClass("err"),a.post("/xpage/interface/addclues",i,function(o){var n=o.status.code,i={code0:"\u6210\u529f",code1:"\u53c2\u6570\u9519\u8bef",code2:"\u9a8c\u8bc1\u7801\u9519\u8bef",code3:"\u8be5\u624b\u673a\u53f7\u5df2\u7ecf\u63d0\u4ea4\u8fc7",code4:"\u7cfb\u7edf\u9519\u8bef"};if(0===n||3===n){t.attr("data-fun",""),e.options.step2.download_url&&e.godownload(e.options.step2.download_url);var r=setTimeout(function(){clearTimeout(r),e.gonext()},1e3)}else n="code"+n,a(".form-err-group .errorinfo").html(i[n]||"\u7cfb\u7edf\u7e41\u5fd9, \u8bf7\u7a0d\u540e\u91cd\u8bd5"),a(".form-err-group").addClass("err")});break;case"get-smsg":var s=a(".dialog-ad input[name=phone]");if(!e.isTel(s.val()))return void s.css("border-color","red").siblings(".errorinfo").css("display","block");t.parent().addClass("ui-bz-btn-disable"),t.attr("data-fun","");var l="\u79d2\u540e\u91cd\u53d1",d=120,c="/xpage/interface/getphonevcode?phone="+s.val()+"&t="+Math.random();a.get(c,function(o){var n=+o.status.code,i={code0:"\u6210\u529f",code11:"\u624b\u673a\u9a8c\u8bc1\u7801\u53d1\u9001\u8fc7\u4e8e\u9891\u7e41",code31:"\u624b\u673a\u9a8c\u8bc1\u7801\u672a\u4f20\u5165",code32:"\u64cd\u4f5c\u8fc7\u4e8e\u9891\u7e41\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5",code5:"\u64cd\u4f5c\u5931\u8d25 \u8bf7\u7a0d\u540e\u91cd\u8bd5"};if(n){n="code"+n,a("#telerror").html(i[n]),e.showErr("phone_vcode");var r=setInterval(function(){clearInterval(r),t.parent().removeClass("ui-bz-btn-disable"),t.text("\u83b7\u53d6\u77ed\u4fe1\u9a8c\u8bc1\u7801").attr("data-fun","get-smsg")},3e3)}else var s=setInterval(function(){d?(t.text(d+l),d--):(clearInterval(s),t.parent().removeClass("ui-bz-btn-disable"),t.text("\u83b7\u53d6\u77ed\u4fe1\u9a8c\u8bc1\u7801").attr("data-fun","get-smsg"))},1e3)});break;case"choice":var p=t.attr("data-value"),u=t.text(),v=t.parents(".ui-bz-select");v.find(".ui-bz-select-word").text(u),v.find(".ipt-hide").val(p),v.find(".ui-bz-select-option").hide(),e.rmErr(v.find(".ipt-hide").attr("name"))}}),a("body").on("blur","input[name=phone]",function(){var o=a(this),t=o.val();return e.rmErr("phone"),e.isTel(t)?void 0:void e.showErr("phone")}),a("body").on("blur","input[name=phone_vcode]",function(){var o=a(this).val();e.rmErr("phone_vcode"),a.trim(o)||(a("#telerror").html("\u9a8c\u8bc1\u7801\u4e3a\u7a7a"),e.showErr("phone_vcode"))}),a("body").on("keyup blur change",".dialog-ad .ic-name",function(){a.trim(a(this).val())?e.rmErr("name"):e.showErr("name")}),a("body").on("keyup blur change",".dialog-ad input[name=phone]",function(o){o.preventDefault();var t=a(this).val(),n=a(".phone-sug").html(),i=new RegExp("^"+t);return t===n?(a(".phone-sug").hide(),void a(".tel-wrap").parent().hide()):(e.isTel(t)&&t!==n&&a(".tel-wrap").parent().show(),t?void(i.test(n)?a(".phone-sug").show():a(".phone-sug").hide()):void a(".phone-sug").hide())}),a("body").on("click",".verify-close-btn",function(){a(".myclose").trigger("click"),a(".ys-ads-mask").hide()}),a("body").on("click",".phone-sug",function(){a(".dialog-ad input[name=phone]").val(a(this).html()),a(".dialog-ad input[name=phone]").trigger("blur"),a(this).hide()}),a("body").on("focus","#giftform input",function(){a(".form-err-group").removeClass("err")}),a("body").on("mouseover",".formgroup .ui-bz-select",function(){a(this).find(".ui-bz-select-option").show()}),a("body").on("mouseleave",".formgroup .ui-bz-select",function(){a(this).find(".ui-bz-select-option").hide()})},cancleEvent:function(){a("body").off("click",".phone-sug"),a("body").off("click",".verify-close-btn"),a("body").off("keyup blur change",".dialog-ad input[name=phone]"),a("body").off("blur","input[name=phone_vcode]"),a("body").off("blur","input[name=phone]"),a("body").off("click",".dialog-ad")},getFormData:function(){var e=a("#giftform").find(":input").serializeArray();return this.serialize2obj(e)},serialize2obj:function(e){for(var o={},t=0;t<e.length;t++)o[e[t].name]=encodeURIComponent(e[t].value);return o},checkData:function(e){var o=this,t=[];return o.isTel(e.phone)||(o.showErr("phone"),t.push("phone")),t.length?(o.showErr(t),!1):!0},gonext:function(){var e=this;s.xsend(1,100896,{id:e.options.ad_id}),a(".myclose").trigger("click"),new l.customDialog({width:465,height:230,content:e.options.downloadTpl({list:0,tmpdata:e.options}),closeSelector:".myclose",mask:{bgColor:"transparent"}})},godownload:function(e){var o='<iframe allowTransparency="true" src="'+e+'" frameborder="0" scrolling="no"></iframe>';a("body").append(o)},isTel:function(e){return!!e.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)},placeholder:function(){+r.browser.ie<=9&&a(".fixplaceholder").each(function(e,o){var t=a(o).attr("placeholder");a(o).val(t).click(function(){a(this).val()===t&&a(this).val("")}).blur(function(){var e=a(this).val();a.trim(e)||a(this).val(t)})})},showErr:function(e){var o=typeof e;if("string"===o)a("input[name="+e+"]").parents(".formgroup").addClass("err");else if("object"===o)for(var t=e.length-1;t>=0;t--)a("input[name="+e[t]+"]").parents(".formgroup").addClass("err")},rmErr:function(e){var o=typeof e;if("string"===o)a("input[name="+e+"]").parents(".formgroup").removeClass("err");else if("array"===o)for(var t=e.length-1;t>=0;t--)a("input[name="+e[t]+"]").parents(".formgroup").removeClass("err")}},t.exports=n});