import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addComment } from '../../redux/filmComments';
import { selectCommentsForFilm } from '../../redux/selectors';

function FilmComments({ filmId }) {
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState('');

  // Переносим хук useSelector вне компонента
  const comments = useSelector(state => selectCommentsForFilm(state, filmId));

  const handleAddComment = () => {
    dispatch(addComment({ filmId, comment: { author: 'Анонимный пользователь', text: newComment } }));
    setNewComment('');
  };

  return (
    <div className="p-4 rounded">
      <h2 className="text-lg font-bold mb-4">Комментарии к фильму на сайте</h2>
      <ul className="list-disc ml-8">
        {comments.map((comment, index) => (
          <li key={index} className="mb-2">
            <strong className="font-bold">{comment.author}: </strong>
            <span>{comment.text}</span>
          </li>
        ))}
      </ul>
      <textarea
        className="w-full p-2 mt-4 text-black border border-gray-300 rounded"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Добавить комментарий"
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleAddComment}
      >
        Добавить комментарий
      </button>
    </div>
  );
}

export default FilmComments;
