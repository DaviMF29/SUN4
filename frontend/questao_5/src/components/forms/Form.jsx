import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <form className="form-container">
      <h2>Entre em Contato</h2>

      <div className="form-group">
        <label htmlFor="name">Nome Completo</label>
        <input type="text" id="name" name="name" placeholder="Seu nome completo" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" placeholder="Seu e-mail" required />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Telefone</label>
        <input type="tel" id="phone" name="phone" placeholder="Seu telefone" required />
      </div>

      <div className="form-group">
        <label htmlFor="message">Mensagem</label>
        <input
          type="text" id="message" name="message" placeholder="Escreva sua mensagem" className="message-input"
        />
      </div>


      <button type="submit" className="submit-button">Enviar</button>
    </form>
  )
}

export default Form
