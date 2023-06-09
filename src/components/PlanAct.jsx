function PlanAct({stage, name, time, mustSee, mightSee, clash}){
  const mustSeeBox = (
    <div style={{'backgroundColor': '#b8e994', 'borderRadius': '4px', 'textAlign': 'center', 'width': '18%', 'border': 'solid 1px grey', 'fontSize': '10px', 'fontWeight': 'bold', 'marginTop': '4px', 'boxShadow': '0 8px 6px -6px black'}}>
      <div style={{'padding': '4px'}}>
        Must See
      </div>
    </div>
  )

  const mightSeeBox = (
    <div style={{'backgroundColor': '#fffa65', 'borderRadius': '4px', 'textAlign': 'center', 'width': '18%', 'border': 'solid 1px grey', 'fontSize': '10px', 'fontWeight': 'bold', 'marginTop': '4px', 'boxShadow': '0 8px 6px -6px black'}}>
      <div style={{'padding': '4px'}}>
        Might See
      </div>
    </div>
  )

  const clashBox = (
    <div style={{'backgroundColor': '#e74c3c', 'color': '#ecf0f1', 'borderRadius': '4px', 'textAlign': 'center', 'width': '18%', 'border': 'solid 1px grey', 'fontSize': '10px', 'fontWeight': 'bold', 'marginTop': '4px', 'boxShadow': '0 8px 6px -6px black'}}>
      <div style={{'padding': '4px'}}>
        Clash
      </div>
    </div>
  )

  return (
    <div>
      <div style={{'padding': '4px', 'marginLeft': '10px', 'marginTop': '0px'}}>
        <div style={{'fontWeight':'bold'}}>
          {name.toUpperCase()}
          <a href={`https://open.spotify.com/search/artist:${name}`} target="_blank" rel="noreferrer" style={{'position': 'absolute', 'right': '0', 'margin': '15px'}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png" style={{'width': '40px'}} alt="spotify"/>
          </a>
        </div>
        <div>
          {stage.toUpperCase()}
        </div>
        <div>
          {time}
        </div>
        {mustSee && mustSeeBox}
        {mightSee && mightSeeBox}
        {clash && clashBox}
       <hr/>
      </div>
      
    </div>
  )
}

export default PlanAct
