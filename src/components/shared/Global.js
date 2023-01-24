import { createGlobalStyle } from "styled-components";
import { images } from "../../constants/images";

export const GlobalStyles = createGlobalStyle`

:root {
    --off-white: rgb(250, 249, 246);
    --translucent-black: rgba(0, 0, 0, .6) 
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    box-sizing:border-box;
    margin: 0;
    padding: 0;
    height: 100%;
}

body {
    font-family: 'Open Sans', sans-serif;
    background-image: url(${images.tools});
    background-size: cover;
    background-repeat: no-repeat;
    /* background-position: right bottom -100px; */
    background-color: black;
    height: 100%;
}

img {
    display: block;
}


`;
