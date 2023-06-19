function header(container) {
    const header = document.createElement('div');
    const links = document.createElement('div');
    const signin = document.createElement('div');
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const about = document.createElement('div');
    const reviews = document.createElement('div');

    header.id = 'header';
    links.id = 'links'; 
    signin.id = 'signin';
    home.className = 'links';
    menu.className = 'links';
    about.className = 'links';
    reviews.className = 'links';

    container.append(header);
    header.append(links);
    header.append(signin);
    links.append(home);
    links.append(menu);
    links.append(about);
    links.append(reviews);

    signin.textContent = 'SIGN IN';
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    about.textContent = 'About';
    reviews.textContent = 'Reviews';

    home.addEventListener('click', () => window.location = '#wafflesImg');
    menu.addEventListener('click', () => window.location = '#menu');
    about.addEventListener('click', () => window.location = '#about');
    reviews.addEventListener('click', () => window.open('https://github.com/samerulesapply22'));
    signin.addEventListener('click', () => window.open('https://github.com/samerulesapply22', '_blank'));


    return header;
}

export default header;