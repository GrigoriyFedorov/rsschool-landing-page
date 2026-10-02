import { products } from "../products.js";

export function initCategoryChange() {
  const tabs = document.querySelectorAll(".menu__tabs-tab");
  const catalog = document.querySelector(".menu__catalog-list");
  const refresh = document.querySelector('.menu__catalog-refresh');

  if (!catalog) return;

  renderCards(products.filter((card) => {
    return card.category === 'coffee';
  }))

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      tabs.forEach((tab) => {
        tab.classList.remove("menu__tabs-tab--active");
      });
      tab.classList.add("menu__tabs-tab--active");

      refresh.style = '';
      catalog.classList.remove('is-expanded')

      const category = e.currentTarget.dataset.category;
      const cards = products.filter((card) => {
        return card.category === category;
      });

      renderCards(cards);
    });
  });

  refresh.addEventListener('click', (e) => {
    catalog.classList.add('is-expanded');
    refresh.style.display = "none";
  })

  function renderCards(cards) {
    catalog.innerHTML = "";
    for (let i = 0; i < cards.length; i++) {
      const li = document.createElement("li");
      li.classList.add('menu__catalog-item')
      const currentCard = cards[i];
      li.innerHTML = `
            <article class="catalog__card card">
                    <div class="card__img-wrapper">
                      <img
                        class="card__image"
                        src="images/catalog/${currentCard.category}/${currentCard.category}-${i + 1}.webp"
                        alt="${currentCard.name}"
                        width="310"
                        height="310"
                      />
                    </div>
                    <div class="card__content">
                      <h3 class="card__title">${currentCard.name}</h3>
                      <p class="card__description">
                        ${currentCard.description}
                      </p>
                      <div class="card__price">$${currentCard.price}</div>
                    </div>
                  </article>
            `;
      catalog.appendChild(li);
    }
  }
}

