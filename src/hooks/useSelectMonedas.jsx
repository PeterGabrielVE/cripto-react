import styled from '@emotion/styled'

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
const useSelectMonedas = (label) => {
  
    const SelectMonedas = () =>(
       <>
        <Label>{label}</Label>
       </>
    )

    return [ SelectMonedas ];
}

export default useSelectMonedas
