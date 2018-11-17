import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <div>
        <iframe
          src="https://www.google.com/calendar/embed?src=ni67onoflatrglrj51v9ahp2f0%40group.calendar.google.com&ctz=America/Los_Angeles"
          style={{border: 0}}
          width="100%"
          height="680"
          frameborder="0"
          scrolling="no"
          title="Life Force Books Calendar"
        >
        </iframe>
      </div>
    );
  }
}

export default Calendar;