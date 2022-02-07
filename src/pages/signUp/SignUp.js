import { Container, Button, Form, Input, Liink, Title} from "../../components/form";

const SignUp = () => {
    return(
      <Container>
        <Title>My Wallet</Title>

        <Form onSubmit>
          <Input
            type="text"
            placeholder="Nome"
            name="name"

            required
          />
          <Input
            type="email"
            placeholder="E-mail"
            name="email"

            required
          />
          <Input
            type="password"
            placeholder="Senha"
            name="password"

            required
          />
          <Input
            type="password"
            placeholder="Confirme a senha"
            name="confirmPassword"

            required
          />

          <Button>
            Cadastrar
            
          </Button>
        </Form>

        <Liink to="/">Já tem uma conta? Entre agora!</Liink>
  </Container>
);
}

export default SignUp;