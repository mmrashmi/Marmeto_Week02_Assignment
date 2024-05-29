document.addEventListener('DOMContentLoaded', function () {
    const products = [
        {
            "header": {
                "logo": "./assests/Logo.png",
                "nav": [
                    {
                        "linkTitle": "Shop",
                        "Navlink": "#"
                    },
                    {
                        "linkTitle": "Brand",
                        "Navlink": "#"
                    },
                    {
                        "linkTitle": "Contact Us",
                        "Navlink": "#"
                    }
                ],
                "showsSignupButton": true
            },
            "sectionBlocks": [
                {
                    "heading": "Exquisite Watches",
                    "miniDescription": "Gold Luxury",
                    "Description": "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
                    "Price": "$499.00 ",
                    "media": "./assests/Group 4.png",
                    "backgroundColor": "#fac89c"
                },
                {
                    "heading": "Dainty Timepieces",
                    "miniDescription": "Gold Luxury",
                    "Description": "Explore the Ideal Timepiece for any Moment and Enhance Your style with Timeless sophistication and Impeccable Craftsmanship - timepiece",
                    "Price": "$469.00 ",
                    "media": "./assests/Group 5.png",
                    "backgroundColor": "#cdcece"

                },
                {
                    "heading": "Elegant Timepieces",
                    "miniDescription": "Gold Luxury",
                    "Description": "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
                    "Price": "$529.00 ",
                    "media": "./assests/Group 6.png",
                    "backgroundColor": "#59c97e"
                },
                {
                    "heading": "Refined Timepieces",
                    "miniDescription": "Gold Luxury",
                    "Description": "Explore the Ideal Timepiece for any Moment and Enhance Your style with Timeless sophistication and Impeccable Craftsmanship - timepiece",
                    "Price": "$599.00 ",
                    "media": "./assests/Group 7.png",
                    "backgroundColor": "#fa8479"
                }

            ],
            "socialIcons": [
                {
                    "social-media": "Facebook",
                    "link": "./assests/facebook.png"
                },
                {
                    "social-media": "Twitter",
                    "link": "./assests/twitter.png"
                },
                {
                    "social-media": "Youtube",
                    "link": "./assests/Group 4.png"
                }
            ]

        }
    ];
    UpdateContent(0);
    const productList = products[0].sectionBlocks;
    const splideList = document.querySelector('.splide__list');
    productList.forEach((product, index) => {
        const slide = document.createElement('li');
        slide.classList.add('splide__slide');

        slide.innerHTML = `
        <div class="parent-content">
            <div class="content-div">
                <div class="left-content">
                    <span class="heading">${product.heading}</span>

                    <span class="mini-description">${product.miniDescription}
                        <span class="choose-us">, Choose Us</span>
                    </span>
                    <span class="description">${product.Description}</span>
                    <span class="price">${product.Price}</span>
                    <div class="social-links">
                        <div class="img-div">
                            <img src="./assests/facebook.png" alt="" class=" fb-img">
                        </div>
                        <div class="img-div">
                            <img src="./assests/twitter.png" alt="" class="social-img diff-img">
                        </div>
                        <div class="img-div">
                            <img src="./assests/youtube.png" alt="" class="social-img">
                        </div>
                    </div>
                </div>
                <div class="right-content">
                    <div class="prod-img">
                        <img src="${product.media}" alt="" id="product-img">
                    </div>
                    <div class="slider-buttons">
                    </div>
                </div>
            </div>
        </div>
      `;
        splideList.appendChild(slide);
    });
    
    let spl=new Splide('#product-splide', {
        type: 'loop',
        perPage: 1,
        autoplay: false,
        interval: 3000,
        speed: 800,
        pagination: false,
        arrows: true,
    })
    spl.mount();
    spl.on('move', (e) => {
        let index = e;
        UpdateContent(index);
    });
    
    function UpdateContent (index){
        let body = document.querySelector("body");
        body.style.background =products[0].sectionBlocks[index].backgroundColor;
    
    }
});
