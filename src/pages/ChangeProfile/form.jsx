import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const colores = {
    error: "#bb2929",
    exito: "#1ed12d",
    borde: "#0075FF"
}

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

const Label = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const GroupInput = styled.div`
    position: relative;
    z-index: 90;
`;

const Input = styled.input `
    width: 100%;
    background: #BBBBBB;
    border-radius: 10px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;
    &:focus {
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 18px 18px 28px -1px rgba(163,163,163,0.7);
    }
`;

const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};

`;

const IconValidation = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    font-size: 16px;
    


`;

export {Formulario, Label, GroupInput, Input, LeyendaError, IconValidation};
