import React from 'react';

import './ChangePassword.css'
import axios from 'axios'

class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            oldPassword: "",
            newPassword: "",
            confirmNewPassword: ""
        }
        this.submit = this.submit.bind(this);
    }

    submit(event) {
        event.preventDefault();
        const config = {
            headers: {
                'token': localStorage.getItem('user'),
            }
        }
        const payload = {
            "oldPassword": this.state.oldPassword,
            "newPassword": this.state.newPassword,
            "confirmNewPassword": this.state.confirmNewPassword
        }
        axios.post('/api/private/user/changePassword', payload, config)
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    alert(response.data);
                }else if(response.status === 500){
                    alert(response.data)
                }
            })
            .catch((error) => {
                console.log(error.response)
                if (error.response.status === 400){
                    alert(error.response.data);
                } else if(error.response.status === 401){
                    alert(error.response.data)
                } else if(error.response.status === 500){
                    alert(error.response.data)
                }
            });
    }


    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <form onSubmit={(event) => this.submit(event)}>
                        <div className="form-group row">
                            <label htmlFor="oldPassword" className="col-sm-4 col-form-label">Current Password</label>
                            <div className="col-sm-8">
                                <input
                                    type="password"
                                    className="form-control"
                                    onChange={(event) => this.setState({oldPassword: event.target.value})}
                                    required={true}
                                />
                            </div>
                        </div><div className="form-group row">
                            <label htmlFor="newPassword" className="col-sm-4 col-form-label">New Password</label>
                            <div className="col-sm-8">
                                <input
                                    type="password"
                                    className="form-control"
                                    onChange={(event) => this.setState({newPassword: event.target.value})}
                                    required={true}
                                />
                            </div>
                        </div><div className="form-group row">
                            <label htmlFor="confirmNewPassword" className="col-sm-4 col-form-label">Confirm New Password</label>
                            <div className="col-sm-8">
                                <input
                                    type="password"
                                    className="form-control"
                                    onChange={(event) => this.setState({confirmNewPassword: event.target.value})}
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <button className="btn btn-primary m-auto" type={"submit"}>Change Password</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ChangePassword;
