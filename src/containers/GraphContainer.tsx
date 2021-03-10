import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Graph from '../components/Graph';
import SmallGraph from '../components/SmallGraph';

const GraphContainer:React.FunctionComponent = () => {

  return (
    <div className='graph-container'>
      <Container>
        <h1 className="graph-title">Metrics</h1>
        <Grid className='grid' container spacing={1} justify='center'>
          <Box display='flex' width='100%' justifyContent='space-between' marginTop={5}>
            <Grid item>
              <Paper style={{height:400, width:500}}>
                <Graph className='graph'/>
              </Paper>
            </Grid>
            <Grid item>
              <Paper style={{height:400, width:500}}>
              </Paper>
            </Grid>
          </Box>
          <Box display='flex' width='100%' justifyContent='space-between' marginTop={5}>
            <Grid item>
              <Paper style={{height:200, width:500}}>
              </Paper>
            </Grid>
            <Grid item>
              <Paper style={{height:200, width:500}}>
              </Paper>
            </Grid>
          </Box>
          <Box display='flex' width='100%' justifyContent='space-between' marginTop={5}>
            <Grid item>
              <Paper style={{height:200, width:500}}><SmallGraph className='small-graph'/></Paper>
            </Grid>
            <Grid item>
              <Paper style={{height:200, width:500}}><SmallGraph className='small-graph'/></Paper>
            </Grid>
          </Box>
        </Grid>

      </Container>
    </div>
  );
};

export default GraphContainer;