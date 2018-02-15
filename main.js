if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(function(reg) {
        console.log('Yey!', reg);
    }).catch(function(err) {
        console.log('Boo!', err);
    });
}

//
// navigator.serviceWorker.register('sw.js')
//     .then(reg => console.log('SW registered!', reg))
//     .catch(err => console.log(err));
//
// setTimeout(() => {
//     const img = new Image();
//     img.width = 300;
//     img.src = 'img/icon.png';
//     img.style.display = 'block';
//     document.body.appendChild(img);
// }, 3000);
