window.addEventListener("load",function() {

    let count = 0;

    $(".burger").on("click", function(e) {
        if (count == 0) {
            count = 1;
            $(".first, .mid-level, .last").addClass("click");
            console.log(count);
        } else {
            count = 0;
            $(".level, .mid-level").removeClass("click");
            console.log(count);
        }
    })
});