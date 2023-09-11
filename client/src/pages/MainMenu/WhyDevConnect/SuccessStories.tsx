import { useParams } from "react-router-dom";
import SuccessStoriesContainer from "../../../components/MainMenuPages/WhyDevConnectPage/SuccessStoryContainer";
import StartJourney from "./StartJourney";

const SuccessStories = () => {
  const params = useParams();
  //may be changed with category id , or samething else
  const { project_category } = params;
  return (
    <div className="my-14">
      <SuccessStoriesContainer
        //?? --> (id if data will be feached in te component , or projects if projects are feached here)
        id={project_category ?? ""}
      />
      <div className="w-1/2 mx-auto">
        <StartJourney />
      </div>
    </div>
  );
};

export default SuccessStories;
