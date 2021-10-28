import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import axios from "axios";

import { Modal } from "./Modal";
// import { colors } from "../style/Colors";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photoObj, setPhotoObj] = useState(null);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const URL = "https://jsonplaceholder.typicode.com";
        const res = await axios(`${URL}/photos`);
        const data = res.data.slice(0, 25);

        data.map((v) => {
          return setPhotos((state) => [...state, v]);
        });
      } catch (e) {
        console.error(e);
      }
    };
    getPhotos();
  }, []);

  const handleModal = (e, obj) => {
    e.preventDefault();
    setPhotoObj(obj);
    setIsModalOpen((state) => !state);
  };

  return (
    <Fragment>
      {isModalOpen && (
        <Modal
          obj={photoObj}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <PhotosWrapper data-style="display: flex; flex-flow: wrap">
        {photos &&
          photos.map((v, i) => (
            <Image
              data-style="flex: 1;"
              src={v.thumbnailUrl}
              alt={v.title}
              key={i}
              onClick={(e) => handleModal(e, v)}
            />
          ))}
      </PhotosWrapper>
    </Fragment>
  );
};

export default Photos;

const PhotosWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  _:-ms-fullscreen,
  :root .IE11-only-class {
    flex-basis: 20%;
  }
`;

const Image = styled.img`
  margin: 1rem;
  flex: 1 1 calc(20% - 2rem);
  cursor: pointer;
`;
