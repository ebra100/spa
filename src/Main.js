import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const imagesPath = {
    default: "https://www.w3schools.com/tags/img_girl.jpg",
    btn1: "https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634.jpg",
    btn2: "https://www.ama-assn.org/sites/ama-assn.org/files/styles/article_stub_800_x_600/public/2020-10/2020-03-16-Index-SOCIALCARE.jpg?itok=MicQSVdN"
}

class Main extends Component {


    constructor(props) {

        super(props);

        this.state = {
            imageName: "default"
        }

        this.handleClickBtn1 = this.handleClickBtn1.bind(this);
        this.handleClickBtn2 = this.handleClickBtn2.bind(this);

    }

    handleClickBtn1(e) {

        this.setState(state => ({ imageName: "btn1" }))
    }

    handleClickBtn2(e) {

        this.setState(state => ({ imageName: "btn2" }))
    }

    render() {

        let divStyle = {
            textAlign: "center",
            width: "300px",
            height: "200px",
            paddingTop: "100px",
        }

        return (

            <React.Fragment>

                <div style={divStyle}>
                    <Button variant="primary" onClick={this.handleClickBtn1}>Primary</Button>{' '}
                </div >


                <div><img src={imagesPath[this.state.imageName]} alt="boohoo" /></div>

                <div style={divStyle}>
                    <Button variant="primary" onClick={this.handleClickBtn2}>Primary</Button>{' '}
                </div >
            </React.Fragment>
        );
    }
}

export default Main;
