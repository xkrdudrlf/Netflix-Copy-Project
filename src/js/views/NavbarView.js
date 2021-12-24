import View from "./View";

export default class NavbarView extends View {
  addHandlerClickNavigationLogo(handler) {
    this._currentElement.addEventListener("click", (e) => {
      if (!e.target.classList.contains("navbar__logo")) return;
      handler("Home");
    });
  }

  _generateElement() {
    const navbar = document.createElement("nav");
    navbar.className = "navbar";

    const navbarLogo = document.createElement("div");
    navbarLogo.className = "navbar__logo";

    const navbarNavigation = document.createElement("div");
    navbarNavigation.className = "navbar__navigation";

    navbar.appendChild(navbarLogo);
    navbar.appendChild(navbarNavigation);

    return navbar;
  }
}

/*
  <div class="navbar">
    <div class="navbar__logo"></div>
    <div class="navbar__section">
      <ul class="navbar__section__left">
        <li class="navbar__tab">Home</li>
        <li class="navbar__tab">TV Shows</li>
        <li class="navbar__tab">Movies</li>
        <li class="navbar__tab">New & popular</li>
        <li class="navbar__tab">My List</li>
      </ul>
      <div class="navbar__section__right">
        <i class="navbar__element fas fa-search"></i>
        <li class="navbar__element show-kids">Kids</li>
        <i class="navbar__element fas fa-bell"></i>
        <i class="navbar__element  fas fa-user"></i>
      </div>
    </div>
  </div>
*/
