import { FiThumbsUp } from 'react-icons/fi'
import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles';

export const Card = () => {
    return(
        <CardContainer>
            <ImageBackground src="https://pbs.twimg.com/profile_banners/1562252293034360832/1661306210/1500x500"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://pbs.twimg.com/profile_images/1562257591375388672/CbFS0RNp_400x400.jpg" />
                    <div>
                        <h4>Pablo Oliveira</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto bootcamp React</h4>
                    <p>Projeto feito em React para o bootcamp Orange Tech+...<strong>Saiba mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#html #css #javascript</h4>
                    <p>
                        <FiThumbsUp /> 666
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>            
    )
}