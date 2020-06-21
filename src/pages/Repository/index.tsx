import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import { Header, RepositoryInfo } from './style'

interface RepositoryParams {
  repository:string
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()

  return (
    <>
      <Header>
        <img src={logoImg} alt="Logo da aplicação" />
        <Link to="/">
          <FiChevronLeft size={16} />
          voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <Header>
          <img src="https://blog.emania.com.br/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem.jpg" alt="Imagem do perfil" />
          <div>
            <strong>Nome do Repositório</strong>
            <p>Descrição do repositório</p>
          </div>
        </Header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>57</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
    </>
  )
}

export default Repository
