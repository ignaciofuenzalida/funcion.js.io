
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    var kdiv = document.createElement('div');
    kdiv.style.width = '200px';
    kdiv.style.height = '200px';
    kdiv.style.border = 'black 1px solid'
    kdiv.style.backgroundColor = 'pink';
    document.body.appendChild (kdiv);
    } else if (event.key === 's'){ 
        var kdiv = document.createElement('div');
        kdiv.style.height = '200px';
        kdiv.style.width = '200px';
        kdiv.style.border = 'black 1px solid'
        kdiv.style.backgroundColor = 'orange';
        document.body.appendChild (kdiv);

    }else if (event.key === 'd'){
        var kdiv = document.createElement('div');
        kdiv.style.height = '200px';
        kdiv.style.width = '200px';
        kdiv.style.border = 'black 1px solid'
        kdiv.style.backgroundColor = 'skyBlue';
        document.body.appendChild (kdiv);
} })

document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
    var kdiv = document.createElement('div');
    kdiv.style.width = '200px';
    kdiv.style.height = '200px';
    kdiv.style.border = 'black 1px solid'
    kdiv.style.backgroundColor = 'purple';
    document.body.appendChild (kdiv);
    } else if (event.key === 'w'){
        var kdiv = document.createElement('div');
        kdiv.style.height = '200px';
        kdiv.style.width = '200px';
        kdiv.style.border = 'black 1px solid'
        kdiv.style.backgroundColor = 'gray';
        document.body.appendChild (kdiv);

    }else if (event.key === 'e'){
        var kdiv = document.createElement('div');
        kdiv.style.height = '200px';
        kdiv.style.width = '200px';
        kdiv.style.border = 'black 1px solid'
        kdiv.style.backgroundColor = 'brown';
        document.body.appendChild (kdiv);
} })