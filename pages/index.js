function togglePopup() {
    document.querySelector(".popup").classList.toggle('popup_active')
}

function submitPopup() {
    event.preventDefault()
    const cardUrl = document.querySelector(".popup__url").value;
    const cardName = document.querySelector(".popup__name").value;
    document.querySelector(".card-list").insertAdjacentHTML('beforeend', `<article class="card-list__item">
    <img src="${cardUrl}" alt="" class="card-list__item-image">
    <p class="card-list__item-name">
        ${cardName}
    </p>
</article>`)
    document.querySelector(".popup__form").reset();
    togglePopup()
}

document.querySelector('.popup__button').addEventListener("click", function() {
    alert('Форма успешно отправлена');
})

document.querySelector(".profile__add").addEventListener("click", togglePopup)
document.querySelector(".popup__close").addEventListener("click", togglePopup)
document.querySelector(".popup__form").addEventListener("submit", submitPopup)
