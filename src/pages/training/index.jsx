import AddWord from "../../components/addWord";
import Training from "../../components/training";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasksWords } from "@redux/data/data-operation";

const TrainingPage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.data.tasks);
  useEffect(() => {
    dispatch(tasksWords());
  }, [dispatch]);
  return (
    <>
      {tasks.tasks !== undefined && tasks.tasks.length !== 0 ? (
        <AddWord tasks={tasks.tasks} />
      ) : (
        <Training />
      )}
    </>
  );
};

export default TrainingPage;
