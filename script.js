//Sliding Navigation Bar

function preventDefault(e)
{
    e.preventDefault();
}
function disableScroll()
{
    document.body.addEventListener('touchmove', preventDefault, { passive: false });
}
function enableScroll()
{
    document.body.removeEventListener('touchmove', preventDefault, { passive: false });
}

navbar = document.querySelector('.navbar');
navbar_buttons = document.querySelectorAll('.navbar-buttons');
hamburger = document.querySelector('.hamburger');
logo = document.querySelector('.logo');
body = document.querySelector('body');

let count = 0;
hamburger.addEventListener('click',function()
{
    navbar.classList.toggle("nav-mobile");
    navbar_buttons.forEach(function(navbar_button)
    { 
        navbar_button.classList.toggle("nav-buttons-mobile");
    });
    hamburger.classList.toggle("cross");
    logo.classList.toggle("logo-visibility");
    body.classList.toggle("scroll-disable");
    count++;
    if(count%2===0)
    {
        enableScroll();
        console.log("Second");
    }
    else
    {
        disableScroll();
        console.log("First");
    }
})

//Changing images on clicking arrow

let index =1;

leftBox = document.querySelector('.left-box');


buttonLeft = document.querySelector('#button-left');
buttonLeftMobile = document.querySelector('#button-left-mobile');
buttonRight = document.querySelector('#button-right');
buttonRightMobile = document.querySelector('#button-right-mobile');

text = document.querySelector('.text');
heading = document.querySelector('.upper-header');


//desktop

buttonRight.addEventListener('click',function(){
    index++;
    if(index===2)
    {
        leftBox.classList.add("left-box-image-2");

        heading.style.opacity = 0;
        setTimeout(function(){
            heading.innerHTML = "We are available all across the globe";
            heading.style.opacity = 1;
        },100)


        text.style.opacity = 0;
        setTimeout(function(){
            text.innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Dont hesitate to contact us today.";
            text.style.opacity = 1;
        },100)

    }
    else if(index==3)
    {
        leftBox.classList.add("left-box-image-3");
        leftBox.classList.remove("left-box-image-2");

        heading.style.opacity = 0;
        setTimeout(function(){
        heading.innerHTML = "Manufactured with the best materials";
        heading.style.opacity = 1;
    },100)

        text.style.opacity = 0;
        setTimeout(function(){
        text.innerHTML = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
        text.style.opacity = 1;
    },100)

    }
    else
    {
        index =1;
        leftBox.classList.remove("left-box-image-3");

        heading.style.opacity = 0;
        setTimeout(function(){
            heading.innerHTML = "Discover innovative ways to decorate";
            heading.style.opacity = 1;
        },100)


        text.style.opacity = 0;
        setTimeout(function(){
            text.innerHTML = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
            text.style.opacity = 1;
        },100)

    }
})

buttonLeft.addEventListener('click',function(){
    index--;
    if(index===2)
    {
        leftBox.classList.add("left-box-image-2");
        leftBox.classList.remove("left-box-image-3");

        heading.style.opacity = 0;
        setTimeout(function(){
            heading.innerHTML = "We are available all across the globe";
            heading.style.opacity = 1;
        },100)


        text.style.opacity = 0;
        setTimeout(function(){
            text.innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Dont hesitate to contact us today.";
            text.style.opacity = 1;
        },100)
    
    }
    else if(index==1)
    {
        leftBox.classList.remove("left-box-image-2");

        heading.style.opacity = 0;
        setTimeout(function(){
            heading.innerHTML = "Discover innovative ways to decorate";
            heading.style.opacity = 1;
        },100)


        text.style.opacity = 0;
        setTimeout(function(){
            text.innerHTML = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
            text.style.opacity = 1;
        },100)
    }
    else
    {
        index =3;
        leftBox.classList.add("left-box-image-3");

        heading.style.opacity = 0;
        setTimeout(function(){
        heading.innerHTML = "Manufactured with the best materials";
        heading.style.opacity = 1;
    },100)

        text.style.opacity = 0;
        setTimeout(function(){
        text.innerHTML = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
        text.style.opacity = 1;
    },100)

    }
})

//mobile

buttonRightMobile.addEventListener('click',function(){
    index++;
    if(index===2)
    {
        leftBox.classList.add("left-box-image-2-mobile");
        leftBox.classList.add("left-box-image-2");

        heading.style.opacity = 0;
        setTimeout(function(){
            heading.innerHTML = "We are available all across the globe";
            heading.style.opacity = 1;
        },100)


        text.style.opacity = 0;
        setTimeout(function(){
            text.innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Dont hesitate to contact us today.";
            text.style.opacity = 1;
        },100)

    }
    else if(index==3)
    {
        leftBox.classList.add("left-box-image-3-mobile");   
        leftBox.classList.add("left-box-image-3");

        leftBox.classList.remove("left-box-image-2-mobile");
        leftBox.classList.remove("left-box-image-2");


        heading.style.opacity = 0;
        setTimeout(function(){
        heading.innerHTML = "Manufactured with the best materials";
        heading.style.opacity = 1;
    },100)

        text.style.opacity = 0;
        setTimeout(function(){
        text.innerHTML = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
        text.style.opacity = 1;
    },100)

    }
    else
    {
        index =1;
        leftBox.classList.remove("left-box-image-3-mobile");
        leftBox.classList.remove("left-box-image-3");


        heading.style.opacity = 0;
        setTimeout(function(){
            heading.innerHTML = "Discover innovative ways to decorate";
            heading.style.opacity = 1;
        },100)


        text.style.opacity = 0;
        setTimeout(function(){
            text.innerHTML = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
            text.style.opacity = 1;
        },100)

    }
})

buttonLeftMobile.addEventListener('click',function(){
    index--;
    if(index===2)
    {
        leftBox.classList.add("left-box-image-2-mobile");
        leftBox.classList.add("left-box-image-2");
        leftBox.classList.remove("left-box-image-3-mobile");
        leftBox.classList.remove("left-box-image-3");


        heading.style.opacity = 0;
        setTimeout(function(){
            heading.innerHTML = "We are available all across the globe";
            heading.style.opacity = 1;
        },100)


        text.style.opacity = 0;
        setTimeout(function(){
            text.innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Dont hesitate to contact us today.";
            text.style.opacity = 1;
        },100)
    
    }
    else if(index==1)
    {
        leftBox.classList.remove("left-box-image-2-mobile");
        leftBox.classList.remove("left-box-image-2");


        heading.style.opacity = 0;
        setTimeout(function(){
            heading.innerHTML = "Discover innovative ways to decorate";
            heading.style.opacity = 1;
        },100)


        text.style.opacity = 0;
        setTimeout(function(){
            text.innerHTML = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
            text.style.opacity = 1;
        },100)
    }
    else
    {
        index =3;
        leftBox.classList.add("left-box-image-3-mobile");
        leftBox.classList.add("left-box-image-3");


        heading.style.opacity = 0;
        setTimeout(function(){
        heading.innerHTML = "Manufactured with the best materials";
        heading.style.opacity = 1;
    },100)

        text.style.opacity = 0;
        setTimeout(function(){
        text.innerHTML = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
        text.style.opacity = 1;
    },100)

    }
})
