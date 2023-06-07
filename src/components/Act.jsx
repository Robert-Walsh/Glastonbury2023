function Act({stage, name, time, day, selected, onClick}){
  const handleClick = () => {
    onClick({name, time, stage, day})
  }

  return (
    <div onClick={handleClick} style={{'cursor': 'pointer', 'backgroundColor': selected ? '#b8e994' : '', 'margin-left': '10px'}}>
      <div style={{'fontWeight':'bold'}}>
        {name}
        <a href={`https://open.spotify.com/search/artist:${name}`} target="_blank" rel="noreferrer" style={{'position': 'absolute', 'right': '0', 'margin': '15px'}}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png" style={{'width': '40px'}} alt="spotify"/>
        </a>
      </div>
      <div>
        {time}
      </div>
      <div>

      </div>
      <hr/>
    </div>
  )
}

export default Act
