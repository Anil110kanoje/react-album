import { Link } from "react-router-dom";

import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

import "./CSS/Album.css";

// Fetching API Data
const Albums = (props) => {
  const { albums, handleChangeAlbum } = props;

  // Delete API Call
  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        let updatedAlbums = albums.filter((album) => album.id !== id);
        alert("Album Deleted");
        handleChangeAlbum(updatedAlbums);
      });
    });
  };

  // Upadte API Call
  const mappedAlbum = albums
    .sort((a, b) => a.id - b.id)
    .map((album, index) => {
      return (
        <tr key={album.id}>
          <td className='text-center'>{index + 1}</td>
          <td className='text-center' colSpan='2'>
            {album.title}
          </td>
          <td className='text-center'>
            <Button size='lg' className='mb-4'>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={`/album/${album.id}`}
              >
                Update
              </Link>
            </Button>
            <Button
              size='lg'
              variant='danger'
              onClick={() => deleteUser(album.id)}
              className='mb-4'
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });

  // Loading
  const emptyAlbum = (
    <tr>
      <td colSpan='4' className='text-center'>
        <Spinner variant='info' animation='grow' />
      </td>
    </tr>
  );

  return (
    <div>
      <Table striped bordered hover variant='success'>
        <thead>
          <tr>
            <th className='text-center fs-4'>No.</th>
            <th className='text-center fs-4' colSpan='2'>
              Album Name
            </th>
            <th className='text-center fs-4'>Actions</th>
          </tr>
        </thead>
        <tbody>{mappedAlbum.length > 0 ? mappedAlbum : emptyAlbum}</tbody>
      </Table>
    </div>
  );
};

export default Albums;
