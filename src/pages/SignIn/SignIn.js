import { Container, Title, Form, Input, Button, Liink } from "../../components/form";

const SignIn = () => {
    return (
        <Container>
            <Title>My Wallet</Title>

            <Form>
                <Input
                type="email"
                placeholder="E-mail"
                name="email"
                required
                ></Input>
                <Input
                type="password"
                placeholder="Senha"
                name="password"

                required
                ></Input>
                <Button >
                    Entrar
                </Button>
            </Form>

            <Liink to="/sign-up">Primeira vez? Cadastre-se</Liink>
        </Container>
    );
}

export default SignIn;