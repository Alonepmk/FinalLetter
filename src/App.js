import React from "react";
import { Home } from "./Home";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from './background.jpg';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Page1}/>
        <Route path="/page1" component={Home}/>
      </Switch>
    </div>
    </Router>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
class Page1 extends React.Component{
  constructor(){
    super();
    this.state = {
      password : "",
    };
  }
  doCheck = ()=> {
    if(this.state.password === "12345"){
      this.props.history.push('/page1')
    }
  }
  getText = (event)=> {
    this.setState({password: event.target.value});
  }
  render(){
    const classes = useStyles;
    return(
      <div className={classes.root}>
      <Grid
  container
  spacing={3}
  direction="row"
  alignItems="center"
  justify="center"
  style={{ minHeight: '90vh'}} >
        
        
        <Grid item xs={4} style={{
    border: '5px',
    borderStyle: 'solid',
    borderColor: 'grey',
    borderRadius: '5px'}}>
          <Paper className={classes.paper}>
            <div>
              <h1>Please Login Here</h1>
              <form className={classes.root} noValidate autoComplete="off">
                  <TextField id="outlined-basic" label="Password" variant="outlined"  onChange={this.getText}/><br/><br/>
                  <Button variant="contained" color="primary" onClick={this.doCheck}> Login </Button>
</form>
              
            </div>
            <br></br>
          </Paper>
        </Grid>
        </Grid>
    </div>
    );
  }
}

export default App;
