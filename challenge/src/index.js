
import ReactDOM from "react-dom";
import React, { useRef, useState, setState } from "react";
import { faker } from '@faker-js/faker';

import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';


import AddressCard from "./AddressCard";
import "./styles.css";



const App = () => {



    return (

    <div className="main overflow-hidden" id="overview">
    <Container fluid className="padding-0">



    <Row>
    <Col xs={12} md={12} lg={3}>
    <div className="blueBackground">
    <h1 className="white">React Challenge</h1>

    <h2 className="white">Address Book</h2>

    </div>



    </Col>

    <Col xs={12} md={12} lg={9} className="padding-0">


      <AddressCard />

    </Col>

    </Row>

    </Container>



    </div>




)

};

ReactDOM.render(<App />, document.querySelector("#root"));
