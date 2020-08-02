import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/book.jpg" className="header-image" />
        <Grid>
          <h2>Kegiatan</h2>
          <Row>
          
            <article id="kegiatan1" class="card" >
            <Col xs={12} sm={8} className="main-section">
            <Iframe url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpringgasela.literasi%2Fposts%2F117107863416074&width=500"
              width="450px"
              height="450px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"/>
            </Col>
            </article>
            <article id="kegiatan2" class="card">
            <Col xs={12} sm={8} className="main-section">
            <Iframe url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpringgasela.literasi%2Fposts%2F111495000644027&width=500"
              width="450px"
              height="450px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"/>
            </Col>
            </article>
          </Row>
        </Grid>
        {/* 
            Website ini di buat dengan keihlasan di hati saya, semoga bermanfaat bagi kalian semua
            Project KP 2020, Universitas Hamzanwadi Fakultas Tekhnik
            Created by: Gondes
            */}  
      </div>
    )
  }
}
