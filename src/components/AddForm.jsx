import React from 'react';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    // TODO: add state
    // TODO: add functional binding here
  }

  onFormInput(e) {
    // TODO: write function to handle change on form input
  }

  onSubmit(e) {
    e.preventDefault();
    // TODO: write function to handle
  }

  render() {
    return (
      <div>
        <form action='submit'>
          <input
            type='text'
            placeholder={`New ${this.props.name}`}
            // TODO: set value so it can be tracked
            // TODO: add change handler
          />
          <button
            type='submit'
            // TODO: add click handler
          >{`Add ${this.props.name}`}</button>
        </form>
      </div>
    );
  }
}

export default AddForm;
