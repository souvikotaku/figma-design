import Test1 from "../../assets/test1.png";
import Test2 from "../../assets/test2.png";
import Test3 from "../../assets/test3.png";

const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage", image: Test1 },
    "task-2": { id: "task-2", content: "Watch my favorite show", image: Test2 },
    "task-3": { id: "task-3", content: "Charge my phone", image: Test3 },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Testimonials",
      taskIds: ["task-1", "task-2", "task-3"],
    },
    // "column-2": {
    //   id: "column-2",
    //   title: "In progress",
    //   taskIds: [],
    // },
    // "column-3": {
    //   id: "column-3",
    //   title: "Done",
    //   taskIds: [],
    // },
  },
  // Facilitate reordering of the columns
  columnOrder: [
    "column-1",
    // "column-2", "column-3"
  ],
};

export default initialData;
