module.exports = {
    posts: [
        {   id:'lsdkmflksd',
            title:'Teste do Mural',
            description:'Aqui vai ter o conteúdo do mural'}
    ],

    getAll(){
        return this.posts
    },

    newPost(title, description){

        return this.posts.push({id:generateId(), title,description})
    },

    deletePost(id){
        let novoArray = []
    
        for(let i = 0; i<this.posts.length-1; i++){
            if(this.posts[i].id != id){
                novoArray.push(this.posts[i])
            }
        }
    
        console.log(novoArray)
    }
}

function generateId(){
    return Math.random().toString(36).substring(2, 9)
}