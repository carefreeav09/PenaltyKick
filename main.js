$( document ).ready(function() {

    var controller = new ScrollMagic.Controller();

    var tl = new TimelineMax();
    var tlleft = new TimelineMax();
    var tlCenter = new TimelineMax();
    var tlRight = new TimelineMax();

    var diveDirection;
    function diveDirection()
    {
        diveDirection =  Math.floor(Math.random() * 3) + 1;



        if(diveDirection===1){
            tlleft.to('.goalKeeper',0.1,{rotation:-20})
                .set('.goalKeeper',{autoAlpha:0})
                .to('.goalKeeper-dive', 1,{autoAlpha:1,rotation: -80,x:-200, y:-50, scale:1.4})
                .to('.goalKeeper-dive', 1,{y:0},'-=.1');

        }

        if(diveDirection===2){
            tlCenter.to('.goalKeeper',0.5,{scale:1.4});

        }

        if(diveDirection===3){
            tlRight.to('.goalKeeper',0.1,{rotation:20})
                .set('.goalKeeper',{autoAlpha:0})
                .to('.goalKeeper-dive', 1,{autoAlpha:1,rotation: 60,x:200, y:-50, scale:1.2})
                .to('.goalKeeper-dive', 1,{y:0});

        }


    }

    $( "#sLeft" ).click(function() {

        diveDirection();
            tl.add(tlleft)
            .to('.item', 1 , {y:-350,x:-200, ease:Power4.easeOut, scale:0.5},'-=1')
            .set('.sLeft',{opacity:0},0 )
            .set('.item', {y:0, x:0, scale:1, opacity: 1},'=+1')
            .set('.sLeft', {opacity: 1});

        if(diveDirection == 1){


            tl.to('.result2', 1 , {autoAlpha: 1},'-=1')
                .to('.result2',1,{autoAlpha: 0});
        }
        else
        {
            tl.to('.result', 1 , {autoAlpha: 1},'-=1')
                .to('.result',1,{autoAlpha: 0});
        }
        setTimeout(function(){
            window.location.reload(1);
        }, 2500);
    });

    $( "#sStraight" ).click(function() {

        diveDirection();
        tl.to('.item', 1 , {y:-400,x:15, ease:Power4.easeOut, scale:0.5})
            .set('.sLeft',{opacity:0},0 )
            .set('.item', {y:0, x:0, scale:1, opacity: 1},'=+1')
            .set('.sLeft', {opacity: 1});


        if(diveDirection == 2){

            tl.to('.result2', 1 , {autoAlpha: 1},'-=1')
                .to('.result2',1,{autoAlpha: 0});
        }
        else
        {
            tl.to('.result', 1 , {autoAlpha: 1},'-=1')
                .to('.result',1,{autoAlpha: 0});
        }
        setTimeout(function(){
            window.location.reload(1);
        }, 2500);
    });

    $( "#sRight" ).click(function() {
        diveDirection();
        tl.add(tlRight)
            .to('.item', 1 , {y:-400,x:300, ease:Power4.easeOut, scale:0.5}, '-=2')
            .set('.sLeft',{opacity:0},0 )
            .set('.item', {y:0, x:0, scale:1, opacity: 1},'=+1')
            .set('.sLeft', {opacity: 1});

        if(diveDirection == 3){

            tl.to('.result2', 1 , {autoAlpha: 1},'-=1')
                .to('.result2',1,{autoAlpha: 0});
        }
        else
        {
            tl.to('.result', 1 , {autoAlpha: 1},'-=1')
                .to('.result',1,{autoAlpha: 0});
        }
        setTimeout(function(){
            window.location.reload(1);
        }, 2500);
    });




});

