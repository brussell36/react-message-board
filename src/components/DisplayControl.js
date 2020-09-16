import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from './../store';
import TopicIndex from './TopicIndex';
import Topic from './Topic';
import Thread from './Thread';
import AddTopic from './AddTopic';
import EditTopic from './EditTopic';

function DisplayControl(props) 
{
  store.subscribe(() => console.log(store.getState()));
  let pageToDisplay;
  const { page, topicId, threadId } = props.display;
  switch (page) {
    case 'index':
      if (!topicId && !threadId) {
        pageToDisplay = <TopicIndex />;
      } else if (!threadId) {
        pageToDisplay = <Topic id = {topicId} />;
      } else {
        pageToDisplay = <Thread id = {threadId} />
      }
      break;
    case 'create-topic':
      pageToDisplay = <AddTopic />
      break;
    case 'edit-topic':
      pageToDisplay = <EditTopic id = {topicId} />
      break;
    default:
      pageToDisplay = <TopicIndex />;
  }
  return (
    <React.Fragment>
      {pageToDisplay}
    </React.Fragment>
  )
}

DisplayControl.propTypes = {
  display: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    display: state['display']
  }
}

export default connect(mapStateToProps)(DisplayControl);