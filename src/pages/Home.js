import getData from "../utils/getData";
import getHash from "../utils/getHash";


const Home = async () => {

    const id = getHash();
    const {results} = await getData(id);

    const view = `
        <div class="Characters">
            ${results.map(item => `
                <article class="Character-item">
                    <a href="#/${item.id}">
                        <img src="${item.image}" alt="${item.name}" />
                        <h2>${item.name}</h2>
                    </a>
                </article>
            `).join("")}
        </div>
    `;

    return view;
}

export default Home;