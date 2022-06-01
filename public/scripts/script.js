//Essa funcão está dizendo que assim que a página carregar a função updatePosts vai ser chamada
document.addEventListener("DOMContentLoaded", ()=>{
    updatePosts();
})

function updatePosts(){
    
    fetch("http://192.168.0.6:3000/api/all").then(res=>{
        return res.json()
    }).then(json=>{
        let postElements = ''
        let posts = JSON.parse(json)//Sempre esquece ein, bacana. Esse aqui é para trasformar em um objeto

        posts.forEach((post) => {

            let postElement = `
            
            <div id=${post.id} class="card mb-4">
                <div class="card-header">
                    <h5 class="card-title">${post.title}</h5>
                    <button class="btn btn-primary me-md-2" type="button" onclick="deletePost(${post.id})">Delete</button>
                </div>
                <div class="card-body">
                    <div class="card-text">${post.description}</div>
                </div>
            </div>
            `
            postElements += postElement
        })

        document.getElementById("posts").innerHTML = postElements

    })


}

function newPost(){
    
    let title = document.getElementById('title').value
    let description = document.getElementById('desc').value

    console.log(title, description)

    let post = {title, description}

    const options = {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(post)
    }

    fetch("http://192.168.0.6:3000/api/new", options).then(res=>{
        console.log(res)
        updatePosts()
        document.getElementById('title').value = ''
        document.getElementById('desc').value = ''
    })

}

function deletePost(id){
    console.log(id)

    const options = {
        method:"DELETE",
        headers: new Headers({'content-Type' : 'applicatin/json'}),
        body: JSON.stringify(id)
    }

    fetch("http://192.168.0.6:3000/api/delete", options).then((res)=>{
        console.log(res)
    })

}