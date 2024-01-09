import { Button as BootstrapButton } from 'react-bootstrap';

const Button = props => {
    return (
        <BootstrapButton variant="primary">
            {props.children}
        </BootstrapButton>
    );
};

export default Button;