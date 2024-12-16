document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const homeLink = document.getElementById('home-link');
    const catalogLink = document.getElementById('catalog-link');
    const specialsLink = document.getElementById('specials-link');

    homeLink.addEventListener('click', () => {
        content.innerHTML = '<h2>Ласкаво просимо до каталогу товарів!</h2>';
    });

    catalogLink.addEventListener('click', loadCategories);

    specialsLink.addEventListener('click', loadRandomCategory);

    function loadCategories() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'categories.json', true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                const categories = JSON.parse(xhr.responseText);
                content.innerHTML = '<h2>Категорії товарів</h2>';
                categories.forEach(category => {
                    const link = document.createElement('a');
                    link.href = '#';
                    link.textContent = category.name;
                    link.className = 'category-list';
                    link.addEventListener('click', () => loadCategoryItems(category.shortname));
                    content.appendChild(link);
                });
            }
        };
        xhr.send();
    }

    function loadCategoryItems(categoryShortname) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${categoryShortname}.json`, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                const items = JSON.parse(xhr.responseText);

                content.innerHTML = `<h2>${capitalize(categoryShortname)}</h2>`;

                const cards = document.createElement('div');
                cards.className = 'cards';

                items.forEach(item => {
                    const itemCard = document.createElement('div');
                    itemCard.className = 'item-card';

                    itemCard.innerHTML = `
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text"><strong>Ціна: ${item.price}</strong></p>
                    </div>
                `;

                    cards.appendChild(itemCard);
                });

                content.appendChild(cards);
            }
        };
        xhr.send();
    }


    function loadRandomCategory() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'categories.json', true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                const categories = JSON.parse(xhr.responseText);
                const randomIndex = Math.floor(Math.random() * categories.length);
                loadCategoryItems(categories[randomIndex].shortname);
            }
        };
        xhr.send();
    }

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
});

