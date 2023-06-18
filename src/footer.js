import GithubImg from './images&fonts/github.png'

function footer(container) {
    const footer = document.createElement('div');
    footer.id = 'footer'
    container.append(footer);
    footer.textContent = 'Copyright © 2023 samerulesapply22'

    const github = new Image();
    github.src = GithubImg;
    github.id = 'github';
    footer.append(github)
    github.addEventListener('click', () => window.open('https://github.com/samerulesapply22', '_blank'));

    return footer;

}

export default footer;