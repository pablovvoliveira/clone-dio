import { MdEmail, MdLock } from 'react-icons/md';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from '../../services/api';
import { IFormData } from './types';

import { 
    Column,
    Container,
    CriarText,
    EsqueciText,
    Row,
    SubTitleLogin,
    Title,
    TitleLogin,
    Wrapper
} from './styles';

const schema = yup.object({
    email: yup.string().email('email não é válido').required('Campo obrigatório'),
    password: yup.string().min(6, 'No mínimo 6 caracteres').required('Campo obrigatório'),
  }).required();

export const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData: IFormData)=> {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length === 1) {
                navigate('/feed')
            } else {
                alert('Email ou senha inválido.')
            }
        }catch{
            alert('Houve um erro. Tente novamente.')
        }
    };    

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder='E-mail' leftIcon={<MdEmail/>}/>
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder='Senha' type='password' leftIcon={<MdLock />}/>
                            <Button type="submit" title='Entrar' variant='secondary' />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar conta</CriarText>
                        </Row>
                    </Wrapper>                    
                </Column>
            </Container>                
        </>
    )
}