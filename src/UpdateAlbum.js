import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Button from "react-bootstrap/Button";

import "./CSS/UpdateAlbum.css";


export default function UpdateAlbum(props) {
  const { id } = useParams();
  const { albums, handleChangeAlbum } = props;
  let [album, setAlbum] = useState({ title: "", userId: "" });
  console.log(album);
  let [title, setTitle] = useState(album.title);
  let [userId, setUserId] = useState(album.userId);

// update the album
  useEffect(() => {
    let album = albums.find((elem) => elem.id == id);
    setAlbum(album);
    setTitle(album.title);
    setUserId(album.userId);
  }, [id, albums]);

  const updateUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        title: title,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let updatedAlbums = albums.filter((album) => {
          console.log(album);
          return album.id != id;
        });
        updatedAlbums.push(data);
        handleChangeAlbum(updatedAlbums);
        alert("Album Update");
      });
  };

  function handleChange(e) {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setUserId(e.target.value);
    }
  }

  return (
    <div>
    <p className="heading">Update Album</p>

    <div className="update">
    <br/>
      <label className="fs-4" htmlFor='title'>Title</label>
      <br/>
      <input
        className="fs-4"
        type='text'
        value={title}
        name='title'
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <br/>
      <label className="fs-4" htmlFor='title'>userId</label>
      <br/>
      <input
        className="fs-4"
        type='text'
        value={userId}
        name='userId'
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <br/>
      <Button className="fs-4" onClick={updateUser}> Submit</Button>
    </div>
    </div>
  );
}
