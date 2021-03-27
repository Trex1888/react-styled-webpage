import {
  Container,
  Form,
  FormH1,
  FormButton,
  FormContent,
  FormInput,
  FormLabel,
  FormWrap,
  Text,
  Icon,
} from "./SignInElements";

function SignIn() {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Back to Home</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot Password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default SignIn;
