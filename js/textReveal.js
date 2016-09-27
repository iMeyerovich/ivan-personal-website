(function () {
    let win_w = window.innerWidth;

    $("b").hide();

    if(win_w > 768){
        $(".git").hover(function(){
            $("#giti").hide();
            $("#gitb").show();
        }, function(){
            $("#gitb").hide();
            $("#giti").show();
        });

        $(".res").hover(function(){
            $("#resi").hide();
            $("#resb").show();
        }, function(){
            $("#resb").hide();
            $("#resi").show();
        });

        $(".link").hover(function(){
            $("#linki").hide();
            $("#linkb").show();
        }, function(){
            $("#linkb").hide();
            $("#linki").show();
        });
    }
}.call(this));