const modalTask = document.querySelector(".modalTask");
const buttonOpen = document.querySelector(".search .button");
const buttonClose = document.querySelector("dialog .close");

buttonOpen.addEventListener("click", () => {
    modalTask.show();
});
buttonClose.addEventListener("click", () => {
    modalTask.close();
});
