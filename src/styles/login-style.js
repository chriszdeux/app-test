import styled from 'styled-components';
import { devices } from '../constant/break-points';

export const LoginContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`
export const Form = styled.form`
  width: 35rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`

export const Input = styled.input`
  width: 25rem;
  height: 4rem;
  border-radius: .5rem;
  border: 1px solid gray;
  padding: 0 1rem;
  margin: 1rem 0;
`

export const Content = styled.div`
  text-align: center;
`

export const Label = styled.label`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  color: red;
`

export const AnimationContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  opacity: .2;  
  z-index: -1;
`

export const BoxDetail = styled.div`
  width: 50rem;
  height: 50rem;
  position: fixed;
  right: -30rem;
  bottom: -25rem;
  background-color: #2f6bb5;
  opacity: .2;
  transform: rotate(45deg);
  animation-delay: 1s;
  z-index: -1;
  @media ${  devices.laptop } {
    width: 100rem;
    height: 100rem;
    right: -50rem;
    bottom: -55rem;
  }
`

export const BoxDetailTop = styled.div`
  width: 50rem;
  height: 50rem;
  position: fixed;
  left: -30rem;
  top: -25rem;
  background-color: #2f6bb5;
  opacity: .2;
  transform: rotate(45deg);
  /* animation-delay: 1s; */
  z-index: -1;
  @media ${  devices.laptop } {
    width: 100rem;
    height: 100rem;
    left: -50rem;
    top: -55rem;
  }
`
