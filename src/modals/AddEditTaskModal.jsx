import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import crossIcon from '../assets/icon-cross.svg'

function AddEditTaskModal ({type, device, setOpenAddEditTask}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [subtasks, setSubtasks] = useState([
        { title: "", isCompleted: false, id: uuidv4() },
        { title: "", isCompleted: false, id: uuidv4() },
      ]);
    


      const onChange = (id, newValue) => {
        setSubtasks((prevState) => {
          const newState = [...prevState];
          const subtask = newState.find((subtask) => subtask.id === id);
          subtask.title = newValue;
          return newState;
        });
      };

      const onDelete = (id) => {
        setSubtasks((prevState) => prevState.filter((el) => el.id !== id));
      };
    
        

  return (
    <div 
    className={device === 'mobile' ? 'py-6 px-6 pb-40 absolute overflow-y-scroll left-0 flex right-0 bottom-[-100vh] top-0 bg-[#00000080]' 
    : 'py-6 px-6 pb-40 absolute overflow-y-scroll left-0 flex right-0 bottom-0 top-0 bg-[#00000080]'}
    onClick={(e) => {
        if(e.target !== e.currentTarget) {
          return
        }
        setOpenAddEditTask(false)
    }}
    >
        {/* Modal Section */}
        <div
        className='scrollbar-hide overflow-y-scroll max-h-[95vh] my-auto bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold shadow-md shadow-[#364e7e1a] max-w-md mx-auto w-full px-8 py-8 rounded-xl'
        >
            <h3 className='text-lg'>
                {type === 'edit' ? 'Edit Task' : 'Add New Task'}
            </h3>

            {/* Task Name */}
            <div className='mt-8 flex flex-col space-y-1'>
                <label className='text-sm dark:text-white text-gray-500'>
                    Task Name
                </label>
                <input 
                className='bg-transparent px-4 py-2 outline-none focus:border-0 rounded-md text-sm border border-gray-600 focus:outline-[#635fc7] ring-0'
                type='text' value={title} onChange={(e) => setTitle(e.target.value)}
                placeholder='e.g System Design'
                >
                
                </input>
            </div>

            {/* Task Description */}
            <div className='mt-8 flex flex-col space-y-1'>
                <label className='text-sm dark:text-white text-gray-500'>
                    Description
                </label>
                <textarea 
                className='bg-transparent px-4 py-2 min-h-[200px] outline-none focus:border-0 rounded-md text-sm border border-gray-600 focus:outline-[#635fc7] ring-0'
                type='text' value={description} onChange={(e) => setDescription(e.target.value)}
                placeholder='e.g List of libraries used'
                >
                
                </textarea>
            </div>

            {/* Subtask Section */}
            <div className='mt-8 flex flex-col space-y-1'>
                <label className='text-sm dark:text-white text-gray-500'>
                    Subtasks
                </label>

                {
                     subtasks.map((subtask, index) => (
                        <div key={index} className=" flex items-center w-full ">
                          <input
                            onChange={(e) => {
                                onChange(subtask.id, e.target.value);
                            }}
                            type="text"
                            value={subtask.title}
                            className=" bg-transparent outline-none focus:border-0 flex-grow px-4 py-2 rounded-md text-sm  border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-[1px]  "
                            placeholder=" e.g Take coffee break"
                          />
                          <img
                            src={crossIcon}
                            onClick={() => {
                              onDelete(subtask.id);
                            }}
                            className=" m-4 cursor-pointer "
                          />
                        </div>
                      ))
            
            
                }
                
            </div>

        </div>
    </div>
  )
}

export default AddEditTaskModal