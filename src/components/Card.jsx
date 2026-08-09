
const card = (props) => {
      return (
    <div className="card">
        <img src="https://images.unsplash.com/photo-1786148268017-b0d8b9b31e9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" alt="" />
      <h1>{props.user}, {props.age}</h1>
      <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="btn">View Profile</button>
    </div>
  )
}
export default card