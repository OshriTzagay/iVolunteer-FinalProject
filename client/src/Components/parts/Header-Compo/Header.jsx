import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="the-header">
      <h1>Im Header!</h1>
      <Link to="/">Home</Link>||
      <Link to="/volposts">Volunteers</Link>||
      <Link to="/needvol">Land-Hand</Link>||
      <Link to="/about">About?</Link>||
      <Link to="/contact">Contact?</Link>||

    </div>
  );
};
