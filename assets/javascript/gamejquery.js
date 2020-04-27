$(document).ready(function() {
    let gameLost = false
    let defenderHP = 0
    let attackerHP = 0
    let defenderAP = 0
    let attackerAP = 0
    let attackerInc = 5
    let defenderObj;
    let attackerObj;

    let gamechar_array = ['chewy', 'hans', 'jabba', 'anakin']
    let game_attribs = [{
            gameavatar: 'chewy',
            hp: 100,
            attackpower: 5,
            score: 0
        },
        {
            gameavatar: 'hans',
            hp: 150,
            attackpower: 25,
            score: 0
        },
        {
            gameavatar: 'jabba',
            hp: 100,
            attackpower: 15,
            score: 0
        },
        {
            gameavatar: 'anakin',
            hp: 200,
            attackpower: 35,
            score: 0
        }
    ]


    //hide some elements
    $('.chooseEnemy').hide()
    $('#attackBtn').hide()
    $('#restartBtn').hide()
        //first display all chars in gamin div
        //check for on click of image
    $('.game_characters .gcimgc .gcimg').on('click',
        function() {

            //figure out which image is clicked
            var attackerChosen = $(this).attr('data-img')
                //find the object within the array
            attackerObj = game_attribs.filter(function(entry) { return entry.gameavatar === attackerChosen; });
            //assign HP and AP
            attackerAP = attackerObj[0].attackpower
            attackerHP = attackerObj[0].hp

            var divid = $(this).closest('game_characters')
            $(this).css("background-color", "aqua")

            //make that image frame turn red
            var hiddenchars = gamechar_array;
            var idx = hiddenchars.indexOf(attackerChosen)
            if (idx != -1) {
                hiddenchars.splice(idx, 1)
            }
            //display message to choose enemy
            $('.chooseEnemy').show()

            //move images to 
            hiddenchars.forEach(hidenchar => {
                if (hidenchar == 'hans') {
                    var el = $("[div-img='hans']").detach()
                    $('.game_enemies').append("<div div-img='hans' class='img-container col-lg-1 col-md-2 col-3 geime'> <img data-img='hans' class='img-fluid img-thumbnail geimg' src='./assets/images/Han-Solo-02-icon.png' id='hans' /></div>")
                    $("[data-img='hans']").css("background-color", "red")
                        // phans.appendTo('.game_enemies')
                        // $("[data-img='hans']").css("background-color", "red")
                } else if (hidenchar == 'chewy') {
                    var el = $("[div-img='chewy']").detach()
                    $('.game_enemies').append("<div div-img='chewy' class='img-container col-lg-1 col-md-2 col-3 geime'> <img data-img='chewy' class='img-fluid img-thumbnail geimg' src='./assets/images/Chewbacca-icon.png' id='chewy' /></div>")
                        // appendTo('.game_enemies')
                    $("[data-img='chewy']").css("background-color", "red")
                } else if (hidenchar == 'jabba') {
                    var el = $("[div-img='jabba']").detach()
                    $('.game_enemies').append("<div div-img='jabba' class='img-container col-lg-1 col-md-2 col-3 geime'> <img data-img='jabba' class='img-fluid img-thumbnail geimg' src='./assets/images/Java-the-Hutt-icon.png' id='jabba' /></div>")
                        // .appendTo('.game_enemies')
                    $("[data-img='jabba']").css("background-color", "red")
                } else if (hidenchar == 'anakin') {
                    var el = $("[div-img='anakin']").detach()
                    $('.game_enemies').append("<div div-img='anakin' class='img-container col-lg-1 col-md-2 col-3 geime'> <img data-img='anakin' class='img-fluid img-thumbnail geimg' src='./assets/images/Anakin-Jedi-02-icon.png' id='anakin' /></div>")
                        // appendTo('.game_enemies')
                    $("[data-img='anakin']").css("background-color", "red")
                }
            });

            $('#attackBtn').delay(100).show()
                //move the other chararcters to the enemies div
            return



        }
    )


    //check for onclick of image in enemies row

    // $('.game_enemies .geime .geimg').on('click',
    $('.game_enemies').on('click', '.geimg',
        function() {

            //figure out which image is clicked
            var defenderChosen = $(this).attr('data-img')
                //find the object within the array
            defenderObj = game_attribs.filter(function(entry) { return entry.gameavatar === defenderChosen; });
            //assign HP and AP
            defenderAP = defenderObj[0].attackpower
            defenderHP = defenderObj[0].hp

            //move the chosen chararcters to the defender div

            var divid = $(this).closest('game_enemies')

            //make that image frame turn color
            $(this).css("background-color", "yellow")

            if (defenderChosen == 'hans') {
                var el = $("[div-img='hans']").detach()
                $('.game_defender').append("<div div-img='hans' class='img-container col-lg-1 col-md-2 col-3 gdimd'> <img data-img='hans' class='img-fluid img-thumbnail gdimg' src='./assets/images/Han-Solo-02-icon.png' id='hans' /></div>")
                $("[data-img='hans']").css("background-color", "yellow")
                    // phans.appendTo('.game_enemies')
                    // $("[data-img='hans']").css("background-color", "red")
            } else if (defenderChosen == 'chewy') {
                var el = $("[div-img='chewy']").detach()
                $('.game_defender').append("<div div-img='chewy' class='img-container col-lg-1 col-md-2 col-3 gdimd'> <img data-img='chewy' class='img-fluid img-thumbnail gdimg' src='./assets/images/Chewbacca-icon.png' id='chewy' /></div>")
                    // appendTo('.game_enemies')
                $("[data-img='chewy']").css("background-color", "yellow")
            } else if (defenderChosen == 'jabba') {
                var el = $("[div-img='jabba']").detach()
                $('.game_defender').append("<div div-img='jabba' class='img-container col-lg-1 col-md-2 col-3 gdimd'> <img data-img='jabba' class='img-fluid img-thumbnail gdimg' src='./assets/images/Java-the-Hutt-icon.png' id='jabba' /></div>")
                    // .appendTo('.game_enemies')
                $("[data-img='jabba']").css("background-color", "yellow")
            } else if (defenderChosen == 'anakin') {
                var el = $("[div-img='anakin']").detach()
                $('.game_defender').append("<div div-img='anakin' class='img-container col-lg-1 col-md-2 col-3 gdimd'> <img data-img='anakin' class='img-fluid img-thumbnail gdimg' src='./assets/images/Anakin-Jedi-02-icon.png' id='anakin' /></div>")
                    // appendTo('.game_enemies')
                $("[data-img='anakin']").css("background-color", "yellow")
            }
            $('#restartBtn').delay(100).show()


        }
    )

    //click on attack button
    $('#attackBtn').click(function() {
        //display restart button when attack is started
        //check if attacker lost  if so return do not do anything else

        if (defenderHP <= 0 || attackerHP <= 0) {
            //detach defender
            if (defenderHP <= 0 && defenderObj.length > 0) {
                if (defenderObj[0].gameavatar == 'hans') {
                    var el = $("[div-img='hans']").detach()

                } else if (defenderObj[0].gameavatar == 'chewy') {
                    var el = $("[div-img='chewy']").detach()

                } else if (defenderObj[0].gameavatar == 'anakin') {
                    var el = $("[div-img='anakin']").detach()

                } else if (defenderObj[0].gameavatar == 'jabba') {
                    var el = $("[div-img='jabba']").detach()

                }
            }

            $('#score').text("")

            // do not do anything
        } else {
            var audio = $("#mysoundclip")[0];
            audio.play();
            //reduce the defender and the attackers points.increment the attack power for your character only
            defenderHP = defenderHP - attackerAP
            attackerAP = attackerAP + attackerInc //increase by prespecified increment
            attackerHP = attackerHP - defenderAP
                //if the defender HP drops to below 0 remove defender
                //detach defender listener
                //if the attacker HP drops below zero attacker lost
                //detach attacker listener
                //display scores in the scores section
            $('#score').text("Your HP score is " + attackerHP + "\nYour opponent's health score is " + defenderHP)
            if (attackerHP <= 0) {
                $('#score').append("\n YOU LOST : RESTART?")
            } else if (defenderHP <= 0) {

                $('#score').append("\n\n YOU WON : SELECT ANOTHER?")

                if (defenderObj[0].gameavatar == 'hans') {
                    var el = $("[div-img='hans']").detach()

                } else if (defenderObj[0].gameavatar == 'chewy') {
                    var el = $("[div-img='chewy']").detach()

                } else if (defenderObj[0].gameavatar == 'anakin') {
                    var el = $("[div-img='anakin']").detach()

                } else if (defenderObj[0].gameavatar == 'jabba') {
                    var el = $("[div-img='jabba']").detach()

                }
            }

        }
    })

    //click on restart button:
    $('#restartBtn').click(function() {
        alert("restart")
        location.reload()
    })
})