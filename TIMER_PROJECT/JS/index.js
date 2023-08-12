import Controls from "./controls.js";
import Timer from "./timer.js";
import Sounds from "./sounds.js";
import {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff,
    buttonStop,
    minutesDisplay,
    secondsDisplay
} from "./elements.js";

const sound = Sounds();

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    minutesDisplay,
    secondsDisplay
});

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
});

buttonPlay.addEventListener('click', function () {
    controls.play();
    timer.countdown();
    sound.pressButton();
});

buttonPause.addEventListener('click', function () {
    controls.pause();
    timer.hold();
    sound.pressButton();
});

buttonStop.addEventListener('click', function () {
    controls.reset();
    timer.reset();
    sound.pressButton();
});

buttonSoundOff.addEventListener('click', function () {
    buttonSoundOn.classList.remove('hide');
    buttonSoundOff.classList.add('hide');
    sound.bgAudio.pause();
});

buttonSoundOn.addEventListener('click', function () {
    buttonSoundOn.classList.add('hide');
    buttonSoundOff.classList.remove('hide');
    sound.bgAudio.play();
});

buttonSet.addEventListener('click', function () {
    let newMinutes = controls.getMinutes();
    if (!newMinutes) {
        timer.reset();
        return;
    }
    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
});
