$(document).ready(function() {
    $("#obterDica").click(function() {
        $.ajax({
            url: "https://api.adviceslip.com/advice",
            method: "GET",
            dataType: "json",
            success: function(data) {
                const dica = data.slip.advice;
                $("#motivacao").text(dica); 
            },
            error: function() {
                $("#motivacao").text("Erro ao obter a dica. Tente novamente.");
            }
        });
    });
});
    