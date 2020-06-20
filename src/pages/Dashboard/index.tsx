import React, { useState, FormEvent } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'

import { Title, Form, Repositories } from './style'
import logoImg from '../../assets/logo.svg'

interface Repository {
  full_name: string;
  owner: {
    login: string,
    avatar_url: string
  };
  description: string;
}

const Dashboard: React.FC = () => {
  const [inputNewValue, setInputNewValue] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>([])

  async function handlAddRepository (event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()

    const response = await api.get<Repository>(`repos/${inputNewValue}`)
    const repository = response.data
    setRepositories([...repositories, repository])
    setInputNewValue('')
  }

  return (
    <>
      <img src={logoImg} alt="Logo" />
      <Title>Explore repositórios no GitHub</Title>
      <Form onSubmit={handlAddRepository}>
        <input
          placeholder="Digite o nome do repositório"
          value={inputNewValue}
          onChange={e => setInputNewValue(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="">
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size="20" />
          </a>
        ))}
      </Repositories>
    </>

  )
}

export default Dashboard
