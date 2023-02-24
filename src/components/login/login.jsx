import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import './login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const login = () => {
        console.log(email, password)
        navigate('/home')
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial', marginTop: "15rem" }}
        >
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title style={{ marginLeft: "12rem" }}>Obsidian</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Label style={{ paddingRight: '.2rem' }}>Email address</Form.Label><i class="bi-envelope-at"></i>
                            <div>
                                <input id="email" className="form-control validate" value={email} onChange={handleEmail}></input>
                            </div>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <i class="bi-lock"></i>
                            <div>
                                <input id="password" className="form-control validate" value={password} onChange={handlePassword}></input></div>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <div class="modal-footer d-flex justify-content-center">
                    <Button variant="primary" onClick={login}>Login</Button>
                </div>
            </Modal.Dialog>
        </div>
    );

}

export default Login;