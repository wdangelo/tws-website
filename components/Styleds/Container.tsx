import styled from "styled-components"

function ContainerFree(){
  return <h1></h1>
}
export const ContainerText = styled.div`


    padding: 6rem 0;
    margin-left: 32rem;
    margin-right: 32rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    p {
      text-indent: 1.5rem;
      margin-bottom: 8px;
    }
    p + p {
      text-indent: 1.5rem ;
      margin-top: 8px;
    }


`

export const ContainerBody = styled.div`
    padding: 0 1rem;
`

export const Main = styled.main`

  min-height: 80vh;
  padding: 2rem 0;

  display: flex;
  flex-direction: column;

  align-items: center;
`


export const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
  border-color: #10214d;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
    }


`

export default { ContainerFree }