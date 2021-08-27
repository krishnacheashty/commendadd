const addComments=()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>addedCommends(data))
}


const addedCommends=(comments)=>{
    // console.log(comments);
    const commendField=document.getElementById('add-items');

    for(const comment of comments){
        // console.log(comment.name);
        const div=document.createElement('div');
        div.classList.add('document-field');
        const h2=document.createElement('h2');
        h2.innerText=comment.name;
        const p=document.createElement('p');
        p.innerText=comment.body;
        
        div.appendChild(h2);
        div.appendChild(p);
        commendField.appendChild(div);
    }
    


}