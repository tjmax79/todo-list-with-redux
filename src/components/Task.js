import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../store/actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = React.useState(false);
  const [newDescription, setNewDescription] = React.useState(task.description);

  const handleEdit = () => {
    dispatch(editTask(task.id, newDescription));
    setIsEditing(false);
  };

  return (
    <div className={`task ${task.isDone ? 'done' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <span onClick={() => dispatch(toggleTask(task.id))}>
          {task.description}
        </span>
      )}
      {isEditing ? (
        <button onClick={handleEdit}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
};

export default Task;
