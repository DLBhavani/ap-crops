import './index.css'

const Page = () => (
  <div className="page-container">
    <h1 className="page-heading">Main Crops Grown in AP:-</h1>
    <div className="page-main">
      <div className="img-container">
        <h1>Rice</h1>
        <img
          src="https://media.istockphoto.com/photos/ripe-rice-field-and-sky-background-at-sunset-picture-id1151784210?k=20&m=1151784210&s=612x612&w=0&h=_3VtWZwuwYv47Zax9Q4Y5kwlaZJabTCystDjX0o4BVM="
          alt="Rice"
          className="crop-img"
        />
      </div>
      <div className="img-container">
        <h1>Chillies</h1>
        <img
          src="https://kj1bcdn.b-cdn.net/media/25049/mirch.png"
          alt="Chilli"
          className="crop-img"
        />
      </div>
      <div className="img-container">
        <h1>Cotton</h1>
        <img
          src="https://talkbusiness.net/wp-content/uploads/2020/06/CottonYields_June2020.jpg"
          alt="Chilli"
          className="crop-img"
        />
      </div>
      <div className="img-container">
        <h1>Sugarcane</h1>
        <img
          src="https://assets.thehansindia.com/hansindia-bucket/4389_23.jpg"
          alt="Chilli"
          className="crop-img"
        />
      </div>
    </div>
  </div>
)

export default Page
