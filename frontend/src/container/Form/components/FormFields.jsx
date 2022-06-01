import React, { useState } from "react";
import { api } from "../../../lib/api";

const FormField = () => {
  
  const [isSendingMsg, setIsSendingMsg] = useState(false)
  const [formItems, setFormItems] = useState({
    name:'',
    email:'',
    subject:'',
    message:''
  })

  async function handleChange(event) {
    const {name, value} = event.target;
    setFormItems(prevNote=>{
      return {
        ...prevNote,
        [name]: value
      }
    })
    

  }
  async function submitEmail(event) {
    event.preventDefault()
    setIsSendingMsg(true);
    await api.post('/emails', {
      name: formItems.name,
      email: formItems.email,
      subject: formItems.subject,
      message: formItems.message,
  })
  setIsSendingMsg(false);

  }

  return (
    <div>
     <h2>Formulário para contato:</h2>
      <form>
        <div>
          <input
            name="name"
            type='text'
            value={formItems.name}
            onChange={handleChange}
            placeholder='Nome'
          />
        </div>
        <div>
          <input
            name="email"
            type='email'
            value={formItems.email}
            onChange={handleChange}
            placeholder='E-mail'
          />
        </div>
        <div>
          <input
            name="subject"
            type='text'
            value={formItems.subject}
            onChange={handleChange}
            placeholder='Assunto'
          />
        </div>
        <div>
          <textarea
            name="message"
            className='app__form-fields-text'
            type='text'
            value={formItems.message}
            onChange={handleChange}
            placeholder='Assunto'
          ></textarea>
        </div>
        <div>
        <button
          className='app__form-fields-button'
          onClick={submitEmail}
          disabled={formItems.message.length === 0 || formItems.email.length === 0 || isSendingMsg}
        >Enviar mensagem</button>
        </div>
      </form>
      </div>
  )
}

export default FormField;
