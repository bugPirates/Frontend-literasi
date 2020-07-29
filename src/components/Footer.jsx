import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (  
        <div class="d-flex flex-column">
            <footer>
            <figure class="sm">
                <p>Project KKP &#169; 2020, Universitas Hamzanwadi, Fakultas Tekhnik. &#8482;#stayAtHome</p>
                <a href="https://www.facebook.com/pringgasela.literasi" target="_blank"><i class="fa fa-facebook"></i></a> Pringgasela Literasi
                <a href="https://www.instagram.com/pringgaselaliterasi" target="_blank"><i class="fa fa-instagram"></i></a> pringgaselaliterasi
                <a href="#"><i class="fa fa-whatsapp"></i></a> 0812-xxxx-xxxx
            </figure>
            </footer>
        
        </div>
        )
    }
}
