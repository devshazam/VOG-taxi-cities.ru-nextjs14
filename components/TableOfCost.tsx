"use client"

import Table from 'react-bootstrap/Table';
import { Container} from 'react-bootstrap';


export default function TableOfCost() {


  return (
    <div  className='table'>
      <Container >
      <div className="wrap-template">
      <h2 className='wrap-template__title'>Направления:</h2>
        <Table striped bordered hover align='center'>
      <thead>
        <tr>
          <th >Направление</th>
          <th>Метраж</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Москва - Петербург</td>
          <td>702 км</td>
        </tr>
        <tr>
          <td>Волгоград - Ростов</td>
          <td>472 км</td>
        </tr>
        <tr>
          <td>Москва - Волгоград</td>
          <td>972 км</td>
        </tr>
        <tr>
          <td>Волгоград - Самара</td>
          <td>811 км</td>
        </tr>
        <tr>
          <td>Волгоград - Донецк</td>
          <td>591 км</td>
        </tr>
        <tr>
          <td>Москва - Ростов</td>
          <td>1080 км</td>
        </tr>
        <tr>
          <td>Ростов - Донецк</td>
          <td>267 км</td>
        </tr>
        <tr>
          <td colSpan={2}>Работаем по всей России + новые территории!</td>
        </tr>
      </tbody>
    </Table> 
        </div>
      </Container >
    </div>
  );
}

