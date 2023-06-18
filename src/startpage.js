import disintergationImg from './images&fonts/disintergation.jpeg';
import headonthedoorImg from './images&fonts/the head on the door.jpeg';

function startPage(container) {

    const container1 = document.createElement('div');
    const div1 = document.createElement('div');
    const title = document.createElement('div');
    const imageholder1 = document.createElement('div');
    const imageholder2 = document.createElement('div');

    const disintergation = new Image();
    disintergation.src = disintergationImg;
    const headonthedoor = new Image();
    headonthedoor.src = headonthedoorImg;
    
    container.append(container1);
    container1.append(div1);
    div1.append(title);
    div1.append (imageholder1);
    container1.append(imageholder2);
    imageholder1.append(headonthedoor);
    imageholder2.append(disintergation);

    container1.id = 'container1';
    div1.id = 'div1'
    title.id = 'title';
    imageholder1.id =  'imageholder1';
    imageholder2.id = 'imageholder2';

    title.textContent = 'THE CURE';
    return container1;
}

export default startPage;