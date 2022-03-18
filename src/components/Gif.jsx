import React from "react";

const Gif = ( { id, url, selectGif } ) => {
  const handleClick = () => {
    if (selectGif) {
      selectGif({ id, url});
    }
  };

  return <img src={url} alt="gif" className="gif" onClick={handleClick}/>
}
export default Gif;