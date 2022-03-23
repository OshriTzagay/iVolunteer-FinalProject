import { useState } from "react";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

export const Footer = () => {
  const [toggle, setToggle] = useState(false);


  return (
    <div className={`the-footer ${toggle?"active-footer":""}`}>
      {/* <button >Click</button> */}
      <ArrowCircleUpIcon className="footer-btn" onClick={()=>setToggle(!toggle)}/>
      <h1>Im Footer!</h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quis eum magni eaque officiis ullam consectetur earum ea id. Eaque magni quam voluptatibus laborum qui accusamus velit expedita iste. Itaque!
    Modi, necessitatibus distinctio eligendi soluta totam, explicabo nesciunt porro eum odit tenetur aliquid quia non ipsum laborum deleniti repellat expedita vitae ipsa? Sed vel pariatur quod dolorum ipsa molestias exercitationem.
    Tempora minus cupiditate esse iure officiis vero laboriosam nulla sint praesentium iusto, in unde totam enim, animi expedita atque deserunt, rerum ullam. Necessitatibus voluptatum quae ipsam possimus eveniet? Nesciunt, beatae.
   
    </div>
  );
};
