import store from "./store";

/*export const createList = () =>{

}*/
export const addComments= (name,comment)=>{
    const comments = [...store.getState().comments]
    const newComment= comments.concat( {
        name: name,
		comment: comment
	});
	store.setState({
		comments: newComment
	})
}

export const deleteComments = (index) => {
	const comments =  store.getState().comments.filter( (item, id) => id != index );
	store.setState({
		comments: comments
	})
}