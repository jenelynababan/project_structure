$(function(){
	$('.btnEdit').click(function(e) {
		e.preventDefault();
		var fldName = $(this).parents().children('td.fldName').text();
		var id = $(this).parents().children('td.fldId').text();
		$("#btnCancel").css("display", "");
		$("#btnSubmit").val("Edit "+fldName);
		$("input[name='client_name'").val(fldName);
		$("input[name='client_id'").val(id);
		$("#frmClient").attr("action", "/clients/edit");
	});

	$('#btnCancel').click(function(){
		$("#btnCancel").css("display", "none");
		$("#frmClient").attr("action", "/clients/insert");
		$("input[name='client_name'").val("");
		$("#btnSubmit").val("Add Client!");
	});

	$('.btnLogin').click(function(e) {
		e.preventDefault();
		var fldName = $(this).parents().children('td.fldName').text();
		var id = $(this).parents().children('td.fldId').text();
		$("#btnCancel").css("display", "");
		$("#btnSubmit").val("Edit "+fldName);
		$("input[name='client_name'").val(fldName);
		$("input[name='client_id'").val(id);
		$("#frmClient").attr("action", "/clients/edit");
	});


});