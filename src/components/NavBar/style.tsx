import styled from 'styled-components';

export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    width: 120px;
`;

export const Menu = styled.div<{ open: boolean; isMobile: boolean }>`
    display: flex;
    gap: 20px;

    @media (max-width: 790px) {
        position: fixed;
        top: 0;
        right: 0;

        width: 80%;
        max-width: 300px;
        height: 100vh;

        background: black;

        flex-direction: column;
        align-items: flex-start;
        gap: 20px;

        padding: 20px;

        transform: ${({ open }) =>
            open ? 'translateX(0)' : 'translateX(100%)'};

        transition: transform 0.3s ease;

        z-index: 1001;
    }
`;

export const MenuBtn = styled.button`
    display: none;
    font-size: 25px;
    cursor: pointer;
    background: none;
    border: none;

    @media (max-width: 790px) {
        display: block;
        z-index: 1002;
    }
`;

export const CloseBtn = styled.button`
    display: none;

    @media (max-width: 790px) {
        display: block;
        align-self: flex-end;
        font-size: 28px;
        background: none;
        border: none;
        color: white;
        cursor: pointer;
    }
`;

export const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;

    @media (max-width: 790px) {
        flex-direction: column;
        gap: 15px;
    }
`;

export const LinkItem = styled.a`
    color: white;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #F5B439;
        transition: all 0.3s ease;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`;