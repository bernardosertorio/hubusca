import { FormEvent } from 'react';
import { FiGlobe } from 'react-icons/fi';
import { Form } from '@unform/web';
import Input from '../Input';
import { Error, FormSearcherStyles } from './styles';


interface IRepositorySearcherProps {
  handleAddUserProfile: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  setNewInputUserLogin: React.Dispatch<React.SetStateAction<string>>; 
  inputError: string; 
  newIpuntUserLogin: string;    
}

export function FormSearcher({ 
  handleAddUserProfile, 
  inputError, 
  newIpuntUserLogin, 
  setNewInputUserLogin,
}: IRepositorySearcherProps) {

  return (
    <>
      <FormSearcherStyles>
        <Form onSubmit={handleAddUserProfile}>
        <Input 
          name="typedLogin"
          icon={FiGlobe}
          value={newIpuntUserLogin}
          onChange={(e) => setNewInputUserLogin(e.target.value)}
          placeholder="Digite o login do usuário" />
          <button type="submit">Pesquisar</button>
        </Form>

        { inputError && <Error>{inputError}</Error> }
      </FormSearcherStyles>
    </>
  );
}