import { useNavigate } from 'react-router-dom'

const Portfolio_Buttons = ({
  nextbtn,
  backbtn,
  link,
  cancelToken,
}: {
  nextbtn: string
  backbtn: string
  link: string
  cancelToken: string
}) => {
  const navigate = useNavigate()

  const goBackOrCancel = (cancelToken: string) => {
    if (cancelToken === 'cancel') {
      navigate('/profile')
    } else if (cancelToken === 'back-to-title') {
      navigate('/dev_project_add/title')
    } else if (cancelToken === 'back-to-detail') {
      navigate('/dev_project_add/details')
    }
  }

  return (
    <div className="w-full py-2  flex items-center justify-between ">
      <button
        onClick={() => goBackOrCancel(cancelToken)}
        className="outline outline-2 outline-red-500 text-center rounded-[20px] p-2 px-8 "
      >
        {backbtn}
      </button>
      <button
        className="  rounded-[20px] p-2 px-8 bg-red-600 text-white "
        onClick={() => navigate(link)}
      >
        {nextbtn}
      </button>
    </div>
  )
}

export default Portfolio_Buttons
