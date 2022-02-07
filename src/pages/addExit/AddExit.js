import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Form, Input, Button } from "../../components/styleSignIn&SignUp";
import { Container, Title } from "../../components/styleEntry&Exit/style";

import api from "../../services/api";
import useAuth from '../../hooks/useAuth';

import { ThreeDots } from 'react-loader-spinner';
import Swal from 'sweetalert2'

const AddExit = () => {
    const [transactionData, setTransactionData] = useState({
        value: '',
        description: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { auth } = useAuth();
    
    function handleChange(e) {
    setTransactionData({ ...transactionData, [e.target.name]: e.target.value });
    }
    
    function handleExit (){

    }

    return (
        <Container>
        <Title>Nova Saída</Title>
            <Form onSubmit={handleExit}>
                <Input
                    type='number'
                    placeholder='Valor'
                    name='value'
                    onChange={handleChange}
                    value={transactionData.value}
                    disabled={isLoading}
                    required
                />
                <Input
                    type='text'
                    placeholder='Descrição'
                    name='description'
                    onChange={handleChange}
                    value={transactionData.description}
                    disabled={isLoading}
                    required
                />

                <Button type='submit' disabled={isLoading}>
                {isLoading ? (
                    <ThreeDots color="#FFFFFF" height={50} width={50} />
                ) : (
                    "Salvar entrada"
                )}
                </Button>
            </Form>
        </Container>
    );
}

export default AddExit;