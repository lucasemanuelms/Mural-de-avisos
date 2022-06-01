module.exports = {
    posts: [],

    getAll(){
        return this.posts
    },

    newPost(title, description){

        return this.posts.push({id:generateId(), title,description})
    },

    deletePost(id){

        console.log(id)

        for(let i = 0; i<this.posts.length-1; i++){    
            if(this.posts[i].id == id){
                this.posts.splice(i, 1)
            }
        }
    }
}

function generateId(){
    return Math.random().toString(36).substring(2, 9)
}