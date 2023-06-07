function Stage({ stageName, acts }){
  return (
    <div className="card" style={{'margin': '20px'}}>
      <h1 className="title" style={{'marginLeft': '10px', 'paddingTop': '10px'}}>{stageName}</h1>
      {acts}
    </div>
  )
}

export default Stage