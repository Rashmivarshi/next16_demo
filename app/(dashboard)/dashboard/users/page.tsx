import Link from "next/link";

const Users = () => {
  return (
    <div>
      <h1>Users Page:</h1>
      <Link href="/dashboard/users/1">User 1</Link>
      <br />
      <Link href="/dashboard/users/2">User 2</Link>
      <br />
      <Link href="/dashboard/users/3">User 3</Link>
      <br />
      <Link href="/dashboard/users/4">User 4</Link>
    </div>
  );
};

export default Users;
