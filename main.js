const IMG_ARRAY = document.querySelectorAll('.content-bg')
const NAV_BTNS = document.querySelectorAll('nav ul li')


navBtnActivator()

function navBtnActivator() {
    NAV_BTNS.forEach((btn, index) => {
        btn.addEventListener("click", () => {
        hideInactivePage()
        inactivateTab()

        btn.classList.add('active')
        IMG_ARRAY[index].classList.add('current')
    })})
}

function hideInactivePage() {
    IMG_ARRAY.forEach(tab => tab.classList.remove('current'))
}

function inactivateTab() {
    NAV_BTNS.forEach(btn => btn.classList.remove('active'))
}

