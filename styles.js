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
    // background-color: darkgray;
  }

  main {
  }

  header {
    height: 50px;
    widht 100%;
    background-color: darkslategray;
    margin-bottom: 20px;
    border-bottom: 1px solid black;
  }

  button {
    padding-block:5px;
    font-weight:bold;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    padding: 10px 20px;
  }

  p {
    font-size: 0.9 em;
  }

  input {
    padding: 5px;
    border-radius: 3px;
    border: 1px solid black;
    width: 50%;
    padding: 10px 10px;
  }

  select {
    padding: 5px;
    border-radius: 3px;
    border: 1px solid black;
    padding: 10px 10px;
    font-size: 1.0em;
  }


  input {
    margin-top: 2px;
    width: 100%;
    font-size: 1.0em;
    autocomplete: off;
  }

  input::placeholder{
    font-weight:lighter;
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
    width: 100%;
    min-width: 400px;
    padding: 0;
    width: 97%;
    margin: 10px auto;
}

table thead tr {
  background-color: darkslategray;
  color: white;
  font-weight: bolder;

}

table thead tr {
  height: 55px;
  text-align: left;
}

table th {
  padding: 10px 10px;
}

table td {
  padding: 10px 10px;
  text-align: left;
  font-weight: lighter;
}



table tr {
  border-bottom: 1px solid lightgray;

}

table tr:nth-of-type(even) {
  background-color: rgb(234, 229, 229);
}

studentList {
  font-size: 0.9 em;
  cursor: pointer;
  padding-block: 10px:

}

studendList th {
  text-align: right;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 200;
}

table tr thead {
  color: white;
  text-align: left;
  font-weight: bold;
}



.modalWindow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0px;
  z-index: 1000;
}

div .modalLeft {
  width: 50%;
  height: 100%;
  background-color: white;
  padding: 20px;
  box-shadow: 1px 2px 6px;
}

div .modalRight {
  width: 50%;
  height: 100%;
  opacity: 0.7;
  background-color: white;
  filter: blur(5px);
}

.formWrapper {
  display: flex;
  flex-wrap: wrap;
}

div .formBox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(50% - 5px);
  margin-block-end: 15px;
  margin-right: 5px;
}

.closeIcon {
  float: right;
  cursor: pointer;

}



div .buttonBox {
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
  padding: 15px 30px 15px 30px;
  width: 200px;
}

.detailsButton {
  background-color: darkslategray;
  color: white;
  padding-inline: 20px;
}


`







