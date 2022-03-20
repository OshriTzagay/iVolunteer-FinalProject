


const PostCard = ({item})=>{
    return(<section>
        <h1>{item.FirstName} {item.LastName} </h1>
        <img src={item.ProfilePic}/>
        <p>{item.Email} </p>
        <p>{item.Skills} </p>
        <p>{item.Language} </p>
        <p>{item.Age} </p>
        <p>{item.StartHour} </p>
        <p>{item.FinishHour} </p>
        <p>{item.City} </p>
        <p>{item.Phone} </p>
        <p>{item.Description} </p>
    </section>)
}
export default PostCard;