import store from "./store";
import firebase from "firebase"

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD0Zplpxd9uBLc2J647mP4_BnV6paFrv3c",
    authDomain: "post-comments-e2041.firebaseapp.com",
    databaseURL: "https://post-comments-e2041.firebaseio.com",
    projectId: "post-comments-e2041",
    storageBucket: "",
    messagingSenderId: "932435090073"
  };
  firebase.initializeApp(config);

const snapshotToArray = snapshot => {
   let comments = []
   snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      let key = childSnapshot.key;
      item.id = key;
      comments.push( item );
    });
   store.setState({
      comments: comments
   })

};

export const readAllComments = () => {
   firebase.database()
         .ref('comentarios/')
         .on('value', (res) => {
            snapshotToArray(res)
         });
}

export  async function addComments (name,comment) {
    const comments = [...store.getState().comments]
   const newcomment = {
      name: name,
      comment: comment
   };

   const res = await  firebase.database().ref('comentarios/').push (newcomment);
   newcomment.id = res.key;

   const newComment= comments.concat(newcomment);
	store.setState({
		comments: newComment
	})
}

export const deleteComments = (id) => {
   firebase.database().ref('comentarios/').child(id).remove();
}