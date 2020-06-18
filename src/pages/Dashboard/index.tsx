import React from 'react'

import { Title, Form } from './style'
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
    </>
  )
}

export default Dashboard
