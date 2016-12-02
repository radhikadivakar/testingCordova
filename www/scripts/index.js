// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();


$(document).ready(function () {
    $(".ll").click(function () {
        $('li > ul').not($(this).children("ul").toggle()).hide();

    });
});

function IPStr() {
var IP = "http://109.73.172.90:8031/";
   //var IP = "http://localhost:8080/";
    return IP;

}


function Back() {
    window.location = "Dashboard.html";
}

function LogOut() {
  
    var obj = new Object();
    obj.ID = localStorage.getItem("AuditLoginID");
    //alert(obj.ID);
    $.support.cors = true;
    $.ajax({
        url: IPStr() + "FeeCollectionService.svc/LogOut",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ objGroup: JSON.stringify(obj) }),
        success: function (data) {
           
            //if (data.d.trim() != "") {
            //    $("#lblChangePwd").text(data.d);
            //}

        }
    });
    return false;
}






function txtboxPress(txtbox, e, decimal) {



    var key;

    var isCtrl = false;
    var keychar;
    var reg;

    if (window.event) {
        key = e.keyCode;
        isCtrl = window.event.ctrlKey
    }
    else if (e.which) {
        key = e.which;
        isCtrl = e.ctrlKey;
    }
    if (isNaN(key)) return true;
    keychar = String.fromCharCode(key);
    // check for backspace or delete, or if Ctrl was pressed

    if (key == 8 || key == 9 || isCtrl) {
        return true;
    }

    reg = /\d/;

    var allowDecimal = decimal;
    var allowNegative = false;
    var isFirstN = allowNegative ? keychar == '-' && txtbox.value.indexOf('-') == -1 : false;
    var isFirstD = allowDecimal ? keychar == '.' && txtbox.value.indexOf('.') == -1 : false;

    return isFirstN || isFirstD || reg.test(keychar);

}

