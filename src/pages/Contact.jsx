import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="Contact" subtitle="Feel free to contact me"/>
                <div className="container">
                    <h2>Contact</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores facilis quia, nemo placeat magnam 
                        doloribus soluta veniam adipisci provident deleniti. Doloremque sequi possimus eum ratione expedita 
                        in cumque unde molestias.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores facilis quia, nemo placeat magnam 
                        doloribus soluta veniam adipisci provident deleniti. Doloremque sequi possimus eum ratione expedita 
                        in cumque unde molestias.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe molestias obcaecati ab quasi 
                        perspiciatis soluta, doloribus amet enim consequuntur consectetur, mollitia quas, quaerat tenetur 
                        reprehenderit ullam? Numquam, beatae delectus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores facilis quia, nemo placeat magnam 
                        doloribus soluta veniam adipisci provident deleniti. Doloremque sequi possimus eum ratione expedita 
                        in cumque unde molestias.</p>
                </div>
                <Footer />
            </div>
        );
    }
}


export default Contact