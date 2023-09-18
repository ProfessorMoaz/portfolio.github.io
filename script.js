// turn page when click
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else{
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
})

// contact me button when click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () =>{
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
        }, (index +1) * 200 + 100)
    })
}

let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
    return pageNumber; // Add return statement to return the updated pageNumber
}

// back profile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            const currentPage = reverseIndex();
            pages[currentPage].classList.remove('turn');

            setTimeout(() => {
                const nextPage = reverseIndex();
                pages[nextPage].style.zIndex = 10 + index;
            }, 500); // Specify a delay time for the inner setTimeout
        }, (index + 1) * 200 + 100);
    });
};

// openioning animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

//opening animation cover right
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800)

//opening animation page left profile
setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200)

//opening animation all right
pages.forEach((_, index) => {
    setTimeout(() => {
        const currentPage = reverseIndex();
        pages[currentPage].classList.remove('turn');

        setTimeout(() => {
            const nextPage = reverseIndex();
            pages[nextPage].style.zIndex = 10 + index;
        }, 500); // Specify a delay time for the inner setTimeout
    }, (index + 1) * 200 + 2100);
})

// send email for contact me form
function sendEmail() {
    var name = encodeURIComponent(document.getElementById("name").value);
    var email = encodeURIComponent(document.getElementById("email").value);
    var message = encodeURIComponent(document.getElementById("message").value);
    var subject = "New message from your Portfolio";
    var body = "Name: " + name + "%0D%0A" +
    "Email: " + email + "%0D%0A" +
    "Message: " + message;

    // Create a mailto URL with subject and body
    var mailtoUrl = "mailto:moazewasim0@gmail.com?subject=" + subject + "&body=" + body;

    // Open the user's default email client with the pre-populated email
    window.location.href = mailtoUrl;

    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
