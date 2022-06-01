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
        
        console.log(id)

        for(let post in this.posts){
            if(post.id == id){
                return post
            }
        }
        
    }
}

function generateId(){
    return Math.random().toString(36).substring(2, 9)
}