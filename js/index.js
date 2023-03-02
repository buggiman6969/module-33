function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json())
    .then( data => displayUser2(data))
}
function displayUser2(data2) {
    const ul = document.getElementById('user-list')
    for(const user of data2){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
    for( const user of data2){
        console.log(user.email);
        const li = document.createElement('li');
        li.innerText = user.email
        ul.appendChild(li);
    }
}
