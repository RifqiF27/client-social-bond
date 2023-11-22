<template>
    <div class="view login" v-if="state.username === '' || state.username === null">
        <button class="logout" @click="$router.push('/threads')"><i class="fa-solid fa-x"></i></button>
        <form class="login-form" @submit.prevent="login">
            <div class="form-inner">
                <h1>Welcome to FireChat</h1>
                <label for="username">Username</label>
                <input 
                    type="text" 
                    v-model="inputUsername" 
                    placeholder="Please enter your username..." />
                <input 
                    type="submit" 
                    value="Login" />
            </div>
        </form>
        
    </div>

    <div class="view chat" v-else>
        <header>
            <button class="logout" @click="$router.push('/threads')"><i class="fa-solid fa-x"></i></button>
            <h1>Welcome, {{ state.username }}</h1>
        </header>

        <section class="chat-box">
            <div 
                v-for="message in state.messages" 
                :key="message.key" 
                :class="(message.username == state.username ? 'message current-user' : 'message')">
                <div class="message-inner">
                    <div class="username">{{ message.username }}</div>
                    <div class="content">{{ message.content }}</div>
                </div>
            </div>
        </section>

        <footer>
            <form @submit.prevent="sendMessage">
                <input 
                    type="text" 
                    v-model="inputMessage" 
                    placeholder="Write a message..." />
                <input 
                    type="submit" 
                    value="Send" />
            </form>
        </footer>
    </div>
</template>

<script>
import db from '../db';

export default {
    data() {
        return {
            inputUsername: "",
            inputMessage: "",
            state: {
                username: "",
                messages: []
            }
        };
    },
    methods: {
        login() {
            if (this.inputUsername !== "" && this.inputUsername !== null) {
                this.state.username = this.inputUsername;
                this.inputUsername = "";
            }
        },
        logout() {
            this.state.username = "";
        },
        sendMessage() {
            const messagesRef = db.database().ref("messages");
            if (this.inputMessage === "" || this.inputMessage === null) {
                return;
            }
            const message = {
                username: this.state.username,
                content: this.inputMessage
            };
            messagesRef.push(message);
            this.inputMessage = "";
        }
    },
    mounted() {
        const messagesRef = db.database().ref("messages");
        messagesRef.on('value', snapshot => {
            const data = snapshot.val();
            let messages = [];
            for (let key in data) {
                messages.push({
                    id: key,
                    username: data[key].username,
                    content: data[key].content
                });
            }
            this.state.messages = messages;
        });
    }
};
</script>

  
  <style>
  * {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.view {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background-color: #242424ba;
}

.view.login {
    align-items: center;
}

.view.login .login-form {
    display: block;
    width: 100%;
    padding: 15px;
}

.view.login .login-form .form-inner {
    display: block;
    background-color: #FFF;
    padding: 50px 15px;
    border-radius: 16px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
    padding: 50px;

}

.form-inner{
    margin-left: 400px;
    margin-right: 400px;
}

.logout{
    position: absolute;
    top: 15px;
    right: 15px;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    color: #FFF;
    font-size: 18px;
    margin-bottom: 10px;
    text-align: right;
}

.view.login .login-form .form-inner h1 {
    color: #393939;
    font-size: 28px;
    margin-bottom: 30px;
}

.view.login .login-form .form-inner label {
    display: block;
    margin-bottom: 5px;
    color: #AAA;
    font-size: 16px;
    transition: 0.4s;
}

.view.login .login-form .form-inner input[type="text"] {
    appearance: none;
    border: none;
    outline: none;
    background: none;
    display: block;
    width: 100%;
    padding: 10px 15px;
    border-radius: 8px;
    margin-bottom: 15px;
    color: #333;
    font-size: 18px;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    background-color: #F3F3F3;
    transition: 0.4s;
}

.view.login .login-form .form-inner input[type="text"]::placeholder {
    color: #888;
    transition: 0.4s;
}

.view.login .login-form .form-inner input[type="submit"] {
    appearance: none;
    border: none;
    outline: none;
    background: none;
    display: block;
    width: 100%;
    padding: 10px 15px;
    background-color: #232222;
    border-radius: 8px;
    color: #FFF;
    font-size: 18px;
    font-weight: 700;
}

.view.login .login-form .form-inner:focus-within label {
    color: #242122;
}

.view.login .login-form .form-inner input[type="text"]:focus-within {
    background-color: #FFF;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    /* ::placeholder {
        color: #666;
        transition: 0.4s;
    } */
}

.view.chat {
    flex-direction: column;
}

.view.chat header {
    position: relative;
    display: block;
    width: 100%;
    padding: 50px 30px 10px;
}

.view.chat header .logout {
    position: absolute;
    top: 15px;
    right: 15px;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    color: #FFF;
    font-size: 18px;
    margin-bottom: 10px;
    text-align: right;
}

.view.chat header h1 {
    color: #FFF;
}

.view.chat .chat-box {
    border-radius: 24px 24px 0px 0px;
    background-color: #FFF;
    box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
    flex: 1 1 100%;
    padding: 30px;
}

.view.chat .chat-box .message {
    display: flex;
    margin-bottom: 15px;
}

.view.chat .chat-box .message .message-inner .username {
    color: #888;
    font-size: 16px;
    margin-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
}

.view.chat .chat-box .message .message-inner .content {
    display: inline-block;
    padding: 10px 20px;
    background-color: #F3F3F3;
    border-radius: 999px;
    color: #4f4f4f;
    font-size: 18px;
    line-height: 1.2em;
    text-align: left;
}

.view.chat .chat-box .message.current-user {
    margin-top: 30px;
    justify-content: flex-end;
    text-align: right;
}

.view.chat .chat-box .message.current-user .message-inner {
    max-width: 75%;
}

.view.chat .chat-box .message.current-user .message-inner .content {
    color: #FFF;
    font-weight: 600;
    background-color: #393939;
}

.view.chat footer {
    position: sticky;
    bottom: 0px;
    background-color: #FFF;
    padding: 30px;
    box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
}

.view.chat footer form {
    display: flex;
}

.view.chat footer form input[type="text"] {
    flex: 1 1 100%;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    display: block;
    width: 100%;
    padding: 10px 15px;
    border-radius: 8px 0px 0px 8px;
    color: #333;
    font-size: 18px;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    background-color: #F3F3F3;
    transition: 0.4s;
}

.view.chat footer form input[type="text"]::placeholder {
    color: #888;
    transition: 0.4s;
}

.view.chat footer form input[type="submit"] {
    appearance: none;
    border: none;
    outline: none;
    background: none;
    display: block;
    padding: 10px 15px;
    border-radius: 0px 8px 8px 0px;
    background-color: #636363;
    color: #FFF;
    font-size: 18px;
    font-weight: 700;
}


  </style>