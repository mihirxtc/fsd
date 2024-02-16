
function Card(props) {
    return <div className="card">
        <img className="card-img" src={props.img} alt="" />
        <div className="flex">
            <h3 className="title">{props.title}</h3>
            <div className={props.type == "nonveg" ? "nonveg" : "veg"}></div>
        </div>
        <p className="price">Rs. {props.price} for 2</p>
        <p className="desc">{props.desc}</p>
    </div>
}

export default Card;