//////////////////////
// FOR PREVIEW ONLY //
//////////////////////

  function afFormHeight() {
    height = $("#container").height();
    $("#height").html(height + "px");
  }

  function afFormWidth() {
    width = $("#container").width();
    $("#width").html(width + "px");
  }

  function afBoxingAbler() {
    box = $("input[name='boxed']:checked").val();
    if(box == "off") {
      $("#two form.af-form").removeClass("af-boxed");
      console.log("boxing disabled, class removed");
    } else if(box == "on") {
      $("#two form.af-form").addClass("af-boxed");
      console.log("Boxing On");
    }
    afFormHeight();
    afFormWidth();
  }

  function afToggleStyle() {
    style = $(this).val();
    if($(this).is(":checked") && style == "on") {
      $("#two form.af-form").addClass("af-styled");
      $("input[name='boxed']").removeProp("disabled");
      console.log("style is ON, boxing enabled");
    } else if($(this).is(":checked") && style == "off") {
      $("#two form.af-form").removeClass("af-styled");
      $("input[name='boxed']").prop("disabled", "disabled");
      console.log("style is OFF, boxing disabled");
    }
    afBoxingAbler();
    afFormHeight();
    afFormWidth();
  }

  function afToggleErrors() {
    errors = $(this).val();
    if($(this).is(":checked") && errors == "on") {
      $(".af-errors").show();
      $(".af-error-candidate").addClass("af-error");
      console.log("errors are ON");
    } else if($(this).is(":checked") && errors == "off") {
      $(".af-errors").hide();
      $(".af-error-candidate").removeClass("af-error");
      console.log("errors are OFF");
    }
    afFormHeight();
    afFormWidth();
  }

  function afUpdateWidth() {
    afGetWidth = $(this).val();
    afWidth = $("#two form").width();
    if($(this).is(":checked") && afGetWidth == "desktop") {
      $("#container").width("100%");
      $("#two form").removeClass("af-mobile");
      console.log("width DESKTOP");
    } else if($(this).is(":checked") && afGetWidth == "tablet") {
      $("#container").width("500px");
      $("#two form").removeClass("af-mobile");
      console.log("width TABLET");
    } else if($(this).is(":checked") && afGetWidth == "mobile") {
      $("#container").width("300px");
      $("#two form").addClass("af-mobile");
      console.log("width MOBILE");
    }
    afFormHeight();
    afFormWidth();
  }

  // toggle the preview form label position class: (default: none) OR add .af-labels-top
  function afToggleLabels() {
    afLabels = $(this).val();
    if($(this).is(":checked") && afLabels == "left") {
      $("#two form").removeClass("af-labels-top");
      console.log("labels DEFAULT");
    } else if($(this).is(":checked") && afLabels == "top") {
      $("#two form").addClass("af-labels-top");
      console.log("labels TOP");
    }
    afFormHeight();
    afFormWidth();
  }

  $("input[name='style']").change(afToggleStyle);
  $("input[name='errors']").change(afToggleErrors);
  $("input[name='labels']").change(afToggleLabels);
  $("input[name='widthcontrol']").change(afUpdateWidth);
  $("input[name='boxed']").change(afBoxingAbler);

  afFormHeight();
  afFormWidth();
  afBoxingAbler();

//////////////////////
//  FOR PRODUCTION  //
//////////////////////

  // for .af-duplicable items such as TEL and EMAIL, when the "add another" button is clicked, add another
  function afAdd() {
    afParent = $(this).closest(".af-duplicable");
    afCopy = afParent.eq(0).clone().addClass("af-duplicate");
    $(this).remove();
    afParent.after(afCopy);
    afParent.next(".af-duplicate").find("input:not([type='button'])").val("");
    console.log("cloned item");
  }

  $("#container").on("click", ".af-add", afAdd);
