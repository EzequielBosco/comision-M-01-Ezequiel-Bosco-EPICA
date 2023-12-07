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
    <div className="p-6">
      <h3 className="font-bold mb-3">Comentarios:</h3>
      <form onSubmit={onSubmit} className="rounded pb-2 mb-2 bg-gray-100">
        <div className="mb-2">
          <textarea
            {...register("description", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="3"
            placeholder="Escribe tu mensaje..."
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="flex items-center h-8 px-5 font-semibold rounded-md back-color text-white my-5"
            >
            Agregar Comentario
          </button>
        </div>
      </form>
      <div className="flex flex-col items-start pt-0">
        <ul className="pb-4">
          {comments &&
            comments.map((comment) => (
              <li key={comment._id}>
                <span className="text-gray-400">{comment.user && comment.user.username}:</span>{" "}
                {comment.description}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
