import React from 'react'
import {  Grid,  Segment } from 'semantic-ui-react'

const M = () => (
  <Segment>
    <Grid columns={3} relaxed='very'>
      <Grid.Column>
      <h1>Logo</h1>
      </Grid.Column>
      <Grid.Column>
      <h1>Jaime Paredes</h1>
      </Grid.Column>
      <Grid.Column>
            <div >
                <p style={{color: "lightblue"}}>Siguenos </p>
                <a href="https://www.facebook.com/"><i class="facebook  icon small"></i></a>
                <a href="https://twitter.com/"><i class="twitter  icon small "></i></a>
                <a href="https://www.linkedin.com/company/c"><i class="mail  icon small"></i></a>
                <a href="https://www.linkedin.com/company/c"><i class="facebook messenger  icon small "></i></a>
                <a href="https://www.linkedin.com/company/c"><i class="whatsapp square icon small"></i></a>  
              </div> 
      </Grid.Column>
    </Grid>

 
  </Segment>
)

export default M