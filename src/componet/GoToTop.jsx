import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

function GoToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => { 
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const listenToScroll = () => {


        let heightToHidden = 200;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(winScroll > heightToHidden) {
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => {
            window.removeEventListener("scroll", listenToScroll);
        };
    }, [])

  return (
    <Wrapper>
        {isVisible  && (
        <div className='btn btn-light top-btn text-primary' onClick={goToBtn}><FaArrowUp /></div>
        )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
    position: fixed;
    bottom: 20px;
    right: 20px;

    .top-btn{
        height: 40px;
        width: 40px;
        cursor: pointer;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 2px 0px, rgba(14, 30, 37, 0.6) 0px 2px 10px 0px;
    
        &:hover {
            transform: scale(1.1);
            background-color: #fff;
        }
    }
`;

export default GoToTop