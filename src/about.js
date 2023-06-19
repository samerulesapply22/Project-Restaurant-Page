function about(container) {
    const about = document.createElement('div');
    const aboutTitle = document.createElement('div');
    const aboutContainer = document.createElement('div');
    const aboutDescription = document.createElement('div');
    const aboutStaff = document.createElement('div');

    about.id = 'about';
    aboutTitle.id = 'aboutTitle';
    aboutContainer.id = 'aboutContainer';
    aboutDescription.id = 'aboutDescription';
    aboutStaff.id = 'aboutStaff';

    container.append(about);
    about.append(aboutTitle);
    about.append(aboutContainer);
    aboutContainer.append(aboutDescription);
    aboutContainer.append(aboutStaff);
    
    aboutTitle.textContent = 'ABOUT'
    aboutDescription.textContent = 'A waffle is a dish made from leavened batter or dough that is cooked between two plates that are patterned to give a characteristic size, shape, and surface impression. There are many variations based on the type of waffle iron and recipe used. Waffles are eaten throughout the world, particularly in Belgium, which has over a dozen regional varieties. Waffles may be made fresh or simply heated after having been commercially cooked and frozen.';
    aboutStaff.innerHTML = '<b>Robert Smith</b>  Chef Founder\r\n';
    aboutStaff.innerHTML += '<b>Simon Gallup</b>  General Manager\r\n';
    aboutStaff.innerHTML += '<b>Roger O\'Donnel</b>  Second Chef\r\n';
    aboutStaff.innerHTML += '<b>Perry Bamonte</b>  Dough Chef\r\n';
    aboutStaff.innerHTML += '<b>Reeves Gabrels</b>  Topings Manager\r\n';
    
    return about;
}

export default about;