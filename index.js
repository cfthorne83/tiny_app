let apps = [
    'app', 'blog', 'shop', 'note', 'game', 'grave'
]

let appName = document.getElementById('app-name');
appName.innerText = apps[0];

const toggleDark = () => {
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = '#FFFFFF';
    appName.style.color = 'red';
}
const toggleLight = () => {
    document.body.style.backgroundColor = '#FFFFFF';
    document.body.style.color = '#000000';
    appName.style.color = 'red';
}

const rotateRight = () => {
    apps.push(apps.shift());
    appName.innerText = apps[0];
    apps[0] === 'grave' ? toggleDark() : null;
    return apps;
}

const rotateLeft = () => {
    apps.unshift(apps.pop());
    appName.innerText = apps[0];
    apps[0] === 'grave' ? toggleDark() : null;
    apps[0] === 'app' ? toggleLight() : null;
    return apps;
}

document.getElementById('right-button').onclick = rotateRight;
document.getElementById('left-button').onclick = rotateLeft;

// let app = document.querySelector("app");
// let blog = document.querySelector("blog");
// let shop = document.querySelector("shop");
// let note = document.querySelector("note");
// let game = document.querySelector("game");
// let grave = document.querySelector("grave");
