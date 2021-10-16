const setTheme = theme => document.documentElement.className = theme;

window.onload = checkTheme();

function checkTheme() {
    const localStorageTheme = localStorage.getItem("localStorageTheme");

    if (localStorageTheme !== null) {
        // set the theme of body
        document.documentElement.className = localStorageTheme;
        console.log("preferred color applied")
    }
    else {
        console.log("no color stored")
    }
}