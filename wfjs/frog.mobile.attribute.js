/**
 * 元素自定义属性
 */
var Attribute = {
		initUI: function() {
			/*
			 * 给单选挑选人员组件统一添加点击方法
			 */
			$('body').on("click", "*[onPickUser]", function (event) {
				var sourceTarget = this;
				var functionName = $(this).attr("onPickUser");
				if ($.trim(functionName) == "" || typeof(eval(functionName)) != "function") {
					weui.topTips("提供的回调方法不存在，请修改！");
				} else {
					layer.open({
						id: 'selectUserDialog',
						type: 1,
					  	content: '',
					  	anim: 'up',
					  	style: 'position: absolute; left: 10px; top:10px; bottom:10px; right: 10px; border: none; border-radius: 4px; -webkit-animation-duration: .5s; animation-duration: .5s;',
					  	success: function() {
					  		$('.layui-m-layercont').load("/wfPage/preSelectPerson?singleFlag=true&callbackMethod=" + functionName, function() {
					  			acceptSourceTargetForPickUser(sourceTarget);
					  		});
						}
					});
				}
			});
		}
}