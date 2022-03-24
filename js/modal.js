const modalTask = document.querySelector(".modalTask");
const buttonOpen = document.querySelector(".search .button");
const buttonClose = document.querySelectorAll("dialog .close");

buttonOpen.addEventListener("click", () => {
    modalTask.show();
});

buttonClose.forEach((element) => {
    element.addEventListener("click", () => {
        modalTask.close();
    });
});
