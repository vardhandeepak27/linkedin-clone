import React from 'react';
import styled from 'styled-components';

const Main = () => {
    return (
        <Container>
            <ShareBox>Share
                <div>
                    <img src="/images/user.svg" alt="" />
                    <button>Start a post</button>
                </div>
                <div>
                    <button><img src="/images/photo-icon.svg" alt="" /></button>
                    <span>Photo</span>
                    <button><img src="/images/video-icon.svg" alt="" /></button>
                    <span>Video</span>
                    <button><img src="/images/event-icon.svg" alt="" /></button>
                    <span>Event</span>
                    <button><img src="/images/article-icon.svg" alt="" /></button>
                    Write articles
                </div>
            </ShareBox>
        </Container>
    )
}

const Container = styled.div`
grid-area:main ;
`;

const CommunityCard = styled.div`
text-align:center ;
overflow:hidden ;
margin-bottom:8px ;
background-color:#fff ;
border-radius:5px ;
position: relative;
border:none ;
box-shadow:0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%) ;
`;

const ShareBox = styled(CommunityCard)`
display:flex ;
flex-direction:column ;
color:#958b7b ;
margin:0 0 8px ;
background:white ;
div{
    button{
        outline:none ;
        color:rgba(0,0,0,0.6);
        font-size:14px ;
        line-height:1.5 ;
        min-height:48px ;
        background:transparent ;
        border:none ;
        display:flex ;
        align-items:center ;
        font-weight:600px ;

    }
    &:first-child{
        display:flex ;
        align-items:center ;
        padding:8px 16px 0px 16px ;
        img{
            width:48px ;
            border-radius:50% ;
            margin-right:8px ;
        }
        button{
            margin:4px 0 ;
            flex-grow:1;
            border-radius:35px ;
            padding-left:16px ;
            border:1px solid rgba(0,0,0,0.15);
            background-color:white ;
            text-align:left ;
        }
    }
    &:nth-child(2){
        display:flex ;
        flex-wrap:wrap ;
        justify-content:space-around ;
        padding-bottom:4px ;

        button{
            img{
                margin:0 4px 0 -2px;
            }
            span{
                color:#70b5f9;
            }
        }
    }
}
`;


export default Main;
