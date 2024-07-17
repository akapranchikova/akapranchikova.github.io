const projects = [
    {
        name: 'KULT. \n' +
            'kombucha',
        src: 'images/projects/cun_f_f.jpg',
        path: 'kult/index.html',
    },
    {
        name: 'heddernheim\n' +
            'apparel',
        src: 'images/projects/hoodie_cons2 (1).png',
        path: '',
    },
    {
        name: 'novelfan \n' +
            'book fair',
        src: 'images/projects/tickets_mockup.jpg',
        path: '',
    },
    {
        name: 'profinder app logo',
        src: 'images/projects/1_ios (1).jpg',
        path: '',
    },
    {
        name: 'comic book\n' +
            'design',
        src: 'images/projects/FINAL_1.jpg',
        path: '',
    },
    {
        name: '[gri:n] \n' +
            'brand design',
        src: 'images/projects/green_hose.jpg',
        path: '',
    },
];

const posters = [{
    src: 'images/posters/квадрат_финал_домашки_2 (1).jpg'
}, {
    src: 'images/posters/WILDFLOWER (4).jpg'
}, {
    src: 'images/posters/red agate_new (1).jpg'
}, {
    src: 'images/posters/photo_2024-07-01 20.35.37.jpeg'
}, {
    src: 'images/posters/agate_new1 (1).jpg'
}, {
    src: 'images/posters/photo_2024-07-01 20.35.35.jpeg'
},{
    src: 'images/posters/ADIDAS (1).jpg'
},{
    src: 'images/posters/NIKE.jpg'
},
];

function clickOnImages(event) {
    const div = document.createElement('div');
    console.log(event);
    const src = 'images/projects/cun_f_f.jpg'
    div.style.background = 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center';

    div.style.backgroundSize = 'contain';
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.position = 'fixed';
    div.style.zIndex = '10000';
    div.style.top = '0';
    div.style.left = '0';
    div.style.cursor = 'zoom-out';

    document.getElementById('fullscreen').append(div);

    // todo if click on image delete element

}


function addProjects() {
    const main = document.getElementById('projects')
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        const projectPicture = document.createElement('picture');
        const projectImage = document.createElement('img');
        projectImage.src = project.src;

        projectPicture.append(projectImage);

        const projectName = document.createElement('div');
        projectName.innerHTML = project.name;
        projectName.classList.add('project__name')

        const projectLink = document.createElement('a');
        projectLink.href = project.path;
        projectLink.innerHTML = 'full project';
        projectLink.classList.add('project__link')


        projectElement.append(projectName, projectPicture, projectLink);
        main.append(projectElement)
    });
}

function addPosters() {
    const postersWrap = document.getElementById('posters');
    posters.forEach(poster => {
        const posterElement = document.createElement('div');
        posterElement.classList.add('poster')
        const posterPicture = document.createElement('picture');
        const posterImage = document.createElement('img');
        posterImage.src = poster.src;

        posterPicture.append(posterImage);

        posterElement.append(posterPicture);
        postersWrap.append(posterElement)
    });
}

function init() {
    addProjects();
    addPosters();
    // setTimeout(() => {
    //     const images = document.getElementsByTagName("img");
    //     console.log(images)
    //     Array.from(images).forEach(image => {
    //         image.addEventListener('click', clickOnImages);
    //     })
    // });
}
