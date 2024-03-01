import React from "react";
import { Component } from "react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import { numberWithCommas } from "../Utils/numberWithCommas";
import TotalBayar from "./TotalBayar";

export default class Hasil extends Component {
  render () 

  {
    const { keranjangs } = this.props; 
  return (
    <Col md={3} mt="2">
      <h5>
        <strong>Harga</strong>
      </h5>
      <hr />
      {keranjangs.length !== 0 && (
        <ListGroup variant="flush" style={{ overflowY: 'auto', maxHeight: '450px' }}>
          {keranjangs.map((menuKeranjang) => (
            <Row  key={menuKeranjang.id}>
                <Col xs={2}>
                <h4>
                <Badge pill bg='danger'>
                {menuKeranjang.jumlah}
                </Badge>
                </h4>
                </Col>
                <Col>
                <h6>{menuKeranjang.product.nama}</h6>
                <p> Rp. {numberWithCommas(menuKeranjang.product.harga)}</p>
                </Col>
                <Col>
                <p className="float-right"> Rp. {numberWithCommas(menuKeranjang.total_harga)}</p>
                </Col>
            </Row>
          ))}
        </ListGroup>
      )}
      <TotalBayar keranjangs={keranjangs} {...this.props} />
    </Col>
  );
}
}

