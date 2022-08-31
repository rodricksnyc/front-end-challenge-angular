import React from "react";
import { faker } from '@faker-js/faker';

import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';



function AddressCard(props) {

  const createUser = () => {
    return {

      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      streetAddress: faker.address.streetAddress(),
      city:  faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      phone: faker.phone.phoneNumber(),
    }


  }

  const createUsers = (numUsers = 15) => {
    return new Array(numUsers)
    .fill(undefined)
    .map(createUser);
  }

  let fakeUsers = createUsers(15)
  console.log(fakeUsers[0].name)
  console.log(fakeUsers[2].phone)


  var people = [];


  fakeUsers.forEach(function(fakeUser, i){

    people.push(

      <div className="whiteBox">

      <Row>
      <Col sm={12} md={12}>



      <p className="name">{fakeUsers[i].name}</p>

      <p>Street <span className="ml-3 light">{fakeUsers[i].streetAddress}</span></p>


      <p>City <span className="ml-3 light">{fakeUsers[i].city}</span></p>

      <p>State <span className="ml-3 light">{fakeUsers[i].state}</span></p>



      <p>Zip Code <span className="ml-3 light">{fakeUsers[i].zipCode}</span></p>

      <p>Phone <span className="ml-3 light">{fakeUsers[i].phone}</span></p>

      </Col>
      </Row>

      </div>


    )


  });




  return (
    <>

    {people}

    </>
  );




}

export default AddressCard;
