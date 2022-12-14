import styles from "styled-components"

export const OpenQuestion = styles.div `
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
        cursor: pointer;
    }
`

export const DivButtons = styles.div `
    display: flex;
    justify-content: space-around;

    button {
        width: 85px;
        height: 37px;
        color: #FFFFFF;
        font-size: 12px;
        font-family: 'Recursive';
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`