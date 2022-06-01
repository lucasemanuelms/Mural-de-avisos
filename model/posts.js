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
        
        for(let i = 0; i < posts.length-1; i++){
            if(this.posts[i].id == id){
                this.posts.slice(i,1)
                return this.posts
            }
        }
        
    }
}

function generateId(){
    return Math.random().toString(36).substring(2, 9)
}