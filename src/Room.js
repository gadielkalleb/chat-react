import React from 'react'

const Room = (props) => {
 return (
  <div className="room">
    <div className="messages">
      <div className="message">
        <span className="author">Tulio Faria</span><br/>
        <span className="msg-body">Mensagem aqui</span>
      </div>
    </div>
    <div className="new-message-form w-form">
      <form className="form">
          <textarea id="field" name="field" maxlength="5000" placeholder="Digite sua mensagem e pressione &lt;Enter&gt;" autofocus="true" className="msg w-input"></textarea>
          <button type="button" className="send-audio w-button">Enviar<br/>Áudio</button>
      </form>
    </div>
  </div>

 )
}

export default Room