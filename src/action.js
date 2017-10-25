import store from './store'

export const createList = () =>{



}

export const addComments = () => {
   let comments = store.getState().newcomments
   
   store.setState({
      newcomments : newcomments
   })
}

export const deleteComments = () =>{
    //let comments = comments

     store.setState({
      newcomments : newcomments
   })
}