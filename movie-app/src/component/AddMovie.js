import React,{useRef} from 'react';
import classes from './AddMovie.module.css';
import Button from './Button';

function AddMovie(props) {
    const titleRef = useRef('');
    const openingTextRef = useRef('');
    const releaseDateRef = useRef('');
  
    function FormHandler(event) {
      event.preventDefault();
  
      // could add validation here...
  
      const movie = {
        title: titleRef.current.value,
        openingText: openingTextRef.current.value,
        releaseDate: releaseDateRef.current.value,
      };
  
      props.onAddMovie(movie);
    }
    



    return (
        <form onSubmit={FormHandler}>
            <div className={classes.control}>
             <label >Title</label>
             <input type="text" name="movieTitle" ref={titleRef} ></input>
            </div>
            <div className={classes.control}>
                <label>Opening Text</label>
                <textarea name='openingText' ref={openingTextRef}></textarea>
            </div>
            <div className={classes.control}>
                <label>Release Date</label>
                <input type="date" id="date" ref={releaseDateRef}></input>
            </div>
            <Button type="submit">AddMovie</Button>

        </form>

    );
}

export default AddMovie;