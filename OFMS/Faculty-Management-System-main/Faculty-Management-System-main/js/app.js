const adminButton = document.getElementById('admin');
const tchrButton = document.getElementById('tchr');
const container = document.getElementById('container');

adminButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

tchrButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");

    console.log("click");
});