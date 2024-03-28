import React from 'react'
import styled from 'styled-components'

const BackgroundImage = () => {
  return (
    <BackgroundContainer>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/ed2b002b-c6c5-459c-9c97-753f50e8286b/IN-en-20230807-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="netflix-bgimg" />
    </BackgroundContainer>
  )
}



const BackgroundContainer = styled.div `
     
     height: 100vh;
     width: 100%;
     img{
       height: 100vh;
       width: 100%;
     }
`
export default BackgroundImage