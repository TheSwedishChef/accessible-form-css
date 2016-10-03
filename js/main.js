function formHeight() {
  height = $("#two form").height();
  $("#height").html(height + "px");
}

function formWidth() {
  width = $("#two form").width();
  $("#width").html(width + "px");
}

function toggleStyle() {
  style = $(this).val();
  if($(this).is(":checked") && style == "on") {
    console.log("style is ON");
    $("#two form").addClass("af-styled");
  } else if($(this).is(":checked") && style == "off") {
    console.log("style is OFF");
    $("#two form").removeClass("af-styled");
  }
  formHeight();
  formWidth();
}

function toggleBox() {
  boxed = $(this).val();
  if($(this).is(":checked") && boxed == "on") {
    console.log("box is ON");
    $("#two form").addClass("af-boxed");
  } else if($(this).is(":checked") && boxed == "off") {
    console.log("box is OFF");
    $("#two form").removeClass("af-boxed");
  }
  formHeight();
  formWidth();
}

function toggleErrors() {
  errors = $(this).val();
  if($(this).is(":checked") && errors == "on") {
    console.log("errors are ON");
    $(".af-errors").show();
    $(".af-error-candidate").addClass("af-error");
  } else if($(this).is(":checked") && errors == "off") {
    console.log("errors are OFF");
    $(".af-errors").hide();
    $(".af-error-candidate").removeClass("af-error");
  }
  formHeight();
  formWidth();
}

function updateWidth() {
  getWidth = $(this).val();
  width = $("#two form").width();
  if($(this).is(":checked") && getWidth == "desktop") {
    console.log("width DESKTOP");
    $("#container").width("100%");
    $("#two form").removeClass("af-mobile");
  } else if($(this).is(":checked") && getWidth == "tablet") {
    console.log("width TABLET");
    $("#container").width("500px");
    $("#two form").removeClass("af-mobile");
  } else if($(this).is(":checked") && getWidth == "mobile") {
    console.log("width MOBILE");
    $("#container").width("300px");
    $("#two form").addClass("af-mobile");
  }
  formHeight();
  formWidth();
}

function toggleLabels() {
  labels = $(this).val();
  if($(this).is(":checked") && labels == "left") {
    console.log("labels DEFAULT");
    $("#two form").removeClass("af-labels-top");
  } else if($(this).is(":checked") && labels == "top") {
    console.log("labels TOP");
    $("#two form").addClass("af-labels-top");
  }
  formHeight();
  formWidth();
}

$("input[name='style']").change(toggleStyle);
$("input[name='errors']").change(toggleErrors);
$("input[name='labels']").change(toggleLabels);
$("input[name='boxed']").change(toggleBox);
$("input[name='boxed']").change(formHeight);
$("input[name='style']").change(formHeight);
$("input[name='errors']").change(formHeight);
$("input[name='labels']").change(formHeight);
$("input[name='widthcontrol']").change(updateWidth);

formHeight();
formWidth();
