import styled from "styled-components"
import {Button} from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(120deg, #1f607c, #4ea215);
`

export const Box = styled.div`
  padding: 20px;
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
`

export const Title = styled.h1`
  text-align: center;
  font-weight: 700;
`

export const ButtonSubmit = styled(Button)`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 700;
`
