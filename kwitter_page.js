var firebaseConfig = {
    apiKey: "AIzaSyC96gflz37jJOXeL55D1X3ZDT6BWc1PA5c",
    authDomain: "let-s-chat-ad064.firebaseapp.com",
    databaseURL: "https://let-s-chat-ad064-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-ad064",
    storageBucket: "let-s-chat-ad064.appspot.com",
    messagingSenderId: "470688213529",
    appId: "1:470688213529:web:19af8584625399fc961888",
    measurementId: "G-97CRHZJMY0"
  };
  

  firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    user_room=localStorage.getItem("user_room");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(user_room).push({
                Name:user_name,
                Message:msg,
                Like:0
          });
          document.getElementById("msg").value="";
    }

      function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_room");
      window.location="index.html";
      

}