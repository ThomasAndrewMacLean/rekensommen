import { SettingsType } from './types/settings';
import { wrapper, form, name, startBtn, ans1, ans2, ans3, question, score, progress, hiddenBtn } from './dom';

console.log('starting 🚀');

// Get settings from local storage
let settings: SettingsType | null = JSON.parse(localStorage.getItem('USER_SETTINGS') || '{}');

if (settings) {
    name.value = settings.name;
}

let SCORE = 0;
let TOTAL = 0;

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData: any = form.elements;

    settings = {
        name: formData[0].value,
        id: '12345',
        time: formData[1].checked ? formData[1].value : formData[2].value,
        upperlimit: formData[3].value,
        kind: 'plus',
    };

    localStorage.setItem('USER_SETTINGS', JSON.stringify(settings));
    document.documentElement.style.setProperty('--page', '-100vh');
});

const getSum = (max: number): { text: string; solution: number } => {
    const sum1 = Math.floor(Math.random() * (max / 2) + 1);
    const sum2 = Math.floor(Math.random() * (max / 2) + 1);

    return { text: sum1.toString() + ' + ' + sum2.toString(), solution: sum1 + sum2 };
};

const getWrongAnswers = (max: number, answer: number): number[] => {
    let wrong1 = answer;
    let wrong2 = answer;

    while (wrong1 === answer || wrong2 === answer || wrong1 === wrong2) {
        wrong1 = Math.floor(Math.random() * max + 1);
        wrong2 = Math.floor(Math.random() * max + 1);
    }

    return [wrong1, wrong2];
};

let looper;
const answer = (e: any): void => {
    TOTAL++;
    if (e && e.target.classList.contains('correct')) {
        SCORE++;
    }
    hiddenBtn.focus();
    progress.setAttribute('value', '100');
    clearInterval(looper);

    ans1.classList.remove('correct');
    ans2.classList.remove('correct');
    ans3.classList.remove('correct');

    score.innerHTML = `${SCORE}/${TOTAL}`;
    createExercise();
};

const createExercise = (): void => {
    if (!settings) return;
    const sum = getSum(settings.upperlimit);
    question.innerHTML = sum.text;

    const answers = [ans1, ans2, ans3];

    const rand = Math.floor(Math.random() * answers.length);
    answers[rand].innerHTML = sum.solution.toString();
    answers[rand].classList.add('correct');

    let wrongAnswers = getWrongAnswers(settings.upperlimit, sum.solution);
    answers[(rand + 1) % answers.length].innerHTML = wrongAnswers[0].toString();
    answers[(rand + 2) % answers.length].innerHTML = wrongAnswers[1].toString();

    let ticker = settings.time === 'fast' ? 6 : 12;
    let timeRemaining = 100;
    const jumpTime = 100 / ticker;
    progress.setAttribute('value', '100');

    looper = setInterval(() => {
        ticker--;
        timeRemaining -= jumpTime;

        if (timeRemaining < 0) {
            answer(null);
        } else {
            progress.setAttribute('value', Math.floor(timeRemaining).toString());
        }
    }, 1000);
};

startBtn.addEventListener('click', () => {
    startBtn.classList.add('hide');
    wrapper.classList.remove('hide');
    ans1.classList.remove('hide');
    ans2.classList.remove('hide');
    ans3.classList.remove('hide');
    createExercise();
});

ans1.addEventListener('click', answer);
ans2.addEventListener('click', answer);
ans3.addEventListener('click', answer);
