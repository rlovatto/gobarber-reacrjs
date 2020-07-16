import React from 'react';
import {  Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  // const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer"/>
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEaONMx6iXN4w/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=BbgIx4B1QLCJT8tB_L7GEGVwwsKjx4gxwoJz5QlUnhs" alt="rocketseat"/>
          <div>
            <strong>rockeatseat</strong>
            <p>descrição do repo</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues</span>
          </li>
        </ul>

      </RepositoryInfo>

      <Issues>
        <Link  to={`qwqwwqw`}>
          <div>
            <strong>231312313</strong>
            <p>dsdfsfsfsf</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
}

export default Repository;
