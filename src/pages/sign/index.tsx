import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
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
    InfoText,
    LoginText,
    Row,
    SubtitleLogin,
    TextBtn,
    Title,
    TitleLogin,
    Wrapper
} from './styles';

const schema = yup.object({
    email: yup.string().email('email não é válido').required('Campo obrigatório'),
    password: yup.string().min(6, 'No mínimo 6 caracteres').required('Campo obrigatório'),
  }).required();

export const Sign = () => {
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
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder='Nome completo' leftIcon={<MdPerson/>}/>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder='E-mail' leftIcon={<MdEmail/>}/>
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder='Senha' type='password' leftIcon={<MdLock />}/>
                            <Button type="submit" title='Entrar' variant='secondary' />
                        </form>
                        <Row>
                            <InfoText>
                                Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                            </InfoText>
                        </Row>
                        <Row>
                            <LoginText>Já tenho conta.</LoginText>
                            <TextBtn>Fazer login </TextBtn>
                        </Row>
                    </Wrapper>                    
                </Column>
            </Container>                
        </>
    )
}