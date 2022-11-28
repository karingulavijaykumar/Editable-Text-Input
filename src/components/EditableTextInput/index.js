import {Component} from 'react'
import './index.css'

class EditableTextInput extends Component {
  state = {editText: '', isButtonClicked: false}

  onChangeSearchInput = event => {
    this.setState({editText: event.target.value})
  }

  onButtonClick = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {editText, isButtonClicked} = this.state
    const editSaveButton = isButtonClicked ? 'Edit' : 'Save'
    return (
      <>
        <div className="app-container">
          <div className="responsive-container">
            <h1 className="heading">Editable Text Input</h1>
            <div className="input-container">
              {isButtonClicked ? (
                <p className="edited-text">{editText}</p>
              ) : (
                <input
                  type="text"
                  onChange={this.onChangeSearchInput}
                  className="input"
                  value={editText}
                />
              )}
              <button
                type="button"
                className="button"
                onClick={this.onButtonClick}
              >
                {editSaveButton}
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default EditableTextInput
