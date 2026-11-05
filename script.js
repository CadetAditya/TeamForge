
function toggleMenu(menuId, button) {

    const menu = document.getElementById(menuId);

    menu.classList.toggle("show");

    button.classList.toggle("active");
}

function showPage(pageId, button) {

    // Hide all pages
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active-page");
    });

    // Show selected page
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }

    // Update page title
    const titles = {
        "home": "Home page",
        "open-project": "Open Projects",
        "events": "Events",
        "find-teammate": "Find Teammates",
        "join-project": "Join a Project",
        "profile": "My Profile",
        "create-project": "My Projects"
    };

    document.getElementById("page-title").textContent =
        titles[pageId] || "TeamForge";

    // Update active navigation
    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
    });

    if (button && button.classList.contains("nav-item")) {
        button.classList.add("active");
    }

    // Close mobile sidebar
    document.getElementById("sidebar").classList.remove("open");
}

function toggleSidebar() {

    document.getElementById("sidebar").classList.toggle("open");

}
