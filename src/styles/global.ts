import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: none;
  }
  
  * {
    -webkit-tap-highlight-color:transparent;
  }

  h1, h2, h3, h4, h5, h6, div, p, span {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }

  /* Change the white to any color */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  #__next {
    height: 100%;
    overflow: hidden;
  }

  .page-transition-wrapper {
    height: 100%;
  }

  .page-transition-container {
    overflow: hidden;
    max-width: 100%;
    width: 100%;
    height: 100%;
  }

  main {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-scrolling: touch;
    -webkit-overflow-scrolling: touch;
    margin: 0;
  }

  .layout {
    width: 100%;
    min-width: 360px;
    min-height: 600px;
    overflow: hidden;
    padding: 0;
    background: white;
    position: relative;
  }

  .content {
    padding-right: 16px;
    padding-left: 16px;
  }

  .content-scroll {
    max-height: calc(600px - (48px + 32px + 16px));
    height: calc(600px - (48px + 32px + 16px));
    overflow-y: auto;
    overflow-x: hidden;
  }

  .scroll::-webkit-scrollbar-track {
    border-radius: 15px;
    background-color: white;
  }

  .scroll::-webkit-scrollbar {
    width: 0;
  }

  .scroll:hover::-webkit-scrollbar {
    width: 6px;
    background-color: white;
  }

  .scroll::-webkit-scrollbar-thumb {
    transition: ease-in 0.3s;
  }

  .scroll:hover::-webkit-scrollbar-thumb {
    border-radius: 13px;
    background-color: ${({ theme }) => theme.colors.primary.dark};
    transition: ease-in 0.3s;
  }

  .hidden-scroll::-webkit-scrollbar-track,
  .hidden-scroll::-webkit-scrollbar {
    width: 0;
  }

  .pure-g {
    letter-spacing: inherit;
  }

  .flex-parent {
    display: flex;
    justify-content: center;
  }

  .h-100 {
    height: 100%;
  }

  .justify-end {
    justify-content: flex-end;
  }

  .overlay {
    position: inherit;
    z-index: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.12);
    opacity: 0;
    transition: all 300ms ease-in-out;
  }
  
  .overlay.show-overlay {
    position: fixed;
    z-index: 100;
    opacity: 1;
  }

  a {
    text-decoration: inherit;
  }

  .hide-blur {
    -webkit-filter: blur(4px);
    -moz-filter: blur(4px);
    -o-filter: blur(4px);
    -ms-filter: blur(4px);
    filter: blur(3px);
    opacity: 0.7;
  }

  .hide-blur:hover {
    -webkit-filter: blur(0);
    -moz-filter: blur(0);
    -o-filter: blur(0);
    -ms-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }

  @media (max-width: ${({ theme }) => theme.screens.sm.max}) {
    body.dashboard {
      padding: 0;
    }
  }

  //general

  .form {
    display: flex;
    flex-direction: column;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  .label {
    &-primary {
      font-size: 16px;
      color: black;
      font-weight: 500;
    }

    &-secondary, &-optional {
      color: ${({ theme }) => theme.colors.primary.main};
    }

    &-secondary {
      font-size: 16px;
    }

    &-optional {
      font-size: 12px;
    }
  }

  .tooltip-container {
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.13) !important;
    font-size: 14px;
    border: none !important;
    padding: 4px 8px !important;
    max-width: 200px;
    text-align: center;
    word-break: break-word;
    font-weight: normal !important;
    white-space: normal !important;
    min-width: 110px !important;
  }

  .tooltip-container[data-popper-placement*='bottom'] .tooltip-arrow::before {
    border-color: transparent transparent rgba(0, 0, 0, 0.07) transparent;
  }

  .tooltip-container[data-popper-placement*='top'] .tooltip-arrow::before {
    border-color: rgba(0, 0, 0, 0.07) transparent transparent transparent;
  }

  .tooltip-container[data-popper-placement*='right'] .tooltip-arrow::before {
    border-color: transparent rgba(0, 0, 0, 0.07) transparent transparent;
  }

  .tooltip-container[data-popper-placement*='left'] .tooltip-arrow::before {
    border-color: transparent transparent transparent rgba(0, 0, 0, 0.07);
  }

  .tooltip-arrow[data-placement*='top'] {
    height: 0.3rem;
    margin-bottom: -0.3rem;
  }

  .error {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.error.main};
    margin: 0;
  }

  .error-box {
    color: ${({ theme }) => theme.colors.error.main};
    padding: 8px 12px 8px 14px;
    font-size: 14px;
    line-height: 1.43;
    //border: 1px solid @Linen;
    //background-color: @Chablis;
  }

  button:disabled {
    cursor: not-allowed;
  }

  .ReactModal__Content {
    opacity: 0;
    transform: translatey(-50px);
    transition: all 300ms ease-in-out;

    &--after-open {
      opacity: 1;
      transform: translateX(0px);
    }

    &--before-close {
      opacity: 0;
      transform: translatey(-50px);
    }
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: all 300ms ease-in-out;

    &--after-open {
      opacity: 1;
    }

    &--before-close {
      opacity: 0;
    }
  }

  .tippy-svg-arrow{
    fill: white;
  }

  .slick-track {
    //background-color: lightblue;
    min-height: 100vh;
    position: relative;
  }

  .opening-animation{
    /* width: 130px;
    height: 130px; */
    animation: logoAnimation 1s;
    animation-delay: 0.8s;
    animation-timing-function:ease-in-out;
  }

  @keyframes logoAnimation {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    35% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(100) translate(0, -30px);
      opacity: 0;
    }
  }

  .fade-in {
    animation: fadeIn 0.5s;
    -webkit-animation: fadeIn 0.5s;
    -moz-animation: fadeIn 0.5s;
    -o-animation: fadeIn 0.5s;
    -ms-animation: fadeIn 0.5s;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @-moz-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @-webkit-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @-o-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @-ms-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

export default GlobalStyle;
