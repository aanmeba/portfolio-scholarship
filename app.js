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
        // ** create new <div>
        const parentImg = document.querySelector('.intro');
        const newDivForImg = document.createElement('div');
        newDivForImg.classList.add('ref-img');
        parentImg.appendChild(newDivForImg);

        // ** add a gif file
        const addFig = document.createElement('figure');
        const addGif = document.createElement('img');
        const addCap = document.createElement('figcaption');
        
        addCap.classList.add('cap0');
        addGif.setAttribute('src', 'img/coding.gif');
        addGif.setAttribute('width', '480');
        newDivForImg.appendChild(addFig);
        addFig.appendChild(addGif);
        addFig.appendChild(addCap);
        document.querySelector('.cap0').innerHTML = 'I love coding and solving problems!';
        
        let fragment2 = document.createDocumentFragment();
    
        for (let i = 1; i < 8; i++) {
            let newFig = document.createElement('figure');
            let newImg = document.createElement('img');
            let newCap = document.createElement('figcaption');

            newImg.setAttribute('src', `img/adding${i}.jpg`);
            newCap.classList.add(`cap${i}`);

            fragment2.appendChild(newFig);
            newFig.appendChild(newImg);
            newFig.appendChild(newCap);
        }
        
        newDivForImg.appendChild(fragment2);

        // add the descriptions in <figcaption>
        document.querySelector('.cap1').innerHTML = 'Weather Journal app by using a weather api';
        document.querySelector('.cap2').innerHTML = 'Travel Planner by using apis';
        document.querySelector('.cap3').innerHTML = 'Volunteer in the Parkrun';
        document.querySelector('.cap4').innerHTML = 'Run at least once a week over 5km';
        document.querySelector('.cap5').innerHTML = 'My longest run is 18km';
        document.querySelector('.cap6').innerHTML = 'Love trail running too!';
        document.querySelector('.cap7').innerHTML = 'Registered UTA-22 (22km) next year!';

        const lastMsg = document.createElement('div');
        lastMsg.classList.add('msg');
        document.querySelector('.intro').appendChild(lastMsg);

        lastMsg.innerHTML = `<div>Check out more <a href="https://github.com/aanmeba" target="_blank">projects</a></div>`;

    }, 4000);

});






