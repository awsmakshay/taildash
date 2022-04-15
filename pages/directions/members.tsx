import { MagnifyingGlass } from "phosphor-react";
import { ReactElement, useMemo } from "react";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import Table from "../../components/Table";
import membersData from "../../data/members.json";

const Members = () => {
  const data = useMemo(() => membersData, []);
  const columns = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "E-mail",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Company",
        accessor: "company",
      },
    ],
    []
  );
  return (
    <div>
      <div className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
        <div className="mb-4 flex items-center justify-between px-2 text-lg font-medium text-gray-600 dark:text-gray-100">
          <div className="">Members</div>
          <div className="flex space-x-4">
            <div className="relative ">
              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <MagnifyingGlass className="mr-2 h-5 w-5 text-gray-500" />
              </span>
              <Input placeholder="Search" />
            </div>
          </div>
        </div>
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Members;

Members.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
