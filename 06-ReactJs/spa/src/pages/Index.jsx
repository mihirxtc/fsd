import Mihir from "./man.png"

function Index() {
    return (
        <>
            <div className="profile">
                <img src={Mihir} className='user' alt="" />
            
                <div>
                    <h2>Hey i am MIHIR</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto alias at nisi, impedit quae necessitatibus corporis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam tenetur cumque minima reprehenderit dignissimos.</p>
                    <button className='btn'>Follow Me</button>
                </div>
            </div>
        </>
    )
}

export default Index;