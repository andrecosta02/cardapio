        
        // HTML: <button id="voltarAoTopo" disabled>Voltar ao Topo</button>
        //Botão para voltar ao topo do site lentamente
        const btn = document.querySelector("#voltarAoTopo");

        function handleClick() {
            window.scroll({
                top: 0,
                behavior: "smooth",
            })
        }
        //Para ser colocar dentro de uma função para ativar o botão 
        // document.getElementById("voltarAoTopo").disabled = false;
        
        btn.addEventListener("click", handleClick);





function generateQRCodes() {
    var startMesa = parseInt(document.getElementById('startMesa').value);
    var endMesa = parseInt(document.getElementById('endMesa').value);
    var qrcodeContainer = document.getElementById('qrcode-container');
    
    qrcodeContainer.innerHTML = '';

    for (var i = startMesa; i <= endMesa; i++) {
        var qrcodeGroup = document.createElement('div');
        qrcodeGroup.className = 'qrcode-group';

        var cardapioQRCodeContainer = document.createElement('div');
        cardapioQRCodeContainer.className = 'qrcode-container';
        var cardapioQRCodeDiv = document.createElement('div');
        cardapioQRCodeDiv.className = 'qrcode';
        var cardapioQRCodeImg = document.createElement('img');
        cardapioQRCodeImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://andrecosta02.github.io/cardapio/';
        cardapioQRCodeDiv.appendChild(cardapioQRCodeImg);
        cardapioQRCodeContainer.appendChild(cardapioQRCodeDiv);
        cardapioQRCodeContainer.innerHTML += '<p>QR Code do Cardápio</p>';
        qrcodeGroup.appendChild(cardapioQRCodeContainer);

        var mesaQRCodeContainer = document.createElement('div');
        mesaQRCodeContainer.className = 'qrcode-container';
        var mesaQRCodeDiv = document.createElement('div');
        mesaQRCodeDiv.className = 'qrcode';
        var mesaQRCodeImg = document.createElement('img');
        var mesaNumber = i.toString().padStart(3, '0'); // Adiciona zeros à esquerda
        mesaQRCodeImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + mesaNumber;
        mesaQRCodeDiv.appendChild(mesaQRCodeImg);
        mesaQRCodeContainer.appendChild(mesaQRCodeDiv);
        mesaQRCodeContainer.innerHTML += '<p>QR Code da Mesa ' + mesaNumber + '</p>';
        qrcodeGroup.appendChild(mesaQRCodeContainer);

        qrcodeContainer.appendChild(qrcodeGroup);

        document.getElementById("voltarAoTopo").disabled = false;
    }
}

// Evento de teclado para o campo endMesa
document.getElementById('endMesa').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) { // Verifica se a tecla pressionada é "Enter" (código 13)
        generateQRCodes();
    }
});



