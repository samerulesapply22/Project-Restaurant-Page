import WaffleImg from './images&fonts/waffle-menu.png'

function menu(container) {
    const menu = document.createElement('div');
    const menuTitle = document.createElement('div');
    const menuContents = document.createElement('div');
    menu.id = 'menu';
    menuTitle.id = 'menuTitle';
    menuContents.id = 'menuContents';
    container.append(menu);
    menu.append(menuTitle);
    menu.append(menuContents);
    menuTitle.textContent = 'MENU';

    const menuContent = [];
    const menuImage = [];
    const waffleTitle = [];
    const waffleDescription = [];
    const waffleOrder = [];
    for (let i = 0; i < 4; i++) {
        menuContent[i] = document.createElement('div');
        menuContent[i].className = 'menuContent';
        menuContents.append(menuContent[i]);

        menuImage[i] = new Image();
        menuImage[i].className = 'menuImage';
        menuImage[i].src = WaffleImg;
        menuContent[i].append(menuImage[i]);
        
        waffleTitle[i] = document.createElement('div');
        waffleTitle[i].className = 'waffleTitle';
        waffleTitle[i].textContent = 'WAFFLE ' + (i+1);
        menuContent[i].append(waffleTitle[i]);

        waffleDescription[i] = document.createElement('div');
        waffleDescription[i].className = 'waffleDescription';
        waffleDescription[i].textContent = 'a leavened batter or dough cooked between two hot plates of a waffle iron, patterned to give a characteristic size, shape, and grid-like surface impression'
        menuContent[i].append(waffleDescription[i]);

        waffleOrder[i] = document.createElement('button');
        waffleOrder[i].className = 'waffleOrder';
        waffleOrder[i].textContent = 'Order now';
        menuContent[i].append(waffleOrder[i]);
    }

    return menu;
}

export default menu;