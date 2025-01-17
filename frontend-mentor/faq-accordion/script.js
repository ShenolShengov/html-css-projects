document.addEventListener('DOMContentLoaded', setUp);

function setUp() {
    const faqContainer = document.querySelector('.faq-container');

    faqContainer.addEventListener('click', toggleFaqHandler);
}

function toggleFaqHandler(e) {
    const quesitonToToggle = e.target.closest('.faq-question-contaiter');

    const isOpen = quesitonToToggle.getAttribute('open') !== null;

    document.querySelectorAll('.faq-question-contaiter').forEach(closeQuestion);
    updateQuestionState(isOpen, quesitonToToggle);
}

function getQuestionIcons(qestion) {
    return qestion.querySelectorAll('.question-heading img');
}

function closeQuestion(question) {
    const [plusIcon, minusIcon] = getQuestionIcons(question);

    plusIcon.classList.remove('d-none');
    plusIcon.classList.add('opacity-1');

    minusIcon.classList.add('d-none');
    minusIcon.classList.add('opacity-0');

    question.removeAttribute('open');
}

function openQuestion(question) {
    const [plusIcon, minusIcon] = getQuestionIcons(question);

    plusIcon.classList.add('d-none');
    plusIcon.classList.add('opacity-0');

    minusIcon.classList.remove('d-none');
    minusIcon.classList.add('opacity-1');

    question.setAttribute('open', '');
}

function updateQuestionState(isOpen, question) {
    if (isOpen) closeQuestion(question);
    else openQuestion(question);
}
