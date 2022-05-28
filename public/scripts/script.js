//Essa funcão está dizendo que assim que a página carregar a função updatePosts vai ser chamada
document.addEventListener("DOMContentLoaded", ()=>{
    updatePosts()
})

function updatePosts(){
    
    fetch("http://localhost:3000/api/all").then(res=>{
        return res.json()
    }).then(json=>{
        let postElements = ''
        let posts = JSON.parse(json)//Sempre esquece ein, bacana. Esse aqui é para trasformar em um objeto

        

    })


}

function newPost(){
    
}