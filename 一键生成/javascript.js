
// 点击职称输入框，弹出选框

$(function () {
	$("#job").click(function () {
	$("#open,#closes").show();
	$("#mask").show();
	});
	$("#closes").click(function () {
	$("#open,#closes").hide();
	$("#mask").hide();
	});
	$(".list").click(function () {
	$("#job").val($(this).html());
	$("#open,#closes").hide();
	$("#mask").hide();
	$("#lis-img").attr("src","img/图标选中-图标.png");
	});
});

// 点击单位输入框，弹出选框

$(function () {
	$("#sub-name").click(function () {
	$("#sub-open,#closes").show();
	$("#mask").show();
	});
	$("#closes").click(function () {
	$("#sub-open,#closes").hide();
	$("#mask").hide();
	});
	$(".list-list").click(function () {
	$("#sub-name").val($(this).html());
	$("#sub-open,#closes").hide();
	$("#mask").hide();
	$("#lis-img").attr("src","img/图标选中-图标.png");
	});
});

// 点击图片，弹出提示替换图片的选框
$(function () {
	$("#thir-name").click(function () {
	$("#thir-open,#thir-close").show();
	$("#mask").show();
	});
	$("#thir-close").click(function () {
	$("#thir-open,#thir-close").hide();
	$("#mask").hide();
	});
	$("list").click(function () {
	$("#thir-open,#thir-close").hide();
	$("#mask").hide();
	});
});

// 点击一键生成按钮，弹出选框
$(function () {
	$("#f-name").click(function () {
	$("#completion,#f-close").show();
	$("#mask").show();
	});
	$("#f-close").click(function () {
	$("#completion,#f-close").hide();
	$("#mask").hide();
	});
});

