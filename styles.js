import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  main {
    padding: 20px;
  }

  header {
    height: 50px;
    width: 100%;
    background-color: darkslategray;
    margin-bottom: 20px;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    min-width: 900px;
  }

  button {
    font-weight: bold;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    padding: 10px 20px;
  }

  p {
    font-size: 0.9em;
  }

  input, select {
    padding: 10px;
    border-radius: 3px;
    border: 1px solid black;
    width: 100%;
    font-size: 1em;
  }

  input::placeholder {
    font-weight: lighter;
  }

  input[type="date"] {
    font-family: 'Arial', sans-serif;
    font-size: 0.9em;
  }

  label {
    font-size: 0.8em;
    font-weight: bold;
    color: darkslategray;
  }

  table {
    border-collapse: collapse;
    font-size: 0.9em;
    width: 97%;
    min-width: 400px;
    margin: 10px auto;
    table-layout: fixed;
  }

  thead {
    background-color: darkslategray;
  }

  thead tr {
    color: white;
    font-weight: bold;
    height: 55px;
    text-align: left;
  }

  th, td {
    padding: 10px;
  }

  th.id-width {
    width: 320px;
  }

  th.birthday-width {
    width: 100px;
  }


  th.sex-width {
    width: 90px;
  }

  th.email-width {
    width: 300px;
  }

  th.birthday-width {
    width: 120px;
  }

  th.number-width {
    width: 170px;
  }

  tr {
    border-bottom: 1px solid lightgray;
  }

  tr:nth-of-type(even) {
    background-color: rgb(234, 229, 229);
  }

  .modalWindow {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    z-index: 1000;
    display: flex;
  }

  .modalLeft, .modalRight {
    width: 50%;
    height: 100%;
    background-color: white;
  }

  .modalLeft {
    padding: 20px;
    box-shadow: 1px 2px 6px;
  }

  .modalRight {
    opacity: 0.7;
    filter: blur(5px);
  }

  .formWrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .formBox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(50% - 5px);
    margin-bottom: 15px;
    margin-right: 5px;
  }

  .closeIcon {
    float: right;
    cursor: pointer;
  }

  .buttonBox {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  .deleteButton {
    width: 49.5%;
    background-color: white;
    border: 1px solid red;
    color: red;
  }

  .editButton {
    width: 49.5%;
    background-color: white;
    border: 1px solid darkslategray;
  }

  .submitButton {
    width: 49.5%;
    background-color: darkslategray;
    color: white;
    border: none;
  }

  .cancelButton {
    width: 49.5%;
    background-color: white;
    border: 1px solid darkslategray;
  }

  .createButton {
    background-color: darkslategray;
    color: white;
    padding: 15px 30px;
    width: 200px;
  }

  .detailsButton {
    background-color: darkslategray;
    color: white;
    padding: 10px 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    color: white;
  }

  ul li {
    margin-bottom: 10px;
    font-size: 16px;
  }



  span {
    font-weight: bold;
    color: white;
  }
`;