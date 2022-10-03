function start(){

    let x = $('#x-value').val();
    let y = $('#y-value').val().substring(0,10);
    let r = $('#r-value').val();

    cleanErrorMessages();

    if (validateY(y) & validateX()){
        console.log($('form').serialize());
        $.ajax({
            type: "POST",
            url: 'php/process.php',
            data: $('form').serialize(),
            success: function (data){
                let storage = window.sessionStorage;
                storage.setItem('table_data', (storage.getItem('table_data') != null ? storage.getItem('table_data') : '') + data);
                $('#result-table tr:last').after(data);
            },
        });
    }
}

function validateY(y){
    if (y === ""){
        setErrorFor("y", "Y не может быть пустой строкой!");
        return false;
    }

    if (y.replace(/\s/g, '').length === 0 || isNaN(y)){
        setErrorFor("y", "Y должно быть числом!");
        return false;
    }

    if (y.split(' ').length > 1){
        setErrorFor("y", "Y должен быть одним числом!");
        return false;
    }

    if (y >= 5 || y <= -3){
        setErrorFor("y", "Y должен быть в диапозоне (-3; 5)!");
        return false;
    }
    return true;
}

function validateX(){
    radios = $('input[type="radio"]');
    for (var i = 0; i < radios.length; i++){
        if (radios[i].checked){
            return true;
        }
    }

    setErrorFor("x", "Выберите значение X!");
    return false;
}

function validateR(){

}

function cleanErrorMessages(){
    setErrorFor("y", "");
    setErrorFor("x", "");
}

function setErrorFor(input, message){
    $("." + input + "-error-message").html("<span>" + message + "</span>");
}
