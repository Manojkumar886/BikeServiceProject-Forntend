import { Container, Nav, Navbar } from "react-bootstrap"
import TwoWheelerSharpIcon from '@mui/icons-material/TwoWheelerSharp';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"



export const Homepage=()=>{
    return(
        <>
            <Navbar bg="primary" expand="lg">
                <Container>
                    
                    <Navbar.Brand href="/" className="">Zealous BikeService<TwoWheelerSharpIcon className="ms-2" ></TwoWheelerSharpIcon></Navbar.Brand>
                    <Navbar.Toggle aria-controls="manoj" />
                    <Navbar.Collapse id="manoj">
                        <Nav className="ms-3">   
                            <Nav.Link href="/create">New<HowToRegIcon></HowToRegIcon></Nav.Link>
                            <Nav.Link href="/update">Update<TipsAndUpdatesIcon></TipsAndUpdatesIcon></Nav.Link>
                            <Nav.Link href="/read">Read<MarkUnreadChatAltIcon></MarkUnreadChatAltIcon></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
