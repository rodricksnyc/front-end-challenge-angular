import React from "react";
import { Col, Row } from "react-bootstrap";
import { faker } from "@faker-js/faker";

function AddressCard() {

  const createUser = () => {
    return {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      streetAddress: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      phone: faker.phone.phoneNumber(),
    };
  };

  const createUsers = (numUsers = 15) => {
    return new Array(numUsers).fill(undefined).map(createUser);
  };

  let fakeUsers = createUsers(15);

  // console.log(JSON.stringify(fakeUsers));

  var people = [];
  fakeUsers.forEach(function (fakeUser, i) {
    people.push(fakeUser);
  });

  return (
    <div data-testid="check-length">
      {people.map((fakeUsers, indx) => (
        <div className="whiteBox" key={indx}>


          <Row>
            <Col sm={12} md={12}>
              <p className="name">{fakeUsers.name}</p>

              <p>
                Street
                <span className="ml-3 light">{fakeUsers.streetAddress}</span>
              </p>

              <p>
                City <span className="ml-3 light">{fakeUsers.city}</span>
              </p>

              <p>
                State <span className="ml-3 light">{fakeUsers.state}</span>
              </p>

              <p>
                Zip Code
                <span className="ml-3 light">{fakeUsers.zipCode}</span>
              </p>

              <p>
                Phone <span className="ml-3 light">{fakeUsers.phone}</span>
              </p>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}

export default AddressCard;
