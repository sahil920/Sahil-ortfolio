import React from "react";
import axios from "axios";
import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const AllUsers = () => {
  const [alluser, setAlluser] = useState([]);

  useEffect(() => {
    nazim();
  }, []);

  const nazim = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_API}/api/all-users`
    );
    if (result) {
      setAlluser(result.data.alluser);
    }
  };

  
  const mydelete = async (id) => {
    const tata =   await axios.delete(`${process.env.REACT_APP_API}/api/remove/${id}`);
  if(tata.data.success === true){
    alert(`${tata.name} delete successfully`)
    window.location.reload();
  }
  };
  return (
    <>
      <section id="portfolio" className="portfolio section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>All Users</h2>
          </div>
          <TableContainer>
  <Table size='sm'  variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>S.no</Th>
        <Th>Name</Th>
        <Th>Email</Th>
        <Th>Phone</Th>
        <Th>Message</Th>
        <Th>Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
      {alluser.map((value,index)=>(
      <Tr>
        <Td key={index}>{index+1}</Td>
        <Td>{value.name}</Td>
        <Td>{value.email}</Td>
        <Td>{value.phone}</Td>
        <Td>{value.message}</Td>
        <Td><Button  onClick={() => mydelete(value._id)}  className="btn btn-danger"  colorScheme='red'  size="sm"> Delete</Button></Td>
      </Tr>
      ))}
  
    </Tbody>
  </Table>
</TableContainer>
   
        </div>
      </section>
    </>
  );
};

export default AllUsers;
