import React from 'react'
import './Cards.css'

const Cards = () => {
  return (
    <div className="Container">
      <div className="Title">
      <h2>Planos e Preços:</h2><div/>
      </div>
      <div className='Cards'>
          <div className="Card">
            <div className="img"></div>
            <h2>Plano Básico</h2>
            <h3>R$19,90/mês</h3>
            <p>Acompanhamento de até 2 processos</p>
            <p>Atualizações semanais</p>
            <p>Acesso básico aos documentos</p>
            <div className="Button"><button>Contratar</button></div>
          </div>
          <div className="Card">
          <div className="img"></div>
            <h2>Plano Premium</h2>
            <h3>R$49,90/mês</h3>
            <p>Acompanhamento de até 5 processos</p>
            <p>Atualizações diárias</p>
            <p>Acesso completo aos documentos e histórico do processo</p>
            <div className="Button"><button>Contratar</button></div>
          </div>
          <div className="Card">
          <div className="img"></div>
            <h2>Plano Empresarial</h2>
            <h3>R$99,90/mês</h3>
            <p>Acompanhamento ilimitado de processos</p>
            <p>Atualizações em tempo real</p>
            <p>Suporte exclusivo 24h</p>
            <p>Relatórios detalhados personalizados</p>
            <div className="Button"><button>Contratar</button></div>
          </div>
      </div>
    </div>
  )
}

export default Cards