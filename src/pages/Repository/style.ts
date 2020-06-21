import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;
        transition: color 0.2s;
    }

    svg: {
        margin-right: 4px; 
    }

    &:hover {
        color: #666;
    }
`

export const RepositoryInfo = styled.section`
    margin-top: 80px;
    align-items: center;

    img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    div {
        margin-left: 24px;
        
        strong {
            font-size: 36px;
            color: #3d3d4p;
        }

        p {
            font-size: 18px;
            color: #737380;
            margin-top: 4px;
        }
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px; 

        li {
            strong {
                display: block;
                font-size: 36px;
                color: #3d3d4d;
            }
        }

        span {
            display: block;
            margin-top: 4px;
            color: #6c6c80;
        }
    }
`
