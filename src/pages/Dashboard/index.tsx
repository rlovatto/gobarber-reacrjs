import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

// FC stands for Function Component. It is used this way because the ease to define the type for the variable
// instead of this way, could be used the function Dashboard () {} sintax
const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositórios no Github</Title>

      <Form >
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEaONMx6iXN4w/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=BbgIx4B1QLCJT8tB_L7GEGVwwsKjx4gxwoJz5QlUnhs"
                alt="Robinson Lovatto"/>
          <div>
            <strong>react-repo</strong>
            <p>React repository for dev testing</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEaONMx6iXN4w/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=BbgIx4B1QLCJT8tB_L7GEGVwwsKjx4gxwoJz5QlUnhs"
                alt="Robinson Lovatto"/>
          <div>
            <strong>react-repo</strong>
            <p>React repository for dev testing</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEaONMx6iXN4w/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=BbgIx4B1QLCJT8tB_L7GEGVwwsKjx4gxwoJz5QlUnhs"
                alt="Robinson Lovatto"/>
          <div>
            <strong>react-repo</strong>
            <p>React repository for dev testing</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;
