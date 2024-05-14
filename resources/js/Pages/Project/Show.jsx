import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants";
import { Head, Link } from "@inertiajs/react";
import TasksTable from "../Task/TasksTable";

export default function Show({ auth, project, tasks, queryParams, success }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            {`Projects "${project.name}"`}
          </h2>
          <Link
            href={route("project.edit", project.id)}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Edit
          </Link>
        </div>
      }
    >
      <Head title={`Projects "${project.name}"`} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div>
              <img
                src={project.image_path}
                alt=""
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 text-gray-900">
              <div className="grid gap-1 grid-cols-2 mt-2">
                <div>
                  <div>
                    <label htmlFor="ProjectId" className="font-bold text-lg">
                      Project ID
                    </label>
                    <p className="mt-1">{project.id}</p>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="ProjectName" className="font-bold text-lg ">
                      Project Name
                    </label>
                    <p className="mt-1">{project.name}</p>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="ProjectStatus"
                      className="font-bold text-lg "
                    >
                      Project Status
                    </label>
                    <p className="mt-1">
                      <span
                        className={
                          "px-2 py-1 rounded text-white " +
                          PROJECT_STATUS_CLASS_MAP[project.status]
                        }
                      >
                        {PROJECT_STATUS_TEXT_MAP[project.status]}
                      </span>
                    </p>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="ProjectDueDate"
                      className="font-bold text-lg"
                    >
                      Due Date
                    </label>
                    <p className="mt-1">{project.due_date}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <label
                      htmlFor="ProjectCreatedBy"
                      className="font-bold text-lg "
                    >
                      Created By
                    </label>
                    <p className="mt-1">{project.createdBy.name}</p>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="ProjectCreatedDate"
                      className="font-bold text-lg "
                    >
                      Create Date
                    </label>
                    <p className="mt-1">{project.created_at}</p>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="ProjectUpdatedBy"
                      className="font-bold text-lg "
                    >
                      Updated By
                    </label>
                    <p className="mt-1">{project.updatedBy.name}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="font-bold text-lg">Project Description</label>
                <p className="mt-1">{project.description}</p>
              </div>
              <div className="mt-2 text-center">
                <Link
                  href={route("project.index")}
                  className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-6">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <TasksTable
                tasks={tasks}
                queryParams={queryParams}
                hideProjectColumn={true}
                success={success}
              />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
