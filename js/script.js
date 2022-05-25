const el = (selector) => document.querySelector(selector);


        // при нажатии на кнопку
        el('#generateQRCode').addEventListener('click', function() {
           
            // получаем блок куда будет выводиться QR-код
            let qrCodeOutput = el('#result');

            // получаем содержимое текстового поля
            let text = el('#qrCodeText').value;

            // очищаем блок с QR-кодом
            qrCodeOutput.innerHTML = "";

            // и помещаем в него сгенерированный библиотекой QR-код
            qrCodeOutput.append(QRCode.generateHTML(text, {}))
        });