import {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
} from "./elements.js";

export default function Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
}) {
    function play() {
        buttonPlay.classList.add('hide');
        buttonPause.classList.remove('hide');
        buttonSet.classList.add('hide');
        buttonStop.classList.remove('hide');
    }

    function pause() {
        buttonPause.classList.add('hide');
        buttonPlay.classList.remove('hide');
    }

    function reset() {
        buttonPlay.classList.remove('hide');
        buttonPause.classList.add('hide');
        buttonSet.classList.remove('hide');
        buttonStop.classList.add('hide');
    }

    function getMinutes() {
        let newMinutes;

        while (true) {
            const input = prompt('Quantos minutos?');
            if (input === null) {
                // Usuário cancelou o prompt
                return false;
            }

            // Verifica se a entrada é um número válido
            const parsedMinutes = parseInt(input, 10);
            if (!isNaN(parsedMinutes) && parsedMinutes >= 0) {
                newMinutes = parsedMinutes;
                break; // Sai do loop se o número for válido
            } else {
                alert('Por favor, insira um número válido de minutos.');
            }
        }

        return newMinutes;
    }

    return {
        reset,
        play,
        pause,
        getMinutes
    };
}
