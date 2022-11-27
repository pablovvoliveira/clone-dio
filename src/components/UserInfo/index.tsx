import { Container, NameText, Progress, UserPicture } from './styles';
import { IUserInfo } from './types';

export const UserInfo = ({name, image, percentual}: IUserInfo) => {
    return (
        <Container>
            <UserPicture src={image} />
            <div>
                <NameText>{name}</NameText>
                <Progress percentual={percentual} />
            </div>
        </Container>
    )
}