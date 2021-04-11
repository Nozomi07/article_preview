let icon = document.getElementsByClassName("click_link_wrapper");

icon[0].addEventListener("click", () => {
    const shareLink = document.getElementsByClassName("link");
    if (shareLink[0].style.visibility === 'hidden') {
        shareLink[0].style.visibility = 'visible'
    } else {
        shareLink[0].style.visibility = 'hidden';
    }
});