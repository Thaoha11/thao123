import React, { Component } from 'react';
import './login.css'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pass: '',
            error_email: "",
            error_pass: "",
            formError: {}
        }
        this.thaydoi = this.thaydoi.bind(this)
        this.thaydoiPass = this.thaydoiPass.bind(this)
        this.submitForm = this.submitForm.bind(this)

    }
    thaydoi(e) {
        this.setState({
            email: e.target.value
        })
    }

    thaydoiPass(e) {
        this.setState({
            pass: e.target.value
        })
    }
    submitForm(e) {
        e.preventDefault();
        let getEmail = this.state.email;
        let getPass = this.state.pass;
        let flag = true;
        if (getEmail == '') {
            flag = false;
            this.setState({
                error_email: "Email required."
            })
        }
        else if (getEmail != 'Admin') {
            flag = false;
            this.setState({
                error_email: "Email required."
            })
        }
        else {
            this.setState({
                error_email: ""
            })
        }

        if (getPass == '') {
            flag = false;
            this.setState({
                error_pass: "Pass required."
            })

        }
        else if (getPass != '123456') {
            flag = false;
            this.setState({
                error_pass: "Pass required."
            })

        }
        else {
            this.setState({
                error_pass: ""
            })
        }


        if (flag) {

            const convert = JSON.stringify(flag);
            localStorage.setItem("info", convert);
            console.log(convert);
            localStorage.setItem("isLogin", JSON.stringify(true))
            this.props.history.push('/');

        }
    }



    render() {
        return (
            <div className='login'>
                <h1 className='td'>LOGIN</h1>

                <form onSubmit={this.submitForm} action='./home'>
                    <div className='form-group'>
                        <label for='email' className='email' > Email</label>
                        <input id='email' type='text' name="email" value={this.state.email} onChange={this.thaydoi} />
                        <p className='note'>{this.state.error_email}</p>
                        <label for='password' className='pass' > Password</label>
                        <input id='password' type='password' name="pass" value={this.state.pass} onChange={this.thaydoiPass} />
                        <p className='note'>{this.state.error_pass}</p>
                    </div>
                    <button type='submit' className='btn' >
                        Login</button>
                </form>
            </div>
        )


    }
}
export default Login;