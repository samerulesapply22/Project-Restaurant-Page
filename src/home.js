import WafflesImg from './images&fonts/waffles.jpg'

function home(container) {
    const home = document.createElement('div');
    const div2 = document.createElement('div');
    const title =  document.createElement('div');
    const ordernow = document.createElement('button');

    const waffles = new Image();
    waffles.src = WafflesImg;
    waffles.id = 'wafflesImg';
    div2.id = 'div2'
    title.id = 'title';
    ordernow.id = 'ordernow'

    container.append(home);
    home.append(waffles);
    home.append(div2);
    div2.append(title);
    div2.append(ordernow);

    title.textContent = 'Let there be brunch.';
    ordernow.textContent = 'ORDER NOW';

    return home;
}

export default home;