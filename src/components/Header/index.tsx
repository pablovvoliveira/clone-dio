import { Button } from "../Button";
import logo from '../../assets/logo-dio.png';
import { 
    BuscarInputContainer, 
    Container, 
    Input, 
    Menu, 
    MenuRight, 
    Row, 
    UserPicture, 
    Wrapper } from './styles';
import { IHeader } from './types';

export const Header = ({autenticado}: IHeader) => { 
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo DIO" />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                            <Input placeholder='Buscar...' />
                            </BuscarInputContainer>              
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>   
                        </>
                    ) : null}
                       
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://pbs.twimg.com/profile_images/1562257591375388672/CbFS0RNp_400x400.jpg" />
                    ) : (
                        <>
                            <MenuRight href="#">Home</MenuRight>
                            <Button title="Entrar" />
                            <Button title="Cadastrar" />
                        </>
                    )}
                    
                </Row>
            </Container>
        </Wrapper>
    )
}