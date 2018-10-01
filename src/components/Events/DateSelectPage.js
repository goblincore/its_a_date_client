import React from 'react';
import moment from 'moment';
import DateList from './DateList';
import {updateNewEventState} from '../../actions/New-Event';
import './Calendar/less/calendar-time.css';
// import 'react-datepicker/dist/react-datepicker.css';
import '../styles/DateTime.css';
import { InputMoment } from './Calendar';
import {
  Box,
  Flex,
  Card,
  Button,
  Image,
  Heading,
  Text
} from 'rebass';



export default class DateSelectPage extends React.Component {

  constructor(props) {
    super(props);
      
    this.state = {
      inputMoment: moment(),
      thisTime: moment(),
      showSeconds: true,
      locale: 'en',
      size: 'small'
    };
  }
    

    handleSave = () => {
      this.props.dispatch(updateNewEventState({
        scheduleOptions: [
          ...this.props.eventState.scheduleOptions, 
          {date: this.state.inputMoment.format('llll'), votes: 0}
        ]
      }));
    };
     

  render(){
    let {inputMoment, showSeconds, locale, size} = this.state;

    console.log( (this.state.thisTime.format('llll') == this.state.inputMoment.format('llll') ? 'true' : 'false')); 
    return (
      <div className="container">
        <div className="width1100">

            <div className="card border-right">
            <h1>Some good times are </h1>
              <p>Select a date and time. You can add multiple dates and times!</p>
              <InputMoment
                moment={inputMoment}
                locale={locale}
                showSeconds={showSeconds}
                onChange={date => this.setState({inputMoment: date})}
              />
            </div>
            {/* <input
                className="output"
                type="text"
                value={inputMoment.format('llll')}
                readOnly
              /> */}

             
            <div className="card">
             <h3>Selected Date:</h3>
         
             <p className='selected-date-text'><strong>{ (this.state.inputMoment.format('llll') === this.state.thisTime.format('llll')) ? 'No time selected' : inputMoment.format('llll')}</strong></p>
             <button onClick={this.handleSave}>
                 Add this date
              </button>
            
             <h3>Added Dates:</h3>
            
             
            
              <div className="dateList">
                <DateList dateList={this.props.eventState.scheduleOptions} dispatch={this.props.dispatch}/>
              </div>
            </div>
            
        
                  
         

          
      
          
  
        
        </div>

        <button type='button' onClick={() => this.props.prevPage()}>
          {'<-'} Back
        </button>
         
        <button onClick={ () => this.props.nextPage()}>
          Next Page
        </button>
               
      </div>

            
    );
  }
   
}

