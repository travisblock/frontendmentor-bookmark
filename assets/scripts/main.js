const menuToggle = document.querySelector('#menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
const menuClose = document.querySelector('#menu-close');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('mobile-nav--open');
})

menuClose.addEventListener('click', () => {
    mobileNav.classList.remove('mobile-nav--open');
})

const features = [
    {
        title: "Bookmark in one click",
        desc: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        image: '/assets/images/illustration-features-tab-1.svg'
    },
    {
        title: 'Intelligent search',
        desc: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        image: '/assets/images/illustration-features-tab-2.svg'
    },
    {
        title: 'Share your bookmarks',
        desc: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at your friends house.',
        image: '/assets/images/illustration-features-tab-3.svg'
    }
]

const featureButtons = document.querySelectorAll('ul.tabs li');
const featureImage = document.querySelector('.tabs-detail .illustration img');
const featureTitle = document.querySelector('.tabs-detail .text h3');
const featureDesc = document.querySelector('.tabs-detail .text p');
featureButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        featureButtons.forEach(button => button.classList.remove('active'));
        button.classList.add('active');
        featureImage.classList.add('animate__animated', 'animate__fadeOut');
        featureTitle.classList.add('animate__animated', 'animate__fadeOut');
        featureDesc.classList.add('animate__animated', 'animate__fadeOut');

        setTimeout(() => {
            featureImage.src = features[index].image;
            featureTitle.innerHTML = features[index].title;
            featureDesc.innerHTML = features[index].desc;
            featureImage.classList.remove('animate__fadeOut');
            featureTitle.classList.remove('animate__fadeOut');
            featureDesc.classList.remove('animate__fadeOut');
            featureImage.classList.add('animate__animated', 'animate__fadeIn');
            featureTitle.classList.add('animate__animated', 'animate__fadeIn');
            featureDesc.classList.add('animate__animated', 'animate__fadeIn');
        }, 600);
    })
})


const questions = document.querySelectorAll('.questions .list-item');

questions.forEach(question => {
    question.addEventListener('click', () => {
        // question children p
        const answer = question.querySelector('.a');
        console.log(answer);
        const closed = question.querySelector('.closed');
        if (closed) {
            closed.classList.remove('closed');
            answer.classList.add('animate__animated');
            answer.classList.add('animate__fadeIn');
        } else {
            answer.classList.add('animate__animated');
            answer.classList.add('animate__fadeOut');
            setTimeout(() => {
                answer.classList.add('closed');
                answer.classList.remove('animate__animated');
                answer.classList.remove('animate__fadeOut');
            }, 400);
        }
        // answer.classList.toggle('closed');
        // answer.classList.toggle('animate__animated');
        // answer.classList.toggle('animate__fadeInDown');
    })
})
