import { useParams } from "react-router-dom";
import SuccessStoriesContainer from "../../../components/MainMenuPages/WhyDevConnectPage/SuccessStoryContainer";

const SuccessStories = () => {
  const params = useParams();
  //may be changed with category id , or samething else
  const { project_category } = params;
  return (
    <div className="w-[90%] lg:w-[60%] mx-auto my-20">
      <SuccessStoriesContainer
        //?? --> (id if data will be feached in te component , or projects if projects are feached here)
        id={project_category ?? ""}
      />
    </div>
  );
};

export default SuccessStories;
