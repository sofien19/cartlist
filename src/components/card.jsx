import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';


export default function Card(props) {
  return (
    <div>
        <ListGroup as="ul">
          <ListGroup.Item as="li"    >
            <ul>
              <li>{props.fullName}</li>  
              <li>{props.mail}</li>  
              <li>{props.myPhone}</li>  
            </ul>  
          </ListGroup.Item>
       </ListGroup>
    </div>
  )
}
