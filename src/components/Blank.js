import React, { useEffect, useState } from "react";
import classes from "./Blank.module.css";
import Second from "./Second";
import Search from "./Search";

const Blank = () => {
  const [movie, setMovie] = useState("");
  const [director, setDirector] = useState("");
  const [rating, setRating] = useState("");
  const [validMovie, setValidMovie] = useState(true);
  const [validDirector, setValidDirector] = useState(true);
  const [validRating, setValidRating] = useState(true);
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(true);
  const [isEdit, setIsEdit] = useState(null);

  let filterMovies = list;
  // console.log(filterMovies);

  const deletePostHandler = (id) => {
    filterMovies = list.filter((item) => item.id !== id);
    setList(filterMovies);
  };

  const editPostHandler = (id) => {
    filterMovies = list.find((elem) => {
      return elem.id === id;
    });
    console.log(filterMovies);
    setEdit(false);
    setMovie(filterMovies.Mov);
    setDirector(filterMovies.dir);
    setRating(filterMovies.rat);
    setIsEdit(id);
  };

  const addHandler = () => {
    // e.preventDefault();
    if (movie && director && rating && !edit) {
      setList(
        list.map((elem) => {
          if (elem.id === isEdit) {
            return {
              ...elem,
              Mov: movie,
              dir: director,
              rat: rating,
            };
          }
          return elem;
        })
      );
      setEdit(true);
      setMovie("");
      setDirector("");
      setRating("");
      setIsEdit(null);
    } else {
      setList((prevList) => {
        return [
          ...prevList,
          {
            Mov: movie,
            dir: director,
            rat: rating,
            id: Math.random().toString(),
          },
        ];
      });

      if (movie === "") {
        setValidMovie(false);
        return;
      }
      setValidMovie(true);

      if (director === "") {
        setValidDirector(false);
        return;
      }
      setValidDirector(true);
      if (rating === "" || rating > 10 || rating < 0) {
        setValidRating(false);
        return;
      }
      setValidRating(true);
      setMovie("");
      setDirector("");
      setRating("");
    }
  };

  return (
    <>
    <Search data={list}></Search>
      <div className={classes.input}>
        <div>
          <label htmlFor="movie">Movie Name</label>
          <input
            type="text"
            onChange={(e) => setMovie(e.target.value)}
            value={movie}
            style={{ background: !validMovie ? "red" : "transparent" }}
          />
          {!validMovie && <p>Please enter a valid movie</p>}
        </div>
        <div>
          <label htmlFor="director">Director Name</label>
          <input
            type="text"
            onChange={(e) => setDirector(e.target.value)}
            value={director}
            style={{ background: !validDirector ? "red" : "transparent" }}
          />
          {!validDirector && <p>Please enter a valid Director</p>}
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
            style={{ background: !validRating ? "red" : "transparent" }}
          />
          {!validRating && <p>Please enter rating between 0 and 10</p>}
        </div>
        <div>
          {edit ? (
            <button onClick={addHandler}>Add</button>
          ) : (
            <button onClick={addHandler}>Edit</button>
          )}
        </div>
      </div>
      <Second
        first={filterMovies}
        deletePostHandler={deletePostHandler}
        editPostHandler={editPostHandler}
      ></Second>
    </>
  );
};

export default Blank;
