import styled from 'styled-components';

export const SharedSection = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &#home{
        background: #999;
    }
    &#about{
        background: #888;
    }
    &#work{
        background: #777;
    }
    &#contact{
        background: #666;
    }
`;

export const MainHeader = styled.h1`
    font-size: clamp(2rem, 8vw, 5rem);
    letter-spacing: .3rem;
    color: #f1f1f1;
    text-transform: uppercase;
`;