import Header from "../templates/Header";
import Error404 from "../templates/Error404";
import Home from "../pages/Home";
import Character from "../pages/Charater";
import resolveRoutes from "../utils/resolveRoutes";
import getHash from "../utils/getHash";

const routes = {
    "/": await Home,
    "/:id": Character,
}

// Manejador
const router = async() => {
    // Establecer templates al DOM
    const header = document.getElementById("header");
    const content = document.getElementById("content");

    header.innerHTML = await Header();

    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
}


export default router;