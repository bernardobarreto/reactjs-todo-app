import React from 'react';

class SubmitForm extends React.Component {
  render() {
    return (
      <form>
        <input placeholder='Task name'></input>
        <button type='submit'>Add</button>
      </form>
    )
  }
}

export default SubmitForm;