import { useNavigate } from 'react-router-dom'
import { UseMainContext } from '../../context'
import axios from 'axios'
import { globalUrl } from '../../global-vars/Api-url'
import LoadingComponent from '../Status/Loading'
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
  const {
    PortfolioState,
    PortfolioDispatch,
    UserState,
    ImgState,
    setError,
    setSuccess,
  } = UseMainContext()
  const navigate = useNavigate()
  const {
    title,
    date,
    role,
    description,
    video,
    github,
    liveLink,
    technologies,
  } = PortfolioState
  const submitProject = async () => {
    if (UserState.userData.user) {
      PortfolioDispatch({ type: 'loading', payload: true })
      try {
        const res = await axios.post(
          `${globalUrl}/projects/${UserState.userData.user._id}`,
          {
            user_id: UserState.userData.user._id,
            title,
            date,
            role,
            description,
            videoLink: video,
            github,
            liveLink,
            skills_used: technologies,
            photo: ImgState.imgUrl,
          },
        )
        const data = res.data
        PortfolioDispatch({ type: 'technologies', payload: [] })

        setSuccess(data.msg)
        PortfolioDispatch({ type: 'loading', payload: false })
        navigate('/profile')
        return data
      } catch (error) {
        const err: any = error
        setError(err.response.data.msg)

        PortfolioDispatch({ type: 'loading', payload: false })
      }
    }
  }

  const goBackOrCancel = (cancelToken: string) => {
    if (cancelToken === 'cancel') {
      navigate('/profile')
    } else if (cancelToken === 'back-to-title') {
      navigate('/dev_project_add/title')
    } else if (cancelToken === 'back-to-detail') {
      navigate('/dev_project_add/details')
    }
  }

  const nextPage = (link: string, next: string) => {
    if (next === 'Submit The Project') {
      submitProject()
    }

    if (link === '/dev_project_add/title') {
      navigate('/dev_project_add/title')
    } else if (link === '/dev_project_add/details') {
      if (PortfolioState.title) {
        navigate('/dev_project_add/details')
      } else {
        PortfolioDispatch({ type: 'portfolio-error', payload: 'Input Title' })
        setTimeout(() => {
          PortfolioDispatch({
            type: 'portfolio-error',
            payload: '',
          })
        }, 3000)
      }
    } else if (link === '/dev_project_add/preview') {
      if (PortfolioState.description && PortfolioState.role) {
        navigate('/dev_project_add/preview')
      } else {
        PortfolioDispatch({
          type: 'portfolio-error',
          payload: 'Input all non optional fields',
        })
        setTimeout(() => {
          PortfolioDispatch({
            type: 'portfolio-error',
            payload: '',
          })
        }, 3000)
      }
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
        onClick={() => nextPage(link, nextbtn)}
      >
        {nextbtn}
      </button>
      <LoadingComponent loading={PortfolioState.loading} />
    </div>
  )
}

export default Portfolio_Buttons
