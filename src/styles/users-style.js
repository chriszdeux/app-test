import styled from 'styled-components';
import { devices } from '../constant/break-points';


export const UsersPage = styled.section`
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  animation-delay: 1s;
  gap: 1rem;
  article {
    /* margin: 2rem; */
  }
`

export const Card = styled.article`
  width: 30rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    outline: 1px solid lightgrey;
  }
`

export const CardImage = styled.figure`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`
export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalLayout = styled(Modal)`
  position: absolute;
  background-color: #424242;
  opacity: .7;
  z-index: -1;
`
export const ModalContent = styled.div`
  width: 90%;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  overflow-y: scroll;
`
export const PostContainer = styled.div`
  /* width: 80%; */
  padding: 1rem;
  display: grid;
  gap: 1rem;
`

export const Post = styled.div`
  /* width: 25rem; */
  min-height: 15rem;
  border-radius: .5rem;
  padding: 1rem;
  border-bottom: 1px solid lightgrey;

  @media ${  devices.tablet } {
    width: 70%;
    margin: 0 auto;
  }

  /* &:hover div {
    display: flex;
  } */

`

export const PostBody = styled.p`
  font-size: 1.4rem;
  word-spacing: 1rem;
  letter-spacing: 1px;

`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 2rem;
  /* display: none; */
  transition: .1s ease;
  button {
    margin-left: 1rem;
    width: 5rem;
    height: 3rem;
    color: white;
    border: none;
  }
`

export const CommentBox = styled.div`
  /* width: 90%; */
  min-height: 10rem;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  padding: 1rem;

`

export const Comment = styled.div` 
  width: 100%;
  border-bottom: 1px solid lightgrey;
  padding-bottom: 2rem;
`

export const InputEdit = styled.textarea`
  width: 100%;
  height: 15rem;
  padding: 1rem;
  border: 1px solid lightblue;
  resize: none;
`