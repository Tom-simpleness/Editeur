
$(function(){ // raccourci équivalent à $(document).ready(function(){}

    // définition des variables :
         // définition des couleurs qui constituront les palettes fore et back:
var colorPalette = ['000000', 'FF9966', '6699FF', '99FF66', 'CC0000', '00CC00', 'F3E821', 'F958E0', '82EDE4', 'FFFFFF'];
var forePalette = $('.fore-palette');
var backPalette = $('.back-palette');

// boucle selection des couleurs

for (var i = 0; i < colorPalette.length; i++) {
    // set une data-value attribut pour chaque couleur. Ce qui sera utilisé plus tard comme ValueArgument avec execCommand method.
    forePalette.append('<a href="#" data-command="forecolor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
    backPalette.append('<a href="#" data-command="backcolor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
}

$('.toolbar a').click(function(e) {
    // we store the value of the data-command attribute of the respective button in the variable, command
    var command = $(this).data('command');
    // utilisation execCommand commande Add-block-style tag
    if (command == 'h1' || command == 'h2'|| command=='h3' || command == 'h4' || command=='h5') {
        document.execCommand('formatBlock', false, command);
    }
    // commande avec Value argument , besoin d'un troisième argument.
    if (command == 'forecolor' || command == 'backcolor') {
        document.execCommand($(this).data('command'), false, $(this).data('value'));
    }
    if (command == 'createlink' || command == 'insertimage') {
        // boite de dialogue prompt()pour récupérer des valeurs textuelles
        url = prompt('Enter the link here: ', 'http:\/\/');
        document.execCommand($(this).data('command'), false, url);
        // commande sans value argument
    } else document.execCommand($(this).data('command'), false, null);
});

// mise en place des smileys de la bliblio à la div , src + class.
    for (i=1; i<8; i++){
        $('.selectSmiley').append("<img src='smiley/"+ i +".png' class='smileys' />")
    }
    //affichage de la div au click
    $('.fa-smile').on('click', function () {
        $('.selectSmiley').toggle();
    })
    // insertion smiley
    $('.smileys').on('click', function () {
        document.execCommand('insertImage', false, this.src);
    })


// ouverture de la modal
    $("#myBtn").click(function(){
        // récupération du contenu de la div editable
        var content =  $("#editor").html();
$('div.contenue').html(content);
        // affichage de la modal
        $("#myModal").show();
    });
    // fermeture modal
    $("span.close").click(function(){
        $("#myModal").hide();
    });

    // choix des polices
    $('#selectPolice').on('click',function () {
        var fontFamily=$('#selectPolice').val();

        switch (fontFamily) {
            case 'Arial':
                document.execCommand('fontName', false, fontFamily);
                break;
            case  'Amatic-Bold':
                document.execCommand('fontName', false, fontFamily);
                break;
            case 'cac_champagne':
                document.execCommand('fontName', false, fontFamily);
                break;
            case 'ostrich-regular':
                document.execCommand('fontName', false, fontFamily);
                break;
            case 'Pacifico':
                document.execCommand('fontName', false, fontFamily);
                break;
        }
    });

});
