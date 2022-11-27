import { Header } from '../../components/Header';
import { Container, Column, Title, TitleHighlight } from './styles';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

export const Feed = () => {
    return (
        <>
            <Header autenticado={true} />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight># Ranking 5 top da semana</TitleHighlight>
                    <UserInfo percentual={95} name="Pablo" image={`https://pbs.twimg.com/profile_images/1562257591375388672/CbFS0RNp_400x400.jpg`} />
                    <UserInfo percentual={87} name="Pablo" image={`https://pbs.twimg.com/profile_images/1562257591375388672/CbFS0RNp_400x400.jpg`} />
                    <UserInfo percentual={73} name="Pablo" image={`https://pbs.twimg.com/profile_images/1562257591375388672/CbFS0RNp_400x400.jpg`} />
                    <UserInfo percentual={64} name="Pablo" image={`https://pbs.twimg.com/profile_images/1562257591375388672/CbFS0RNp_400x400.jpg`} />
                    <UserInfo percentual={55} name="Pablo" image={`https://pbs.twimg.com/profile_images/1562257591375388672/CbFS0RNp_400x400.jpg`} />
                </Column>
                
                
            </Container>                
        </>
    )
}