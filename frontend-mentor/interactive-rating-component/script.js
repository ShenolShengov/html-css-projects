document.addEventListener('DOMContentLoaded', setUp);

function setUp() {
    const ratingComponent = document.querySelector('.rating-component');

    ratingComponent.addEventListener('submit', submitRatingFormHandler);

    function submitRatingFormHandler(e) {
        e.preventDefault();
        const rateContainer = document.querySelector('.rate-container');
        const thankYouContainer = document.querySelector('.thank-you-container');

        rateContainer.classList.add('d-none');
        thankYouContainer.classList.remove('d-none');
    }
}

