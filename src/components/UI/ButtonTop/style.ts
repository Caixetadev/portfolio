import styled from "styled-components";

const BtnTop = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.background_three};
  color: #fff;
  cursor: pointer;
  border: none;
  display: flex;
  opacity: 0;
  transition: all 0.4s ease;
  justify-content: center;
  align-items: center;
  outline: none;
`;

export default BtnTop;
