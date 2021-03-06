import { Container, Title, Form, Input, Button, Liink } from '../../components/styleSignIn&SignUp';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import api from '../../services/api';
import * as api from '../../services/api'
import { ThreeDots } from 'react-loader-spinner';
import Swal from 'sweetalert2'
import useAuth from '../../hooks/useAuth';

const SignIn = () => {

    const [signInData, setSignInData] = useState({ email: '', password: ''});
    const [isLoading, setIsLoading] = useState(false);

    const { auth, login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth && auth.token) {
        navigate("/wallet");
        }
    }, []);

    function handleChange(e) {
        setSignInData({ ...signInData, [e.target.name]: e.target.value });
    }

    async function handleSignIn(e) {
        e.preventDefault();

        setIsLoading(true);

        try {
            const promisse = await api.signIn({ ...signInData });
            setIsLoading(false);
    
            login(promisse.data);
            navigate('/wallet');
        }
        catch (error) {
           setIsLoading(false);

            if (error.response.status === 422) {
                setSignInData({
                email: '',
                password: '',
                });

                Swal.fire({
                    icon: "error",
                    title: "OOPS...",
                    text: 'Insira os dados corretamente, por favor 😉',
                });

                return;
            }

            if (error.response.status === 401) {
                setSignInData({
                email: '',
                password: '',
                });

                Swal.fire({
                    icon: "error",
                    title: "OOPS...",
                    text: 'Email e/ou senha incorretos, insira os dados corretamente, por favor 😉',
                });

                return;
            }
        }
    }
    
    return (
        <Container>
            <Title>My Wallet</Title>

            <Form onSubmit={handleSignIn}>
                <Input
                    type='email'
                    placeholder='E-mail'
                    name='email'
                    onChange={handleChange}
                    value={signInData.email}
                    disabled={isLoading}
                    required
                />
                <Input
                    type='password'
                    placeholder='Senha'
                    name='password'
                    onChange={handleChange}
                    value={signInData.password}
                    disabled={isLoading}
                    required
                />
                <Button type='submit' disabled={isLoading}>
                {isLoading ? (
                    <ThreeDots color="#FFFFFF" height={50} width={50} />
                ) : (
                    'Entrar'
                )}
                </Button>
            </Form>


            <Liink to="/sign-up">Primeira vez? Cadastre-se</Liink>
        </Container>
    );
}

export default SignIn;