const btn = document.querySelector('.btn');

btn.addEventListener('click', e => {

    // remove the existing content when the button clicked
    document.querySelector('.error-content').remove();
    
    console.log('loading...');

    // create a loading animation when the button clicked
    const parentDiv = document.querySelector('.not-found');
    const newDiv = document.createElement('div');
    newDiv.classList.add('lds-spinner');
    parentDiv.appendChild(newDiv);

    let fragment = document.createDocumentFragment();
    
    for (let i = 0; i < 12; i++) {
        let addNewDiv = document.createElement('div');
        fragment.appendChild(addNewDiv);
    }
    
    newDiv.appendChild(fragment);

    setTimeout(() => {
        document.querySelector('.lds-spinner').remove();
        document.querySelector('.not-found').innerHTML = `
        <center>
            <img src="img/lightbulb.gif" width="400px" alt="lightbulb"><br>
            <h3>Full-stack developer!</h3>
        </center>
        `;
    }, 1500);

    setTimeout(() => {
        // after loading the page, scroll up and change the content
        // * scroll up the page
        // * remove the whole content except the top part
        document.querySelector('main').remove();
        document.querySelector('.ref-img').remove();

        // * change the background-color & text
        document.body.style.backgroundImage = 'linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%)';
        document.querySelector('h1').style.color= '#96c8fb';
        document.querySelector('h1').style.textShadow = "4px 1px #000";

        document.querySelector('span').innerHTML = "has";
        document.querySelector('.interest').innerHTML = `<div>Coding | Running</div>`;

        // * add new images
        const parentImg = document.querySelector('.intro');
        const newDivForImg = document.createElement('div');
        newDivForImg.classList.add('ref-img');
        parentImg.appendChild(newDivForImg);

        const addGif = document.createElement('img');
        addGif.setAttribute('src', 'img/coding.gif');
        addGif.setAttribute('width', '480');
        newDivForImg.appendChild(addGif);
        
        let fragment2 = document.createDocumentFragment();
    
        for (let i = 1; i < 8; i++) {
            let newImg = document.createElement('img');
            newImg.setAttribute('src', `img/adding${i}.jpg`);
            fragment2.appendChild(newImg);
        }
        
        newDivForImg.appendChild(fragment2);

        const lastMsg = document.createElement('div');
        lastMsg.classList.add('msg');
        document.querySelector('.intro').appendChild(lastMsg);

        lastMsg.innerHTML = `<div>Check out more <a href="https://github.com/aanmeba" target="_blank">projects</a></div>`;

    }, 4000);

});






