// INICIO

 // Pegar nome pela URL
    const params = new URLSearchParams(window.location.search);
    const nome = params.get("nome") || "Visitante";
    document.getElementById("boas-vindas").innerText = `Seja Bem-Vindo ${nome}!`;

    // Modal kota AF
    function abrirModal() {
      document.getElementById("modal").style.display = "block";
       document.getElementById("felicite").innerText = `${nome}, felicite Kota Afonso!💆`;
    }

    function fecharModal() {
      document.getElementById("modal").style.display = "none";
    }

   // WhatsApp Api
    function enviarMensagem() {
      const msg = document.getElementById("mensagem").value.trim();
      const numero = "244934404715"; 
      const link = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
      const erro = document.getElementById("errormessage");
      if(msg == ""){
        erro.innerHTML = `${nome}, digite qualquer coisa.`
        erro.style.color = "red";
        
      } else{
         window.open(link, "_blank");
      }
  }

