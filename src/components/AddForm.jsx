import React from 'react';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: '',
    };
    this.onFormInput = this.onFormInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onFormInput(e) {
    this.setState({
      formValue: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state.formValue);
  }
  render() {
    return (
      <div>
        <form action='submit'>
          <input
            type='text'
            placeholder={`New ${this.props.name}`}
            value={this.state.formValue}
            onChange={this.onFormInput}
          />
          <button
            type='submit'
            onClick={this.onSubmit}
          >{`Add ${this.props.name}`}</button>
        </form>
      </div>
    );
  }
}

export default AddForm;
