$(window).load(function(){

    $("#switch").attr("style","right:0px;")
    
    stylePath="css/style.css";
    componentsPath="css/components.css";
    
    $("#yellow").click(function(){
        $('head').append('<link rel="stylesheet" type="text/css" href="css/style.css">');
        $('head').append('<link rel="stylesheet" type="text/css" href="css/components.css">');
    });

    $("#blue").click(function(){
        $('head').append('<link rel="stylesheet" type="text/css" href="css/blue/style.css">');
        $('head').append('<link rel="stylesheet" type="text/css" href="css/blue/components.css">');
    });

    $("#red").click(function(){
        $('head').append('<link rel="stylesheet" type="text/css" href="css/red/style.css">');
        $('head').append('<link rel="stylesheet" type="text/css" href="css/red/components.css">');
    });

    $("#green").click(function(){
        $('head').append('<link rel="stylesheet" type="text/css" href="css/green/style.css">');
        $('head').append('<link rel="stylesheet" type="text/css" href="css/green/components.css">');
    });
    
});