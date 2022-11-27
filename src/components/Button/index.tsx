import { ButtonContainer } from './styles';
import { IButton } from './types';

export const Button = ({title, variant="primary", onClick}: IButton) => {
    return (
        <>
            <ButtonContainer variant={variant} onClick={onClick}>
                {title}                
            </ButtonContainer>
        </>
    )
}