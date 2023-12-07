import { useForm } from "react-hook-form";
import {
  createCommentReq,
  getAllCommentsReq
} from "../api/comment"

export const CommentForm = ({ travelId, comments }) => {
  const { register, handleSubmit } = useForm();


  const onSubmit = handleSubmit(async (data) => {
    try {
      // función de comentarios desde API
      await createCommentReq(travelId, data)
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } catch (error) {
      console.error("Error al crear el comentario", error)
    }
  })

  return (
    <>
      <div className="flex flex-col items-start pt-5 p-6">
        <span className="font-bold p-3">Comentarios:</span>
        <ul className="ml-2">
          {comments &&
            comments.map((comment) => (
              <li key={comment._id}>
                <span className="text-gray-400">{comment.user && comment.user.username}:</span>{" "}
                {comment.description}
              </li>
            ))}
        </ul>
      </div>
      <form onSubmit={onSubmit} className="bg-white rounded px-8 pb-8 mb-4">
        <div className="mb-4">
          <textarea
            {...register("description", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="3"
            placeholder="Escribe tu comentario..."
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="flex items-center h-8 px-7 font-semibold rounded-md back-color text-white my-5"
            >
            Agregar Comentario
          </button>
        </div>
      </form>
    </>
  );
};
