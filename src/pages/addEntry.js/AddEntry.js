import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Form, Input, Button } from "../../components/styleSignIn&SignUp";
import { Container, Title } from "../../components/styleEntry&Exit/style";

//import api from "../../services/api";
import * as api from '../../services/api'
import useAuth from '../../hooks/useAuth';

import { ThreeDots } from 'react-loader-spinner';
import Swal from 'sweetalert2'

const AddEntry = () => {
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
    
    function handleEntry (e){
        e.preventDefault();

        setIsLoading(true);
        const promise = api.addEntry(
        { ...transactionData}, auth.token
        );
        promise
        .then(() => {
            setIsLoading(false);

            navigate('/wallet');
        })
        .catch((error) => {
            setIsLoading(false);

            if (error.response.status === 422) {
                setTransactionData({
                    value: '',
                    description: '',
                });

                Swal.fire({
                    icon: "error",
                    title: "OOPS...",
                    text: 'Insira os dados corretamente, por favor 😉',
                });

                return;
            }

            if (error.response.status === 401) {
                setTransactionData({
                    value: '',
                    description: '',
                });
                navigate("/");
        
                Swal.fire({
                    icon: "error",
                    title: "OOPS...",
                    text: 'Ocorreu um erro 🥺, faça login novamente 😉 ',
                });

                return;
            }

        });
    }

    return (
        <Container>
        <Title>Nova entrada</Title>
            <Form onSubmit={handleEntry}>
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

export default AddEntry;