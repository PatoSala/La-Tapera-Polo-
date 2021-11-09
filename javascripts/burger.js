window.addEventListener("load",function() {

    let count = 0;

    $(".burger").on("click", function(e) {
        if (count == 0) {
            count = 1;
            $(".first, .mid-level, .last").addClass("click");
            $("menu").addClass("open");
            console.log(count);
        } else {
            count = 0;
            $(".level, .mid-level").removeClass("click");
            $("menu").removeClass("open");
            console.log(count);
        }
    })
});