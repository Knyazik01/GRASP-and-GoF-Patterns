import axios from 'axios';
import { parseString } from 'xml2js';

enum Operation {
  'Add' = 'Add',
  'Divide' = 'Divide',
  'Multiply' = 'Multiply',
  'Subtract' = 'Subtract',
}

// Facade for dneonline.com
class Facade {
  private getXmlForRequest(a: number, b: number, operation: Operation) {
    return `<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <${operation} xmlns="http://tempuri.org/">
      <intA>${a}</intA>
      <intB>${b}</intB>
    </${operation}>
  </soap12:Body>
</soap12:Envelope>`;
  }

  private sendRequest(a: number, b: number, operation: Operation): Promise<number> {
    const xml = this.getXmlForRequest(a, b, operation);

    return axios('http://www.dneonline.com/calculator.asmx', {
      method: 'POST',
      data: xml,
      headers: { 'Content-Type': 'application/soap+xml; charset=utf-8' },
    }).then(({ data }) => {
      return new Promise((resolve) => {
        parseString(data, function (err, result) {
          resolve(+result['soap:Envelope']['soap:Body'][0][`${operation}Response`][0][`${operation}Result`][0]);
        });
      });
    });
  }

  add(a: number, b: number): Promise<number> {
    return this.sendRequest(a, b, Operation.Add);
  }

  divide(a: number, b: number): Promise<number> {
    return this.sendRequest(a, b, Operation.Divide);
  }

  multiply(a: number, b: number): Promise<number> {
    return this.sendRequest(a, b, Operation.Multiply);
  }

  subtract(a: number, b: number): Promise<number> {
    return this.sendRequest(a, b, Operation.Subtract);
  }
}

export default Facade;