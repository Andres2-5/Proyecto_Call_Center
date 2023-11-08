import { css } from "lit-element";

export default css `
body {
    background: linear-gradient(to right, #22BABB, #548694); 
}

.form {
    background: linear-gradient(to right, #22BABB, #548694); 
    padding: 98px;
    border-radius: 20px;
}

.form-check-input {
    margin-right: 10px;
}

.input-group-text {
    background-color: #4B798B; 
    color: white;
}

.form-control::placeholder {
    color: #B4BEC9; 
}

.form-control {
    background-color: #4B798B; 
    color: white;
}

.btn {
    background: linear-gradient(to right, #22BABB, #548694);
    border-radius: 0 0 20px 20px;
    border: none;
}

/* Estilos para la imagen */
.image-container {
    position: relative;
}

.image-container img {
    position: relative;
    z-index: 1;
    margin-top: -8.5rem;
}
`