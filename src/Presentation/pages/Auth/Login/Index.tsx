import React, {useEffect} from "react";
import {Box, ButtonSubmit, Container, Title} from "./Style";
import {Divider, Form, Input, Tooltip, Typography} from "antd";
import Paths from "../../../../Core/Routes/RoutePaths";
import {useAuth} from "../../../../Core/Store/Auth/Contexts/AuthContext";
import {useNavigate} from "react-router-dom";

interface ILogin {
    email: string;
    password: string;
}

export const Login: React.FC = () => {
    const navigate = useNavigate();
    const {signInWithEmailAndPassword, isLoading} = useAuth();

    const onFinish = (values: ILogin) => {
        const {email, password} = values;
        signInWithEmailAndPassword(email, password).then(() => navigate(Paths.Home));
    }

    useEffect(() => {
        if(isLoading) navigate(Paths.Home);
    }, [isLoading])

    return (
        <Container>
            <Box>
                <Title>Bem vindo</Title>
                <Divider/>
                <Form
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="E-mail"
                        name="email"
                        rules={[{required: true, message: 'Por favor, insira seu e-mail'}]}
                    >
                        <Input
                            type="email"
                        />
                    </Form.Item>
                    <Form.Item
                        label="Senha"
                        name="password"
                        rules={[{required: true, message: 'Por favor, insira sua senha'}]}
                    >
                        <Input
                            type="password"
                        />
                    </Form.Item>
                    <Tooltip title="Recuperar senha">
                        <Typography.Link href={Paths.ForgotPassword}>Esqueceu a senha?</Typography.Link>
                    </Tooltip>
                    <ButtonSubmit type="primary" htmlType="submit">
                        Entrar
                    </ButtonSubmit>
                </Form>
            </Box>
        </Container>
    );
}