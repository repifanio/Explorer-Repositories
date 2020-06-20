// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, FormEvent } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import { Title, Form, Repositories, Error } from './style'
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
  const [inputError, setInputError] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const repositoriesLocalStorage = localStorage.getItem('@ExplorerRepositorios:repositorios')

    if (repositoriesLocalStorage) {
      return JSON.parse(repositoriesLocalStorage)
    } else {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('@ExplorerRepositorios:repositorios', JSON.stringify(repositories))
  }, [repositories])

  async function handlAddRepository (event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    if (!inputNewValue) {
      setInputError('Digite o autor/nome do repositório')
      return
    }

    try {
      const response = await api.get<Repository>(`repos/${inputNewValue}`)

      const repository = response.data
      setRepositories([...repositories, repository])
      setInputNewValue('')
      setInputError('')
    } catch (err) {
      setInputError('Repositório não encontrado')
    }
  }

  return (
    <>
      <img src={logoImg} alt="Logo" />
      <Title>Explore repositórios no GitHub</Title>
      <Form hasError= {!!inputError} onSubmit={handlAddRepository}>
        <input
          placeholder="Digite o nome do repositório"
          value={inputNewValue}
          onChange={e => setInputNewValue(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <Link key={repository.full_name} to={`/repository/${repository.full_name}`}>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size="20" />
          </Link>
        ))}
      </Repositories>
    </>

  )
}

export default Dashboard
