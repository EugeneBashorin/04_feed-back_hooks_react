import styled from '@emotion/styled'

export const List = styled.ul`
    list-style: none;
    display: flex;
    justify-content: left;
    padding-left: 10px;
    
    li:not(:last-child){
        margin-right: 10px;
    }
`
export const Btn = styled.button`
    display: inline-block;
    background-color: white;
    padding: 8px 16px;
        
    text-alight: center;
    text-decoration: none;
    
    font-size: 16px;
    color: black;

    border: 2px solid #e7e7e7;
    border-radius: 8px;

    transition-duration: 0.4s;
    :hover{
        background-color: #e7e7e7;
    }
`