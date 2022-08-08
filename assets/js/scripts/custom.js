



    async function retrieveProducts() {
        const response = await fetch('https://fakestoreapi.com/products?limit=20');
        const products = await response.json();
        return products;
    }


    async function getGallery(){


        let products = await retrieveProducts();

        let galleryProducts = products.reduce((acc,item)=>{

            let categories = acc.map(item=>item.category);
            
                categoryIsIncluded = categories.find(category=>category==item.category);

            if(!categoryIsIncluded){
                acc.push(item)
            }

            return acc;

        },[]);

        console.log(galleryProducts.map(item=>item.category))

        let carouselInner = document.querySelector('.carousel-inner');

        if(carouselInner){

            carouselInner.innerHTML = "";

            galleryProducts.forEach((item, index)=>{

                carouselInner.innerHTML += `
                    <div class="row carousel-item bg-white ${index==0 ? 'active' : ''}">
                        <img class="second-slide" src="${item.image}" alt="Second slide">
                        <div class="container">
                            <div class="carousel-caption">
                                <h1>${item.title}</h1>
                                <p>${item.description}</p>
                                <p><a class="btn btn-lg btn-primary" href="#item-${index}" role="button">Learn more</a></p>
                            </div>
                        </div>
                    </div>`;

            });

            
        }


        console.log(products);

    }


    async function getContents(){


        let products = await retrieveProducts();

        let contentProducts = products.reduce((acc,item)=>{

            let categories = acc.map(item=>item.category);
            
                categoryIsIncluded = categories.find(category=>category==item.category);

            if(!categoryIsIncluded){
                acc.push(item)
            }

            return acc;

        },[]);

        console.log(contentProducts.map(item=>item.category))

        let contentInner = document.querySelector('.content');

        if(contentInner){

            contentInner.innerHTML = "";

            contentProducts.forEach((item, index)=>{

                contentInner.innerHTML += `
                    <hr id="item-${index}" class="featurette-divider">
                    <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading">${item.title}</h2>
                        <p class="lead">${item.description}</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img class="featurette-image img-fluid mx-auto" src="${item.image}" alt="Generic placeholder image">
                    </div>
                    </div>`;
            });

            
        }


        console.log(products);

    }


    function renderResult(products){

        let searchContainer = document.querySelector('.search-container');

        if(searchContainer){

            searchContainer.innerHTML="";

            searchContainer.innerHTML=`<div class="col-12 py-4"><h2>Found n.: ${products.length} products</h2></div>`;

            products.forEach((product, index)=>{

                searchContainer.innerHTML += `
                    <div class="d-flex col-md-4">
                        <div class="card mb-4 box-shadow w-100 p-4">
                            <img class="card-img-top" src="${product.image}" alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1827d0e5657%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1827d0e5657%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7109375%22%20y%3D%22120.15%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
                            <div class="card-body">
                                <h3 class="search-title card-text mt-3">${product.title.split(' ').length>8 ? product.title.split(' ').splice(0,8)+'...' : product.title}</h3>
                                <h4 class="text-muted text-right">$${parseFloat(product.price).toFixed(2)}</h4>
                            </div>
                        </div>
                    </div>`;

            });


        }


    }


    async function searchModule(){


        let searchContainer = document.querySelector('.search-container');

        if(searchContainer){

            searchContainer.innerHTML="";

            let products = await retrieveProducts();

            let searchInput = document.querySelector('.searchInput');

            renderResult(products);

            if(searchInput){
                searchInput.addEventListener('keydown', (event)=>{

                    const searchText = event.target.value;

                    const searchResult = products.reduce((acc,item)=>{

                        const text = (item.title+' '+item.description+' '+item.category+' '+item.price).toLowerCase();

                        if(text.includes(searchText.toLowerCase())){
                            acc.push(item)
                        }

                        return acc

                    },[]);

                    renderResult(searchResult);

                })

            }




        }

    }





window.onload = ()=>{
    console.log("---> document is ready!");

    getGallery();
    getContents();
    searchModule();
}