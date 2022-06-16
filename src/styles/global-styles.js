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
  border: 1px solid gray;
  border-radius: .5rem;
  outline: none;
`

export const DeleteButton = styled(Button)`
  background-color: red;
`
export const RegularButton = styled(Button)`
  background-color: lightblue;
`
export const AcceptButton = styled(Button)`
  background-color: #14e58e;
`