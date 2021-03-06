import styled from 'styled-components';

export const LargeContainer = styled.div`
  width: 100%;
`
export const RegularContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`
export const SmallContainer = styled.div`
  width: 60%;
  margin: 0 auto;
`

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  `

export const SubTitle = styled.h2`
  font-size: 2.5rem;
  color: #368bf9;
`
export  const Text = styled.h3`
  font-size: 1.6rem;
  color: #2f6bb5;
  margin-bottom: 1rem;
`
export const Paragrahp = styled.p`
  font-size: 1.6rem;
` 
export const SmallText = styled.p`
  font-size: 1.3rem;
` 

export const Button = styled.button`
  width: 25rem;
  height: 4rem;
  border: none;
  border-radius: .5rem;
  outline: none;
  transition: 0.2s ease-in;
  margin: 1rem;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
    opacity: .7;
  }
  &:hover {
    transform: scale(0.98);
    opacity: .9;
  }
`

export const DeleteButton = styled(Button)`
  background-color: #f27d7d;
`
export const RegularButton = styled(Button)`
  background-color: #1ac5f4;
  color: white;
  cursor: pointer;
`
export const AcceptButton = styled(Button)`
  background-color: #14e58e;
`

