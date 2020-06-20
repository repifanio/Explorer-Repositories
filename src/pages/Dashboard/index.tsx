import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import { Title, Form, Repositories } from './style'
import logoImg from '../../assets/logo.svg'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Logo" />
      <Title>Explore repositórios no GitHub</Title>
      <Form>
        <input placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="">
          <img src="https://avatars3.githubusercontent.com/u/20359368?s=460&u=eea0bee6143391f5f92a4f911dd423a146d3b065&v=4" alt="Repifanio" />
          <div>
            <strong>Projeto React</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size="20" />
        </a>
        <a href="">
          <img src="https://avatars3.githubusercontent.com/u/20359368?s=460&u=eea0bee6143391f5f92a4f911dd423a146d3b065&v=4" alt="Repifanio" />
          <div>
            <strong>Projeto React</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size="20" />
        </a>
        <a href="">
          <img src="https://avatars3.githubusercontent.com/u/20359368?s=460&u=eea0bee6143391f5f92a4f911dd423a146d3b065&v=4" alt="Repifanio" />
          <div>
            <strong>Projeto React</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size="20" />
        </a>
        <a href="">
          <img src="https://avatars3.githubusercontent.com/u/20359368?s=460&u=eea0bee6143391f5f92a4f911dd423a146d3b065&v=4" alt="Repifanio" />
          <div>
            <strong>Projeto React</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size="20" />
        </a>
        <a href="">
          <img src="https://avatars3.githubusercontent.com/u/20359368?s=460&u=eea0bee6143391f5f92a4f911dd423a146d3b065&v=4" alt="Repifanio" />
          <div>
            <strong>Projeto React</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size="20" />
        </a>
      </Repositories>
    </>

  )
}

export default Dashboard
