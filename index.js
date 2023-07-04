// Switches color theme
const button = document.querySelector(".switch");
button.addEventListener("click", function () {
	button.classList.toggle("on");
	changeTheme();
});

let theme = 0;
function changeTheme() {
	const themes = [
		{ color: "#000", colorHover: "#444", bg: "light_bg.svg" },
		{ color: "#fff", colorHover: "#bbb", bg: "dark_bg.svg" },
	];
	document.documentElement.style.setProperty("--color", themes[theme].color);
	document.documentElement.style.setProperty("--color-darker", themes[theme].colorHover);
	document.body.style.backgroundImage = `url(assets/${themes[theme].bg})`;
	theme++;
	theme = theme > 1 ? 0 : theme;
}
