document.getElementById("bot-vol").addEventListener("click", function() {
    document.getElementById("control-tab").style.display = "none";
    document.getElementById("volunteers-tab").style.display = "block";
    document.getElementById("pessoas-tab").style.display = "none"; // Garante que outras abas estejam ocultas se necessário
});

document.getElementById("bot-ppa").addEventListener("click", function() {
    document.getElementById("control-tab").style.display = "none";
    document.getElementById("volunteers-tab").style.display = "none";
    document.getElementById("pessoas-tab").style.display = "block";
});